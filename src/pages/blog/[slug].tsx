import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import posts from "../../../public/data/posts.json";
import Layout from "../../components/Layout";
import { Post } from "../../interfaces";

const defaultCoverImage = "/img/34961490322_bb9611120a_k.jpg";

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => {
  return (
    <Layout title={`${post.title} | Blog`}>
      <Link href="/blog">
        <a className="button mb-4"> All entries</a>
      </Link>
      <div
        className="cover-image"
        style={{
          backgroundImage: `url(${post.coverImage || defaultCoverImage})`,
        }}
      >
        <div className="title-block">
          <h1 className="title">{post.title}</h1>
          <em className="subtitle is-6 is-block"> {post.dateFormatted} </em>
        </div>
      </div>
      <div
        className="content section"
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      post: posts.find((post) => post.slug === context.params?.slug),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};
export default BlogPost;
