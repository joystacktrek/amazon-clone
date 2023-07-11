import React from "react";
import Header from "../layouts/Header";
import Body from "../layouts/Body";
import "../assets/styles/index.css";
import DefaultCarousel from "../components/DefaultCarousel";
import { CartContextProvider } from "../contexts/CartContext";
import { ErrorBoundary } from "../components/ErrorBoundary";

function HomePage() {
  // the basic way
  // let userName = 'Rolando'
  // let userGender = 'male'

  // destructuring
  const userData = {
    firstName: "Rolando",
    lastName: "Desacula",
    gender: "male",
    age: 23,
  };

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <CartContextProvider>
        <div className="grid bg-gray-100">
          {/* Header */}
          <Header name={userData.firstName} />
          {/* Content */}
          <main className="container mx-auto">
            <DefaultCarousel
              name={userData.firstName}
              gender={userData.gender}
            />
            <Body age={userData.age} />
          </main>
          {/* Footer */}
          <footer className="bg-gray-200 p-4 text-center">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Amazon. All rights reserved.
            </p>
          </footer>
        </div>
      </CartContextProvider>
    </ErrorBoundary>
  );
}

export default HomePage;
