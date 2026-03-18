export default function FeaturesSection() {
  const features = [
    {
      title: 'Solar Powered',
      description: 'Every light and fan runs on a hand-built solar network. No mainland grid.',
    },
    {
      title: 'Built by Hand',
      description: 'Natural bamboo, timber, and thatch. Materials that live in rhythm with the sea.',
    },
    {
      title: 'Three Rooms Only',
      description: 'Intentionally small. Deeply personal. A place to exhale.',
    },
    {
      title: 'Direct to the Water',
      description: 'Jetty access, reef at your doorstep, phosphorescent plankton at night.',
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/80 font-serif max-w-2xl mx-auto">
            Handcrafted. Solar-powered. Intentional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
