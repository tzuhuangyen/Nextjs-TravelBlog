'use client';
import { useEffect } from 'react';

export default function ClientBootstrap() {
  useEffect(() => {
    // 只在客户端加载 Bootstrap JS
    // 使用 void 操作符忽略 Promise 的返回值，并告诉 TypeScript 我们不关心类型
    void import('bootstrap/dist/js/bootstrap.bundle.min.js' as any);
  }, []);

  return null; // 这个组件不渲染任何内容
}
