"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const financialData = [
  { month: '1月', revenue: 100000, expenses: 80000, profit: 20000 },
  { month: '2月', revenue: 120000, expenses: 90000, profit: 30000 },
  { month: '3月', revenue: 130000, expenses: 95000, profit: 35000 },
  { month: '4月', revenue: 140000, expenses: 100000, profit: 40000 },
  { month: '5月', revenue: 150000, expenses: 110000, profit: 40000 },
  { month: '6月', revenue: 160000, expenses: 120000, profit: 40000 },
]

export default function BusinessDashboard() {
  const [selectedMonth, setSelectedMonth] = useState(financialData[financialData.length - 1])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>財務概要</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financialData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="収入" />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" name="支出" />
                <Line type="monotone" dataKey="profit" stroke="#ffc658" name="利益" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>月次財務詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>月</TableHead>
                <TableHead>収入</TableHead>
                <TableHead>支出</TableHead>
                <TableHead>利益</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialData.map((data) => (
                <TableRow key={data.month} onClick={() => setSelectedMonth(data)} className="cursor-pointer">
                  <TableCell>{data.month}</TableCell>
                  <TableCell>{data.revenue.toLocaleString()}円</TableCell>
                  <TableCell>{data.expenses.toLocaleString()}円</TableCell>
                  <TableCell>{data.profit.toLocaleString()}円</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{selectedMonth.month}の詳細</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold">収入</h3>
              <p className="text-2xl font-bold text-green-600">{selectedMonth.revenue.toLocaleString()}円</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">支出</h3>
              <p className="text-2xl font-bold text-red-600">{selectedMonth.expenses.toLocaleString()}円</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">利益</h3>
              <p className="text-2xl font-bold text-blue-600">{selectedMonth.profit.toLocaleString()}円</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

