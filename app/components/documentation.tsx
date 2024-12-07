"use client"

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"

export default function Documentation() {
  const [docs] = useState([
    {
      title: 'プロジェクト概要',
      content: 'プロジェクト概要は、React Hooksを使用して状態を管理し、shadcn/uiのCardコンポーネントを使用してデータを表示します。データはAPIから非同期で取得されます。',
    },
    {
      title: 'スプリント管理',
      content: 'スプリント管理は、React Context APIを使用してスプリントの状態を管理します。各スプリントはReduxで管理され、WebSocketを使用してリアルタイムで更新されます。',
    },
    {
      title: 'プロダクトバックログ',
      content: 'プロダクトバックログは、React DnDライブラリを使用してドラッグアンドドロップ機能を実装しています。データはGraphQLを使用してサーバーと同期されます。',
    },
    {
      title: 'カンバンボード',
      content: 'カンバンボードは、React Beautiful DnDを使用して実装されています。状態管理にはReduxを使用し、変更はWebSocketを通じてリアルタイムで同期されます。',
    },
    {
      title: 'チーム管理',
      content: 'チーム管理は、React Hooksと状態管理にはRecoilを使用しています。ユーザー認証にはAuth0を利用し、ロールベースのアクセス制御を実装しています。',
    },
    {
      title: 'バーンダウンチャート',
      content: 'バーンダウンチャートは、Recharts.jsライブラリを使用して実装されています。データはREST APIから取得され、D3.jsを使用して高度なデータ視覚化を行っています。',
    },
    {
      title: 'GitHub連携',
      content: 'GitHub連携は、GitHub APIを使用して実装されています。OAuth2.0を使用して認証を行い、Webhookを使用してリポジトリの変更をリアルタイムで取得します。',
    },
    {
      title: '顧客管理',
      content: '顧客管理は、React TableライブラリとReact Queryを使用してデータの取得と表示を行っています。顧客データはFirestoreに保存され、リアルタイム更新に対応しています。',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredDocs = useCallback(() => {
    return docs.filter(doc => 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [docs, searchTerm])

  return (
    <Card>
      <CardHeader>
        <CardTitle>技術文書</CardTitle>
        <CardDescription>各機能の技術的な実装詳細を確認できます</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="ドキュメントを検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          {filteredDocs().map((doc, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{doc.title}</AccordionTrigger>
              <AccordionContent>{doc.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

