import Image from "next/image";
import { notFound } from "next/navigation";
import BLOG_POSTS from "@/data/blog_posts";
import BlogContentRenderer from "@/components/blog/BlogContentRenderer";

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="section">
      <div className="container-main max-w-3xl">
        <h1 className="title-lg mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>{post.author.name}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>{post.publishedAt}</span>
        </div>

        <Image
          src={post.coverImage}
          alt={post.title}
          width={900}
          height={500}
          className="rounded-xl mb-10"
        />

        <BlogContentRenderer content={post.content} />
      </div>
    </article>
  );
}
