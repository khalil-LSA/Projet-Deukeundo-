"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Button} from "./ui/button";
import {CiMenuFries} from 'react-icons/ci';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const MobileNav =()=>{
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    
    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-center items-center ">
            <CiMenuFries className='text-[32px] text-accent cursor-pointer'/>
        </SheetTrigger>
        <SheetContent className="flex flex-col" >
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-full"
                    >
                        <motion.div 
                            className='hidden sm:flex justify-center mt-4 mb-3'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            <Link href="/" >
                            <img src="/assets/Deukeundo.png" className="h-8" alt="Deukeundo Logo"/>
                            </Link>
                        </motion.div>
                        <motion.nav 
                            className='mt-4 sm:mt-0 flex flex-col justify-center items-center divide-y divide-gray-300 w-3/5 max-w-xs mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        >
                            {links.map((link, index)=>{
                                return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                                    className="w-full"
                                >
                                    <Link 
                                        href={link.path} 
                                        className={`${link.path === pathname && "text-accent"} text-center font-montserrat text-base text-black font-normal hover:text-accent w-full transition-all py-1.5 px-3 block`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                                className="w-full"
                            >
                                <Link 
                                    href="/contact" 
                                    onClick={() => setOpen(false)}
                                    className="text-center font-montserrat text-base text-black font-normal hover:text-accent w-full transition-all py-1.5 px-3 block"
                                >  
                                    Rejoindre Deukeundo
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </SheetContent>
    </Sheet>
}

export default MobileNav;