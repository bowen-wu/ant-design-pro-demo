import {Dispatch, AnyAction} from 'redux';

export enum ButtonType {
  Primary = 'primary',
  Link = 'link',
  Default = 'default',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Danger = 'danger',
}

export interface ExtraActionItemInterface {
  type: ButtonType;
  text: string;
  id: string;
}

export interface BasicInformationInterface {
  title: string;
  pictureLabel: string;
  picSrc?: string;
  contentArr: Array<any>;
  extraActions?: Array<ExtraActionItemInterface>;
}

export interface ItemInterface {
  label: string;
  text: string;
}

export interface ExtraInfoInfoInterface {
  title: object | string;
}

export interface ActionInterface {
  key: string;
  text?: string;
  route?: string;
  status?: object;
  depend?: string;
  type?: ButtonType | string;
  extraInfo?: ExtraInfoInfoInterface;
  exchangeStatusUrl: string;
  exchangeStatusKey: string;
  exchangeStatusParamsPosition?: string;
  exchangeStatusParamsKeyObj: object;
  exchangeStatusObj?: object;
}

export interface PropsInterface {
  page: string;
  total?: number;
  dataSource?: Array<any>;
  actionsHandle?: (action: ActionInterface, searchInfo: object, record?: any) => void;
  pageChangeHandle?: (currentPage: number, pageSize: number | undefined) => void;
}

export interface LoginParamsType {
  userName: string;
  password: string;
}

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface CurrentUser {
  avatar?: string;
  name?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  userid?: string;
  id?: string;
  unreadCount?: number;
  token?: string;
  userName?: string;
}

export interface HomeInfo {
  userCount: number;
  orderCount: number;
  pusCount: number;
}

export interface UserModelState {
  currentUser?: CurrentUser;
  status?: StateType;
  homeInfo?: HomeInfo;
}

export interface ObjectInterface {
  [propsName: string]: any;
}

export interface TableListModelState {
  manage_user_total?: number;
  manage_funds_total?: number;

  manage_user_list?: Array<any>;
  manage_funds_list?: Array<any>;
}

export interface CommodityDetailInterface {
  goodsDetailList: Array<any>;
}

export interface PagePropsInterface {
  dispatch: Dispatch<AnyAction>;
  tableList?: TableListModelState;
  detailInfo?: CommodityDetailInterface;
  user?: UserModelState;
  details?: DetailsModelState;
  global?: GlobalModelState;
}

export interface TableColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
  type?: string;
  default?: Array<string>;
  render?: (text: any, record: any, index: number) => void;
  needRender?: boolean;
  enumerate?: object;
  renderDepend?: Array<string>;
}

export interface DetailsModelState {
  info: ObjectInterface;
}

export interface ModifyModelState {
}

export interface GlobalModelState {
  uploadFileUrl: string;
}
