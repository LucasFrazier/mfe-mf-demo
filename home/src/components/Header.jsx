import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";
import Login from "./Login";
// import { useStore } from "home/store"; // Zustand example

export default function Header() {
  // const { count, clear, setUsername } = useStore(); // Zustand example

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">P&G</Link>
        </div>
        <div className="flex-end relative">
          <Link id="pdp" to="/">
            Home
          </Link>
          <span className="mx-5">|</span>
          <Link id="pdp" to="/product/2">
            PDP
          </Link>
          <span className="mx-5">|</span>
          <Link id="cart" to="/cart">
            Cart
          </Link>
          <span className="mx-5">|</span>
          <MiniCart />
          <span className="mx-5">|</span>
          <Login />
        </div>
      </div>
    </div>
  );
}
