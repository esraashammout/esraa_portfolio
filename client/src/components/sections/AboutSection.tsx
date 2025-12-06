import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following SOLID principles and Clean Architecture patterns.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Analyzing complex problems and delivering efficient, innovative solutions.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing applications for speed, responsiveness, and excellent user experience.",
    },
  ];

  return (
    <section
      id="about"
      // Dark Mode: bg-gray-900 for black background
      className="py-20 px-4 sm:px-6 lg:px-8 text-white" 
      style={{
        background: `linear-gradient(135deg, #000000 0%, #1a5cff 100%)`,
      }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 } as any}
          viewport={{ once: false }}
        >
          {/* Dark Mode: text-white for white text, text-gray-100 for a slight contrast */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            About Me
          </h2>
          {/* Blue gradient divider remains blue */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.p
              variants={itemVariants}
              // Dark Mode: text-gray-300 for white/light text
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a detail-oriented Flutter developer with 3+ years of
              experience building beautiful, functional applications. My journey
              in software development has been driven by a passion for creating
              solutions that make a real impact.
            </motion.p>

            <motion.p
              variants={itemVariants}
              // Dark Mode: text-gray-300 for white/light text
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I specialize in cross-platform mobile development with Flutter,
              complemented by web development skills. I'm proficient in
              implementing modern design patterns, state management solutions,
              and API integration.
            </motion.p>

            <motion.p
              variants={itemVariants}
              // Dark Mode: text-gray-300 for white/light text
              className="text-lg text-gray-300 leading-relaxed"
            >
              Beyond coding, I'm committed to continuous learning, staying
              updated with the latest technologies, and collaborating with teams
              to deliver excellence.
            </motion.p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  // Dark Mode: bg-gray-800 for card background, shadow-xl for better visibility
                  className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    {/* Blue accent remains blue/light blue */}
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      {/* Dark Mode: text-gray-100 for white/light text */}
                      <h3 className="text-xl font-bold text-gray-100 mb-2">
                        {highlight.title}
                      </h3>
                      {/* Dark Mode: text-gray-400 for light gray description text */}
                      <p className="text-gray-400">{highlight.description}</p>
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