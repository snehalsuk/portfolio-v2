import { Project, Experience, Skill } from "./types";

export interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const WHATSAPP_NUMBER = "919765179473";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DEFAULT_MESSAGE_RAW =
  "Hi Snehal, I just visited your portfolio and would like to discuss a high-impact project.";
export const WHATSAPP_DEFAULT_MESSAGE = WHATSAPP_DEFAULT_MESSAGE_RAW;
export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE_RAW)}`;
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/snehal-sukhadeve-2980551a2/";

// EmailJS Configuration
export const EMAILJS_SERVICE_ID = "service_fej7pkt"; // Replace with your Service ID
export const EMAILJS_TEMPLATE_ID = "template_53cviml"; // Replace with your Template ID
export const EMAILJS_PUBLIC_KEY = "KTfY79yaEf6E_cEWK";

export const SERVICES: Service[] = [
  {
    title: "Enterprise Solutions",
    description:
      "Building robust HR, CRM, and LMS systems using Frappe and React for streamlined business operations.",
    icon: "fa-solid fa-building-columns",
    tags: ["HR Tech", "CRM", "LMS"],
  },
  {
    title: "AI-Driven Development",
    description:
      "Integrating cutting-edge AI models like Gemini Flash and tools like Trae & Cursor into workflows.",
    icon: "fa-solid fa-brain",
    tags: ["Gemini Flash", "Trae", "Antigravity"],
  },
  {
    title: "Mobile Engineering",
    description:
      "Developing native-quality Android applications for workforce management and HR systems.",
    icon: "fa-solid fa-mobile-screen-button",
    tags: ["React Native", "Android", "iOS"],
  },
  {
    title: "Cloud & Automation",
    description:
      "Deploying scalable architectures on AWS and automating workflows using n8n.",
    icon: "fa-solid fa-cloud",
    tags: ["AWS", "n8n", "DevOps"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Human Resource (HR) System",
    description:
      "A comprehensive HR management platform handling employee lifecycle, payroll, and performance tracking.",
    tags: ["Frappe", "React", "Python", "MariaDB"],
    imageUrl: "/images/hr-app.jpg",
    category: "ERP",
    link: "#",
  },
  {
    id: "2",
    title: "Litigation Management System (LMS)",
    description:
      "A specialized legal tech solution for tracking cases, hearings, and legal documentation efficiently.",
    tags: ["React", "Node.js", "AWS", "Security"],
    imageUrl: "/images/lms.jpg",
    category: "ERP",
  },
  {
    id: "3",
    title: "Travel Management System (TMS)",
    description:
      "An end-to-end travel booking and expense management system for corporate travel needs.",
    tags: ["React", "Frappe", "REST API", "Maps Integration"],
    imageUrl: "/images/snehal_optimized_100.jpeg",
    category: "ERP",
  },
  {
    id: "4",
    title: "HR Android App",
    description:
      "A mobile companion for the HR system, allowing employees to mark attendance and view payslips on the go.",
    tags: ["React Native", "Mobile", "Android", "API"],
    imageUrl: "/images/hr-app.jpg",
    category: "Mobile",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "TechBird IT Services Pvt Ltd",
    position: "Software Engineer",
    period: "Oct 2023 - Present",
    responsibilities: [
      "Leading development of core enterprise modules including HR, CRM, and Litigation Management Systems.",
      "Architecting scalable cloud solutions on AWS for high-availability enterprise applications.",
    ],
    skills: ["React", "Frappe", "AWS", "AI Integration"],
  },
  {
    id: "e2",
    company: "PrepForTech",
    position: "Full Stack Developer (Internship)",
    period: "Apr 2022 - Sep 2023",
    responsibilities: [
      "Developed robust web applications using React.js and Java, ensuring seamless user experiences.",
      "Collaborated with cross-functional teams to deliver robust full-stack solutions.",
    ],
    skills: ["React.js", "Java", "React Native", "JavaScript", "Python"],
  },
];

export const SKILLS: Skill[] = [
  {
    name: "Modern Web",
    level: 95,
    category: "Frameworks",
    icon: "fa-brands fa-react",
    relevance:
      "Expertise in React.js, React Native, and Frappe Framework for full-stack excellence.",
  },
  {
    name: "AI & Automation",
    level: 90,
    category: "Tools",
    icon: "fa-solid fa-brain",
    relevance:
      "Leveraging Gemini Flash, Trae, Antigravity, and n8n for next-gen development.",
  },
  {
    name: "Cloud Infrastructure",
    level: 85,
    category: "Backend",
    icon: "fa-brands fa-aws",
    relevance:
      "Deploying and managing scalable applications using AWS services.",
  },
  {
    name: "Dev Tools",
    level: 88,
    category: "Tools",
    icon: "fa-solid fa-code",
    relevance:
      "Proficient with Cursor, ChatGPT, Hugging Face, and modern CI/CD workflows.",
  },
  {
    name: "Mobile Development",
    level: 92,
    category: "Frameworks",
    icon: "fa-solid fa-mobile-screen",
    relevance: "Building performant Android/iOS apps with React Native.",
  },
  {
    name: "Enterprise Systems",
    level: 90,
    category: "Backend",
    icon: "fa-solid fa-server",
    relevance: "Deep experience with HR, CRM, LMS, and TMS architectures.",
  },
];
