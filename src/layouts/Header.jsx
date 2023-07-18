import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";
import { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from 'react-router-dom'

// 1st - beginner
// const userName = "Johan"
// const userAge = 26
// console.log(`My name is ${userName} . I'm ${userName}`)

// 2nd - mid
// const user = { name: "Johan", age: 24 }

// console.log(`My name is ${user.name} . I'm ${user.age}`)

// 3rd - pro
const { name, age } = { nam1: "Johan", age: 24 }

console.log(`My name is ${name} . I'm ${age}`)


// const arrayStudents = ["Rolando", "Chris", "Jerrico"]

// let a, b, c, rest;
// [a, b, c] = [10, 20, 15];


// [a, b, ...rest] = [10, 20, 30, 40, 50];

//console.log(rest);
// Expected output: Array [30, 40, 50]


// props is destructured
function Header({ name }) {
  const searchRef = useRef();
  const counterRef = useRef(0);

  const onSearchClick = () => {
    console.log(searchRef?.current.value)

    counterRef.current = counterRef.current + 1;
    console.log(`counter: ${counterRef.current}`)
  }
  
  const { cartSize, dispatch } = useContext(CartContext)

  return (
    <header className="">
      <Navbar fluid className="!bg-black">
        <Navbar.Brand href="https://amazon.com"></Navbar.Brand>
        <Logo />
        <p className="leading-none">
          <span className="navtitle-sm text-white">
            Deliver to
            <br />
          </span>
          <span className="navtitle-md font-semibold text-white">{name} </span>
        </p>

        {/* Search Bar */}
        <div className="flex items-center ml-4 rounded-lg p-2">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search"
            className="w-96 outline-nonet"
          />
          <button className="ml-2 bg-yellow-300" onClick={onSearchClick}>Search {counterRef.current}</button>
        </div>
        <div className="flex items-center ml-4 rounded-lg p-2">
          <p className="leading-none pr-7">
            <span className="navtitle-sm text-white">
              Hello {name},
              <br />
            </span>
            <span className="navtitle-md font-semibold text-white">
              Accounts & Lists{" "}
            </span>
          </p>
          <p className="leading-none pr-7">
            <span className="navtitle-sm text-white">
              Returns
              <br />
            </span>
            <span className="navtitle-md font-semibold text-white">
              & Orders
            </span>
          </p>
          <p className="leading-none pr-7">
            <span className="navtitle-md font-semibold text-white">Cart ({cartSize})</span>
          </p>
          <button onClick={() => {
            dispatch({ type: 'clear_cart' })
          }}>Clear</button>
        </div>
      </Navbar>
      <div className="items-left bg-slate-700">
        {/* Navigation */}
        <div className="ml-auto p-2">
          <Link to="products" className="text-white hover:text-black ml-4">
            All
          </Link>
          <Link to="products/deals" className="text-white hover:text-black ml-4">
            Today&apos;s Deal
          </Link>
          <Link to="buy" className="text-white hover:text-black ml-4">
            Buy Again
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
