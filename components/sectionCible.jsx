"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionCible = () => {
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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre et icône */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center space-x-8"
                    variants={itemVariants}
                >
                    <motion.div 
                        className=""
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ 
                            scale: 1.1, 
                            rotate: 5, 
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <Image className="hidden lg:block" src="/assets/asking-question.svg" alt="" width={250} height={250} />
                        <Image className="lg:hidden" src="/assets/asking-question.svg" alt="" width={200} height={200} />
                    </motion.div>
                    <motion.div 
                        className="flex-1"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="max-w-2xl text-[26px] sm:text-3xl text-center sm:text-start  md:text-3xl lg:text-4xl font-montserrat font-semibold"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                                y: -5,
                                color: "#427AF3",
                                transition: { duration: 0.3 }
                            }}
                        >
                            À qui est destiné l'application de signalement <motion.span 
                                className="text-lightAccent"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ 
                                    scale: 1.1,
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
                            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />

                    </motion.div>
                </motion.div>
                {/* Cards */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-12 gap-4 md:gap-12 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Card 1 */}
                    <motion.div 
                        className="bg-white rounded-4xl py-4 border-gray-400 border-2 px-8"
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(66, 122, 243, 0.15)",
                            borderColor: "#427AF3",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className="flex items-center space-x-3 py-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ 
                                    rotate: 360,
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <Image src="/assets/globe_location_pin.svg" alt="" width={50} height={50} />
                            </motion.div>
                            <motion.h2 
                                className="text-4xl font-montserrat"
                                whileHover={{ 
                                    scale: 1.1,
                                    color: "#427AF3",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Règion
                            </motion.h2>
                        </motion.div>
                        <motion.hr 
                            className="border-0 bg-gray-300 h-0.5 rounded-xl"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <motion.ul 
                            className="font-montserrat text-gray-700 my-6 space-y-4 list-inside"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Mobilisez vos citoyens
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Etre réactif en temps réel
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Transformez votre région
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Gérez toutes les anomalies 
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div 
                        className="bg-white rounded-4xl py-4 border-gray-400 border-2 px-8"
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(66, 122, 243, 0.15)",
                            borderColor: "#427AF3",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className="flex items-center space-x-2 py-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ 
                                    rotate: 360,
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <Image src="/assets/person.svg" alt="" width={55} height={55} />
                            </motion.div>
                            <motion.h2 
                                className="text-4xl font-montserrat"
                                whileHover={{ 
                                    scale: 1.1,
                                    color: "#427AF3",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Citoyen
                            </motion.h2>
                        </motion.div>
                        <motion.hr 
                            className="border-0 bg-gray-300 h-0.5 rounded-xl"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <motion.ul className="font-montserrat text-gray-700 my-6 space-y-4 list-inside">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Devenir acteur de sa villes
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Etre engagé pour sa ville
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Se responsabiliser
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Préserver sa ville 
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div 
                        className="bg-white rounded-4xl py-4 border-gray-400 border-2 px-8"
                        variants={cardVariants}
                        whileHover={{ 
                            y: -10, 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(66, 122, 243, 0.15)",
                            borderColor: "#427AF3",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div 
                            className="flex items-center space-x-3 py-4"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                whileHover={{ 
                                    rotate: 360,
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <Image src="/assets/bank.svg" alt="" width={45} height={45} />
                            </motion.div>
                            <motion.h2 
                                className="text-4xl font-montserrat"
                                whileHover={{ 
                                    scale: 1.1,
                                    color: "#427AF3",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Mairies
                            </motion.h2>
                        </motion.div>
                        <motion.hr 
                            className="border-0 bg-gray-300 h-0.5 rounded-xl"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <motion.ul className="font-montserrat text-gray-700 my-6 space-y-4 list-inside">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Centraliser les signalements
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Mobiliser le bon agent
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Localisez précisément
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Image src="/assets/check.svg" className="inline-block mr-2" alt="" width={20} height={20} /> Agissez plus rapidement 
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default SectionCible;