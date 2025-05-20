import BlogClient from './BlogClient';

export default async function Page({ params }: { params: { slug: string } }) {
  return <BlogClient slug={params.slug} />;
}
