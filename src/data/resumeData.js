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
      'Cross-functional Collaboration', 'System Design fundamentals', 'AI/ML Concepts - RAG, Agentic AI, Gen AI' 
    ],
  },
  {
    label: 'Tech Stack',
    items: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Express JS', 'SQL', 'MongoDB'],
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
    items: ['Figma', 'GitHub (basic)', 'Teramind', 'Prompt Engineering', 'Claude', 'Lovable', 'ChatGPT', 'Gemini'],
  },
]

export const experience = [
  {
    company: 'Ultimez Technology',
    title: 'Junior Product Manager',
    period: 'Aug 2024 – Present',
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
    documents: [
      { label: 'Letter of Recommendation', url: 'https://drive.google.com/file/d/1UYiz7ZxWwJ_hpJt3LhHkU0BCPMHlyVCo/view?usp=sharing' },
      { label: 'Appreciation Letter', url: 'https://drive.google.com/file/d/10145dRa-Jns-kV9MRo7U_wOuMN64nCDC/view?usp=sharing' },
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
    link: 'https://miro.com/app/board/uXjVHx7Kflw=/?share_link_id=808499242421',
  },
  {
    tag: 'Competitor Teardown ',
    title: 'WhatsApp Community VS Instagram Channel',
    description:
      'Compared onboarding, notification design, and engagement mechanics of WhatsApp Communities vs. Instagram Channels; produced a feature-prioritization brief on which patterns drive higher community retention, applicable to community-product roadmaps.',
    metrics: ['Feature-prioritization brief', 'Community retention focus'],
    link: 'https://miro.com/app/board/uXjVHssCF9c=/?share_link_id=432925261532',
  },
  {
    tag: 'Personal Project',
    title: 'Voice of Customer Co-pilot — AI Feedback Analysis Tool',
    description:'Designing an AI-powered tool that ingests raw customer feedback (reviews, support tickets, survey responses) and auto-clusters it into themes, sentiment, and priority signals — helping PMs spot recurring pain points and feature requests without manual tagging.',
    metrics: ['Theme clustering', 'Sentiment scoring', 'Feedback triage'],
    docLink: 'https://docs.google.com/document/d/1a8QJjr7nQZfYCasrX4I7VlnUUafTWIptdS8r2yuvWqQ/edit?usp=sharing',
    link: 'https://vo-c-copilot.vercel.app/',
    
  },
]

export const education = [
  {
    degree: 'B.E., Computer Science',
    institution: 'Dayananda Sagar College of Engineering, Bengaluru, Karnataka',
    year: '2024',
    project: {
      title: 'Cloud-Based Intelligent Healthcare System',
      label: 'View Engineering Project',
      url: 'https://docs.google.com/document/d/1gTp4ld9MjoM89inmkwX5zX8ZSasKsq1CjXZ2UirlMJU/edit?usp=sharing',
      bullets: [
        'Developed a cloud-based healthcare platform for AI-driven medical image analysis.',
        'Built CNN models for pneumonia and carotid artery abnormality detection.',
        'Performed image preprocessing, normalization, augmentation, and model evaluation.',
        'Containerized ML models using Docker and deployed them using Kubernetes for scalable inference.',
        'Developed a web interface for medical image upload, patient data, predictions, and result visualization.',
        'Implemented authentication, authorization, encryption, and RBAC for secure healthcare data handling.',
      ],
      tech: ['Python', 'TensorFlow/Keras', 'CNN', 'Docker', 'Kubernetes', 'Amazon S3', 'PIL', 'NumPy'],
      award : 'Excellence in AI-Powered Healthcare Innovation',
    },
  },
  {
    degree: 'Diploma, Computer Science',
    institution: 'KLE Technological University, Hubli, Karnataka',
    year: '2021',
    project: {
      title: 'Facial Expression Recognition Using CNN',
      label: 'View Diploma Project',
      url: 'https://docs.google.com/document/d/1spM8zQbbCPXItBY8_6M2M0Fdn0MER6a2-n3EZrJmu7M/edit?usp=sharing',
      bullets: [
        'Developed a CNN-based facial expression recognition system using the FER2013 dataset.',
        'Preprocessed and balanced facial images using grayscale conversion, normalization, and oversampling.',
        'Built and trained a modified LeNet-based CNN to classify 7 emotions.',
        'Implemented real-time face detection and emotion recognition using OpenCV and webcam input.',
        'Evaluated the model using accuracy, precision, recall, and F1-score, achieving 86.77% test accuracy.',
      ],
      tech: ['Python', 'CNN', 'Theano', 'NumPy', 'CUDA', 'OpenCV'],
      award : 'Best AI-Based Innovation',
    },
  },
  {
    degree: "Secondary School (10th)",
    institution: "St. Antony's Public School (CBSE), Hubli, Karnataka",
    year: '2018',
    project: {
      title: 'Academics & Extracurriculars',
      bullets: [
        'Completed secondary education under the CBSE curriculum with a strong academic foundation.',
        'Developed interest in Mathematics, Science, Computer Studies, and logical problem-solving.',
        'Worked on group-based academic projects, developing research, communication, and collaboration skills.',
        'Developed teamwork, leadership, discipline, and time-management skills through sports and extracurricular activities.',
        'Actively Participated in school sports and cultural activities, gaining confidence in teamwork and public interaction.',
        'Built an early interest in computers and technology, which encouraged further learning in the field.',
      ],
    },
  },
]

export const certifications = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Oct 2022',
    note: '300-hour developer certification',
    link: 'https://freecodecamp.org/certification/_heebaanjum/responsive-web-design',
  },
  {
    title: 'Machine Learning for All',
    issuer: 'University of London (Coursera)',
    date: 'Dec 2022',
    link: 'https://coursera.org/verify/8AR86UZ3S564',
  },
  {
    title: 'Smart Device & Mobile Emerging Technologies',
    issuer: 'Yonsei University (Coursera)',
    date: 'Dec 2022',
    link: 'https://coursera.org/verify/58HJGVZ5AWM3',
  },
  {
    title: 'Python Programming Essentials Bootcamp',
    issuer: 'LetsUpgrade × NSDC × ITM Edutech',
    date: 'Nov 2022',
    note: '5-day bootcamp',
    link: 'https://www.letsupgrade.in/verify',
  },
  {
    title: 'Starting with Aptitude Preparation',
    issuer: 'TalentBattle',
    date: 'Jan 2023',
    note: '10-hour workshop',
    link: 'https://www.talentbattle.in',
  },
  {
    title: 'Pragmatic Approach to Cyber Security',
    issuer: 'C-DAC Hyderabad / NIELIT (FutureSkills PRIME), MeitY',
    date: 'May 2023',
    note: 'Bridge course training',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'May 2023',
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    date: 'May 2023',
  },
  {
    title: 'C++ for Problem Solving - 1',
    issuer: 'CodeChef',
    date: 'Jun 2023',
    link: 'https://www.codechef.com/certificates/verify',
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Jun 2023',
  },
  {
    title: 'Social Network Analysis',
    issuer: 'UC Davis (Coursera)',
    date: 'Jun 2023',
    link: 'https://coursera.org/verify/6BQLTDJCFZP2',
  },
  {
    title: 'Complete Bootstrap & React Bootcamp with Hands-On Projects',
    issuer: 'Udemy',
    date: 'Apr 2024',
    note: '13-hour course',
    link: 'https://ude.my/UC-b70a5b93-15fe-40cc-a066-52b56801057f',
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
