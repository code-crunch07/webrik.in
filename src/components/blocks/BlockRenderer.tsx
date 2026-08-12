'use client'

import React from 'react'
import { HeroBlock } from './HeroBlock'
import { LogoCloudBlock } from './LogoCloudBlock'
import { ServicesGridBlock } from './ServicesGridBlock'
import { StatsBlock } from './StatsBlock'
import { AboutBlock } from './AboutBlock'
import { IndustriesGridBlock } from './IndustriesGridBlock'
import { PortfolioGridBlock } from './PortfolioGridBlock'
import { CaseStudiesBlock } from './CaseStudiesBlock'
import { ProcessBlock } from './ProcessBlock'
import { TestimonialsBlock } from './TestimonialsBlock'
import { TeamBlock } from './TeamBlock'
import { BlogGridBlock } from './BlogGridBlock'
import { FAQBlock } from './FAQBlock'
import { CTABlock } from './CTABlock'
import { ContactBlock } from './ContactBlock'
import { RichTextBlock } from './RichTextBlock'

interface BlockRendererProps {
  blocks?: any[]
  dynamicData?: {
    services?: any[]
    industries?: any[]
    projects?: any[]
    caseStudies?: any[]
    posts?: any[]
    clients?: any[]
    testimonials?: any[]
    teamMembers?: any[]
    faqs?: any[]
  }
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks, dynamicData }) => {
  if (!blocks || blocks.length === 0) {
    return null
  }

  return (
    <>
      {blocks.map((block: any, index: number) => {
        // Check block level visibility
        if (block?.blockVisibility?.hidden) {
          return null
        }

        const blockType = block.blockType

        switch (blockType) {
          case 'heroBlock':
            return <HeroBlock key={index} block={block} />
          case 'logoCloudBlock':
            return <LogoCloudBlock key={index} block={block} clients={dynamicData?.clients} />
          case 'servicesGridBlock':
            return <ServicesGridBlock key={index} block={block} services={dynamicData?.services} />
          case 'statsBlock':
            return <StatsBlock key={index} block={block} />
          case 'aboutBlock':
            return <AboutBlock key={index} block={block} />
          case 'industriesGridBlock':
            return <IndustriesGridBlock key={index} block={block} industries={dynamicData?.industries} />
          case 'portfolioGridBlock':
            return <PortfolioGridBlock key={index} block={block} projects={dynamicData?.projects} />
          case 'caseStudiesBlock':
            return <CaseStudiesBlock key={index} block={block} caseStudies={dynamicData?.caseStudies} />
          case 'processBlock':
            return <ProcessBlock key={index} block={block} />
          case 'testimonialsBlock':
            return <TestimonialsBlock key={index} block={block} testimonials={dynamicData?.testimonials} />
          case 'teamBlock':
            return <TeamBlock key={index} block={block} teamMembers={dynamicData?.teamMembers} />
          case 'blogGridBlock':
            return <BlogGridBlock key={index} block={block} posts={dynamicData?.posts} />
          case 'faqBlock':
            return <FAQBlock key={index} block={block} faqs={dynamicData?.faqs} />
          case 'ctaBlock':
            return <CTABlock key={index} block={block} />
          case 'contactBlock':
            return <ContactBlock key={index} block={block} />
          case 'richTextBlock':
            return <RichTextBlock key={index} block={block} />
          default:
            return null
        }
      })}
    </>
  )
}
