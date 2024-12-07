"use client"

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "田中太郎", role: "プロダクトオーナー", avatar: "/placeholder-user.jpg", skills: ["戦略", "コミュニケーション"] },
    { id: 2, name: "鈴木花子", role: "スクラムマスター", avatar: "/placeholder-user.jpg", skills: ["アジャイル", "リーダーシップ"] },
    { id: 3, name: "佐藤次郎", role: "開発者", avatar: "/placeholder-user.jpg", skills: ["React", "Node.js"] },
    { id: 4, name: "山田優子", role: "開発者", avatar: "/placeholder-user.jpg", skills: ["Python", "機械学習"] },
    { id: 5, name: "中村健太", role: "デザイナー", avatar: "/placeholder-user.jpg", skills: ["UI/UX", "Figma"] },
  ])

  const [newMember, setNewMember] = useState({ name: '', role: '', skills: '' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const roleColors = {
    "プロダクトオーナー": "bg-blue-500",
    "スクラムマスター": "bg-green-500",
    "開発者": "bg-yellow-500",
    "デザイナー": "bg-purple-500",
  }

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault()
    // ここで新しいメンバーをAPIに送信し、アカウントを作成します
    const response = await fetch('/api/create-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newMember.name,
        role: newMember.role,
        skills: newMember.skills.split(',').map(skill => skill.trim()),
      }),
    })

    if (response.ok) {
      const { id, username, password } = await response.json()
      setTeamMembers([...teamMembers, { id, name: newMember.name, role: newMember.role, avatar: "/placeholder-user.jpg", skills: newMember.skills.split(',').map(skill => skill.trim()) }])
      alert(`新しいメンバーが追加されました。\nユーザー名: ${username}\nパスワード: ${password}`)
      setNewMember({ name: '', role: '', skills: '' })
      setIsDialogOpen(false)
    } else {
      alert('メンバーの追加に失敗しました。')
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">チーム管理</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>新しいメンバーを追加</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新しいメンバーを追加</DialogTitle>
              <DialogDescription>
                新しいチームメンバーの情報を入力してください。
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddMember}>
              <div className="grid gap-4 py-4">
                <Input
                  placeholder="名前"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                />
                <Input
                  placeholder="役割"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                />
                <Input
                  placeholder="スキル（カンマ区切り）"
                  value={newMember.skills}
                  onChange={(e) => setNewMember({ ...newMember, skills: e.target.value })}
                />
              </div>
              <DialogFooter>
                <Button type="submit">追加</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardHeader className={`${roleColors[member.role]} text-white`}>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

