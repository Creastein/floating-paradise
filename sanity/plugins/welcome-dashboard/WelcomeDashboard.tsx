import React, { useState } from 'react'
import './styles.css'

interface TutorialItem {
  question: string
  steps: string[]
}

const tutorials: TutorialItem[] = [
  {
    question: '🌍 How to add translations (English / Indonesian)?',
    steps: [
      'Almost all content fields now use collapsible fieldsets for <strong>🇬🇧 English</strong> and <strong>🇮🇩 Indonesian</strong>.',
      'By default, the English field is visible, and the Indonesian field is collapsed to save space.',
      'Click on the <strong>🇮🇩 Indonesian</strong> header to expand it and enter the translated text.',
      'Make sure both languages are filled out before publishing.',
    ],
  },
  {
    question: '🏠 How to update the Homepage (Hero images, texts)?',
    steps: [
      'Click <strong>Website Pages → Homepage</strong> in the left sidebar.',
      'To change the <em>Hero Slideshow</em>: scroll to the "Hero Slides" section. Click on a slide to edit its image or caption.',
      'All text fields have helpful hints directly below them — read them before editing!',
      'After making changes, click the green <strong>Publish</strong> button at the top right.',
    ],
  },
  {
    question: '🛖 How to change Bungalow pricing or descriptions?',
    steps: [
      'Click <strong>Collections → Rooms & Bungalows</strong> in the left sidebar.',
      'Select the bungalow you want to update (e.g., "Bayside Bungalow").',
      'Find the <strong>Pricing / IDR</strong> fields and change the numbers. <em>Enter numbers only, no commas or dots.</em>',
      'You can also update the description and gallery images from here.',
      'Click the green <strong>Publish</strong> button to save your changes to the live website.',
    ],
  },
  {
    question: '🛶 How to edit Explore items?',
    steps: [
      'Click <strong>Collections → Explore</strong> in the left sidebar.',
      'Select the activity you want to update.',
      'Edit the title, description, price, or images as needed.',
      'The <strong>Slug</strong> field is LOCKED — do not attempt to change it. Contact the developer if needed.',
      'Click <strong>Publish</strong> to save.',
    ],
  },
  {
    question: '🧘 How to edit Yoga Retreat packages or details?',
    steps: [
      'Click <strong>Website Pages → Yoga Retreat</strong> in the left sidebar.',
      'You can edit the page hero, descriptions, and package details from here.',
      'For package pricing, find the <strong>Packages</strong> section and update the price fields.',
      'If you need to add a completely new package, please consult the developer first to avoid layout issues.',
      'Click <strong>Publish</strong> to save.',
    ],
  },
  {
    question: '📖 How to update About Us content?',
    steps: [
      'Click <strong>Website Pages → About Us</strong> in the left sidebar.',
      'Edit the story text, team member names/bios, and hero image from here.',
      'Click <strong>Publish</strong> to save.',
    ],
  },
  {
    question: '⚙️ How to change Site Settings (logo, contact info, social links)?',
    steps: [
      'Click <strong>Site Settings</strong> at the top of the left sidebar.',
      'Update the site logo, WhatsApp number, social media links, or any global information here.',
      'These settings affect the entire website, so double-check before publishing!',
      'Click <strong>Publish</strong> to save.',
    ],
  },
  {
    question: '🖼️ How to upload & replace images?',
    steps: [
      'Click on any image field to select it.',
      'Click the <strong>Upload</strong> button or drag and drop your new image file.',
      'Recommended format: <strong>JPG/WEBP landscape</strong>, ideally 1920×1080px or wider, under 3MB.',
      'Wait for the upload to complete, then click <strong>Publish</strong>.',
    ],
  },
  {
    question: '🔗 How to update Tripla room booking?',
    steps: [
      'Room booking is connected in code using the official Tripla room IDs.',
      'Do not edit or add booking URL fields in the CMS.',
      'If Tripla room IDs change, ask the developer to update the integration safely.',
    ],
  },
]

