import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "esraashammout788@gmail.com",
      href: "mailto:esraashammout788@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/esraashammout",
      href: "https://linkedin.com/in/esraashammout",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/esraashammout",
      href: "https://github.com/esraashammout",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300">
            I'm always open to new opportunities and collaborations
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-lg font-semibold text-white">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Stats */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.8 } as any}
              className="mt-12 p-6 bg-gray-800 rounded-lg"
            >
              <p className="text-gray-300 mb-4">
                Let's build something amazing together. Whether you have a project
                in mind or just want to chat about technology, feel free to reach
                out!
              </p>
              <p className="text-blue-400 font-semibold">
                Response time: Usually within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </motion.div>

              {/* Success Message */}
              {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 } as any}
                className="p-4 bg-green-900 border border-green-700 rounded-lg text-green-300"
              >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
