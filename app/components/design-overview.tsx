import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useState, useCallback } from 'react'
import { Input } from "@/components/ui/input"

const designDocuments = [
  { id: 1, name: "システム設計書", project: "ウェブアプリ開発", lastUpdated: "2023-07-10", status: "承認済み" },
  { id: 2, name: "データベース設計", project: "ウェブアプリ開発", lastUpdated: "2023-07-12", status: "レビュー中" },
  { id: 3, name: "UI/UXデザイン", project: "モバイルアプリ開発", lastUpdated: "2023-07-15", status: "作業中" },
  { id: 4, name: "API設計書", project: "システム統合", lastUpdated: "2023-07-08", status: "承認済み" },
  { id: 5, name: "セキュリティ設計", project: "データ分析ダッシュボード", lastUpdated: "2023-07-14", status: "レビュー中" },
]

export default function DesignOverview() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDesignDocuments = useCallback(() => {
    return designDocuments.filter(doc => 
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.status.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>設計ドキュメント一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="設計ドキュメントを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ドキュメント名</TableHead>
                <TableHead>関連プロジェクト</TableHead>
                <TableHead>最終更新日</TableHead>
                <TableHead>ステータス</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDesignDocuments().map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.project}</TableCell>
                  <TableCell>{doc.lastUpdated}</TableCell>
                  <TableCell>
                    <Badge variant={doc.status === "承認済み" ? "success" : doc.status === "レビュー中" ? "warning" : "default"}>
                      {doc.status}
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

