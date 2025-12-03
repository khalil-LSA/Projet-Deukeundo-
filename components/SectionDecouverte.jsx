"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionDecouverte = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
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

    const videoVariants = {
        hidden: { opacity: 0, scale: 0.5, rotateY: -30 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: 100, rotateX: -20 },
        visible: {
            opacity: 1,
            x: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="w-full py-8 md:py-20 mask-t-from-90% bg-[url(/assets/backgroundDecouverte.png)] bg-cover lg:bg-top-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre et icône */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center space-x-2"
                    variants={headerVariants}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ 
                            scale: 1.1, 
                            rotate: [0, 10, -10, 0],
                            y: -10,
                            transition: { duration: 0.6 }
                        }}
                    >
                        <Image className="hidden lg:block" src="/assets/iconDecouverte.png" alt="" width={200} height={200} />
                        <Image className="lg:hidden" src="/assets/iconDecouverte.png" alt="" width={150} height={150} />
                    </motion.div>
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h1 
                            className="text-3xl md:text-4xl font-montserrat font-semibold"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                                y: -5,
                                color: "#427AF3",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Découvrez <motion.span 
                                className="text-lightAccent"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ 
                                    scale: 1.2,
                                    textShadow: "0 0 20px rgba(66, 122, 243, 0.5)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Deukeundo
                            </motion.span>
                        </motion.h1>
                        <motion.hr 
                            className="border-0 bg-lightAccent h-0.5 mt-3 rounded-xl max-w-[800px]"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />

                    </motion.div>
                </motion.div>
                {/* Description */}
                <motion.div 
                    className="mt-4 flex flex-col lg:flex-row lg:space-x-10 md:items-center"
                    variants={containerVariants}
                >
                    {/* Video */}
                    <motion.div 
                        className="flex justify-center items-center py-10"
                        variants={videoVariants}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.iframe
                            width="640"
                            height="360"
                            src="https://www.youtube.com/embed/eQ3DuXbQS5c"
                            title="Video de présentation Deukeundo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg w-full max-w-2xl aspect-video"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        ></motion.iframe>
                    </motion.div>
                    {/* Texte */}
                    <motion.div 
                        className="max-w-[500px] space-y-8"
                        variants={featureVariants}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                                x: 5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="flex items-center mb-2"
                                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        rotate: 180,
                                        scale: 1.1,
                                        transition: { duration: 0.4 }
                                    }}
                                >
                                    <Image src="/assets/Alert-triangle.svg" alt="" width={50} height={50} />
                                </motion.div>
                                <motion.h2 
                                    className="text-xl md:text-2xl font-montserrat font-semibold ml-4"
                                    whileHover={{ 
                                        color: "#427AF3",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    Signalement en temps réel
                                </motion.h2>
                            </motion.div>
                            <motion.p 
                                className="text-gray-700 font-montserrat sm:font-medium"
                                whileHover={{ 
                                    color: "#374151",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Signalez des embouteillages, accidents, dangers, routes fermées, pannes, routes endommagées, et bien plus encore. Ajoutez une photo pour les signalements de routes endommagées afin de permettre une analyse par IA.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                                x: 5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <motion.div 
                                className="flex items-center mb-2"
                                whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            >
                                <motion.div
                                    whileHover={{ 
                                        rotate: 180,
                                        scale: 1.1,
                                        transition: { duration: 0.4 }
                                    }}
                                >
                                    <Image src="/assets/car_crash.svg" alt="" width={50} height={50} />
                                </motion.div>
                                <motion.h2 
                                    className="text-xl md:text-2xl font-montserrat font-semibold ml-4"
                                    whileHover={{ 
                                        color: "#427AF3",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    Détection automatique d'accident
                                </motion.h2>
                            </motion.div>
                            <motion.p 
                                className="text-gray-700 font-montserrat sm:font-medium"
                                whileHover={{ 
                                    color: "#374151",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Détection d'accidents grâce au capteur du smartphone. Une alerte est envoyée aux secours si aucune action n'est entreprise dans les 30 secondes suivant l'accident.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>

        </motion.div>
    );
};

export default SectionDecouverte;