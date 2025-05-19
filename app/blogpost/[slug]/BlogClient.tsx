import { notFound } from "next/navigation";

type Blog = {
  title: string;
  content: string;
};

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`, {
      cache: "no-store", 
    });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function BlogClient({ slug }: { slug: string }) {
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  return (
    <div className="container">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}
