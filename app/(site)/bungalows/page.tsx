import { getBungalows } from '@/lib/sanity.fetch'
import BungalowsClient from './bungalows-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Bungalows | Floating Paradise',
  description: 'Suspended above the reef, our three handcrafted bamboo bungalows invite you to live between sea and sky.',
}

export default async function BungalowsPage() {
  const { data: bungalows } = await getBungalows()
  return <BungalowsClient initialBungalows={bungalows} />
}
