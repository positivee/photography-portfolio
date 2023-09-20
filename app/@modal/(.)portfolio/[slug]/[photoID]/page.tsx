"use Server";
import Modal from "@/app/components/Modal";
import Photo from "@/app/components/Photo";
import { getImagesFromFolder } from "@/utils/cloudinary";
import React from "react";

async function PhotoPage({
  params: { slug: slug, photoID: photoID },
}: {
  params: { slug: string; photoID: string };
}) {
  const photos = await getImagesFromFolder(decodeURIComponent(slug));
  const photo = photos.find((p) => p.id === Number(photoID))!;

  return (
    <Modal redirect={true}>
      <Photo
        currentPhoto={photo}
        photos={photos}
        navigation={true}
        slug={`portfolio/${slug}`}
      />
    </Modal>
  );
}

export default PhotoPage;
