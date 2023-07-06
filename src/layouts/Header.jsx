import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";

// props is destructured
function Header({ name }) {
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
            type="text"
            placeholder="Search"
            className="w-96 outline-nonet"
          />
          <button className="ml-2 bg-yellow-300">Search2</button>
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
            <span className="navtitle-md font-semibold text-white">Cart</span>
          </p>
        </div>
      </Navbar>
      <div className="items-left bg-slate-700">
        {/* Navigation */}
        <div className="ml-auto p-2">
          <a href="#" className="text-white hover:text-black ml-4">
            All
          </a>
          <a href="#" className="text-white hover:text-black ml-4">
            Today's Deal
          </a>
          <a href="#" className="text-white hover:text-black ml-4">
            Buy Again
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
