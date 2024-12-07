import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState, useCallback } from 'react'
import { Input } from "@/components/ui/input"

const apiEndpoints = [
  { id: 1, name: "ユーザー認証", project: "全プロジェクト", method: "POST", endpoint: "/api/auth", status: "稼働中" },
  { id: 2, name: "プロジェクト一覧取得", project: "ウェブアプリ開発", method: "GET", endpoint: "/api/projects", status: "稼働中" },
  { id: 3, name: "タスク作成", project: "モバイルアプリ開発", method: "POST", endpoint: "/api/tasks", status: "開発中" },
  { id: 4, name: "データ同期", project: "システム統合", method: "PUT", endpoint: "/api/sync", status: "テスト中" },
  { id: 5, name: "レポート生成", project: "データ分析ダッシュボード", method: "GET", endpoint: "/api/reports", status: "計画中" },
]

export default function ApiOverview() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredApiEndpoints = useCallback(() => {
    return apiEndpoints.filter(api => 
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.endpoint.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API エンドポイント一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="APIエンドポイントを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>API名</TableHead>
                <TableHead>関連プロジェクト</TableHead>
                <TableHead>メソッド</TableHead>
                <TableHead>エンドポイント</TableHead>
                <TableHead>ステータス</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApiEndpoints().map((api) => (
                <TableRow key={api.id}>
                  <TableCell>{api.name}</TableCell>
                  <TableCell>{api.project}</TableCell>
                  <TableCell>{api.method}</TableCell>
                  <TableCell>{api.endpoint}</TableCell>
                  <TableCell>
                    <Badge variant={api.status === "稼働中" ? "success" : api.status === "開発中" || api.status === "テスト中" ? "warning" : "default"}>
                      {api.status}
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

