import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzfRyP4p-LA_Houp_gpusegxLDFW9Xen2U4MaDpmvCPd4ZfZhOUQSN9R9wO-ZTOHIvN/exec"; // Replace with your GAS URL

      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formBody,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setIsSubmitting(false);
      alert("✅ Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert("❌ Oops! Something went wrong. Please try again later.");
    }
  };

  const contactInfo = [
    { icon: FiMail, label: "Email", value: "akpal972563@gmail.com", href: "mailto:akpal972563@gmail.com", color: "from-red-500 to-pink-500" },
    { icon: FiPhone, label: "Phone", value: "+91 9725635087", href: "tel:+919725635087", color: "from-green-500 to-teal-500" },
    { icon: FiMapPin, label: "Location", value: "Kanpur, Uttar Pradesh, India", href: "#", color: "from-blue-500 to-indigo-500" },
  ];

  const socialLinks = [
    { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anoop97/", color: "hover:text-blue-600" },
    { icon: FiGithub, label: "GitHub", href: "https://github.com/Anoop9725", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FiMail, label: "Email", href: "mailto:akpal972563@gmail.com", color: "hover:text-red-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a fresher eager to learn, explore new opportunities, collaborate, or just have a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
