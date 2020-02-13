// searchItem 的 type === rangePicker 时，default 必须是数组，且 length === 2

import {getDayStr} from '../utils/utils';

const lastDayStr = getDayStr(-1);
const isDefault = true;
const pageObj = {
  basePageNum: 1,
  basePageSize: 10,
};

export default {
  manage_user: {
    detailsUrl: '',
    requestUrl: '',
    searchInfo: {
      searchList: [
        {
          type: 'input',
          label: '用户手机号',
          key: 'mobile',
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
          dataIndex: 'nickName',
          key: 'nickName',
        }, {
          title: '用户手机号',
          dataIndex: 'mobile',
          key: 'mobile',
        }, {
          title: '用户简介',
          dataIndex: 'brief',
          key: 'brief',
        }, {
          title: '状态',
          dataIndex: 'islock',
          key: 'islock',
          needRender: true,
          enumerate: {
            0: '停用',
            1: '启用',
          },
        }, {
          title: '创建时间',
          dataIndex: 'gmtCreate',
          key: 'gmtCreate',
        }
      ],
      actionList: [
        {
          key: 'status',
          depend: 'islock',
          type: 'popconfirm',
          exchangeStatusUrl: '',
          exchangeStatusParamsKeyObj: {appUserId: 'id', islock: 'islock'},
          exchangeStatusKey: 'islock',
          extraInfo: {
            title: {
              0: '你确定要停用该用户么？',
              1: '你确定要启用该用户么',
            },
          },
          status: {
            0: '停用',
            1: '启用',
          }
        }, {
          route: '/manage_user/detail',
          key: 'detail',
        },
      ]
    },
    ...pageObj,
  },
  manage_funds: {
    requestUrl: '',
    searchInfo: {},
    tableInfo: {
      columnList: [
        {
          title: '商品ID',
          dataIndex: 'gid',
          key: 'gid',
        }, {
          title: '商品名称',
          dataIndex: 'goodsName',
          key: 'goodsName',
        }, {
          title: '状态',
          dataIndex: 'isDelete',
          key: 'isDelete',
          needRender: true,
          enumerate: {
            0: '上架',
            1: '下架',
          },
        }, {
          title: '更新时间',
          dataIndex: 'mofityTime',
          key: 'mofityTime',
        }
      ],
      actionList: [
        {
          key: 'status',
          depend: 'isDelete',
          type: 'popconfirm',
          exchangeStatusUrl: '/goods/modifyGoodsRecord',
          exchangeStatusParamsKeyObj: {gid: 'gid', isDelete: 'isDelete'},
          exchangeStatusKey: 'isDelete',
          exchangeStatusParamsPosition: 'data',
          extraInfo: {
            title: {
              0: '你确定要下架该商品么？',
              1: '你确定要上架该商品么？',
            },
          },
          status: {
            0: '下架',
            1: '上架',
          }
        }, {
          route: '/manage_commodity/detail',
          key: 'detail',
        },],
    },
    ...pageObj,
  },
  manage_order: {
    requestUrl: '',
    searchInfo: {
      searchList: [
        {
          type: 'input',
          label: '订单编号',
          key: 'orderNo'
        }, {
          type: 'select',
          label: '订单状态',
          key: 'status',
          optionList: [
            {
              value: 'all',
              label: '全部',
              isDefault,
            }, {
              value: '0',
              label: '待付款',
            }, {
              value: '6',
              label: '待发货',
            }, {
              value: '7',
              label: '待收货',
            }, {
              value: '4',
              label: '待制作',
            }, {
              value: '1',
              label: '已完成',
            }, {
              value: '5',
              label: '制作中',
            }, {
              value: '2',
              label: '已取消',
            }, {
              value: '8',
              label: '待退货',
            }, {
              value: '3',
              label: '已退款',
            },
          ]
        }, {
          type: 'input',
          label: '购买用户手机号',
          key: 'mobile',
        }, {
          type: 'rangePicker',
          label: '选择创建日期',
          key: 'order_create_time',
          needRender: true,
          renderDepend: ['startDate', 'endDate'],
          default: [lastDayStr, lastDayStr],
        },
      ],
      searchActions: [
        {
          text: '查询',
          type: 'primary',
          key: 'search',
        }, {
          text: '导出',
          type: 'primary',
          key: 'export',
        }
      ],
    },
    tableInfo: {
      columnList: [
        {
          title: '订单编号',
          dataIndex: 'orderNo',
          key: 'orderNo',
        }, {
          title: '购买用户',
          dataIndex: 'userMobile',
          key: 'userMobile',
        }, {
          title: '商品名称',
          dataIndex: 'goodsName',
          key: 'goodsName',
        }, {
          title: '作品名称',
          dataIndex: 'showName',
          key: 'showName',
        }, {
          title: '订单金额',
          dataIndex: 'amount',
          key: 'amount',
        }, {
          title: '支付方式',
          dataIndex: 'payType',
          key: 'payType',
          needRender: true,
          enumerate: {
            1: '微信',
            2: '支付宝',
          },
        }, {
          title: '订单数量',
          dataIndex: 'goodsNum',
          key: 'goodsNum',
        }, {
          title: '商品大小',
          dataIndex: 'type',
          key: 'type',
          needRender: true,
          enumerate: {
            1: '小号',
            2: '中号',
            3: '大号',
          },
        }, {
          title: '商品颜色',
          dataIndex: 'colour',
          key: 'colour',
        }, {
          title: '收货地址',
          dataIndex: 'goodsReceiveAddress',
          key: 'goodsReceiveAddress',
        }, {
          title: '订单状态',
          dataIndex: 'status',
          key: 'status',
          needRender: true,
          enumerate: {
            0: '待支付',
            1: '已支付',
            2: '已取消',
            3: '已退款',
            4: '待制作',
            5: '制作中',
            6: '待发货',
            7: '待收货',
            8: '待退货',
          },
        }, {
          title: '创建时间',
          dataIndex: 'gmtCreate',
          key: 'gmtCreate',
        }, {
          title: '更新时间',
          dataIndex: 'gmtModified',
          key: 'gmtModified',
        },
      ],
      actionList: [
        {
          key: 'update_status',
          text: '更新状态',
        }, {
          key: 'status',
          depend: 'status',
          status: {
            to_be_returned: '退款信息',
            refunded: '退款信息',
          }
        }
      ],
    },
    ...pageObj,
  },
  span_item: {
    input: 5,
    select: 8,
  }
};
