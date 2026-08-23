// Single source of truth. Every value here is taken directly from
// Heeba Anjum Hosur's resume — nothing invented or placeholder.

export const profile = {
  name: 'Heeba Anjum Hosur',
  role: 'Product Manager',
  exploring: ['Technical PM', 'Growth PM', 'AI/Data PM'],
  location: 'Bengaluru, Karnataka, India',
  email: 'heebaanjum25@gmail.com',
  phone: '+91 9538379507',
  linkedin: 'https://linkedin.com/in/heeba-anjum',
  linkedinLabel: 'linkedin.com/in/heeba-anjum',
  summary:
    "Product Manager who turns ambiguous user problems into shipped features — combining hands-on technical fluency with a research-first approach to roadmap decisions. Comfortable owning a product area end-to-end: framing the problem, aligning stakeholders, scoping with engineering, and validating after launch. Most energized by reading analytics signals correctly and using AI tools to move faster without skipping rigor. Currently exploring Technical PM, Growth PM, and AI/Data PM roles in remote/hybrid setups.",
}

export const skillGroups = [
  {
    label: 'Product Management',
    items: [
      'Product Lifecycle Management (Kickoff to Deployment & Post-release Validation)',
      'PRDs',
      'User Stories',
      'Roadmapping',
      'Cross-functional Collaboration',
    ],
  },
  {
    label: 'Tech Stack',
    items: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Express JS', 'MongoDB'],
  },
  {
    label: 'Analytics & SEO',
    items: [
      'Google Analytics',
      'Google Search Console',
      'Matomo',
      'Microsoft Clarity',
      'Ahrefs',
      'SEMrush',
    ],
  },
  {
    label: 'QA & Performance',
    items: ['Postman (API Testing)', 'API Documentation', 'SonarQube', 'New Relic'],
  },
  {
    label: 'Design & Productivity',
    items: ['Figma', 'GitHub (basic)', 'Teramind', 'Prompt Engineering (Claude/Anthropic)'],
  },
]

export const experience = [
  {
    company: 'Ultimez Technology',
    title: 'Junior Product Manager',
    period: 'Aug 2024 – Jun 2026',
    duration: '1 yr 10 mos',
    location: 'Hubli, India',
    bullets: [
      'Managed end-to-end product lifecycle for multiple modules of a crypto-based web platform — covering requirement gathering, PRDs, development tracking, release, and post-launch review — working with a 4–7 member team of developers and designers.',
      'Followed a structured in-house workflow (similar to Agile, without Jira) with defined stages from kickoff to deployment and post-release validation.',
      'Used Google Analytics, Google Search Console, Matomo, and Microsoft Clarity to study user behavior, heatmaps, and session recordings, and identified UX issues to plan fixes.',
      'Ran SEO audits using Ahrefs and SEMrush to find content and keyword gaps, and worked on improving search visibility for content-driven sections.',
      'Tested API responses with Postman against API documentation before release, and worked with engineering on SonarQube code quality reviews to catch issues before they reached production.',
      'Created wireframes and prototypes in Figma for new features and shared them with developers for implementation, using GitHub for basic tracking.',
      'Used Claude (Anthropic) with prompt engineering to speed up writing PRDs and user stories.',
    ],
  },
]

export const projects = [
  {
    tag: 'Case Study',
    title: 'Swiggy Instamart — Discovery & Onboarding Teardown',
    description:
      "Audited Swiggy Instamart's category discovery and search flow against Blinkit and Zepto, mapping the journey from app-open to first cart-add and identifying 3 friction points; documented a PRD-style recommendation with proposed UX fixes and target metrics (search-to-cart conversion, time-to-first-add).",
    metrics: ['3 friction points identified', 'search-to-cart conversion', 'time-to-first-add'],
  },
  {
    tag: 'Ongoing Project',
    title: 'Competitor Teardown',
    description:
      'Compared onboarding, notification design, and engagement mechanics of WhatsApp Communities vs. Instagram Channels; produced a feature-prioritization brief on which patterns drive higher community retention, applicable to community-product roadmaps.',
    metrics: ['Feature-prioritization brief', 'Community retention focus'],
  },
  {
    tag: 'Ongoing Project',
    title: 'Google Analytics for Job Seekers',
    description:
      'Building a personal GA4-style funnel (applications → responses → interviews → offers) to track my own job search, identifying which channels (LinkedIn, referrals, direct) converted best and adjusting strategy using Growth PM funnel-analysis methods.',
    metrics: ['Applications', 'Responses', 'Interviews', 'Offers'],
  },
]

export const education = [
  {
    degree: 'B.E., Computer Science',
    institution: 'Dayananda Sagar College of Engineering, Bengaluru, Karnataka',
    year: '2024',
  },
  {
    degree: 'Diploma, Computer Science',
    institution: 'KLE Technological University, Hubli, Karnataka',
    year: '2021',
  },
  {
    degree: "Secondary School (10th)",
    institution: "St. Antony's Public School (CBSE), Hubli, Karnataka",
    year: '2018',
  },
]

// No separate certifications were listed on the resume beyond skills/tools;
// the resume calls out demonstrated tool proficiency instead of issued
// certificates, so this section highlights hands-on tool proficiency areas.
export const proficiencies = [
  'Google Analytics',
  'Google Search Console',
  'Matomo',
  'Microsoft Clarity',
  'Ahrefs',
  'SEMrush',
  'Postman (API Testing)',
  'SonarQube',
  'New Relic',
  'Figma',
  'Prompt Engineering (Claude/Anthropic)',
]
