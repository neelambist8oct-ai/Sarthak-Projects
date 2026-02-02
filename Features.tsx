import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Adaptive Intelligence",
      description:
        "It doesn't just process tasks; it understands your intent, adapting to your workflow like a natural extension of your thought.",
    },
    {
      title: "Contextual Awareness",
      description:
        "Beyond data, we read the nuance. A system that grasps the subtle cues and unwritten rules of your business logic.",
    },
    {
      title: "Seamless Integration",
      description:
        "Powerful capability wrapped in silence. It works in the background, amplifying your potential without the noise.",
    },
    {
      title: "Ethical Core",
      description:
        "Built on principles of transparency and trust. We ensure that every decision made by the system is explainable.",
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center px-10 md:px-24 py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: 2, scale: 1.02 }}
            transition={{
              delay: i * 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="group bg-white/40 backdrop-blur-md p-10 rounded-2xl border border-white/50 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all hover:bg-white/70 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              {feature.title}
            </h3>
            <p className="opacity-70 text-lg leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
