"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

interface CopyDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export function CopyDialog({ isOpen, onClose, title, content }: CopyDialogProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      toast({
        title: "复制成功",
        description: `${title}已复制到剪贴板`,
      })
    } catch (err) {
      toast({
        title: "复制失败",
        description: "请手动复制",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>点击下方按钮复制</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <p className="flex-1 text-sm text-muted-foreground">{content}</p>
          <Button onClick={handleCopy}>复制</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

