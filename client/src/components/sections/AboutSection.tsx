import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, User, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following SOLID principles and Clean Architecture patterns.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Analyzing complex problems and delivering efficient, innovative solutions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing applications for speed, responsiveness, and excellent user experience.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2a 100%)`,
      }}
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <User className="w-4 h-4" />
            Get to know me
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants as any}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a detail-oriented <span className="text-purple-400 font-semibold">Flutter developer</span> with{" "}
                <span className="text-pink-400 font-semibold">3+ years</span> of
                experience building beautiful, functional applications. My journey
                in software development has been driven by a passion for creating
                solutions that make a real impact.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants as any}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in <span className="text-blue-400 font-semibold">cross-platform mobile development</span> with Flutter,
                complemented by web development skills. I'm proficient in
                implementing modern <span className="text-cyan-400 font-semibold">design patterns</span>, state management solutions,
                and API integration.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants as any}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond coding, I'm committed to <span className="text-purple-400 font-semibold">continuous learning</span>, staying
                updated with the latest technologies, and collaborating with teams
                to deliver excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="space-y-5"
            variants={containerVariants as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants as any}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}