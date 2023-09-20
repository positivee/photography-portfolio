import Footer from "@/app/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About me - Portfolio.",
};

function about() {
  return (
    <div className="my-25 relative 	">
      <div className="sm: flex flex-col p-12 gap-4 ">
        <div className="lg:w-1/2 lg:fixed lg:right-[50%]">
          <Image
            src="/img/about-me.jpg"
            height="1920"
            width="2278"
            className=""
            alt=""
          />
        </div>

        <div className="text-justify text-lg lg:w-1/2 lg:relative lg:left-[50%] lg:max-w-[40rem] lg:px-12 ">
          <h1 className="text-4xl ">About me</h1>
          <p className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis molestie metus. Praesent ullamcorper urna a massa tincidunt
            pretium. Proin odio purus, mollis vitae elit et, tempus tristique
            lorem. Sed venenatis convallis aliquam. Phasellus sodales neque a
            elementum ultricies. Pellentesque vulputate mauris quis lorem
            hendrerit porta. Integer suscipit pharetra libero, vitae malesuada
            ex sodales a. Integer ut dui et purus tristique convallis. Maecenas
            ac tempor velit. Quisque auctor mauris lectus, aliquet volutpat dui
            consequat tincidunt.
          </p>
          <p className="mt-4">
            Praesent at nisi lobortis, congue dolor eget, volutpat velit. Nam
            tempus turpis ac tellus consequat varius. Vivamus id metus sed metus
            accumsan sodales. Quisque ut magna interdum lectus posuere porta.
            Etiam suscipit vehicula leo, non mollis ex convallis vel.
            Suspendisse et lectus congue, elementum erat in, porta urna. Etiam
            luctus facilisis arcu at ultrices. Sed tempus vulputate purus, sed
            tristique sem fringilla et. Fusce non arcu sit amet nulla egestas
            sollicitudin. Quisque auctor nisi nec euismod ullamcorper.
          </p>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
