import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to detect if user is on mobile device
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Function to handle email sending
  const sendEmail = (name, email, message) => {
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Hello Omkar,\n\nI hope this email finds you well. I am reaching out to you through your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nI look forward to hearing from you soon.\n\nBest regards,\n${name}`
    );

    const mailtoLink = `mailto:omkarphadatare30@gmail.com?subject=${subject}&body=${body}`;

    if (isMobile()) {
      // For mobile devices, try to open Gmail app first
      const gmailLink = `googlegmail://co?to=omkarphadatare30@gmail.com&subject=${subject}&body=${body}`;

      // Try Gmail app first, fallback to mailto
      const tempLink = document.createElement("a");
      tempLink.href = gmailLink;
      tempLink.click();

      // Fallback to mailto after a short delay
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 500);
    } else {
      // For desktop, use mailto
      window.location.href = mailtoLink;
    }
  };

  // Function to handle WhatsApp redirect
  const sendWhatsApp = () => {
    const phoneNumber = "7038379463"; // Remove + for WhatsApp URL
    const message = encodeURIComponent(
      "Hello Omkar! 👋\n\nI came across your portfolio website and I'm impressed with your work. I would like to discuss potential opportunities or collaborations with you.\n\nLooking forward to connecting with you!"
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const showToast = (title, description, variant = "default") => {
    // Simple toast notification function
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 p-4 rounded-lg z-50 ${
      variant === "destructive"
        ? "bg-red-500 text-white"
        : "bg-green-500 text-white"
    }`;
    toast.innerHTML = `<strong>${title}</strong><br/>${description}`;
    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToast(
        "Validation Error",
        "Please fill in all fields.",
        "destructive"
      );
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast(
        "Invalid Email",
        "Please enter a valid email address.",
        "destructive"
      );
      return;
    }

    // Send email
    sendEmail(formData.name, formData.email, formData.message);

    showToast(
      "Redirecting to Email",
      "Opening your email client to send the message!"
    );

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">CONTACT</span> WITH ME
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content - Contact Form */}
          <div className="space-y-6">
            <div className="p-2 rounded-xl bg-gray-800 border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions or concerns, please don't hesitate to
                contact me. I am open to any work opportunities that align with
                my skills and interests.
              </p>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Your Name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Your Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Your Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">
                    omkarphadatare30@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-green-500/20">
                  <Phone className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">+918237536226</p>
                </div>
                {/* WhatsApp Button */}
                <button
                  onClick={sendWhatsApp}
                  className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 hover:border-green-500 transition-all duration-300 transform hover:scale-105"
                  title="Contact via WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-500" />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <MapPin className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    Bhopal, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/omkar703"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkarphadatare30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              {/* Additional WhatsApp Button in Social Links */}
              <button
                onClick={sendWhatsApp}
                className="p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105"
                title="Contact via WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6 text-green-500" />
              </button>
            </div>

            {/* Quick Contact Actions */}
            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Contact
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    sendEmail(
                      "Quick Contact",
                      "",
                      "Hi Omkar, I would like to discuss potential opportunities with you."
                    )
                  }
                  className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Quick Email
                </button>
                <button
                  onClick={sendWhatsApp}
                  className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white border border-green-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
