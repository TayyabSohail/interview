import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

import Image from "next/image";
import redBikeImg from "@/public/images/RedBike.png"; // Adjust the path accordingly

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Footer content */}
        <div className="flex justify-between items-center">
          {/* Left side: Red bike img and Bike Bliss */}
          <div className="flex items-center space-x-4">
            <Image src={redBikeImg} alt="Red Bike" width={40} height={40} />
            <span className="font-bold text-xl">Bike Bliss</span>
          </div>

          {/* Center: Links (Features, Testimonials, Faqs) */}
          <div className="space-x-8">
            <a href="#0" className="text-sm hover:text-indigo-500">
              Features
            </a>
            <a href="#0" className="text-sm hover:text-indigo-500">
              Testimonials
            </a>
            <a href="#0" className="text-sm hover:text-indigo-500">
              Faqs
            </a>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#0"
              aria-label="Facebook"
              className="text-xl hover:text-indigo-500"
            >
              <FaFacebook />
            </a>
            <a
              href="#0"
              aria-label="Instagram"
              className="text-xl hover:text-indigo-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#0"
              aria-label="X"
              className="text-xl hover:text-indigo-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#0"
              aria-label="LinkedIn"
              className="text-xl hover:text-indigo-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Thin white line */}
        <div className="border-t border-white my-4"></div>

        {/* Footer links below the line */}
        <div className="text-center space-x-4 flex justify-center items-center">
          <a href="#0" className="text-sm hover:text-indigo-500">
            Privacy Policy
          </a>
          <a href="#0" className="text-sm hover:text-indigo-500">
            Terms of Service
          </a>
          <a href="#0" className="text-sm hover:text-indigo-500">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
