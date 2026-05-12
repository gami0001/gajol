"use client";

import { useState } from "react";
import { z } from "zod";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Button from "@/components/Button";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  content: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.issues.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return;
    }

    try {
      const response = await fetch("https://nightclub2026.onrender.com/contact_messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setSubmitError(`Something went wrong (${response.status})`);
        console.error("API fejl:", response.status, errorText);
        return;
      }

      setSubmitError("");
      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        content: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Nav />
      <Hero text="Contact us" />

      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-5">
          <div>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full bg-black border text-white placeholder-white px-5 py-5 outline-none focus:border-white transition" />

            {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
          </div>

          <div>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full bg-black border text-white placeholder-white px-5 py-5 outline-none focus:border-white transition" />

            {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
          </div>

          <div>
            <textarea name="content" placeholder="Your Comment" rows={10} value={formData.content} onChange={handleChange} className="w-full bg-black border text-white placeholder-white px-5 py-5 outline-none focus:border-white transition" />

            {errors.content && <p className="text-red-500 mt-2">{errors.content}</p>}
          </div>

          <div className="text-right">
            <Button type="submit" variant="primary">
              SEND
            </Button>
          </div>

          {submitError && <p className="text-red-500 mt-2">{submitError}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
