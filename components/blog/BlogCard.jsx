import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="card overflow-hidden hover:-translate-y-1 transition-transform duration-200">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={600}
          height={350}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {post.category}
          </span>

          <h3 className="font-semibold text-lg mt-2 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
            <span>{post.author.name}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
