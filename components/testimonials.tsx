"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#080414] px-4">
      {/* Added padding for responsiveness */}
      <div className="text-center text-white max-w-2xl w-full">
        {/* Set max-width to make the content smaller */}
        {/* Profile Image */}
        <div className="mb-6">
          <Image
            src="/images/testimonial-02.jpg" // Updated image path
            alt="Profile"
            width={100} // Smaller size for the image
            height={100} // Adjusted to maintain aspect ratio
            className="rounded-full mx-auto"
          />
        </div>
        {/* Name */}
        <h2 className="text-xl font-bold mb-2">John S.</h2>
        {/* Position and Company Name */}
        <p className="text-lg mb-6">Position, Company Name</p>
        {/* Quote Text */}
        <blockquote className="text-2xl font-bold italic mb-6">
          "Absolutely love my ThunderBolt! Smooth ride, sleek design, and
          unbeatable performance"
        </blockquote>
      </div>
    </div>
  );
}
