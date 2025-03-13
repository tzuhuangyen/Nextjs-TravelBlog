import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // 使用解构赋值来避免未使用变量的警告
    const { email } = await request.json();
    // 這裡可以加入實際的訂閱邏輯
    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (_error) {
    // 使用下划线前缀表示有意忽略的变量
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
