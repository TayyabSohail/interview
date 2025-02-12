"use client";

import Link from "next/link";

export default function FAQ() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080414" }}>
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Frequently Asked Questions
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-white mb-8 text-center">
        Find answers to common questions about our bikes, services, and more.
      </p>

      {/* White Line */}
      <div className="border-t-2 border-white w-full mb-8"></div>

      {/* Questions */}
      <div className="w-full max-w-2xl text-white mx-auto">
        {/* Question 1 */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-center">Question text goes here</p>
            <span className="text-white text-xl">↓</span>
          </div>
          <div className="border-t-2 border-white mt-2"></div>{" "}
          {/* White thin line */}
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-center">How do I maintain my bike?</p>
            <span className="text-white text-xl">↓</span>
          </div>
          <div className="border-t-2 border-white mt-2"></div>{" "}
          {/* White thin line */}
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-center">What is the warranty period?</p>
            <span className="text-white text-xl">↓</span>
          </div>
          <div className="border-t-2 border-white mt-2"></div>{" "}
          {/* White thin line */}
        </div>

        {/* Question 4 */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-center">How do I place an order?</p>
            <span className="text-white text-xl">↓</span>
          </div>
          <div className="border-t-2 border-white mt-2"></div>{" "}
          {/* White thin line */}
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <p className="text-lg text-center">
              Can I test ride the bike before buying?
            </p>
            <span className="text-white text-xl">↓</span>
          </div>
          <div className="border-t-2 border-white mt-2"></div>{" "}
          {/* White thin line */}
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Still have questions?
        </h2>
        <p className="text-lg text-white mb-8">
          Support details to capture customers that might be on the fence.
        </p>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
