"use client";

import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const menuLinks = [
  { title: "My portfolio", url: "/portfolio" },
  { title: "About me", url: "/about" },
  { title: "Contact", url: "/contact" },
  { title: " Client panel", url: "/client-panel" },
];

function Navbar({ session }: { session: Session }) {
  const [openNav, setOpenNav] = useState(false);
  let menuRef = useRef<HTMLDivElement>(null);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  const handleClickOutsideMenu = (event: Event) => {
    const target = event.target as HTMLElement;
    if (menuRef.current && !menuRef.current.contains(target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="shadow-sm lg:shadow-none" ref={menuRef}>
      <nav className="container m-auto">
        <div className="flex justify-between items-center gap-4 py-12 px-12">
          <Link className="text-2xl lg:text-6xl " href="/">
            Portfolio.
          </Link>
          <ul className="hidden grow text-xl lg:flex items-end justify-end gap-4 border-b-2 border-black ">
            {menuLinks.map((link) => (
              <li className="" key={link.url}>
                <Link
                  className="block px-5 py-2 rounded-t hover:bg-gray-300"
                  href={link.url}
                  onClick={() => setOpenNav(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {session && (
              <li className="">
                <button
                  className="block px-5 py-2 rounded-t hover:bg-gray-300"
                  onClick={() => signOut()}
                >
                  Log out
                </button>
              </li>
            )}
          </ul>

          <div
            onClick={() => setOpenNav(!openNav)}
            className=" text-6xl lg:hidden "
          >
            {!openNav ? (
              <FaBars className="h-6 w-6" />
            ) : (
              <>
                <IoMdClose className="h-6 w-6" />
              </>
            )}
          </div>
        </div>
        {openNav && window.innerWidth <= 960 && (
          <ul className=" text-center w-full bg-gray-100 text-xl shadow-sm ">
            {menuLinks.map((link) => (
              <li className="" key={link.url}>
                <Link
                  className="block px-5 py-6 rounded-t hover:bg-gray-300"
                  href={link.url}
                  onClick={() => setOpenNav(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            {session && (
              <li className="">
                <a
                  className="cursor-pointer block px-5 py-6 rounded-t hover:bg-gray-300"
                  onClick={() => signOut()}
                >
                  Log out
                </a>
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
