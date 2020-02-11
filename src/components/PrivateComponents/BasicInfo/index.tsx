import React from 'react';
import styles from "./index.less";
import { Button } from "antd";
import {BasicInformationInterface, ItemInterface} from "@/components/Interface";

interface PropsInterface {
  basicInfo: BasicInformationInterface
}

export default (props: PropsInterface) => {
  const {basicInfo} = props;

  return (
    <div>
      <h3>{basicInfo.title}</h3>
      <div className={styles.flexSpaceBetween}>
        {
          basicInfo.pictureLabel ? (
            <div>
              <div className={styles.basic_label}>{basicInfo.pictureLabel}</div>
              <div>
                <img src="" alt=""/>
              </div>
            </div>
          ) : null
        }
        {
          basicInfo.contentArr.map(content => (
            <div key={content.key}>
              {
                content.itemArr.map((item: ItemInterface) => (
                  <div key={item.label} className={styles.item}>
                    <div style={{minWidth: `${content.labelLength || 6}em`}} className={styles.basic_label}>{item.label}</div>
                    <div>{item.text}</div>
                  </div>
                ))
              }
            </div>
          ))
        }
        {
          basicInfo.extraActions ? (basicInfo.extraActions.map(action => <Button type={action.type} key={action.text}>{action.text}</Button>)) : null
        }
      </div>
    </div>
  )
};
