import React from "react";

const Contact = () => {
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
  
  <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

    {/* Left Side */}
    <div className="bg-yellow-400 p-8 text-black">
      <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

      <p className="mb-6">
        You can reach us anytime. We usually respond within 24 hours.
      </p>

      <div className="space-y-4 text-lg">
        <p>📞 Phone: +92 3199241180</p>
        <p>📧 Email: recipeapp@gmail.com</p>
        <p>📍 Location: Karachi DHA, Pakistan</p>
        <p>📱 Instagram: @recipeapp</p>
        <p>💬 WhatsApp: +92 3199241180</p>
      </div>

      <p className="mt-8 text-sm">
        We are here to help you with recipes, support, and feedback 🍽️
      </p>
    </div>

    {/* Right Side */}
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Send us a Message
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          placeholder="Your Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <textarea
          rows="5"
          placeholder="Write your message..."
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>

        <button className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-lg">
          Send Message
        </button>

      </div>
    </div>

  </div>
</div>
  );
}

export default Contact;