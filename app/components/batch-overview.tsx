import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState, useCallback } from 'react'
import { Input } from "@/components/ui/input"

const batchJobs = [
  { id: 1, name: "日次データバックアップ", project: "全プロジェクト", schedule: "毎日 01:00", lastRun: "2023-07-15 01:00", status: "成功" },
  { id: 2, name: "月次レポート生成", project: "ウェブアプリ開発", schedule: "毎月1日 00:00", lastRun: "2023-07-01 00:00", status: "成功" },
  { id: 3, name: "ログファイル解析", project: "モバイルアプリ開発", schedule: "毎日 03:00", lastRun: "2023-07-15 03:00", status: "警告" },
  { id: 4, name: "データ整合性チェック", project: "システム統合", schedule: "毎週日曜 02:00", lastRun: "2023-07-09 02:00", status: "失敗" },
  { id: 5, name: "キャッシュクリア", project: "データ分析ダッシュボード", schedule: "毎日 00:00", lastRun: "2023-07-15 00:00", status: "成功" },
]

export default function BatchOverview() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBatchJobs = useCallback(() => {
    return batchJobs.filter(job => 
      job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.schedule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>バッチ処理一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="バッチジョブを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ジョブ名</TableHead>
                <TableHead>関連プロジェクト</TableHead>
                <TableHead>スケジュール</TableHead>
                <TableHead>最終実行</TableHead>
                <TableHead>ステータス</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBatchJobs().map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.name}</TableCell>
                  <TableCell>{job.project}</TableCell>
                  <TableCell>{job.schedule}</TableCell>
                  <TableCell>{job.lastRun}</TableCell>
                  <TableCell>
                    <Badge variant={job.status === "成功" ? "success" : job.status === "警告" ? "warning" : "destructive"}>
                      {job.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

