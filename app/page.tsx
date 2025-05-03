"use client"

// UPDATE: Added FormEvent import
import { useState, FormEvent } from "react"
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
import { motion, Variants } from "framer-motion"

// Animation Variants (remain the same)
const fadeInUp: Variants = { /* ... */ }
const fadeInFromLeft: Variants = { /* ... */ }
const slideInFromRight: Variants = { /* ... */ }
const staggerContainer: Variants = { /* ... */ }
const buttonHoverTapEffect = { /* ... */ }
const cardHoverEffect = { /* ... */ }

// --- RE-ADDED: Form Handling State & Function ---
export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // --- State variables for the waitlist form ---
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(''); // To show success/error feedback
    const [isError, setIsError] = useState(false);
    // --- End State variables ---

    // --- Form submission handler ---
    const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // <<< PREVENTS PAGE RELOAD
        setIsLoading(true);
        setMessage('');
        setIsError(false);

        if (!email) {
            setMessage('Please enter your email address.');
            setIsError(true);
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/waitlist', { // Calls your backend API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            // Success
            setMessage(data.message || 'Successfully joined!');
            setIsError(false);
            setEmail(''); // Clear input on success

        } catch (error: any) {
            console.error("Waitlist submission error:", error);
            setMessage(error.message || 'Failed to submit email.');
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };
    // --- End Form submission handler ---
    // --- END RE-ADDED SECTION ---

    return (
        <div className="flex min-h-screen flex-col bg-gray-900 text-gray-300">
            {/* Header */}
            <motion.header /* ... header code ... */ >
                {/* ... */}
            </motion.header>

            <main>
                {/* Hero Section */}
                <section /* ... hero code ... */ >
                     {/* ... */}
                </section>

                {/* Key Features Section */}
                <motion.section /* ... features code ... */ >
                     {/* ... */}
                </motion.section>

                {/* How It Works Section */}
                <motion.section /* ... how it works code ... */ >
                     {/* ... */}
                </motion.section>

                {/* Testimonials Section */}
                <motion.section /* ... testimonials code ... */ >
                    {/* ... */}
                </motion.section>

                {/* Early Access Signup Section */}
                {/* // UPDATE: Added onSubmit to form and props to Input/Button */}
                <motion.section
                    id="early-access"
                    className="w-full bg-gray-800 py-12 lg:py-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <motion.h2 variants={fadeInUp} className="mb-3 text-2xl font-bold text-white sm:text-3xl">Be the First to Experience AYUV</motion.h2>
                        <motion.p variants={fadeInUp} className="mx-auto mb-6 max-w-2xl text-gray-400">
                            Sign up for our early access program and get exclusive updates as we revolutionize health data management in India.
                        </motion.p>
                        {/* --- UPDATE: Added onSubmit and props --- */}
                        <motion.form
                            variants={fadeInUp}
                            className="mx-auto max-w-md"
                            onSubmit={handleWaitlistSubmit} // Attach handler
                        >
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                                    required
                                    value={email} // Link to state
                                    onChange={(e) => setEmail(e.target.value)} // Update state
                                    disabled={isLoading} // Disable when loading
                                />
                                <Button
                                    type="submit"
                                    className="whitespace-nowrap bg-green-600 text-white hover:bg-green-700 disabled:opacity-50" // Style for disabled
                                    disabled={isLoading} // Disable when loading
                                    asChild
                                >
                                    <motion.button
                                        variants={buttonHoverTapEffect}
                                        whileHover={isLoading ? "" : "hover"}
                                        whileTap={isLoading ? "" : "tap"}
                                    >
                                        {isLoading ? 'Joining...' : 'Request Access'} {/* Show loading text */}
                                    </motion.button>
                                </Button>
                            </div>
                             {/* Feedback Message Display */}
                            {message && (
                                <p className={`mt-4 text-sm ${isError ? 'text-red-400' : 'text-green-400'}`}>
                                    {message}
                                </p>
                            )}
                        </motion.form>
                         {/* --- End UPDATE --- */}
                    </div>
                </motion.section>

                {/* Mission Statement Section */}
                <motion.section /* ... mission code ... */ >
                     {/* ... */}
                </motion.section>

                {/* CTA Section */}
                <motion.section /* ... cta code ... */ >
                     {/* ... */}
                </motion.section>
            </main>

            {/* Footer */}
            <footer /* ... footer code ... */ >
                {/* ... */}
            </footer>
        </div>
    )
}

// NOTE: Re-added the form state, handler function, and necessary props.
// Make sure all imports (useState, FormEvent) are present at the top.
// Ellipses (...) indicate code sections that were kept the same as the previous version.
