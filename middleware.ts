import { NextRequest, NextResponse } from 'next/server'

const accessTokensByClient = JSON.parse(
  process.env.ACCESS_TOKENS_BY_CLIENT || '{}'
) as Record<string, string>
const allAccessTokens = Object.values(accessTokensByClient)

export function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split('Bearer ')[1]

  if (!token || !allAccessTokens.includes(token)) {
    return NextResponse.rewrite(new URL('/api/auth/unauthorized', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Routes when coming from `api.lfca.ngo`
    '/actions/:path*',
    // Routes when coming from `developers.lfca.ngo`
    '/api/actions/:path*',
  ],
}
