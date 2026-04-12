export const profile = {
  name: "Kubinsamuvel",
  role: "Python Full Stack Developer",
  tagline: "Building scalable APIs, performance-first systems, and polished user experiences.",
  bio: "I'm a Python Full Stack Developer with a passion for building robust backend systems and modern frontend interfaces. Trained at QSpiders, I specialize in clean architecture, RESTful APIs, and delivering practical value through technology.",
  contact: {
    email: "kubinsamuvel@gmail.com",
    phone: "+91 98765 43210",
    github: "https://github.com/kubinsamuvel",
    linkedin: "https://linkedin.com/in/kubinsamuvel",
    resumePath: "/kubinresume.pdf",
  },
};

export const skills = {
  backend: [
    { name: "Python", level: 92 },
    { name: "Django", level: 88 },
    { name: "Flask", level: 82 },
    { name: "FastAPI", level: 78 },
    { name: "PostgreSQL", level: 85 },
    { name: "REST APIs", level: 90 },
  ],
  frontend: [
    { name: "React", level: 84 },
    { name: "JavaScript", level: 86 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
  ],
};
export const projects = [
{
id: "smart-expense-tracker",
title: "Smart Expense Tracker",
category: "Fullstack",
description:
"A full-stack expense tracking application that helps users manage personal finances, categorize spending, and visualize insights through interactive dashboards.",
tech: ["Python", "Django", "React", "PostgreSQL"],
live: "https://smart-expense-tacker.vercel.app/",
github:
"https://github.com/KubinSamuvel026/SMART_EXPENSE_TACKER/tree/main/frontend/expense-frontend",
featured: true,
createdAt: "2024-03",
overview:
"Smart Expense Tracker is a complete financial management application that allows users to track daily spending, categorize transactions, and gain insights through charts and reports. The Django backend provides a scalable REST API while the React frontend delivers a smooth and responsive user experience.",
features: [
"Add, edit, and delete expenses instantly",
"Categorize transactions for better tracking",
"Interactive charts and analytics dashboard",
"Secure authentication system",
"REST API architecture for scalability",
"Responsive UI optimized for mobile devices"
],
challenges:
"Designing a clean architecture between Django REST APIs and React components while keeping the UI responsive and data synchronized was the main challenge.",
screenshot: "C:\\Users\\ASUS\\OneDrive\\Desktop\\portfolio\\public\\Saved Pictures\\ats_resume.png"
},

{
id: "ats-resume-analyzer",
title: "ATS Resume Analyzer (AI-based)",
category: "Fullstack",
description:
"AI-powered resume analysis platform that evaluates resumes for ATS compatibility, skill gaps, and role fit using automated insights.",
tech: ["Django", "React", "REST API", "AI Integration"],
live: "https://ai-resume-hg5odtdum-kubinsamuve1s-projects.vercel.app/",
github: "https://github.com/KubinSamuvel026/ai-resume",
featured: true,
createdAt: "2024-02",
overview:
"The ATS Resume Analyzer helps job seekers improve their resumes by evaluating ATS compatibility and suggesting improvements. It scans uploaded resumes, compares them with job descriptions, and provides AI-generated feedback.",
features: [
"Resume keyword analysis",
"ATS compatibility scoring",
"Skill gap detection",
"Improvement suggestions for job roles",
"Modern React UI for fast feedback",
"Secure backend with Django APIs"
],
challenges:
"Creating accurate keyword matching between resumes and job descriptions required designing an efficient text-analysis pipeline.",
screenshot: null
},

{
id: "realtime-chat-app",
title: "Real-Time Chat Application",
category: "Backend",
description:
"A scalable real-time messaging platform using WebSockets with authentication, message persistence, and live communication.",
tech: ["Django", "WebSocket", "Auth"],
live: "#",
github: "#",
featured: false,
createdAt: "2023-12",
overview:
"This project demonstrates real-time communication using WebSockets. Users can join chat rooms, send instant messages, and maintain conversation history stored in the backend.",
features: [
"Instant messaging using WebSockets",
"Authentication system for users",
"Chat room creation",
"Persistent message storage",
"Scalable backend structure"
],
challenges:
"Maintaining real-time synchronization between multiple connected clients while ensuring secure message handling.",
screenshot: null
},

{
id: "drivewell-driving-school",
title: "Drivewell Driving School Website",
category: "Frontend",
description:
"A responsive website designed for a driving school to showcase courses, services, pricing, and contact details.",
tech: ["React", "JavaScript", "HTML5", "CSS3"],
live: "https://drivewell-five.vercel.app/",
github: "https://github.com/KubinSamuvel026/Drivewell-",
featured: false,
createdAt: "2024-01",
overview:
"The Drivewell Driving School website is a modern landing page designed to attract new learners. It highlights available courses, booking options, and contact details in an interactive format.",
features: [
"Responsive layout for all devices",
"Course and service showcase",
"Interactive navigation and animations",
"Contact and inquiry section",
"Clean modern UI design"
],
challenges:
"Designing a visually appealing layout while maintaining performance and responsiveness across mobile devices.",
screenshot: null
},

{
id: "movie-search-app",
title: "Movie Search Application",
category: "Frontend",
description:
"A fast movie discovery application that allows users to search films, view ratings, and explore movie details using public APIs.",
tech: ["React", "JavaScript", "API Integration"],
live: "https://movie-search-application-alpha.vercel.app/",
github: "https://github.com/KubinSamuvel026/MOVIE_SEARCH_APPLICATION",
featured: false,
createdAt: "2023-10",
overview:
"This movie search application integrates with external movie APIs to allow users to explore movies in real time. It provides search functionality and detailed movie information.",
features: [
"Instant movie search",
"API integration for movie data",
"Movie details page",
"Responsive UI",
"Clean minimal design"
],
challenges:
"Handling asynchronous API requests efficiently while keeping the interface responsive and preventing unnecessary re-renders.",
screenshot: null
},

{
id: "notes-app",
title: "Notes Application",
category: "Frontend",
description:
"A lightweight note-taking application that allows users to quickly create, edit, and organize notes.",
tech: ["React", "JavaScript", "CSS"],
live: "https://notes-application-jet-omega.vercel.app/",
github: "https://github.com/KubinSamuvel026/Notes_Application",
featured: false,
createdAt: "2023-09",
overview:
"The Notes App helps users quickly capture ideas, tasks, and reminders. It provides a minimal interface focused on productivity.",
features: [
"Create and edit notes instantly",
"Delete and organize notes",
"Responsive design",
"Fast and lightweight interface"
],
challenges:
"Designing a simple yet intuitive UI that allows quick note creation without unnecessary complexity.",
screenshot: null
},

{
id: "weather-app",
title: "Weather Forecast Application",
category: "Frontend",
description:
"A real-time weather forecasting app that displays current conditions and forecasts based on location.",
tech: ["React", "JavaScript", "API Integration"],
live: "#",
github: "#",
featured: false,
createdAt: "2023-08",
overview:
"The Weather App retrieves weather data from an external API and displays current conditions and forecasts in a clean interface.",
features: [
"Real-time weather data",
"Location-based search",
"Temperature and condition display",
"Responsive UI for mobile devices"
],
challenges:
"Handling API response delays and displaying fallback states for loading and errors.",
screenshot: null
}
];

export const strengths = [
  {
    title: "Backend First",
    description: "API design, database modeling, and backend systems are where I'm most at home. I build foundations that last.",
  },
  {
    title: "Performance Focused",
    description: "From query optimization to caching strategies, I care about systems that stay fast under real load.",
  },
  {
    title: "Clean Architecture",
    description: "Maintainable, well-structured codebases with clear separation of concerns and solid patterns.",
  },
  {
    title: "Full Stack Delivery",
    description: "I can take a feature from database schema all the way to polished React UI without handoff delays.",
  },
];
export const academics = [
{
type: "education",
degree: "Bachelor of Technology in Information Technology",
institution: "Hindusthan Institute of Technology, Coimbatore, Tamil Nadu",
year: "2021 — 2025",
grade: "CGPA: 7.52 / 10",
description:
"Completed a Bachelor of Technology in Information Technology with a strong focus on software development, data structures, web technologies, and database systems. During the program I worked on multiple projects involving Python, React, Django, and full-stack web development."
},

{
type: "education",
degree: "HSC — Computer Science",
institution: "National Vidyalaya CBSE School, Kumbakonam, Tamil Nadu",
year: "2020 — 2021",
grade: "Percentage: 87.6%",
description:
"Completed Higher Secondary education with Computer Science as the specialization. Built a strong foundation in programming logic, mathematics, and computer fundamentals which later helped in pursuing software engineering and full-stack development."
},

{
type: "training",
degree: "Python Full Stack Development Program",
institution: "QSpiders Software Training Institute",
year: "2025",
grade: "Certified",
description:
"Completed an intensive full-stack development training covering Python core programming, Django, REST APIs, PostgreSQL, React, Tailwind CSS, Git, and deployment workflows. Built multiple real-world projects and strengthened practical software engineering skills."
}
,

];

export const certificates = [
  {
    id: "c1",
    name: "Python Full Stack Development",
    org: "QSpiders",
    date: "2024",
    category: "Training",
    description: "Comprehensive certification covering Python backend development (Django, Flask, FastAPI) and modern frontend technologies (React, Tailwind).",
    verifyUrl: "#",
  },
  {
    id: "c2",
    name: "Django REST Framework",
    org: "Udemy",
    date: "2023",
    category: "Backend",
    description: "In-depth course on building production-grade REST APIs with Django REST Framework, JWT authentication, and API versioning.",
    verifyUrl: "#",
  },
  {
    id: "c3",
    name: "React — The Complete Guide",
    org: "Udemy",
    date: "2023",
    category: "Frontend",
    description: "Complete React course covering hooks, context, Redux Toolkit, React Router, and performance optimization techniques.",
    verifyUrl: "#",
  },
  {
    id: "c4",
    name: "PostgreSQL for Developers",
    org: "LinkedIn Learning",
    date: "2024",
    category: "Database",
    description: "Advanced PostgreSQL course covering indexing strategies, query optimization, window functions, CTEs, and stored procedures.",
    verifyUrl: "#",
  },
  {
    id: "c5",
    name: "Docker and Kubernetes",
    org: "Coursera",
    date: "2024",
    category: "DevOps",
    description: "Containerization fundamentals, Docker Compose for multi-service apps, and introduction to Kubernetes orchestration.",
    verifyUrl: "#",
  },
  {
    id: "c6",
    name: "JavaScript Algorithms & Data Structures",
    org: "freeCodeCamp",
    date: "2023",
    category: "Frontend",
    description: "Certification covering JavaScript fundamentals, ES6+, functional programming, OOP, and common algorithm patterns.",
    verifyUrl: "#",
  },
];
