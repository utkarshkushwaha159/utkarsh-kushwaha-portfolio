import { Project, Experience, SkillItem, HackathonAchievement, EducationInfo } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Utkarsh Kushwaha',
  title: 'Utkarsh Kushwaha — Software Developer Portfolio',
  roles: [
    'Computer Science Student',
    'Software Developer',
    'Problem Solver',
  ],
  status: 'Open to Software Engineering Internships & Opportunities',
  email: 'utkarshkushwaha6307@gmail.com',
  github: 'https://github.com/utkarshkushwaha159',
  linkedin: 'https://www.linkedin.com/in/utkarsh-kk',
  intro:
    "I'm a Computer Science undergraduate passionate about building technology-driven solutions to real-world problems. I enjoy learning by building, experimenting with new technologies and turning ideas into practical software.",
  aboutExtended: [
    "I am a Computer Science & Engineering undergraduate at Noida Institute of Engineering & Technology (NIET), affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow), currently maintaining an academic standing of 8.54 CGPA.",
    "My focus centers on practical software engineering: building scalable backends, writing clean object-oriented code, designing efficient data structures and algorithms, and developing responsive modern web applications.",
    "Through hands-on open-source contributions with GirlScript Summer of Code, organizational internships, and national competitive hackathons such as Smart India Hackathon 2026, I continually hone my engineering skills and collaborate with diverse technical teams.",
  ],
  stats: [
    { label: 'Academic Standing', value: '8.54 CGPA', detail: 'NIET (AKTU Lucknow)' },
    { label: 'Core Foundations', value: 'DSA & OOP', detail: 'Java, Python, C, C++' },
    { label: 'Hackathon Finalist', value: 'SIH 2026', detail: 'Top 45 / 350+ Teams' },
    { label: 'Open Source', value: 'GSSoC 2026', detail: 'Shipped Code to Repositories' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dcms',
    fieldCode: '01',
    title: 'Digital Complaint Management System',
    subtitle: 'Structured Grievance Workflow & Relational Persistence Engine',
    category: 'Systems & OOP',
    summary:
      'A structured complaint management platform engineered with core object-oriented programming principles, database integration, and transparent status lifecycles.',
    problemStatement:
      'Institutional complaint tracking often suffers from opaque ticket status, lack of escalation mechanisms, and inefficient record management.',
    proposedSolution:
      'Architected a tiered dispatch system encapsulating complaint models, role-based authorization, and automated status tracking with relational persistence in SQLite.',
    architectureDetails: [
      'Encapsulated domain models implementing OOP principles (encapsulation, inheritance, polymorphism).',
      'Normalized SQLite relational database schema ensuring data integrity across users and complaints.',
      'Structured complaint workflow: Submission -> Investigation -> Resolution / Escalation.',
      'Comprehensive 30+ page software documentation detailing UML class diagrams and test fixtures.',
    ],
    technologies: ['Python', 'OOP', 'SQLite', 'UML Architecture', 'Unit Testing'],
    keyFeatures: [
      'Encapsulation of sensitive complaint data with role-based boundaries',
      'Automated priority assignment based on category severity metrics',
      'Immutable state change logging for auditability and compliance',
      'Comprehensive 30+ page formal software engineering specification',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'watts-off',
    fieldCode: '02',
    title: "Watt's Off — Energy Consumption Anomaly Detection",
    subtitle: 'Statistical Anomaly Analytics & Geospatial Telemetry Portal',
    category: 'Data & Analytics',
    summary:
      'An energy consumption monitoring platform combining Python-based statistical outlier detection, interactive Leaflet.js map visualizations, and Chart.js dashboards.',
    problemStatement:
      'Power utilities and consumers often struggle to identify power leakages, meter tampering, and abnormal consumption spikes in time to prevent loss.',
    proposedSolution:
      'Built a centralized dashboard with statistical threshold analysis that parses energy consumption series data and visualizes affected nodes on an interactive map.',
    architectureDetails: [
      'Backend analytical services built with Python and Flask with normalized consumption logging in SQLite.',
      'Statistical z-score and moving-average anomaly detection evaluating consumption variance against historical baselines.',
      'Geospatial map layer powered by Leaflet.js with dynamic cluster markers indicating anomaly severity.',
      'Dual portal architecture providing tailored visual interfaces for citizens and municipal energy officers.',
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js', 'Leaflet.js'],
    keyFeatures: [
      'Statistical anomaly detection flags unexpected standard deviation surges in energy draw',
      'Interactive geospatial grid mapping pinpointing high-consumption clusters',
      'Dual-role dashboard: citizen view for household metrics and officer view for regional diagnostics',
      'Real-time temporal charts showing historical consumption curves vs projected baselines',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'atm-logging',
    fieldCode: '03',
    title: 'ATM Transaction Logging & Cash Flow Tracking System',
    subtitle: 'High-Integrity Banking Transaction Logger & Reconciliation Core',
    category: 'Systems & OOP',
    summary:
      'A deterministic Java-based transaction engine designed for recording high-volume ATM operations, calculating dynamic cash-flow vectors, and maintaining audit logs.',
    problemStatement:
      'Automated teller infrastructure requires zero-fault transactional integrity, robust exception handling, and transparent ledger analytics for liquidity balancing.',
    proposedSolution:
      'Implemented an object-oriented transaction logging engine that guarantees thread-safe balance updates, records transactions, and outputs analytical liquidity summaries.',
    architectureDetails: [
      'Java object-oriented domain model separating Account, Card, Terminal, and Transaction abstractions.',
      'DBMS connectivity ensuring transactional isolation and atomic ledger consistency.',
      'Defensive validation routines preventing negative balance states and overdraft violations.',
      'Structured reporting module generating periodic cash replenishment forecasts and logs.',
    ],
    technologies: ['Java', 'OOP', 'DBMS', 'Relational Schemas', 'Exception Architecture'],
    keyFeatures: [
      'Thread-safe transactional execution engine enforcing ACID compliance',
      'Real-time cash reserve depletion tracking across terminal denominations',
      'Automated transaction ledger formatting with session validation',
      'Supervisor audit reports highlighting transaction velocities and reconciliation discrepancies',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'iot-hazard-detection',
    fieldCode: '04',
    title: 'IoT Smoke & Fire Detection System',
    subtitle: 'Embedded Environmental Monitoring & Instant Alert System',
    category: 'IoT & Embedded',
    summary:
      'A safety-critical embedded system that synthesizes multi-sensor smoke and temperature signals to detect fire hazards instantaneously and trigger automated alerts.',
    problemStatement:
      'Conventional smoke detectors often trigger false positives or experience delays when transmitting alerts to property supervisors and emergency responders.',
    proposedSolution:
      'Engineered an embedded sensor integration pipeline running Python logic that continuously samples ambient particulate and thermal gradients to trigger rapid alert protocols.',
    architectureDetails: [
      'Hardware interface communicating with particulate smoke sensors and thermal transducers.',
      'Real-time calibration algorithm filtering out ambient dust fluctuations before escalation.',
      'Python daemon running event-driven loops for continuous sensor polling and threshold comparison.',
      'Automated alert dispatcher dispatching local siren signals and remote notifications.',
    ],
    technologies: ['Python', 'IoT', 'Embedded Systems', 'Sensor Telemetry', 'Event Processing'],
    keyFeatures: [
      'Dual-metric hazard cross-validation (particulate density + temperature delta)',
      'Sub-second threshold breach detection and rapid alarm triggering',
      'Fault-tolerant polling loops resilient against transient sensor disconnects',
      'Low-power optimization suitable for continuous deployment',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'inamigos',
    role: 'Web Development Intern',
    organization: 'InAmigos Foundation (IAF)',
    period: 'Jun 2026 – Jul 2026',
    location: 'Noida, Uttar Pradesh, India',
    type: 'internship',
    highlights: [
      'Developed and maintained responsive web pages using modern HTML5 and semantic CSS3 standards.',
      'Improved website design, cross-device usability, and visual consistency across primary pages.',
      'Updated project content and optimized website performance through asset audit and refactoring.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Performance'],
  },
  {
    id: 'gssoc',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC) 2026',
    period: 'May 2026 – Jul 2026',
    location: 'Remote',
    type: 'opensource',
    highlights: [
      'Contributed to real-world open-source repositories on GitHub — fixed bugs and implemented new features.',
      'Developed and improved frontend components in HTML, CSS, and modern JavaScript following best practices.',
      'Collaborated with project maintainers and global contributors via GitHub issues, discussions, and pull requests.',
      'Enhanced project documentation and improved user experience through testing and code quality reviews.',
    ],
    technologies: ['Git', 'GitHub', 'JavaScript', 'Open Source', 'Frontend Development'],
  },
  {
    id: 'deloitte-forage',
    role: 'Technology Job Simulation',
    organization: 'Deloitte Australia (via Forage)',
    period: 'Oct 2026',
    location: 'Virtual',
    type: 'simulation',
    credentialNote: 'Professional Learning Simulation on Forage — Completed Virtual Hands-on Tasks',
    highlights: [
      'Completed a Deloitte Australia Technology job simulation involving hands-on coding and development tasks.',
      'Researched and wrote a comprehensive architectural proposal for building a client-facing analytics dashboard.',
      'Explored enterprise data flow architecture and software requirement definitions.',
    ],
    technologies: ['Enterprise Architecture', 'Data Modeling', 'Dashboard Proposal', 'Technical Analysis'],
  },
];

export const HACKATHONS_DATA: HackathonAchievement[] = [
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon 2026',
    event: 'National Innovation Initiative by MoE / AICTE',
    team: 'Team DoraByte',
    achievement: 'Selected Team — NIET Internal SIH 2026 (Top 45 / 350+ Teams)',
    period: '2026',
    description:
      'Designed an AI-powered real-time Stress & Trauma Assessment Module using NLP, Speech Analytics, and Emotion AI. Selected among the Top 45 teams from 350+ teams in NIET internal selection.',
    conceptHighlights: [
      'Stress Vulnerability Index (SVI): Proposed algorithmic metric categorizing users into distress levels.',
      'Emotion AI & Speech Analytics: Proposed speech sentiment analysis to evaluate emotional distress indicators.',
      'Silent Distress Mode: Discreet interaction feature designed for emergency signaling without alerting nearby individuals.',
      'Distinction: Conceptual system design and architectural specification prepared for future integration.',
    ],
    technologies: ['NLP', 'Speech Analytics', 'Emotion AI', 'System Design'],
  },
  {
    id: 'intrusionx',
    title: 'IntrusionX Cybersecurity Hackathon',
    event: 'Competitive Cybersecurity Challenge',
    achievement: 'Hackathon Finalist & Competitor',
    period: '2026',
    description:
      'Competed in hands-on cybersecurity problem tracks covering AI/ML security, web defense, cloud, and IoT security.',
    conceptHighlights: [
      'Explored common web application vulnerabilities (OWASP) and remediation strategies.',
      'Investigated adversarial security vectors in AI models and endpoint validation.',
    ],
    technologies: ['AI/ML Security', 'Web Security', 'Cloud Security', 'IoT Security'],
  },
  {
    id: 'paytm-build',
    title: 'Paytm Build for India AI Hackathon',
    event: 'National FinTech & AI Engineering Challenge',
    achievement: 'Hackathon Finalist & AI Solutions Architect',
    period: '2026',
    description:
      'Researched and conceptualized AI-driven solutions focusing on merchant growth, financial journeys, and autonomous AI systems.',
    conceptHighlights: [
      'Explored assistive AI agents for merchant management and streamlined payment experiences.',
      'Analyzed checkout optimizations designed for high-concurrency mobile users.',
    ],
    technologies: ['Autonomous AI', 'FinTech Workflows', 'Merchant Solutions'],
  },
  {
    id: 'gssoc-contributor',
    title: 'GirlScript Summer of Code (GSSoC) 2026',
    event: 'Open Source Summer Program',
    achievement: 'Recognized Open Source Contributor',
    period: 'May – Jul 2026',
    description:
      'Shipped code to community repositories on GitHub, reviewed pull requests, and improved documentation across projects.',
    technologies: ['Open Source', 'Git & GitHub', 'Frontend Engineering'],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { name: 'Java', focus: 'OOP, Enterprise Architecture, Data Structures', category: 'Programming', isKey: true },
  { name: 'Python', focus: 'Scripting, Flask, IoT Integration, Data Processing', category: 'Programming', isKey: true },
  { name: 'C', focus: 'Memory Management, Pointers, Low-Level Logic', category: 'Programming', isKey: true },
  { name: 'C++', focus: 'Standard Template Library, Algorithmic Problem Solving', category: 'Programming' },
  { name: 'JavaScript', focus: 'ES6+, DOM Manipulation, Async/Await', category: 'Programming', isKey: true },

  // Web Development
  { name: 'HTML5', focus: 'Semantic Markup, Accessibility, Forms', category: 'Web Development', isKey: true },
  { name: 'CSS3', focus: 'Flexbox, CSS Grid, Responsive Layouts, Animations', category: 'Web Development', isKey: true },
  { name: 'Frontend Architecture', focus: 'Component Modularity, Clean UI/UX, Performance', category: 'Web Development', isKey: true },
  { name: 'Responsive Design', focus: 'Mobile-First Layouts, Fluid Typography', category: 'Web Development' },

  // Computer Science Fundamentals
  { name: 'Data Structures & Algorithms', focus: 'Arrays, Lists, Trees, Graphs, Sorting, Complexity', category: 'Computer Science', isKey: true },
  { name: 'Object-Oriented Programming', focus: 'Encapsulation, Inheritance, Polymorphism, Abstraction', category: 'Computer Science', isKey: true },
  { name: 'DBMS', focus: 'Relational Schemas, Normalization, SQL Queries', category: 'Computer Science', isKey: true },
  { name: 'Computer Architecture', focus: 'Processor Organization, Memory Hierarchy, Hardware Logic', category: 'Computer Science' },

  // Tools & Technologies
  { name: 'Git', focus: 'Version Control, Branching, Merge Conflict Resolution', category: 'Tools & Platforms', isKey: true },
  { name: 'GitHub', focus: 'Pull Requests, Issues, Collaboration, Code Reviews', category: 'Tools & Platforms', isKey: true },
  { name: 'VS Code', focus: 'Modern Development Environment & Extensions', category: 'Tools & Platforms' },
  { name: 'GDB', focus: 'C/C++ Debugging, Stack Trace Inspection', category: 'Tools & Platforms' },
  { name: 'Flask', focus: 'Microservices, Lightweight Routing, REST APIs', category: 'Tools & Platforms', isKey: true },
  { name: 'SQLite', focus: 'Embedded Database Persistence, SQL Transactions', category: 'Tools & Platforms', isKey: true },
  { name: 'Chart.js', focus: 'Interactive Data Visualizations & Dashboards', category: 'Tools & Platforms' },
  { name: 'Leaflet.js', focus: 'Geospatial Maps, Tile Layers, Interactive Markers', category: 'Tools & Platforms' },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  institution: 'Noida Institute of Engineering & Technology (NIET), Greater Noida',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
  period: 'August 2025 – May 2029 (Expected)',
  cgpa: '8.54 / 10.0',
  location: 'Greater Noida, Uttar Pradesh, India',
  highlights: [
    'Academic standing of 8.54 CGPA across foundational and core engineering terms.',
    'Rigorous coursework in Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, and Computer Architecture.',
    'Selected among the Top 45 teams from 350+ entries in the NIET Internal Selection for Smart India Hackathon 2026.',
    'Active participant in technical student communities, competitive coding challenges, and open-source initiatives.',
  ],
};

export const AREAS_OF_INTEREST = [
  'Software Development',
  'Full-Stack Development',
  'Data Structures & Algorithms',
  'Artificial Intelligence & ML',
  'Cybersecurity',
  'Internet of Things (IoT)',
  'Cloud Technologies',
  'Database Management',
];
