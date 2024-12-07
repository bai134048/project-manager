import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ProjectOverview() {
  const projectStats = [
    { title: '総スプリント数', value: 5, color: 'bg-blue-500' },
    { title: '完了したスプリント', value: 3, color: 'bg-green-500' },
    { title: '残りのタスク', value: 27, color: 'bg-yellow-500' },
    { title: 'チームメンバー', value: 8, color: 'bg-purple-500' },
  ]

  const sprintData = [
    { name: 'Sprint 1', 完了: 20, 残り: 5 },
    { name: 'Sprint 2', 完了: 18, 残り: 7 },
    { name: 'Sprint 3', 完了: 25, 残り: 0 },
    { name: 'Sprint 4', 完了: 15, 残り: 10 },
    { name: 'Sprint 5', 完了: 5, 残り: 20 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projectStats.map((stat, index) => (
          <Card key={index} className={`${stat.color} text-white`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>スプリント進捗</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sprintData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="完了" fill="#4CAF50" />
                <Bar dataKey="残り" fill="#FFC107" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

