// app/careers/page.tsx
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react"; // Icon for apply button



// Job data extracted from the PDF
const jobOpenings = [
    {
        role: "Lead Engineer / Tech Architect (Junior/Associate Level)",
        responsibilities: [
            "Assist in designing system architecture under senior guidance.",
            "Collaborate with product and engineering teams to align technology with goals.",
            "Participate in key technical decisions and documentation.",
            "Learn and implement best practices for scalable, secure systems.",
        ],
        requiredSkills: [
            "Basic knowledge of software architecture and backend/frontend technologies.",
            "Familiarity with any programming language (Node.js, Python, Java).",
            "Strong problem-solving and communication skills.",
            "Willingness to learn healthcare data standards and blockchain basics.",
        ],
        experience: "0-2 years (fresh graduates or internships welcome).",
        location: "Bengaluru or remote.",
        employmentType: "Full-time.",
        glowColor: "rgba(96, 165, 250, 0.5)" // Blue glow
    },
    {
        role: "Backend Engineer (Junior / Intern Level)",
        responsibilities: [
            "Develop backend APIs and assist in database management.",
            "Support integration with external systems under supervision.",
            "Learn and help implement blockchain consent features.",
            "Write clean, maintainable code and participate in code reviews.",
        ],
        requiredSkills: [
            "Basic programming skills in Node.js, Python, or Java.",
            "Understanding of REST APIs and databases (SQL or NoSQL).",
            "Interest in blockchain and healthcare tech is a plus.",
        ],
        experience: "0-1 year, internships or projects preferred.",
        location: "Bengaluru or remote.",
        employmentType: "Full-time/Internship.",
        glowColor: "rgba(52, 211, 153, 0.5)" // Green glow
    },
    {
        role: "Frontend Engineer (Junior / Intern Level)",
        responsibilities: [
            "Assist in building responsive web and mobile interfaces.",
            "Collaborate with designers to implement UI/UX best practices.",
            "Learn and apply data visualization techniques.",
            "Fix bugs and optimize app performance.",
        ],
        requiredSkills: [
            "Basic knowledge of React.js and/or React Native/Flutter.",
            "Familiarity with HTML, CSS, and JavaScript.",
            "Willingness to learn and adapt quickly.",
        ],
        experience: "0-1 year, internships or personal projects preferred.",
        location: "Bengaluru or remote.",
        employmentType: "Full-time/Internship.",
        glowColor: "rgba(129, 140, 248, 0.5)" // Indigo glow
    },
    {
        role: "DevOps/Cloud Engineer (Junior Level)",
        responsibilities: [
            "Assist in managing cloud infrastructure and deployments.",
            "Support automation of CI/CD pipelines and monitoring.",
            "Learn security best practices and compliance requirements.",
            "Troubleshoot infrastructure issues under guidance.",
        ],
        requiredSkills: [
            "Basic knowledge of cloud platforms (Azure, AWS, or GCP).",
            "Familiarity with Docker, Linux commands, and scripting (Bash, Python).",
            "Interest in DevOps and infrastructure automation.",
        ],
        experience: "0-2 years, internships or relevant coursework preferred.",
        location: "Bengaluru or remote.",
        employmentType: "Full-time/Internship.",
        glowColor: "rgba(45, 212, 191, 0.5)" // Teal glow
    },
    {
        role: "UX/UI Designer (Junior / Intern Level)",
        responsibilities: [
            "Assist in creating wireframes, mockups, and prototypes.",
            "Conduct basic user research and usability testing.",
            "Support design iterations based on feedback.",
            "Help ensure accessibility and regional language considerations.",
        ],
        requiredSkills: [
            "Familiarity with design tools like Figma, Adobe XD, or Sketch.",
            "Basic understanding of UX principles and responsive design.",
            "Strong willingness to learn and collaborate.",
        ],
        experience: "0-1 year, internships or portfolio projects preferred.",
        // NOTE: PDF had conflicting info for this role's Location/Type on page 2 vs 3. Using Page 2's details for consistency here. Adjust as needed.
        location: "Bengaluru or remote.",
        employmentType: "Full-time/Internship.",
        glowColor: "rgba(250, 204, 21, 0.5)" // Yellow glow (example)
    },
];

// Hiring Approach points from PDF
const hiringApproach = [
    "Emphasize learning opportunities, mentorship, and career growth in your job postings.",
    "Look for candidates with passion projects, internships, or relevant coursework.",
    "Consider partnering with universities or coding bootcamps for fresh talent pipelines.",
    "Use coding challenges and practical assessments focused on fundamentals and problem-solving rather than experience.",
]

export default function CareersPage() {
    return (
        // Assuming your main layout provides the dark theme background
        <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 text-gray-300">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 text-center">
                    Careers at Ayuv
                </motion.h1>
                <motion.p variants={fadeInUp} className="mx-auto max-w-3xl text-lg text-gray-400 sm:text-xl mb-12 text-center">
                    Join us in building a secure and unified platform to empower every Indian with control over their health data. We emphasize learning, mentorship, and growth.
                </motion.p>
            </motion.div>

            <motion.section
                aria-labelledby="open-positions-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="mb-16"
            >
                <motion.h2 variants={fadeInUp} id="open-positions-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-10 text-center">
                    Open Positions
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {jobOpenings.map((job, index) => (
                        <motion.div key={index} variants={fadeInFromLeft} className="h-full">
                             <motion.div
                                whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${job.glowColor}` }}
                                transition={{ duration: 0.3 }}
                                className="h-full p-px rounded-lg"
                             >
                                <Card className="flex flex-col h-full bg-gray-800 border-gray-700 text-gray-300">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-white">{job.role}</CardTitle>
                                        <CardDescription className="text-sm text-gray-400 pt-1">
                                            {job.location} | {job.employmentType}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-green-400 mb-1">Responsibilities:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                                {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-400 mb-1">Required Skills:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                                                {job.requiredSkills.map((item, i) => <li key={i}>{item}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-400 mb-1">Experience:</h4>
                                            <p className="text-sm text-gray-400">{job.experience}</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                         {/* Update mailto link or action */}
                                        <Button className="w-full bg-green-600 text-white hover:bg-green-700" asChild>
                                            <motion.a
                                                href="mailto:careers@ayuv.com" // <-- Replace with your actual careers email
                                                variants={buttonHoverTapEffect}
                                                whileHover="hover"
                                                whileTap="tap"
                                            >
                                                 <Mail className="mr-2 h-4 w-4" /> Apply Now
                                            </motion.a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

             <motion.section
                aria-labelledby="hiring-approach-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
            >
                <motion.h2 variants={fadeInUp} id="hiring-approach-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-center">
                    Our Hiring Approach
                </motion.h2>
                <motion.div variants={fadeInUp} className="max-w-3xl mx-auto bg-gray-800 border border-gray-700 rounded-lg p-6">
                     <ul className="list-disc list-inside space-y-2 text-gray-400">
                         {hiringApproach.map((item, i) => <li key={i}>{item}</li>)}
                     </ul>
                 </motion.div>
            </motion.section>

        </div>
    );
}v
