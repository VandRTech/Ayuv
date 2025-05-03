"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useClickOutside } from "@/hooks/use-click-outside"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => {
    if (isOpen) onClose()
  })

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b shadow-lg animate-in slide-in-from-top duration-300"
    >
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start">
          Products
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Inspiration
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Pricing
        </Button>
      </div>
    </div>
  )
}
