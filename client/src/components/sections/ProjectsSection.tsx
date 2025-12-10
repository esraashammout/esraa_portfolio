import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronLeft, ChevronRight, Smartphone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};

const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(139, 92, 246, 0.3)",
    "0 0 40px rgba(139, 92, 246, 0.5)",
    "0 0 20px rgba(139, 92, 246, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

const projects = [
  {
    id: 1,
    title: "Mobile Banking Application",
    description:
      "A cross-platform mobile banking app using Flutter with BLoC state management. Implemented 10+ design patterns (Factory, Singleton, Facade, Observer, Strategy, etc.). Integrated RESTful APIs with Dio, JWT authentication, and biometric security.",
    technologies: ["Flutter", "Dart", "BLoC", "Riverpod", "Dio", "Firebase", "Local Auth"],
    images: [
      "/projects/bank/screen1.jpg",
      "/projects/bank/screen2.jpg",
      "/projects/bank/screen3.jpg",
      "/projects/bank/screen4.jpg",
      "/projects/bank/screen6.jpg",
      "/projects/bank/screen7.jpg",
      "/projects/bank/screen8.jpg",
      "/projects/bank/screen9.jpg",
      "/projects/bank/screen10.jpg",
      "/projects/bank/screen11.jpg",
      "/projects/bank/screen12.jpg",
      "/projects/bank/screen13.jpg",
      "/projects/bank/screen14.jpg",
    ],
    github: "https://github.com/esraashammout",
    isFeatured: true,
    date: "Dec 2024",
    features: [
      "Account management & transactions",
      "Scheduled payments system",
      "JWT authentication & biometric security",
      "Complaints & support system",
      "10+ Design Patterns implemented",
      "Dark/Light theme with animations",
    ],
    designPatterns: ["Factory", "Singleton", "Facade", "Observer", "Strategy", "Repository", "BLoC"],
  },
  {
    id: 2,
    title: "MedTech Mobile App",
    description:
      "A comprehensive medical equipment rental and sales platform built with Flutter. Features include product browsing, rental management, AI-powered assistant, and secure checkout.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    images: [
      "/projects/download1.png",
    ],
    github: "https://github.com/esraashammout/medical_devices_app",
    isFeatured: false,
    features: [
      "User authentication & profile management",
      "Product catalog with filtering",
      "AI Assistant for equipment guidance",
      "Shopping cart & checkout",
      "Order tracking",
      "Payment integration",
    ],
  },
  {
    id: 3,
    title: "MedTech Web Admin Dashboard",
    description:
      "A powerful admin dashboard for managing medical equipment inventory, orders, rentals, and user accounts. Built with React and modern web technologies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    images: [
      "/projects/download2.png",
    ],
    github: "https://github.com/esraashammout/medical_web_app",
    isFeatured: false,
    features: [
      "Real-time dashboard analytics",
      "Inventory management",
      "Order & rental management",
      "User management system",
      "Financial reports",
      "Dark/Light theme support",
    ],
  },
  {
    id: 4,
    title: "Educational Course Platform",
    description:
      "Contributed to a cross-platform educational platform using Flutter Web, improving user engagement through a responsive and intuitive UI. Implemented real-time chat functionality to foster communication between users.",
    technologies: ["Flutter Web", "Dart", "Bloc Pattern", "REST API"],
    images: [],
    github: "https://github.com/esraashammout",
    isFeatured: false,
    features: [
      "Responsive and intuitive user interface",
      "Real-time chat functionality between users",
      "Efficient state management using Bloc pattern",
      "Integrated video content with smooth playback",
      "Enhanced user engagement",
      "Cross-platform compatibility",
    ],
  },
  {
    id: 5,
    title: "Pharmacy Management System",
    description:
      "Designed and implemented core modules for pharmacy operations, including inventory, sales, and customer management. Developed user-friendly mobile interfaces with REST API integration for real-time data handling.",
    technologies: ["Flutter", "Dart", "SQLite", "REST API"],
    images: [
        "/projects/download3.png",
    ],
    github: "https://github.com/esraashammout",
    isFeatured: false,
    features: [
      "Inventory management system",
      "Sales and billing system",
      "Customer data management",
      "User-friendly mobile interfaces",
      "REST API integration for real-time data",
      "Offline functionality using SQLite",
    ],
  },
];

