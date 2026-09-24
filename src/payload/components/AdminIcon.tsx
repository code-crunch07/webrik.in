'use client'

import React, { useEffect, useState } from 'react'

export const AdminIcon: React.FC = () => {
  const [iconSrc, setIconSrc] = useState<string>('/webrik-logo.png')

  useEffect(() => {
    let isMounted = true
    const fetchIcon = async () => {
      try {
        const res = await fetch('/api/globals/site-settings?depth=1')
        if (res.ok) {
          const data = await res.json()
          if (isMounted) {
            if (data?.adminLogo?.url) {
              setIconSrc(data.adminLogo.url)
            } else if (data?.logo?.url) {
              setIconSrc(data.logo.url)
            }
          }
        }
      } catch (err) {
        // Keep default fallback
      }
    }
    fetchIcon()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={iconSrc}
        alt="Webrik Icon"
        style={{
          height: '28px',
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
export default AdminIcon
