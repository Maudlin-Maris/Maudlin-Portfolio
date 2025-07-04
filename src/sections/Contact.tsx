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
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zlp1g9g", // Replace with EmailJS Service ID
        "template_054h3je", // Replace with EmailJS Template ID
        formData,
        "4v8_g1t-0lyGrznNx" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Failed to send message, try again.");
        }
      );
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
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col items-start md:gap-[10px]"
            >
              <div>
                <input type="hidden" name="form-name" value="contact" />
                <label
                  className="text-[22px] text-[#D8D8D8] font-medium"
                  htmlFor="name"
                >
                  Name:
                </label>

                <input
                  className="border border-none w-[240px] md:w-[350px] md:h-12 pl-[20px] rounded-[4px] bg-[#32323C] text-[#A0A0A0] text-[20px]"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  name="name"
                />
                <label
                  htmlFor="email"
                  className="text-[22px] text-[#D8D8D8] mt-4 font-medium"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-none w-[240px] md:w-[350px] md:h-12 pl-[20px] rounded-[4px] bg-[#32323C] text-[#A0A0A0] text-[20px]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="text-[22px]  text-[#D8D8D8] font-medium"
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
                  className="text-white bg-gradient-to-r mt-[20px] md:mt-[5px] from-sky-500 to-emerald-500 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-none transition-[0.3s] hover:scale-[1.1] hover:transition-[0.3s]"
                >
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
