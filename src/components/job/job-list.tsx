import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import type { Job } from "../../types";
import JobCard from "./job-card";
import AdSenseAd from "../ui/google-sidebar-ads";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <Grid
    gap={4}
    templateColumns={{ md: "1fr", lg: "repeat(2, 1fr)" }}
    width="full"
  >
    {jobs.map((job) => (
      <>
        <JobCard key={job.id} job={job} />
        <Box w={"full"} h={"auto"} display={{ base: "block", lg: "none" }}>
          <AdSenseAd/>
        </Box>
      </>
    ))}
  </Grid>
);

export default JobList;
