import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Case02.less';

interface Props {
  name: string;
}

// 脚手架示例组件
const Case02: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Case02;
