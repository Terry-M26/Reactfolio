// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaLinkedin,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import { TbBrandCpp, TbBrandFlutter, TbBrandMysql, TbBrandCSharp, TbBrandPhp } from "react-icons/tb";
import { SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

const base = import.meta.env.BASE_URL;

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
 
  {
    name: "linkedIn", // Social media name
    component: FaLinkedin, // LinkedIn icon
    link: "https://www.linkedin.com/in/terry-mardaymootoo-5b3b03349", // Replace with your actual LinkedIn URL
  },
 
  {
    name: "github",
    component: IoLogoGithub, // GitHub icon
    link: "https://github.com/Terry-M26",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "Terry Mardaymootoo"; // Replace with your name or brand name
const imgLogo = ""; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: `${base}images/Profile.jpeg`, // Your profile image link
  authorDescription:
  "Fresh graduate and aspiring Software Developer with a passion for building intuitive, user-focused web applications. I thrive on turning ideas into reality through clean code and creative problem-solving. Eager to contribute to innovative teams and grow as a developer while delivering impactful digital experiences.", // Short bio or description about yourself
  getInTouchUrl: "#Contact", 
  authorName: "Terry Mardaymootoo", // Replace with your name
  profileImgTagLine: "Aspiring Software Developer", // Your tagline or job title
  authorContactMail: "terrymardaymootoo86@gmail.com", // Your email address
  authorContactNumber: "59727664", // Your contact number (optional)
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: "2026",
    degreeType: "BSc (Hons) Computer Science with Network Security",
    institution: "University of Technology, Mauritius",
    institutionUrl: "https://utm.ac.mu",
  },
  {
    graduationYear: 2022,
    degreeType: "High School Certificate (HSC)",
    institution: "St Mary's College, Rose Hill",
    institutionUrl: "",
  },
  {
    graduationYear: 2020,
    degreeType: "School Certificate (SC)",
    institution: "St Mary's College, Rose Hill",
    institutionUrl: "",
  },
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  { icon: FaGitAlt, label: "Git" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaJava, label: "Java" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaPython, label: "Python" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: TbBrandFlutter, label: "Flutter" },
  { icon: TbBrandCSharp, label: "C#" },
  { icon: TbBrandMysql, label: "MySQL" },
  { icon: SiDotnet, label: ".NET" },
  { icon: SiMicrosoftsqlserver, label: "SQL Server" },
];
// Projects Section
// Replace the dummy project data with your actual projects.
// You can add or remove projects as needed.
// Each project now includes detailed fields for the project detail page.
const projectsPage = [
  {
    id: "learnsphere", // URL-friendly unique ID (used in routing)
    projectName: "LearnSphere", // Project name
    projectDescription: "Dart Flutter mobile app for lecture storage/summary and learning through MCQ evaluation using OpenAI API, Firebase Authentication and Firestore", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/Terry-M26/learn_sphere_ai", // Optional: GitHub repository link
    tags: "Dart, Flutter, Firebase, OpenAI API", // Tech stack used in the project
    date: "December 2025 - January 2026", // Project duration
    // Detail page fields - replace with your actual content
    fullDescription: "LearnSphere is a comprehensive mobile learning platform designed to help students store, organize, and learn from their lecture materials. The app leverages AI to generate summaries and create personalized MCQ quizzes for self-evaluation.", // Longer description for detail page
    features: [
      "Upload and store lecture PDFs and documents",
      "AI-powered lecture summarization using OpenAI API and intelligent chunking algorithm",
      "Auto-generated MCQ quizzes for self-evaluation from JSON format API response",
      "Progress tracking and performance analytics",
      "Google Authentication integration via Firebase for secure user sign-in",
      "Cloud storage with Firestore for data persistence and secrets management",
    ],
    challenges: "Integrating the OpenAI API with Flutter required careful handling of asynchronous operations and error states. Managing the state across multiple screens while keeping the UI responsive was another significant challenge that was solved using Provider for state management.",
    learnings: "This project deepened my understanding of Flutter state management patterns, working with REST APIs, and implementing Firebase services. I also learned about prompt engineering for generating quality MCQ questions from lecture content.",
    screenshots: [
      { src: `${base}projects/learnsphere/Homescreen.jpeg`, caption: "Home Screen" },
      { src: `${base}projects/learnsphere/Google sign in.jpeg`, caption: "Google Sign In" },
      { src: `${base}projects/learnsphere/AI Tutor Chat.jpeg`, caption: "AI Tutor Chat" },
      { src: `${base}projects/learnsphere/Challenge Mode.jpeg`, caption: "Challenge Mode" },
      { src: `${base}projects/learnsphere/Generated MCQs.jpeg`, caption: "Generated MCQs" },
      { src: `${base}projects/learnsphere/Performance Metrics.jpeg`, caption: "Performance Metrics" },
      { src: `${base}projects/learnsphere/Corrections.jpeg`, caption: "Corrections" },
      { src: `${base}projects/learnsphere/Performance tracking.jpeg`, caption: "Performance Tracking" },
      { src: `${base}projects/learnsphere/Lecture Storage.jpeg`, caption: "Lecture Storage" },
      { src: `${base}projects/learnsphere/Lecture Notes Storage.jpeg`, caption: "Lecture Notes Storage" },
      { src: `${base}projects/learnsphere/PDF and Plain text summarisation.jpeg`, caption: "PDF and Plain Text Summarisation" },
      { src: `${base}projects/learnsphere/Summarised text list.jpeg`, caption: "Summarised Text List" },
    ],
  },
  {
    id: "library-management", // URL-friendly unique ID (used in routing)
    projectName: "Library Management System", // Project name
    projectDescription: "Complete Library Management system with admin and user interface and CRUD operations on books, members and loans using .Net and SQL Server Management Studio", // Project description
    projectURL: "", // Optional: Project demo link (if hosted)
    githubRepositoryURL: "https://github.com/Terry-M26/LibraryManagementSystem", // Optional: GitHub repository link
    tags: "C#, .Net, SSMS", // Tech stack used in the project
    date: "November 2024", // Project duration
    // Detail page fields - replace with your actual content
    fullDescription: "A full-featured Library Management System built with .NET and SSMS, featuring separate interfaces for administrators and regular users. The system handles complete CRUD operations for books, members, and loan transactions with a clean and intuitive UI.",
    features: [
      "Admin dashboard with system overview and statistics",
      "Complete CRUD operations for books, members, and book issuings",
      "User authentication with role-based access control",
      "Book search and filtering functionality",
      "Loan management with due date tracking",
      "Member registration and profile management",
    ],
    challenges: "Designing the database schema to handle complex relationships between books, members, and loans while maintaining data integrity was challenging.",
    learnings: "This project strengthened my skills in .NET development, SQL database design, and building multi-role applications. I gained experience in implementing CRUD operations efficiently and managing database relationships.",
    screenshots: [
      { src: `${base}projects/library-management/HomePage.png`, caption: "Home Page" },
      { src: `${base}projects/library-management/Sign Up.png`, caption: "Sign Up" },
      { src: `${base}projects/library-management/Browse Books.png`, caption: "Browse Books" },
      { src: `${base}projects/library-management/Book inventory Management.png`, caption: "Book Inventory Management" },
      { src: `${base}projects/library-management/Admin Author Management.png`, caption: "Admin Author Management" },
      { src: `${base}projects/library-management/Member Management.png`, caption: "Member Management" },
      { src: `${base}projects/library-management/Book issuing.png`, caption: "Book Issuing" },
      { src: `${base}projects/library-management/SSMS Tables.png`, caption: "SSMS Database Tables" },
    ],
  },
  // Add more projects or remove the ones you don't need
];

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projectsPage,
};
