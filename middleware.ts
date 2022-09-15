import { NextRequest, NextResponse } from 'next/server'

const accessTokensByClient = JSON.parse(
  process.env.ACCESS_TOKENS_BY_CLIENT || '{}'
) as Record<string, string>
const allAccessTokens = Object.values(accessTokensByClient)

export async function middleware(req: NextRequest) {
  // We do not want authenticatiojn for OPTIONS requests so that CORS checks can pass
  if (req.method === 'OPTIONS') return NextResponse.next()

  const token = req.headers.get('authorization')?.split('Bearer ')[1]

  if (!token || !allAccessTokens.includes(token)) {
    return NextResponse.rewrite(new URL('/api/auth/unauthorized', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Routes when coming from `process.env.API_HOST` which are rewritten to not have `/api` path
    '/actions/:path*',
    // Routes when coming from `developers.lfca.ngo`
    '/api/actions/:path*',
  ],
}
