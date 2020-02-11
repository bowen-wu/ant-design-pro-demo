import React, {useState, useEffect} from "react";
import styles from "./index.less";
import {Table} from "antd";
import {PropsInterface} from '../../Interface';
import DB from "@/DB";

interface ActionInterface {
  key: string,
  text?: string,
  route?: string,
  status?: object,
  depend?: string,
}

export default (props: PropsInterface) => {
  const {page, dataSource} = props;
  const {tableInfo: {columnList, actionList}} = DB[page];

  const action = {
    title: '操作',
    key: 'action',
    dataIndex: "action",
    render: (text: string, record: any) => (
      <span>
        {actionList.map((actionItem: ActionInterface) => {
          const {href = 'javascript;', actionText = ''} = (() => {
            switch (actionItem.key) {
              case 'status':
                return {actionText: actionItem.status && actionItem.depend ? actionItem.status[record[actionItem.depend]] : ''};
              default:
                return {href: actionItem.route, actionText: actionItem.text || '详情'};
            }
          })();
          return actionText ? <a key={actionItem.key} className={styles.actionItem} href={href}>{actionText}</a> : null;
        })}
      </span>
    )
  };
  const columns = [...columnList, actionList.length ? action : {}];
  return (
    <div className={styles.container}>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};
