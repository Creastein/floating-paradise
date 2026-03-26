import { PortableText as PortableTextComponent, PortableTextReactComponents } from '@portabletext/react'

type PortableTextProps = {
  value: any[] | undefined
  components?: Partial<PortableTextReactComponents>
}

// Default custom components to map Sanity's rich text out to our Tailwind classes
const defaultComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: any) => <p className="mb-4 text-foreground/80 font-light leading-relaxed">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 mt-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl md:text-2xl font-serif text-foreground mb-3 mt-5">{children}</h4>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary/30 pl-4 py-1 italic font-serif text-lg text-foreground/70 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-outside ml-5 mb-6 space-y-2 text-foreground/80 font-light">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-outside ml-5 mb-6 space-y-2 text-foreground/80 font-light">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <a href={value.href} rel={rel} target={target} className="text-primary hover:underline underline-offset-4">
          {children}
        </a>
      )
    },
  },
}

export function PortableText({ value, components }: PortableTextProps) {
  if (!value || value.length === 0) return null

  return (
    <div className="portable-text-container">
      <PortableTextComponent 
        value={value} 
        components={{ ...defaultComponents, ...components }} 
      />
    </div>
  )
}
