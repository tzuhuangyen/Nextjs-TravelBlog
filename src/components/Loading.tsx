'use client';
import React, { useEffect, useRef } from 'react';
import '../assets/loading.css'; // 引入 CSS 文件

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = '載入中...' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 創建飛機軌跡上的點
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const planeLoader = container.querySelector('.plane-loader');

    // 清除之前的點
    const oldDots = container.querySelectorAll('.dot');
    oldDots.forEach((dot) => dot.remove());

    // 創建新的點
    const createDot = () => {
      if (!planeLoader) return;

      const dot = document.createElement('div');
      dot.className = 'dot';

      // 獲取飛機元素的位置
      const plane = container.querySelector('.plane');
      if (plane) {
        const rect = plane.getBoundingClientRect();
        const loaderRect = planeLoader.getBoundingClientRect();

        // 設置點的位置（相對於 plane-loader）
        dot.style.left = `${rect.left - loaderRect.left + rect.width / 2}px`;
        dot.style.top = `${rect.top - loaderRect.top + rect.height / 2}px`;

        planeLoader.appendChild(dot);

        // 添加淡出動畫
        dot.style.animation = 'dotFade 1s forwards';

        // 動畫結束後移除點
        setTimeout(() => {
          dot.remove();
        }, 1000);
      }
    };

    // 每 100ms 創建一個點
    const interval = setInterval(createDot, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='loading-container' ref={containerRef}>
      <div className='plane-loader'>
        <div className='plane'>✈️</div>
      </div>
      {message && <div className='mt-4 text-center'>{message}</div>}
    </div>
  );
};

export default Loading;
