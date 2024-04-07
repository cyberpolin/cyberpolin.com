import type { Metadata, Viewport } from "next"

import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import "./css/bootstrap.min.css"
import "./css/fontawesome/css/font-awesome.min.css"
import "./css/animate.min.css"
import "./css/owl.carousel.min.css"
import "./css/bootstrap-select.min.css"
import "./css/flaticon.min.css"
import "./css/magnific-popup.min.css"
import "./css/loader.min.css"
import "./css/skin/skin-1.css"
import "./css/style.css"

export const roboto_init = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700"],
  variable: "--font-roboto",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PROMAVISA",
  description: "Proveedorea de Materiales de Villahermosa.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <>{children}</>
      </body>
    </html>
  )
}
