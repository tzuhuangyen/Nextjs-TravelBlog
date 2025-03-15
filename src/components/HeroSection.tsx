import React from 'react';
import styles from '../assets/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id='home'>
      <div className='container h-100'>
        <div className='row h-100 align-items-center justify-content-center text-center'>
          <div className={`col-lg-8 ${styles.heroContent}`}>
            <h1 className='display-4  mb-4'>探索世界的美好時刻</h1>
            <p className='lead mb-5'>
              與我們一起發現最真實的旅行體驗，創造專屬於你的精彩回憶
            </p>
            <a href='#signup' className={styles.heroButton}>
              開始你的旅程
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
