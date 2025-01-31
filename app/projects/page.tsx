"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "AutoGPT-Next-Web",
      description: "基于AutoGPT的AI智能代理系统的Web实现",
      fullDescription:
        "这是一个基于AutoGPT的开源项目，允许用户在浏览器中配置、部署和运行自主AI代理。项目使用TypeScript开发，实现了AI代理的自主决策、任务执行和结果反馈等功能。通过该系统，用户可以快速部署自己的AI助手，执行各种自动化任务。",
      skills: ["TypeScript", "Next.js", "OpenAI API", "React", "TailwindCSS"],
      link: "https://github.com/ruonanqwe/AutoGPT-Next-Web",
    },
    {
      title: "农财通 - 农业金融服务平台",
      description: "专注于服务农业产业链的综合性金融科技平台",
      fullDescription:
        "这是一个面向农业产业链的综合服务平台，致力于为农户、农业企业和金融机构搭建高效、透明的金融服务系统。平台集成了供应链金融、农业保险、信贷服务等多个模块，实现了农业产业链的数字化转型。",
      skills: ["TypeScript", "Next.js", "TailwindCSS", "金融科技", "农业科技"],
      link: "https://github.com/ruonanqwe/nongcaitong",
    },
    {
      title: "mall电商系统",
      description: "基于SpringBoot+MyBatis的电商系统",
      fullDescription:
        "这是一个完整的电商系统，采用SpringBoot+MyBatis实现，并使用Docker容器化部署。系统包含商品管理、订单管理、会员管理、促销管理、内容管理、统计报表、财务管理等模块。项目采用前后端分离架构，包含了完整的用户权限管理和安全机制。",
      skills: ["Java", "SpringBoot", "MyBatis", "Redis", "Docker", "MySQL", "MongoDB"],
      link: "https://github.com/macrozheng/mall",
    },
    {
      title: "Social School",
      description: "校园社交平台",
      fullDescription:
        "专注于提供校园社交服务的平台，为学生提供信息分享、活动组织、社团管理等功能。项目采用现代化的技术栈，实现了实时通讯、社交互动、内容分享等核心功能。",
      skills: ["React", "Node.js", "MongoDB", "WebSocket", "社交网络"],
      link: "https://github.com/ruonan101/Social_School",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        项目经验
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                      {project.skills.length > 3 && <Badge variant="outline">+{project.skills.length - 3}</Badge>}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="mb-6 text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 hover:underline"
                  >
                    在GitHub上查看项目 →
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

