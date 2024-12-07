"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const batchJobs = [
  { id: 1, name: "日次データバックアップ", status: "完了", lastRun: "2023-07-14 01:00", nextRun: "2023-07-15 01:00" },
  { id: 2, name: "月次レポート生成", status: "待機中", lastRun: "2023-06-30 23:00", nextRun: "2023-07-31 23:00" },
  { id: 3, name: "ユーザーデータクリーンアップ", status: "実行中", lastRun: "2023-07-07 03:00", nextRun: "2023-07-14 03:00" },
  { id: 4, name: "システムログ解析", status: "エラー", lastRun: "2023-07-13 02:00", nextRun: "2023-07-14 02:00" },
]

export default function BatchDashboard() {
  const [selectedJob, setSelectedJob] = useState(batchJobs[0])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>バッチジョブ一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ジョブ名</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>最終実行</TableHead>
                <TableHead>次回実行</TableHead>
                <TableHead>アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batchJobs.map((job) => (
                <TableRow key={job.id} onClick={() => setSelectedJob(job)} className="cursor-pointer">
                  <TableCell>{job.name}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.lastRun}</TableCell>
                  <TableCell>{job.nextRun}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">詳細</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{selectedJob.name} の詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <strong>ステータス:</strong> {selectedJob.status}
            </div>
            <div>
              <strong>最終実行:</strong> {selectedJob.lastRun}
            </div>
            <div>
              <strong>次回実行:</strong> {selectedJob.nextRun}
            </div>
            <div>
              <strong>進捗状況:</strong>
              <Progress value={33} className="mt-2" />
            </div>
            <div className="space-x-2">
              <Button>今すぐ実行</Button>
              <Button variant="outline">スケジュール変更</Button>
              <Button variant="destructive">ジョブ停止</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

