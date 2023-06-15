import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";

function Header() {
  return (
    <header className="">
      <Navbar fluid className="!bg-black">
        <Navbar.Brand href="https://amazon.com">
          <Logo />
          <p className="leading-none">
            <span className="navtitle-sm text-white">
              Deliver to
              <br />
            </span>
            <span className="navtitle-md font-semibold text-white">Joy </span>
          </p>

          {/* Search Bar */}
          <div className="flex items-center ml-4 rounded-lg p-2">
            <input
              type="text"
              placeholder="Search"
              className="w-96 outline-nonet"
            />
            <button className="ml-2 bg-yellow-300">Search</button>
          </div>
        </Navbar.Brand>
        <div className="flex items-center ml-4 rounded-lg p-2">
        <p className="leading-none pr-7">
          <span className="navtitle-sm text-white">
            Hello Joy,
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
          <span className="navtitle-md font-semibold text-white">& Orders</span>
        </p>
        <p className="leading-none pr-7">
          <span className="navtitle-md font-semibold text-white">Cart</span>
        </p>
        </div>
        {/* <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="#">
          <span className="text-sm text-white">
            Deliver to
          </span>
          <span className="text-lg font-semibold dark:text-white">
              Joy{" "}
            </span>
          </Navbar.Link>
          <Navbar.Link href="#">
            <p><span className="navtitle-sm text-white">
            Deliver to<br />
          </span>
          <span className="navtitle-md font-semibold text-white">
              Joy{" "}
            </span></p>
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse> */}
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
