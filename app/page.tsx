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
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img src="placeholder-logo.png.png" alt="Ayuv" className="h-16 w-auto" />
              
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                How It Works
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Contact
              </a>
              <Button size="sm">Join Waitlist</Button>
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

        {/* Mobile Menu Component */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>

      <main>
        {/* Hero Section */}
        <section className="w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Empowering India's Health Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Securely unify your medical records, wearable data, and checkups - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg">Join Our Early Access</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-16 aspect-video w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="AYUV App Interface"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="w-full py-16 lg:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 mb-12">Everything you need to take control of your health data</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <DatabaseZap className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Unified Health Records</h3>
                    <p className="text-sm text-gray-600">
                      Access ABHA-linked reports, prescriptions, and history seamlessly in one secure profile.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Blockchain-Secured Consent</h3>
                    <p className="text-sm text-gray-600">
                      You control exactly who sees your health information, with every access logged securely.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Watch className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Wearable & IoT Integration</h3>
                    <p className="text-sm text-gray-600">
                      Effortlessly sync data from your favorite fitness trackers and health devices.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <BellRing className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Preventive Care Insights</h3>
                    <p className="text-sm text-gray-600">
                      Get timely reminders and insights based on your profile to stay proactive about your health.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 lg:py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative z-10">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-blue-200 -z-0"></div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <UserPlus className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Link Your ABHA ID</h3>
                  <p className="text-sm text-gray-600">
                    Securely create your AYUV profile by authenticating with your Aadhaar/ABHA ID.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative z-10">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-blue-200 -z-0"></div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <RefreshCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Sync Your Data</h3>
                  <p className="text-sm text-gray-600">
                    Connect your wearables and allow AYUV to fetch your ABHA-linked medical records.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative z-10">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-blue-200 -z-0"></div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <LockKeyhole className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Manage Consent</h3>
                  <p className="text-sm text-gray-600">
                    Easily grant or revoke access for healthcare providers using our secure blockchain system.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 relative z-10">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Health Insights</h3>
                  <p className="text-sm text-gray-600">
                    Receive personalized reminders and view your health trends all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-16 lg:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by Early Users</h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <p className="italic text-gray-700 mb-4">
                        "AYUV has completely transformed how I manage my health records. No more carrying files to every
                        doctor visit!"
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="rounded-full w-10 h-10 bg-gray-300 mr-3"></div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Priya Sharma</p>
                          <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <p className="italic text-gray-700 mb-4">
                        "The consent management feature gives me peace of mind. I know exactly who has access to my
                        medical information."
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="rounded-full w-10 h-10 bg-gray-300 mr-3"></div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Rajesh Kumar</p>
                          <p className="text-xs text-gray-500">Entrepreneur, Mumbai</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">
                      <p className="italic text-gray-700 mb-4">
                        "As a doctor, I appreciate how AYUV streamlines patient history access while maintaining strict
                        privacy controls."
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="rounded-full w-10 h-10 bg-gray-300 mr-3"></div>
                        <div className="text-left">
                          <p className="font-semibold text-sm">Dr. Anita Desai</p>
                          <p className="text-xs text-gray-500">Cardiologist, Delhi</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative mr-2" />
                <CarouselNext className="relative ml-2" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Early Access Signup Section */}
        <section className="w-full py-16 lg:py-20 bg-blue-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Be the First to Experience AYUV</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Sign up for our early access program and get exclusive updates as we revolutionize health data management
              in India.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Enter your email" className="flex-grow" required />
                <Button type="submit" className="whitespace-nowrap">
                  Request Access
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section id="about" className="w-full py-16 lg:py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              AYUV is building a secure and unified platform to empower every Indian with control over their health
              data, facilitating proactive wellness and simplifying healthcare journeys.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 lg:py-16 bg-blue-600 text-white">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health Data?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of early adopters who are already experiencing the future of healthcare management.
            </p>
            <Button size="lg" variant="secondary" className="group">
              Join the Waitlist
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-gray-900 text-gray-400">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <a href="#" className="text-xl font-bold text-white">
                AYUV
              </a>
              <p className="mt-2 text-sm">Empowering India's health journey through secure data management.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs">© 2025 AYUV. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
