import React from 'react'

export const AdminIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-1 bg-white/95 rounded-lg border border-white/20">
      <img
        src="/webrik-logo.png"
        alt="Webrik Icon"
        style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
      />
    </div>
  )
}
