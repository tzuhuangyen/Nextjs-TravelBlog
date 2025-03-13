import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className='hero' id='home'>
      <div className='container h-100'>
        <div className='row h-100 align-items-center justify-content-center text-center'>
          <div className='col-lg-8'>
            <h1 className='display-4 text-white mb-4'>探索世界的美好時刻</h1>
            <p className='lead text-white mb-5'>
              與我們一起發現最真實的旅行體驗，創造專屬於你的精彩回憶
            </p>
            <a href='#signup' className='btn btn-custom btn-primary btn-lg'>
              開始你的旅程
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
