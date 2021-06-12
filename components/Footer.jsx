import React from 'react';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: 'right',
      }}>
      <Col span={24}>
        <p>© 2021 Seunghyun Yoo. All right reserved</p>
      </Col>
    </Row>
  );
};

export default Footer;
