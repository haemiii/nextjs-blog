"use client";

import { useEffect } from "react";
import Link from "next/link";

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>{result[i].title}</Link>
          <Link href={"/edit/" + result[i]._id} className="list-btn">
            ✏️
          </Link>
          <button
            onClick={(e) => {
              //   fetch("/api/post/delete", {
              //     method: "POST",
              //     body: result[i]._id,
              //   })
              //     .then((r) => r.json())
              //     .then(() => {
              //       e.target.parentElement.style.opacity = 0;
              //       setTimeout(() => {
              //         e.target.parentElement.style.display = "none";
              //       }, 1000);
              //     });
              //   fetch("/api/test?name=kim&age=20"); //querystring
              fetch("/api/abc/kim");
            }}
          >
            🗑️
          </button>
          <p>{result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
