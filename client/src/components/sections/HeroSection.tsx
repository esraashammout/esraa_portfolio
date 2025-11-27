import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as any,
    },
  },
};

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white"
      style={{
        background: `linear-gradient(135deg, #000000ff 0%, #1a5cff 100%)`,
      }}
    >
      {/* Animated Background Elements - Adjusting colors for dark mode */}
        <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as any,
        } as any}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as any,
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          {/* Dark Mode: bg-blue-900 for badge background, text-blue-300 for text */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            Welcome to My Portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          // Dark Mode: text-gray-100 for white text
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-6 leading-tight"
        >
          Flutter Developer &{" "}
          {/* Blue gradient remains blue */}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
             Problem Solver
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          // Dark Mode: text-gray-300 for light text
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build beautiful, scalable mobile and web applications with 1.5+ years
          of experience. Specialized in Flutter, Clean Architecture, and modern
          design patterns.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("#projects")}
            // Blue button remains blue
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="outline"
            // Dark Mode: border-gray-600, text-gray-100, hover:border-blue-400, hover:text-blue-400
            className="px-8 py-3 text-lg font-semibold border-2 border-gray-600 text-gray-100 hover:border-blue-400 hover:text-blue-400 bg-transparent"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          // Dark Mode: border-gray-700
          className="mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-gray-700"
        >
          {[
            { number: "1.5+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              {/* Blue text remains blue */}
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              {/* Dark Mode: text-gray-400 for light text */}
              <div className="text-sm sm:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Dark Mode: border-gray-500, bg-gray-500 */}
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gray-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}