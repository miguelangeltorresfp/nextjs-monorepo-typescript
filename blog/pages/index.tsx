import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";

interface Props {
  posts: any[];
}

const BlogIndex: NextStatelessComponent<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Acme's blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogIndex.getInitialProps = async () => {
  const posts = [
    { id: 1, title: "10 great drinking games" },
    { id: 2, title: "3 amazing hangover antidotes!" },
  ];
  return { posts };
};

export default BlogIndex;
