import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')

  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/actions/:path*'],
}
