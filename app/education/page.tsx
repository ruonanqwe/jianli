import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">教育经历</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>四川财经职业学院</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">大数据与财务管理</p>
          <p className="text-gray-600">预计毕业年份：2026.06</p>
          <ul className="list-disc list-inside mt-2">
            <li>GPA：3.31</li>
            <li>相关成就：院级奖项若干，校级互联网+一等奖等诸多奖项</li>
          </ul>
        </CardContent>
      </Card>
      {/* 如果有其他教育经历，可以在这里添加更多的Card组件 */}
    </div>
  )
}

