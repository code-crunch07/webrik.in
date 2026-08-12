import config from '@payload-config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

const serverFunction = async (args: any) => {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap: {},
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={{}} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
