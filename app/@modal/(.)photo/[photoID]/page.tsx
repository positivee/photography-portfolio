"use Server";
import Modal from "@/app/components/Modal";
import Photo from "@/app/components/Photo";
import { getImages } from "@/utils/cloudinary";
import React from "react";

async function PhotoPage({
  params: { photoID: photoID },
}: {
  params: { photoID: string };
}) {
  const photos = await getImages();
  const photo = photos.find((p) => p.id === Number(photoID))!;

  return (
    <Modal redirect={true}>
      <Photo
        currentPhoto={photo}
        photos={photos}
        navigation={true}
        slug={"photo"}
      />
    </Modal>
  );
}

export default PhotoPage;
