import { revalidatePath } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'

type SanityWebhookBody = {
  _id?: string
  _type?: string
  slug?: { current?: string }
  type?: string
}

const PATHS_BY_TYPE: Record<string, string[]> = {
  siteSettings: [
    '/',
    '/en',
    '/id',
    '/en/about',
    '/id/about',
    '/en/bungalows',
    '/id/bungalows',
    '/en/faq',
    '/id/faq',
    '/en/getting-here',
    '/id/getting-here',
    '/en/yoga-retreat',
    '/id/yoga-retreat',
  ],
  homepage: ['/', '/en', '/id'],
  bungalowsPage: ['/bungalows', '/en/bungalows', '/id/bungalows'],
  bungalow: ['/', '/en', '/id', '/bungalows', '/en/bungalows', '/id/bungalows'],
  activity: ['/', '/en', '/id', '/explore', '/en/explore', '/id/explore'],
  yogaRetreat: ['/yoga-retreat', '/en/yoga-retreat', '/id/yoga-retreat'],
  gettingHerePage: ['/getting-here', '/en/getting-here', '/id/getting-here'],
  aboutPage: ['/about', '/en/about', '/id/about'],
  faqPage: ['/faq', '/en/faq', '/id/faq'],
}

function getSecretFromRequest(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice('Bearer '.length).trim()
  }

  return (
    request.headers.get('x-revalidate-secret') ||
    request.nextUrl.searchParams.get('secret') ||
    ''
  )
}

function getDocumentType(request: NextRequest, body?: SanityWebhookBody) {
  return (
    body?._type ||
    body?.type ||
    request.nextUrl.searchParams.get('type') ||
    request.nextUrl.searchParams.get('_type') ||
    ''
  )
}

function getPathsForType(type: string) {
  return PATHS_BY_TYPE[type] ?? []
}

async function handleRevalidate(request: NextRequest, body?: SanityWebhookBody) {
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET

  if (!configuredSecret) {
    return NextResponse.json(
      { ok: false, message: 'SANITY_REVALIDATE_SECRET is not configured.' },
      { status: 500 }
    )
  }

  if (getSecretFromRequest(request) !== configuredSecret) {
    return NextResponse.json(
      { ok: false, message: 'Invalid revalidation secret.' },
      { status: 401 }
    )
  }

  const type = getDocumentType(request, body)
  const paths = getPathsForType(type)

  if (!type || paths.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Unsupported or missing document type.',
        supportedTypes: Object.keys(PATHS_BY_TYPE),
      },
      { status: 400 }
    )
  }

  for (const path of paths) {
    revalidatePath(path)
  }

  return NextResponse.json({
    ok: true,
    type,
    revalidated: paths,
    revalidatedAt: new Date().toISOString(),
  })
}

export async function POST(request: NextRequest) {
  let body: SanityWebhookBody | undefined

  try {
    body = await request.json()
  } catch {
    body = undefined
  }

  return handleRevalidate(request, body)
}
