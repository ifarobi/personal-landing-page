import posthog from 'posthog-js'

const ENABLED = Boolean(import.meta.env.VITE_POSTHOG_KEY)

export function initPostHog() {
  if (!ENABLED) return

  posthog.init(import.meta.env.VITE_POSTHOG_KEY!, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: 'history_change',
    capture_pageleave: true,
  })
}

export function track(event: string, props?: Record<string, unknown>) {
  if (!ENABLED) return
  posthog.capture(event, props)
}

export { posthog }
