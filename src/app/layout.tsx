import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "N-able EDR powered by SentinelOne",
  description: "Potencia tu seguridad con N-able EDR powered by SentinelOne",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`!scroll-smooth ${manrope.variable}`}>
      <body className={manrope.className}>{children}</body>
    </html>
  )
} 