"use client"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 z-0 opacity-50 mix-blend-soft-light", className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <radialGradient id="a" gradientUnits="objectBoundingBox" fx="50%" fy="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#a)" />
      </svg>
    </div>
  )
}

