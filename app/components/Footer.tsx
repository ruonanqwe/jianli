import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { CopyDialog } from "./CopyDialog"

const Footer = () => {
  const [dialogConfig, setDialogConfig] = useState<{
    isOpen: boolean
    title: string
    content: string
  }>({
    isOpen: false,
    title: "",
    content: "",
  })

  const handleShowDialog = (title: string, content: string) => {
    setDialogConfig({
      isOpen: true,
      title,
      content,
    })
  }

  const handleCloseDialog = () => {
    setDialogConfig((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">关于我</h3>
            <p className="text-sm text-muted-foreground">大学生，热爱技术与创新，致力于通过技术改变世界。</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  关于我
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground">
                  项目经验
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  博客文章
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  联系方式
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系方式</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>邮箱：1963876196@qq.com</li>
              <li>电话：17318132503</li>
              <li>地址：四川省成都市成华区</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">社交媒体</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={() => handleShowDialog("微信号", "BelieveInLimerence")}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229 .826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.49.49 0 0 1 .177-.554C23.23 18.5 24.2 16.863 24.2 15c0-3.37-3.2-6.093-7.262-6.142zM15.99 11.58c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
                </svg>
                <span className="sr-only">WeChat</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleShowDialog("QQ号", "1963876196")}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z" />
                </svg>
                <span className="sr-only">QQ</span>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/ruonanqwe" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://blog.csdn.net/2301_78526554?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.472-7.517a2.526 2.526 0 0 1-.083-.806c0-.29.021-.556.063-.797.042-.241.103-.46.184-.656.081-.196.18-.37.297-.524.117-.154.252-.287.405-.399.153-.112.327-.198.522-.259a2.37 2.37 0 0 1 .639-.091c.212 0 .404.026.577.078.173.052.329.124.468.216.139.092.261.201.367.327.106.126.196.261.27.405.074.144.133.296.176.456.043.16.072.321.087.483a3.83 3.83 0 0 1 0 .492 3.238 3.238 0 0 1-.087.483 2.97 2.97 0 0 1-.176.456 2.457 2.457 0 0 1-.27.405 2.003 2.003 0 0 1-.367.327 1.837 1.837 0 0 1-.468.216 1.796 1.796 0 0 1-.577.078c-.212 0-.404-.026-.577-.078a1.837 1.837 0 0 1-.468-.216 2.003 2.003 0 0 1-.367-.327 2.457 2.457 0 0 1-.27-.405 2.97 2.97 0 0 1-.176-.456 3.238 3.238 0 0 1-.087-.483 3.83 3.83 0 0 1 0-.492c.015-.162.044-.323.087-.483a2.97 2.97 0 0 1 .176-.456zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                  <span className="sr-only">CSDN</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">© 2024 邓博海. 保留所有权利.</div>
      </div>
      <CopyDialog
        isOpen={dialogConfig.isOpen}
        onClose={handleCloseDialog}
        title={dialogConfig.title}
        content={dialogConfig.content}
      />
    </footer>
  )
}

export default Footer

