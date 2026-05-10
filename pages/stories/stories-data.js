const studentStories = [
    {
        id: 1,
        name: "Rahul Verma",
        course: "CSA / Full Stack Development",
        category: "Web",
        achievement: "Web Developer Internship",
        image: "https://plus.unsplash.com/premium_photo-1664474619075-644ddbd82cd9?auto=format&fit=crop&w=800&q=80",
        bio: "Built multiple industry-standard projects and secured a Web Developer Internship within months of training at SSTRC.",
        skills: ["React", "Node.js", "Express", "MongoDB"],
        journey: "Rahul started with zero coding knowledge. His journey at SSTRC was marked by intense practice and curiosity. He consistently participated in hackathons organized by the institute, which sharpened his problem-solving skills.",
        quote: "Persistence is the key to mastering any technical skill."
    },
    {
        id: 2,
        name: "Ananya Singh",
        course: "Web Design & UI/UX",
        category: "Design",
        achievement: "Placed in Top IT Company",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
        bio: "Creative mind turned professional designer. Mastered UI/UX principles and got hired as a Junior Designer at a leading firm.",
        skills: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
        journey: "Ananya had a background in arts and wanted to transition into the tech world. Our design mentors helped her translate her artistic vision into digital experiences. Her portfolio stood out during placements due to its clean and user-centric approach.",
        quote: "Design is not just what it looks like, it's how it works."
    },
    {
        id: 3,
        name: "Vikram Rathore",
        course: "Backend Development",
        category: "Backend",
        achievement: "Successful Freelancer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        bio: "Transitioned from a traditional role to a Backend Developer. Now manages international clients as a full-time freelancer.",
        skills: ["Python", "Django", "PostgreSQL", "AWS"],
        journey: "Vikram was always fascinated by data and logic. He delved deep into backend architectures and API development. With the help of our career guidance cell, he started his freelancing career on platforms like Upwork and Fiverr, quickly building a strong client base.",
        quote: "Data is the new oil, and logic is the refinery."
    },
    {
        id: 4,
        name: "Priya Sharma",
        course: "IT Infrastructure",
        category: "Infrastructure",
        achievement: "Network Architect",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        bio: "Expertise in building secure network environments. Currently working as a Network Associate in a major telecom department.",
        skills: ["Cisco", "Linux", "Security+", "Networking"],
        journey: "Priya excelled in the hardware and networking labs. She spent countless hours simulating complex network topologies and troubleshooting security protocols. Her dedication lead her to obtain industry-recognized certifications during her course.",
        quote: "Security is a process, not a product."
    }
];

// Generate more placeholder stories to reach ~44 as requested
const categories = ["Web", "Design", "Backend", "Infrastructure"];
const courses = [
    "Full Stack Development",
    "UI/UX Design",
    "Python Backend",
    "Cloud Computing",
    "Mobile App Dev",
    "Cyber Security",
    "Data Analytics"
];

const achievements = [
    "Placed in MNC",
    "Started Tech Blog",
    "Built NGO Website",
    "Freelancing Success",
    "Open Source Contributor",
    "Intern at Startup",
    "Tech Lead at College"
];

// Common student image pool for placeholders
const imagePool = [
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488204?auto=format&fit=crop&w=800&q=80"
];

for (let i = 5; i <= 44; i++) {
    const randomName = [
        "Amit", "Sneha", "Karan", "Pooja", "Arjun", "Kavita", "Rohan", "Meera", "Sameer", "Riya",
        "Deepak", "Swati", "Sandeep", "Nisha", "Manish", "Divya", "Vijay", "Aarti", "Gautam", "Jyoti"
    ][i % 20] + " " + ["Kapoor", "Sharma", "Joshi", "Patel", "Reddy", "Nair", "Das", "Singh", "Gupta", "Malhotra"][i % 10];

    const categoryIndex = i % categories.length;
    const courseIndex = i % courses.length;
    const achievementIndex = i % achievements.length;
    const imageIndex = i % imagePool.length;

    studentStories.push({
        id: i,
        name: randomName,
        course: courses[courseIndex],
        category: categories[categoryIndex],
        achievement: achievements[achievementIndex],
        image: imagePool[imageIndex],
        bio: `Successfully completed the ${courses[courseIndex]} program and achieved ${achievements[achievementIndex]}. A motivated learner with a passion for technology.`,
        skills: ["Skill A", "Skill B", "Skill C"],
        journey: "This student showed remarkable progress throughout the training. They participated in all assignments and extra-curricular activities, making the most of the resources provided at the institute.",
        quote: "Success is a journey, not a destination."
    });
}
window.studentStories = studentStories;
