import React from 'react';

const AmazonMainPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4">
        <div className="container mx-auto flex items-center">
          {/* Amazon Logo */}
          <img
            src="https://via.placeholder.com/150"
            alt="Amazon Logo"
            className="h-10"
          />

          {/* Search Bar */}
          <div className="flex items-center ml-4 bg-gray-200 rounded-lg p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-64 outline-none bg-transparent"
            />
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11l5-5m0 0l-5 5m5-5H4"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="ml-auto">
            <a href="#" className="text-gray-600 hover:text-black ml-4">
              Hello, Sign in
            </a>
            <a href="#" className="text-gray-600 hover:text-black ml-4">
              Returns & Orders
            </a>
            <a href="#" className="text-gray-600 hover:text-black ml-4">
              Cart
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto p-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Product Cards */}
          {/* Add your product cards here */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AmazonMainPage;