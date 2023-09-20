import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contatct with us - Portfolio.",
};

function page() {
  return (
    <div className="my-25 relative">
      <div className="sm: flex flex-col p-12 gap-4 ">
        <div className="lg:w-1/2 lg:fixed lg:right-[50%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5045434.97393495!2d14.648919655016048!3d51.86841832815053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47009964a4640bbb%3A0x97573ca49cc55ea!2sPolska!5e0!3m2!1spl!2spl!4v1686471982525!5m2!1spl!2spl"
            className="w-full h-96  lg:h-[50vh] "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-justify text-lg lg:w-1/2 lg:fixed lg:left-[50%] lg:max-w-[40rem] lg:px-12 ">
          <h1 className="text-3xl ">Contact me</h1>
          <p className="mt-4">
            Praesent at nisi lobortis, congue dolor eget, volutpat velit. Nam
            tempus turpis ac tellus consequat varius. Vivamus id metus sed metus
            accumsan sodales. Quisque ut magna interdum lectus posuere porta.
            Etiam suscipit vehicula leo, non mollis ex convallis vel.
          </p>
          <h2 className="text-2xl mt-4">Location</h2>
          <p className="mt-4 ">
            Company Theses
            <br />
            Warszawa 00-324,
            <br />
            ul. Truckeigo 2u/13,
            <br />
            VAT: 123-456-789
          </p>

          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
