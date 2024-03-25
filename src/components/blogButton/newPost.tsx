"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

export const NewPost = () => {
  const { user } = useUser();
  return (
    <>
      {user && user.email === "ariel.10.e@hotmail.com" && (
        <Link
          href="/blog/new-post"
          className=" mt-5 inline-flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Nuevo post
        </Link>
      )}
    </>
  );
};
