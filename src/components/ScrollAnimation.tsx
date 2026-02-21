import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

const ScrollAnimation = ({ children, className, delay = 0 }: ScrollAnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
