'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Laptop, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ColorMode = 'light' | 'dark' | 'system'

const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('system')

  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode') as ColorMode
    if (savedMode) {
      setColorMode(savedMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode)
    const isDark = 
      colorMode === 'dark' || 
      (colorMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    document.documentElement.classList.toggle('dark', isDark)
  }, [colorMode])

  return [colorMode, setColorMode] as const
}

const ColorModeIcon = ({ colorMode }: { colorMode: ColorMode }) => {
  switch (colorMode) {
    case 'light':
      return <Sun className="h-[1.2rem] w-[1.2rem]" />
    case 'dark':
      return <Moon className="h-[1.2rem] w-[1.2rem]" />
    default:
      return <Laptop className="h-[1.2rem] w-[1.2rem]" />
  }
}

export function Header() {
  const [colorMode, setColorMode] = useColorMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <ColorModeIcon colorMode={colorMode} />
                <span className="sr-only">Toggle color mode</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setColorMode('light')}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setColorMode('dark')}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setColorMode('system')}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">LOGO</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="hidden transition-colors hover:text-foreground/80 text-foreground/60 md:block">
              Home
            </Link>
            <Link href="/about" className="hidden transition-colors hover:text-foreground/80 text-foreground/60 md:block">
              About
            </Link>
            <Link href="/contact" className="hidden transition-colors hover:text-foreground/80 text-foreground/60 md:block">
              Contact
            </Link>
          </nav>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[200px] lg:w-[250px]"
            />
          </div>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="mt-2 flex flex-col space-y-3">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}