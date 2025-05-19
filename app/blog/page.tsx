import Link from "next/link";
import style from "@/styles/Blog.module.css";

type Blog = {
  tag: string;
  title: string;
  author: string;
  content: string;
  slug: string;
};

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="container">
      {blogs.map((blogitem) => (
        <div key={blogitem.slug}>
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
                  href={`/blogpost/${blogitem.slug}`}
                >
                  {blogitem.title}
                </Link>
              </h5>
              <p className="card-text">
                {blogitem.content.substring(0, 150)}...
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
