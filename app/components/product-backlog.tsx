import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function ProductBacklog() {
  const backlogItems = [
    { id: 1, title: "ユーザー認証機能の実装", priority: "高", estimate: "5日" },
    { id: 2, title: "ダッシュボードのUI改善", priority: "中", estimate: "3日" },
    { id: 3, title: "パフォーマンス最適化", priority: "中", estimate: "4日" },
    { id: 4, title: "モバイルレスポンシブ対応", priority: "高", estimate: "6日" },
    { id: 5, title: "エラーハンドリングの強化", priority: "低", estimate: "2日" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">プロダクトバックログ</h2>
        <Button>新しいアイテムを追加</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>タイトル</TableHead>
            <TableHead>優先度</TableHead>
            <TableHead>見積もり</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {backlogItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.priority}</TableCell>
              <TableCell>{item.estimate}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

