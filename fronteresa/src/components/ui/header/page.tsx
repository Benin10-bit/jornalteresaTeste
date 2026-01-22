'use client'

import Image from "next/image"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        flex items-center justify-between
        px-16 py-4
        bg-(--botoes)
        border-b border-(--bordas)
        shadow-(--shadow)
        backdrop-blur
        transition-colors
      "
    >
      {/* Logo + nome */}
      <div className="flex items-center gap-3">
        <div className="relative w-16 h-16">
          <Image
            src="/logo_teresa.png"
            alt="Logo Teresa"
            fill
            className="object-contain"
            priority
          />
        </div>

        <span className="text-(--titulo) font-semibold tracking-wide">
          Jornal Teresa
        </span>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex gap-10">
        {["Home", "Notícias", "Sobre"].map((item) => (
          <a
            key={item}
            href={`/${item === "Home" ? "" : item.toLowerCase()}`}
            className="
              relative text-(--links)
              transition-colors duration-200
              hover:text-(--hover)
              after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:w-0
              after:bg-(--hover)
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-7 h-7 text-(--text) transition-transform hover:scale-110" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="
            bg-(--background)
            border-l border-(--bordas)
            text-(--text)
            animate-in slide-in-from-right duration-300
          "
        >
          <SheetHeader>
            <SheetTitle className="text-(--titulo)">
              Menu
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-10 flex flex-col gap-8 text-lg">
            {["Home", "Notícias", "Sobre"].map((item) => (
              <SheetClose asChild key={item}>
                <a
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="
                    text-(--links)
                    transition-all duration-200
                    hover:text-(--hover)
                    hover:translate-x-1
                  "
                >
                  {item}
                </a>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
