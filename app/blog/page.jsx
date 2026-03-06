import BLOG_POSTS from "@/data/blog_posts";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedPost from "@/components/blog/FeaturedPost";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const posts = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="title-lg">Blog</h1>
          <p className="text-muted mt-3">
            Insights on legal technology, compliance, and AI innovation.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-14">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
