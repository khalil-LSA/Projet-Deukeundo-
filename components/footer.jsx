"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const socialIconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "backOut"
            }
        },
        hover: {
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.2 }
        }
    };

    const linkVariants = {
        hover: {
            x: 5,
            color: "#427AF3",
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.footer 
            className="bg-gray-50 mt-20 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenu principal du footer */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    variants={containerVariants}
                >
                    {/* Section Logo et Description */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Logo */}
                            <Link href="/">
                            <img src="/assets/Deukeundo.png" className="py-2 h-16" alt="Deukeundo Logo"/>
                            </Link>
                        </motion.div>
                        <motion.p 
                            className="text-gray-600 font-montserrat text-sm leading-relaxed"
                            variants={itemVariants}
                        >
                            La solution innovante pour une gestion intelligente de la circulation routière
                        </motion.p>
                        {/* Icônes réseaux sociaux */}
                        <motion.div 
                            className="flex space-x-4"
                            variants={containerVariants}
                        >
                            <motion.a 
                                href="https://www.youtube.com/@deukeundo-digit" 
                                className="text-gray-400 hover:text-accent transition-colors"
                                variants={socialIconVariants}
                                whileHover="hover"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-gray-400 hover:text-accent transition-colors"
                                variants={socialIconVariants}
                                whileHover="hover"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.887 2.747.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.757-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </motion.a>
                            <motion.a 
                                href="#" 
                                className="text-gray-400 hover:text-accent transition-colors"
                                variants={socialIconVariants}
                                whileHover="hover"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Section Liens rapides */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.h3 
                            className="text-lg font-montserrat font-semibold text-gray-900"
                            whileHover={{ color: "#427AF3" }}
                            transition={{ duration: 0.2 }}
                        >
                            Liens rapides
                        </motion.h3>
                        <motion.nav 
                            className="flex flex-col space-y-3"
                            variants={containerVariants}
                        >
                            <motion.div variants={linkVariants} whileHover="hover">
                                <Link href="/" className="text-gray-600 hover:text-accent transition-colors font-montserrat text-sm">
                                    Accueil
                                </Link>
                            </motion.div>
                            <motion.div variants={linkVariants} whileHover="hover">
                                <Link href="/about" className="text-gray-600 hover:text-accent transition-colors font-montserrat text-sm">
                                    À propos
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>

                    {/* Section Contact */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <motion.h3 
                            className="text-lg font-montserrat font-semibold text-gray-900"
                            whileHover={{ color: "#427AF3" }}
                            transition={{ duration: 0.2 }}
                        >
                            Contact
                        </motion.h3>
                        <motion.div 
                            className="space-y-4"
                            variants={containerVariants}
                        >
                            <motion.div 
                                className="flex items-start space-x-3"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image src="/assets/Map-pin.svg" alt="Location" width={20} height={20} />
                                <span className="text-gray-600 font-montserrat text-sm">
                                    Dakar, Sénégal
                                </span>
                            </motion.div>
                            <motion.div 
                                className="flex items-center space-x-3"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image src="/assets/Phone.svg" alt="Phone" width={20} height={20} />
                                <span className="text-gray-600 font-montserrat text-sm">
                                    +221 78 160 55 09
                                </span>
                            </motion.div>
                            <motion.div 
                                className="flex items-center space-x-3"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image src="/assets/mail.svg" alt="Email" width={20} height={20} />
                                <Link href="mailto:contact@deukeundo.com" className="text-gray-600 hover:text-accent transition-colors font-montserrat text-sm">
                                    contact@deukeundo.com
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Ligne de séparation */}
                <motion.div 
                    className="border-t border-gray-200 mt-12 pt-8"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                        variants={containerVariants}
                    >
                        {/* Copyright */}
                        <motion.p 
                            className="text-gray-500 font-montserrat text-sm"
                            variants={itemVariants}
                        >
                            © 2025 Deukeundo. Tous droits réservés.
                        </motion.p>
                        
                        {/* Liens légaux */}
                        <motion.div 
                            className="flex space-x-6"
                            variants={containerVariants}
                        >
                            <motion.div variants={linkVariants} whileHover="hover">
                                <Link href="#" className="text-gray-500 hover:text-accent transition-colors font-montserrat text-sm">
                                    Politique de confidentialité
                                </Link>
                            </motion.div>
                            <motion.div variants={linkVariants} whileHover="hover">
                                <Link href="#" className="text-gray-500 hover:text-accent transition-colors font-montserrat text-sm">
                                    Conditions d'utilisation
                                </Link>
                            </motion.div>
                            <motion.div variants={linkVariants} whileHover="hover">
                                <Link href="#" className="text-gray-500 hover:text-accent transition-colors font-montserrat text-sm">
                                    Mentions légales
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;