"use client"

import { motion } from "framer-motion"
import { Timeline } from "../components/Timeline"
import { Testimonials } from "../components/Testimonials"
import { Achievements } from "../components/Achievements"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        关于我
      </motion.h1>

      <Tabs defaultValue="journey" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="journey">我的历程</TabsTrigger>
          <TabsTrigger value="achievements">成就与荣誉</TabsTrigger>
          <TabsTrigger value="testimonials">推荐语</TabsTrigger>
        </TabsList>

        <TabsContent value="journey" className="mt-6">
          <Timeline />
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Achievements />
        </TabsContent>

        <TabsContent value="testimonials" className="mt-6">
          <Testimonials />
        </TabsContent>
      </Tabs>
    </div>
  )
}

