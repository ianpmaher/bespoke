// hero component for the home page
"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
    // framer motion variants
    const variants = {
        hidden: { opacity: 0, scale: 0.4 },
        visible: { opacity: 1, scale: 1 },
    };

    const text1 = "your favorite Newport bakery";
    const text2 = "for locals, by locals";

    const gradual = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="flex flex-col justify-center items- gap- mx-auto mt-1 mb-0 z-0">
            <div className="flex flex-row gap-1 justify-center items-center">
                <motion.section
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    <div className="relative">
                        <Image
                            src={
                                "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            width={400}
                            height={400}
                            alt="dough"
                            priority
                            className="rounded-xl"
                        />
                        <div className="rounded-xl opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-auto flex justify-center items-center bg-black bg-opacity-70 text-3xl text-white font-semibold">
                            always freshly baked
                        </div>
                    </div>
                </motion.section>
                <motion.section
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    <div className="relative">
                        <Image
                            src={
                                "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            width={400}
                            height={400}
                            alt="flour bread"
                            priority
                            className="rounded-xl"
                        />
                        <div className="rounded-xl opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-auto flex justify-center items-center bg-black bg-opacity-70 text-3xl text-white font-semibold">
                            artisanal grains
                        </div>
                    </div>
                </motion.section>
            </div>
            <section className=" bg-modernDolchLight-caret-color w-1/4 h-1/4 rounded-xl my-0 mx-auto text-black">
                <div className="flex flex-row h-10 text-justify items-center justify-center">
                    <AnimatePresence>
                        {text1.split("").map((char, i) => (
                            <motion.h1
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={gradual}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center font-display text-md font-bold tracking-[-0.02em] drop-shadow-sm md:text-md md:leading-[5rem]"
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.h1>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="flex flex-row text-justify items-center justify-center">
                    <AnimatePresence>
                        {text2.split("").map((char, i) => (
                            <motion.h1
                                key={i}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={gradual}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="text-center font-display text-md font-bold tracking-[-0.02em] drop-shadow-sm md:text-md md:leading-[5rem]"
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.h1>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
            <div className="flex flex-row justify-center">
                <motion.section
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-1/2 h-1/2 mt-[-4rem]"
                >
                    <div className="relative">
                        <Image
                            src={
                                "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            width={400}
                            height={200}
                            alt="dough"
                            priority
                            className="rounded-xl scale-75"
                        />
                        <div className="rounded-xl scale-75 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-70 text-3xl text-white font-semibold">
                            artisans at work
                        </div>
                    </div>
                </motion.section>
            </div>
        </section>
    );
}

// export function GradualSpacing() {
//     const text = "Gradual Spacing";
//     const gradual = {
//         hidden: { opacity: 0, x: -20 },
//         visible: { opacity: 1, x: 0 },
//     };
//     return (
//         <div className="flex space-x-1 justify-center">
//             <AnimatePresence>
//                 {text.split("").map((char, i) => (
//                     <motion.h1
//                         key={i}
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         variants={gradual}
//                         transition={{ duration: 0.5, delay: i * 0.1 }}
//                         className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
//                     >
//                         {char === " " ? <span>&nbsp;</span> : char}
//                     </motion.h1>
//                 ))}
//             </AnimatePresence>
//         </div>
//     );
// }
