import emailjs from "emailjs-com";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again later.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300"
                  placeholder="Name"
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <div className="text-sm">
              © {new Date().getFullYear()} Suhaib. Built with ❤️.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/suhaib-19" className="hover:text-white transition-colors">GitHub</a>
              <a href="mailto:suhaibfullstackdeveloper@gmail.com" className="hover:text-white transition-colors">Email</a>
              <a href="https://www.linkedin.com/in/mohammed-suhaib-b-fullstackdeveloper" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
