import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// 注意: これは簡単な例です。実際の実装では、安全なパスワードハッシュと適切なデータベースを使用してください。
const users = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' },
]

export async function POST(request: Request) {
  const { username, password } = await request.json()
  const user = users.find(u => u.username === username && u.password === password)

  if (user) {
    // セッションの作成（実際の実装ではより安全な方法を使用してください）
    cookies().set('user_id', user.id.toString(), { httpOnly: true })
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}

