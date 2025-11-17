import { motion } from "framer-motion";

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const skillCategories = [
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "Firebase", "GetX", "Provider", "Bloc"],
  },
  {
    category: "Web Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "REST API"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Jira", "Clean Architecture", "SOLID Principles"],
  },
  {
    category: "Design Patterns",
    skills: ["MVC", "MVVM", "Repository Pattern", "Singleton", "Observer"],
  },
  {
    category: "Testing & DevOps",
    skills: ["Unit Testing", "Integration Testing", "CI/CD", "Docker"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 sm:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Always Learning & Growing
          </h3>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            I'm committed to continuous learning and staying updated with the
            latest technologies and best practices in software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
