import React from "react";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import { Button, Navbar } from "flowbite-react";
import "../assets/styles/index.css";
import DefaultCarousel from "../components/DefaultCarousel";

function HomePage() {
  return (
    <div className="grid bg-gray-100">
           {/* Header */}

      <Header />
      {/* Content */}
      <main className="container mx-auto">
        <DefaultCarousel />
        <Body />    
      </main>
      
      
        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Amazon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
