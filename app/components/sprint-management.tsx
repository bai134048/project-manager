import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SprintManagement() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>現在のスプリント</CardTitle>
          <CardDescription>スプリント 4 (2週間)</CardDescription>
        </CardHeader>
        <CardContent>
          <p>開始日: 2023-06-01</p>
          <p>終了日: 2023-06-14</p>
          <p>残りのタスク: 8</p>
        </CardContent>
        <CardFooter>
          <Button>詳細を見る</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>次のスプリント</CardTitle>
          <CardDescription>スプリント 5 (2週間)</CardDescription>
        </CardHeader>
        <CardContent>
          <p>開始日: 2023-06-15</p>
          <p>終了日: 2023-06-28</p>
          <p>計画されたタスク: 12</p>
        </CardContent>
        <CardFooter>
          <Button>計画を編集</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>新しいスプリントを作成</CardTitle>
        </CardHeader>
        <CardContent>
          <p>次のスプリントの計画を立てましょう。</p>
        </CardContent>
        <CardFooter>
          <Button>スプリントを作成</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

