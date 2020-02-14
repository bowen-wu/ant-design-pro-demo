import React, { useState } from 'react';
import styles from './index.less';
import { Modal } from 'antd';

interface ZoomPicturePropsInterface {
  pictureSrc: string;
  onCancelHandle?: () => void;
}

export default (props: ZoomPicturePropsInterface) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  const onCancelHandle = () => {
    setModalVisible(false);
    if (props.onCancelHandle) {
      props.onCancelHandle();
    }
  };

  return (
    <div>
      <Modal
        title=""
        visible={modalVisible}
        closable={false}
        destroyOnClose
        footer={null}
        onCancel={onCancelHandle}
      >
        <div className={styles.big_icon}>
          <img src={props.pictureSrc} alt="" />
        </div>
      </Modal>
    </div>
  );
};
