import { ReactNode } from "react"
import "./globals.css"
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
})

export const metadata = {
  title: "Spacetime",
  description:
    "A time caspule built with React, Next.js, TailwindCSS and TypeScript",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}