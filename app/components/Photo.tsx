"use client";
import React, { useEffect, useState } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsBoxArrowUpRight,
} from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface ModalProps {
  currentPhoto: Photo;
  photos: Photo[];
  navigation: boolean;
  slug: string;
}
interface Photo {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
}

const Photo = ({ currentPhoto, photos, navigation, slug }: ModalProps) => {
  const router = useRouter();
  const params = useParams();
  const photoID = Number(params.photoID);
  const [loaded, setLoaded] = useState(false);
  const isImageVertical = currentPhoto.height > currentPhoto.width;

  function handleClose() {
    router.back();
  }

  const chageRouteID = (number: number) => {
    router.replace(`/${slug}/${photoID + number}`);
  };

  const arrowKeysEvent = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && photoID + 1 < photos.length) {
      chageRouteID(1);
    } else if (event.key === "ArrowLeft" && photoID > 0) {
      chageRouteID(-1);
    }
  };

  useEffect(() => {
    if (navigation === true) {
      window.addEventListener("keydown", arrowKeysEvent);
      return () => window.removeEventListener("keydown", arrowKeysEvent);
    }
  }, []);

  return (
    <div
      className={`relative flex justify-center items-center ${
        isImageVertical ? `aspect-[2/3] sm:max-h-[90vh] ` : `aspect-[3/2]`
      }`}
    >
      {isImageVertical ? (
        <div className=" ">
          <Image
            src={`https://res.cloudinary.com/${
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/c_scale,${navigation ? "w_853" : "w_1280"}/${
              currentPhoto.public_id
            }.${currentPhoto.format}`}
            width={navigation ? 853 : 1280}
            height={navigation ? 1280 : 1920}
            priority
            onLoadingComplete={() => setLoaded(true)}
            alt=""
          />
        </div>
      ) : (
        <Image
          src={`https://res.cloudinary.com/${
            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
          }/image/upload/c_scale,${navigation ? "w_1280" : "w_1920"}/${
            currentPhoto.public_id
          }.${currentPhoto.format}`}
          width={navigation ? 1280 : 1920}
          height={navigation ? 853 : 1280}
          priority
          className="aspect-[3/2] object-contain"
          onLoadingComplete={() => setLoaded(true)}
          alt=""
        />
      )}

      <div className="absolute inset-0  z-50  ">
        {navigation && loaded && (
          <>
            {photoID > 0 && (
              <button
                className="absolute bg-black/50 rounded-full p-3 text-white/75 hover:text-white left-3 top-[calc(50%-16px)]"
                onClick={() => chageRouteID(-1)}
              >
                <BsChevronLeft className="h-5 w-5" />
              </button>
            )}
            {photoID + 1 < photos.length && (
              <button
                className="absolute bg-black/50 rounded-full p-3 text-white/75 hover:text-white right-3 top-[calc(50%-16px)]"
                onClick={() => chageRouteID(1)}
              >
                <BsChevronRight className="h-5 w-5" />
              </button>
            )}
            <button
              className="absolute p-2 bg-black/50 rounded-full text-white/75 hover:text-white left-2 top-2"
              onClick={handleClose}
            >
              <CgClose className="h-5 w-5" />
            </button>
          </>
        )}
        <a
          className=" absolute right-2 top-2 cursor-pointer p-2 bg-black/50 rounded-full text-white/75 hover:text-white "
          href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentPhoto.public_id}.${currentPhoto.format}`}
          target="_blank"
        >
          <BsBoxArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Photo;
