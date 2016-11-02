import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Card, Col, Row } from 'antd';
import Layouts from '../components/Layouts.js';

function IndexPage() {
  return (
    <Layouts>
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row>
        <Col span="8">
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span="8">
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span="8">
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
      </Row>
    </div>
    </Layouts>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
