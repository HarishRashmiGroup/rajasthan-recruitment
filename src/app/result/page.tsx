import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';
import JobList from '@/components/job/job-list';
import SidebarAd from '@/components/job/sidebar-ad';
import LinkWithLoader from '@/components/LinkWithLoader';
import { getAllJobs } from '@/lib/api/job';
import { TabsNavigation } from '@/components/ui/tab-navigation';

// export const dynamic = 'force-static'; 

export default async function JobsPage() {
  const jobs = await getAllJobs();

  return (
    <Box p={{ base: 2, md: 4 }}>
      <Box mx="auto" position="relative" pb={12}>
        <Box
          zIndex={98}
          position="sticky"
          top={'73px'}
          mb={6}
        >
          <TabsNavigation />
        </Box>
        <Heading
          as="h1"
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          color="#5d93fe"
        >
          Latest Government Job Notifications {new Date().getFullYear()} - Apply Online
        </Heading>

        <Stack
          mb={12}
          spaceX={4}
          w="full"
          position="relative"
          direction={{ base: 'column', md: 'row' }}
        >
          <JobList jobs={jobs} />
          <SidebarAd />
        </Stack>

        <Box position="absolute" w="full" display="flex" justifyContent="center" bottom={3}>
          <Box
            border="2px solid #5d93fe"
            borderRadius="lg"
            _hover={{ bg: '#DEE9FF', cursor: 'pointer' }}
          >
            <LinkWithLoader href="/job">
              <Box p={2} display="flex" alignItems="center" gap={2}>
                <Text color="#5d93fe">View More</Text>
                <ChevronDownIcon size={20} color="#5d93fe" />
              </Box>
            </LinkWithLoader>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
