import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { connect } from 'dva';
import { ConnectState } from '@/models/connect';
import styles from './index.less';
import PageBasic from '@/components/PrivateComponents/pageBasic';
import { ActionInterface, PagePropsInterface } from '@/components/Interface';

const ManageOrder = (props: PagePropsInterface) => {
  const page = 'manage_order';

  const dataSource = [
    { id: '1', isDelete: '1' },
    { id: '2', isDelete: '0' },
  ];

  const { dispatch } = props;
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
    </PageHeaderWrapper>
  );
};

export default connect(({}: ConnectState) => ({}))(ManageOrder);
