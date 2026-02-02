import { motion } from "framer-motion";

export default function DiscordCTA() {
  return (
    <section className="w-full py-24 flex items-center justify-center relative z-10 pointer-events-auto">
      <motion.a
        href="https://discord.gg/EWbQCbFj"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="group relative cursor-pointer"
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tighter relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
            Join The Discord
            <br />
            Community Now
          </span>
          <span className="block text-lg font-normal text-text opacity-50 mt-4 group-hover:opacity-80 transition-opacity">
            → Enter the fold
          </span>
        </h2>
      </motion.a>
    </section>
  );
}
