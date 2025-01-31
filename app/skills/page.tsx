"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      name: "技术技能",
      skills: [
        { name: "[python]", level: 80 },
        { name: "[uniapp]", level: 75 },
        { name: "[vue]", level: 70 },
        { name: "[java]", level: 70 },
        { name: "[html]", level: 85 },
      ],
    },
    {
      name: "软技能",
      skills: [
        { name: "团队协作", level: 95 },
        { name: "沟通能力", level: 90 },
        { name: "问题解决", level: 85 },
        { name: "时间管理", level: 90 },
      ],
    },
    {
      name: "语言能力",
      skills: [
        { name: "中文（母语）", level: 100 },
        { name: "英语", level: 60 },
        { name: "[其他语言]", level: 20 },
      ],
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
        我的技能
      </motion.h1>
      <Tabs defaultValue="技术技能" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {skillCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <Card>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

