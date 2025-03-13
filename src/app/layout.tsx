import 'bootstrap/dist/css/bootstrap.css';
import '../assets/all.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientBootstrap from './ClientBootstrap';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='zh-TW'>
      <body>
        <head>
          {/* 添加 Bootstrap CDN 链接 */}
          <link
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
            rel='stylesheet'
            integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
            crossOrigin='anonymous'
          />
        </head>
        <ClientBootstrap />
        {children}
      </body>
    </html>
  );
}
