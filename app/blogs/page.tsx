"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "@/styles/Blog.module.css";

function Blogs() {
  type Blog = {
    tag: string;
    title: string;
    author: string;
    content: string;
  };
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((data) => {
        return data.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className="container">
      {blogs.map((blogitem) => {
        return (
          <div key={blogitem.title}>
            <div className="card">
              <div className="card-body">
                <h6
                  className={`card-subtitle mb-2 text-body-secondary ${style.blogSubtitle}`}
                >
                  {blogitem.tag}
                </h6>
                <h5 className={`card-title ${style.blogtitle}`}>
                  <Link
                    className={style.titleLink}
                    href={"/blogpost/learn-javascript"}
                  >
                    {" "}
                    {blogitem.title}
                  </Link>
                </h5>
                <p className="card-text">{blogitem.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
