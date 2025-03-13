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
        <ClientBootstrap />
        {children}
      </body>
    </html>
  );
}
