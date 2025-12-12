import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, Code2, Smartphone } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const floatingAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
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
        background: `linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2a 100%)`,
      }}
    >
      {/* Animated Background Elements */}
        <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        animate={pulseAnimation as any}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 left-20 hidden lg:block"
        animate={floatingAnimation as any}
      >
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-500/30">
          <Smartphone className="w-7 h-7 text-purple-400" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-48 right-32 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-500/30">
          <Code2 className="w-6 h-6 text-blue-400" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-48 left-32 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-pink-500/30">
          <Sparkles className="w-5 h-5 text-pink-400" />
        </div>
      </motion.div>

      {/* Particle Effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side - Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants as any}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants as any} className="mb-8">
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0)",
                  "0 0 20px rgba(139, 92, 246, 0.3)",
                  "0 0 20px rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
              Welcome to My Portfolio
              <Zap className="w-4 h-4" />
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants as any}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Flutter Developer
            </motion.span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200%" }}
            >
              & Problem Solver
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants as any}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I build beautiful, scalable mobile and web applications with{" "}
            <span className="text-purple-400 font-semibold">3+ years</span> of experience.
            Specialized in <span className="text-blue-400 font-semibold">Flutter</span>,{" "}
            <span className="text-pink-400 font-semibold">Clean Architecture</span>, and modern
            design patterns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants as any}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("#projects")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold group shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:bg-purple-500/10 bg-transparent backdrop-blur-sm"
            >
              Get In Touch
            </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants as any}
            className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50"
          >
            {[
              { number: "3+", label: "Years Experience", color: "from-purple-400 to-pink-400" },
              { number: "10+", label: "Projects Completed", color: "from-blue-400 to-cyan-400" },
              { number: "100%", label: "Client Satisfaction", color: "from-pink-400 to-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center lg:text-left group"
              >
                <motion.div 
                  className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Video */}
        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow Effect Behind Video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-60" />
            
            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-2 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-2xl shadow-purple-900/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-xl"
                poster="/hero-poster.jpg"
              >
                <source src="/flutter.mp4" type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                Your browser does not support the video tag.
              </video>
              
              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-pink-400 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-pink-400 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-lg" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="w-7 h-12 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2"
          whileHover={{ borderColor: "rgba(168, 85, 247, 0.8)" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}