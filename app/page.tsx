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
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Image src="/placeholder-logo.png.png" alt="Ayuv" width={80} height={80} className="h-14 sm:h-16 w-auto" priority />
                        </div>
                        <nav className="hidden items-center space-x-6 md:flex">
                            <a href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">About</a>
                            <a href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">Features</a>
                            <a href="#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">How It Works</a>
                            <a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">Contact</a>
                            <Button size="sm" asChild>
                                <a href="#early-access">Join Waitlist</a>
                            </Button>
                        </nav>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
                <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            </header>

            <main>
{/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 sm:py-32 lg:py-40">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0"> {/* Opacity classes removed from Image wrapper */}
                <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Abstract background pattern"
                    layout="fill"
                    objectFit="cover"
                    // className="opacity-10 sm:opacity-15" // <<< REMOVED THIS LINE
                    priority
                />
            </div>
            {/* Content Container (remains the same) */}
            <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-4">
                    Empowering India's Health Journey
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl mb-8">
                    Securely unify your medical records, wearable data, and checkups - all in one place.
                </p>
                <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Button size="lg" asChild>
                        <a href="#early-access">Join Our Early Access</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="#features">Learn More</a>
                    </Button>
                </div>
            </div>
        </section>
                {/* Key Features Section */}
                <section id="features" className="w-full bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
                        <p className="mb-12 text-lg text-gray-600 md:text-xl">Everything you need to take control of your health data</p>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: DatabaseZap, title: "Unified Health Records", desc: "Access ABHA-linked reports, prescriptions, and history seamlessly in one secure profile.", color: "blue" },
                                { icon: ShieldCheck, title: "Blockchain-Secured Consent", desc: "You control exactly who sees your health information, with every access logged securely.", color: "green" },
                                { icon: Watch, title: "Wearable & IoT Integration", desc: "Effortlessly sync data from your favorite fitness trackers and health devices.", color: "purple" },
                                { icon: BellRing, title: "Preventive Care Insights", desc: "Get timely reminders and insights based on your profile to stay proactive about your health.", color: "orange" },
                            ].map((feature, index) => {
                                const Icon = feature.icon;
                                const colors = {
                                    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
                                    green: { bg: 'bg-green-100', text: 'text-green-600' },
                                    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
                                    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
                                };
                                const colorClass = colors[feature.color as keyof typeof colors];
                                return (
                                    <div key={index}>
                                        <div className="h-full">
                                            <Card className="h-full transition-shadow hover:shadow-lg">
                                                <CardContent className="p-6">
                                                    <div className="flex flex-col items-center text-center">
                                                        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${colorClass.bg}`}>
                                                            <Icon className={`h-6 w-6 ${colorClass.text}`} />
                                                        </div>
                                                        <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="w-full bg-gray-50 py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: UserPlus, title: "Link Your ABHA ID", desc: "Securely create your AYUV profile by authenticating with your Aadhaar/ABHA ID." },
                                { icon: RefreshCw, title: "Sync Your Data", desc: "Connect your wearables and allow AYUV to fetch your ABHA-linked medical records." },
                                { icon: LockKeyhole, title: "Manage Consent", desc: "Easily grant or revoke access for healthcare providers using our secure blockchain system." },
                                { icon: Activity, title: "Get Health Insights", desc: "Receive personalized reminders and view your health trends all in one place." },
                            ].map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="relative">
                                        {index < 3 && (
                                            <div
                                                aria-hidden="true"
                                                className="absolute left-1/2 top-7 hidden h-0.5 w-[calc(100%+2rem)] -translate-x-[calc(50%-1.75rem)] bg-blue-200 lg:block -z-0"
                                                style={{ transform: `translateX(calc(-50% + 3.5rem + ${index * 0}rem))` }}
                                            />
                                        )}
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                                                <span className="text-xl font-bold">{index + 1}</span>
                                            </div>
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                                <Icon className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                                            <p className="text-sm text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="w-full bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Early Users</h2>
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            className="mx-auto max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
                         >
                            <CarouselContent className="-ml-4">
                                {[
                                     { quote: "AYUV has completely transformed how I manage my health records. No more carrying files to every doctor visit!", name: "Priya Sharma", role: "IT Professional, Bangalore" },
                                     { quote: "The consent management feature gives me peace of mind. I know exactly who has access to my medical information.", name: "Rajesh Kumar", role: "Entrepreneur, Mumbai" },
                                     { quote: "As a doctor, I appreciate how AYUV streamlines patient history access while maintaining strict privacy controls.", name: "Dr. Anita Desai", role: "Cardiologist, Delhi" },
                                     { quote: "Integrating my fitness tracker was seamless! Seeing all my health data together is incredibly motivating.", name: "Amit Singh", role: "Student, Pune" },
                                ].map((testimonial, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                        <div className="p-1">
                                            <Card className="h-full border-l-4 border-blue-500">
                                                <CardContent className="flex h-full flex-col justify-between p-6">
                                                    <blockquote className="italic text-gray-700 mb-4">
                                                        "{testimonial.quote}"
                                                    </blockquote>
                                                    <div className="mt-4 flex items-center">
                                                        <div className="mr-3 h-10 w-10 rounded-full bg-gray-300"></div>
                                                        <div className="text-left">
                                                            <p className="text-sm font-semibold">{testimonial.name}</p>
                                                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="mt-8 flex justify-center gap-4">
                                <CarouselPrevious className="relative static translate-y-0" />
                                <CarouselNext className="relative static translate-y-0" />
                            </div>
                        </Carousel>
                    </div>
                </section>

                {/* Early Access Signup Section */}
                <section id="early-access" className="w-full bg-blue-50 py-16 lg:py-20">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Be the First to Experience AYUV</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                            Sign up for our early access program and get exclusive updates as we revolutionize health data management in India.
                        </p>
                        <form className="mx-auto max-w-md">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Input type="email" placeholder="Enter your email" className="flex-grow" required />
                                <Button type="submit" className="whitespace-nowrap">
                                    Request Access
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Mission Statement Section */}
                <section id="about" className="w-full bg-white py-16 lg:py-24">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
                        <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl">
                            AYUV is building a secure and unified platform to empower every Indian with control over their health data, facilitating proactive wellness and simplifying healthcare journeys.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-blue-600 py-16 lg:py-20 text-white">
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Take Control of Your Health Data?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                            Join thousands of early adopters who are already experiencing the future of healthcare management.
                        </p>
                         <div>
                            <Button size="lg" variant="secondary" className="group" asChild>
                                <a href="#early-access">
                                    Join the Waitlist
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                         </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="w-full bg-gray-900 text-gray-400">
                <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="md:col-span-1 lg:col-span-1">
                            <a href="#" className="text-xl font-bold text-white">AYUV</a>
                            <p className="mt-2 text-sm">Empowering India's health journey through secure data management.</p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#about" className="text-sm transition-colors hover:text-white">About</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Team</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#features" className="text-sm transition-colors hover:text-white">Features</a></li>
                                <li><a href="#how-it-works" className="text-sm transition-colors hover:text-white">How It Works</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">FAQ</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Cookie Policy</a></li>
                                <li><a href="#" className="text-sm transition-colors hover:text-white">Data Protection</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
                        <p className="text-xs">&copy; {new Date().getFullYear()} AYUV. All rights reserved.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            <a href="#" className="text-gray-400 transition-colors hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-white"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 transition-colors hover:text-white"><span className="sr-only">Instagram</span><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
