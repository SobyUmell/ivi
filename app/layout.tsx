
import './globals.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer';
import { inter, pd } from './fonts';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pd.variable}`}>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <Script src='./slider3d.js'/>
    </html>
  )
}
