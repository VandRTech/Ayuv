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
// Removed: import { motion, Variants } from "framer-motion"

// Removed Animation Variants

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Header */}
            <header
                // Removed animation props
                className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm"
            >
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            {/* Ensure logo path is correct */}
                            <Image src="/placeholder-logo.png" alt="Ayuv" width={80} height={80} className="h-14 sm:h-16 w-auto" priority />
                        </div>
                        <nav className="hidden items-center space-x-6 md:flex">
                            <a href="#about" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
                                About
                            </a>
                            <a href="#features" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
                                Features
                            </a>
                            <a href="#how-it-works" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
                                How It Works
                            </a>
                            <a href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
                                Contact
                            </a>
                            <Button size="sm" asChild>
                                <a href="#early-access"> {/* Replaced motion.a */}
                                    Join Waitlist
                                </a>
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

                {/* Mobile Menu Component */}
                <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 sm:py-32 lg:py-40">
                    {/* Background Image */}
                    <div
                        // Removed animation props
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src="/placeholder.svg?height=720&width=1280"
                            alt="Abstract background pattern"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-10 sm:opacity-15"
                            priority
                        />
                    </div>

                    {/* Content Container */}
                    <div
                        className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-
