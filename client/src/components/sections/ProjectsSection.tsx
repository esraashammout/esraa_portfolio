import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const projects = [
  {
    id: 1,
    title: "MedTech Mobile App",
    description:
      "A comprehensive medical equipment rental and sales platform built with Flutter. Features include product browsing, rental management, AI-powered assistant, and secure checkout.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    images: [
      "/projects/download1.png",
    ],
    github: "https://github.com/esraashammout/medical_devices_app",
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
    id: 2,
    title: "MedTech Web Admin Dashboard",
    description:
      "A powerful admin dashboard for managing medical equipment inventory, orders, rentals, and user accounts. Built with React and modern web technologies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    images: [
      "/projects/download2.png",
    ],
    github: "https://github.com/esraashammout/medical_web_app",
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
    id: 3,
    title: "Educational Course Platform",
    description:
      "Contributed to a cross-platform educational platform using Flutter Web, improving user engagement through a responsive and intuitive UI. Implemented real-time chat functionality to foster communication between users.",
    technologies: ["Flutter Web", "Dart", "Bloc Pattern", "REST API"],
    images: [],
    github: "https://github.com/esraashammout",
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
    id: 4,
    title: "Pharmacy Management System",
    description:
      "Designed and implemented core modules for pharmacy operations, including inventory, sales, and customer management. Developed user-friendly mobile interfaces with REST API integration for real-time data handling.",
    technologies: ["Flutter", "Dart", "SQLite", "REST API"],
    images: [
        "/projects/download3.png",
    ],
    github: "https://github.com/esraashammout",
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

export default function ProjectsSection( ) {
  return (
    <section
      id="projects"
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
          {/* Dark Mode: text-gray-100 for white text */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          {/* Blue gradient divider remains blue */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-4"></div>
          {/* Dark Mode: text-gray-300 for light text */}
          <p className="text-lg text-gray-300">
            Showcasing my best work in mobile and web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              // Dark Mode: bg-gray-800 for card background, shadow-xl for better visibility
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Content */}
              <div className={`grid ${project.images.length > 0 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-8 p-8`}>
                {/* Text Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Dark Mode: text-gray-100 for white text */}
                    <h3 className="text-3xl font-bold text-gray-100 mb-4">
                      {project.title}
                    </h3>
                    {/* Dark Mode: text-gray-300 for light text */}
                    <p className="text-gray-300 text-lg mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      {/* Dark Mode: text-gray-100 for white text */}
                      <h4 className="font-semibold text-gray-100 mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            // Dark Mode: text-gray-300 for light text
                            className="flex items-center gap-2 text-gray-300"
                          >
                            {/* Blue accent remains blue */}
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    {/* Dark Mode: text-gray-100 for white text */}
                    <h4 className="font-semibold text-gray-100 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          // Blue accent remains blue/light blue
                          className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      asChild
                      // Blue button remains blue
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Images Carousel */}
                {project.images.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {project.images.map((image, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-lg shadow-md h-auto"
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm font-medium">
                            {`Screenshot ${idx + 1}`}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 } as any}
          viewport={{ once: false }}
          // Blue gradient remains blue
          className="mt-16 text-center p-8 bg-gradient-to-r from-black-600 to-black-800 rounded-xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-blue-100 mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <Button
            asChild
            // White button remains white for contrast
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
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
      </div>
    </section>
   );
}