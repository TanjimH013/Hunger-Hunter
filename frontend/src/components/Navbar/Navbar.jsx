import { useState } from "react";

import { assets } from "../../assets/assets";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar flex justify-between items-center p-5 ">
      <img className="w-44" src={assets.logo} alt="logo" />
      <ul className="navbar-menu flex list-none gap-5 text-lime-600 text-lg cursor-pointer">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          hom
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <div className="dot"></div>
          <img src={assets.basket_icon} alt="basket-icon" />
        </div>
        <button className="bg-transparent text-base text-lime-600 border border-sky-600 px-7 py-3 rounded-full cursor-pointer hover:bg-cyan-200 duration-300">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
