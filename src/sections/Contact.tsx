"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitSuccess(null);

    emailjs
      .send(
        "service_zlp1g9g",       // Your EmailJS Service ID
        "template_054h3je",     // Your EmailJS Template ID
        formData,
        "4v8_g1t-0lyGrznNx"     // Your EmailJS Public Key
      )
      .then(
        () => {
          setSubmitSuccess(true);
          setSubmitMessage("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        () => {
          setSubmitSuccess(false);
          setSubmitMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-center">
            <div className="md:flex md:flex-col md:gap-7">
              <h2 className="font-serif text-2xl md:text-5xl md:font-bold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-[20px] md:leading-[35px] mt-2 md:max-w-[550px]">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
              <div className="flex flex-col gap-[20px] font-[22px]">
                <div className="flex items-center gap-[20px]">
                  <AiOutlineMail /> <p>Maudlinmaris@gmail.com</p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <AiOutlinePhone /> <p>+2348066792203</p>
                </div>
                <div className="flex items-center gap-[20px]">
                  <AiOutlineEnvironment />
                  <p>25b Community Rd, Akoka Yaba Lagos.</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start md:gap-[10px]"
            >
              <div>
                <label
                  className="text-[22px] text-[#D8D8D8] font-medium"
                  htmlFor="from_name"
                >
                  Name:
                </label>
                <input
                  className="border border-none w-[240px] md:w-[350px] md:h-12 pl-[20px] rounded-[4px] bg-[#32323C] text-[#A0A0A0] text-[20px]"
                  type="text"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  name="from_name"
                />

                <label
                  htmlFor="from_email"
                  className="text-[22px] text-[#D8D8D8] mt-4 font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="border border-none w-[240px] md:w-[350px] md:h-12 pl-[20px] rounded-[4px] bg-[#32323C] text-[#A0A0A0] text-[20px]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="text-[22px] text-[#D8D8D8] font-medium"
                  htmlFor="message"
                >
                  Write your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  placeholder="Enter your message"
                  className="md:w-[350px] border border-none p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-gradient-to-r mt-[20px] md:mt-[5px] from-sky-500 to-emerald-500 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-none transition-[0.3s] hover:scale-[1.1] hover:transition-[0.3s] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-semibold">
                    {isSubmitting ? "Sending..." : "Contact Me"}
                  </span>
                  <ArrowUpRightIcon className="size-4" />
                </button>

                {submitMessage && (
                  <p
                    className={`mt-4 text-[18px] ${
                      submitSuccess ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
