import Gallery from "@/app/components/Gallery";
import { getImagesFromFolder } from "@/utils/cloudinary";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params: { slug: slug },
}: {
  params: { slug: string };
}) {
  return {
    title: `Photoshoot: ${decodeURIComponent(slug)} - Portfolio.`,
  };
}

async function SlugGalerry({
  params: { slug: slug },
}: {
  params: { slug: string };
}) {
  const images = await getImagesFromFolder(decodeURIComponent(slug));

  return (
    <div className="container mx-auto">
      <div className="mx-12">
        <h1 className="text-3xl text-center">
          Photoshoot: {decodeURIComponent(slug)}
        </h1>
        <Gallery
          images={images}
          slug={`portfolio/${decodeURIComponent(slug)}`}
        ></Gallery>
      </div>
    </div>
  );
}

export default SlugGalerry;
