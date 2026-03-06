import Link from "next/link";
import Image from "next/image";

export default function FeaturedPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="grid md:grid-cols-2 gap-8 items-center card overflow-hidden p-6">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={700}
          height={400}
          className="rounded-xl object-cover"
        />

        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase">
            Featured
          </span>

          <h2 className="text-2xl font-bold mt-2">{post.title}</h2>

          <p className="text-gray-500 mt-3">{post.excerpt}</p>

          <div className="flex items-center gap-4 mt-5 text-sm text-gray-400">
            <span>{post.author.name}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
