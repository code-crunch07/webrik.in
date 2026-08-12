import React from 'react'

export const AdminLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 py-2">
      <div className="bg-white/95 px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center justify-center">
        <img
          src="/webrik-logo.png"
          alt="Webrik CMS Admin"
          style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
