"use Server";
import Modal from "@/app/components/Modal";
import Photo from "@/app/components/Photo";
import { getImagesFromFolder } from "@/utils/cloudinary";
import React from "react";

export async function generateMetadata({
  params: { slug: slug, photoID: photoID },
}: {
  params: { slug: string; photoID: string };
}) {
  return {
    title: `${decodeURIComponent(slug)} - photo ${decodeURIComponent(
      photoID
    )} - Portfolio.`,
  };
}

async function PhotoPageView({
  params: { slug: slug, photoID: photoID },
}: {
  params: { slug: string; photoID: string };
}) {
  const photos = await getImagesFromFolder(decodeURIComponent(slug));
  const photo = photos.find((p) => p.id === Number(photoID))!;

  return (
    <Modal redirect={false}>
      <Photo
        currentPhoto={photo}
        photos={photos}
        navigation={false}
        slug={`portfolio/${slug}`}
      />
    </Modal>
  );
}

export default PhotoPageView;
