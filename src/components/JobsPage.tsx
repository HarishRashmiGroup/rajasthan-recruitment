import React from 'react';
import {
    Box,
    Heading,
    Stack,
    Image,
    Grid,
    Text,
} from '@chakra-ui/react';

import type { Job } from '../types';
import JobCard from './JobCard';
import LinkWithLoader from './LinkWithLoader';
import { ChevronDownIcon } from 'lucide-react';

const jobsData: Job[] = [
    {
        id: 18,
        title: "RSMSSB REET Mains 2025: 7759 3rd Grade Teacher Vacancies for Level 1 & 2",
        slug: "rsmssb-reet-mains-2025-teacher-recruitment",
        officialSiteUrl: "https://sso.rajasthan.gov.in/signin",
        logo: "https://rpsc.rajasthan.gov.in/Images/RPSC_Logo.png",
        notificationDate: "July 17, 2025",
        posts: 7759,
        level: "State",
        examDate: "January 17-21, 2026 (Tentative)"
    },
    {
        id: 17,
        title: "RPSC – Sub-Inspector (SI) & Platoon Commander Recruitment 2025",
        slug: "rpsc-sub-inspector-platoon-commander-2025",
        officialSiteUrl: "https://sso.rajasthan.gov.in/signin",
        logo: "https://rpsc.rajasthan.gov.in/Images/RPSC_Logo.png",
        notificationDate: "July 17, 2025",
        registrationStartDate: "August 10, 2025",
        registrationEndDate: "September 8, 2025",
        posts: 1015,
        level: "State – Group B (Gazetted Officer)",
        examDate: "Written Exam: November 2025 (Tentative)"
    },
    {
        id: 16,
        title: "RSSB – Lab Attendant Recruitment 2025",
        slug: "rssb-lab-attendant-recruitment-2025",
        officialSiteUrl: "https://rssb.rajasthan.gov.in/",
        logo: "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
        notificationDate: "July 11, 2025",
        registrationStartDate: "July 11, 2025",
        registrationEndDate: "August 9, 2025",
        posts: 54,
        level: "State – Group D (Level 1)",
        examDate: "Written Exam: September 2025 (Tentative)"
    },
    {
        id: 12,
        title: "NWR – Sports Quota Recruitment 2025",
        slug: "north-western-railway-nwr-sports-quota-recruitment-2025",
        officialSiteUrl: "https://www.rrcjaipur.in/",
        logo: "https://www.rrcjaipur.in/images/logo.png",
        notificationDate: "July 11, 2025",
        registrationStartDate: "July 11, 2025",
        registrationEndDate: "August 10, 2025",
        posts: 54,
        level: "Central – Group C",
        examDate: "Trials/Interview: August 20–25, 2025"
    }
    , {
        id: 1,
        title: "RSMSSB – Village Development Officer (VDO) 2025",
        slug: "rajasthan-rssb-vdo-recruitment-2025-guide",
        officialSiteUrl: "https://rssb.rajasthan.gov.in/",
        logo: "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
        registrationStartDate: "June 19, 2025",
        notificationDate: "June 19, 2025",
        posts: 850,
        level: 'State – Group C',
        examDate: "Tentative Aug 31, 2025",
        registrationEndDate: "July 18, 2025",
    },
    {
        id: 14,
        title: "CURAJ Recruitment 2025: Apply for Professors, Associate & Assistant Professors",
        posts: 7,
        slug: "curaj-teaching-recruitment-2025",
        officialSiteUrl: "https://www.curaj.ac.in",
        logo: "https://th.bing.com/th/id/OSK.c854a1a56084d3fc19a6719b113af6db?w=80&h=80&r=0&o=6&cb=B&pid=23.1",
        level: "State",
        registrationEndDate: "11 August 2025, 11:59 PM"
    },
    {
        id: 2,
        title: "RPSC – School Lecturer (School Education) 2024",
        posts: 2202,
        slug: "rpsc-school-lecturer-2024-apply-online",
        officialSiteUrl: "https://rpsc.rajasthan.gov.in/advertisements?Pie=332",
        logo: "https://rpsc.rajasthan.gov.in/Images/RPSC_Logo.png",
        notificationDate: "Late 2024",
        level: "State Grade A/B",
        examDate: "June 23 – July 4, 2025",
    },
    {
        id: 3,
        title: "RSMSSB – Group D (Class IV) 2025",
        posts: 5453,
        level: "State Group D",
        notificationDate: "Dec 12, 2024",
        slug: "rsmssb-group-d-recruitment-2025",
        officialSiteUrl: "https://sso.rajasthan.gov.in/",
        logo: "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
        registrationStartDate: "Mar 21, 2025",
        examDate: "As per RSMSSB calendar",
        registrationEndDate: "Apr 19, 2025",
    },
    {
        id: 4,
        title: "Rajasthan High Court – Peon/Class-IV 2025",
        posts: 5670,
        notificationDate: "~June 2025",
        slug: "rajasthan-high-court-peon-class-iv-2025",
        officialSiteUrl: "https://hcraj.nic.in/hcraj/recruitment_detail.php?id=NTU=",
        logo: "https://hcraj.nic.in/hcraj/img/logo12102023.png",
        registrationStartDate: "Open now",
        examDate: "TBA",
        level: "State Group D",
        registrationEndDate: "July 26–27, 2025",
    },
    {
        id: 7,
        title: "RSMSSB – Conductor Recruitment 2025",
        slug: "rsmssb-conductor-recruitment-2025-apply-online",
        officialSiteUrl: "https://rsmssb.rajasthan.gov.in/",
        posts: 500,
        logo: "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
        examDate: "TBA",
        registrationEndDate: "April 2025",
        level: "State"
    },
    {
        id: 9,
        title: "RSMSSB – Librarian Grade III 2025",
        posts: 548,
        slug: "rsmssb-librarian-grade-iii-2025",
        officialSiteUrl: "https://rsmssb.rajasthan.gov.in/",
        logo: "https://rsmssb.rajasthan.gov.in/Static/website/images/logo_img.png",
        examDate: "TBA",
        notificationDate: "March 28, 2025",
        level: "State",
        registrationEndDate: "Mar 2025"
    }
];

