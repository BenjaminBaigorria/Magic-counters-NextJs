

import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Magic Counters',
  description: ' A deck creator front end',

}
export const vieport = {
  themeColor: 'black'
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>

          {children}
        </div>
      </body>
    </html>
  )
}