import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { Job } from "../../types";
import JobCard from "./job-card";
import InFeedAd from "../ui/google-in-feed-ads";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <Grid
    gap={4}
    templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
    width="full"
  >
    {jobs.map((job, idx) => (
      <React.Fragment key={`${job.id}-${idx}`}>
        <GridItem>
          <JobCard job={job} />
        </GridItem>

        {(idx + 1) % 3 === 0 && (
          <GridItem colSpan={1} display={{ base: "block", lg: "none" }}>
            <Box w="100%" minW={"270px"}>
              <InFeedAd />
            </Box>
          </GridItem>
        )}
      </React.Fragment>
    ))}
  </Grid>
);

export default JobList;
