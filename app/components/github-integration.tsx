"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function GitHubIntegration() {
  const [repos, setRepos] = useState([
    { name: 'project-a', lastCommit: '2023-06-10', openIssues: 5 },
    { name: 'project-b', lastCommit: '2023-06-09', openIssues: 2 },
    { name: 'project-c', lastCommit: '2023-06-08', openIssues: 0 },
  ])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>GitHub連携</CardTitle>
          <CardDescription>プロジェクトのGitHubリポジトリを管理します</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="リポジトリURL" />
            <Button>追加</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>連携済みリポジトリ</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>リポジトリ名</TableHead>
                <TableHead>最終コミット</TableHead>
                <TableHead>未解決Issue数</TableHead>
                <TableHead>アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repos.map((repo) => (
                <TableRow key={repo.name}>
                  <TableCell>{repo.name}</TableCell>
                  <TableCell>{repo.lastCommit}</TableCell>
                  <TableCell>{repo.openIssues}</TableCell>
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

