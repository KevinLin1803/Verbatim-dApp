import { namespaceWrapper } from "@_koii/namespace-wrapper";
import puppeteer from "puppeteer";
import { MongoClient, ServerApiVersion } from 'mongodb';

async function getUserPreferences() {
  let client;

  try {
    const uri = "mongodb+srv://stuiiAdmin:VgONY17RVxsD6n0i@stuiidb.tcrk2.mongodb.net/?retryWrites=true&w=majority&appName=stuiiDb";
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    await client.connect();
    const database = client.db("stuiiDB");
    const usersCollection = database.collection("users");

    // Fetch the user's job preferences
    const users = await usersCollection.find({}).toArray();
    return users.map(user => ({
      jobTitle: user.jobTitle,
      location: user.location,
      user: user.name
    }));

  } catch (error) {
    console.error("Error fetching user preferences:", error);
    return null;
  } finally {
    if (client) {
      await client.close();
    }
  }
}


export async function task(roundNumber) {
  // Run your task and store the proofs to be submitted for auditing
  // The submission of the proofs is done in the submission function
  let client;
  let browser;

  try {
    console.log("Started Task", new Date(), "TEST")

    console.log(`EXECUTE TASK FOR ROUND ${roundNumber}`);

    const jobData = []
    
    // Launch Puppeteer
    browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Establish MongoDB connection
    const uri = "mongodb+srv://stuiiAdmin:VgONY17RVxsD6n0i@stuiidb.tcrk2.mongodb.net/?retryWrites=true&w=majority&appName=stuiiDb";
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    const userPreferences = await getUserPreferences()

    await client.connect();
    const database = client.db("stuiiDB"); // Replace with your database name
    const collection = database.collection("scrapedJobs"); // Replace with your collection name

    for (const { jobTitle, location, user} of userPreferences) {
      // Max page limit we search through is 5
      let currentPage = 0;
      const maxPages = 5;
      let users_jobs = []

      console.log(jobTitle, location, user)
      const baseURL = `https://www.indeed.com/jobs?q=${encodeURIComponent(jobTitle)}&l=${encodeURIComponent(location)}`;

      //Not sure if these paginations work?
      while (currentPage < maxPages) {
        const searchURL = `${baseURL}&start=${currentPage * 10}`; // 10 jobs per page
        console.log(`Scraping jobs from: ${searchURL}`);

        try {
          // Navigate to the search URL
          await page.goto(searchURL, { waitUntil: 'networkidle2' });
          
          const selector = ".jobTitle"

          // Wait for job listings to load and check if the page contains job listings
          await page.waitForSelector(selector, { timeout: 10000 }); // Set a timeout for waiting

          // Extract job data
          const jobs = await page.$$eval(selector, (elements, currentSearchURL) => 
            elements.map(element => {
              return {
                title: element.innerText,
                source: "Indeed",
                link: element.href || currentSearchURL // Use currentSearchURL passed as argument
              };
            }), searchURL // Pass searchURL as an argument
          );
      
          users_jobs.push(...jobs);
          console.log(`Found ${jobs.length} jobs on page ${currentPage + 1}`);
        } catch (error) {
          console.error(`Error navigating to ${searchURL}:`, error.message);
        }

        currentPage++;
      }

      const jobEntry = {
        user: user,
        jobs: users_jobs // Wrap the jobData array under the 'jobs' key
      }

      console.log(jobEntry)

      // Store the scraped job data
      jobData.push(jobEntry);
    }

    // Insert the job data into the MongoDB collection
    if (jobData.length > 0) {
      const insertResult = await collection.insertOne({jobs: jobData});
      console.log(`Inserted ${insertResult.insertedCount} jobs into the database`);
    } else {
      console.log("No jobs found to insert.");
    }
    
    await namespaceWrapper.storeSet("jobData", jobData);
  } catch (error) {
    console.error("EXECUTE TASK ERROR:", error);
  } finally {
  // Ensure the MongoDB client and Puppeteer browser are closed
    if (client) {
      await client.close(); // Close MongoDB connection
    }

    await browser.close(); // Close the Puppeteer browser
  }
}
