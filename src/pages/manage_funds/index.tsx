import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';
import SearchForm from '../../components/PrivateComponents/SearchForm';
import TableBasic from '../../components/PrivateComponents/TableBasic';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const dataSource = [{id: '1', isDelete: '1'}, {id: '2', isDelete: '0'}];
  return (
    <PageHeaderWrapper className={styles.main}>
      <SearchForm page='manage_funds' />
      <TableBasic page='manage_funds' dataSource={dataSource} />
      <div style={{ textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
      </div>
    </PageHeaderWrapper>
  );
};
