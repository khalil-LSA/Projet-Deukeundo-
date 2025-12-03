"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionEtape = () => {
    return(
        <div className="w-full py-8 md:py-20 md:mb-[100px]">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                {/* Titre et icône */}
                <motion.div 
                    className="flex flex-col px-4 sm:px-0 sm:flex-row items-center space-x-4 lg:space-x-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
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
                        <Image className="hidden lg:block" src="/assets/proud-person.svg" alt="" width={225} height={225} />
                        <Image className="lg:hidden" src="/assets/proud-person.svg" alt="" width={175} height={175} />
                    </motion.div>
                    <motion.div 
                        className="flex-1 text-center sm:text-start"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h1 
                            className="text-3xl  lg:text-4xl font-montserrat font-semibold"
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
                            Un outil conçu pour vous <motion.span 
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
                                citoyens engagés
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            className="font-montserrat font-medium mt-2 text-lg lg:text-xl text-gray-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            Comment ca marche ?
                        </motion.p>
                        <motion.hr 
                            className="border-0 bg-lightAccent h-0.5 mt-3 rounded-xl max-w-[800px]"
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        />

                    </motion.div>
                </motion.div>
                {/* Steps */}
                <div className="sm:mt-[200px] mt-12 flex flex-col space-y-0 sm:space-y-[240px]">
                    {/* step 1 */}
                    <motion.div 
                        className=""
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex relative items-center p-3 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-lightAccent/70 sm:rounded-4xl max-w-3xl">
                            <div className="absolute left-0 w-full h-full z-10 bg-lightAccent/70 sm:rounded-3xl"></div>

                            <div className="hidden sm:block relative z-20 mx-2">
                                <span className="font-roboto font-bold text-5xl">1</span>
                            </div>
                            <div className="w-[200px] mx-2 sm:relative">
                                <img src="/assets/step1.png" className=" sm:absolute sm:-translate-y-1/2 relative z-30 " alt="" />
                            </div>
                                <img src="/assets/ornament.png" className="hidden sm:block h-[300px] w-[300px] left-0  absolute -z-10" alt="" />
                            <div className="relative w-[280px] sm:w-fit z-20">
                                <h2 className="text-base sm:text-xl font-montserrat font-semibold">Localisez votre signalement</h2>
                                <p className="text-gray-100 font-montserrat font-medium mt-2 text-xs sm:text-base">Localisez précisément et rapidement votre signalement à l'aide la localisation de votre téléphone.</p>
                            </div>
                        </div>
                    </motion.div>
                    {/* step 2 */}
                    <motion.div 
                        className="flex w-full sm:justify-end"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex relative w-full  items-center p-3 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-lightAccent/70 sm:rounded-4xl sm:max-w-3xl">
                            <div className="absolute left-0 w-full h-full z-10 bg-lightAccent/70 sm:rounded-3xl"></div>
                            <div className="relative w-[240px] sm:w-fit z-20">
                                <h2 className="text-base sm:text-xl font-montserrat font-semibold">Décrivez le signalement</h2>
                                <p className="text-gray-100 font-montserrat font-medium mt-2 text-xs sm:text-base">Décrivez le type de signalement pour aider les agents  à évaluer au mieux.</p>
                            </div>

                            <img src="/assets/ornament.png" className="hidden sm:block h-[300px] w-[300px] right-0 absolute -z-10 " alt="" />
                            <div className="w-[165px] mx-2 relative">
                                <img src="/assets/step2.png" className="sm:absolute right-0 relative sm:-translate-y-1/2 z-30 " alt="" />
                            </div>
                            <div className="relative hidden sm:block mx-2 z-20">
                                <span className="font-roboto font-bold text-5xl">2</span>
                            </div>
                        </div>
                    </motion.div>
                    {/* step 3 */}
                    <motion.div 
                        className=""
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex relative items-center p-3 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-lightAccent/70 sm:rounded-4xl max-w-3xl">
                            <div className="absolute left-0 w-full h-full z-10 bg-lightAccent/70 sm:rounded-3xl"></div>

                            <div className="relative hidden sm:block mx-2 z-20">
                                <span className="font-roboto font-bold text-5xl">3</span>
                            </div>
                            <div className="w-[200px] mx-2 relative">
                                <img src="/assets/step3.png" className="sm:absolute sm:-translate-y-1/2 relative z-30" alt="" />
                            </div>
                                <img src="/assets/ornament.png" className="hidden sm:block h-[300px] w-[300px] left-0  absolute -z-10" alt="" />
                            <div className="relative w-[300px] sm:w-fit z-20">
                                <h2 className="text-base sm:text-xl font-montserrat font-semibold">Prenez en photo le signalement</h2>
                                <p className="text-gray-100 font-montserrat font-medium mt-2 text-xs sm:text-base">Prenez une photo qui complètera votre signalement. Photo qui sera analysée par l'IA pour une classification du signalement.</p>
                            </div>
                        </div>
                    </motion.div>
                    {/* step 4 */}
                    <motion.div 
                        className="flex w-full justify-end"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex w-full relative items-center p-3 text-white bg-[url('/assets/card-pattern.png')] bg-cover bg-lightAccent/70 sm:rounded-4xl max-w-3xl">
                            <div className="absolute left-0 w-full h-full z-10 bg-lightAccent/70 sm:rounded-3xl"></div>
                            <div className="relative max-w-[200px] sm:max-w-full z-20">
                                <h2 className="text-base sm:text-xl font-montserrat font-semibold">Suivez vos signalements en temps réel !</h2>
                                <p className="text-gray-100 font-montserrat font-medium mt-2 text-xs sm:text-base">Suivez en temps réel l'avancé de tous vos signalements via l'application, pour être averti quand le signalement est résolu.</p>
                            </div>

                            <img src="/assets/ornament.png" className="hidden sm:block h-[300px] w-[300px] right-0 absolute -z-10 " alt="" />
                            <div className="sm:w-[265px] w-[130px] mx-2 relative">
                                <img src="/assets/step4.png" className="sm:absolute right-0 relative sm:-translate-y-1/2 z-30 " alt="" />
                            </div>
                            <div className="relative hidden sm:block mx-2 z-20">
                                <span className="font-roboto font-bold text-5xl">4</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>

        </div>
    )
};

export default SectionEtape;