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
    const mockPosts: Record<string, BlogPost> =
    {
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
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #5d93fe;">Key Recruitment Overview</h2>
  
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
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Rajasthan Staff Selection Board (RSSB)</td>
        </tr>
        <tr style="background:#fafafa;">
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#4a5568;">Position</td>
          <td style="padding:14px 16px;border-bottom:1px solid #f1f5f9;color:#2d3748;font-weight:500;">Village Development Officer (VDO)</td>
        </tr>
        <tr>
          <td style="padding:14px 16px;color:#4a5568;">Total Positions</td>
          <td style="padding:14px 16px;color:#2b6cb0;font-weight:600;font-size:1.1rem;">850</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Eligibility Requirements</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #38b2ac;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Age Criteria</h3>
      <p style="margin:0;color:#4a5568;">18 to 40 years as of January 1, 2026</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #805ad5;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Educational Qualification</h3>
      <p style="margin:0;color:#4a5568;">Bachelor's degree in any discipline from a recognized university</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;border-left:4px solid #ed8936;">
      <h3 style="margin:0 0 12px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Computer Proficiency (Any One Required)</h3>
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
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Important Timeline</h2>
  
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
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Fee Structure</h2>
  
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
          <td style="padding:14px 16px;color:#2d3748;font-size:0.9rem;">One-time registration fee - no additional charges for future RSSB applications</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Required Documents</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;">
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #38a169;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;font-size:1.1rem;">✓</span>
          Graduation degree certificate
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;font-size:1.1rem;">✓</span>
          Class 10th mark sheet
        </li>
        <li style="margin:0 0 0 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#38a169;font-size:1.1rem;">✓</span>
          Aadhaar card copy
        </li>
      </ul>
    </div>
    
    <div style="padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #2b6cb0;">
      <ul style="margin:0;padding:0;list-style:none;">
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;font-size:1.1rem;">✓</span>
          Valid mobile number & email ID
        </li>
        <li style="margin:0 0 12px 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;font-size:1.1rem;">✓</span>
          Recent passport-size photograph
        </li>
        <li style="margin:0 0 0 0;color:#4a5568;position:relative;padding-left:24px;">
          <span style="position:absolute;left:0;top:2px;color:#2b6cb0;font-size:1.1rem;">✓</span>
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
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Application Process</h2>
  
  <div style="display:grid;gap:16px;">
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">1</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Register on RSSB Portal</h3>
        <p style="margin:0;color:#4a5568;font-size:0.95rem;">Create your account on the official RSSB One Time Registration (OTR) portal</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">2</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Upload Required Documents</h3>
        <p style="margin:0;color:#4a5568;font-size:0.95rem;">Upload photograph, signature, and all required documents in specified format</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">3</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Pay Application Fee</h3>
        <p style="margin:0;color:#4a5568;font-size:0.95rem;">Complete fee payment online (₹600 for General/OBC, ₹400 for OBC-NCL/SC/ST)</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">4</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Complete Application Form</h3>
        <p style="margin:0;color:#4a5568;font-size:0.95rem;">Fill the VDO application form with accurate personal and educational details</p>
      </div>
    </div>
    
    <div style="display:flex;align-items:flex-start;padding:20px;background:#f8fafc;border-radius:8px;">
      <div style="flex-shrink:0;width:32px;height:32px;background:#4299e1;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600;margin-right:16px;">5</div>
      <div>
        <h3 style="margin:0 0 4px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Submit and Download</h3>
        <p style="margin:0;color:#4a5568;font-size:0.95rem;">Submit application, note down application number, and download confirmation receipt</p>
      </div>
    </div>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Examination Details</h2>
  
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;">
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Exam Mode</h3>
      <p style="margin:0;color:#4a5568;">Offline (Pen & Paper)</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Marking Scheme</h3>
      <p style="margin:0;color:#4a5568;">1 mark per correct answer</p>
    </div>
    
    <div style="padding:20px;background:#f8fafc;border-radius:8px;text-align:center;">
      <h3 style="margin:0 0 8px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Negative Marking</h3>
      <p style="margin:0;color:#4a5568;">Check official notification</p>
    </div>
  </div>
  
  <div style="margin-top:20px;padding:20px;background:#f8fafc;border-radius:8px;">
    <h3 style="margin:0 0 12px 0;color:#2d3748;font-size:1.1rem;font-weight:600;">Exam Syllabus Coverage</h3>
    <p style="margin:0;color:#4a5568;">General Knowledge, Science, Rajasthan History & Culture, Rural Development, Computer Knowledge, Reasoning & Mental Ability</p>
  </div>
</section>

<section style="margin-bottom:40px;">
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Selection Timeline</h2>
  
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
  <h2 style="color:#2d3748;margin:0 0 20px 0;font-size:1.5rem;font-weight:600;padding-bottom:8px;border-bottom:2px solid #e2e8f0;">Frequently Asked Questions</h2>
  
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