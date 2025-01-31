"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Trophy, Star, Award, Medal } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "个人独立工作室",
      description: "于2020年3月与6位合伙人成立工作室，目前运营良好",
      date: "2020.03",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "哔哩哔哩账号",
      description: "于哔哩哔哩发布前端视频，共100余条，粉丝于2023年达到6.4w，出售账号税后获利11w左右",
      date: "2023.11",
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: "CSDN社群",
      description: "CSDN成都站活动参与共10余次，社群与相关合伙完成开展3次AIGC座谈会",
      date: "2024.04",
    },
    {
      icon: <Medal className="w-8 h-8 text-purple-500" />,
      title: "个人全栈开发",
      description: "个人独立开发APP共4款，网站上传共40余版，软著申请共3项",
      date: "2024.12",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto">{achievement.icon}</div>
              <CardTitle className="text-lg">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
              <p className="text-xs text-muted-foreground">{achievement.date}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

