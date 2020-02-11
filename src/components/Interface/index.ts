export enum ButtonType {
  Primary = 'primary',
  Link = 'link',
  Default = 'default',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Danger = 'danger',
}

interface ExtraActionItemInterface {
  type: ButtonType,
  text: string,
}

export interface BasicInformationInterface {
  title: string,
  pictureLabel: string,
  contentArr: Array<any>,
  extraActions?: Array<ExtraActionItemInterface>,
}

export interface ItemInterface {
  label: string,
  text: string,
}

export interface PropsInterface {
  page: string,
  dataSource?: Array<any>,
}
