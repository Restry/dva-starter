import React from 'react';
import { Link } from 'dva/router';
import styles from './Layout.less';
import { Row, Col } from 'antd';


const Layout = (props) => {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.inner}>
          <Link to="/">
            <img className={styles.logo} src="https://zos.alipayobjects.com/rmsportal/AsASAiphPWWUJWG.png" />
          </Link>
          <Link activeClassName={styles.active} to="/top">Top</Link>
          <Link activeClassName={styles.active} to="/new">New</Link>
          <Link activeClassName={styles.active} to="/show">Show</Link>
          <Link activeClassName={styles.active} to="/ask">Ask</Link>
          <Link activeClassName={styles.active} to="/job">Jobs</Link>
          <a className={styles.github} href="https://github.com/dvajs/dva-hackernews" target="_blank">
            Built with Restry & Linda
          </a>
        </div>
      </div>
      <Row>
        <Col span={18} push={6}>
          <div className={styles.view}>
            {props.children}
          </div>
        </Col>

        <Col span={6} pull={18}>Hollds</Col>
      </Row>


    </div>
  );
};

export default Layout;
