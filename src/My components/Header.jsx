import React from 'react'
const Header = () => {
  return (
    <div>
   <header className="bg-yellow-400 p-6 shadow-md">
  <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
    
    {/* Logo / Title */}
    <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">
      Recipe App
    </h1>
 <div className="flex justify-center my-4">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
      alt="Food Delivery Bike"
      className="w-24 h-24 animate-bounce"
    />
    </div>

    {/* Navigation */}
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-6">
        <li>
          <a
            href="/"
            className="text-lg font-lerge text-gray-800 hover:text-white transition duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/about"
            className="text-lg font-medium text-gray-800  hover:text-white transition duration-300"
          >
            About   
          </a>
        </li>

        <li>
          <a
            href="/contact"
            className="text-lg font-medium text-gray-800  hover:text-white transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
      
    </div>
  )
}


export default Header
