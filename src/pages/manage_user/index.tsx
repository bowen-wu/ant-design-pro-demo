import {PageHeaderWrapper} from '@ant-design/pro-layout';
import React, {useState, useEffect} from 'react';
import {Spin} from 'antd';
import styles from './index.less';
import TableBasic from '../../components/PrivateComponents/TableBasic';
import SearchForm from '../../components/PrivateComponents/SearchForm';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dataSource = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      status: 'disable',
      islock: 0,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
      status: 'enable',
      islock: 1,
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
      status: 'disable',
      islock: 0,
    }
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper className={styles.main}>
      <SearchForm page='manage_user'/>
      <TableBasic page='manage_user' dataSource={dataSource}/>
      <div style={{textAlign: 'center'}}>
        <Spin spinning={loading} size="large"/>
      </div>
    </PageHeaderWrapper>
  );
};
