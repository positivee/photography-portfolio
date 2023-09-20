"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({
  children,
  redirect,
}: {
  children: React.ReactNode;
  redirect: boolean;
}) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (
        (e.target === overlay.current || e.target === wrapper.current) &&
        redirect
      ) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper, redirect]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    if (redirect) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [onKeyDown, redirect]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="fixed inset-0 flex items-center justify-center "
      >
        {children}
      </div>
    </div>
  );
}
