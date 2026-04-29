// Cloudflare Pages Function: first-party proxy to PostHog (US Cloud).
// Routes:
//   /ingest/static/*  -> https://us-assets.i.posthog.com/static/*
//   /ingest/*         -> https://us.i.posthog.com/*

export const onRequest = async ({ request, params }) => {
  const path = Array.isArray(params.path) ? params.path.join('/') : (params.path || '')
  const isStatic = path.startsWith('static/')
  const targetHost = isStatic ? 'us-assets.i.posthog.com' : 'us.i.posthog.com'

  const url = new URL(request.url)
  const target = `https://${targetHost}/${path}${url.search}`

  const headers = new Headers(request.headers)
  headers.delete('host')
  headers.delete('cookie')

  return fetch(target, {
    method: request.method,
    headers,
    body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
    redirect: 'manual',
  })
}
