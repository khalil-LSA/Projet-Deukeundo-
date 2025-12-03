"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionAppel = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
        <motion.div 
          className="w-full py-8 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {/* Card */}
                <motion.div 
                  className="w-full flex relative items-center -z-20 py-6 px-4 md:py-12 md:px-16 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-center bg-lightAccent/70 mt-20 sm:rounded-4xl"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(66, 122, 243, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                    <motion.div className="absolute left-0 w-full h-full -z-10 bg-lightAccent/70 sm:rounded-4xl"></motion.div>
                    <motion.div 
                      className="md:w-2/5 md:relative"
                      variants={imageVariants}
                    >
                        <motion.img 
                          className="absolute hidden md:block -translate-y-1/2 lg:translate-x-1/5 w-[300px]" 
                          src="/assets/image-appel.png" 
                          alt=""
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, 2, -2, 0],
                            transition: { duration: 0.6 }
                          }}
                        />
                    </motion.div>
                    <motion.div 
                      className="md:w-3/5 font-montserrat"
                      variants={textVariants}
                    >
                        <motion.h3 
                          className="text-2xl lg:text-4xl font-montserrat font-semibold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                          viewport={{ once: true, amount: 0.3 }}
                          whileHover={{ 
                            y: -3,
                            transition: { duration: 0.3 }
                          }}
                        >
                          Téléchargez notre Application
                        </motion.h3>
                        <motion.p 
                          className="text-lg sm:text-[20px] sm:font-medium max-w-[350px]"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          Ensemble pour un transport sûr et efficace
                        </motion.p>
                        <motion.div 
                          className="mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                        <motion.p 
                          className="text-xs sm:text-base sm:font-medium mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          Bientôt disponible sur toutes les plateformes
                        </motion.p>
                            {/* Boutons de téléchargement */}
                            <motion.div 
                              className="flex gap-2 sm:gap-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                              viewport={{ once: true, amount: 0.3 }}
                            >
                                {/* Bouton App Store */}
                                <motion.button 
                                  className="cursor-pointer"
                                  whileHover={{ 
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                <Image src="/assets/android-v2.svg" alt="App Store" width={240} height={80} />
                                </motion.button>

                                {/* Bouton Google Play */}
                                <motion.button 
                                  className="cursor-pointer"
                                  whileHover={{ 
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                    <Image src="/assets/ios-v2.svg" alt="Google Play" width={219} height={65} />
                                </motion.button>
                            </motion.div>
                        </motion.div>    
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
  );
};

export default SectionAppel;