const quickLinks = [
  { emoji: '⚙️', label: 'Site Settings', hint: 'Logo, contacts, social links', tool: 'desk', target: 'siteSettings' },
  { emoji: '🏠', label: 'Homepage', hint: 'Hero slides, sections', tool: 'desk', target: 'homepage' },
  { emoji: '📖', label: 'About Us', hint: 'Story, team, hero image', tool: 'desk', target: 'aboutPage' },
  { emoji: '🧘', label: 'Yoga Retreat', hint: 'Packages, details, hero', tool: 'desk', target: 'yogaRetreat' },
  { emoji: '🛖', label: 'Rooms & Bungalows', hint: 'Prices, descriptions, images', tool: 'desk', target: 'bungalow' },
  { emoji: '🛶', label: 'Explore', hint: 'Tours, experiences', tool: 'desk', target: 'activity' },
]

export function WelcomeDashboard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="wd-root">
      {/* ── HERO HEADER ── */}
      <header className="wd-hero">
        <div className="wd-hero-inner">
          <div className="wd-hero-badge">Content Management Portal</div>
          <h1 className="wd-hero-title">
            Welcome to <span className="wd-brand">Floating Paradise</span> CMS 🌴
          </h1>
          <p className="wd-hero-subtitle">
            Your dedicated portal to manage website content — safely and easily.
            <br />
            Read the guidelines below before making any changes.
          </p>
        </div>
      </header>

      <div className="wd-body">

        {/* ── WARNING BOX ── */}
        <div className="wd-alert wd-alert--warning">
          <div className="wd-alert-icon">⚠️</div>
          <div className="wd-alert-content">
            <strong>Important – Read Before Editing</strong>
            <ul>
              <li><strong>Slug fields are LOCKED</strong> — these are internal identifiers used in code. Changing them will break the website. If you need a slug changed, contact the developer.</li>
              <li><strong>Do not create new Bungalows or Explore items</strong> without consulting the developer first — new items require code-level design integration.</li>
              <li>Always click <strong>Publish</strong> after editing to make your changes go live.</li>
            </ul>
          </div>
        </div>

        {/* ── WHAT YOU CAN EDIT ── */}
        <div className="wd-alert wd-alert--success">
          <div className="wd-alert-icon">✅</div>
          <div className="wd-alert-content">
            <strong>What You Can Safely Edit</strong>
            <ul>
              <li>All <strong>text content</strong>: titles, descriptions, body text</li>
              <li>All <strong>images</strong>: hero slides, gallery photos, room photos</li>
              <li><strong>Prices</strong> (enter numbers only — no commas or dots)</li>
              <li><strong>Room booking IDs</strong> (Tripla integration handled by the developer)</li>
              <li><strong>Contact info</strong> and social media links</li>
            </ul>
          </div>
        </div>

        {/* ── QUICK ACCESS ── */}
        <section className="wd-section">
          <h2 className="wd-section-title">⚡ Quick Access</h2>
          <p className="wd-section-hint">Use the sidebar on the left to navigate, or use the direct links below as a reference for what each section contains.</p>
          <div className="wd-quick-grid">
            {quickLinks.map((link) => (
              <a href={`/studio/structure/${link.target}`} key={link.label} className="wd-quick-card" style={{ textDecoration: 'none' }}>
                <div className="wd-quick-emoji">{link.emoji}</div>
                <div className="wd-quick-info">
                  <div className="wd-quick-label">{link.label}</div>
                  <div className="wd-quick-hint">{link.hint}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── TUTORIALS ── */}
        <section className="wd-section">
          <h2 className="wd-section-title">📖 Step-by-Step Tutorials</h2>
          <p className="wd-section-hint">Click on any question below to expand the tutorial.</p>
          <div className="wd-accordion">
            {tutorials.map((item, index) => (
              <div
                key={index}
                className={`wd-accordion-item ${openIndex === index ? 'wd-accordion-item--open' : ''}`}
              >
                <button
                  className="wd-accordion-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span className="wd-accordion-chevron">{openIndex === index ? '▲' : '▼'}</span>
                </button>
                {openIndex === index && (
                  <div className="wd-accordion-body">
                    <ol className="wd-steps">
                      {item.steps.map((step, si) => (
                        <li key={si} dangerouslySetInnerHTML={{ __html: step }} />
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="wd-footer">
          <p>
            🛠️ Need help or want a structural change? Contact your developer.
            <br />
            <span className="wd-footer-muted">Floating Paradise CMS — Powered by Sanity</span>
          </p>
        </footer>

      </div>
    </div>
  )
}
