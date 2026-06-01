'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'
import { useState, useEffect } from 'react'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)
import { usePathname } from 'next/navigation'
import { Folder, FolderClosed, Columns } from 'lucide-react'

export default function StudioPage() {
  const pathname = usePathname()
  const [hideSidebar, setHideSidebar] = useState(false)

  // Show only in Rooms & Bungalows or Activities & Extras
  const isTargetMenu = pathname?.includes('/bungalow') || pathname?.includes('/activity')

  // Reset collapse state when leaving target menus to prevent breaking other pages
  useEffect(() => {
    if (!isTargetMenu) {
      setHideSidebar(false)
    }
  }, [isTargetMenu])

  // Intercept and mock background version-check fetch requests to prevent annoying console errors
  useEffect(() => {
    if (typeof window === 'undefined') return
    const originalFetch = window.fetch
    
    window.fetch = async function (input, init) {
      const url = typeof input === 'string' 
        ? input 
        : input instanceof URL 
          ? input.href 
          : input instanceof Request 
            ? input.url 
            : ''
            
      if (url.includes('registry.npmjs.org') || url.includes('version-check')) {
        return new Response(
          JSON.stringify({
            name: 'sanity',
            'dist-tags': { latest: '3.57.3' },
            latest: '3.57.3',
            versions: {},
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        )
      }
      return originalFetch(input, init)
    }

    return () => {
      window.fetch = originalFetch
    }
  }, [])


  // Direct DOM manipulation using MutationObserver to handle dynamic pane rendering
  useEffect(() => {
    const updatePanes = () => {
      // Find all panes and splitters
      const panes = document.querySelectorAll('[data-testid="pane"]')
      const splitters = document.querySelectorAll('[data-testid="pane-splitter"]')
      const separators = document.querySelectorAll('hr[role="separator"]')

      // 1. Handle Sidebar (First Pane)
      if (panes[0]) {
        ;(panes[0] as HTMLElement).style.setProperty('display', hideSidebar ? 'none' : '', 'important')
      }
      
      // Hide the first splitter if sidebar is hidden
      if (splitters[0]) {
        ;(splitters[0] as HTMLElement).style.setProperty('display', hideSidebar ? 'none' : '', 'important')
      }

      // Hide any general borders/separators between panes if we have active hidden state
      separators.forEach((sep, index) => {
        if (hideSidebar && index === 0) {
          ;(sep as HTMLElement).style.setProperty('display', 'none', 'important')
        } else {
          ;(sep as HTMLElement).style.setProperty('display', '', '')
        }
      })
    }

    // Run initial update
    updatePanes()

    // Observe body for changes to catch dynamic mounting of new panes
    const observer = new MutationObserver(() => {
      updatePanes()
    })
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    })

    return () => {
      observer.disconnect()
      // Cleanup styles on unmount
      const panes = document.querySelectorAll('[data-testid="pane"]')
      panes.forEach(p => (p as HTMLElement).style.display = '')
      const splitters = document.querySelectorAll('[data-testid="pane-splitter"]')
      splitters.forEach(s => (s as HTMLElement).style.display = '')
      const separators = document.querySelectorAll('hr[role="separator"]')
      separators.forEach(s => (s as HTMLElement).style.display = '')
    }
  }, [hideSidebar])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <NextStudio config={config} />

      {/* Floating Control Panel - only visible on target collections */}
      {isTargetMenu && (
        <div 
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '16px',
            backgroundColor: 'rgba(24, 24, 27, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Title/Indicator */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              paddingRight: '10px',
              color: '#D8C3A5',
              borderRight: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              userSelect: 'none',
            }}
          >
            <Columns size={14} />
            <span>Layout</span>
          </div>

          {/* Toggle Sidebar Button */}
          <button
            onClick={() => setHideSidebar(!hideSidebar)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: 500,
              border: hideSidebar ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid rgba(216, 195, 165, 0.2)',
              backgroundColor: hideSidebar ? 'rgba(127, 29, 29, 0.4)' : 'rgba(47, 74, 63, 0.5)',
              color: hideSidebar ? '#ef4444' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            title={hideSidebar ? "Show Sidebar Menu" : "Hide Sidebar Menu"}
          >
            {hideSidebar ? <FolderClosed size={13} /> : <Folder size={13} />}
            <span>{hideSidebar ? "Show Menu" : "Hide Menu"}</span>
          </button>
        </div>
      )}
    </div>
  )
}



