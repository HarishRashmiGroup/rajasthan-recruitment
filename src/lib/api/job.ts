import jobsData from "../data/job-data";

export async function getAllJobs() {
  try {
    return jobsData;
  } catch (error) {
    console.error("Jobs not found:", error);
    return [];
  }
}
