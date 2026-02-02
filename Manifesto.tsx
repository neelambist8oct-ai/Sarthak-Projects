import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="min-h-[50vh] w-full flex flex-col justify-center px-10 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          We believe technology should be felt, not seen.
        </h2>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-xl md:text-2xl opacity-70 leading-relaxed max-w-3xl">
            In a world of noise, NGP offers silence. We strip away the
            complexity of artificial intelligence to reveal its core purpose: to
            understand, to adapt, and to empower the human mind. <br />
            <br />
            It is not about the data. It is about the{" "}
            <span className="text-black font-semibold">humanity</span> within
            the data.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
