import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-between px-10 md:px-24 overflow-hidden">
      <div className="max-w-2xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-bold text-xl tracking-tight uppercase opacity-50">
              ngp by pratham
            </span>
          </div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-text"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
          >
            {["Precision AI.", "Zero Noise.", "Pure Execution."].map(
              (line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    variants={{
                      hidden: { y: 100, opacity: 0, rotateX: 20 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                    className="inline-block origin-top-left"
                  >
                    {line}
                  </motion.div>
                  <br className="hidden" /> {/* Logic handled by block div */}
                </div>
              ),
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }} // opacity handled here
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-lg leading-relaxed"
          >
            Intelligence that feels like instinct. A system designed to amplify
            human potential, not replace it.
          </motion.p>
        </motion.div>
      </div>

      {/* Large Featured Logo on Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="hidden md:block relative z-10"
      >
        <div className="relative group perspective-1000">
          {/* Blue Fire / Breathing Effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
              filter: ["blur(20px)", "blur(30px)", "blur(20px)"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 rounded-[2.5rem] -z-10"
          />

          <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/50 transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1 relative">
            <img
              src="/logo.jpg"
              alt="PRATHAMPG Logo"
              fetchPriority="high"
              className="w-80 h-auto object-contain drop-shadow-lg mix-blend-multiply relative z-20"
            />
            {/* Subtle internal glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-blue-400/10 mix-blend-overlay z-10 pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* Navigation Links Top Right */}
      <nav className="absolute top-10 right-10 hidden md:flex gap-8 text-sm font-medium opacity-70 z-20">
        <a href="#" className="hover:opacity-100 transition-opacity">
          Solutions
        </a>
        <a href="#" className="hover:opacity-100 transition-opacity">
          Manifesto
        </a>
        <a href="#" className="hover:opacity-100 transition-opacity">
          Research
        </a>
        <a href="#" className="hover:opacity-100 transition-opacity">
          Contact
        </a>
      </nav>
    </section>
  );
}
