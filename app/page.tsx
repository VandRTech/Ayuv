"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
    DatabaseZap,
    ShieldCheck,
    Watch,
    BellRing,
    UserPlus,
    RefreshCw,
    LockKeyhole,
    Activity,
    Linkedin,
    Twitter,
    Instagram,
    ChevronRight,
    Menu,
    X,
} from "lucide-react"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu" // Assuming this component exists and works with dark theme
import { motion, Variants } from "framer-motion"

// Animation Variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
const fadeInFromLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}
const slideInFromRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
}
const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const buttonHoverTapEffect = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
}
// cardHoverEffect for testimonials
const cardHoverEffect = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
}


export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-gray-300">
            {/* Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm"
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-24 items-center justify-between"> {/* Adjusted height */}
                        <div className="flex items-center">
                             {/* Adjusted logo size */}
                            <Image src="/placeholder-logo.png" alt="Ayuv" width={100} height={100} className="h-20 w-auto" priority />
                        </div>
                        <nav className="hidden items-center space-x-6 md:flex">
                            <a href="#about" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">About</a>
                            <a href="#features" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">Features</a>
                            <a href="#how-it-works" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">How It Works</a>
                            <a href="#contact" className="text-sm font-medium text-gray-300 transition-colors hover:text-green-400">Contact</a>
                            <Button size="sm" asChild className="bg-green-600 text-white hover:bg-green-700">
                                <motion.a href="#early-access" variants={buttonHoverTapEffect} whileHover="hover" whileTap="tap">
                                    Join Waitlist
                                </motion.a>
                            </Button>
                        </nav>
                        <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
                <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            </motion.header>

            <main>
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden bg-gray-900 py-20 sm:py-24 lg:py-32"> {/* Reduced Padding */}
                    <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0 z-0">
                        <Image src="/placeholder.svg?height=720&width=1280" alt="Abstract background pattern" layout="fill" objectFit="cover" className="opacity-15 sm:opacity-20 mix-blend-soft-light" priority />
                        <motion.div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900" initial={{ opacity: 0.7 }} animate={{ opacity: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
                    </motion.div>
                    <motion.div className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8" initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
                            Empowering India's Health Journey
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="mx-auto max-w-3xl text-lg text-gray-300 sm:text-xl mb-8">
                            Securely unify your medical records, wearable data, and checkups - all in one place.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Button size="lg" asChild className="bg-green-600 text-white hover:bg-green-700">
                                <motion.a href="#early-access" variants={buttonHoverTapEffect} whileHover="hover" whileTap="tap">
                                    Join Our Early Access
                                </motion.a>
                            </Button>
                            <Button size="lg" asChild className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900">
                                <motion.a href="#features" variants={buttonHoverTapEffect} whileHover="hover" whileTap="tap">
                                    Learn More
                                </motion.a>
                            </Button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Key Features Section */}
                <motion.section id="features" className="w-full bg-gray-900 py-12 lg:py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}> {/* Reduced Padding */}
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Key Features</motion.h2>
                        <motion.p variants={fadeInUp} className="mb-10 text-lg text-gray-400 md:text-xl">Everything you need to take control of your health data</motion.p> {/* Reduced Margin */}
                        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
                            {[
                                { icon: DatabaseZap, title: "Unified Health Records", desc: "Access ABHA-linked reports, prescriptions, and history seamlessly in one secure profile.", color: "blue" },
                                { icon: ShieldCheck, title: "Blockchain-Secured Consent", desc: "You control exactly who sees your health information, with every access logged securely.", color: "green" },
                                { icon: Watch, title: "Wearable & IoT Integration", desc: "Effortlessly sync data from your favorite fitness trackers and health devices.", color: "purple" },
                                { icon: BellRing, title: "Preventive Care Insights", desc: "Get timely reminders and insights based on your profile to stay proactive about your health.", color: "orange" },
                            ].map((feature, index) => {
                                const Icon = feature.icon;
                                const colors = {
                                    blue: { bg: 'bg-blue-900', text: 'text-blue-300', glow: 'rgba(96, 165, 250, 0.5)' },
                                    green: { bg: 'bg-green-900', text: 'text-green-300', glow: 'rgba(52, 211, 153, 0.5)' },
                                    purple: { bg: 'bg-indigo-900', text: 'text-indigo-300', glow: 'rgba(129, 140, 248, 0.5)' },
                                    orange: { bg: 'bg-teal-900', text: 'text-teal-300', glow: 'rgba(45, 212, 191, 0.5)' },
                                };
                                const colorClass = colors[feature.color as keyof typeof colors];
                                return (
                                    <motion.div key={index} variants={fadeInFromLeft}>
                                        <motion.div whileHover={{ scale: 1.03, boxShadow: `0 0 25px ${colorClass.glow}` }} transition={{ duration: 0.3 }} className="h-full p-px rounded-lg">
                                            <Card className="h-full bg-gray-800 border-gray-700 text-gray-300 ">
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass.bg}`}>
                                                            <Icon className={`h-6 w-6 ${colorClass.text}`} />
                                                        </div>
                                                        <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                                                        <p className="text-sm text-gray-400">{feature.desc}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                     </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.section>

{/* How It Works Section */}
                {/* // UPDATE: Removed green circles, relying on slide-in animation for pathway */}
                <motion.section
                    id="how-it-works"
                    className="w-full bg-gray-800 py-12 lg:py-20" // Reduced Padding
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                 >
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</motion.h2> {/* Reduced Margin */}
                        <motion.div
                            className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
                            variants={staggerContainer} // Ensures steps animate one after another
                         >
                            {[
                                { icon: UserPlus, title: "Link Your ABHA ID", desc: "Securely create your AYUV profile by authenticating with your Aadhaar/ABHA ID." },
                                { icon: RefreshCw, title: "Sync Your Data", desc: "Connect your wearables and allow AYUV to fetch your ABHA-linked medical records." },
                                { icon: LockKeyhole, title: "Manage Consent", desc: "Easily grant or revoke access for healthcare providers using our secure blockchain system." },
                                { icon: Activity, title: "Get Health Insights", desc: "Receive personalized reminders and view your health trends all in one place." },
                            ].map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    // Each step slides in sequentially, creating the moving pathway effect
                                    <motion.div key={index} variants={slideInFromRight} className="relative">
                                        <div className="flex flex-col items-center text-center">
                                            {/* Large Green Circle DIV completely removed */}

                                            {/* Icon container remains */}
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900">
                                                <Icon className="h-6 w-6 text-green-300" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                                            <p className="text-sm text-gray-400">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.section>
                {/* Testimonials Section */}
                <motion.section className="w-full bg-gray-900 py-12 lg:py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}> {/* Reduced Padding */}
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by Early Users</h2> {/* Reduced Margin */}
                        <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                            <CarouselContent className="-ml-4">
                                {[
                                    { quote: "AYUV has completely transformed how I manage my health records. No more carrying files to every doctor visit!", name: "Priya Sharma", role: "IT Professional, Bangalore" },
                                    { quote: "The consent management feature gives me peace of mind. I know exactly who has access to my medical information.", name: "Rajesh Kumar", role: "Entrepreneur, Mumbai" },
                                    { quote: "As a doctor, I appreciate how AYUV streamlines patient history access while maintaining strict privacy controls.", name: "Dr. Anita Desai", role: "Cardiologist, Delhi" },
                                    { quote: "Integrating my fitness tracker was seamless! Seeing all my health data together is incredibly motivating.", name: "Amit Singh", role: "Student, Pune" },
                                ].map((testimonial, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <motion.div className="p-1 h-full" initial="rest" whileHover="hover" variants={cardHoverEffect}>
                                            <Card className="h-full border-l-4 border-green-500 bg-gray-800 text-gray-300">
                                                <CardContent className="flex h-full flex-col justify-between p-6">
                                                    <blockquote className="italic text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
                                                    <div className="mt-4 flex items-center">
                                                        <div className="mr-3 h-10 w-10 rounded-full bg-gray-600"></div>
                                                        <div className="text-left">
                                                            <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                                                            <p className="text-xs text-gray-400">{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="mt-8 flex justify-center gap-4">
                                <CarouselPrevious className="relative static translate-y-0 text-white border-gray-600 hover:bg-gray-700 hover:text-white" />
                                <CarouselNext className="relative static translate-y-0 text-white border-gray-600 hover:bg-gray-700 hover:text-white" />
                            </div>
                        </Carousel>
                    </div>
                </motion.section>

                {/* Early Access Signup Section */}
                <motion.section id="early-access" className="w-full bg-gray-800 py-12 lg:py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}> {/* Reduced Padding */}
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-3 text-2xl font-bold text-white sm:text-3xl">Be the First to Experience AYUV</motion.h2>
                        <motion.p variants={fadeInUp} className="mx-auto mb-6 max-w-2xl text-gray-400"> {/* Reduced Margin */}
                            Sign up for our early access program and get exclusive updates as we revolutionize health data management in India.
                        </motion.p>
                        <motion.form variants={fadeInUp} className="mx-auto max-w-md">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Input type="email" placeholder="Enter your email" className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500" required />
                                <Button type="submit" className="whitespace-nowrap bg-green-600 text-white hover:bg-green-700" asChild>
                                    <motion.button variants={buttonHoverTapEffect} whileHover="hover" whileTap="tap">
                                        Request Access
                                    </motion.button>
                                </Button>
                            </div>
                        </motion.form>
                    </div>
                </motion.section>

                {/* Mission Statement Section */}
                <motion.section id="about" className="w-full bg-gray-900 py-12 lg:py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}> {/* Reduced Padding */}
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</motion.h2> {/* Reduced Margin */}
                        <motion.p variants={fadeInUp} className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
                            AYUV is building a secure and unified platform to empower every Indian with control over their health data, facilitating proactive wellness and simplifying healthcare journeys.
                        </motion.p>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section className="w-full bg-blue-700 py-12 lg:py-16 text-white" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}> {/* Reduced Padding */}
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Take Control of Your Health Data?</motion.h2>
                        <motion.p variants={fadeInUp} className="mx-auto mb-6 max-w-2xl text-xl text-blue-100"> {/* Reduced Margin */}
                            Join thousands of early adopters who are already experiencing the future of healthcare management.
                        </motion.p>
                         <motion.div variants={fadeInUp}>
                            <Button size="lg" variant="secondary" className="group bg-white text-blue-700 hover:bg-gray-200" asChild>
                                <motion.a href="#early-access" variants={buttonHoverTapEffect} whileHover="hover" whileTap="tap">
                                    Join the Waitlist
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </motion.a>
                            </Button>
                         </motion.div>
                    </div>
                </motion.section>
            </main>

            {/* Footer */}
            <footer id="contact" className="w-full bg-gray-900 text-gray-400">
                {/* Footer padding kept as is */}
                <motion.div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="md:col-span-1 lg:col-span-1">
                            <a href="#" className="text-xl font-bold text-white">AYUV</a>
                            <p className="mt-2 text-sm">Empowering India's health journey through secure data management.</p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#about" className="text-sm transition-colors hover:text-green-400">About</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Team</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Careers</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#features" className="text-sm transition-colors hover:text-green-400">Features</a></li>
                                <li><a href="#how-it-works" className="text-sm transition-colors hover:text-green-400">How It Works</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">FAQ</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Terms of Service</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Cookie Policy</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-green-400">Data Protection</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
                        <p className="text-xs">&copy; {new Date().getFullYear()} AYUV. All rights reserved.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            <a href="#" className="text-gray-400 transition-colors hover:text-green-400"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-green-400"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-green-400"><span className="sr-only">Instagram</span><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>
                </motion.div>
            </footer>
        </div>
    )
}
