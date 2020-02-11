// searchItem 的 type === rangePicker 时，default 必须是数组，且 length === 2

import {getLastMonthStr} from '../utils/utils';
import moment from 'moment';

const isDefault = true;

export default {
  manage_user: {
    searchInfo: {
      searchList: [
        {
          type: 'input',
          label: '用户手机号',
          key: 'user_phone',
        }, {
          type: 'rangePicker',
          label: '选择创建日期',
          key: 'create_time',
        }
      ],
      searchActions: [
        {
          text: '查询',
          type: 'primary',
          key: 'search',
        }
      ],
    },
    tableInfo: {
      columnList: [
        {
          title: '用户ID',
          dataIndex: 'id',
          key: 'id',
        }, {
          title: '用户昵称',
          dataIndex: 'nickname',
          key: 'nickname',
        }, {
          title: '用户手机号',
          dataIndex: 'mobile_phone',
          key: 'mobile_phone',
        }, {
          title: '用户简介',
          dataIndex: 'introduction',
          key: 'introduction',
        }, {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
        }, {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time',
        }
      ],
      actionList: [
        {
          key: 'status',
          depend: 'status',
          status: {
            disable: '停用',
            enable: '启用',
          }
        }, {
          route: '/manage_user/detail',
          key: 'detail',
        },
      ]
    },
  },
  manage_funds: {
    searchInfo: {
      searchList: [
        {
          type: 'input',
          label: '用户手机号',
          key: 'user_phone',
        }, {
          type: 'select',
          label: '结算状态',
          key: 'settlement_status',
          optionList: [
            {
              value: 'all',
              label: '全部',
              isDefault,
            }, {
              value: 'unsettle',
              label: '未结算',
            }, {
              value: 'settled',
              label: '已结算',
            },
          ]
        }, {
          type: 'monthPicker',
          label: '结算周期',
          key: 'settlement_cycle',
          default: getLastMonthStr(),
          disabledDate: (current: any) => current && current >= moment().startOf('month'),
        }
      ],
      searchActions: [
        {
          text: '查询',
          type: 'primary',
          key: 'search',
        }, {
          text: '批量结算',
          type: 'primary',
          key: 'bulk_settlement',
        }, {
          text: '导出',
          type: '',
          key: 'export',
        }
      ],
    },
    tableInfo: {
      columnList: [
        {
          title: '结算流水',
          dataIndex: 'id',
          key: 'id',
        }, {
          title: '结算周期',
          dataIndex: 'cycle',
          key: 'cycle',
        }, {
          title: '用户手机号',
          dataIndex: 'mobile_phone',
          key: 'mobile_phone',
        }, {
          title: '结算金额',
          dataIndex: 'settlement_amount',
          key: 'settlement_amount',
        }, {
          title: '账户明细',
          dataIndex: 'detail',
          key: 'detail',
        }, {
          title: '结算信息',
          dataIndex: 'settlement_info',
          key: 'settlement_info',
        }, {
          title: '结算状态',
          dataIndex: 'settlement_status',
          key: 'settlement_status',
        }, {
          title: '创建时间',
          dataIndex: 'create_time',
          key: 'create_time',
        }
      ],
      actionList: [
        {
          key: 'status',
          depend: 'settlement_status',
          status: {
            disable: '已结算',
            enable: '/',
          }
        }
      ]
    },
  },
  span_item: {
    input: 5,
    select: 8,
  }
};
