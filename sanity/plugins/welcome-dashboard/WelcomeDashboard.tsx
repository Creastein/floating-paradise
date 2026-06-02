import React, { useState } from 'react'
import './styles.css'

interface TutorialItem {
  question: string
  steps: string[]
}

const tutorials: TutorialItem[] = [
  {
    question: 'How to fill English and Indonesian content',
    steps: [
      'Most editable content has separate <strong>English</strong> and <strong>Indonesian</strong> fields.',
      'English fields usually open first. Click the Indonesian section to expand the Indonesian fields.',
      'Fill both languages before publishing so the EN and ID pages stay complete.',
    ],
  },
  {
    question: 'How to update the Homepage',
    steps: [
      'Open <strong>Website Pages -> Homepage</strong>.',
      'Edit the hero section, section text, or available images.',
      'Leave an image empty only when you want the website to use the default image.',
      'Click <strong>Publish</strong> when you are finished.',
    ],
  },
  {
    question: 'How to update Rooms & Bungalows',
    steps: [
      'Open <strong>Collections -> Rooms & Bungalows</strong>.',
      'Choose the room you want to edit: Sunrise, Sunset, or Bayside.',
      'Edit the description, features, maximum guests, or photo gallery.',
      'The gallery can contain up to 12 photos. If it is empty, the website uses the default images.',
      'Do not change slugs or add new rooms without developer support.',
    ],
  },
  {
    question: 'How to update Explore',
    steps: [
      'Open <strong>Collections -> Explore</strong>.',
      'Choose the item you want to edit.',
      'Edit the title, description, price detail if available, or gallery.',
      'Do not change slugs or add new Explore items without developer support.',
      'Click <strong>Publish</strong> to save the changes.',
    ],
  },
  {
    question: 'How to update Yoga Retreat',
    steps: [
      'Open <strong>Website Pages -> Yoga Retreat</strong>.',
      'Edit the hero, retreat text, package details, prices, or available images.',
      'Fill both English and Indonesian fields when both are available.',
      'For new packages or major layout changes, consult the developer first.',
    ],
  },
  {
    question: 'How to update About Us',
    steps: [
      'Open <strong>Website Pages -> About Us</strong>.',
      'Editable fields include the hero image, founder story, founders photo, and mission statement.',
      'Other sections such as values, Keep It Green, Kejora, and CTA still use the website defaults.',
      'Click <strong>Publish</strong> when you are finished.',
    ],
  },
  {
    question: 'How to update Site Settings',
    steps: [
      'Open <strong>Site Settings</strong> in the sidebar.',
      'Edit the logo, WhatsApp number, social links, or global contact information.',
      'These settings are used across many pages, so double-check before publishing.',
    ],
  },
  {
    question: 'How to upload or replace images',
    steps: [
      'Click the image field you want to replace.',
      'Upload a new file or drag and drop it into the field.',
      'Use clear landscape images, ideally JPG or WEBP, at least 1920px wide, with a reasonable file size.',
      'Wait for the upload to finish, then click <strong>Publish</strong>.',
    ],
  },
  {
    question: 'How to update Tripla booking',
    steps: [
      'Tripla booking is not edited from the CMS.',
      'Room booking uses official Tripla room IDs stored in the code.',
      'If Tripla IDs change, ask the developer to update the integration safely.',
    ],
  },
]

const quickLinks = [
  { label: 'Site Settings', hint: 'Logo, contacts, social links', target: 'siteSettings' },
  { label: 'Homepage', hint: 'Hero slides and homepage sections', target: 'homepage' },
  { label: 'About Us', hint: 'Founder story, mission, images', target: 'aboutPage' },
  { label: 'Yoga Retreat', hint: 'Packages, details, hero', target: 'yogaRetreat' },
  { label: 'Rooms & Bungalows', hint: 'Descriptions, features, gallery', target: 'bungalow' },
  { label: 'Explore', hint: 'Tours and experiences', target: 'activity' },
]

export function WelcomeDashboard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="wd-root">
      <header className="wd-hero">
        <div className="wd-hero-inner">
          <div className="wd-hero-badge">Content Management Portal</div>
          <h1 className="wd-hero-title">
            Floating Paradise <span className="wd-brand">CMS</span>
          </h1>
          <p className="wd-hero-subtitle">
            A short guide for editing website content safely.
            <br />
            Edit the available content, publish, then check the result on the website.
          </p>
        </div>
      </header>

      <div className="wd-body">
        <div className="wd-alert wd-alert--warning">
          <div className="wd-alert-icon">!</div>
          <div className="wd-alert-content">
            <strong>Important Before Editing</strong>
            <ul>
              <li><strong>Do not edit slugs.</strong> Slugs are used as URL identifiers and code connections.</li>
              <li><strong>Do not add new Rooms, Explore items, or transfer cities</strong> without developer support.</li>
              <li><strong>Do not edit Tripla booking from the CMS.</strong> Booking integration is handled in code.</li>
              <li>Always click <strong>Publish</strong> after editing.</li>
            </ul>
          </div>
        </div>

        <div className="wd-alert wd-alert--success">
          <div className="wd-alert-icon">OK</div>
          <div className="wd-alert-content">
            <strong>Safe to Edit</strong>
            <ul>
              <li>Text content: titles, subtitles, descriptions, and body text</li>
              <li>Images: hero images, galleries, room photos, and section images</li>
              <li>Prices and price details in available fields</li>
              <li>Contact information, WhatsApp, and social media links</li>
            </ul>
          </div>
        </div>

        <section className="wd-section">
          <h2 className="wd-section-title">Quick Access</h2>
          <p className="wd-section-hint">Use the left sidebar to open documents. The links below summarize where each content area lives.</p>
          <div className="wd-quick-grid">
            {quickLinks.map((link) => (
              <a href={`/studio/structure/${link.target}`} key={link.label} className="wd-quick-card" style={{ textDecoration: 'none' }}>
                <div className="wd-quick-info">
                  <div className="wd-quick-label">{link.label}</div>
                  <div className="wd-quick-hint">{link.hint}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="wd-section">
          <h2 className="wd-section-title">Short Tutorials</h2>
          <p className="wd-section-hint">Click a question to view the steps.</p>
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
                  <span className="wd-accordion-chevron">{openIndex === index ? '^' : 'v'}</span>
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

        <footer className="wd-footer">
          <p>
            Need a structural change, new item, or booking integration update? Contact the developer.
            <br />
            <span className="wd-footer-muted">Floating Paradise CMS - Powered by Sanity</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
