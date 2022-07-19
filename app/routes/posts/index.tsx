
import { useLoaderData, Link } from "@remix-run/react";
import { getPosts } from '~/models/post.server';

type Post = {
  slug: string;
  title: string;
};

type LoaderData = {
    posts: Awaited<ReturnType<typeof getPosts>>
};

export const loader = async () => {
  return {
      posts: await getPosts(),
  }
};

export default function Posts() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
