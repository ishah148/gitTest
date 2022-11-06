import React from 'react';
import styles from './loading.module.scss';

const RickAndMortyLoading = () => {
  return (
    <div>
      <div className={styles.Animation}>
        <div className={styles.AnimationFrames}>
          <div className={styles.AnimationFrame}>
            {/* <img src="https://muffinman.io/img/rm/frame_00.png" /> */}
            <img src={require('../../assets/frames/frame_00.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_01.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_02.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_03.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_04.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_05.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_06.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_07.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_08.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_09.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_10.png')} />
          </div>
          <div className={styles.AnimationFrame}>
            <img src={require('../../assets/frames/frame_11.png')} />
          </div>
        </div>
      </div>
      <p style={{ fontSize: '26px' }}>Loading ...</p>
    </div>
  );
};

export default RickAndMortyLoading;
