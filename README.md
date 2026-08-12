# Webrik — Production Software Development & Digital Marketing Agency Website

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Payload CMS 3**, **PostgreSQL**, **Tailwind CSS**, **Framer Motion**, and **Docker Compose**.

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
- **Node.js**: v20+
- **Docker & Docker Compose**: Installed and running
- **PostgreSQL**: Local or Docker container

### 2. Environment Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

`.env` configuration:
```env
DATABASE_URI=postgresql://postgres:postgres@127.0.0.1:5432/webrik_db
PAYLOAD_SECRET=webrik_super_secret_payload_jwt_key_2026
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Run with Docker Compose (Recommended)
To launch PostgreSQL database and Next.js / Payload application in containerized production environment:

```bash
docker-compose up --build
```
The website will be available at [http://localhost:3000](http://localhost:3000) and Payload Admin at [http://localhost:3000/admin](http://localhost:3000/admin).

---

### 4. Local Development (NPM)

1. **Start PostgreSQL Container**:
   ```bash
   docker-compose up -d postgres
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Seed Initial Database Content**:
   ```bash
   npm run seed
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```

---

## 🔑 Payload CMS Admin Dashboard

- **Admin URL**: `http://localhost:3000/admin`
- **Default Seed Credentials**:
  - **Email**: `admin@webrik.in`
  - **Password**: `password123`

---

## 📂 Project Architecture

```text
src/
├── app/
│   ├── (frontend)/           # Next.js 16 Frontend App Router
│   │   ├── [[...slug]]/      # Dynamic Page router (Home, About, Contact, Careers, Policies)
│   │   ├── services/         # Services listing & service detail pages
│   │   ├── industries/       # Industries hub & industry detail pages
│   │   ├── portfolio/        # Portfolio grid & project detail pages
│   │   ├── case-studies/     # Case studies & metrics pages
│   │   ├── blog/             # Blog hub, article reader, category pages
│   │   ├── api/              # Contact submissions API endpoint
│   │   ├── sitemap.ts        # Dynamic XML sitemap generator
│   │   └── robots.ts         # Robots.txt generator
│   │
│   └── (payload)/            # Native Payload 3 CMS Admin Router
│       ├── admin/            # Payload admin panel views
│       └── api/              # Payload REST/GraphQL API handlers
│
├── components/
│   ├── layout/               # Header (Sticky, Mega Menus) & Footer
│   └── blocks/               # Page Builder block components & BlockRenderer
│
├── payload/
│   ├── collections/          # Users, Media, Pages, Services, Projects, CaseStudies, Blog, etc.
│   ├── globals/              # SiteSettings, Header, Footer, SEOSettings, AnalyticsSettings
│   ├── fields/               # Reusable field factories (SEO, CTA, BlockVisibility)
│   └── blocks/               # Payload Page Builder block definitions
│
├── lib/
│   └── payload.ts            # Typed Payload Local API query helpers
└── seed/
    └── seed.ts               # Database seed script for initial content
```

---

## 🛠 Features & Content Management Guide

1. **100% PageBuilder Driven**: All general pages (`/`, `/about`, `/contact`, `/careers`, `/privacy-policy`, `/terms-and-conditions`) can be created and rearranged dynamically using block components (`HeroBlock`, `LogoCloudBlock`, `ServicesGridBlock`, `StatsBlock`, `AboutBlock`, `IndustriesGridBlock`, `PortfolioGridBlock`, `CaseStudiesBlock`, `ProcessBlock`, `TestimonialsBlock`, `TeamBlock`, `BlogGridBlock`, `FAQBlock`, `CTABlock`, `ContactBlock`, `RichTextBlock`).
2. **Strict Single Source of Truth**: Payload Local API queries PostgreSQL directly inside Next.js Server Components.
3. **Organized Admin Panel**: Grouped cleanly into `Content`, `Blog`, `Marketing`, `Company`, `Leads`, and `Settings`.
4. **CRM Lead Management**: Contact inquiries submitted on `/contact` are saved to the `ContactSubmissions` collection in Payload CMS for your sales team.
