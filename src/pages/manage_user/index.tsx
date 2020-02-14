import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import styles from './index.less';
import PageBasic from '@/components/PrivateComponents/pageBasic';
import { ActionInterface, PagePropsInterface } from '@/components/Interface';
import { ConnectState } from '@/models/connect';

const ManageUser = (props: PagePropsInterface) => {
  const page = 'manage_user';
  const { dispatch } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      status: 'disable',
      islock: 0,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      status: 'enable',
      islock: 1,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      status: 'disable',
      islock: 0,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const actionsHandle = (action: ActionInterface, record: any) => {
    // action 操作
    console.log(action);
  };

  return (
    <PageHeaderWrapper className={styles.main}>
      <PageBasic
        page={page}
        tableList={dataSource}
        dispatch={dispatch}
        actionsHandle={actionsHandle}
      />
      <div style={{ textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
      </div>
    </PageHeaderWrapper>
  );
};

export default connect(({}: ConnectState) => ({}))(ManageUser);
