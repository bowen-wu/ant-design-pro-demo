import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import TableBasic from '@/components/PrivateComponents/TableBasic';
import SearchForm from '@/components/PrivateComponents/SearchForm';
import {
  ActionInterface,
  PageSearchInfoInterface,
  PageBasicPropsInterface,
} from '@/components/Interface';
import DB from '@/DB';
import { getValidSearchInfo } from '@/utils/utils';

const postPageList = ['manage_user_detail_follow', 'manage_user_detail_follower', 'manage_order'];
const externalProcessingActionKeyList = ['add'];

const PageBasic = (props: PageBasicPropsInterface) => {
  const { page, hasSearchForm = true, extraSearchInfo = {}, refresh = false } = props;
  const { requestUrl, basePageNum, basePageSize } = DB[page];

  const [loading, setLoading] = useState<boolean>(true);
  const [searchInfo, setSearchInfo] = useState<PageSearchInfoInterface>({
    pageNum: basePageNum,
    pageSize: basePageSize,
  });

  const loadData = () => {
    // get data
  };

  useEffect(() => {
    loadData();
    setLoading(false);
  }, [searchInfo, refresh]);

  const searchActionsHandle = (action: ActionInterface, searchInformation: object) => {
    if (externalProcessingActionKeyList.indexOf(action.key) >= 0) {
      if (props.searchActionsHandle) {
        props.searchActionsHandle(action);
      }
      return;
    }
    setSearchInfo({
      ...getValidSearchInfo(searchInformation),
      ...{
        pageNum: searchInfo.pageNum,
        pageSize: searchInfo.pageSize,
      },
    });
  };

  const tableActionsHandle = async (action: ActionInterface, record: any) => {
    try {
      // TODO: 各个 table 的 action 操作
      const {
        exchangeStatusUrl,
        exchangeStatusParamsKeyObj,
        exchangeStatusKey,
        exchangeStatusParamsPosition = 'params',
        exchangeStatusObj = {},
        status = {},
      } = action;
      const params = {};

      Object.keys(exchangeStatusParamsKeyObj).map((paramsKey: string) => {
        params[`${paramsKey}`] =
          paramsKey === exchangeStatusKey
            ? Object.keys(status)
                .map(key => Number(key))
                .filter(item => item !== record[`${exchangeStatusKey}`])[0]
            : record[`${exchangeStatusParamsKeyObj[`${paramsKey}`]}`];
        return null;
      });
      Object.assign(params, exchangeStatusObj);

      loadData();
    } catch (error) {
      if (props.actionsHandle) {
        props.actionsHandle(action, record);
      }
    }
  };

  const pageChangeHandle = (currentPage: number, pageSize: number | undefined) => {
    const total = props.tableList ? props.tableList[`${page}_total`] : 0;
    if (pageSize && total > pageSize) {
      setSearchInfo({ ...searchInfo, ...{ pageNum: currentPage, pageSize } });
    }
  };

  return (
    <div>
      {hasSearchForm ? <SearchForm page={page} actionsHandle={searchActionsHandle} /> : null}
      <TableBasic
        page={page}
        dataSource={props.tableList ? props.tableList[`${page}_list`] : []}
        total={props.tableList ? props.tableList[`${page}_total`] : 0}
        actionsHandle={tableActionsHandle}
        pageChangeHandle={pageChangeHandle}
      />
      <div style={{ textAlign: 'center' }}>
        <Spin spinning={loading} size="large" />
      </div>
    </div>
  );
};

export default PageBasic;
