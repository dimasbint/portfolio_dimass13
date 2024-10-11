import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Contact: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center bg-gradient-to-b from-black py-10 to-gray-700"
      style={{
        color: 'white',
        padding: '50px',
      }}
    >
      <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 inline-block">
        Contact Me
      </h1>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.instagram.com/__dimasbp/"
          aria-label="Instagram"
          className="text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:dimasbintangpratama5@gmail.com"
          aria-label="Email"
          className="text-2xl"
        >
          <MdOutlineMail />
        </a>
        <a
          href="https://wa.me/6283823121775"
          aria-label="WhatsApp"
          className="text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/dimasbint"
          aria-label="Github"
          className="text-2xl"
        >
          <LuGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
