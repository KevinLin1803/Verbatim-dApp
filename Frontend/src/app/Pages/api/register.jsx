const connectToDatabase = require('../../../../Database/mongoDB.jsx');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const db = await connectToDatabase();

      const { name, email, password } = req.body;
      const usersCollection = db.collection('users');

      // Insert the new user into the users collection
      const result = await usersCollection.insertOne({
        name,
        email,
        password,
      });

      res.status(201).json({ success: true, userId: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error registering user' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
