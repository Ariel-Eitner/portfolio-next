"use client";

import React, { useState } from "react";
import Link from "next/link";
import blogPosts from "@/data/blogData";

const postsPerPage = 5;

export default function LastEntries() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white text-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-3xl font-semibold mb-5">Últimas Entradas</h2>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/post/${post.slug}`}
              className="block hover:bg-gray-100 rounded-md p-2 -m-2"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className="pagination-button mt-3 px-3"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
