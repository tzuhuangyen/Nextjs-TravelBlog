'use client';
import { useEffect } from 'react';

export default function ClientBootstrap() {
  useEffect(() => {
    // 只在客户端加载 Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null; // 这个组件不渲染任何内容
}
