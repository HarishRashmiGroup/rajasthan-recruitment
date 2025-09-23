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
        <Box display={{ base: "block", md: "none" }}>
          <AdSenseAd
            slot="4568995773"
            format="fluid"
            layoutKey="-fu-2i-17-2d+rw"
          />
        </Box>
      </>
    ))}
  </Grid>
);

export default JobList;
