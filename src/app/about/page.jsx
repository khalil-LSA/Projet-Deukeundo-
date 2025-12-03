"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  // Variants d'animation réutilisables
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

  const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
        {/* hero section */}
        <motion.div 
          className="pt-16 relative overflow-hidden w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

            <div className="absolute w-full bg-cover bg-[url(/assets/backgroundDecouverte.png)] h-full z-10">
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 md:py-20 space-y-12 lg:space-y-0 flex flex-col lg:flex-row items-center">
                <motion.div 
                  className='max-w-[800px] relative z-20'
                  variants={containerVariants}
                >
                    <motion.h1 
                      className="text-3xl sm:text-4xl md:text-[3.5rem] font-montserrat font-bold mb-5"
                      variants={itemVariants}
                    >
                      <motion.span 
                        className="text-lightAccent"
                        whileHover={{ 
                          scale: 1.05,
                          color: "#427AF3",
                          transition: { duration: 0.2 }
                        }}
                      >
                        Deukeundo
                      </motion.span>
                      <br />Une vision citoyenne pour le Sénégal
                    </motion.h1>
                    <motion.p 
                      className="max-w-xl text-base text-gray-700 md:text-lg font-medium font-montserrat"
                      variants={itemVariants}
                    >
                      Transformons ensemble le secteur des transports, un signalement à la fois. Rejoignez notre plateforme interactive.
                    </motion.p>
                    
                </motion.div>
                <motion.div 
                  className=''
                  variants={heroImageVariants}
                >      
                    <motion.div
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      animate={{
                        y: [0, -10, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Image className="relative z-20" src="/assets/Globalization-pana.svg" alt="" width={500} height={500} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        {/* parcours section */}
        <motion.div 
          className="py-12 md:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  className="text-3xl text-3xl md:text-5xl font-montserrat font-bold mb-5"
                  variants={itemVariants}
                  whileHover={{ 
                    color: "#427AF3",
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  Un Parcours
                </motion.h2>
                <motion.p 
                  className="text-base text-gray-700 md:text-lg font-medium font-montserrat mb-3"
                  variants={itemVariants}
                >
                  L'histoire d'une initiative citoyenne pour les transports au Sénégal. La mission de Deukeundo est de favoriser l'engagement citoyen et d'améliorer la qualité des transports au Sénégal.
                </motion.p>
                <motion.p 
                  className="text-base text-gray-700 md:text-lg font-medium font-montserrat"
                  variants={itemVariants}
                >
                  Notre vision est d'établir un réseau de transport durable, transparent et accessible pour tous les Sénégalais. Nous aspirons à révolutionner la manière dont les citoyens interagissent avec leur environnement routier.
                </motion.p>
            </div>
        </motion.div>

        {/* mobilite responsable section */}
        <motion.div 
          className="py-12 md:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        > 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  className="text-3xl md:text-5xl font-montserrat font-bold mb-5"
                  variants={itemVariants}
                  whileHover={{ 
                    color: "#427AF3",
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  Mobilité responsable
                </motion.h2>
                <motion.div 
                  className="flex flex-col md:flex-row space-y-6 mt-12 md:space-x-16"
                  variants={containerVariants}
                >
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                    >
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                            <motion.div
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.1,
                                transition: { duration: 0.5 }
                              }}
                            >
                                <Image className="hidden md:block " src="/assets/mobilite1.svg" alt="" width={125} height={125} />
                                <Image className="md:hidden" src="/assets/mobilite1.svg" alt="" width={75} height={75} />
                            </motion.div>
                            <div className="flex-1 mr-6">
                                <motion.h1 
                                  className="text-xl md:text-3xl font-montserrat font-semibold"
                                  whileHover={{ 
                                    color: "#427AF3",
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                    Participation Active
                                </motion.h1>
                                <motion.hr 
                                  className="border-0 bg-lightAccent h-0.5 mt-3 rounded-xl max-w-[800px]"
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                />

                            </div>
                        </motion.div>
                        <motion.p 
                          className="text-base text-gray-700 md:text-lg font-medium font-montserrat"
                          variants={itemVariants}
                        >
                          Nous croyons fermement que les citoyens doivent être les acteurs de leur propre mobilité. En favorisant la participation active, nous transformons les défis en opportunités.
                        </motion.p>
                    </motion.div>
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                    >
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                            <motion.div
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.1,
                                transition: { duration: 0.5 }
                              }}
                            >
                                <Image className="hidden md:block " src="/assets/mobilite2.svg" alt="" width={125} height={125} />
                                <Image className="md:hidden" src="/assets/mobilite2.svg" alt="" width={75} height={75} />                            
                            </motion.div>
                            <div className="flex-1 mr-6">
                                <motion.h1 
                                  className="text-xl md:text-3xl font-montserrat font-semibold"
                                  whileHover={{ 
                                    color: "#427AF3",
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                    Approche Collaborative
                                </motion.h1>
                                <motion.hr 
                                  className="border-0 bg-lightAccent h-0.5 mt-3 rounded-xl max-w-[800px]"
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                />

                            </div>
                        </motion.div>
                        <motion.p 
                          className="text-base text-gray-700 md:text-lg font-medium font-montserrat"
                          variants={itemVariants}
                        >
                          Notre approche collaborative permet de créer un réseau de soutien mutuel qui garantit une amélioration constante des infrastructures de transport et de sécurité.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        {/* section newsletter */}
        <motion.div 
          className="w-full py-8 md:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <motion.div 
                  className="w-full relative flex flex-col items-center py-6 px-4 md:py-12 md:px-16 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-center text-center bg-lightAccent/70 mt-20 sm:rounded-4xl"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-lightAccent/70 sm:rounded-4xl"></div>
                    <motion.img 
                      src="/assets/Hotspot.png" 
                      className="absolute z-20 -top-[60px] sm:-top-[75px] md:-top-[115px] h-[85px] sm:h-[100px] md:h-[150px]" 
                      alt=""
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    />
                    <motion.div 
                      className="relative z-20 space-y-6 flex flex-col items-center"
                      variants={containerVariants}
                    >
                        <motion.h1 
                          className="text-3xl md:text-4xl font-montserrat font-semibold mb-5"
                          variants={itemVariants}
                          whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          Restons connectés
                        </motion.h1>
                        <motion.p 
                          className="text-base text-gray-100 md:text-lg font-medium font-montserrat"
                          variants={itemVariants}
                        >
                          Transformons ensemble le secteur des transports, un signalement à la fois. <br />Rejoignez notre plateforme interactive.
                        </motion.p>
                        <motion.div 
                          className="flex text-xs sm:text-base justify-center font-montserrat max-w-lg w-full mb-6"
                          variants={itemVariants}
                        >
                            <motion.input 
                                type="email" 
                                placeholder="Votre email" 
                                className="flex-1 px-4 py-3 text-gray-700 rounded-l-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                whileFocus={{ 
                                  scale: 1.02,
                                  boxShadow: "0 0 0 3px rgba(66, 122, 243, 0.1)",
                                  transition: { duration: 0.2 }
                                }}
                            />
                            <motion.button 
                              type="button" 
                              className="bg-white flex items-center group gap-2 text-lightAccent px-3 sm:px-6 sm:py-3 rounded-r-xl font-semibold hover:bg-accent hover:text-white transition-colors"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                                transition: { duration: 0.2 }
                              }}
                              whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.1 }
                              }}
                            >
                                <Image src="/assets/mail.svg" className="group-hover:hidden" alt="" width={24} height={24} /> 
                                <Image src="/assets/mail-v2.svg" className="group-hover:block hidden" alt="" width={24} height={24} /> 
                                S'abonner
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

    </motion.div>


  );
}
export default Home;
