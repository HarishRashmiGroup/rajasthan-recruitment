import React from 'react';
import { Grid } from '@chakra-ui/react';
import type { Job } from '../../types';
import JobCard from './job-card';

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <Grid
    gap={4}
    templateColumns={{ md: '1fr', lg: 'repeat(2, 1fr)' }}
    width="full"
  >
    {jobs.map(job => (
      <JobCard key={job.id} job={job} />
    ))}
  </Grid>
);

export default JobList;
