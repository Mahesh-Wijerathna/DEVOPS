import React from "react";
import "./MenuBar";
import "./MenuBar.css";
import { Link } from 'react-router-dom';

const M1 = () => {
  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
  };

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
  };

  return (
    <nav>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          </a>
        </li>
        <li><a href="#"><Link href="#" className="nav__link" to ="/">
            Home
          </Link>
          </a></li>
        <li><a href="#"><Link href="#" className="nav__link" to ="/aboutus" >
            About
          </Link>
          </a></li>
          <li >
                <a
                    className="nav-link-dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Catagories
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Environmental & Nature
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Technology
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Lifestyle & Fashion
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Photography
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Food & Drink
                    </Link>
                    </li>
                </ul>
        </li>
        <li><a href="#"><Link href="#" className="nav__link" to ="/link">
            All Product
          </Link>
          </a></li>
        <li><a href="#"><Link href="#" className="nav__link" to ="/login">
            Login
          </Link>
          </a></li>
        <li><a href="#"><Link href="#" className="nav__link" to ="/signup">
            Sign Up
          </Link></a></li>
      </ul>
      <ul>
        <li className="newproduct"><a href="#">NEW PRODUCT</a></li>
        <li className="hideOnMobile"><a href="#">
        <Link href="#" className="nav__link" to ="/">
            Home
          </Link></a></li>
        <li className="hideOnMobile"><a href="#">
            <Link href="#" className="nav__link" to ="/aboutus" >
            About
          </Link></a></li>
        <li className="nav-item dropdown">
                <a
                    className="nav-link-dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Catagories
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Environmental & Nature
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Technology
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Lifestyle & Fashion
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Photography
                    </Link>
                    </li>
                    <li>
                    <Link className="dropdown-item" href="#" to ="">
                        Food & Drink
                    </Link>
                    </li>
                </ul>
        </li>
        <li className="hideOnMobile"><a href="#">
            <Link href="#" className="nav__link" to ="/link">
            All Product
          </Link></a></li>
        <li className="hideOnMobile"><a href="#"><Link href="#" className="nav__link" to ="/contact">
            Contact
          </Link></a></li>
        <li className="hideOnMobile"><a href="#">
            <Link href="#" className="nav__link" to ="/login">
            Login
          </Link></a></li>
        <li className="hideOnMobile"><a href="#">
          <Link href="#" className="nav__link" to ="/signup">
            Sign Up
          </Link></a>
        </li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default M1;