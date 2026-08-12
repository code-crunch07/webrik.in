import React from 'react'

export const AdminLogo: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-2">
      <img
        src="/webrik-logo.png"
        alt="Webrik CMS Admin"
        style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
      />
    </div>
  )
}
