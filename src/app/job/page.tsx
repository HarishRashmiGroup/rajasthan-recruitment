import { Box, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react';
export interface Job {
    id: string;
    slug: string;
    title: string;
    department: string;
    summary: string;
    lastDate: string;
}


export const revalidate = 60;

// async function getJobs(): Promise<Job[]> {
//     const res = await fetch(`${process.env.API_URL}/jobs`, {
//         next: { revalidate: 60 },
//     });

//     if (!res.ok) throw new Error('Failed to fetch jobs');

//     return res.json();
// }

export default async function JobListPage() {
    const jobs = [{ id: '2', slug: 'harish', title: 'jfkdj', department: "djfd", summary: "JKJ", lastDate: "jfd" }];
    // || await getJobs();

    return (
        <Box p={6} maxW="7xl" mx="auto">
            <Heading size="lg" mb={6}>Latest Job Vacancies</Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

function JobCard({ job }: { job: Job }) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Stack >
                <Heading size="md">{job.title}</Heading>
                <Text fontSize="sm" color="gray.600">{job.department}</Text>
                <Text maxLines={3}>{job.summary}</Text>
                <Text fontSize="xs" color="gray.500">Last date: {job.lastDate}</Text>
            </Stack>
        </Box>
    );
}
