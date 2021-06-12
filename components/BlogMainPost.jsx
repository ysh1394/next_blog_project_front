import React from 'react';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';

const BlogMainPost = ({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createdAt,
}) => {
  console.log(' thumbnail.imageUrl >>>>>', thumbnail);
  return (
    <Row
      align="middle"
      style={{
        textAlign: 'center',
      }}>
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <h4>
                {author.name} | {dayjs(createdAt).format('YY MMMM D')}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default BlogMainPost;
