import BlogClient from './BlogClient';

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogClient slug={params.slug} />;
}
