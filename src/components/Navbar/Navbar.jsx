"use client";

import Link from "next/link";
import React, { useState } from "react";
import DarkMode from "./DarkMode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { navlinks } from "./Navlinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 shadow-md w-full bg-white dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-3xl font-bold"
          >
            <span>TAKSİN</span>
            <span className="text-primary">BURADA</span>
          </Link>
          {/* logo section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {navlinks.map(({ id, name, link }) => {
                const isActive =
                  link === "/" ? pathName === "/" : pathName.startsWith(link);
                return (
                  <li key={id} className="py-4">
                    <Link
                      href={link}
                      onClick={() => {
                        if (link === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`${isActive ? "bg-primary dark:text-black" : ""} text-lg font-medium text-black dark:text-white py-2 px-4 rounded-full hover:bg-primary duration-300`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* darkmode*/}
              <DarkMode />
            </ul>
          </div>
          {/* mobil menu section*/}
          <div className="md:hidden flex items-center gap-4 ">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
};

export default Navbar;