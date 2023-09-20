import Image from "next/image";
import React from "react";

function PhotoBookSection() {
  return (
    <div className="min-h-[30rem] bg-orange-900/80 w-full my-12 flex gap-4">
      <Image
        src={"/img/photobook.jpg"}
        height={2880}
        width={1920}
        alt="Photobook"
        className="object-cover w-1/3 max-h-[30rem] rounded-r-full"
      />
      <div className="object-cover w-2/3 text-white/90 flex gap-4 flex-col justify-center items-center text-center p-4">
        <h3 className="text-4xl">Order photobook</h3>
        <p className="max-w-[40rem] ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </div>
  );
}

export default PhotoBookSection;
