import React from "react";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid place-items-center mt-12">
      <div className="flex justify-center items-center gap-4 pb-12 pt-3 px-8 border-t border-black text-lg">
        <Link href="mailto:test@test.com">biero.kamil@gmail.com</Link>
        <div>|</div>
        <a href="#">
          <CgFacebook />{" "}
        </a>
        <a href="#">
          <AiOutlineInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
