"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const designTasks = [
  { id: 1, task: "ホームページのワイヤーフレーム作成", assignee: "田中", status: "進行中", dueDate: "2023-07-15" },
  { id: 2, task: "ロゴデザインの改善", assignee: "佐藤", status: "レビュー中", dueDate: "2023-07-20" },
  { id: 3, task: "モバイルアプリのUI設計", assignee: "鈴木", status: "未着手", dueDate: "2023-07-25" },
  { id: 4, task: "新機能のモックアップ作成", assignee: "高橋", status: "完了", dueDate: "2023-07-10" },
]

const designPrototypes = [
  { id: 1, name: "ホームページ改善案", image: "/placeholder.svg?height=200&width=300", creator: "田中", date: "2023-07-05" },
  { id: 2, name: "新ロゴデザイン", image: "/placeholder.svg?height=200&width=300", creator: "佐藤", date: "2023-07-08" },
  { id: 3, name: "モバイルアプリUI", image: "/placeholder.svg?height=200&width=300", creator: "鈴木", date: "2023-07-12" },
]

export default function DesignDashboard() {
  const [selectedPrototype, setSelectedPrototype] = useState(designPrototypes[0])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>デザインタスク</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>タスク</TableHead>
                <TableHead>担当者</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>期限</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {designTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.assignee}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>デザインプロトタイプ</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={selectedPrototype.id.toString()} onValueChange={(value) => setSelectedPrototype(designPrototypes.find(p => p.id.toString() === value)!)}>
            <TabsList>
              {designPrototypes.map((prototype) => (
                <TabsTrigger key={prototype.id} value={prototype.id.toString()}>{prototype.name}</TabsTrigger>
              ))}
            </TabsList>
            {designPrototypes.map((prototype) => (
              <TabsContent key={prototype.id} value={prototype.id.toString()}>
                <div className="mt-4">
                  <img src={prototype.image} alt={prototype.name} className="w-full h-auto rounded-lg shadow-lg" />
                  <div className="mt-2">
                    <p>作成者: {prototype.creator}</p>
                    <p>作成日: {prototype.date}</p>
                  </div>
                  <Button className="mt-2">フィードバックを送る</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

