export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6282226945510"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="floating-whatsapp group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--whatsapp-ring)] sm:bottom-8 sm:right-8"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M19.11 17.52c-.3-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.6-.9-2.2-.23-.56-.47-.48-.66-.49h-.56c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.48 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.5.71.3 1.26.48 1.7.61.71.23 1.35.2 1.86.12.57-.08 1.73-.7 1.98-1.38.25-.68.25-1.27.17-1.38-.07-.12-.27-.2-.56-.35zm-3.1 10.04c-6.04 0-10.95-4.91-10.95-10.95S9.97 5.66 16.01 5.66c6.04 0 10.95 4.91 10.95 10.95S22.05 27.56 16.01 27.56zm0-24.06C8.6 3.5 3.5 8.6 3.5 15.99c0 2.93.98 5.62 2.63 7.77L4.8 28.5l4.9-1.28c2.08 1.13 4.47 1.78 7.02 1.78 7.39 0 12.5-5.1 12.5-12.5S23.4 3.5 16.01 3.5z" />
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-full bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg ring-1 ring-foreground/10 opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
        how can i help you?
      </span>
    </a>
  )
}
