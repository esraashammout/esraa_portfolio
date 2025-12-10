import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Settings, Blocks, TestTube, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const skillCategories = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "purple",
    skills: ["Flutter", "Dart", "Firebase", "BLoC", "Riverpod"],
  },
  {
    category: "Web Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "blue",
    skills: ["React", "TypeScript", "REST API", "Dio"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    bgColor: "green",
    skills: ["SQL", "PostgreSQL", "Firebase", "SQLite"],
  },
  {
    category: "Tools & Practices",
    icon: Settings,
    color: "from-orange-500 to-amber-500",
    bgColor: "orange",
    skills: ["Git", "GitHub", "Jira", "Clean Architecture", "SOLID Principles"],
  },
  {
    category: "Design Patterns",
    icon: Blocks,
    color: "from-pink-500 to-rose-500",
    bgColor: "pink",
    skills: ["Factory", "Singleton", "Facade", "Observer", "Strategy", "Repository", "BLoC Pattern"],
  },
  {
    category: "Testing & DevOps",
    icon: TestTube,
    color: "from-cyan-500 to-blue-500",
    bgColor: "cyan",
    skills: ["Unit Testing", "Integration Testing", "CI/CD", "Docker"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2a 100%)`,
      }}
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl"
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
            <Sparkles className="w-4 h-4" />
            My Skills
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={skillVariants as any}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 relative overflow-hidden bg-gradient-to-r from-purple-900/30 via-gray-900/50 to-blue-900/30 rounded-3xl p-10 text-center border border-purple-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent relative z-10">
              Always Learning & Growing
            </h3>
          </motion.div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto relative z-10">
            I'm committed to continuous learning and staying updated with the
            latest technologies and best practices in software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}