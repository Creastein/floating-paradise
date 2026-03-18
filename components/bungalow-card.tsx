import Image from 'next/image'
import { Check } from 'lucide-react'

interface BungalowCardProps {
  title: string
  image: string
  description: string
  features: string[]
  price: string
}

export default function BungalowCard({
  title,
  image,
  description,
  features,
  price,
}: BungalowCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-accent font-semibold mb-3">
          From {price} per night
        </p>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold">
          Check Availability
        </button>
      </div>
    </div>
  )
}
