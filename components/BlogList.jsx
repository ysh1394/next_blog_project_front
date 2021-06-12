import React from 'react';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';

const BlogList = ({ posts }) => {
  console.log('posts >>>>>', posts);
  return (
    <>
      <Row
        align="middle"
        style={{
          height: 100,
        }}>
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
            }}>
            Latest Posts
          </h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        align="top"
        style={{
          height: 'auto',
        }}>
        {posts.map((post, idx) => {
          return (
            <Col span={6} key={idx}>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Card
                    style={{
                      width: '100%',
                      border: 'none',
                      marginBottom: 30,
                    }}
                    cover={
                      <img
                        alt={post.thumbnail.alt}
                        src={post.thumbnail.imageUrl}
                      />
                    }>
                    <h3>{post.title}</h3>
                    <h4>
                      {post.author.name} |{' '}
                      {dayjs(post.createdAt).format('YY MMMM D')}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default BlogList;
