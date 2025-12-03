"use client";
import Link from 'next/link';
import {Button} from "./ui/button";
import { motion } from "framer-motion";

// components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const buttonVariants = {
        initial: { 
            opacity: 0, 
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2
            }
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 6px 20px rgba(66, 122, 243, 0.25)",
            transition: {
                duration: 0.25,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.96,
            transition: {
                duration: 0.1
            }
        }
    };

    return(
        <header className='fixed bg-white top-0 left-0 right-0 z-100 py-2 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center space-x-5'>
                {/* Logo */}
                <Link href="/">
                <img src="/assets/Deukeundo.png" className="py-2 h-16" alt="Deukeundo Logo"/>
                </Link>
                {/* Navigation and hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <motion.div
                        variants={buttonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Link href="/contact">
                            <Button className="relative group bg-gradient-to-r from-accent to-lightAccent overflow-hidden">
                                {/* Effet de brillance renforcé */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-full"
                                    initial={{ x: "-130%" }}
                                    whileHover={{
                                        x: "130%",
                                        transition: {
                                            duration: 0.7,
                                            ease: "easeInOut"
                                        }
                                    }}
                                />
                                
                                {/* Texte du bouton */}
                                <motion.span
                                    className="relative z-10 flex items-center gap-2 font-medium"
                                    whileHover={{
                                        letterSpacing: "0.3px",
                                        color: "#ffffff",
                                        transition: { duration: 0.25 }
                                    }}
                                >
                                    Rejoindre Deukeundo
                                    <motion.svg 
                                        className="w-4 h-4" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        whileHover={{
                                            x: 3,
                                            rotate: 10,
                                            scale: 1.1,
                                            transition: { duration: 0.25 }
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </motion.svg>
                                </motion.span>

                                {/* Background hover renforcé */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                                    whileHover={{
                                        opacity: 0.15,
                                        transition: { duration: 0.25 }
                                    }}
                                />

                                {/* Pulse permanent subtil */}
                                <motion.div
                                    className="absolute inset-0 bg-white/5 rounded-lg"
                                    animate={{
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav/>
                </div>
                
            </div>
        </header>
    )
};

export default Header;