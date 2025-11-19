import emailjs from "emailjs-com";
import { useState } from "react";

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
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Intro Text */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Let’s build something amazing together!  
          Feel free to reach out to me for opportunities, collaborations, or freelance work.
        </p>

        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold text-blue-400">📍 Location</h4>
            <p className="text-gray-300">Chennai, Tamil Nadu</p>
          </div>

          <div className="border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold text-blue-400">📧 Email</h4>
            <p className="text-gray-300">suhaibfullstackdeveloper@gmail.com</p>
          </div>

          <div className="border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold text-blue-400">📱 Phone</h4>
            <p className="text-gray-300">+91 63741 20650</p>
          </div>

          <div className="border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold text-blue-400">🔗 GitHub</h4>
            <a
              href="https://github.com/suhaib-19"
              className="text-blue-400 hover:underline"
            >
              github.com/suhaib-19
            </a>
          </div>

          <div className="md:col-span-2 border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition">
            <h4 className="text-lg font-semibold text-blue-400">🌐 Portfolio</h4>
            <a
              href="https://suhaib-19.github.io/suhaib-portfolio-/"
              className="text-blue-400 hover:underline"
            >
              suhaib-19.github.io/suhaib-portfolio-
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
              focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              placeholder="Your Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
              focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white
              focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium 
            transform transition-all duration-300 hover:scale-[1.04]
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
