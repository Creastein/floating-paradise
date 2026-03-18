import { Leaf, Zap, Waves, Wind } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Solar Powered',
      description: 'Completely renewable energy powers our entire sanctuary.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable practices woven into every aspect of our operations.',
    },
    {
      icon: Waves,
      title: 'Ocean Paradise',
      description: 'Direct access to pristine turquoise waters and white sand beaches.',
    },
    {
      icon: Wind,
      title: 'Wellness Focused',
      description: 'Yoga, meditation, and holistic wellness programs available.',
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Why Choose Floating Paradise?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover a unique blend of luxury, sustainability, and island serenity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
