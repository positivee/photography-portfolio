import Image from "next/image";
import React from "react";

function PackageOfferSection() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl">Wedding offer</h1>
      <p className="my-4 text-justify text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium.
      </p>

      <div className="flex  flex-col md:flex-row gap-8 ">
        <div className="shadow-md">
          <Image
            src={"/img/package-1.jpg"}
            height={2880}
            width={1920}
            className="w-full aspect-square object-cover"
            alt="package I"
          />
          <div className="p-6">
            <h2 className="text-xl">Package I | 550$</h2>
            <ul className="list-disc ml-6 mt-4">
              <li>Pre-wedding consultation / meeting</li>
              <li>
                Photo coverage of preparations, ceremony, and reception until
                9:00 PM
              </li>
              <li>Mini outdoor session on the wedding day</li>
              <li>Photos delivered online</li>
              <li>Minimum of 350 edited photos</li>
              <li>1 photographer</li>
            </ul>
          </div>
        </div>
        <div className="shadow-md">
          <Image
            src={"/img/package-2.jpg"}
            height={1280}
            width={1920}
            className="w-full aspect-square object-cover"
            alt="package II"
          />
          <div className="p-6">
            <h2 className="text-xl">Package II | 850$</h2>
            <ul className="list-disc ml-6 mt-4">
              <li>Pre-wedding consultation / meeting</li>
              <li>
                Photo coverage of preparations, ceremony, and reception until
                9:00 PM
              </li>
              <li>Mini outdoor session on the wedding day</li>
              <li>Photos delivered online</li>
              <li>Minimum of 350 edited photos</li>
              <li>1 photographer</li>
            </ul>
          </div>
        </div>
        <div className="shadow-md">
          <Image
            src={"/img/package-3.jpg"}
            height={1280}
            width={1920}
            className="w-full aspect-square object-cover"
            alt="package IIII"
          />
          <div className="p-6">
            <h2 className="text-xl">Package III | 1400$</h2>
            <ul className="list-disc ml-6 mt-4">
              <li>Engagement session</li>
              <li>Pre-wedding consultation / meeting</li>
              <li>
                Photo coverage of preparations, ceremony, and reception until
                12:30 AM
              </li>
              <li>
                Mini outdoor session on the wedding day, including family photos
              </li>
              <li>Photos delivered on a USB drive + online</li>
              <li>Post-wedding session on a different day</li>
              <li>Minimum of 800 edited photos</li>
              <li>Story album</li>
              <li>1 photographer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageOfferSection;
