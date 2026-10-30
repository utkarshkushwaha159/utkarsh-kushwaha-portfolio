import { Project, Experience, SkillItem, HackathonAchievement, EducationInfo } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Utkarsh Kushwaha',
  title: 'Utkarsh Kushwaha — Digital Field Notes',
  roles: [
    'Computer Science Student',
    'Software Developer',
    'Problem Solver',
    'Systems & AI Explorer',
  ],
  status: 'Available for Internships & Engineering Collaborations',
  location: 'Greater Noida, Uttar Pradesh, India',
  coordinates: '28.4744° N, 77.5040° E',
  fieldIndex: 'DFN-2026.SYS',
  email: 'utkarshkushwaha6307@gmail.com',
  github: 'https://github.com/utkarshkushwaha159',
  linkedin: 'https://www.linkedin.com/in/utkarsh-kk',
  intro:
    "I'm a Computer Science undergraduate passionate about building technology-driven solutions to real-world problems. I enjoy learning by building, experimenting with new technologies and turning ideas into practical software.",
  aboutExtended: [
    "I am an undergraduate in Computer Science & Engineering at Noida Institute of Engineering & Technology (NIET, AKTU), maintaining an academic standing of 8.54 CGPA. My engineering approach is anchored in foundational computer science principles: object-oriented software design, data structures, and deterministic systems thinking.",
    "Rather than treating code as abstract syntax, I view every project as a 'digital field note' — an empirical investigation into real-world challenges spanning public grievance architectures, statistical energy anomaly detection, banking transactional reliability, and physical hazard telemetry.",
    "Beyond independent development, I immerse myself in collaborative engineering environments: contributing to open-source ecosystems through GirlScript Summer of Code, optimizing web applications in organizational internships, and architecting multi-disciplinary systems in high-intensity hackathons like SIH 2026.",
  ],
  stats: [
    { label: 'Academic Standing', value: '8.54 CGPA', detail: 'NIET (AKTU Lucknow)' },
    { label: 'Core Paradigms', value: 'OOP + Systems', detail: 'Java, Python, C/C++' },
    { label: 'Hackathon Finalist', value: '3× / 4× Verified', detail: 'SIH 2026 Top 45' },
    { label: 'Open Source', value: 'GSSoC 2026', detail: 'Shipped Community Code' },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dcms',
    fieldCode: 'DFN-PRJ-01',
    title: 'Digital Complaint Management System (DCMS)',
    subtitle: 'Enterprise-grade Complaint Workflow & Relational Audit Platform',
    category: 'Systems & OOP',
    summary:
      'A structured complaint management system engineered with strict object-oriented programming paradigms, relational persistence via SQLite, and auditable status lifecycle flows.',
    problemStatement:
      'Grievance reporting in institutional environments frequently suffers from lack of accountability, opaque escalation paths, fragmented record-keeping, and no verifiable audit trail for unresolved tickets.',
    proposedSolution:
      'Architected a tiered complaint dispatch engine that encapsulates ticket state machines, enforces role-based authorization, validates input payloads, and ensures automated status transitions with complete timestamped persistence.',
    architectureDetails: [
      'Encapsulated Ticket & User domain models adhering to SOLID and clean-code OOP principles.',
      'Relational schema in SQLite with normalized tables for users, categories, complaints, and state change logs.',
      'Deterministic status pipeline: Submitted -> Under Review -> Investigating -> Resolved / Escalated.',
      'Comprehensive 30+ page software documentation encompassing UML class diagrams, activity flows, and test cases.',
    ],
    technologies: ['Python', 'OOP Architecture', 'SQLite', 'UML Modeling', 'Automated Testing'],
    keyFeatures: [
      'Encapsulation of sensitive complaint data with role-based access boundaries',
      'Automated priority assignment based on category severity metrics',
      'Immutable state change logging for auditability and compliance',
      'Comprehensive 30+ page formal software engineering specification & test suite',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'watts-off',
    fieldCode: 'DFN-PRJ-02',
    title: "Watt's Off — Energy Consumption Anomaly Detection",
    subtitle: 'Statistical Energy Anomaly Analytics & Geospatial Telemetry Portal',
    category: 'Data & Analytics',
    summary:
      'An end-to-end energy consumption monitoring platform combining Python-based statistical outlier detection, interactive Leaflet.js geographic grid visualizations, and Chart.js metrics dashboards.',
    problemStatement:
      'Grid operators and residential consumers struggle to detect power leakages, meter tampering, and abnormal consumption spikes early enough to prevent economic loss and distribution failures.',
    proposedSolution:
      'Engineered a centralized monitoring dashboard with statistical threshold analysis that parses power consumption time-series data, detects anomalies in real-time, and plots affected grid nodes on an interactive geospatial map.',
    architectureDetails: [
      'Backend analytical services built with Python and Flask with normalized consumption logging in SQLite.',
      'Statistical z-score and moving-average anomaly detection evaluating consumption variance against historical baselines.',
      'Geospatial map layer powered by Leaflet.js with dynamic cluster markers indicating anomaly severity.',
      'Dual portal access architecture providing tailored visual interfaces for citizens and municipal energy officers.',
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Chart.js', 'Leaflet.js', 'Statistical Analysis'],
    keyFeatures: [
      'Statistical anomaly detection flags unexpected standard deviation surges in energy draw',
      'Interactive geospatial grid mapping pinpointing high-consumption clusters',
      'Dual role dashboard: Citizen view for household metrics and Officer view for regional diagnostics',
      'Real-time temporal charts showing historical consumption curves vs projected baselines',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'atm-logging',
    fieldCode: 'DFN-PRJ-03',
    title: 'ATM Transaction Logging & Cash Flow Tracking System',
    subtitle: 'High-Integrity Banking Transaction Logger & Reconciliation Core',
    category: 'Systems & OOP',
    summary:
      'A deterministic Java-based transaction engine designed for recording high-volume ATM operations, calculating dynamic cash-flow vectors, and maintaining ACID-compliant audit logs.',
    problemStatement:
      'Automated teller infrastructure requires zero-fault transactional integrity, robust exception containment during unexpected disconnections, and transparent ledger analytics for liquidity balancing.',
    proposedSolution:
      'Implemented an object-oriented transaction logging engine that guarantees thread-safe balance updates, records double-entry transaction structures, and outputs analytical liquidity summaries for banking supervisors.',
    architectureDetails: [
      'Pure Java object-oriented domain model separating Account, Card, Terminal, and Transaction abstractions.',
      'DBMS connectivity ensuring transactional isolation and atomic ledger consistency.',
      'Defensive validation routines preventing negative balance states, race conditions, and overdraft violations.',
      'Structured reporting module generating periodic cash replenishment forecasts and error logs.',
    ],
    technologies: ['Java', 'Object-Oriented Programming', 'DBMS', 'Relational Schemas', 'Exception Architecture'],
    keyFeatures: [
      'Thread-safe transactional execution engine enforcing ACID compliance',
      'Real-time cash reserve depletion tracking across terminal denominations',
      'Automated transaction ledger formatting with cryptographic session tokens',
      'Supervisor audit reports highlighting transaction velocities and reconciliation discrepancies',
    ],
    githubUrl: 'https://github.com/utkarshkushwaha159',
  },
  {
    id: 'iot-hazard-detection',
    fieldCode: 'DFN-PRJ-04',
    title: 'IoT Smoke & Fire Detection System',
    subtitle: 'Embedded Environmental Telemetry & Instant Emergency Dispatch',
    category: 'IoT & Embedded',
    summary:
      'A safety-critical embedded telemetry system that synthesizes multi-sensor smoke and temperature signals to detect fire hazards instantaneously and broadcast multi-channel alerts.',
    problemStatement:
      'Standard smoke detectors often trigger false positives or experience catastrophic communication delays when transmitting alerts to property supervisors and emergency responders.',
    proposedSolution:
      'Engineered an embedded sensor integration pipeline running Python logic that continuously samples ambient particulate and thermal gradients, cross-validates thresholds, and triggers automated rapid alert protocols.',
    architectureDetails: [
      'Hardware interface communicating with particulate smoke sensors and thermal transducers.',
      'Real-time calibration algorithm filtering out ambient dust anomalies before escalation.',
      'Python daemon running event-driven loops for continuous sensor polling and threshold comparison.',
      'Automated alert dispatcher dispatching local siren signals and remote notifications.',
    ],
    technologies: ['Python', 'IoT Architecture', 'Embedded Systems', 'Sensor Telemetry', 'Real-Time Event Processing'],
    keyFeatures: [
      'Dual-metric hazard cross-validation (particulate density + temperature delta)',
      'Sub-second threshold breach detection and rapid alarm triggering',
      'Fault-tolerant polling loops resilient against transient sensor disconnects',
      'Low-power optimization suitable for uninterrupted continuous deployment',
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
      'Enhanced website UI/UX consistency across varied mobile and desktop viewport profiles.',
      'Audited legacy frontend markup and optimized media assets to improve page performance and loading metrics.',
      'Collaborated with organizational leadership to integrate fresh content workflows and outreach initiatives.',
    ],
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Web Optimization', 'UI/UX Consistency'],
  },
  {
    id: 'gssoc',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC) 2026',
    period: 'May 2026 – Jul 2026',
    location: 'Remote Open-Source Ecosystem',
    type: 'opensource',
    highlights: [
      'Actively contributed to production open-source repositories on GitHub, debugging codebases and shipping validated pull requests.',
      'Constructed and refactored responsive frontend components in HTML, CSS, and modern JavaScript adhering to project conventions.',
      'Collaborated asynchronously with global maintainers through GitHub issues, architectural discussions, and code review feedback.',
      'Authored technical documentation enhancements and unit test fixtures to bolster community project maintainability.',
    ],
    technologies: ['Git', 'GitHub Workflows', 'JavaScript', 'HTML5', 'Open Source', 'Issue Triage'],
  },
  {
    id: 'deloitte-forage',
    role: 'Technology Job Simulation',
    organization: 'Deloitte Australia (via Forage)',
    period: 'Oct 2026',
    location: 'Virtual Professional Simulation',
    type: 'simulation',
    credentialNote: 'Professional Learning Simulation on Forage — Completed Virtual Hands-on Tasks',
    highlights: [
      'Completed a practical technology simulation representing real-world enterprise advisory scenarios.',
      'Executed hands-on coding exercises and technical problem-solving assignments modeled after enterprise engineering pipelines.',
      'Authored a comprehensive architectural proposal detailing dashboard design, data flows, and stakeholder value metrics.',
    ],
    technologies: ['Enterprise Architecture', 'Data Modeling', 'Dashboard Proposal', 'Technical Writing'],
  },
];

export const HACKATHONS_DATA: HackathonAchievement[] = [
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon (SIH) 2026',
    event: 'National Innovation Initiative by MoE / AICTE',
    team: 'Team DoraByte',
    achievement: 'Selected Team — NIET Internal SIH 2026 (Top 45 / 350+ Teams)',
    period: '2026',
    description:
      'Engineered the conceptual and architectural foundation for an AI-powered real-time Stress & Trauma Assessment Module, selected among the top 45 teams out of 350+ competing teams at NIET internal selections.',
    conceptHighlights: [
      'Stress Vulnerability Index (SVI): Algorithmic metric synthesizing multi-modal physiological and behavioral distress levels.',
      'Emotion AI & Speech Analytics: Proposed speech sentiment and acoustic tone inflection analysis to evaluate trauma severity.',
      'Silent Distress Mode: Discreet interaction paradigm engineered for vulnerable individuals to safely signal emergencies without triggering audio alerts.',
      'Distinction: Conceptual framework designed for high-scale civic triage; module architecture structured for progressive prototype integration.',
    ],
    technologies: ['Natural Language Processing', 'Speech Analytics', 'Emotion AI', 'SVI Modeling', 'System Design'],
    clarificationBadge: 'Concept Architecture & Prototype Specification',
  },
  {
    id: 'intrusionx',
    title: 'IntrusionX Cybersecurity Hackathon',
    event: 'Competitive Cybersecurity & Threat Defense Challenge',
    achievement: 'Hackathon Finalist & Multi-Track Competitor',
    period: '2026',
    description:
      'Competed in rigorous hands-on cybersecurity problem sets spanning AI/ML adversarial attack surfaces, web application security vulnerabilities, decentralized ledger vectors, and IoT telemetry integrity.',
    conceptHighlights: [
      'Analyzed OWASP Top 10 vulnerabilities in modern web architectures and mitigation paradigms.',
      'Explored adversarial evasion defenses and model tampering detection mechanisms.',
      'Evaluated hardware sensor signal spoofing and cryptographic data validation for IoT endpoints.',
    ],
    technologies: ['AI/ML Security', 'Web Defense', 'Cloud & IoT Security', 'Vulnerability Analysis'],
  },
  {
    id: 'paytm-build',
    title: 'Paytm Build for India AI Hackathon',
    event: 'National FinTech & AI Engineering Challenge',
    achievement: 'Hackathon Finalist & AI Solutions Architect',
    period: '2026',
    description:
      'Researched and conceptualized autonomous AI-driven workflows tailored for merchant digital empowerment, frictionless financial transaction journeys, and predictive fraud resistance.',
    conceptHighlights: [
      'Designed frictionless merchant interaction models using assistive conversational agents.',
      'Conceptualized smart checkout flows optimized for high-throughput mobile device constraints.',
      'Evaluated autonomous AI pipelines for merchant cash flow stability and intelligent lending triage.',
    ],
    technologies: ['Autonomous AI', 'FinTech Workflows', 'Merchant Optimization', 'Predictive Modeling'],
  },
  {
    id: 'gssoc-contributor',
    title: 'GirlScript Summer of Code (GSSoC) 2026 Contributor',
    event: 'Prestigious Open Source Summer Program',
    achievement: 'Recognized Open Source Contributor',
    period: 'May – Jul 2026',
    description:
      'Engaged in a 3-month open-source development sprint, solving issues, refining user interfaces, and shipping verifiable code contributions across active community repositories.',
    technologies: ['Open Source', 'Git & GitHub', 'Frontend Engineering', 'Collaborative Development'],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { name: 'Java', focus: 'OOP, Enterprise Architecture, Data Structures', category: 'Programming', isKey: true },
  { name: 'Python', focus: 'Scripting, Flask, IoT Telemetry, Data Analytics', category: 'Programming', isKey: true },
  { name: 'C', focus: 'Memory Management, Pointer Arithmetic, Low-Level Logic', category: 'Programming', isKey: true },
  { name: 'C++', focus: 'STL, Algorithmic Problem Solving, Performance', category: 'Programming', isKey: true },
  { name: 'JavaScript', focus: 'ES6+, DOM Manipulation, Async/Await', category: 'Programming', isKey: true },

  // Web Development
  { name: 'HTML5', focus: 'Semantic Structure, SEO Accessibility, Modern Forms', category: 'Web Development', isKey: true },
  { name: 'CSS3', focus: 'Grid, Flexbox, Responsive Layouts, Animations', category: 'Web Development', isKey: true },
  { name: 'Frontend Architecture', focus: 'Component Modularity, Performance, Cross-Device', category: 'Web Development', isKey: true },
  { name: 'Responsive Design', focus: 'Mobile-First Viewports, Fluid Typography', category: 'Web Development' },

  // Computer Science Fundamentals
  { name: 'Data Structures & Algorithms', focus: 'Trees, Graphs, Dynamic Programming, Complexity', category: 'Computer Science', isKey: true },
  { name: 'Object-Oriented Programming', focus: 'Encapsulation, Inheritance, Polymorphism, Abstraction', category: 'Computer Science', isKey: true },
  { name: 'DBMS', focus: 'Relational Schemas, Normalization, SQL, Indexing', category: 'Computer Science', isKey: true },
  { name: 'Computer Architecture', focus: 'Processor Organization, Memory Hierarchy, Assembly', category: 'Computer Science' },

  // Tools & Platforms
  { name: 'Git', focus: 'Branching Strategies, Merge Resolution, History Integrity', category: 'Tools & Platforms', isKey: true },
  { name: 'GitHub', focus: 'Pull Requests, Issues, CI/CD Actions, Open Source', category: 'Tools & Platforms', isKey: true },
  { name: 'VS Code', focus: 'Extension Ecosystem, Debugging, Custom Environments', category: 'Tools & Platforms' },
  { name: 'GDB', focus: 'Native Debugging, Stack Inspection, Memory Trace', category: 'Tools & Platforms' },
  { name: 'Flask', focus: 'RESTful Microservices, Routing, Template Engine', category: 'Tools & Platforms', isKey: true },
  { name: 'SQLite', focus: 'Embedded Database Storage, Zero-Config Persistence', category: 'Tools & Platforms', isKey: true },
  { name: 'Chart.js', focus: 'Interactive Data Visualizations, Time-Series Charts', category: 'Tools & Platforms' },
  { name: 'Leaflet.js', focus: 'Geospatial Maps, Marker Clustering, GeoJSON', category: 'Tools & Platforms' },
];

export const EDUCATION_DATA: EducationInfo = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  institution: 'Noida Institute of Engineering & Technology (NIET), Greater Noida',
  university: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
  period: 'Aug 2025 – May 2029 (Expected)',
  cgpa: '8.54 / 10.0',
  location: 'Greater Noida, Uttar Pradesh, India',
  highlights: [
    'Maintained exceptional academic rigor with an 8.54 CGPA across foundational and core engineering terms.',
    'Core coursework in Data Structures, Object-Oriented Software Design, Database Systems, and Discrete Mathematics.',
    'Selected among the Top 45 teams out of 350+ entries in the NIET Internal Selection for Smart India Hackathon 2026.',
    'Active participant in technical student clubs, competitive programming drives, and collaborative developer initiatives.',
  ],
};

export const AREAS_OF_INTEREST = [
  'Software Development',
  'Full-Stack Development',
  'Artificial Intelligence & ML',
  'Data Structures & Algorithms',
  'Cybersecurity & Threat Defense',
  'Internet of Things (IoT)',
  'Cloud Technologies',
  'Systems Engineering',
];
