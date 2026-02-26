'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { GlobalSearchIcon } from '@hugeicons/core-free-icons'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isBlog = pathname === '/blog' || pathname?.startsWith('/blog/')

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Yassr Atti
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Developer & Researcher
        </TextEffect>
      </div>

      {!isBlog && (
        <div className="flex flex-col gap-1 dark:text-white">
          <HugeiconsIcon icon={GlobalSearchIcon} size={18} />
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Spain
          </TextEffect>
        </div>
      )}
    </header>
  )
}
