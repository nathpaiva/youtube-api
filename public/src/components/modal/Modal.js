import React from 'react';

import Detail from '../detail/Detail';
import modal from './modal.scss';

const Modal = ({ isActive, selectedVideo, close }) => (
  <div>
    {isActive &&
      <div className={modal.videoModal}>
        <Detail className={modal.modalContent} selectedVideo={selectedVideo}>
          <button className={modal.modalClose} onClick={close}>+</button>
        </Detail>
      </div>
    }
  </div>
)

export default Modal;
