"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const apiEndpoints = [
  { id: 1, name: "ユーザー認証", method: "POST", endpoint: "/api/auth", status: "稼働中" },
  { id: 2, name: "プロジェクト一覧取得", method: "GET", endpoint: "/api/projects", status: "稼働中" },
  { id: 3, name: "タスク作成", method: "POST", endpoint: "/api/tasks", status: "開発中" },
  { id: 4, name: "レポート生成", method: "GET", endpoint: "/api/reports", status: "計画中" },
]

const apiDocumentation = [
  {
    id: 1,
    name: "ユーザー認証",
    description: "ユーザーの認証を行い、アクセストークンを発行します。",
    endpoint: "/api/auth",
    method: "POST",
    parameters: [
      { name: "username", type: "string", description: "ユーザー名" },
      { name: "password", type: "string", description: "パスワード" },
    ],
    responses: [
      { code: "200", description: "認証成功。アクセストークンを返します。" },
      { code: "401", description: "認証失敗。" },
    ],
  },
  // 他のAPIエンドポイントのドキュメントをここに追加
]

export default function ApiDashboard() {
  const [selectedApi, setSelectedApi] = useState(apiDocumentation[0])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API エンドポイント</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>名前</TableHead>
                <TableHead>メソッド</TableHead>
                <TableHead>エンドポイント</TableHead>
                <TableHead>ステータス</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiEndpoints.map((api) => (
                <TableRow key={api.id}>
                  <TableCell>{api.name}</TableCell>
                  <TableCell>{api.method}</TableCell>
                  <TableCell>{api.endpoint}</TableCell>
                  <TableCell>{api.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API ドキュメント</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={selectedApi.id.toString()} onValueChange={(value) => setSelectedApi(apiDocumentation.find(a => a.id.toString() === value)!)}>
            <TabsList>
              {apiDocumentation.map((api) => (
                <TabsTrigger key={api.id} value={api.id.toString()}>{api.name}</TabsTrigger>
              ))}
            </TabsList>
            {apiDocumentation.map((api) => (
              <TabsContent key={api.id} value={api.id.toString()}>
                <div className="mt-4 space-y-4">
                  <h3 className="text-lg font-semibold">{api.name}</h3>
                  <p>{api.description}</p>
                  <div>
                    <strong>エンドポイント:</strong> {api.endpoint}
                  </div>
                  <div>
                    <strong>メソッド:</strong> {api.method}
                  </div>
                  <div>
                    <strong>パラメータ:</strong>
                    <ul className="list-disc list-inside">
                      {api.parameters.map((param, index) => (
                        <li key={index}>{param.name} ({param.type}): {param.description}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>レスポンス:</strong>
                    <ul className="list-disc list-inside">
                      {api.responses.map((response, index) => (
                        <li key={index}>{response.code}: {response.description}</li>
                      ))}
                    </ul>
                  </div>
                  <Button>テストコンソールを開く</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

