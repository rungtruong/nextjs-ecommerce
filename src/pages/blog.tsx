import Link from 'next/link';
import { useEffect, useState } from 'react';

import { MainLayout, MetaTag } from '@/components';
import axiosClient from '@/lib/axios-client';
import type { NextPageWithLayout } from '@/models';

const Blog: NextPageWithLayout = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handlePostList();
  }, []);

  const handlePostList = async () => {
    try {
      const response: any = await axiosClient.get('/posts');
      setPosts(response);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <MetaTag title="Lorem ipsum" description="Lorem ipsum" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>

      {posts.map((item: any, index) => (
        <div
          className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
          key={index}
        >
          <Link
            href={`/blog/${item.title}-${index}`}
          >{`Blog - ${item.title}`}</Link>
        </div>
      ))}
    </div>
  );
};

Blog.Layout = MainLayout;

export default Blog;
