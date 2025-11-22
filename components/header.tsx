"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-accent bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo-blanco-naranja.png" alt="Squaretrify" className="h-20 w-20" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#servicios"
              className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            >
              Servicios
            </a>
            <a
              href="#tecnologia"
              className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            >
              Tecnología
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-accent py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-sm font-medium uppercase tracking-wider">
                Servicios
              </a>
              <a href="#tecnologia" className="text-sm font-medium uppercase tracking-wider">
                Tecnología
              </a>
              <a href="#contacto" className="text-sm font-medium uppercase tracking-wider">
                Contacto
              </a>
              <Button className="border-2 border-accent bg-accent text-background">CONSULTAR</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