// Mobile Screenshots Grid Component - Better visibility
function MobileShowcase({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="relative py-6">
      {/* Screenshots Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedImage(index)}
            className="relative cursor-pointer group"
          >
            {/* Phone Frame */}
            <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-2xl p-1.5 shadow-xl hover:shadow-purple-500/30 transition-shadow">
              {/* Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-10" />
              {/* Screen */}
              <div className="relative aspect-[9/19] bg-black rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Screen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full">
                    عرض
                  </span>
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white/30 rounded-full" />
            </div>
            {/* Screen Number */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
              {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full"
            >
              {/* Large Phone Frame */}
              <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />
                {/* Screen */}
                <div className="relative aspect-[9/19] bg-black rounded-[2.5rem] overflow-hidden">
                  <img
                    src={images[selectedImage]}
                    alt={`Screen ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-white font-bold text-lg">
                  {selectedImage + 1} / {images.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev! + 1) % images.length);
                  }}
                  className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f0f2a 100%)`,
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Star className="w-4 h-4" />
            My Work
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in mobile and web development with modern technologies
          </p>
        </motion.div>

        {/* Featured Project - Mobile Banking */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="mb-20"
          >
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 rounded-3xl overflow-hidden border border-purple-500/20 backdrop-blur-sm"
              animate={glowAnimation as any}
            >
              {/* Featured Badge */}
              <motion.div
                className="absolute top-6 right-6 z-20"
                animate={floatAnimation as any}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white text-sm font-bold shadow-lg shadow-purple-500/30">
                  <Star className="w-4 h-4 fill-current" />
                  Featured Project
                </span>
              </motion.div>

              <div className="p-8 lg:p-12">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30"
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">
                        {featuredProject.title}
                      </h3>
                      {featuredProject.date && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {featuredProject.date}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                      {featuredProject.description}
                    </p>
                  </div>
                </div>

                {/* Mobile Screenshots Showcase */}
                {featuredProject.images.length > 0 && (
                  <MobileShowcase images={featuredProject.images} />
                )}

                {/* Features & Technologies */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50"
                  >
                    <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-purple-400" />
                      </span>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {featuredProject.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies & Design Patterns */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Technologies */}
                    <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                      <h4 className="font-bold text-white mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * idx }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Design Patterns */}
                    {featuredProject.designPatterns && (
                      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                        <h4 className="font-bold text-white mb-4">Design Patterns</h4>
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.designPatterns.map((pattern, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.05 * idx }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 text-cyan-200 rounded-lg text-sm font-medium border border-cyan-500/30"
                            >
                              {pattern}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Action Button */}
                <motion.div 
                  className="flex justify-center mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
                  >
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Other Projects Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">More Projects</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants as any}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="p-6">
                {/* Project Header */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                {/* Image Preview */}
                {project.images.length > 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-contain bg-gray-900 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                )}

                    {/* Features */}
                <div className="mb-4">
                  <ul className="grid grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                  </div>

                  {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                      className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>

                {/* Action Button */}
                    <Button
                      asChild
                  variant="outline"
                  className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                      >
                    <Github className="w-4 h-4" />
                    View Code
                      </a>
                    </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mt-20 text-center p-10 bg-gradient-to-r from-purple-900/30 via-gray-900/50 to-blue-900/30 rounded-3xl border border-purple-500/20 backdrop-blur-sm"
        >
          <motion.div
            animate={floatAnimation as any}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Want to see more?
            </h3>
          </motion.div>
          <p className="text-gray-400 mb-8 text-lg">
            Check out my GitHub profile for more projects and contributions
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-lg shadow-purple-500/30"
          >
            <a
              href="https://github.com/esraashammout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
   );
}