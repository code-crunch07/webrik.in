'use client'

import React, { useEffect, useState } from 'react'

export const AdminLogo: React.FC = () => {
  const [logoSrc, setLogoSrc] = useState<string>('/webrik-logo.png')

  useEffect(() => {
    let isMounted = true
    const fetchLogo = async () => {
      try {
        const res = await fetch('/api/globals/site-settings?depth=1')
        if (res.ok) {
          const data = await res.json()
          if (isMounted) {
            if (data?.adminLogo?.url) {
              setLogoSrc(data.adminLogo.url)
            } else if (data?.logo?.url) {
              setLogoSrc(data.logo.url)
            }
          }
        }
      } catch (err) {
        // Keep default fallback
      }
    }
    fetchLogo()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0' }}>
      <img
        src={logoSrc}
        alt="Webrik CMS Admin"
        style={{
          height: '46px',
          maxWidth: '220px',
          width: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))',
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  )
}
export default AdminLogo
