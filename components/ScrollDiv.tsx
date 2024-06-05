"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollDiv = ({ children }
    : {
        children: React.ReactNode;
    }
) => {
    const { scrollYProgress } = useScroll();
    return( 
        <motion.div style={{ scaleX: scrollYProgress}} className="fixed top-0 left-0 right-0 h-2 bg-dracula-purple rounded-xl">
            {children}
        </motion.div>
    );
};

const ScrollYDiv = ({ className }
    : {
        // children: React.ReactNode;
        className: string;
    }
) => {
    const { scrollYProgress } = useScroll();
    const progressStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 1,
        height: "10px",
        width: "100vw",
        backgroundColor: "#c5da33",
        borderRadius: "8px",
        transformOrigin: "top left",
        zIndex: 100,
        scaleX: scrollYProgress,
    };

    return (
        <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-1 h-[10px] w-screen bg-custom8008-colorful-error-color rounded-md origin-top-left z-[100] " >
            {/* {children} */}
        </motion.div>
    );
    // return( 
    //     <motion.div style={{ scaleY: scrollYProgress}} className={`${className}` }>
    //         {children}
    //     </motion.div>
    // );
};

export default ScrollYDiv;