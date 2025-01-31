"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export function Timeline() {
  const timelineItems = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      date: "[2021.09] - [2024.06]",
      title: "[华商理工学院]",
      subtitle: "[电子商务]",
      description: "[在校3年，参与比赛若干，获得电子商务职业技能大赛市赛个人直播一等奖，校级五星匠士]",
      type: "education",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      date: "[2024.09] - [至今]",
      title: "[四川财经职业技术学院]",
      subtitle: "[大数据与财务管理]",
      description: "[班长]",
      type: "experience",
    },
  
    // 添加更多时间线项目...
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      <div className="space-y-8 relative">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex gap-4">
              <div className="flex-none">
                <div className="bg-background border-2 border-primary rounded-full p-2 relative z-10">{item.icon}</div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.subtitle}</p>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

