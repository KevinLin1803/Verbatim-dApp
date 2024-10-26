import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function submission(roundNumber) {
  /**
   * Submit the task proofs for auditing
   * Must return a string of max 512 bytes to be submitted on chain
   */


  try {
    console.log("Started Submission", new Date(), "EZ TESTING")

    console.log(`MAKE SUBMISSION FOR ROUND ${roundNumber}`);

    const jobData = await namespaceWrapper.storeGet("jobData");

    return jobData;
  } catch (error) {
    console.error("MAKE SUBMISSION ERROR:", error);
  }
}
