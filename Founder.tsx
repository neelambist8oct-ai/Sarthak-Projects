import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="h-screen w-full flex items-center justify-center px-10 relative pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-48 z-10"
      >
        <span className="text-sm md:text-base font-mono tracking-[0.4em] text-neutral-500 uppercase mb-6 block">
          Visionary
        </span>
        <h2 className="text-8xl md:text-[10rem] font-bold mb-4 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-400">
          NGP
        </h2>
        <h3 className="text-4xl md:text-6xl font-light text-neutral-800 mb-8 tracking-tight">
          by Pratham
        </h3>
        <p className="text-xl md:text-3xl font-light text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          "We don't just predict the future. <br />
          <span className="font-medium text-neutral-900">
            We write the code that builds it.
          </span>
          "
        </p>
      </motion.div>
    </section>
  );
}
