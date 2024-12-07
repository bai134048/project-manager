import { NextResponse } from 'next/server'

let users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' },
]

export async function POST(request: Request) {
  const { name, role, skills } = await request.json()

  // 簡単なユーザー名とパスワードの生成（実際の実装ではより安全な方法を使用してください）
  const username = name.toLowerCase().replace(/\s/g, '')
  const password = Math.random().toString(36).slice(-8)

  const newUser = {
    id: users.length + 1,
    username,
    password,
    name,
    role,
    skills,
  }

  users.push(newUser)

  return NextResponse.json({ id: newUser.id, username, password })
}

