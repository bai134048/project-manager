import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const projectContracts = [
  { id: 1, name: "ウェブアプリ開発", client: "A社", estimatedCost: "¥5,000,000", actualCost: "¥4,800,000", status: "進行中" },
  { id: 2, name: "モバイルアプリ開発", client: "B社", estimatedCost: "¥3,000,000", actualCost: "¥3,200,000", status: "完了" },
  { id: 3, name: "システム統合", client: "C社", estimatedCost: "¥8,000,000", actualCost: "-", status: "見積もり段階" },
  { id: 4, name: "データ分析ダッシュボード", client: "D社", estimatedCost: "¥2,500,000", actualCost: "¥2,300,000", status: "最終段階" },
]

export default function BusinessOverview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>プロジェクト契約・見積もり一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>プロジェクト名</TableHead>
                <TableHead>クライアント</TableHead>
                <TableHead>見積もり金額</TableHead>
                <TableHead>実際のコスト</TableHead>
                <TableHead>ステータス</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectContracts.map((contract) => (
                <TableRow key={contract.id}>
                  <TableCell>{contract.name}</TableCell>
                  <TableCell>{contract.client}</TableCell>
                  <TableCell>{contract.estimatedCost}</TableCell>
                  <TableCell>{contract.actualCost}</TableCell>
                  <TableCell>
                    <Badge variant={contract.status === "完了" ? "secondary" : "default"}>
                      {contract.status}
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

