/** @type {import('next').NextConfig} */
const nextConfig = {
  // 合并 sassOptions 配置
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  // 部署到 GitHub Pages 的配置
  output: 'export', // 启用静态导出
  images: {
    unoptimized: true, // 对于 GitHub Pages 部署需要
  },
  basePath: process.env.NODE_ENV === 'production' ? '/travelBlog' : '', // 替换为您的仓库名
  assetPrefix: process.env.NODE_ENV === 'production' ? '/travelBlog/' : '', // 替换为您的仓库名
};

module.exports = nextConfig;
