import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React from 'react';
import {connect} from 'dva';
import {ConnectState} from '@/models/connect';
import styles from './index.less';
import SearchForm from "@/components/PrivateComponents/SearchForm";
import TableBasic from "@/components/PrivateComponents/TableBasic";

const ManageOrder = () => {
  const page = 'manage_order';

  const dataSource = [{id: '1', isDelete: '1'}, {id: '2', isDelete: '0'}];
  return (
    <PageHeaderWrapper className={styles.main}>
      <SearchForm page={page} />
      <TableBasic page={page} dataSource={dataSource} />
    </PageHeaderWrapper>
  );
};

export default connect(({}: ConnectState) => ({}))(ManageOrder);

