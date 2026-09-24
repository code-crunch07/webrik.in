'use client'

import React from 'react'
import Link from 'next/link'

export const BeforeDashboard: React.FC = () => {
  return (
    <div style={{ marginBottom: '32px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Top Banner Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #090D1A 0%, #0F172A 50%, #1E1B4B 100%)',
          borderRadius: '20px',
          padding: '32px',
          color: '#ffffff',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Decorative Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#818CF8',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#10B981',
                    boxShadow: '0 0 8px #10B981',
                  }}
                />
                Webrik Production Command Center
              </div>
              <h1
                style={{
                  fontSize: '28px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  margin: '0 0 8px 0',
                  color: '#ffffff',
                }}
              >
                Welcome back, Webrik Admin
              </h1>
              <p
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  margin: 0,
                  maxWidth: '560px',
                  lineHeight: 1.5,
                }}
              >
                Manage enterprise Next.js pages, client case studies, live practice services, and incoming project consultations in one unified studio panel.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#0F172A',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s',
                }}
              >
                <span>View Live Site</span>
                <span style={{ fontSize: '11px' }}>↗</span>
              </a>

              <a
                href="/admin/collections/pages"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#F8FAFC',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span>Edit Pages</span>
              </a>

              <a
                href="/admin/globals/site-settings"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#F8FAFC',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span>Site Settings</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 18px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Practice Services
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#38BDF8', marginTop: '4px' }}>
                6 Active
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 18px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Client Case Studies
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#818CF8', marginTop: '4px' }}>
                6 Published
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 18px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Engineering Insights
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#A78BFA', marginTop: '4px' }}>
                3 Articles
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '14px 18px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              <div style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Database Health
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#34D399', marginTop: '4px' }}>
                PostgreSQL OK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BeforeDashboard
