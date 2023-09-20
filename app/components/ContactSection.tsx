import React from "react";
import { HiOutlineCamera } from "react-icons/hi";

function ContactSection() {
  return (
    <div className="container m-auto mt-20">
      <div className="mx-12">
        {/* <div className="lg:w-[60%] mx-auto flex sm:flex-col md:flex-row md:gap-8 justify-between items-start"> */}
        <div className=" flex flex-col gap-8 items-center text-center md:flex-row md:justify-between md:items-start lg:w-[60%] lg:mx-auto ">
          <HiOutlineCamera className="h-28 w-28 sm:hidden md:block" />
          <div className="text-lg">
            Company Theses
            <br />
            Warszawa 00-324,
            <br />
            st. Truckeigo 2u/13,
            <br />
            VAT: 123-456-789
          </div>

          <div className="text-lg">
            Phone: 999 888 444
            <br />
            E-mail: kuku@keke.com
            <br />
            <a
              href="mailto:kuku@keke.com"
              className="inline-block bg-slate-300/80 text-white px-3 py-2 mt-6 hover:bg-slate-500 "
            >
              <div className="animate-bounce hover:animate-none ">
                Schedule a photo session.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
