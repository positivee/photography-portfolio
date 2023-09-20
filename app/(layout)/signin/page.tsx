"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { BsGoogle } from "react-icons/bs";

function LoginPage() {
  return (
    <div className="text-center max-w-7xl m-auto flex  flex-col justify-center items-center gap-4 min-h-[25vh]">
      <div className="grid place-items-center gap-4">
        <h1 className="text-3xl">
          To get access to client panel you need to log in
        </h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/client-panel" })}
          className="bg-red-500 rounded-md text-slate-50 text-2xl px-2 py-1 flex items-center gap-2"
        >
          Continue with Google
          <BsGoogle />
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
