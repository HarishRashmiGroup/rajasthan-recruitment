import { notFound } from 'next/navigation'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { Box, Flex, Grid, Heading, Text, Link, Button, Stack, Avatar } from '@chakra-ui/react'
import { Clock, Calendar, Tag, Share2 } from 'lucide-react'
import LinkWithLoader from '@/components/LinkWithLoader'
import type { Metadata } from 'next'

// Types
interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  featuredImage: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  publishedAt: string
  updatedAt: string
  readTime: number
  views: number
  category: {
    name: string
    slug: string
  }
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
}

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  publishedAt: string
  readTime: number
  category: string
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// API Service Functions - Mimicking server-side API calls
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))

    // In production, this would be:
    // const response = await fetch(`${process.env.API_URL}/api/posts/${slug}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.API_TOKEN}` // if needed
    //   },
    //   next: { revalidate: 3600 } // Revalidate every hour
    // })
    // 
    // if (!response.ok) {
    //   if (response.status === 404) return null
    //   throw new Error(`Failed to fetch post: ${response.status}`)
    // }
    // 
    // return response.json()

    // Mock database/API response
    const mockPosts: Record<string, BlogPost> =
    {
      "rpsc-assistant-agriculture-engineer-recruitment-2025": {
        "id": "19",
        "title": "RPSC Assistant Agriculture Engineer Recruitment 2025",
        "slug": "rpsc-assistant-agriculture-engineer-recruitment-2025",
        "excerpt": "RPSC has released the 2025 notification for 281 Assistant Agriculture Engineer posts in the Rajasthan Agriculture Department. Eligible candidates can apply online from 28 July to 26 August 2025. Check vacancy details, eligibility, syllabus, and application process here.",
        "content": `
      
        <section style="margin-bottom:40px;">
          <p style="margin:0 0 25px 0;color:#2d3748;">The Rajasthan Public Service Commission (RPSC) has officially announced the Assistant Agriculture Engineer (AAE) Recruitment 2025 through Advt. No. 03/2025-26. A total of 281 vacancies have been released for qualified Agricultural Engineering graduates under the Rajasthan Agriculture Department. The online application process will be open from 28 July to 26 August 2025. The selection will be based on a written examination without an interview. This is an excellent opportunity for engineering graduates looking to secure a government job in the agriculture sector. Interested candidates are advised to read the full notification, check the eligibility criteria, and apply within the stipulated timeline.</p>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Vacancy breakdown</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Category</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Total Posts</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>For Women</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">UR (General)</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">71</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">20 + 8(DW)</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">32</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">9 + 4(DW)</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">ST</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">24</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">7 + 3(DW)</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">42</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">12 + 4(DW)</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">MBC</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">14</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">10 + 3(DW)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Important Dates</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Entity</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Dates</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Notification released</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">July 17, 2025</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;">Online Registration Opens</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">July 28, 2025</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Last Date to Apply</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">August 26, 2025</td>
                  </tr>
                  <tr >
                    <td style="padding:14px 16px;color:#4a5568;font-weight:500;">Pay Level</td>
                    <td style="padding:14px 16px;color:#2d3748;">Pay Matrix Level-14 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Eligibility Criteria</h2>
            
            <div style="display:grid;gap:16px;">
              <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
                <ul style="margin:0;padding:0;list-style:none;">
                  <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
                    <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
                  <b>Age Criteria:</b> 20–40 years (as of 1 Jan 2026); SC/ST/OBC/MBC up to 5–10 years, widows/divorcees & PwD – special relaxations per state norms.
                  </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
                    <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
                  <b>Educational Qualification:</b>Bachelor’s degree in Agricultural Engineering (final-year students may apply if results declared before joining)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;
                padding-bottom:8px;border-bottom:2px solid #5d93fe;">Exam Pattern & Process</h2>
            
            <div style="display:grid;gap:16px;">
              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">1</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Stage</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Single written examination (no interview).</p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">2</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Format</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    150 objective‑type questions in 2½ hours (150 marks)
                  </p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">3</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Marking Scheme</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    +1 for correct answers; penalty of –1/3 for each wrong answer</p>
                </div>
              </div>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Application Fees</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Category</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Fee</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General / OBC / EWS</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹600</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC / ST / PwD</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹400</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Correction Charges (if applicable)</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">How many vacancies are available?</summary>
      <p style="margin:0;color:#4a5568;">RPSC has released a total of 281 vacancies for the post of Assistant Agriculture Engineer (AAE) under the Rajasthan Agriculture Department.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Who can apply for the AAE post?</summary>
      <p style="margin:0;color:#4a5568;">Candidates with a Bachelor's degree in Agricultural Engineering and proficiency in Hindi and knowledge of Rajasthan culture are eligible to apply.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What are the eligibility criteria?</summary>
      <p style="margin:0;color:#4a5568;">Applicants must hold a B.Tech/B.E. in Agricultural Engineering. The age limit is 20 to 40 years as on 01.01.2026. Age relaxation is applicable as per Rajasthan government norms.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #d53f8c;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the selection process?</summary>
      <p style="margin:0;color:#4a5568;">The selection process consists of a single written examination. There is no interview. Final selection is based solely on the marks obtained in the exam.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the exam pattern?</summary>
      <p style="margin:0;color:#4a5568;">The written exam includes 150 multiple-choice questions (MCQs) covering technical subjects and general knowledge. Each correct answer awards 1 mark. 1/3 mark is deducted for each wrong answer.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #2f855a;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can candidates from other states apply?</summary>
      <p style="margin:0;color:#4a5568;">Yes, candidates from other states can apply, but they will be considered under the General (Unreserved) category only and must fulfill all eligibility conditions.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #e53e3e;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is there any interview or skill test?</summary>
      <p style="margin:0;color:#4a5568;">No, there is no interview or skill test. Selection will be based solely on the written examination marks.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #dd6b20;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the application fee?</summary>
      <p style="margin:0;color:#4a5568;">Application fee is ₹600 for General/OBC (Creamy Layer)/EWS and ₹400 for SC/ST/OBC (Non-Creamy Layer)/PwD. Correction charges, if applicable, are ₹500.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #3182ce;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the salary for AAE posts?</summary>
      <p style="margin:0;color:#4a5568;">Selected candidates will be appointed under Pay Matrix Level 14 as per the 7th Pay Commission, with allowances as applicable by the Rajasthan government.</p>
    </details>

  </div>
                    </section>`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/RPSC_Assistant_Agriculture_Engineer_Recruitment_2025.png-1753071870025",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-21T08:00:00Z",
        "updatedAt": "2025-07-21T12:00:00Z",
        "readTime": 4,
        "views": 10400,
        "tags": [
          "RPSC Recruitment 2025",
          "Assistant Agriculture Engineer Vacancy",
          "Rajasthan Agriculture Department Jobs",
          "B.Tech Agriculture Engineer Jobs",
          "RPSC AAE Notification",
          "Sarkari Naukri Rajasthan",
          "RPSC Online Form 2025",
          "Govt Jobs for Agricultural Engineers",
          "Rajasthan Engineer Vacancy",
          "RPSC AAE Exam Pattern"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "RPSC Assistant Agriculture Engineer Recruitment 2025 – 281 Vacancies",
        "seoDescription": "RPSC invites applications for 281 Assistant Agriculture Engineer posts in 2025. Check eligibility, age, application dates, syllabus, and apply online.",
        "seoKeywords": [
          "RPSC AAE Recruitment 2025",
          "Assistant Agriculture Engineer Rajasthan",
          "RPSC Agriculture Engineer Vacancy",
          "RPSC Jobs 2025",
          "B.Tech Agriculture Govt Jobs",
          "Rajasthan AAE Notification 2025"
        ]
      },
      "rsmssb-reet-mains-2025-teacher-recruitment": {
        "id": "18",
        "title": "RSMSSB REET Mains 2025: 7759 3rd Grade Teacher Vacancies for Level 1 & 2 – Apply Online",
        "slug": "rsmssb-reet-mains-2025-teacher-recruitment",
        "excerpt": "RSMSSB has announced 7,759 vacancies for 3rd Grade Teachers under REET Mains 2025. The recruitment covers Level 1 (Primary) and Level 2 (Upper Primary) posts across various subjects. Eligible candidates with REET qualification can apply online soon. Get complete details on vacancies, eligibility, syllabus, exam dates, and more.",
        "content": `
        <section style="margin-bottom:40px;">
          <p style="margin:0 0 25px 0;color:#2d3748;">Only candidates who qualified REET 2022 are eligible to apply. The selection will be based on the REET Mains written exam and document verification. The notification was issued on 17 July 2025, and application dates will be announced soon. Detailed vacancy, subject-wise posts, and eligibility criteria are available in the official release. This is a key opportunity for aspiring government teachers in Rajasthan.</p>  
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Vacancy breakdown</h2>
            <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Level 1 – Primary Teacher</h3>
            <div style="overflow-x:auto;margin-bottom:20px;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Department</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>General</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>TSP</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General Education</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4,422</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">27</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sanskrit Education</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4,500</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">500</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Elementary Education</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">187</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Level 2 – Upper Primary Teacher</h3>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Subject</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>General</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Maths & Science</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">1,043</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sanskrit</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">389</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Social Science</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">296</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">English</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">221</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Hindi</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">174</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Important Dates</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Entity</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Dates</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Notification released</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">July 17, 2025</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Application Window</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>August 2025</b></td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Written Exam</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">January 17-21, 2026</td>
                  </tr>
                  <tr >
                    <td style="padding:14px 16px;color:#4a5568;font-weight:500;">Pay Level</td>
                    <td style="padding:14px 16px;color:#2d3748;">Level 10; Approx ₹23,700–₹44,300 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Eligibility Criteria</h2>
            
            <div style="display:grid;gap:16px;">
              <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
                <ul style="margin:0;padding:0;list-style:none;">
                  <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
                    <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
                  <b>Age Criteria:</b> 21–40 years (as of 1 Jan 2027); relaxations for reserved categories.
                  </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
                    <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
                  <b>Educational Qualification:</br></b><b>Leve 1:</b> Class 12 + REET Level 1 clearance + D.El.Ed./B.El.Ed./Special Ed.</br>
                  <b>Level 2:</b> Graduation + REET Level 2 clearance + B.Ed/D.El.Ed/Relevant Teaching Diploma.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;
                padding-bottom:8px;border-bottom:2px solid #5d93fe;">Exam Pattern & Process</h2>
            
            <div style="display:grid;gap:16px;">
              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">1</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Written OMR Test</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    150 marks, 150 multiple-choice questions (2½ hours)</p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    <b>Level 1:</b> Topics include Child Development & Pedagogy, Language I & II, Math, EVS</p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    <b>Level 2:</b> Covers same plus specialized sections – either Math & Science or Social Science</p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">2</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Scoring</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Each correct answer = +1
                  </p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Negative marking applied (⅓ marks deducted for incorrect answers or unanswered? Confirm in official notification; level of marking varies) 
                  </p>
                </div>
              </div>

              <div style="display:flex;align-items:flex-start;padding:20px;
                  background:#f8fafc;border-radius:8px;">
                <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
                    color:white;border-radius:50%;display:flex;align-items:center;
                    justify-content:center;font-weight:600;margin-right:16px;">3</div>
                <div>
                  <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Aptitude Test & Interview</h3>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Written exam</p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Merit list based solely on written test</p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Document verification (original certificates, REET, ID proofs)</p>
                  <p style="margin:0;color:#4a5568;position:relative">
                    <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
                    Final appointment and school posting</p>
                </div>
              </div>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Application Fees</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <thead>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Category</b></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Fee</b></td>
                  </tr>
                </thead>
                <tbody>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General / OBC / EWS</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹600</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC / ST / PwD</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹400</td>
                  </tr>
                  <tr style="background:#fafafa;">
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Correction Charges (if applicable)</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style="margin-bottom:40px;">
            <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Frequently Asked Questions</h2>
            
            <div style="display:grid;gap:16px;">

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">How many vacancies are available?</summary>
                <p style="margin:0;color:#4a5568;">RSMSSB has released a total of 7,759 vacancies for 3rd Grade Teachers under REET Mains 2025, including both Level 1 and Level 2 positions.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Who can apply for REET Mains?</summary>
                <p style="margin:0;color:#4a5568;">Only candidates who have qualified REET 2022 with the required cut-off marks are eligible to apply for REET Mains 2025.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What are the eligibility criteria?</summary>
                <p style="margin:0;color:#4a5568;">For Level 1, candidates must have a senior secondary qualification with D.El.Ed/B.El.Ed. For Level 2, graduation with B.Ed or equivalent is required. REET 2022 qualification is mandatory for both levels.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #d53f8c;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the selection process?</summary>
                <p style="margin:0;color:#4a5568;">The selection is based on performance in the REET Mains written exam. The final merit list is prepared based on marks obtained in this exam only.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the exam pattern?</summary>
                <p style="margin:0;color:#4a5568;">The REET Mains exam consists of multiple-choice questions (MCQs) including subject knowledge, pedagogy, general knowledge, and current affairs. Negative marking applies as per the official notice.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #2f855a;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can candidates from other states apply?</summary>
                <p style="margin:0;color:#4a5568;">Yes, but candidates from other states will be considered under the General category only and must fulfill all other eligibility conditions.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #e53e3e;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is there any interview or skill test?</summary>
                <p style="margin:0;color:#4a5568;">No. There is no interview or skill test. Selection is purely based on marks scored in the REET Mains written examination.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #dd6b20;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the application fee?</summary>
                <p style="margin:0;color:#4a5568;">The application fee is ₹600 for General/OBC (CL)/EWS candidates and ₹400 for SC/ST/OBC (NCL)/PwD candidates. Correction charges, if any, are ₹300.</p>
              </details>

              <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #3182ce;">
                <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the salary for 3rd Grade Teachers?</summary>
                <p style="margin:0;color:#4a5568;">Selected candidates will be paid under Pay Matrix Level 10 with a fixed probationary period salary (approx. ₹23,700/month initially), followed by regular pay after confirmation.</p>
              </details>

            </div>
          </section>
        `,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/RSMSSB_REET_Mains_2025.png-1752906107938",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-18T08:00:00Z",
        "updatedAt": "2025-07-18T12:00:00Z",
        "readTime": 5,
        "views": 10400,
        "tags": [
          "REET Mains 2025",
          "RSMSSB Teacher Vacancy",
          "3rd Grade Teacher Recruitment",
          "Level 1 Teacher Jobs",
          "Level 2 Teacher Jobs",
          "Rajasthan Govt Teacher Vacancy",
          "Sarkari Naukri Rajasthan",
          "Teacher Eligibility Test Rajasthan",
          "RSMSSB REET Notification",
          "Primary & Upper Primary Teacher Jobs"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "RSMSSB REET Mains 2025: 7759 3rd Grade Teacher Vacancies for Level 1 & 2 – Apply Online",
        "seoDescription": "RSMSSB has released the REET Mains 2025 notification for 7759 3rd Grade Teacher posts across Level 1 (Primary) and Level 2 (Upper Primary). Check vacancy details, eligibility, syllabus, exam dates, and how to apply online.",
        "seoKeywords": [
          "REET Mains 2025",
          "RSMSSB 3rd Grade Teacher Vacancy",
          "Rajasthan Teacher Bharti 2025",
          "Level 1 Teacher Jobs Rajasthan",
          "Level 2 Teacher Vacancy",
          "RSMSSB REET Notification 2025"
        ]
      },
      "rpsc-sub-inspector-platoon-commander-2025": {
        "id": "17",
        "title": "RPSC Sub-Inspector (SI) & Platoon Commander (RAC) 2025",
        "slug": "rpsc-sub-inspector-platoon-commander-2025",
        "excerpt": "RPSC has announced 1,015 posts for Sub‑Inspector and Platoon Commander under the Rajasthan Police & RAC 2025 recruitment. Apply online from August 10 to September 8, and prepare for written tests and physical exams.",
        "content": `<section style="margin-bottom:40px;">
 <p style="margin:0 0 25px 0;color:#2d3748;">The Rajasthan Public Service Commission (RPSC) has officially released the notification for Sub-Inspector (SI) in the Rajasthan Police and Platoon Commander in the Rajasthan Armed Constabulary (RAC) for the year 2025. A total of 1,015 vacancies are open for eligible graduates under this prestigious recruitment drive. The selection process includes a written exam, physical efficiency test (PET), and interview/personality assessment. Candidates can apply online through the RPSC portal from August 10 to September 8, 2025. This is a golden opportunity for aspirants aiming to serve in Rajasthan Police under a Class–II officer rank.</p>  
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Vacancy breakdown</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Post</b></td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Vacancy</b></td>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sub Inspector( AP )</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">896</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Platoon Commander</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">64</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sub Inspector( IB )</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">26</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sub Inspector( Scheduled Area )</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">25</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Sub Inspector( Sahariya )</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Important Dates</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Entity</b></td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Dates</b></td>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Notification released</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">July 17, 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Start</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">August 10, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Close</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">September 08, 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Exam Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;" >November 2025</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Eligibility Criteria</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Age Criteria:</b> 20–25 years as of January 1, 2025; reserved categories get age relaxation per norms (e.g., SC/ST/BC/BC‑NCL/Women: +5–10 years; EWS: +3 years)
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
        <b>Physical Standards:</br></b><b>Men:</b> Height ≥168 cm, Chest 81–86 cm with 5 cm expansion </br>
        <b>Women:</b> Height ≥152 cm (no chest requirement).
        </li>
      </ul>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;
      padding-bottom:8px;border-bottom:2px solid #5d93fe;">Selection Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Written Examination</h3>
        <p style="margin:0;color:#4a5568;position:relative">
          <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
          <b>Two papers:</b> General Hindi (100 MCQs, 200 marks) and General Knowledge & General Science (100 MCQs, 200 marks); each paper 2 hours; marking: +2 per correct, –⅓ per wrong; total = 400 marks</p>
      </p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Physical Measurement Test (PMT) & Physical Efficiency Test (PET)</h3>
        <p style="margin:0;color:#4a5568;position:relative">
          <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
          Both men and women undergo specific races and field events:
        </p>
        <p style="margin:0;color:#4a5568;position:relative">
          <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
          <b>Men:</b> 100 m race (40 marks for ≤14s), long jump (up to 30), chin-ups (up to 30) 
        </p>
        <p style="margin:0;color:#4a5568;position:relative">
          <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
          <b>Women:</b> 100 m race, long jump, and shot-put (4 kg) with similar marks distribution.
        </p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Aptitude Test & Interview</h3>
        <p style="margin:0;color:#4a5568;position:relative">
          <span style="position:absolute;left:-10px;top:8px;width:4px;height:4px;background:#5d93fe;border-radius:50%;"></span>
           The final stage involves psychological/aptitude evaluation and personal interview, followed by document and medical verification </p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Application Fees</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Category</b></td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Fee</b></td>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General & EWS</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹600 </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC/ST/OBC-NCL/PwD/Other</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹400</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Quick Summary</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Features</b></td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>Details</b></td>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Vacancies</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">1,015 </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application window</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Aug 10 – Sep 8, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Exams</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">2 Written Papers → PMT/PET → Interview </td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Pay Scale</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹67,700–₹2,08,700 (Level 11) + allowances</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">How many vacancies are available?</summary>
      <p style="margin:0;color:#4a5568;">RPSC has announced a total of 1,015 vacancies for Sub-Inspector (AP/IB/MBC) and Platoon Commander (RAC) posts.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">When is the application period?</summary>
      <p style="margin:0;color:#4a5568;">The online application process starts from August 10, 2025, and ends on September 8, 2025.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What are the eligibility criteria?</summary>
      <p style="margin:0;color:#4a5568;">Applicants must hold a bachelor's degree from a recognized university. The age limit is 20 to 25 years as on January 1, 2025. Age relaxation applies as per government rules.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #d53f8c;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the selection process?</summary>
      <p style="margin:0;color:#4a5568;">The selection process includes a written examination, a physical measurement & efficiency test (PMT & PET), an aptitude test, and an interview/personality assessment.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the exam pattern?</summary>
      <p style="margin:0;color:#4a5568;">There are two papers: General Hindi and General Knowledge/Science, each carrying 200 marks. The exam includes negative marking of 1/3 mark per incorrect answer.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #2f855a;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What are the physical standards for PET/PMT?</summary>
      <p style="margin:0;color:#4a5568;">
        <strong>Men:</strong> Height ≥ 168 cm; Chest 81–86 cm (5 cm expansion)<br>
        <strong>Women:</strong> Height ≥ 152 cm. No chest requirement.
      </p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #e53e3e;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is there an interview stage?</summary>
      <p style="margin:0;color:#4a5568;">Yes. Candidates who qualify the written and physical tests are called for an interview/personality test carrying 50 marks, followed by document and medical verification.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #dd6b20;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the application fee?</summary>
      <p style="margin:0;color:#4a5568;">₹600 for General/OBC (Creamy Layer)/EWS and ₹400 for SC/ST/OBC (Non-Creamy Layer)/PwD candidates.</p>
    </details>

    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #3182ce;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the salary and pay scale?</summary>
      <p style="margin:0;color:#4a5568;">The pay scale is Level 11 (₹67,700–₹2,08,700) with additional allowances such as DA, HRA, and other benefits applicable to Class–II Rajasthan government officers.</p>
    </details>

  </div>
</section>`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/RPSC_SI_%26_Platoon_Commander_Recruitment_2025.png-1752830550077",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-18T08:00:00Z",
        "updatedAt": "2025-07-18T12:00:00Z",
        "readTime": 5,
        "views": 10400,
        "tags": [
          "RPSC Recruitment 2025",
          "Sub Inspector Jobs Rajasthan",
          "Rajasthan Police Vacancy",
          "RAC Platoon Commander",
          "Graduate Govt Jobs",
          "Sarkari Naukri Rajasthan",
          "Rajasthan Government Jobs",
          "RPSC SI Notification 2025",
          "State Police Jobs",
          "Defense Jobs 2025"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "RPSC SI & Platoon Commander Recruitment 2025 – 1015 Rajasthan Police Vacancies",
        "seoDescription": "Apply online for RPSC Sub-Inspector & Platoon Commander Recruitment 2025. Rajasthan Police has announced 1015 vacancies. Check eligibility, salary, exam pattern, and apply between August 10 to September 8, 2025.",
        "seoKeywords": [
          "RPSC SI Recruitment 2025",
          "Rajasthan Police Jobs",
          "Rajasthan Platoon Commander Vacancy",
          "Sub Inspector Govt Jobs",
          "RPSC New Vacancy",
          "Rajasthan Police SI 2025"
        ]
      },
      "rssb-lab-attendant-recruitment-2025": {
        "id": "16",
        "title": "RSSB Lab Attendant Recruitment 2025 – Apply for 54 Posts in PHED",
        "slug": "rssb-lab-attendant-recruitment-2025",
        "excerpt": "Rajasthan Staff Selection Board (RSSB) has announced the 2025 Lab Attendant recruitment under the Public Health Engineering Department (PHED). A total of 54 vacancies are available for candidates with minimum 10th pass qualifications. Apply online from July 11 to August 9, 2025.",
        "content": `<section style="margin-bottom:40px;">
 <p style="margin:0 0 25px 0;color:#2d3748;">The Rajasthan Staff Selection Board (RSSB) has released the official notification for Lab Attendant Recruitment 2025 under the Public Health Engineering Department (PHED). A total of 54 vacancies are open for candidates who have passed 10th standard and possess knowledge of Hindi in the Devanagari script and Rajasthan’s culture. This recruitment provides a valuable opportunity for entry-level aspirants to secure a government job in the technical support sector. Interested candidates can apply online from July 11, 2025, through the official portal. The last date for submission is August 9, 2025. Selection will be based on a written examination, followed by document verification. Eligible individuals are encouraged to apply early and prepare thoroughly.
</p>
<h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">RSSB Lab Attendant Recruitment 2025 – Overview</h2>
  <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Posts:</b> 54 Lab Attendant positions, including 48 Non‑TSP and 6 TSP‑area seats 
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Department:</b> Public Health Engineering, under the Rajasthan Staff Selection Board (RSSB/RSMSSB)
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Notification Released:</b> 10–11 July 2025
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Apply Online:</b> Opens 11 July 2025, closes 9 August 2025 
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Exam Date:</b> 	Post‑August (TBA)
        </li>
      </ul>
    </div>
    
</section>
<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Vacancy & Category Details</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;"><b>Category</b></td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;"><b>No. of Posts</b></td>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">28 seats</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">EWS</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4 seats</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">8 seats</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">EBC</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;" >2 seats</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">4 seats</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">ST</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:500;">6 seats</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Eligibility Criteria</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Education:</b> Minimum Class X pass (Matriculation) from a recognized board 
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
        <b>Language & Culture:</b> Proficient in Hindi (Devanagari script) and familiar with Rajasthan’s culture
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
        <b>Age (as of 1 Jan 2026):</b> 18–40 years; age relaxation for reserved categories as per norms
        </li>
      </ul>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Important Dates</h3>
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Notification Released:</b> 11 July 2025
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Application Start Date:</b> 11 July 2025
        </li></li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Last Date to Apply:</b>  10 August 2025
        </li>
      </ul>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;
      padding-bottom:8px;border-bottom:2px solid #5d93fe;">How to Apply</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Visit the RSSB official website:</h3>
        <p style="margin:0;color:#4a5568;">
          Go to <a href="https://rssb.rajasthan.gov.in" target="_blank" 
          rel="noopener noreferrer">rssb.rajasthan.gov.in</a> or <a href="https://recruitment.rajasthan.gov.in" target="_blank" 
          rel="noopener noreferrer">recruitment.rajasthan.gov.in</a></p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Register Login & Register</h3>
        <p style="margin:0;color:#4a5568;">
          Create an account or login using a valid mobile number and email on the portal.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Fill Application Form</h3>
        <p style="margin:0;color:#4a5568;">
          Complete the form with accurate personal, educational.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Upload Documents</h3>
        <p style="margin:0;color:#4a5568;">
          Upload scanned photo, signature and IDs.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Pay Fee</h3>
        <p style="margin:0;color:#4a5568;">
          General, Creamy‑layer OBC: ₹600, SC/ST/EWS/OBC‑non‑creamy / Divyang: ₹400 ﹣ pay online.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">6</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Submit & Download</h3>
        <p style="margin:0;color:#4a5568;">
          Submit your form, and download the receipt and application number for records.</p>
      </div>
    </div>
  </div>
</section>


<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Who can apply for the RSSB Lab Attendant Recruitment 2025?</summary>
      <p style="margin:0;color:#4a5568;">Anyone who has passed Class 10th (Matriculation) from a recognized board is eligible. Additionally, applicants must have working knowledge of Hindi written in Devanagari script and awareness of Rajasthan’s culture and traditions, as mandated by the Rajasthan government norms.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the selection process for the Lab Attendant post?</summary>
      <p style="margin:0;color:#4a5568;">The selection is primarily based on a written examination conducted by RSSB. Shortlisted candidates from the exam will be called for document verification and a medical fitness test before final appointment.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is prior work experience required to apply?</summary>
      <p style="margin:0;color:#4a5568;">No, prior work experience is not required. This is an entry-level government job, making it an excellent opportunity for freshers and those looking to enter the government sector for the first time.</p>
    </details>
      </div>
</section>

<footer style="padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="text-align:center;margin:0 0 8px 0;color:#2d3748;font-weight:600;">Final Words</p>
  <p style="margin:0;">The RSSB Lab Attendant Recruitment 2025 is an excellent opportunity for individuals looking to start their career in the Rajasthan government sector with minimal educational requirements. Given the low competition threshold for Class 10th-level jobs, candidates who start early preparation stand a strong chance.</p>
  </footer> `,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/RSSB%E2%80%93Lab_Attendant_Recruitment-2025.png-1752477736867",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-11T08:00:00Z",
        "updatedAt": "2025-07-11T12:00:00Z",
        "readTime": 5,
        "views": 10400,
        "tags": [
          "RSSB Recruitment 2025",
          "Lab Attendant Jobs",
          "Rajasthan PHED Jobs",
          "RSMSSB Vacancy",
          "10th Pass Govt Jobs",
          "Sarkari Naukri Rajasthan",
          "State Govt Jobs 2025",
          "RSSB Lab Attendant Notification",
          "Rajasthan Staff Selection Board",
          "Rajasthan Government Jobs"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "RSSB Lab Attendant Recruitment 2025: Apply for 54 PHED Posts",
        "seoDescription": "Apply now for RSSB Lab Attendant Recruitment 2025 under the Public Health Engineering Department. A total of 54 vacancies are open for 10th pass candidates. Check eligibility, salary, and application steps. Last date: August 9, 2025.",
        "seoKeywords": [
          "RSSB Lab Attendant Recruitment 2025",
          "Rajasthan Lab Attendant Vacancy",
          "PHED Rajasthan Jobs",
          "RSMSSB Recruitment 2025",
          "10th Pass Government Jobs",
          "Sarkari Naukri Rajasthan"
        ]
      },
      "north-western-railway-nwr-sports-quota-recruitment-2025": {
        "id": "10",
        "title": "North Western Railway (NWR) Sports Quota Recruitment 2025",
        "slug": "north-western-railway-nwr-sports-quota-recruitment-2025",
        "excerpt": "North Western Railway (NWR) has released its 2025 Sports Quota recruitment for 54 posts across various pay levels. Eligible sportspersons with 10th, 12th, ITI, or Graduation can apply online until August 10, 2025.",
        "content": `<section style="margin-bottom:40px;">
 <p style="margin:0 0 12px 0;color:#2d3748;">The Railway Recruitment Cell (RRC), North Western Railway (NWR), Jaipur, has announced the Sports Quota Recruitment 2025 for 54 positions under multiple disciplines and pay levels. This opportunity is open to outstanding sportspersons who have represented the country or state in recognized competitions.
</br>The recruitment spans Level 1 to Level 5, with educational qualifications ranging from 10th pass to graduation, based on the post applied for. Candidates must also meet specific sports performance criteria as outlined in the official notification.
</br>Whether you’re an athlete, a national player, or a sports achiever looking to serve Indian Railways, this is your chance to secure a government job with competitive pay and job security. Online applications are open from July 11, 2025, to August 10, 2025.</p>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;font-weight:500;">Level</th>
          <th style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">No. of Posts</th>
          <th style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">	Pay Level</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Level 4/5</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">05</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹29,200–₹92,300</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Level 2/3</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">16</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹19,900–₹63,200</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Level 1</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">33</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">₹18,000–₹56,900</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Department</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;" colspan="2">Railway Recruitment Cell (RRC), NWR Jaipur</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Last Date to Apply</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;" colspan="2">25 April 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Official Website</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:500;"><a href="https://www.rrcjaipur.in" target="_blank" rel="noopener noreferrer">
www.rrcjaipur.in
</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Criteria</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Educational Qualification</h3>
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         10th/12th/ITI/Graduation depending on level
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         Sports achievements in national/international competitions (see full notification)
        </li>
      </ul>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Important Dates</h3>
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Notification Released:</b> 11 July 2025
        </li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Application Start Date:</b> 11 July 2025
        </li></li><li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:15px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
         <b>Last Date to Apply:</b>  10 August 2025
        </li>
      </ul>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;
      padding-bottom:8px;border-bottom:2px solid #e2e8f0;">How to Apply</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Visit Official Portal</h3>
        <p style="margin:0;color:#4a5568;">
          Go to <a href="https://rrcjaipur.in" target="_blank" 
          rel="noopener noreferrer">rrcjaipur.in</a> and open the Sports Quota Notification (Advt 01/2025).</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Register Login & Register</h3>
        <p style="margin:0;color:#4a5568;">
          Create an account or login using a valid mobile number and email on the portal.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Fill Application Form</h3>
        <p style="margin:0;color:#4a5568;">
          Complete the form with accurate personal, educational, and sports credentials.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Upload Documents</h3>
        <p style="margin:0;color:#4a5568;">
          Upload scanned photo, signature, IDs, and sports certificates.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Pay Fee</h3>
        <p style="margin:0;color:#4a5568;">
          General ₹500, SC/ST/Women/Minorities/EBC ₹250 (refundable after trial attendance) ﹣ pay online.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;padding:20px;
        background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;
          color:white;border-radius:50%;display:flex;align-items:center;
          justify-content:center;font-weight:600;margin-right:16px;">6</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;
            font-weight:600;">Submit & Download</h3>
        <p style="margin:0;color:#4a5568;">
          Submit your form, and download the receipt and application number for records.</p>
      </div>
    </div>
  </div>
</section>


<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the last date to apply for RSSB Lab Attendant 2025?</summary>
      <p style="margin:0;color:#4a5568;">The last date will be updated in the official notification PDF, expected soon.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Who can apply for the Sports Quota posts?</summary>
      <p style="margin:0;color:#4a5568;">Candidates with valid sports achievements and a minimum academic qualification (10th, 12th, or graduation depending on level) can apply.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the application fee?</summary>
      <p style="margin:0;color:#4a5568;">The application fee varies by category and post. Refer to the notification for exact fee structure.</p>
    </details>
      </div>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Final Words</p>
  <p style="margin:0;">he NWR Sports Quota Recruitment 2025 is a golden opportunity for talented sportspersons to turn their achievements into a secure and prestigious government career with Indian Railways. With 54 vacancies across various pay levels, this recruitment not only values your sports merit but also offers a stable job with excellent benefits and growth.</p>
  </footer>
  `,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/NWR%E2%80%93Sports_Quota_Recruitment_2025.png-1752226895685",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-11T08:00:00Z",
        "updatedAt": "2025-07-11T12:00:00Z",
        "readTime": 6,
        "views": 8900,
        "tags": [
          "NWR Recruitment 2025",
          "Railway Sports Quota Jobs",
          "North Western Railway Jobs",
          "RRC Jaipur Vacancy",
          "Indian Railway Recruitment",
          "Railway Jobs 2025",
          "Sports Quota Govt Jobs",
          "Railway Sports Person Recruitment",
          "10th Pass Railway Jobs",
          "Sarkari Naukri Rajasthan"
        ],
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "seoTitle": "NWR Sports Quota Recruitment 2025: Apply Online for 54 Railway Posts",
        "seoDescription": "North Western Railway (NWR) Sports Quota Recruitment 2025 is open for 54 posts. Check eligibility, pay scale, sports qualifications, and apply online before 10 August 2025.",
        "seoKeywords": [
          "NWR Sports Quota Recruitment 2025",
          "Railway Sports Quota Jobs 2025",
          "North Western Railway Vacancy",
          "RRC Jaipur Sports Quota",
          "Railway Recruitment 2025"
        ]
      },
      "rajasthan-rssb-vdo-recruitment-2025-guide": {
        "id": "1",
        "slug": "rajasthan-rssb-vdo-recruitment-2025-guide",
        "title": "Rajasthan RSSB Village Development Officer Recruitment 2025: A Complete Guide",
        "excerpt": "The Rajasthan Staff Selection Board (RSSB) has opened 850 vacancies for the prestigious Village Development Officer (VDO) post. Starting from 19 June 2025, eligible graduates with computer qualifications can apply online. This detailed guide outlines important dates, eligibility, required documents, step-by-step application process, exam pattern, and preparation tips. The VDO role is vital to rural governance in Rajasthan, offering a meaningful public service career. Apply by 18 July 2025 and begin your journey in grassroots development.",
        "content": `
        <section style="margin-bottom:40px;">
  <p style="margin:0;color:#2d3748;">The Village Development Officer (VDO) plays a crucial role in Rajasthan's rural development, managing scheme allocation, monitoring infrastructure projects, and coordinating with Panchayats. This position offers an excellent opportunity to contribute to grassroots development and public service.</p>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Key Recruitment Overview</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr style="background: #f8f9fa;">
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Attribute</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Conducting Authority</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Rajasthan Staff Selection Board (RSSB)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Position</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Village Development Officer (VDO)</td>
        </tr>
        <tr style="background: #f8f9fa;">
          <td style="padding:14px 16px;color:#4a5568;">Total Positions</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">850</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Requirements</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Age Criteria</h3>
      <p style="margin:0;color:#4a5568;">18 to 40 years as of January 1, 2026</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Educational Qualification</h3>
      <p style="margin:0;color:#4a5568;">Bachelor's degree in any discipline from a recognized university</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Computer Proficiency (Any One Required)</h3>
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;"></span>
          O Level Certificate from NIELIT
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;"></span>
          COPA / DPCS Certificate
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;"></span>
          Diploma in Computer Science or Applications
        </li>
        <li style="margin:0 0 0 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;"></span>
          RS-CIT Certificate
        </li>
      </ul>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Important Timeline</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Event</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Begins</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;">June 19, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Deadline</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">July 18, 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Fee Payment Last Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">July 18, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Correction Window</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">As per official notification</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Examination Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">August 31, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">Admit Card Release</td>
          <td style="padding:14px 16px;color:#4a5568;">Few days before examination</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Fee Structure</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Category</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Application Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General / OBC (Creamy Layer)</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">₹600</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC (Non-Creamy Layer) / SC / ST</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:600;">₹400</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Correction Fee</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#ed8936;font-weight:500;">₹300</td>
        </tr>
        <tr style="background:#fff5f5;">
          <td style="padding:14px 16px;color:#4a5568;font-weight:500;">Important Note</td>
          <td style="padding:14px 16px;color:#2d3748;">One-time registration fee - no additional charges for future RSSB applications</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Required Documents</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          Graduation degree certificate
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          Class 10th mark sheet
        </li>
        <li style="margin:0 0 0 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          Aadhaar card copy
        </li>
      </ul>
    </div>
    
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #2b6cb0;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;">✓</span>
          Valid mobile number & email ID
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;">✓</span>
          Recent passport-size photograph
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;">✓</span>
          Digital signature
        </li>
      </ul>
    </div>
  </div>
  
  <div style="margin-top:16px;padding:16px;background:#fffaf0;border-radius:8px;border-left:4px solid #ed8936;">
    <p style="margin:0;color:#4a5568;"><strong style="color:#2d3748;">Additional Requirement:</strong> Computer qualification certificate (O Level/COPA/DPCS/Diploma/RS-CIT)</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Register on RSSB Portal</h3>
        <p style="margin:0;color:#4a5568;">Create your account on the official RSSB One Time Registration (OTR) portal</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Upload Required Documents</h3>
        <p style="margin:0;color:#4a5568;">Upload photograph, signature, and all required documents in specified format</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Pay Application Fee</h3>
        <p style="margin:0;color:#4a5568;">Complete fee payment online (₹600 for General/OBC, ₹400 for OBC-NCL/SC/ST)</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Complete Application Form</h3>
        <p style="margin:0;color:#4a5568;">Fill the VDO application form with accurate personal and educational details</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Submit and Download</h3>
        <p style="margin:0;color:#4a5568;">Submit application, note down application number, and download confirmation receipt</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Examination Details</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Exam Mode</h3>
      <p style="margin:0;color:#4a5568;">Offline (Pen & Paper)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Marking Scheme</h3>
      <p style="margin:0;color:#4a5568;">1 mark per correct answer</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Negative Marking</h3>
      <p style="margin:0;color:#4a5568;">Check official notification</p>
    </div>
  </div>
  
  <div style="margin-top:20px;padding:20px;background:#f8fafc;border-radius:8px;">
    <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Exam Syllabus Coverage</h3>
    <p style="margin:0;color:#4a5568;">General Knowledge, Science, Rajasthan History & Culture, Rural Development, Computer Knowledge, Reasoning & Mental Ability</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Selection Timeline</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Selection Stage</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Expected Timeline</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Additional Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Admit Card Release</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Early to Mid-August 2025</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Download from official portal</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Written Examination</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">August 31, 2025</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Carry admit card and valid ID</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Result Declaration</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4-6 weeks after exam</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Merit list with cut-off marks</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">Final Selection</td>
          <td style="padding:14px 16px;color:#2d3748;font-weight:500;">As per CEN 03/2025</td>
          <td style="padding:14px 16px;color:#4a5568;">Document verification/interview if required</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can OBC Creamy Layer candidates apply with ₹600 fee?</summary>
      <p style="margin:0;color:#4a5568;">Yes, OBC Creamy Layer candidates need to pay ₹600 under the General/OBC category as per RSSB guidelines.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can final year graduation students apply?</summary>
      <p style="margin:0;color:#4a5568;">Final year students can apply only if they complete their graduation by July 18, 2025, and upload a provisional certificate from their university.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is negative marking applicable in the examination?</summary>
      <p style="margin:0;color:#4a5568;">Please refer to the official notification for negative marking details. Generally, RSSB follows -0.25 or -0.33 marks for incorrect answers.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can I make corrections after submitting the application?</summary>
      <p style="margin:0;color:#4a5568;">Yes, corrections can be made during the official correction window with a fee of ₹300 as specified by RSSB.</p>
    </details>
  </div>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="margin:0;color:#4a5568;font-weight:500;">📌 Save this page for regular updates on Rajasthan VDO Recruitment 2025</p>
</footer>
`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105048.png-1751260909100",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "tags": ["RSMSSB", "VDO", "Rajasthan", "Government Jobs"],
        "seoTitle": "RSMSSB VDO 2025: Eligibility, Vacancies, Apply Online Guide",
        "seoDescription": "Get full details on RSMSSB VDO 2025 recruitment – eligibility, important dates, application process, fees and preparation tips.",
        "seoKeywords": ["RSMSSB VDO 2025", "Village Development Officer", "Rajasthan Government Jobs"]
      },
      "rpsc-school-lecturer-2024-apply-online": {
        "id": "2",
        "title": "RPSC – School Lecturer (School Education) 2024",
        "slug": "rpsc-school-lecturer-2024-apply-online",
        "excerpt": "Apply for 2,202 vacancies for the RPSC School Lecturer (School Education) 2024 recruitment. The exam is scheduled from June 23 to July 4, 2025. Visit the official site for details and updates.",
        "content": `<section style="margin-bottom:40px;">
  <p style="margin:0;color:#2d3748;">The School Lecturer (School Education) post under RPSC is a prestigious position within Rajasthan’s secondary education system, allowing candidates to significantly contribute to academic excellence and teacher quality in government schools.</p>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Key Recruitment Overview</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Attribute</th>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Conducting Authority</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Rajasthan Public Service Commission (RPSC)</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Post Name</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">School Lecturer (School Education)</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Total Vacancies</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#2b6cb0;">2,202</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Subjects Covered</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">24 subjects including Hindi, English, Political Science, Maths, Science, Commerce, PE & Coaching roles</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Eligibility Requirements</h2>
  <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;margin-bottom:16px;">
    <h3>Age Criteria</h3>
    <p>21 to 40 years (as on 1 January 2025)</p>
  </div>
  <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
    <h3>Educational Qualification</h3>
    <p>Post‑graduation in the concerned subject + B.Ed (or Diploma/Degree in Education/Physical Education)</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Timeline & Important Dates</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Event</th>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Application Start</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">05 November 2024</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Application Deadline</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#e53e3e;">04 December 2024 (midnight)</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Exam Schedule</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">23 June – 04 July 2025<br>Rescheduled for some: 05–06 July 2025</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Admit Card Release</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Mid‑June 2025</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Application Fee Structure</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Category</th>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">General / OBC-CL / EWS</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#2b6cb0;">₹600</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">OBC-NCL / SC / ST / Sahariya / PwD</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#38a169;">₹400</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Correction Fee</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:500;color:#ed8936;">₹500</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Vacancy Distribution by Subject</h2>
  <p>Total 2,202 vacancies across 24 subjects, including:</p>
  <ul>
    <li>Hindi – 350, English – 325, Sanskrit – 64, Punjabi – 11, Urdu – 26</li>
    <li>History – 90, Political Science – 225, Geography – 210</li>
    <li>Mathematics – 153, Physics – 147, Chemistry – 36, Biology – 67</li>
    <li>Economics – 35, Commerce – 340, Drawing – 35, Music – 6</li>
    <li>Physical Education – 37; Coaching: Wrestling/Kho‑Kho/Hockey/Football – total 6</li>
  </ul>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Exam Pattern & Selection Process</h2>
  <div class="card" style="padding:20px;background:#f8fafc;border-radius:8px;">
    <h3>Written Exam (Paper I & II)</h3>
    <p>
      • Paper I: General Studies, Educational Psychology, Teaching Methodology, Computer Knowledge (150 Qs, 150 marks)<br>
      • Paper II: Subject-specific (150 Qs, 300 marks)<br>
      • Negative marking applies (–⅓ per incorrect)<br>
      • Mode: Offline (OMR)
    </p>
  </div>
  <div class="card" style="padding:20px;background:#f8fafc;border-radius:8px;margin-top:16px;">
    <h3>Document Verification</h3>
    <p>Only for shortlisted candidates; original certificates required.</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">How to Download RPSC School Lecturer Admit Card</h2>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Step</th>
          <th style="background:#f8fafc;font-weight:600;padding:16px;text-align:left;">Guide</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">1</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Visit the official RPSC website: <a href="https://rpsc.rajasthan.gov.in">rpsc.rajasthan.gov.in</a></td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">2</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Click on “Admit Card for School Lecturer 2024”</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">3</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Enter Application Number and Date of Birth</td></tr>
        <tr><td style="padding:16px;border-bottom:1px solid #e2e8f0;">4</td><td style="padding:16px;border-bottom:1px solid #e2e8f0;">Download and print your admit card</td></tr>
      </tbody>
    </table>
  </div>
  <p><strong>Admit cards released between 16–20 June 2025</strong>. Exams from 23 June to 6 July 2025.</p>
</section>

<section style="margin-bottom:40px;">
  <h2 style="font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Important Updates & Alerts</h2>
  <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;margin-bottom:12px;">
    <summary style="font-weight:600;color:#2d3748;cursor:pointer;">Exam Hall Irregularities Reported</summary>
    <p>On 24 June 2025 in Jhunjhunu, poor lighting and early paper collection were reported. 3 invigilators suspended.</p>
  </details>
  <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;margin-bottom:12px;">
    <summary style="font-weight:600;color:#2d3748;cursor:pointer;">Exam Schedule Announced</summary>
    <p>Formal schedule for 23 June to 4 July 2025 was released on 27 May 2025.</p>
  </details>
  <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;margin-bottom:12px;">
    <summary style="font-weight:600;color:#2d3748;cursor:pointer;">Admit Cards Released</summary>
    <p>Group 1 admit cards issued on 20 June 2025.</p>
  </details>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p>📌 Bookmark this page for live updates on RPSC School Lecturer Recruitment 2024–25.</p>
</footer>
`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105713.png-1751261245200",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "tags": ["RSMSSB", "VDO", "Rajasthan", "Government Jobs"],
        "seoTitle": "RSMSSB VDO 2025: Eligibility, Vacancies, Apply Online Guide",
        "seoDescription": "Get full details on RSMSSB VDO 2025 recruitment – eligibility, important dates, application process, fees and preparation tips.",
        "seoKeywords": ["RSMSSB VDO 2025", "Village Development Officer", "Rajasthan Government Jobs"]
      },
      "rsmssb-group-d-recruitment-2025": {
        "id": "3",
        "title": "RPSC – School Lecturer (School Education) 2024",
        "slug": "rsmssb-group-d-recruitment-2025",
        "excerpt": "Apply online for 53,749 Group D (Class IV) vacancies under RSMSSB Recruitment 2025. Check eligibility criteria, important dates, fee structure, and detailed vacancy information. The exam is scheduled from September 18 to 21, 2025.",
        "content": `<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Key Recruitment Overview</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Attribute</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Conducting Authority</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Rajasthan Staff Selection Board (RSMSSB)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Position</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Group D (Class IV)</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Total Positions</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">53,749</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Qualification</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Class 10th from recognized board</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Official Website</td>
          <td style="padding:14px 16px;color:#2b6cb0;">rsmssb.rajasthan.gov.in</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Requirements</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Age Criteria</h3>
      <p style="margin:0;color:#4a5568;">18 to 40 years as of January 1, 2026 (relaxations applicable as per rules)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Educational Qualification</h3>
      <p style="margin:0;color:#4a5568;">Class 10th (Secondary) pass from a recognized board</p>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Important Timeline</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Event</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Begins</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;">March 21, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Deadline</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">April 19, 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Fee Payment Last Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">April 19, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">CBT Examination Date</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">September 18-21, 2025</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Fee Structure</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Category</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Application Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General / OBC</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">₹600</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">EWS / OBC NCL / SC / ST / PH</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:600;">₹400</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Correction Fee</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#ed8936;font-weight:500;">₹300</td>
        </tr>
        <tr style="background:#fff5f5;">
          <td style="padding:14px 16px;color:#4a5568;font-weight:500;">Important Note</td>
          <td style="padding:14px 16px;color:#2d3748;">One-time registration fee - no additional charges for future RSMSSB applications</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Vacancy Distribution</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;border-left:4px solid #38a169;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Total Vacancies</h3>
      <p style="margin:0;color:#2b6cb0;font-weight:700;">53,749</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;border-left:4px solid #2b6cb0;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Non-TSP Area</h3>
      <p style="margin:0;color:#4a5568;font-weight:600;">48,199</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;border-left:4px solid #ed8936;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">TSP Area</h3>
      <p style="margin:0;color:#4a5568;font-weight:600;">5,550</p>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Visit Official Website</h3>
        <p style="margin:0;color:#4a5568;">Go to rsmssb.rajasthan.gov.in and click on "Apply Online" for Group D Recruitment 2025</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Complete Registration</h3>
        <p style="margin:0;color:#4a5568;">Register using valid email ID and phone number for OTR (One Time Registration)</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Fill Application Form</h3>
        <p style="margin:0;color:#4a5568;">Complete the form with accurate personal and academic details</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Upload Documents</h3>
        <p style="margin:0;color:#4a5568;">Upload photograph, signature, and required documents in specified format</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Pay Fee & Submit</h3>
        <p style="margin:0;color:#4a5568;">Pay applicable fee, submit application, and download confirmation receipt</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Examination Details</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Exam Mode</h3>
      <p style="margin:0;color:#4a5568;">Computer Based Test (CBT)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Exam Duration</h3>
      <p style="margin:0;color:#4a5568;">4 days (Sept 18-21, 2025)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Question Type</h3>
      <p style="margin:0;color:#4a5568;">Multiple Choice Questions</p>
    </div>
  </div>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="margin:0;color:#4a5568;font-weight:500;">📌 Save this page for regular updates on RSMSSB Group D Recruitment 2025</p>
</footer>
`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105713.png-1751261245200",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "tags": ["RSMSSB", "Group D", "Class IV", "Rajasthan", "Government Jobs"],
        "seoTitle": "RSMSSB Group D Recruitment 2025: Apply Online for 53749 Vacancies",
        "seoDescription": "Apply now for RSMSSB Group D (Class IV) Recruitment 2025. Check eligibility, vacancy details, important dates, fees, and step-by-step application process.",
        "seoKeywords": ["RSMSSB Group D 2025", "Class IV Recruitment Rajasthan", "Rajasthan Govt Jobs 2025", "RSMSSB Apply Online"]
      },
      "rajasthan-high-court-peon-class-iv-2025": {
        "id": "3",
        "title": "Rajasthan High Court – Peon/Class-IV 2025: Check Eligibility, Vacancies & Apply Online",
        "slug": "rajasthan-high-court-peon-class-iv-2025",
        "excerpt": "Apply online for 53,749 Group D (Class IV) vacancies under RSMSSB Recruitment 2025. Check eligibility criteria, important dates, fee structure, and detailed vacancy information. The exam is scheduled from September 18 to 21, 2025.",
        "content": `<section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #5d93fe;">Recruitment Overview</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background: #f8fafc; padding: 14px 16px; text-align: left; font-weight: 600; color: #2d3748;">Attribute</th>
          <th style="background: #f8fafc; padding: 14px 16px; text-align: left; font-weight: 600; color: #2d3748;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Conducting Authority</td>
          <td style="padding: 14px 16px; color: #2d3748; font-weight: 500;">Rajasthan High Court</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Post Name</td>
          <td style="padding: 14px 16px; color: #2d3748;">Peon / Class IV</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Total Vacancies</td>
          <td style="padding: 14px 16px; color: #2b6cb0; font-weight: 600;">To Be Announced</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Qualification</td>
          <td style="padding: 14px 16px; color: #2d3748;">Class 10th Passed (Secondary)</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Age Limit</td>
          <td style="padding: 14px 16px; color: #2d3748;">18 to 40 years (as on 01 Jan 2026), age relaxation as per rules</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Official Website</td>
          <td style="padding: 14px 16px;"><a href="https://hcraj.nic.in" style="color: #2b6cb0; text-decoration: none;">hcraj.nic.in</a></td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Pay Scale</td>
          <td style="padding: 14px 16px; color: #2d3748;">Level-1 (₹18,000 - ₹56,900) + DA & HRA as per rules</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Job Location</td>
          <td style="padding: 14px 16px; color: #2d3748;">Rajasthan High Court, Jodhpur & District Courts across Rajasthan</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Important Dates</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Event</th>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Notification Release</td>
          <td style="padding: 14px 16px; color: #2d3748;">Expected in August 2025</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Application Start</td>
          <td style="padding: 14px 16px; color: #2d3748;">To Be Announced</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Last Date to Apply</td>
          <td style="padding: 14px 16px; color: #2d3748;">To Be Announced</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Admit Card Release</td>
          <td style="padding: 14px 16px; color: #2d3748;">10 days before exam</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Written Examination</td>
          <td style="padding: 14px 16px; color: #2d3748;">To Be Announced</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Result Declaration</td>
          <td style="padding: 14px 16px; color: #2d3748;">Within 30 days of exam</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Age Relaxation Details</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Category</th>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Age Relaxation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">SC/ST</td>
          <td style="padding: 14px 16px; color: #2d3748;">5 years</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">OBC (Non-Creamy Layer)</td>
          <td style="padding: 14px 16px; color: #2d3748;">3 years</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">EWS</td>
          <td style="padding: 14px 16px; color: #2d3748;">As per Government Rules</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Ex-Serviceman</td>
          <td style="padding: 14px 16px; color: #2d3748;">3 years after deduction of military service</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Physically Handicapped</td>
          <td style="padding: 14px 16px; color: #2d3748;">10 years (15 years for SC/ST)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Application Fee</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Category</th>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">General / OBC</td>
          <td style="padding: 14px 16px; color: #2d3748;">₹500</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">SC / ST / EWS</td>
          <td style="padding: 14px 16px; color: #2d3748;">₹250</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Payment Mode</td>
          <td style="padding: 14px 16px; color: #2d3748;">Online (Debit Card/Credit Card/Net Banking/UPI)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Selection Process</h2>
    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <ol style="padding-left: 20px; color: #4a5568; margin: 0;">
        <li style="margin-bottom: 12px;"><strong style="color: #2d3748;">Written Examination</strong> - 100 Marks (Objective Type MCQs)</li>
        <li style="margin-bottom: 12px;"><strong style="color: #2d3748;">Physical Efficiency Test</strong> - Qualifying Nature</li>
        <li style="margin-bottom: 12px;"><strong style="color: #2d3748;">Document Verification</strong> - For selected candidates</li>
        <li><strong style="color: #2d3748;">Medical Examination</strong> - Final stage</li>
      </ol>
    </div>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Required Documents</h2>
    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <ul style="padding-left: 20px; color: #4a5568; margin: 0;">
        <li style="margin-bottom: 8px;">Class 10th Mark Sheet & Certificate</li>
        <li style="margin-bottom: 8px;">Date of Birth Certificate</li>
        <li style="margin-bottom: 8px;">Caste Certificate (SC/ST/OBC/EWS)</li>
        <li style="margin-bottom: 8px;">Domicile Certificate of Rajasthan</li>
        <li style="margin-bottom: 8px;">Recent Passport Size Photographs</li>
        <li style="margin-bottom: 8px;">Valid Email ID & Mobile Number</li>
        <li style="margin-bottom: 8px;">Signature in prescribed format</li>
        <li>Any other relevant certificates (if applicable)</li>
      </ul>
    </div>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Exam Pattern</h2>
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Subject</th>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Questions</th>
          <th style="background: #f8fafc; padding: 14px 16px; color: #2d3748; text-align: left; font-weight: 600;">Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">General Knowledge</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">Hindi Language</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568;">Mathematics</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
        </tr>
        <tr style="background: #fafafa;">
          <td style="padding: 14px 16px; color: #4a5568;">General Science</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
          <td style="padding: 14px 16px; color: #2d3748;">25</td>
        </tr>
        <tr>
          <td style="padding: 14px 16px; color: #4a5568; font-weight: 600;">Total</td>
          <td style="padding: 14px 16px; color: #2d3748; font-weight: 600;">100</td>
          <td style="padding: 14px 16px; color: #2d3748; font-weight: 600;">100</td>
        </tr>
      </tbody>
    </table>
    <p style="color: #666;  margin-top: 10px; font-style: italic;">
      Duration: 2 Hours | Negative Marking: 1/4 mark for each wrong answer
    </p>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">How to Apply</h2>
    <ol style="padding-left: 20px; color: #4a5568;">
      <li style="margin-bottom: 10px;">Visit the official website: <a href="https://hcraj.nic.in" style="color: #2b6cb0;">hcraj.nic.in</a></li>
      <li style="margin-bottom: 10px;">Click on "Recruitment" and select the Class IV/Peon notification link</li>
      <li style="margin-bottom: 10px;">Register with your valid email ID and phone number</li>
      <li style="margin-bottom: 10px;">Fill out the online form carefully and upload necessary documents</li>
      <li style="margin-bottom: 10px;">Pay the application fee and submit the final form</li>
      <li>Download and save a copy of the submitted form for reference</li>
    </ol>
  </section>

  <section style="margin-bottom: 40px;">
    <h2 style="color: #2d3748; margin: 0 0 20px 0;  font-weight: 600; padding-bottom: 8px; border-bottom: 2px solid #e2e8f0;">Important Instructions</h2>
    <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 8px;">
      <ul style="padding-left: 20px; color: #856404; margin: 0;">
        <li style="margin-bottom: 8px;">Candidates must possess Rajasthan domicile certificate</li>
        <li style="margin-bottom: 8px;">Only online applications will be accepted</li>
        <li style="margin-bottom: 8px;">Keep all original documents ready for verification</li>
        <li style="margin-bottom: 8px;">Application fee once paid will not be refunded</li>
        <li style="margin-bottom: 8px;">False information may lead to disqualification</li>
        <li>Regular updates will be posted on the official website</li>
      </ul>
    </div>
  </section>`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_110806.png-1751261901726",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "tags": ["Rajasthan High Court", "Peon Recruitment", "Class IV Jobs", "Rajasthan Government Jobs", "Court Jobs"],
        "seoTitle": "Rajasthan High Court Peon Recruitment 2025 – Apply Online for Class IV Vacancies",
        "seoDescription": "Apply online for Rajasthan High Court Peon/Class-IV Recruitment 2025. Check official notification, eligibility, vacancy details, age limit, application fee, and how to apply.",
        "seoKeywords": ["Rajasthan High Court Peon 2025", "Class IV Recruitment Rajasthan", "Peon Vacancy 2025", "Rajasthan High Court Jobs", "Government Jobs Rajasthan 2025"]
      },
      "rsmssb-conductor-recruitment-2025-apply-online": {
        "id": "3",
        "title": "RSMSSB Conductor 2025 Recruitment: Apply for 500 Vacancies",
        "slug": "rsmssb-conductor-recruitment-2025-apply-online",
        "excerpt": "Apply online for 53,749 Group D (Class IV) vacancies under RSMSSB Recruitment 2025. Check eligibility criteria, important dates, fee structure, and detailed vacancy information. The exam is scheduled from September 18 to 21, 2025.",
        "content": `<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">RSMSSB Conductor Vacancy 2025 Overview</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Particulars</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Recruiting Body</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Rajasthan Staff Selection Board (RSMSSB)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Post Name</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Conductor</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Notification Release</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">12 December 2024</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Total Vacancies</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">500 Posts</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Start Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;">27 March 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Last Date to Apply</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">25 April 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Exam Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">To be announced</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Selection Process</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Written Exam, Document Verification, Medical</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Official Website</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:500;">rssb.rajasthan.gov.in</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Criteria</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Educational Qualification</h3>
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
          Must have passed Class 10 or 12 from a recognized board
        </li>
        <li style="margin:0 0 0 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#38b2ac;border-radius:50%;"></span>
          Valid Conductor License issued by competent authority is mandatory
        </li>
      </ul>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Age Limit (as on 01.01.2026)</h3>
      <p style="margin:0 0 8px 0;color:#4a5568;">Minimum Age: 18 years</p>
      <p style="margin:0 0 8px 0;color:#4a5568;">Maximum Age: 40 years</p>
      <p style="margin:0;color:#4a5568;">Age relaxation applicable for SC/ST/OBC as per Rajasthan Govt norms</p>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Vacancy Distribution</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Category</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">TSP Area</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Non-TSP Area</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">15</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">180</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">5</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">100</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC/ST</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">6</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">100</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">EWS</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">4</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">76</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;font-weight:600;">Total</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">44</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">456</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Fee Structure</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:auto;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Category</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General/OBC (CL)</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">₹600</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC (NCL)/EWS</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:600;">₹400</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">SC/ST/PwD</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:600;">₹400</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">Correction Charges</td>
          <td style="padding:14px 16px;color:#ed8936;font-weight:500;">₹300</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <div style="margin-top:16px;padding:16px;background:#fffaf0;border-radius:8px;border-left:4px solid #ed8936;">
    <p style="margin:0;color:#4a5568;">Payment can be made via e-Mitra, Net Banking, UPI, Debit/Credit Card</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Selection Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Written Examination</h3>
        <p style="margin:0;color:#4a5568;">Objective type paper with questions from General Knowledge, Rajasthan GK, Traffic Rules</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Document Verification</h3>
        <p style="margin:0;color:#4a5568;">Verification of all educational and other certificates by the selection committee</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Medical Examination</h3>
        <p style="margin:0;color:#4a5568;">Final medical fitness test to ensure candidate meets health requirements</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Exam Pattern & Syllabus</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-bottom:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Paper Type</h3>
      <p style="margin:0;color:#4a5568;">Objective Type</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Total Marks</h3>
      <p style="margin:0;color:#4a5568;">100</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Duration</h3>
      <p style="margin:0;color:#4a5568;">2 hours</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Negative Marking</h3>
      <p style="margin:0;color:#4a5568;">1/3rd per wrong answer</p>
    </div>
  </div>
  
  <div style="padding:20px;background:#f8fafc;border-radius:8px;">
    <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Syllabus Coverage</h3>
    <p style="margin:0;color:#4a5568;">General Knowledge, Rajasthan GK, Traffic Rules, Conduct Rules</p>
  </div>
  
  <div style="margin-top:20px;padding:20px;background:#f8fafc;border-radius:8px;">
    <h3 style="margin:0 0 12px 0;color:#2d3748;font-weight:600;">Recommended Books</h3>
    <ul style="margin:0;padding:0;list-style:none;">
      <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
        <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#2b6cb0;border-radius:50%;"></span>
        Lucent GK
      </li>
      <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
        <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#2b6cb0;border-radius:50%;"></span>
        Rajasthan GK by Laxmi Publications
      </li>
      <li style="margin:0 0 0 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
        <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#2b6cb0;border-radius:50%;"></span>
        RSRTC Handbook
      </li>
    </ul>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">How to Apply for RSMSSB Conductor 2025</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Visit Official Portal</h3>
        <p style="margin:0;color:#4a5568;">Go to https://rssb.rajasthan.gov.in</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Click Apply Online</h3>
        <p style="margin:0;color:#4a5568;">Click on "Apply Online" under the Conductor 2025 section</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Register through SSO ID</h3>
        <p style="margin:0;color:#4a5568;">SSO ID is mandatory for Rajasthan residents</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Fill Details</h3>
        <p style="margin:0;color:#4a5568;">Fill in personal and academic details accurately</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Upload Documents</h3>
        <p style="margin:0;color:#4a5568;">Upload photograph, signature, and required documents</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">6</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Pay Fee and Submit</h3>
        <p style="margin:0;color:#4a5568;">Pay application fee online, submit and download confirmation receipt</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">How many vacancies are there for RSMSSB Conductor 2025?</summary>
      <p style="margin:0;color:#4a5568;">There are 500 total posts (TSP: 44, Non-TSP: 456).</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the last date to apply?</summary>
      <p style="margin:0;color:#4a5568;">The last date to apply online is 25 April 2025.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is a conductor license mandatory?</summary>
      <p style="margin:0;color:#4a5568;">Yes, a valid conductor license is a must for eligibility.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the salary of an RSMSSB conductor?</summary>
      <p style="margin:0;color:#4a5568;">Salary is as per Pay Matrix Level-5, approximately ₹20,000 – ₹25,000/month in hand.</p>
    </details>
  </div>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Final Words</p>
  <p style="margin:0;">The RSMSSB Conductor 2025 recruitment offers a secure and respectful job opportunity in Rajasthan’s government transport sector. If you meet the eligibility, don’t miss your chance to apply before the deadline!</p>
  </footer>`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_111611.png-1751262387324",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "tags": [
          "RSMSSB",
          "Rajasthan Government Jobs",
          "RSMSSB Conductor 2025",
          "RSRTC Conductor Recruitment",
          "RSMSSB Apply Online",
          "Transport Department Jobs",
          "Conductor Vacancy Rajasthan",
          "RSMSSB Notification 2025",
          "Sarkari Naukri Rajasthan",
          "10th Pass Government Jobs"
        ],
        "category": { "name": "State Jobs", "slug": "state-jobs" },
        "seoTitle": "RSMSSB Conductor Recruitment 2025: Apply Online for 500 Vacancies",
        "seoDescription": "RSMSSB Conductor 2025 recruitment is out for 500 posts. Check eligibility, exam pattern, syllabus, apply online dates, fees and official links here.",
        "seoKeywords": ["RSMSSB Conductor 2025", "Rajasthan Conductor Vacancy", "RSRTC Conductor Recruitment", "RSMSSB Apply Online", "RSMSSB 2025 Notification"]
      },
      "rsmssb-librarian-grade-iii-2025": {
        "id": "3",
        "title": "RSMSSB – Librarian Grade III 2025: Check Eligibility, Vacancies & Apply Online",
        "slug": "rsmssb-librarian-grade-iii-2025",
        "excerpt": "The Rajasthan Staff Selection Board (RSMSSB) has announced 548 vacancies for the Librarian Grade III post under the Secondary Education and Sanskrit Education Departments. The online application process began on March 5, 2025, and interested candidates can apply until April 3, 2025. This comprehensive guide covers everything you need to know—eligibility, important dates, documents, step-by-step application process, exam structure, and preparation strategy.",
        "content": `
<p>The Librarian Grade III plays an essential role in enriching school libraries and supporting the educational infrastructure of Rajasthan. This is a golden opportunity for candidates holding a Library Science qualification to join the state’s academic ecosystem.</p>
<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Key Recruitment Overview</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Attribute</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Conducting Authority</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Rajasthan Staff Selection Board (RSMSSB)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Position</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Librarian Grade III</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Total Positions</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">548 (Non-TSP: 483, TSP: 65)</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Departments</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;">Secondary Education & Sanskrit Education</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Requirements</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Age Criteria</h3>
      <p style="margin:0;color:#4a5568;">18 to 40 years as of January 1, 2026</p>
      <p style="margin:0;color:#4a5568;">Age relaxation available as per state rules (SC/ST/OBC/PwD)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Educational Qualification</h3>
      <p style="margin:0;color:#4a5568;">Passed 12th (10+2) from a recognized board</p>
      <p style="margin:0;color:#4a5568;">Certificate/Diploma/Degree in Library Science</p>
      <p style="margin:0;color:#4a5568;">Working knowledge of Hindi (Devanagari script) and awareness of Rajasthani culture</p>
    </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Important Timeline</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Event</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Notification Release</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:500;">December 12, 2024</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Start Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">March 5, 2025</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Last Date to Apply</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#e53e3e;font-weight:600;">April 3, 2025</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Admit Card Release</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">July 2025 (expected)</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Written Exam Date</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">July 27, 2025 (Sunday)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">Correction Window</td>
          <td style="padding:14px 16px;color:#4a5568;">April 4 – April 7, 2025</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Fee Structure</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Category</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Application Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">General / OBC (Creamy Layer)</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">₹600</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OBC (Non-Creamy Layer) / SC / ST</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#38a169;font-weight:600;">₹400</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Application Correction Fee</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#ed8936;font-weight:500;">₹300</td>
        </tr>
        <tr style="background:#fff5f5;">
          <td style="padding:14px 16px;color:#4a5568;font-weight:500;">Important Note</td>
          <td style="padding:14px 16px;color:#2d3748;">One-time registration fee - no additional charges for future RSSB applications</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Required Documents</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          Library Science Certificate/Diploma
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          10th and 12th Marksheet
        </li>
        <li style="margin:0 0 0 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;">✓</span>
          Aadhaar card copy
        </li>
      </ul>
    </div>
    
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #2b6cb0;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;">✓</span>
          Valid mobile number & email ID
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;">✓</span>
          Recent passport-size photograph
        </li>
        <li style="margin:0 0 8px 0;padding:8px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:8px;width:4px;height:4px;background:#ed8936;border-radius:50%;">✓</span>
          Digital signature
        </li>
      </ul>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Register via Rajasthan SSO Portal</h3>
        <p style="margin:0;color:#4a5568;">Visit sso.rajasthan.gov.in, create an SSO ID, and select the recruitment option.</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Fill Out the Application</h3>
        <p style="margin:0;color:#4a5568;">Choose “RSMSSB Librarian Grade III 2025” and complete the online form with accurate details.</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Upload Documents</h3>
        <p style="margin:0;color:#4a5568;">Upload your photo, signature, and required educational certificates in the specified format.</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Pay the Application Fee</h3>
        <p style="margin:0;color:#4a5568;">Pay online using Net Banking, UPI, Credit/Debit Card.</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-weight:600;">Submit & Download Receipt</h3>
        <p style="margin:0;color:#4a5568;">After final submission, download and save the application confirmation.

</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Examination Details</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Exam Mode</h3>
      <p style="margin:0;color:#4a5568;">Offline (OMR-based)</p>
    </div>
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Total Papers</h3>
      <p style="margin:0;color:#4a5568;">2</p>
    </div>
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Exam Duration</h3>
      <p style="margin:0;color:#4a5568;">2 hours per paper</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Marking Scheme</h3>
      <p style="margin:0;color:#4a5568;">1 mark per correct answer</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-weight:600;">Negative Marking</h3>
      <p style="margin:0;color:#4a5568;">1/3rd per wrong answer</p>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Selection Timeline</h2>
  
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <thead>
        <tr>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Selection Stage</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Expected Timeline</th>
          <th style="background:#f8fafc;color:#2d3748;padding:16px;text-align:left;font-weight:600;border-bottom:1px solid #e2e8f0;">Additional Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Admit Card Release</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">July 2025 (Expected)</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Download from official portal</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Written Examination</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2b6cb0;font-weight:600;">July 27, 2025</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">OMR-based offline exam</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Result Declaration</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">August/September 2025</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Merit list with cut-off marks</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;color:#4a5568;">Final Selection</td>
          <td style="padding:14px 16px;color:#2d3748;font-weight:500;">September–October 2025</td>
          <td style="padding:14px 16px;color:#4a5568;">Includes document verification</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Frequently Asked Questions</h2>
  
  <div style="display:grid;gap:16px;">
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #4299e1;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can final-year Library Science students apply?</summary>
      <p style="margin:0;color:#4a5568;">No, only candidates with completed qualifications are eligible.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Is there an interview round?</summary>
      <p style="margin:0;color:#4a5568;">No, selection is based solely on written examination and document verification.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">What is the salary of Librarian Grade III in Rajasthan?</summary>
      <p style="margin:0;color:#4a5568;">As per Pay Matrix Level-10: Approx. ₹33,800/month starting pay with allowances.</p>
    </details>
    
    <details style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <summary style="font-weight:600;color:#2d3748;cursor:pointer;margin-bottom:8px;">Can I withdraw my application?</summary>
      <p style="margin:0;color:#4a5568;">Yes, from June 26 to 28, 2025, if needed.</p>
    </details>
  </div>
</section>

<footer style="text-align:center;padding:24px;background:#f8fafc;border-radius:8px;border-top:1px solid #e2e8f0;">
  <p style="margin:0;color:#4a5568;font-weight:500;">📌 Bookmark this page for real-time updates on the RSMSSB Librarian Recruitment 2025. Don’t miss important deadlines—this is a great chance to enter the Rajasthan government education system!</p>
</footer>

        `,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_111915.png-1751262568321",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-06-20T08:00:00Z",
        "updatedAt": "2025-06-30T12:00:00Z",
        "readTime": 7,
        "views": 12000,
        "tags": [
          "RSMSSB",
          "Rajasthan Government Jobs",
          "RSMSSB Librarian 2025",
          "Library Science Jobs",
          "RSMSSB Apply Online",
          "Education Department Jobs",
          "Librarian Vacancy Rajasthan",
          "RSMSSB Notification 2025",
          "Sarkari Naukri Rajasthan",
          "12th Pass Government Jobs"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "RSMSSB Librarian Grade III Recruitment 2025: Apply Online for 548 Posts",
        "seoDescription": "RSMSSB Librarian Grade III 2025 notification is out for 548 posts. Check eligibility, age limit, syllabus, apply online steps, and important dates here.",
        "seoKeywords": [
          "RSMSSB Librarian 2025",
          "Rajasthan Librarian Vacancy",
          "Library Science Government Jobs",
          "RSMSSB Apply Online",
          "RSMSSB 2025 Notification"
        ]
      },
      "curaj-teaching-recruitment-2025": {
        "id": "14",
        "title": "CURAJ Recruitment 2025: Apply for Professors, Associate & Assistant Professors",
        "slug": "curaj-teaching-recruitment-2025",
        "excerpt": "The Central University of Rajasthan (CURAJ) has released a rolling advertisement for the recruitment of Professors, Associate Professors, and Assistant Professors in various departments. Online applications are open until August 11, 2025, followed by hardcopy submission by August 21. This guide covers eligibility criteria, department-wise vacancies, important dates, pay scale, application process, and FAQs.",
        "content": `
        <section style="margin-bottom:40px;">
          <p style="margin:0;color:#2d3748;">Whether you're a Ph.D. holder aiming for a Professor role or a NET-qualified candidate seeking your first Assistant Professor job, this CURAJ recruitment drive offers opportunities across disciplines like Chemistry, Computer Science, Statistics, Economics, and Yoga. With detailed eligibility criteria, structured pay scales, and a transparent selection process, CURAJ continues to uphold its reputation as a premier institution for higher education. Read on to get complete insights into the application process, important deadlines, subject-wise qualifications, and tips for a strong application.</p>
        </section>
        <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">CURAJ Teaching Vacancy 2025 Overview</h2>
        <div style="overflow-x: auto; max-width: 100%; box-sizing: border-box;">
  <table>
  <thead>
    <tr style="background: #f8f9fa;">
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Post</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Professor</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">
        Vacancies: 02<br>
        Pay Level: Level-14 (Rs. 144200-218200)<br>
        Category: OBC - 01 (Chemistry), UR - 01 (Computer Science)
      </td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Associate Professor</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">
        Vacancies: 01<br>
        Pay Level: Level-13A (Rs. 131400-217100)<br>
        Category: SC - 01 (Computer Science, Lien)
      </td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Assistant Professor</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">
        Vacancies: 04<br>
        Pay Level: Level-10 (Rs. 57700-182400)<br>
        Category: EWS - 01 (CS), EWS - 01 (Economics), SC - 01 (Statistics), ST - 01 (Yoga)
      </td>
    </tr>
  </tbody>
</table>

        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Important Dates</h2>
        <div style="overflow-x: auto; max-width: 100%; box-sizing: border-box;">
  <table style="position: relative; width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #f8f9fa;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Event</th>
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Date & Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Online Application Deadline</td>
                    <td style="padding: 12px; border: 1px solid #ddd; color: #dc3545; font-weight: bold;">11 August 2025, 11:59 PM</td>
                </tr>
                <tr style="background: #f9f9f9;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Last Date to Submit Hardcopy</td>
                    <td style="padding: 12px; border: 1px solid #ddd; color: #dc3545; font-weight: bold;">21 August 2025, 05:00 PM</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Department-wise Vacancy Distribution</h2>
        <div style="overflow-x: auto; max-width: 100%; box-sizing: border-box;">
  <table>
  <thead>
    <tr style="background: #f8f9fa;">
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Department</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Chemistry</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Professor: 01<br>Category: OBC</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Computer Science</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">
        Professor: 01, Associate Prof.: 01, Assistant Prof.: 01<br>
        Category: UR, SC, EWS
      </td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Statistics</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Assistant Professor: 01<br>Category: SC (Backlog)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Yoga</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Assistant Professor: 01<br>Category: ST (Backlog)</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Economics</td>
      <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">Assistant Professor: 01<br>Category: EWS</td>
    </tr>
  </tbody>
</table>

        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Eligibility Criteria</h2>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #2c3e50;  margin-bottom: 10px;">For Professor:</h3>
            <ul style="margin-left: 20px;">
                <li style="margin-bottom: 8px;">Ph.D. in relevant/allied discipline</li>
                <li style="margin-bottom: 8px;">10 years of teaching/research experience with minimum 10 publications</li>
                <li style="margin-bottom: 8px;">Total Research Score: 120 (as per UGC guidelines)</li>
            </ul>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: #2c3e50;  margin-bottom: 10px;">For Associate Professor:</h3>
            <ul style="margin-left: 20px;">
                <li style="margin-bottom: 8px;">Ph.D. in relevant subject</li>
                <li style="margin-bottom: 8px;">Master's degree with at least 50% marks</li>
                <li style="margin-bottom: 8px;">8 years of teaching/research experience, 7 UGC-listed publications</li>
                <li style="margin-bottom: 8px;">Research Score: 75</li>
            </ul>
        </div>

        <div style="margin-bottom: 20px;">
            <h3 style="color: #2c3e50;  margin-bottom: 10px;">For Assistant Professor:</h3>
            <ul style="margin-left: 20px;">
                <li style="margin-bottom: 8px;">Master's degree in relevant field with minimum 55% marks (some departments allow 50%)</li>
                <li style="margin-bottom: 8px;">NET qualification mandatory (Ph.D. holders exempted)</li>
                <li style="margin-bottom: 8px;">Subject-specific qualifications as per department requirements</li>
            </ul>
        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Application Fee</h2>
        <div style="overflow-x: auto; max-widht: 100% box-sizing: border-box;">
  <table style="position: relative;width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="background: #f8f9fa;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Category</th>
                    <th style="padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold;">Application Fee</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">General/OBC/EWS</td>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Rs. 1500</td>
                </tr>
                <tr style="background: #f9f9f9;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">SC/ST/PwD</td>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Rs. 750</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: 600;">CURAJ Employees</td>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">NIL</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">How to Apply</h2>
        
        <ol style="margin-left: 20px;">
            <li style="margin-bottom: 10px;">Visit the official website: <strong>www.curaj.ac.in</strong></li>
            <li style="margin-bottom: 10px;">Go to the <strong>Recruitments</strong> section</li>
            <li style="margin-bottom: 10px;">Fill the online application form and pay the required fee</li>
            <li style="margin-bottom: 10px;">After successful submission, download the application form</li>
            <li style="margin-bottom: 10px;">Send hardcopy with required documents to:<br>
                <strong>Registrar (Recruitment Cell),<br>
                Central University of Rajasthan,<br>
                NH-8, Bandarsindri, Kishangarh,<br>
                District Ajmer, Rajasthan - 305817</strong>
            </li>
        </ol>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Selection Process</h2>
        
        <ul style="margin-left: 20px;">
            <li style="margin-bottom: 8px;">Presentation-cum-Interview for all shortlisted candidates</li>
            <li style="margin-bottom: 8px;">Final merit based on academic score, research contributions, and experience</li>
            <li style="margin-bottom: 8px;">Only shortlisted candidates will be called for interview</li>
            <li style="margin-bottom: 8px;">Merit-based selection following UGC guidelines</li>
        </ul>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Key Points to Remember</h2>
        
        <ul style="margin-left: 20px;">
            <li style="margin-bottom: 8px;">Medium of instruction: English</li>
            <li style="margin-bottom: 8px;">Applications must be complete in all respects</li>
            <li style="margin-bottom: 8px;">Separate applications needed for each post</li>
            <li style="margin-bottom: 8px;">Eligibility governed by UGC norms and regulations</li>
            <li style="margin-bottom: 8px;">Both online and offline submission required</li>
        </ul>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Frequently Asked Questions (FAQs)</h2>
        
        <div style="margin-bottom: 15px;">
            <h4 style="color: #2c3e50; margin-bottom: 5px;">Q: Who can apply for these positions?</h4>
            <p style="margin-left: 20px; color: #555;">A: Indian Citizens and Overseas Citizens of India (OCIs) with relevant qualifications can apply.</p>
        </div>

        <div style="margin-bottom: 15px;">
            <h4 style="color: #2c3e50; margin-bottom: 5px;">Q: Is NET compulsory for Assistant Professor positions?</h4>
            <p style="margin-left: 20px; color: #555;">A: Yes, NET qualification is mandatory unless the candidate holds a UGC-compliant Ph.D. degree.</p>
        </div>

        <div style="margin-bottom: 15px;">
            <h4 style="color: #2c3e50; margin-bottom: 5px;">Q: Can final-year Ph.D. students apply?</h4>
            <p style="margin-left: 20px; color: #555;">A: Only if the Ph.D. degree is awarded before the application closing date.</p>
        </div>

        <div style="margin-bottom: 15px;">
            <h4 style="color: #2c3e50; margin-bottom: 5px;">Q: Is it necessary to send hardcopy of application?</h4>
            <p style="margin-left: 20px; color: #555;">A: Yes, both online application and physical submission of hardcopy with documents is mandatory.</p>
        </div>

        <div style="margin-bottom: 15px;">
            <h4 style="color: #2c3e50; margin-bottom: 5px;">Q: Will travel allowance be provided for interview?</h4>
            <p style="margin-left: 20px; color: #555;">A: SC/ST/PWD candidates not in government service will get 2nd class train fare reimbursement.</p>
        </div>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Direct Links</h2>
        
        <ul style="margin-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>CURAJ Official Website:</strong> <a href="https://www.curaj.ac.in" style="color: #007bff; text-decoration: none;">www.curaj.ac.in</a></li>
            <li style="margin-bottom: 8px;"><strong>Apply Online:</strong> <a href="https://www.curaj.ac.in/acts/recruitments" style="color: #007bff; text-decoration: none;">www.curaj.ac.in/acts/recruitments</a></li>
            <li style="margin-bottom: 8px;"><strong>Notification PDF:</strong> Available at official website</li>
        </ul>
    </section>

    <section style="margin-bottom: 30px;">
        <h2 style="color: #2c3e50;  margin-bottom: 15px; border-bottom: 2px solid #3498db; padding-bottom: 5px;">Final Thoughts</h2>
        <p style="margin-bottom: 15px;">If you aspire to teach in a central university, this is a valuable opportunity. CURAJ offers a research-oriented academic culture and excellent pay scales according to the 7th Pay Commission recommendations.</p>
        <p style="margin-bottom: 15px;">The university provides a conducive environment for academic growth and research activities. With departments across various disciplines, there are opportunities for interdisciplinary collaboration and innovative research.</p>
        <p style="margin-bottom: 0; font-weight: bold; color: #dc3545;">Don't miss the deadline - Apply before August 11, 2025, and ensure your hardcopy reaches by August 21, 2025.</p>
    </section>`,
        "featuredImage": "https://blackbuck.blob.core.windows.net/blackbucks-media/CURAJ_Recruitment_2025.png-1751699244834",
        "author": {
          "name": "Amit Sharma",
          "avatar": "/images/authors/amit-sharma.jpg",
          "bio": "Expert in Rajasthan government recruitment with 10+ years of advisory experience."
        },
        "publishedAt": "2025-07-05T08:00:00Z",
        "updatedAt": "2025-07-05T10:30:00Z",
        "readTime": 8,
        "views": 6700,
        "tags": [
          "CURAJ",
          "University Teaching Jobs",
          "Central University Jobs",
          "CURAJ Faculty Vacancy",
          "CURAJ Apply Online",
          "Higher Education Jobs",
          "Rajasthan Teaching Recruitment",
          "Academic Jobs Rajasthan",
          "Government Jobs for Professors",
          "CURAJ Notification 2025"
        ],
        "category": {
          "name": "State Jobs",
          "slug": "state-jobs"
        },
        "seoTitle": "CURAJ Recruitment 2025: Apply Online for Professors, Associate & Assistant Professors",
        "seoDescription": "CURAJ Teaching Recruitment 2025 is open for Professors, Associate Professors, and Assistant Professors. Check eligibility, department-wise posts, important dates, and how to apply online.",
        "seoKeywords": [
          "CURAJ Recruitment 2025",
          "Teaching Jobs in Rajasthan",
          "CURAJ Faculty Vacancy",
          "Central University Teaching Jobs",
          "CURAJ Apply Online"
        ]
      }
    }

    const post = mockPosts[slug] || null

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 50))

    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    throw new Error('Failed to fetch blog post')
  }
}

