import React from 'react';
import { Col, Row } from 'antd';

const BlogHeadline = () => {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}>
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: 'bold',
          }}>
          유승현의 블로그
        </h1>
        <p
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          유승현입니다.
        </p>
      </Col>
    </Row>
  );
};

export default BlogHeadline;
