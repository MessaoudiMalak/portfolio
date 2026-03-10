export type Language = "en";


export const translations = {
    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
    },
    hero: {
        greeting: "Hi, I am",
        role: "Full Stack Developer",
        description: "Passionate about innovation, I develop high-performance and scalable web solutions with high added value.",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
    },
    about: {
        title: "Overview",
        subtitle: "Introduction",
        description: "I'm a passionate Full Stack Developer focused on creating practical and efficient web applications. I work with React on the front-end and PHP/Laravel on the back-end, leveraging databases to build responsive and user-friendly solutions that address real needs. I enjoy writing clean, maintainable code and continuously improving my skills by exploring new technologies and best practices. Outside of coding, I like learning about the latest web trends and sharing knowledge with the developer community.",
    },
    experience: {
        title: "Work Experience",
        subtitle: "What I have done so far",
    },
    skills: {
        title: "Technical Skills",
    },
    projects: {
        title: "My Projects",
        viewGithub: "View on GitHub",
        description: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    },
    contact: {
        title: "Contact Me",
        email: "Email",
        github: "GitHub",
        phone: "Phone",
    },
};

export const profileData = {
    name: "Malak",
    role: "Full Stack Developer",
    email: "malakmalak2005123@gmail.com",
    phone: "0709186544",
    github: "https://github.com/malakmalak2005123-cmd",
    linkedin: "https://www.linkedin.com/in/malak-messaoudi/",
    skills: {
        frontend: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Figma", icon: "figma" },
        ],
        backend: [
            { name: "PHP", icon: "php" },
            { name: "Laravel", icon: "laravel" },
        ],
        databases: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MySQL", icon: "mysql" },
        ],
    },
    experiences: [
        {
            title: "Full Stack Developer (Laravel/Vue.js)",
            company_name: "Ark-x Talent Solutions",
            icon: "freelance",
            iconBg: "#383E56",
            date: "Oct 2025 - Feb 2026",
            points: [
                "Development of an e-commerce website for a tourist guide, including user profile management, hotel and restaurant appointments, and activity planning.",
                "Collaboration with the team to optimize user experience and application performance.",
            ],
            tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "Git", "GitHub", "Vue.js"]
        },
        {
            title: "PHP Web Developer (Internship / Supervised Project)",
            company_name: "CHU",
            icon: "agency",
            iconBg: "#E6DEDD",
            date: "Mar 2025 - Apr 2025",
            points: [
                "Creation of a user interface with React and CSS to display patient medical information.",
                "Implementation of an online appointment booking system (choice of date, time, and doctor).",
                "Management of patient data and appointments via a MySQL database.",
                "Work on a supervised project in an academic context.",
            ],
            tech: ["React", "PHP", "MySQL", "HTML", "CSS", "Git", "GitHub", "Postman"]
        },
    ],
    services: [
        {
            title: "Clean Code",
            icon: "code",
            description: "Writing maintainable, scalable code that stands the test of time."
        },
        {
            title: "Innovation",
            icon: "innovation",
            description: "Always exploring new technologies and creative solutions."
        },
        {
            title: "Goal-Oriented",
            icon: "goal",
            description: "Focused on delivering results that exceed expectations."
        },
        {
            title: "Performance",
            icon: "performance",
            description: "Optimizing every aspect for speed and efficiency."
        },
    ],
    projects: [
        {
            id: "catshop",
            title: "CatShop",
            description: "An e-commerce website dedicated to cat adoption, allowing users to browse available cat profiles, make online adoption requests, and access essential products related to cat well-being.",
            tags: ["PHP", "MySQL", "HTML", "CSS", "Git", "GitHub"],
            link: "/projects/catshop",
            liveUrl: "https://catshop.rf.gd/",
            repoUrl: "https://github.com/malakmalak2005123-cmd/CatShop",
            images: [
                "/images/projects/catshop/project/image.png",
                "/images/projects/catshop/project/image copy.png",
                "/images/projects/catshop/project/image copy 2.png",
                "/images/projects/catshop/project/image copy 3.png",
                "/images/projects/catshop/project/image copy 4.png",
                "/images/projects/catshop/project/image copy 5.png",
            ],
            adminImages: [
                "/images/projects/catshop/admin/image copy 2.png",
                "/images/projects/catshop/admin/image copy 3.png",
                "/images/projects/catshop/admin/image copy 4.png",
            ],
            features: [
                "Browse Available Cats for Adoption",
                "Add Selected Pets to Cart",
                "Adoption Form with Personal Information",
                "Responsive and Secure Web Design"
            ]
        },
        {
            id: "travelo",
            title: "Travelo",
            description: "Discover the Magic of Morocco. From the golden dunes of the Sahara to the blue streets of Chefchaouen, experience an unforgettable journey through Morocco's wonders.",
            tags: ["Laravel", "Vue.js", "HTML", "CSS", "GitHub", "Design Patterns"],
            link: "/projects/travelo",
            images: [
                "/images/projects/travelo/project/image.png",
                "/images/projects/travelo/project/image copy.png",
                "/images/projects/travelo/project/image copy 2.png",
                "/images/projects/travelo/project/image copy 3.png",
                "/images/projects/travelo/project/image copy 4.png",
                "/images/projects/travelo/project/image copy 5.png",
            ],
            adminImages: [],
            features: [
                "Explore Destinations",
                "Search Wonders",
                "Interactive Map",
                "Trip Planner"
            ]
        },
    ],
};
