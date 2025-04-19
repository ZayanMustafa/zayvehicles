"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoHomeOutline,
  IoHomeSharp
} from "react-icons/io5";
import {
  FiShoppingCart,
  FiShoppingBag
} from "react-icons/fi";

import { FaUser } from "react-icons/fa";
import NavLink from "@/components/Navbar/navlinks";
import MobileNavLink from "@/components/Navbar/mobilenavlinks";
import CartDrawer from "@/components/Navbar/cartdrawer";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    
  };

  return (
    <>
      {/* Cart Toggle Checkbox (hidden) */}
      <input
        type="checkbox"
        id="cartToggle"
        className="hidden"
        checked={isCartOpen}
        onChange={toggleCart}
      />

      {/* Top Navbar */}
      <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex w-full justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-200 hover:border-gray-300 transition-all">
                <Link href="/">
                  <Image
                    src="/logo.jpeg"
                    alt="Zay Vehicles Logo"
                    width={48}  
                    height={48} 
                    className="object-cover w-full h-full"
                    priority
                  />
                </Link>
              </div>
              <span className="text-lg font-semibold text-gray-800">Zay Vehicles</span>
            </div>

            <nav className="flex space-x-6">
              <NavLink
                href="/"
                text="Home"
                isActive={activeLink === "home"}
                onClick={() => setActiveLink("home")}
              />
              <NavLink
                href="/shop"
                text="Shop"
                isActive={activeLink === "shop"}
                onClick={() => setActiveLink("shop")}
              />
              <NavLink
                href="/about"
                text="About"
                isActive={activeLink === "about"}
                onClick={() => setActiveLink("about")}
              />
            </nav>

            <div className="flex space-x-6 items-center">
              <NavLink
                href="/account/login"
                text="Account"
                isActive={activeLink === "account"}
                onClick={() => setActiveLink("account")}
                icon
              />
              <button
                onClick={toggleCart}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <FiShoppingCart size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation: Menu Button and Logo */}
          <div className="md:hidden flex items-center justify-between w-full">
         

            <div className="flex items-center space-x-3">
              <div className="rounded-full overflow-hidden w-12 h-12 border-2 border-gray-200 hover:border-gray-300 transition-all">
                <Link href="/">
                  <Image
                    src="/logo.jpeg"
                    alt="Zay Vehicles Logo"
                    width={48}  
                    height={48} 
                    className="object-cover w-full h-full"
                    priority
                  />
                </Link>
              </div>
              <span className="text-lg font-semibold text-gray-800">Zay Vehicles</span>
            </div>

            <Link
              href="/account/login"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaUser size={28} />
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Mobile Navbar */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-20">
        <div className="flex justify-around items-center p-2">
          <MobileNavLink
            href="/"
            text="Home"
            isActive={activeLink === "home"}
            onClick={() => setActiveLink("home")}
            iconActive={<IoHomeSharp size={24} />}
            iconInactive={<IoHomeOutline size={24} />}
          />
          <MobileNavLink
            href="/shop"
            text="Shop"
            isActive={activeLink === "shop"}
            onClick={() => setActiveLink("shop")}
            iconActive={<FiShoppingBag size={24} />}
            iconInactive={<FiShoppingBag size={24} />}
          />
          <button
            onClick={toggleCart}
            className={`flex flex-col items-center p-2 ${activeLink === "cart" ? "text-blue-600" : "text-gray-700"}`}
          >
            <FiShoppingCart size={20} />
            <span className="text-xs mt-1">Cart</span>
          </button>
        </div>
      </footer>

      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}