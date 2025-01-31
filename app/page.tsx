import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "./components/typewriter-effect"
import { WavyBackground } from "./components/wavy-background"
import { GraduationCap, Code, Lightbulb, Phone } from "lucide-react"

export default function Home() {
  const words = [
    { text: "你好，" },
    { text: "我是" },
    { text: "邓博海", className: "text-blue-500 dark:text-blue-500" },
  ]

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center text-center">
        <TypewriterEffect words={words} />
        <p className="text-neutral-600 dark:text-neutral-200 text-xl mt-4 px-4">大学生 | 未来工程师 | 创新者</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Link href="/about" className="group">
            <Button variant="outline" className="w-full">
              <GraduationCap className="mr-2 h-4 w-4 group-hover:text-blue-500 transition-colors" />
              关于我
            </Button>
          </Link>
          <Link href="/projects" className="group">
            <Button variant="outline" className="w-full">
              <Code className="mr-2 h-4 w-4 group-hover:text-green-500 transition-colors" />
              项目
            </Button>
          </Link>
          <Link href="/skills" className="group">
            <Button variant="outline" className="w-full">
              <Lightbulb className="mr-2 h-4 w-4 group-hover:text-yellow-500 transition-colors" />
              技能
            </Button>
          </Link>
          <Link href="/contact" className="group">
            <Button variant="outline" className="w-full">
              <Phone className="mr-2 h-4 w-4 group-hover:text-red-500 transition-colors" />
              联系
            </Button>
          </Link>
        </div>
      </div>
    </WavyBackground>
  )
}