async function getRelatedPosts(currentSlug: string, category: string): Promise<RelatedPost[]> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 50))

    // In production, this would be:
    // const response = await fetch(`${process.env.API_URL}/api/posts/related?slug=${currentSlug}&category=${category}&limit=3`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   next: { revalidate: 1800 } // Revalidate every 30 minutes
    // })
    // 
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch related posts: ${response.status}`)
    // }
    // 
    // return response.json()

    // Mock related posts database
    const allRelatedPosts: RelatedPost[] = [
      {
        slug: "rssb-lab-attendant-recruitment-2025",
        title: "RSSB Lab Attendant Recruitment 2025: A Complete Guide",
        excerpt: "The Rajasthan Staff Selection Board (RSSB) has released 54 vacancies for the Lab Attendant post under the Public Health Engineering Department (PHED). Online applications begin from 11 July 2025 and will close on 9 August 2025. This comprehensive guide includes eligibility criteria, important dates, required documents, step-by-step application process, selection procedure, FAQs, and final advice. A great opportunity for 10th pass candidates to join the Rajasthan government workforce in a technical support role.",
        featuredImage: "https://blackbuck.blob.core.windows.net/blackbucks-media/RSSB%E2%80%93Lab_Attendant_Recruitment-2025.png-1752477736867",
        publishedAt: "2025-07-11T09:00:00Z",
        readTime: 5,
        category: "State Jobs"
      },
      {
        slug: 'rajasthan-rssb-vdo-recruitment-2025-guide',
        title: 'RSSB Village Development Officer Recruitment 2025: A Complete Guide',
        excerpt: 'The Rajasthan Staff Selection Board (RSSB) has opened 850 vacancies for the prestigious Village Development Officer (VDO) post. Starting from 19 June 2025, eligible graduates with computer qualifications can apply online. This detailed guide outlines important dates, eligibility, required documents, step-by-step application process, exam pattern, and preparation tips. The VDO role is vital to rural governance in Rajasthan, offering a meaningful public service career. Apply by 18 July 2025 and begin your journey in grassroots development.',
        featuredImage: 'https://blackbuck.blob.core.windows.net/blackbucks-media/Screenshot_2025-06-30_105048.png-1751260909100',
        publishedAt: '2024-06-18T09:00:00Z',
        readTime: 5,
        category: 'State Jobs'
      },
      {
        slug: 'curaj-teaching-recruitment-2025',
        title: 'CURAJ Recruitment 2025: Apply for Professors, Associate & Assistant Professors',
        excerpt: 'The Central University of Rajasthan (CURAJ) has released a rolling advertisement for the recruitment of Professors, Associate Professors, and Assistant Professors in various departments. Online applications are open until August 11, 2025, followed by hardcopy submission by August 21. This guide covers eligibility criteria, department-wise vacancies, important dates, pay scale, application process, and FAQs.',
        featuredImage: 'https://blackbuck.blob.core.windows.net/blackbucks-media/CURAJ_Recruitment_2025.png-1751699244834',
        publishedAt: '2025-07-05T08:00:00Z',
        readTime: 7,
        category: 'State Jobs'
      },
      {
        slug: 'north-western-railway-nwr-sports-quota-recruitment-2025',
        title: 'NWR Sports Quota Recruitment 2025: Apply Online for 54 Railway Posts',
        excerpt: 'North Western Railway (NWR) has announced 54 vacancies under Sports Quota for Group C positions. Eligible sportspersons can apply online by August 10, 2025. This guide covers eligibility, discipline-wise vacancy details, pay levels, trial schedule, application process, and FAQs to help you apply smoothly.',
        featuredImage: 'https://blackbuck.blob.core.windows.net/blackbucks-media/NWR%E2%80%93Sports_Quota_Recruitment_2025.png-1752226895685',
        publishedAt: '2025-07-11T08:00:00Z',
        readTime: 6,
        category: 'State Jobs'
      }

    ]

    // Filter out current post and get posts from same or related categories
    const relatedPosts = allRelatedPosts
      .filter(post => post.slug !== currentSlug)
      .sort((a, b) => {
        // Prioritize same category posts
        if (a.category === category && b.category !== category) return -1
        if (b.category === category && a.category !== category) return 1
        // Then sort by published date (newest first)
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      })
      .slice(0, 4)

    return relatedPosts
  } catch (error) {
    console.error('Error fetching related posts:', error)
    // Return empty array on error to prevent page crash
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { slug } = params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajasthanrecruitment.in'
  const postUrl = `${siteUrl}/blog/${post.slug}`

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords?.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: postUrl,
      siteName: 'Rajasthan Recruitment',
      images: [
        {
          url: `${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category.name,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.featuredImage],
    },
    alternates: {
      canonical: postUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Generate static params for static generation
export async function generateStaticParams() {
  try {
    // In production, this would be:
    // const response = await fetch(`${process.env.API_URL}/api/posts/slugs`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.API_TOKEN}` // if needed
    //   }
    // })
    // 
    // if (!response.ok) {
    //   throw new Error(`Failed to fetch post slugs: ${response.status}`)
    // }
    // 
    // const posts = await response.json()
    // return posts.map((post: any) => ({ slug: post.slug }))

    // Mock API response - simulate fetching all available slugs
    console.log('api call');
    const availableSlugs = [
      'ssc-cgl-2024-complete-guide',
      'ssc-chsl-2024-notification',
      'railway-recruitment-2024',
      'upsc-civil-services-2024',
      'banking-jobs-2024',
      'curaj-teaching-recruitment-2025'
    ]

    return availableSlugs.map(slug => ({ slug }))
  } catch (error) {
    console.error('Error generating static params:', error)
    // Return empty array to prevent build failure
    return []
  }
}

// Main page component
export default async function BlogPostPage(props: PageProps) {
  const params = await props.params
  const { slug } = params
  const post = await getBlogPost(slug)

  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post.slug, post.category.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    author: { '@type': 'Person', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'Rajasthan Recruitment',
      logo: { '@type': 'ImageObject', url: `https://rajasthanrecruitment.in/rr.png` },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rajasthanrecruitment.in/blog/${post.slug}` },
    keywords: post.tags.join(', '),
    articleSection: post.category.name,
    wordCount: post.content.replace(/<[^>]*>/g, '').split(' ').length,
  }
  const borderColor = '#5d93fe'
  const bgCard = 'white'
  const textMain = 'gray.900'
  const textSecondary = 'gray.600'
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box minH="100vh">
        {/* Breadcrumb Navigation */}
        <Box as="nav" aria-label="Breadcrumb">
          <Box maxW="6xl" mx="auto" px={{ base: 2, md: 8 }} py={1}>
            <Flex as="ol" align="center" gap={2} fontSize="sm" color={textSecondary} wrap="wrap">
              <Box as="li"><LinkWithLoader href="/" ><Text _hover={{ color: 'blue.600' }}>Home</Text></LinkWithLoader></Box>
              <Text as="li" color="gray.400">/</Text>
              <Box as="li"><LinkWithLoader href="/blog"><Text _hover={{ color: 'blue.600' }}>Blog</Text></LinkWithLoader></Box>
              <Text as="li" color="gray.400">/</Text>
              <Box as="li"><LinkWithLoader href={`/category/${post.category.slug}`}> <Text _hover={{ color: 'blue.600' }}>{post.category.name}</Text></LinkWithLoader></Box>
              <Text as="li" color="gray.400">/</Text>
              <Box as="li" color={textMain} fontWeight="medium" maxW="100px" truncate={true}>{post.title}</Box>
            </Flex>
          </Box>
        </Box >
        <Box maxW="6xl" mx="auto" px={{ base: 2, md: 8 }} py={0} mb={6}>
          <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={8}>
            {/* Main Content */}
            <Box as="article">
              {/* Article Header */}
              <Box borderRadius="lg" p={{ sm: 2, md: 4 }}>
                <Flex align="center" gap={2} mb={4}>
                  <Link as={NextLink} href={`/category/${post.category.slug}`}
                    px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="medium"
                    bg="blue.100" color="blue.800" _hover={{ bg: 'blue.200' }} display="inline-flex" alignItems="center">
                    <Tag size={14} style={{ marginRight: 4 }} />
                    {post.category.name}
                  </Link>
                </Flex>
                <Heading as="h1" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight="bold" color={textMain} mb={4} lineHeight="tight">
                  {post.title}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={textSecondary} mb={6} lineHeight="relaxed">{post.excerpt}</Text>

                {/* Featured Image */}
                <Box bg={bgCard} borderRadius="lg" boxShadow="sm" overflow="hidden" >
                  <NextImage src={post.featuredImage} alt={post.title} width={400} height={200} style={{ width: '100%', height: '150px', objectFit: 'cover' }} priority />
                </Box>
                {/* Article Meta */}
                <Flex flexWrap="wrap" align="center" gap={6} pb={2} fontSize="sm" color={textSecondary} borderBottomWidth={2} borderColor={borderColor} pt={4}>
                  <Flex align="center" gap={2}>
                    <Avatar.Root size={'sm'} key={post.author.avatar}>
                      <Avatar.Fallback name={post.author.name} />
                      <Avatar.Image src={post.author.avatar} />
                    </Avatar.Root>
                    <Text fontWeight="medium" color={textMain}>{post.author.name}</Text>
                  </Flex>
                  <Flex align="center" gap={1}>
                    <Calendar size={16} />
                    <Text as="time">{new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                  </Flex>
                  <Flex align="center" gap={1}>
                    <Clock size={16} />
                    <Text>{post.readTime} min read</Text>
                  </Flex>
                  {/* <Flex align="center" gap={1}>
                    <Eye size={16} />
                    <Text>{post.views.toLocaleString()} views</Text>
                  </Flex> */}
                </Flex>
              </Box>
              {/* Article Content */}
              {/* <Box bg={bgCard} p={{ base: 2, md: 4 }} mb={6}>
                <Box maxW="none" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={textMain} dangerouslySetInnerHTML={{ __html: post.content }} />
              </Box> */}
              <Box bg={bgCard} p={{ base: 2, md: 4 }} mb={6}>
                <Box
                  maxW="100%"
                  overflowX="auto"
                  fontFamily="inherit"
                  wordBreak="break-word"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color={textMain}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Box>
              {/* Tags */}
              <Box bg={bgCard} p={6} mb={6}>
                <Heading as="h3" size="md" color={textMain} mb={3}>Tags</Heading>
                <Flex flexWrap="wrap" gap={2}>
                  {post.tags.map((tag) => (
                    // <Link as={NextLink} key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    // px={3} py={1} borderRadius="full" fontSize="sm" bg="gray.100" color="gray.700" _hover={{ bg: 'gray.200' }}>
                    <Text key={tag} px={3} py={1} borderRadius="full" fontSize="sm" bg="gray.100" color="gray.700" _hover={{ bg: 'gray.200' }}> #{tag}</Text>
                    // </Link>
                  ))}
                </Flex>
              </Box>
              {/* Author Bio */}
              <Box bg={bgCard} p={6} mb={6}>
                <Heading as="h3" size="md" color={textMain} mb={4}>About the Author</Heading>
                <Flex gap={4} align="center">
                  <Avatar.Root size={'sm'} key={post.author.avatar}>
                    <Avatar.Fallback name={post.author.name} />
                    <Avatar.Image src={post.author.avatar} />
                  </Avatar.Root>
                  <Box>
                    <Text fontWeight="medium" color={textMain} mb={1}>{post.author.name}</Text>
                    <Text color={textSecondary} fontSize="sm">{post.author.bio}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
            {/* Sidebar */}
            <Box as="aside" position={'relative'} >
              <Box position={{ base: 'auto', md: 'sticky' }} top={{ base: 'auto', md: '103px' }}>
                {/* Share Buttons */}
                <Box bg={bgCard} borderRadius="lg" boxShadow="sm" p={6} mb={6}>
                  <Flex align="center" gap={2} mb={4}>
                    <Share2 size={16} />
                    <Heading as="h3" size="sm" color={textMain}>Share Article</Heading>
                  </Flex>
                  <Stack>
                    <Button w="full" colorScheme="facebook">Share on Facebook</Button>
                    <Button w="full" bg="blue.400" color="white" _hover={{ bg: 'blue.500' }}>Share on Twitter</Button>
                    <Button w="full" bg="blue.700" color="white" _hover={{ bg: 'blue.800' }}>Share on LinkedIn</Button>
                  </Stack>
                </Box>
                {/* Related Posts */}
                <Box bg={bgCard} borderRadius="lg" boxShadow="sm" p={6}>
                  <Heading as="h3" size="md" color={textMain} mb={4}>Related Articles</Heading>
                  <Stack>
                    {relatedPosts.map((relatedPost) => (
                      <Link as={NextLink} key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} _hover={{ textDecoration: 'none' }}>
                        <Flex gap={3}>
                          <NextImage src={relatedPost.featuredImage} alt={relatedPost.title} width={80} height={60} style={{ borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                          <Box flex={1} minW={0}>
                            <Text fontWeight="medium" fontSize="sm" color={textMain} lineClamp="2" lineHeight="tight" mb={1} _groupHover={{ color: 'blue.600' }}>{relatedPost.title}</Text>
                            <Flex align="center" gap={2} fontSize="xs" color={textSecondary}>
                              <Text>{relatedPost.category}</Text>
                              <Text>•</Text>
                              <Text>{relatedPost.readTime} min</Text>
                            </Flex>
                          </Box>
                        </Flex>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box >
    </>
  )
}