import Image from 'next/image'
import { Clock, Users } from 'lucide-react'

interface ActivityCardProps {
  title: string
  image: string
  description: string
  duration: string
  groupSize: string
  details: string[]
}

export default function ActivityCard({
  title,
  image,
  description,
  duration,
  groupSize,
  details,
}: ActivityCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex gap-8 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-foreground/80">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground/80">{groupSize}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-accent font-bold">•</span>
              <span className="text-sm text-foreground/80">{detail}</span>
            </div>
          ))}
        </div>

        <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all font-semibold">
          Learn More
        </button>
      </div>
    </div>
  )
}
