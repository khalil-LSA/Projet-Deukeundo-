"use client";

import Image from "next/image";
import { motion } from "framer-motion";


// components

const Hero = () => {
    return(
        <div className="pt-[80px] relative  overflow-hidden min-h-screen w-full">

            <div className=" absolute w-full bg-cover sm:bg-[url(/assets/backgroundHero.png)] bg-top h-full z-10">
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 md:py-24 space-y-12 lg:space-y-0 flex flex-col lg:flex-row items-center">
                <motion.div 
                    className='max-w-[600px] relative z-20'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1 
                        className=" text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="text-lightAccent">Deukeundo</span><br /> L'Application mobile de votre ville
                    </motion.h1>
                    <motion.p 
                        className="text-base text-gray-700 md:text-lg font-medium font-montserrat"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        Deukeundo L'Application de signalement de votre ville.
            Signalez en temps réel les actes malsaine qui se passe dans votre localite, et problèmes de voirie dans votre ville, et problemes d'accidents ou d'embouteillage sur les routes.
                    </motion.p>
                    
                    {/* Boutons de téléchargement */}
                    <motion.div 
                        className="flex mt-6 gap-2 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        {/* Bouton App Store */}
                        <motion.button 
                            className="cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                        <Image src="/assets/ios-v1.svg" alt="App Store" width={195} height={65} />
                        </motion.button>

                        {/* Bouton Google Play */}
                        <motion.button 
                            className="cursor-pointer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Image src="/assets/android-v1.svg" alt="Google Play" width={216} height={72} />
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className='relative'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >      
                    <motion.div 
                        className="w-[250px] h-[200px] md:w-[350px] md:h-[250px] lg:w-[500px] lg:h-[300px] rounded-full bg-accent absolute left-20 blur-style z-0"
                        animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    ></motion.div>
                    <motion.div
                        className="relative z-30"
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ 
                            opacity: 1,
                            scale: 1,
                            y: 0
                        }}
                        transition={{ 
                            duration: 1.8,
                            delay: 1,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -8, 0]
                            }}
                            transition={{ 
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        >
                            <Image 
                                className="w-full h-auto max-w-[600px] lg:max-w-[800px]" 
                                src="/assets/imageHero.png" 
                                alt="Deukeundo App Mockup" 
                                width={800} 
                                height={800}
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
};

export default Hero;