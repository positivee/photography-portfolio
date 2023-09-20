import { getImages } from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImagesProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
}

async function Gallery({
  images,
  slug,
}: {
  images: ImagesProps[];
  slug: string;
}) {
  return (
    <div className="my-12">
      <div className="columns-2 gap-4 sm:columns-3 xl:columns-3 2xl:columns-4">
        {images.map(({ id, public_id, format }) => (
          <Link key={id} href={`/${slug}/${id}`} className="mb-4 block w-full ">
            <Image
              alt=""
              className="transform brightness-90 transition will-change-auto hover:brightness-110"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
              width={720}
              height={480}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
