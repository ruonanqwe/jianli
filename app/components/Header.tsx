"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60",
            )}
          >
            首页
          </Link>
          <Link
            href="/about"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/about" ? "text-foreground" : "text-foreground/60",
            )}
          >
            关于我
          </Link>
          <Link
            href="/projects"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/projects" ? "text-foreground" : "text-foreground/60",
            )}
          >
            项目经验
          </Link>
          <Link
            href="/skills"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/skills" ? "text-foreground" : "text-foreground/60",
            )}
          >
            技能
          </Link>
          <Link
            href="/contact"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/contact" ? "text-foreground" : "text-foreground/60",
            )}
          >
            联系我
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

