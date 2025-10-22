import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const sendEmail = (name, email, message) => {
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Hello Omkar,\n\nI hope this email finds you well. I am reaching out to you through your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nI look forward to hearing from you soon.\n\nBest regards,\n${name}`
    );

    const mailtoLink = `mailto:omkarphadatare30@gmail.com?subject=${subject}&body=${body}`;

    if (isMobile()) {
      const gmailLink = `googlegmail://co?to=omkarphadatare30@gmail.com&subject=${subject}&body=${body}`;
      const tempLink = document.createElement("a");
      tempLink.href = gmailLink;
      tempLink.click();

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 500);
    } else {
      window.location.href = mailtoLink;
    }
  };

  const sendWhatsApp = () => {
    const phoneNumber = "7038379463";
    const message = encodeURIComponent(
      "Hello Omkar! 👋\n\nI came across your portfolio website and I'm impressed with your work. I would like to discuss potential opportunities or collaborations with you.\n\nLooking forward to connecting with you!"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const showToast = (title, description, variant = "default") => {
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 p-4 rounded-lg z-50 border font-mono shadow-lg ${
      variant === "destructive"
        ? "bg-black border-red-500/50 text-red-400"
        : "bg-black border-green-500/50 text-green-400"
    }`;
    toast.innerHTML = `<strong>${title}</strong><br/>${description}`;
    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showToast(
        "Validation Error",
        "Please fill in all fields.",
        "destructive"
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast(
        "Invalid Email",
        "Please enter a valid email address.",
        "destructive"
      );
      return;
    }

    sendEmail(formData.name, formData.email, formData.message);
    showToast("Success", "Opening your email client!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <style>{`
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <section
        id="contact"
        className="min-h-screen flex items-center bg-black px-4 sm:px-6 lg:px-8 py-20 font-mono"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Minimalist Header */}
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-300 mb-3">
              Get in touch
            </h2>
            <p className="text-lg text-gray-500">
              Let's build something together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left - Contact Form (Takes 3 columns) */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-black border-b-2 border-gray-800 text-gray-300 focus:border-green-500 focus:outline-none transition-all placeholder-gray-700 text-lg"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-black border-b-2 border-gray-800 text-gray-300 focus:border-green-500 focus:outline-none transition-all placeholder-gray-700 text-lg"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-4 bg-black border-b-2 border-gray-800 text-gray-300 focus:border-green-500 focus:outline-none resize-none transition-all placeholder-gray-700 text-lg"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all hover-lift text-base"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right - Contact Info (Takes 2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-500">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:omkarphadatare30@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition-colors block text-lg"
                >
                  omkarphadatare30@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-500">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Phone
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+918237536226"
                    className="text-gray-300 hover:text-green-400 transition-colors text-lg"
                  >
                    +91 823 753 6226
                  </a>
                  <button
                    onClick={sendWhatsApp}
                    className="text-green-500 hover:text-green-400 transition-colors p-2 hover:bg-green-500/10 rounded-full"
                    title="Message on WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Location
                  </span>
                </div>
                <p className="text-gray-300 text-lg">Bhopal, Madhya Pradesh</p>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-900">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/omkar703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-400 transition-colors hover-lift"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/omkarphadatare30"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-400 transition-colors hover-lift"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
