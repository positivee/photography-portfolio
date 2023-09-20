"use client";
import React, { useRef, useState } from "react";
import { createPhotoshootAction } from "../_actions";
import { useSession } from "next-auth/react";
function AdminPanel() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string>("");

  const [emailCount, setEmailCount] = useState([""]);

  async function formAction(data: FormData) {
    const name = data.get("name");
    const email = data.get("email");
    const googleLink = data.get("googleLink");

    if (!name || typeof name !== "string") return;
    if (!email || typeof email !== "string") return;
    if (!googleLink || typeof googleLink !== "string") return;

    console.log({ name, email, googleLink });

    try {
      await createPhotoshootAction(name, email, googleLink);
      setMessage("Success!");
    } catch (e) {
      setMessage("There was an error.");
    }

    //reset form
    formRef.current?.reset();
  }

  return (
    <div className="pt-6 mt-6 border-t">
      <h1 className="text-3xl mb-2">Admin panel</h1>
      <h2 className="text-xl mb-4">Add new photoshoot:</h2>
      <form action={formAction} ref={formRef}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name of session:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            minLength={6}
            placeholder="Name of session"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            E-mail:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            placeholder=" E-mail address to share session"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="googleLink"
          >
            Google link to share:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="googleLink"
            name="googleLink"
            type="url"
            placeholder="Link that you want to share for your customer"
            required
          />
        </div>
        <button
          className="rounded bg-green-300 text-black/80 px-3 py-2"
          type="submit"
        >
          Share new photosession
        </button>
        <p className="py-2 text-blue-400">{message}</p>
      </form>
    </div>
  );
}

export default AdminPanel;
