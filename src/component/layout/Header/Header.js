import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/F.png";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";
// import MetaData from "../MetaData";

const options = {
  burgerColor: "Black",
  burgerColorHover: "#FF7312",
  logo,
  logoWidth: "8vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#FF7312",

  link1Text: "Home",
  link1Url: "/",
  link1Size: "1.3vmax",
  link1Color: "#191919",
  link1ColorHover: "#FF7312",
  link1Margin: "1vmax",

  link2Text: "Products",
  link2Url: "/products",

  link3Text: "Contact",
  link3Url: "/contact",

  link4Text: "About",
  link4Url: "/about",
  
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",

  profileIconUrl: "/login",
  profileIcon:true,
  ProfileIconElement: MdAccountCircle,  
  profileIconColorHover: "#FF7312",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  profileIconMargin: "1vmax",
  
  searchIcon:true,
  SearchIconElement:MdSearch,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColorHover: "#FF7312",
  searchIconMargin: "1vmax",


  cartIcon:true,
  CartIconElement:MdAddShoppingCart,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColorHover: "#FF7312",
  cartIconMargin: "1vmax",

};

const Header = () => {
  return (
    <ReactNavbar {...options} />
  )
};

export default Header;