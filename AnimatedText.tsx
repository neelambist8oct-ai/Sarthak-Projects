import { motion, type Variants } from "framer-motion";

export const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

export const letterItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 },
  },
};

export function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // Split manually by <br> or similar if needed, here just basic string split
  // For Hero we need precise control, so we might just use this for headings

  return (
    <motion.h1
      variants={letterContainer}
      initial="hidden"
      animate="show"
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterItem}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
