import type { Metadata } from "next";
import BlogList from "@/components/blog/blog-list";
import JobList from "@/components/job/job-list";
import SidebarAd from "@/components/job/sidebar-ad";
import LinkWithLoader from "@/components/LinkWithLoader";
import { LandingMotivation } from "@/components/ui/landing-motivation";
import { TabsNavigation } from "@/components/ui/tab-navigation";
import { getAllJobs } from "@/lib/api/job";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import AdSenseAd from "@/components/ui/google-sidebar-ads";

export const metadata: Metadata = {
  title: `Rajasthan Govt Jobs ${new Date().getFullYear()} - Latest Sarkari Naukri, Results, Admit Card | Rajasthan Recruitment`,
  description:
    "Get the latest Rajasthan government job notifications, exam results, admit cards, answer keys, and more. Stay updated with Rajasthan Recruitment for all Sarkari Naukri updates, online forms, and career opportunities in Rajasthan.",
  keywords: [
    "Rajasthan government jobs",
    "Sarkari Naukri Rajasthan",
    "Rajasthan job notifications",
    "Rajasthan exam results",
    "Admit card Rajasthan",
    "Rajasathan Recruitment Portal",
    "Sarkari Naukri",
    "Answer key Rajasthan",
    "Latest jobs Rajasthan",
    `Rajasthan Recruitment ${new Date().getFullYear()}`,
  ],
  alternates: {
    canonical: "https://rajasthanrecruitment.in/",
  },
  openGraph: {
    title: `Rajasthan Govt Jobs ${new Date().getFullYear()} - Latest Sarkari Naukri, Results, Admit Card | Rajasthan Recruitment`,
    description:
      "Get the latest Rajasthan government job notifications, exam results, admit cards, answer keys, and more. Stay updated with Rajasthan Recruitment for all Sarkari Naukri updates, online forms, and career opportunities in Rajasthan.",
    url: "https://rajasthanrecruitment.in/",
    siteName: "Rajasthan Recruitment",
    images: [
      {
        url: "https://rajasthanrecruitment.in/rr-home.jpg",
        width: 1200,
        height: 630,
        alt: "Rajasthan Recruitment Portal Home Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Rajasthan Govt Jobs ${new Date().getFullYear()} - Latest Sarkari Naukri, Results, Admit Card | Rajasthan Recruitment`,
    description:
      "Get the latest Rajasthan government job notifications, exam results, admit cards, answer keys, and more. Stay updated with Rajasthan Recruitment for all Sarkari Naukri updates, online forms, and career opportunities in Rajasthan.",
    images: ["https://rajasthanrecruitment.in/rr-home.jpg"],
  },
};

async function App() {
  const jobs = await getAllJobs();
  return (
    <Box
      className="App"
      minH="100vh"
      p={{ sm: 2, md: 4 }}
      position={"relative"}
    >
      <LandingMotivation />
      <Box position={"relative"} mb={8}>
        <Box zIndex={98} position="sticky" top={"73px"}>
          <TabsNavigation />
        </Box>
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="#5d93fe"
          mt={6}
        >
          Latest Government Job Notifications {new Date().getFullYear()} - Apply
          Online
        </Heading>
        <Stack
          mb={12}
          spaceX={4}
          w="full"
          position="relative"
          direction={{ base: "column", md: "row" }}
        >
          <JobList jobs={jobs} />
          <SidebarAd />
        </Stack>
        <Box
          w="full"
          h={"42px"}
          display="flex"
          justifyContent="center"
          bottom={-12}
        >
          <Box
            border="2px solid #5d93fe"
            borderRadius="lg"
            position="absolute"
            _hover={{
              borderColor: "#DEE9FF",
              bg: "#DEE9FF",
              cursor: "pointer",
            }}
          >
            <LinkWithLoader href="/job">
              <Box p={2} display="flex" alignItems="center" gap={2}>
                <Text color="#5d93fe">Explore More Jobs</Text>
                <ChevronDownIcon size={20} color="#5d93fe" />
              </Box>
            </LinkWithLoader>
          </Box>
        </Box>
      </Box>
      <BlogList />
      <AdSenseAd slot="5458108440" format="auto" />
    </Box>
  );
}

export default App;