const JobsPage: React.FC = () => {

    return (
        <Box >
            <Box mx="auto" position={'relative'} px={0} pb={12}>
                <Heading as={'h1'} fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} color={'#5d93fe'}>Latest Government Job Notifications  {new Date().getFullYear()} - Apply Online</Heading>
                <Stack mb={12} spaceX={4} w={'full'} position={'relative'} direction={{ base: 'column', md: 'row' }}>
                    <Grid
                        gap={4}
                        templateColumns={{ md: '1fr', lg: 'repeat(2, 1fr)' }}
                        width="full"
                    >
                        {jobsData.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                            />
                        ))}
                    </Grid>
                    <Box minW={'120px'} maxW={'250px'} display={{ base: 'none', md: 'block' }} position={'relative'}>
                        <Image borderRadius={'md'} zIndex={2} position={{ base: 'relative', md: 'sticky' }} top={{ base: 'auto', md: '150px' }} alt='Advertisement' src='/rr_adv.png'></Image>
                    </Box>
                </Stack>
                <Box position={'absolute'} w={'full'} display={'flex'} justifyContent={'center'} bottom={3}>
                    <Box border={'2px solid #5d93fe'} borderRadius={'lg'} _hover={{ bg: '#DEE9FF', cursor: 'pointer' }}>
                        <LinkWithLoader href='/jobs'>
                            <Box p={2} display={'flex'} alignItems={'center'} gap={2}>
                                <Text color={'#5d93fe'}>View More</Text>
                                <ChevronDownIcon size={20} color='#5d93fe' />
                            </Box>
                        </LinkWithLoader>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default JobsPage;
