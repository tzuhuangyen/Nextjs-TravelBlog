'use client';
import React from 'react';
import { Menu, X } from 'lucide-react';
import styles from '../assets/Navigation.module.css';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav className={`${styles.navbar} fixed-top w-100 py-3 px-4`}>
      <div className='container-fluid container-lg'>
        <div className='row align-items-center'>
          {/* Logo 部分 */}
          <div className='col-6 col-md-4'>
            <h1 className='fs-4 fw-bold mb-0'>Travel Blog</h1>
          </div>

          {/* 桌面导航链接 - 中间部分 */}
          <div className='col-md-4 d-none d-md-block text-center'>
            <div className='d-flex justify-content-center gap-4'>
              <a
                href='#home'
                className={styles.navLink}
                // className='text-decoration-none'
                // style={{ color: '#faf5e4', transition: 'color 0.3s' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
              >
                首頁
              </a>
              <a
                href='#about'
                className={styles.navLink}
                onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
              >
                關於我們
              </a>
              <a
                href='#features'
                className={styles.navLink}
                onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
              >
                特色
              </a>
              <a
                href='#testimonials'
                className={styles.navLink}
                onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
              >
                評價
              </a>
            </div>
          </div>

          {/* 注册按钮 - 在桌面上显示在右侧 */}
          <div className='col-md-4 d-none d-md-flex justify-content-end'>
            <a
              href='#signup'
              className={`fw-bold px-4 py-2 btn ${styles.signupButton}`}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#e5a601';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f8b401';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              立即註冊
            </a>
          </div>

          {/* 移动设备汉堡菜单按钮 */}
          <div className='col-6 d-md-none text-end'>
            <button
              className='btn border-0 p-0'
              style={{ color: '#faf5e4' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? '關閉選單' : '打開選單'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动设备下拉菜单 */}
      {isMenuOpen && (
        <div
          className='position-absolute w-100 start-0 shadow d-md-none'
          style={{
            top: '62px',
            backgroundColor: '#135c51',
            zIndex: 1030,
          }}
        >
          <div className='d-flex flex-column py-3'>
            <a
              href='#home'
              className={`${styles.navLink} ${styles.mobileMenuItem}`}
              onClick={() => setIsMenuOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
            >
              首頁
            </a>
            <a
              href='#about'
              className={`${styles.navLink} ${styles.mobileMenuItem}`}
              style={{ color: '#faf5e4' }}
              onClick={() => setIsMenuOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
            >
              關於我們
            </a>
            <a
              href='#features'
              className={`${styles.navLink} ${styles.mobileMenuItem}`}
              onClick={() => setIsMenuOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
            >
              特色
            </a>
            <a
              href='#testimonials'
              className={`${styles.navLink} ${styles.mobileMenuItem}`}
              onClick={() => setIsMenuOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = '#f8b401')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#faf5e4')}
            >
              評價
            </a>
            <div className='text-center mt-2'>
              <a
                href='#signup'
                className={styles.mobileSignupButton}
                onClick={() => setIsMenuOpen(false)}
              >
                立即註冊
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
