// hero component for the home page
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    // framer motion variants
    const variants = {
        hidden: { opacity: 0, scale: 0.4},
        visible: { opacity: 1, scale: 1},
    };

    return (
        // <section className="bg-sailing-lady bg-cover bg-center bg-fixed w-[85vw] bg-no-repeat h-screen">
        <div className="flex gap-2">
            <motion.section
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2, ease: "easeInOut"}}
                className="w-full h-full"
            >
                <Image src={"https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={400} height={400} alt="dough" priority className="rounded-xl" />
                    <span>made fresh every day</span>
            </motion.section>
            <motion.section
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2, ease: "easeInOut"}}
                className="w-full h-full"
            >
                <Image src={"https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={400} height={400} alt="flour bread" priority className="rounded-xl" />
                    <span>made fresh every day</span>
            </motion.section>
            {/* <motion.section
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2, ease: "easeInOut"}}
                className="bg-docks bg-cover bg-center bg-fixed w- h-[80vh] bg-no-repeat"
            >
                <div className="flex justify-center w- h-screen">
                    <span>wow so nice</span>
                </div>
            </motion.section> */}
        </div>
        // </section>
    );
}
