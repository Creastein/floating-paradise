import { notFound } from "next/navigation"

export default function NotFoundCatchAll() {
  // This catch-all route ensures that any unmatched URLs under /[locale]/...
  // will explicitly trigger the localized not-found.tsx page instead of next/js default.
  notFound()
}
