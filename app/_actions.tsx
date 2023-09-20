"use server";

import { createPhotoshoot, deletedPhotoshoot } from "@/lib/photoshoots";
import { revalidatePath } from "next/cache";

export async function createPhotoshootAction(
  name: string,
  email: string,
  googleLink: string
) {
  await createPhotoshoot(name, email, googleLink);
  revalidatePath("/client-panel");
}

export async function deletePhoshootAction(id: string) {
  await deletedPhotoshoot(id);
  revalidatePath("/client-panel");
}
