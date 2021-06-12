import React from 'react';
import Link from 'next/link';
import { CodeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

const Header = () => {
  return (
    <Row
      align="middle"
      style={{
        height: 64,
      }}>
      <Col span={24}>
        <Link href="/">
          <a>
            <div style={{ fontSize: 20 }}>
              <CodeOutlined /> Ysh Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
