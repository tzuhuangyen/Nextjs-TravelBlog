import React from 'react';
import '../assets/footer.css';
const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
            <h3 className='h5 mb-3'>Travel Blog</h3>
            <p className='small'>探索世界的美好時刻，創造難忘的旅行回憶。</p>
          </div>
          <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
            <h4 className='h6 mb-3'>快速連結</h4>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#home'>首頁</a>
              </li>
              <li className='mb-2'>
                <a href='#about'>關於我們</a>
              </li>
              <li className='mb-2'>
                <a href='#features'>特色服務</a>
              </li>
              <li className='mb-2'>
                <a href='#signup'>註冊</a>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6'>
            <h4 className='h6 mb-3'>社群媒體</h4>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a href='#'>Facebook</a>
              </li>
              <li className='mb-2'>
                <a href='#'>Instagram</a>
              </li>
              <li className='mb-2'>
                <a href='#'>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='border-top py-4'>
          <p className='text-center mb-0 small'>
            &copy; 2024 Travel Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
