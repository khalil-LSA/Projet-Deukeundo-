"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const links = [
    {
        name: "Accueil",
        path: "/",
    },
    {
        name: "À Propos",
        path: "/about",
    },

]

const Nav = () => {
    const pathname = usePathname();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const linkVariants = {
        hidden: { 
            opacity: 0, 
            y: -20,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        },
        hover: {
            y: -2,
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    const activeVariants = {
        scale: [1, 1.1, 1],
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    };

    return(
        <motion.nav 
            className="flex gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {links.map((link, index)=>{
                const isActive = link.path === pathname;
                return (
                <motion.div
                    key={index}
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    animate={isActive ? activeVariants : {}}
                >
                    <Link 
                        href={link.path} 
                        className={`${isActive && "text-accent"} font-montserrat text-black font-semibold hover:text-accent transition-all relative block`}
                    >
                        <motion.span
                            className="relative z-10"
                            whileHover={{ 
                                color: "#427AF3",
                                transition: { duration: 0.2 }
                            }}
                        >
                            {link.name}
                        </motion.span>
                        {/* Indicateur de page active */}
                        {isActive && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                                layoutId="activeIndicator"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ 
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                            />
                        )}
                        {/* Effet de hover underline */}
                        <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ 
                                scaleX: isActive ? 0 : 1,
                                transition: { duration: 0.2 }
                            }}
                        />
                    </Link>
                </motion.div>
                );
            })}
        </motion.nav>
    )
}

export default Nav;