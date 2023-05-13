import './globals.scss'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

export const metadata = {
  title: 'Microsoft - Cloud, Computers, Apps & Gaming',
  description: 'Microsoft Clone Web Application - Explore Microsoft products and services for your home or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure and more.',
  keywords: 'nextjs, react, javascript, microsoft'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
