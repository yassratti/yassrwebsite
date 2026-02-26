import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { FlickeringGrid } from '@/components/ui/flickering-grid'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Yassr Atti',
    template: 'Yassr Atti',
  },
  description: 'Yassr Atti personal website',
  icons: {
    icon: '/favicon.ico',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <Script
          src="https://cdn.visitors.now/v.js"
          data-token="391e333f-c437-4dfb-8cee-2189f47ad84c"
        /> */}
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-[family-name:var(--font-inter-tight)]">
            <div className="relative z-10 mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-0 h-30 w-full [mask-image:linear-gradient(to_bottom,transparent,black)]">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={4}
                gridGap={2}
                color="#71717a"
                maxOpacity={0.3}
                flickerChance={0.1}
              />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
