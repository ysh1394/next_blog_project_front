import React from 'react';
import { useRouter } from 'next/router';
import SanityService from '../../services/SanityService';

import styles from '../../styles/Home.module.css';
import Header from '../../components/Header.jsx';
import BlogHeadline from '../../components/BlogHeadline.jsx';
import BlogMainPost from '../../components/BlogMainPost.jsx';
import BlogList from '../../components/BlogList.jsx';
import Footer from '../../components/Footer.jsx';
import BlogPostDetail from '../../components/BlogPostDetail.jsx';

const PostAll = ({ slug, post }) => {
  const router = useRouter();
  console.log('post >>>>>', post);

  return (
    <div className={styles.container}>
      <div>post : {slug}</div>;
      <Header />
      <BlogMainPost {...post} />
      <BlogPostDetail blocks={post.content} />
      <Footer />
    </div>
  );
};

export default PostAll;

const sanityService = new SanityService();

export async function getStaticPaths() {
  const posts = await sanityService.getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    // paths : [{params : {slug: '블로그이름'}}],
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await sanityService.getPosts();
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      slug,
      post,
    },
  };
}
