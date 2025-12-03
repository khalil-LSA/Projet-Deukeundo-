"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionAdministrative = () => {
    return(
        <div className="w-full py-8 md:py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre et icône */}
                <motion.div 
                    className="flex flex-col sm:flex-row items-center space-x-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.64, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div 
                        className=""
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <Image className="hidden lg:block" src="/assets/administration.svg" alt="" width={300} height={300} />
                        <Image className="lg:hidden" src="/assets/administration.svg" alt="" width={200} height={200} />
                    </motion.div>
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.64, delay: 0.32, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h1 
                            className="max-w-2xl text-center sm:text-start text-3xl md:text-3xl lg:text-4xl font-montserrat font-semibold"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.64, delay: 0.48, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Une solution puissante pour l'administration
                        </motion.h1>
                        <motion.hr 
                            className="border-0 bg-lightAccent h-0.5 mt-3 rounded-xl max-w-[800px]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.64, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
                {/* description */}
                <motion.div 
                    className="flex flex-col items-center lg:items-start md:flex-row gap-10 mt-15"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.64, delay: 0.24 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div 
                        className="md:w-7/12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.64, delay: 0.32, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img 
                            src="/assets/strip.svg" 
                            className="w-[200px] lg:w-[250px] hidden md:block" 
                            alt=""
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.48, delay: 0.48, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <img src="/assets/Analyze-Data.png" className="md:hidden w-[200px]" alt="" />
                        <motion.h1 
                            className="text-2xl md:text-2xl lg:text-4xl font-montserrat font-semibold mb-2 md:mb-4 mt-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.64, delay: 0.56, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Vue d'ensemble des statistiques
                        </motion.h1>
                        <motion.p 
                            className="text-gray-700 font-montserrat lg:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.64, delay: 0.72, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Grâce aux données collectées sur les signalements, l'administration bénéficiera d'un accès à des informations précieuses pour gérer efficacement la circulation routière. Cela permettra de prioriser les interventions, d'optimiser la gestion des infrastructures et de répondre rapidement aux situations d'urgence.
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        className="hidden md:block md:w-5/12 mb-8"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -5, 0]
                            }}
                            transition={{ 
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.6
                            }}
                        >
                            <Image src="/assets/Analyze-Data.png" alt="" width={1200} height={1200} />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="flex flex-col items-center lg:items-start md:flex-row mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.64, delay: 0.16 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div 
                        className="hidden md:block md:w-5/12 px-3"
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                    >
                        <motion.div
                            animate={{ 
                                y: [0, -8, 0],
                                rotate: [0, 1, -1, 0]
                            }}
                            transition={{ 
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                                rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                            }}
                        >
                            <img src="/assets/car-security.png" className="w-[200px] md:w-[400px] hidden md:block" alt="" />
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="md:w-7/12"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.64, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img 
                            src="/assets/strip.svg" 
                            className="w-[200px] lg:w-[250px] hidden md:block" 
                            alt=""
                            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.64, delay: 0.48, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        />
                        <img src="/assets/car-security.png" className="md:hidden w-[200px]" alt="" />
                        <motion.h1 
                            className="text-2xl md:text-2xl lg:text-4xl font-montserrat font-semibold mb-2 md:mb-4 mt-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.64, delay: 0.56, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Détection des infractions grace à <motion.span 
                                className="text-lightAccent"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.48, delay: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.1, color: "#427AF3" }}
                            >
                                Trafic vision
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            className="text-gray-700 font-montserrat lg:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.64, delay: 0.72, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Analyse des flux vidéo fournis par les caméras à l'aide de l'intelligence artificielle pour détecter les infractions telles que les excès de vitesse, la circulation en sens interdit, et bien d'autres. Le système identifie ensuite les plaques d'immatriculation des contrevenants afin de permettre leur verbalisation.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionAdministrative;