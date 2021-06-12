import React from 'react';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';
import BlockContent from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <SyntaxHighlighter
          language="javascript"
          style={{
            'hljs-selector-id': {
              color: '#9cbafe',
            },
            'hljs-title': {
              color: 'red',
            },
            'hljs-meta': {
              color: '#9cbafe',
            },
            'hljs-link': {
              color: '#9cbafe',
            },
            'hljs-emphasis': {
              color: '#9cbafe',
            },
            'hljs-strong': {
              color: '#9cbafe',
            },
          }}>
          {code}
        </SyntaxHighlighter>
      );
    },
    video: ({ node }) => {
      return <p>video</p>;
    },
    link: ({ node }) => {
      return <p>link</p>;
    },
    imageGallery: ({ node }) => {
      return <p>imageGallery</p>;
    },
  },
};

const BlogPostDetail = ({ blocks }) => {
  return (
    <Row>
      <Col span={24}>
        <BlockContent
          blocks={blocks}
          projectId={process.env.SANITY_PROJECT_ID}
          dataset="production"
          serializers={serializers}
        />
        yayayayaay
      </Col>
    </Row>
  );
};

export default BlogPostDetail;
