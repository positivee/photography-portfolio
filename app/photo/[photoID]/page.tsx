"use Server";
import Modal from "@/app/components/Modal";
import Photo from "@/app/components/Photo";
import { getImages } from "@/utils/cloudinary";

import React from "react";

export async function generateMetadata({
  params: { photoID: photoID },
}: {
  params: { photoID: string };
}) {
  return {
    title: `Portfolio - photo ${decodeURIComponent(photoID)} - Portfolio.`,
  };
}

async function PhotoPage({
  params: { photoID: photoID },
}: {
  params: { photoID: string };
}) {
  const photos = await getImages();
  const currentPhoto = photos.find((p) => p.id === Number(photoID))!;

  return (
    <Modal redirect={false}>
      <Photo
        currentPhoto={currentPhoto}
        photos={photos}
        navigation={false}
        slug={"photo"}
      />
    </Modal>
  );
}

export default PhotoPage;
