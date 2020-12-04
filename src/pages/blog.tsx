import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import posts from "../../public/data/posts.json";
import { Post } from "../interfaces";

type Props = {
  posts: Post[];
};
const Blog = ({ posts = [] }: Props) => (
  <Layout title="Blog | Next.js + TypeScript Example">
    <h1 className="title">Blog</h1>
    {posts.map((post) => (
      <div className="box" key={post.slug}>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <a>
                  <h2 className="title">{post.title}</h2>
                  <em className="subtitle is-6 is-block">
                    {post.dateFormatted}
                  </em>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
