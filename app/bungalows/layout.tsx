import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Floating Rooms | Floating Paradise',
  description: 'Suspended above the reef, our three handcrafted bamboo bungalows invite you to live between sea and sky.',
}

export default function BungalowsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
