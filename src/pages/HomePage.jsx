import Header from "../layouts/Header";
import Body from "../layouts/Body";
import "../assets/styles/index.css";
import DefaultCarousel from "../components/DefaultCarousel";
import { CartContextProvider } from "../contexts/CartContext";
import { ErrorBoundary } from "../components/ErrorBoundary";

//import { Outlet } from 'react-router-dom'
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

  // const isLoggedIn = true;

  return (
    <main className="container mx-auto">
      <DefaultCarousel name={userData.firstName} gender={userData.gender} />
      <Body age={userData.age} />
    </main>
  );
}

export default HomePage;
