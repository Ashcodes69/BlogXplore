import React from "react";
import Link from "next/link";
import style from "@/styles/Blog.module.css";

function Blogs() {
  return (
    <div className="card">
      <div className="card-body">
      <h6
          className={`card-subtitle mb-2 text-body-secondary ${style.blogSubtitle}`}
        >
         Tag
        </h6>
        <h5 className={`card-title ${style.blogtitle}`}>
          <Link className={style.titleLink} href={"/blogpost/learn-javascript"}> Blog titletitle</Link>
        </h5>
        <p className="card-text">
        blog contebt
        </p>
      </div>
    </div>
  );
}

export default Blogs;
