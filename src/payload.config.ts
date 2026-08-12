import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Pages } from './payload/collections/Pages'
import { Services } from './payload/collections/Services'
import { Industries } from './payload/collections/Industries'
import { Projects } from './payload/collections/Projects'
import { CaseStudies } from './payload/collections/CaseStudies'
import { BlogPosts } from './payload/collections/BlogPosts'
import { BlogCategories } from './payload/collections/BlogCategories'
import { Authors } from './payload/collections/Authors'
import { Testimonials } from './payload/collections/Testimonials'
import { TeamMembers } from './payload/collections/TeamMembers'
import { Clients } from './payload/collections/Clients'
import { FAQs } from './payload/collections/FAQs'
import { Technologies } from './payload/collections/Technologies'
import { Jobs } from './payload/collections/Jobs'
import { ContactSubmissions } from './payload/collections/ContactSubmissions'
import { Redirects } from './payload/collections/Redirects'

// Globals
import { SiteSettings } from './payload/globals/SiteSettings'
import { Header } from './payload/globals/Header'
import { Footer } from './payload/globals/Footer'
import { SEOSettings } from './payload/globals/SEOSettings'
import { AnalyticsSettings } from './payload/globals/AnalyticsSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '/payload/components/AdminLogo#AdminLogo',
        Icon: '/payload/components/AdminIcon#AdminIcon',
      },
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Pages,
    Services,
    Industries,
    Projects,
    CaseStudies,
    BlogPosts,
    BlogCategories,
    Authors,
    Clients,
    Testimonials,
    FAQs,
    Technologies,
    TeamMembers,
    Jobs,
    ContactSubmissions,
    Redirects,
    Media,
    Users,
  ],
  globals: [
    SiteSettings,
    Header,
    Footer,
    SEOSettings,
    AnalyticsSettings,
  ],
  secret: process.env.PAYLOAD_SECRET || 'webrik_super_secret_payload_jwt_key_2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@postgres:5432/webrik_db',
    },
  }),
  sharp,
})
