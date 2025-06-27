import { notFound } from 'next/navigation'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { Box, Flex, Grid, Heading, Text, Link, Button, Stack, Avatar } from '@chakra-ui/react'
import { Clock, Calendar, Tag, Share2, Eye } from 'lucide-react'
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
    const mockPosts: Record<string, BlogPost> = {
      'ssc-cgl-2024-complete-guide': {
        id: '1',
        slug: 'ssc-cgl-2024-complete-guide',
        title: 'SSC CGL 2024: Complete Guide to Staff Selection Commission Combined Graduate Level Examination',
        excerpt: 'Comprehensive guide covering all aspects of SSC CGL 2024 including eligibility, syllabus, exam pattern, preparation tips, and important dates.',
        content: `
        <p>
  Are you an aspiring Computer Programmer looking for a government job in Rajasthan? The Rajasthan Public Service Commission (RPSC) has officially released a recruitment notification for Computer Programmer posts in various government departments. This post is a complete guide for aspirants — from eligibility to syllabus to tips!
</p>
</br>

<h2 style="color: #5d93fe;">📌 <strong>Overview of RPSC Computer Programmer Recruitment</strong></h2>
</br>
<table style="width: 100%; border-collapse: collapse; border: 1px solid #5d93fe;" cellpadding="8">
  <thead>
    <tr style="background-color: #dee9ff; border: 1px solid #5d93fe; ">
      <th style="text-align: left;border: 1px solid #5d93fe; padding-left: 5px">Feature</th>
      <th style="text-align: left;border: 1px solid #5d93fe;">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border: 1px solid #5d93fe;">Recruiting Body</td><td style="border: 1px solid #5d93fe;">Rajasthan Public Service Commission (RPSC)</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Post Name</td><td style="border: 1px solid #5d93fe;">Computer Programmer</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Advt No.</td><td style="border: 1px solid #5d93fe;">[To be updated as per official notice]</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Job Location</td><td style="border: 1px solid #5d93fe;">Rajasthan</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Total Vacancies</td><td style="border: 1px solid #5d93fe;">100+ (Expected)</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Application Mode</td><td style="border: 1px solid #5d93fe;">Online</td></tr>
    <tr>
      <td style="border: 1px solid #5d93fe;">Official Website</td>
      <td style="border: 1px solid #5d93fe; "><a href="https://rpsc.rajasthan.gov.in" target="_blank">https://rpsc.rajasthan.gov.in</a></td>
    </tr>
  </tbody>
</table>
<br/>
<h2 style="color: #5d93fe;">📅 <strong>Important Dates</strong></h2>
<br/>
<table style="width: 100%; border-collapse: collapse; border: 1px solid #5d93fe;" cellpadding="8">
  <thead>
    <tr style="background-color: #dee9ff;">
      <th style="text-align: left;border: 1px solid #5d93fe;">Event</th>
      <th style="text-align: left;border: 1px solid #5d93fe;">Date (Tentative)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border: 1px solid #5d93fe;">Notification Release Date</td><td style="border: 1px solid #5d93fe;">June 2025</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Online Application Starts</td><td style="border: 1px solid #5d93fe;">July 2025</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Last Date to Apply</td><td style="border: 1px solid #5d93fe;">August 2025</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Exam Date</td><td style="border: 1px solid #5d93fe;">Oct–Nov 2025</td></tr>
    <tr><td style="border: 1px solid #5d93fe;">Admit Card Release</td><td style="border: 1px solid #5d93fe;">10 days before exam</td></tr>
  </tbody>
</table>
<br/>
<h2 style="color: #5d93fe;">✅ <strong>Eligibility Criteria</strong></h2>
<br/>
<h3 style="color: #5d93fe;">1. Educational Qualification</h3>

<table style="width: 100%; border-collapse: collapse; border: 1px solid #5d93fe;" cellpadding="8">
  <thead>
    <tr style="background-color: #dee9ff;">
      <th style="text-align: left;border: 1px solid #5d93fe;">Qualification</th>
      <th style="text-align: left;border: 1px solid #5d93fe;">Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #5d93fe;">Degree</td>
      <td style="border: 1px solid #5d93fe;">B.E./B.Tech/M.Sc. in CS/IT or MCA or equivalent</td>
    </tr>
    <tr>
      <td style="border: 1px solid #5d93fe;">Preferred</td>
      <td style="border: 1px solid #5d93fe;">Knowledge of Rajasthani culture and Hindi in Devanagari script</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #5d93fe;">2. Age Limit (as on 01.01.2026)</h3>

<table style="width: 100%; border-collapse: collapse; border: 1px solid #5d93fe;" cellpadding="8">
  <thead>
    <tr style="background-color: #dee9ff;">
      <th  style="text-align: left;border: 1px solid #5d93fe;">Category</th>
      <th style="text-align: left;border: 1px solid #5d93fe;">Age Limit</th>
    </tr style="border: 1px solid #5d93fe;">
  </thead>
  <tbody>
    <tr style="border: 1px solid #5d93fe;"><td style="border: 1px solid #5d93fe;">General</td><td>21–40 Years</td></tr>
    <tr style="border: 1px solid #5d93fe;"><td style="border: 1px solid #5d93fe;">SC/ST/OBC/MBC (Rajasthan)</td><td>Relaxation as per rules</td></tr>
  </tbody>
</table>

<h3 style="color: #5d93fe;">🧾 <strong>Application Process: Steps to Apply Online</strong></h3>
<ol>
  <li>Visit the official RPSC website: <a href="https://rpsc.rajasthan.gov.in" target="_blank">https://rpsc.rajasthan.gov.in</a></li>
  <li>Register on SSO Rajasthan Portal: <a href="https://sso.rajasthan.gov.in" target="_blank">https://sso.rajasthan.gov.in</a></li>
  <li>Go to "Recruitment Portal" → Find "Computer Programmer Recruitment 2025"</li>
  <li>Fill the form, upload documents, pay the fee</li>
  <li>Submit and print for reference</li>
</ol>

<h3 style="color: #5d93fe;">💳 <strong>Application Fees</strong></h3>

<table style="width: 100%; border-collapse: collapse; border: 1px solid #5d93fe;" cellpadding="8">
  <thead>
    <tr style="background-color: #dee9ff;">
      <th style="text-align: left;border: 1px solid #5d93fe;">Category</th>
      <th style="text-align: left;border: 1px solid #5d93fe;">Fee</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border: 1px solid #5d93fe;"><td style="border: 1px solid #5d93fe;">General</td><td>₹600</td></tr>
    <tr style="border: 1px solid #5d93fe;"><td style="border: 1px solid #5d93fe;">OBC (Non-creamy)</td><td>₹400</td></tr>
    <tr style="border: 1px solid #5d93fe;"><td style="border: 1px solid #5d93fe;">SC/ST/PwD (Rajasthan)</td><td>₹400</td></tr>
  </tbody>
</table>
<br/>
<h3 style="color: #5d93fe;">📢 <strong>Final Words</strong></h3>
<br/>
<p>
  This is a golden opportunity for Computer Science graduates who want a secure government job in Rajasthan. Start your preparation today with a strategic plan, and stay updated with official announcements.
</p>
<br/>
<p>📣 Stay tuned and bookmark this page for updates and exam resources!</p>

<h3 style="color: #5d93fe;"><strong>❓ FAQs – RPSC Computer Programmer Recruitment</strong></h3>

<p><strong>Q.</strong> What is the salary for a Computer Programmer in Rajasthan?<br>
<strong>A.</strong> The salary is as per Level-11 Pay Matrix (Approx ₹56,100/month + allowances).</p>

<p><strong>Q.</strong> Can final-year students apply?<br>
<strong>A.</strong> Only if the final result is declared before the document verification.</p>

<p><strong>Q.</strong> Is prior work experience required?<br>
<strong>A.</strong> No, freshers can apply.</p>

        `,
        featuredImage: '/rr_adv.png',
        author: {
          name: 'Hitesh Yadav',
          avatar: '/images/authors/priya-sharma.jpg',
          bio: 'Government Job Expert with 8+ years of experience in competitive exam guidance'
        },
        publishedAt: '2024-06-20T10:00:00Z',
        updatedAt: '2024-06-22T15:30:00Z',
        readTime: 8,
        views: 15420,
        category: {
          name: 'SSC Jobs',
          slug: 'ssc-jobs'
        },
        tags: ['SSC CGL', 'Government Jobs', 'Competitive Exam', 'Career Guide'],
        seoTitle: 'SSC CGL 2024: Complete Exam Guide, Eligibility, Syllabus & Preparation Tips',
        seoDescription: 'Complete guide to SSC CGL 2024 exam. Get detailed information on eligibility, exam pattern, syllabus, preparation strategy, and career opportunities.',
        seoKeywords: ['SSC CGL 2024', 'Staff Selection Commission', 'Government Jobs', 'Competitive Exam', 'CGL Preparation']
      },
      'ssc-chsl-2024-notification': {
        id: '2',
        slug: 'ssc-chsl-2024-notification',
        title: 'SSC CHSL 2024: Notification Released, Apply Now for 3712 Posts',
        excerpt: 'Staff Selection Commission has released CHSL 2024 notification for 3712 posts. Check eligibility criteria, important dates, and complete application process.',
        content: `
          <h2>SSC CHSL 2024 Notification Overview</h2>
          <p>The Staff Selection Commission (SSC) has officially released the Combined Higher Secondary Level (CHSL) 2024 notification, inviting applications for 3712 vacant posts across various government departments.</p>
          
          <h3>Available Posts</h3>
          <ul>
            <li>Lower Divisional Clerk (LDC): 2729 posts</li>
            <li>Junior Secretariat Assistant (JSA): 542 posts</li>
            <li>Postal Assistant: 441 posts</li>
          </ul>
          
          <h3>Key Dates</h3>
          <ul>
            <li>Online Application Start: May 27, 2024</li>
            <li>Last Date to Apply: June 25, 2024</li>
            <li>Tier 1 Exam: August 2024</li>
          </ul>
        `,
        featuredImage: '/rr_adv.png',
        author: {
          name: 'Rajesh Kumar',
          avatar: '/images/authors/rajesh-kumar.jpg',
          bio: 'SSC Exam Specialist with 10+ years of experience in government recruitment'
        },
        publishedAt: '2024-06-18T09:00:00Z',
        updatedAt: '2024-06-18T09:00:00Z',
        readTime: 6,
        views: 12850,
        category: {
          name: 'SSC Jobs',
          slug: 'ssc-jobs'
        },
        tags: ['SSC CHSL', 'Government Jobs', 'Notification', 'Apply Online'],
        seoTitle: 'SSC CHSL 2024 Notification: Apply for 3712 Posts, Eligibility & Dates',
        seoDescription: 'SSC CHSL 2024 notification released for 3712 posts. Get complete details on eligibility, application process, exam dates, and selection procedure.',
        seoKeywords: ['SSC CHSL 2024', 'SSC CHSL Notification', 'Government Jobs', 'Apply Online']
      },
      'railway-recruitment-2024': {
        id: '3',
        slug: 'railway-recruitment-2024',
        title: 'Railway Jobs 2024: Latest RRB Notifications and Upcoming Recruitments',
        excerpt: 'Complete guide to Railway recruitment 2024. Stay updated with latest RRB notifications, exam dates, and upcoming job opportunities in Indian Railways.',
        content: `
          <p style="font-size: 28px;">
  🖥️ <span style="color: #5d93fe;"><strong>RPSC Computer Programmer Recruitment 2025 – Complete Guide</strong></span>
</p>

<hr style="height: 3px; background-color: #5d93fe; border: none; margin: 1rem 0;">

<p>
  <img src="https://th.bing.com/th/id/OIP.wc_fKGoRnwYcLTgMArppMQHaD7?pid=ImgDet&amp;rs=1" alt="RPSC Recruitment Banner" style="width: 100%; max-width: 100%; max-height: 200px; border-radius: 10px;">
</p>

<p>
  Are you an aspiring Computer Programmer looking for a government job in Rajasthan? The Rajasthan Public Service Commission (RPSC) has officially released a recruitment notification for Computer Programmer posts in various government departments. This post is a complete guide for aspirants — from eligibility to syllabus to tips!
</p>

<h2 style="color: #5d93fe;">📌 <strong>Overview of RPSC Computer Programmer Recruitment</strong></h2>

<table style="width: 100%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Feature</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Recruiting Body</td><td>Rajasthan Public Service Commission (RPSC)</td></tr>
    <tr><td>Post Name</td><td>Computer Programmer</td></tr>
    <tr><td>Advt No.</td><td>[To be updated as per official notice]</td></tr>
    <tr><td>Job Location</td><td>Rajasthan</td></tr>
    <tr><td>Total Vacancies</td><td>100+ (Expected)</td></tr>
    <tr><td>Application Mode</td><td>Online</td></tr>
    <tr>
      <td>Official Website</td>
      <td><a href="https://rpsc.rajasthan.gov.in" target="_blank">https://rpsc.rajasthan.gov.in</a></td>
    </tr>
  </tbody>
</table>

<h2 style="color: #5d93fe;">📅 <strong>Important Dates</strong></h2>

<table style="width: 100%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Event</th>
      <th>Date (Tentative)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Notification Release Date</td><td>June 2025</td></tr>
    <tr><td>Online Application Starts</td><td>July 2025</td></tr>
    <tr><td>Last Date to Apply</td><td>August 2025</td></tr>
    <tr><td>Exam Date</td><td>Oct–Nov 2025</td></tr>
    <tr><td>Admit Card Release</td><td>10 days before exam</td></tr>
  </tbody>
</table>

<h2 style="color: #5d93fe;">✅ <strong>Eligibility Criteria</strong></h2>

<h3 style="color: #5d93fe;">1. Educational Qualification</h3>

<table style="width: 100%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Qualification</th>
      <th>Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Degree</td>
      <td>B.E./B.Tech/M.Sc. in CS/IT or MCA or equivalent</td>
    </tr>
    <tr>
      <td>Preferred</td>
      <td>Knowledge of Rajasthani culture and Hindi in Devanagari script</td>
    </tr>
  </tbody>
</table>

<h3 style="color: #5d93fe;">2. Age Limit (as on 01.01.2026)</h3>

<table style="width: 100%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Category</th>
      <th>Age Limit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>General</td><td>21–40 Years</td></tr>
    <tr><td>SC/ST/OBC/MBC (Rajasthan)</td><td>Relaxation as per rules</td></tr>
  </tbody>
</table>

<h3 style="color: #5d93fe;">🧾 <strong>Application Process: Steps to Apply Online</strong></h3>
<ol>
  <li>Visit the official RPSC website: <a href="https://rpsc.rajasthan.gov.in" target="_blank">https://rpsc.rajasthan.gov.in</a></li>
  <li>Register on SSO Rajasthan Portal: <a href="https://sso.rajasthan.gov.in" target="_blank">https://sso.rajasthan.gov.in</a></li>
  <li>Go to "Recruitment Portal" → Find "Computer Programmer Recruitment 2025"</li>
  <li>Fill the form, upload documents, pay the fee</li>
  <li>Submit and print for reference</li>
</ol>

<h3 style="color: #5d93fe;">💳 <strong>Application Fees</strong></h3>

<table style="width: 100%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Category</th>
      <th>Fee</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>General</td><td>₹600</td></tr>
    <tr><td>OBC (Non-creamy)</td><td>₹400</td></tr>
    <tr><td>SC/ST/PwD (Rajasthan)</td><td>₹400</td></tr>
  </tbody>
</table>

<h3 style="color: #5d93fe;">📢 <strong>Final Words</strong></h3>

<p>
  This is a golden opportunity for Computer Science graduates who want a secure government job in Rajasthan. Start your preparation today with a strategic plan, and stay updated with official announcements.
</p>

<p>📣 Stay tuned and bookmark this page for updates and exam resources!</p>

<h3 style="color: #5d93fe;"><strong>❓ FAQs – RPSC Computer Programmer Recruitment</strong></h3>

<p><strong>Q.</strong> What is the salary for a Computer Programmer in Rajasthan?<br>
<strong>A.</strong> The salary is as per Level-11 Pay Matrix (Approx ₹56,100/month + allowances).</p>

<p><strong>Q.</strong> Can final-year students apply?<br>
<strong>A.</strong> Only if the final result is declared before the document verification.</p>

<p><strong>Q.</strong> Is prior work experience required?<br>
<strong>A.</strong> No, freshers can apply.</p>
        `,
        featuredImage: '/rr_adv.png',
        author: {
          name: 'Anita Singh',
          avatar: '/images/authors/anita-singh.jpg',
          bio: 'Railway Recruitment Expert and Career Counselor'
        },
        publishedAt: '2024-06-12T11:15:00Z',
        updatedAt: '2024-06-20T16:45:00Z',
        readTime: 7,
        views: 18750,
        category: {
          name: 'Railway Jobs',
          slug: 'railway-jobs'
        },
        tags: ['Railway Jobs', 'RRB Recruitment', 'Government Jobs', 'Indian Railways'],
        seoTitle: 'Railway Jobs 2024: Latest RRB Notifications, Exam Dates & Apply Online',
        seoDescription: 'Complete guide to Railway recruitment 2024. Latest RRB notifications, upcoming job opportunities, eligibility criteria, and application process.',
        seoKeywords: ['Railway Jobs 2024', 'RRB Recruitment', 'Indian Railways', 'Government Jobs']
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
        slug: 'ssc-chsl-2024-notification',
        title: 'SSC CHSL 2024: Notification Released, Apply Now',
        excerpt: 'Staff Selection Commission has released CHSL 2024 notification. Check eligibility, important dates, and application process.',
        featuredImage: '/rr_adv.png',
        publishedAt: '2024-06-18T09:00:00Z',
        readTime: 5,
        category: 'SSC Jobs'
      },
      {
        slug: 'ssc-gd-constable-recruitment',
        title: 'SSC GD Constable 2024: 46,617 Vacancies Announced',
        excerpt: 'Massive recruitment for SSC GD Constable positions across various paramilitary forces. Complete details inside.',
        featuredImage: '/rr_adv.png',
        publishedAt: '2024-06-15T14:30:00Z',
        readTime: 6,
        category: 'SSC Jobs'
      },
      {
        slug: 'railway-recruitment-2024',
        title: 'Railway Jobs 2024: Latest RRB Notifications',
        excerpt: 'Stay updated with latest Railway Recruitment Board notifications and upcoming job opportunities.',
        featuredImage: '/rr_adv.png',
        publishedAt: '2024-06-12T11:15:00Z',
        readTime: 7,
        category: 'Railway Jobs'
      },
      {
        slug: 'upsc-civil-services-2024',
        title: 'UPSC Civil Services 2024: Complete Preparation Guide',
        excerpt: 'Comprehensive guide for UPSC CSE 2024 preparation including syllabus, strategy, and important resources.',
        featuredImage: '/rr_adv.png',
        publishedAt: '2024-06-10T08:30:00Z',
        readTime: 12,
        category: 'UPSC Jobs'
      },
      {
        slug: 'banking-jobs-2024',
        title: 'Banking Jobs 2024: SBI, IBPS & RBI Notifications',
        excerpt: 'Latest banking sector recruitment notifications from SBI, IBPS, RBI and other major banks.',
        featuredImage: '/rr_adv.png',
        publishedAt: '2024-06-08T12:00:00Z',
        readTime: 8,
        category: 'Banking Jobs'
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
      .slice(0, 3) // Limit to 3 posts

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajasthan-recruitment.vercel.app'
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
          url: `${siteUrl}${post.featuredImage}`,
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
      'banking-jobs-2024'
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
      logo: { '@type': 'ImageObject', url: `https://rajasthan-recruitment.vercel.app/logo.png` },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rajasthan-recruitment.vercel.app/blog/${post.slug}` },
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
                <Flex flexWrap="wrap" align="center" gap={6} pb={2} fontSize="sm" color={textSecondary} borderBottomWidth={1} borderColor={borderColor} pt={4}>
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
                  <Flex align="center" gap={1}>
                    <Eye size={16} />
                    <Text>{post.views.toLocaleString()} views</Text>
                  </Flex>
                </Flex>
              </Box>
              {/* Article Content */}
              <Box bg={bgCard} p={{ base: 2, md: 4 }} mb={6}>
                <Box className="prose" maxW="none" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={textMain} dangerouslySetInnerHTML={{ __html: post.content }} />
              </Box>
              {/* Tags */}
              <Box bg={bgCard} p={6} mb={6}>
                <Heading as="h3" size="md" color={textMain} mb={3}>Tags</Heading>
                <Flex flexWrap="wrap" gap={2}>
                  {post.tags.map((tag) => (
                    <Link as={NextLink} key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      px={3} py={1} borderRadius="full" fontSize="sm" bg="gray.100" color="gray.700" _hover={{ bg: 'gray.200' }}>
                      #{tag}
                    </Link>
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
                            <Text fontWeight="medium" fontSize="sm" color={textMain} maxLines={2} mb={1} _groupHover={{ color: 'blue.600' }}>{relatedPost.title}</Text>
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