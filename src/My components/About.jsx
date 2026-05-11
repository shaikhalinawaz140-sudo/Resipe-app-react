import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-yellow-400 p-8 text-black">
          <h2 className="text-3xl font-bold mb-4">About Us 🚴‍♂️</h2>

          <p className="mb-6">
            We are a fast and reliable food delivery platform committed to bringing
            your favorite meals straight to your doorstep.
          </p>

          <div className="space-y-4 text-lg">
            <p>⚡ Fast Delivery in your area</p>
            <p>🍔 Fresh & hot meals</p>
            <p>🚴‍♂️ Trusted delivery riders</p>
            <p>🏪 Top local restaurants</p>
            <p>💯 100% customer satisfaction</p>
          </div>

          <p className="mt-8 text-sm">
            Our mission is to deliver happiness, one order at a time ❤️
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>

          <div className="space-y-4">

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">⚡ Super Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                We ensure your food arrives quickly and safely.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">🍕 Quality Food</h3>
              <p className="text-gray-600 text-sm">
                We partner with top restaurants for best quality meals.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">🤝 Trusted Service</h3>
              <p className="text-gray-600 text-sm">
                Thousands of happy customers trust us daily.
              </p>
            </div>

            <button className="w-full mt-4 bg-yellow-400 text-black font-semibold p-3 rounded-lg">
              Order Now 🚴‍♂️
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;