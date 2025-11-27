import { motion } from "framer-motion";
import { Mail, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mnnraqgg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData ),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 text-white"
      style={{
        background: `linear-gradient(135deg, #000000 0%, #1a5cff 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Dark Mode: text-gray-100 for white text */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          {/* Dark Mode: text-gray-300 for light text */}
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              {/* Blue accent remains blue/light blue */}
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                {/* Dark Mode: text-gray-100 for white text */}
                <h3 className="font-semibold text-lg text-gray-100 mb-1">Email</h3>
                <a
                  href="mailto:esraashammout788@gmail.com"
                  // Dark Mode: text-gray-300 for link, hover:text-blue-400
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  esraashammout788@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4">
              {/* Blue accent remains blue/light blue */}
              <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                {/* Dark Mode: text-gray-100 for white text */}
                <h3 className="font-semibold text-lg text-gray-100 mb-1">Phone</h3>
                <a
                  href="tel:+963984047425"
                  // Dark Mode: text-gray-300 for link, hover:text-blue-400
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +963 984 047 425
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              {/* Dark Mode: text-gray-100 for white text */}
              <h3 className="font-semibold text-lg text-gray-100 mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/esraashammout"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Dark Mode: bg-blue-900, hover:bg-blue-600, text-blue-300
                  className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span className="text-sm font-bold">GH</span>
                </a>
                <a
                  href="https://linkedin.com/in/esraa-shammout"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Dark Mode: bg-blue-900, hover:bg-blue-600, text-blue-300
                  className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <span className="text-sm font-bold">LI</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            // Dark Mode: bg-gray-800 for card background, border-gray-700
            className="bg-gray-800 rounded-lg p-8 border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                {/* Dark Mode: text-gray-100 for label */}
                <label className="block text-sm font-medium text-gray-100 mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={loading}
                  // Dark Mode: bg-gray-700, border-gray-600, text-gray-100
                  className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
              </div>

              <div>
                {/* Dark Mode: text-gray-100 for label */}
                <label className="block text-sm font-medium text-gray-100 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                  // Dark Mode: bg-gray-700, border-gray-600, text-gray-100
                  className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
              </div>

              <div>
                {/* Dark Mode: text-gray-100 for label */}
                <label className="block text-sm font-medium text-gray-100 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  disabled={loading}
                  rows={5}
                  // Dark Mode: bg-gray-700, border-gray-600, text-gray-100
                  className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                // Blue button remains blue
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                 ) : (
                  "Send Message"
                )}
              </Button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  // Dark Mode: bg-green-900/50, border-green-600, text-green-400
                  className="p-4 bg-green-900/50 border border-green-600 rounded-lg text-green-400 text-center"
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