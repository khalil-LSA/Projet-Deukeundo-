"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Détecter quand l'utilisateur a scrollé
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Fonction pour remonter en haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "backOut"
            }
        },
        hover: {
            scale: 1.1,
            y: -5,
            boxShadow: "0 8px 25px rgba(66, 122, 243, 0.3)",
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.9,
            transition: {
                duration: 0.1
            }
        }
    };

    const arrowVariants = {
        hover: {
            y: -3,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-accent to-lightAccent text-white p-3 rounded-full shadow-lg group"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={scrollToTop}
                    aria-label="Remonter en haut de la page"
                >
                    {/* Effet de brillance */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full -skew-x-12"
                        initial={{ x: "-100%" }}
                        whileHover={{
                            x: "100%",
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            }
                        }}
                    />

                    {/* Flèche */}
                    <motion.svg
                        className="w-6 h-6 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        variants={arrowVariants}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </motion.svg>

                    {/* Pulse permanent subtil */}
                    <motion.div
                        className="absolute inset-0 bg-white/10 rounded-full"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Border glow au hover */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        initial={{ opacity: 0 }}
                        whileHover={{
                            opacity: 1,
                            scale: 1.1,
                            transition: { duration: 0.2 }
                        }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;