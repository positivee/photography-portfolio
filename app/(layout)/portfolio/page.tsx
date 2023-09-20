import { getFolders } from "@/utils/cloudinary";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "My photography porfolio - Portfolio.",
};

async function PortfolioPage() {
  const folders = await getFolders();

  return (
    <div className="container m-auto my-12">
      <div className=" px-12">
        <h1 className="text-3xl">Gallery of my images</h1>
        <p className="mt-4 text-justify ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          molestie metus. Praesent ullamcorper urna a massa tincidunt pretium.
          Proin odio purus, mollis vitae elit et, tempus tristique lorem. Sed
          venenatis convallis aliquam. Phasellus sodales neque a elementum
          ultricies. Pellentesque vulputate mauris quis lorem hendrerit porta.
          Integer suscipit pharetra libero, vitae malesuada ex sodales a.
          Integer ut dui et purus tristique convallis. Maecenas ac tempor velit.
          Quisque auctor mauris lectus, aliquet volutpat dui consequat
          tincidunt.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12">
          {folders.map((folder, index) => (
            <Link
              href={`portfolio/${folder.name}`}
              key={index}
              className="aspect-square  flex justify-center items-center flex-col text-2xl border-solid border-2 border-black/80 hover:bg-black/10 p-2"
            >
              <div className="flex-1 flex justify-center items-center">
                {folder.name}
              </div>
              <div className="text-xs flex-none ">View the photoshoot</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
