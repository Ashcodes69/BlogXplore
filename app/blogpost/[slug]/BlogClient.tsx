'use client';

import { useEffect, useState } from 'react';

export default function BlogClient({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => {
        console.log(err)
        setBlog(null);
      });
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className='container'>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}
