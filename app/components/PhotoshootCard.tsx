"use client";
import React, { useTransition } from "react";
import { Participant, Photoshoot } from "@prisma/client";
import { deletedPhotoshoot } from "@/lib/photoshoots";
import { deletePhoshootAction } from "../_actions";
import { BsFillTrashFill } from "react-icons/bs";
import Link from "next/link";
import { Session } from "next-auth";

interface PhotoshotProps extends Photoshoot {
  participants: Participant[];
}

function PhotoshootCard({
  photoshoot,
  session,
}: {
  photoshoot: PhotoshotProps;
  session: Session | null;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col justify-center items-center shadow-md bg-slate-100 py-4 rounded gap-2 my-6  bg-[url('/img/shooting-stars.jpg')] text-white">
      <span className="text-2xl">{photoshoot.name}</span>
      <p>Description of the session</p>
      <div className="flex gap-6">
        <a
          href={photoshoot.link}
          target="_blank"
          className="bg-green-300 text-black rounded-lg py-2 px-4"
        >
          Watch your session
        </a>
      </div>
      <p>
        Shared for :{" "}
        {photoshoot.participants.map((shared) => shared.email + " ")}
      </p>

      {session?.user?.role === "user" && (
        <button
          onClick={() =>
            startTransition(() => deletePhoshootAction(photoshoot.id))
          }
          className="flex items-center gap-2 bg-red-400  py-1 px-3 rounded-lg"
        >
          <BsFillTrashFill />
        </button>
      )}
    </div>
  );
}

export default PhotoshootCard;
