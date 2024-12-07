"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomerList() {
  const [customers, setCustomers] = useState([
    { id: 1, name: '株式会社A', project: 'プロジェクトX', status: 'アクティブ' },
    { id: 2, name: '株式会社B', project: 'プロジェクトY', status: '完了' },
    { id: 3, name: '株式会社C', project: 'プロジェクトZ', status: '保留中' },
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>顧客管理</CardTitle>
          <CardDescription>プロジェクトに関連する顧客情報を管理します</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="顧客名で検索" />
            <Button>検索</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>顧客一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>顧客名</TableHead>
                <TableHead>プロジェクト</TableHead>
                <TableHead>ステータス</TableHead>
                <TableHead>アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.project}</TableCell>
                  <TableCell>{customer.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">詳細</Button>
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

