# Travel Landing Site - Replit Configuration

## Overview

This is a single-page professional landing site for Rodney & Nuch Pattison, showcasing their expertise as "Global Leaders in Travel, Tours & Logistics." The application is built as a full-stack web application with a React frontend and Express backend, designed to present their professional legacy and advisory services in the travel industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and building
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions and animations

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session handling with connect-pg-simple
- **Build System**: ESBuild for production builds

### Project Structure
- `/client/` - React frontend application
- `/server/` - Express backend server
- `/shared/` - Shared types and schemas between frontend and backend
- `/attached_assets/` - Static assets (images, documents)
- `/migrations/` - Database migration files

## Key Components

### Frontend Components
1. **Landing Page** (`/client/src/pages/home.tsx`)
   - Hero section with professional headline and call-to-action
   - Professional journey section highlighting their experience
   - Individual profiles for Rodney and Nuch
   - Expertise showcase with icons and descriptions
   - Cruise lines partnership display
   - Contact form with validation

2. **UI Components** (`/client/src/components/ui/`)
   - Complete shadcn/ui component library
   - Custom themed components for professional appearance
   - Form components (Input, Textarea, Button, Label)
   - Toast notifications for user feedback

### Backend Components
1. **API Routes** (`/server/routes.ts`)
   - Contact form submission endpoint (`/api/contact`)
   - Input validation using shared Zod schemas
   - Error handling and response formatting

2. **Data Storage** (`/server/storage.ts`)
   - In-memory storage implementation for contact submissions
   - Interface-based design for easy database integration
   - Contact creation and retrieval methods

3. **Shared Schema** (`/shared/schema.ts`)
   - Zod validation schemas for contact form
   - TypeScript type definitions
   - Input validation rules and error messages

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on landing page
   - Frontend validates input using React Hook Form + Zod
   - Form data sent to `/api/contact` endpoint
   - Backend validates data again using shared schema
   - Contact stored in memory storage
   - Success/error response sent back to frontend
   - Toast notification displays result to user

2. **Static Content**:
   - Professional profiles and expertise data rendered from static content
   - Cruise line logos and professional photos served from assets
   - Responsive design adapts to different screen sizes

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack Query
- **Validation**: Zod, @hookform/resolvers
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: date-fns for date handling

### Backend Dependencies
- **Server**: Express.js, TypeScript
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Session**: connect-pg-simple
- **Validation**: Zod (shared with frontend)
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, ESBuild
- **Database**: Drizzle Kit for migrations
- **TypeScript**: Full type safety across stack
- **Linting**: Built-in TypeScript checking

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for running TypeScript backend directly
- In-memory storage for rapid development
- Replit-specific plugins for development experience

### Production Build
- `npm run build` creates optimized frontend bundle
- ESBuild bundles backend for Node.js runtime
- Static files served from `/dist/public`
- Environment variables for database configuration

### Database Configuration
- Drizzle configured for PostgreSQL dialect
- Connection via `DATABASE_URL` environment variable
- Migration system ready for schema changes
- Current implementation uses in-memory storage but can be easily swapped for PostgreSQL

### Deployment Requirements
- Node.js runtime environment
- PostgreSQL database (when moving from in-memory storage)
- Environment variables: `DATABASE_URL`, `NODE_ENV`
- Static file serving capability

The application is designed as a professional showcase with a focus on credibility and trust-building rather than direct sales, emphasizing the Pattisons' extensive experience and industry relationships in the travel and logistics sector.

## Static Website Conversion (July 25, 2025)

### Overview
Successfully converted the React-based application to a static HTML/CSS/JS website optimized for Vercel deployment. This conversion maintains all functionality while eliminating the need for server-side processing.

### Static Website Features
- **Pure HTML/CSS/JS**: No framework dependencies, fully self-contained
- **Experience Summary Section**: Comprehensive overview highlighting decades of combined travel industry expertise
- **Responsive Design**: Mobile-first approach with professional styling
- **SEO Optimized**: Proper meta tags, Open Graph tags, and semantic HTML structure
- **Performance Optimized**: Minified code, cached assets, and CDN resources
- **Vercel Ready**: Includes vercel.json configuration for optimal deployment

### File Structure
```
static/
├── index.html          # Complete single-page application
├── styles.css          # All responsive styling and animations
├── script.js           # Interactive functionality and form handling
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata
├── README.md           # Comprehensive deployment guide
└── assets/             # All images and media (16 files)
```

### Key Conversions Made
- **React Components → Vanilla HTML**: All sections converted to semantic HTML structure
- **CSS-in-JS → Pure CSS**: Tailwind classes converted to custom CSS with CSS variables
- **React State → JavaScript Objects**: Expertise calculator state management in vanilla JS
- **React Query → Fetch API**: Contact form submission with native JavaScript
- **Framer Motion → CSS Animations**: Smooth animations using pure CSS and JavaScript
- **React Router → Anchor Links**: Smooth scrolling navigation

### Maintained Functionality
- ✅ Interactive expertise calculator with real-time updates
- ✅ Professional profile sections with photos
- ✅ All 14 cruise line partner logos with hover effects
- ✅ 9 affiliate partner links with professional styling
- ✅ Contact form with validation and toast notifications
- ✅ Responsive design across all device sizes
- ✅ Professional animations and transitions

### Deployment Benefits
- **Zero Build Time**: Static files deploy instantly
- **Global CDN**: Automatic edge caching for fast loading
- **No Server Costs**: Pure static hosting reduces operational overhead
- **High Reliability**: No backend dependencies or server maintenance
- **Easy Updates**: Direct file editing for content changes

## Recent Changes

### World-Class Expertise Section & Affiliate Links Update (July 25, 2025)
- **World-Class Expertise Section**: Built new professional expertise showcase replacing the experience calculator
  - Six pillar approach covering Corporate Travel, Retail Travel, Group Travel, Airline Operations, Escorted Tours, and Cruise Logistics
  - Clean, minimal card design with 24px Lucide icons and elevation-1 styling
  - Responsive 2-column grid on desktop, single column on mobile
  - Staggered fade-up animations on scroll with 100ms delays between cards
  - Professional typography with gradient underline accent
- **Affiliate Links Updated**: Updated all Trusted Travel Partners links to use correct affiliate URLs:
  - Trip.com, Welcome Pickups, Yesim, EKTA, Kiwitaxi, Airalo, GetRentacar.com using tpk.mx tracking
  - Surfshark VPN and Surfshark One using direct affiliate links
- **Enhanced Credibility**: New section conveys decades of leadership expertise without gimmicks or counters
- **SEO Optimization**: Semantic HTML structure with proper heading hierarchy and aria-labelledby attributes
- **Performance Optimized**: Clean CSS Grid implementation with optimized animations and transitions

### Previous Updates (July 25, 2025)

### UI/UX Improvements
- **Modernized Icons**: Updated expertise section with colorful gradient icons (blue, green, purple, indigo, orange, teal) instead of monochrome versions
- **Centered Content**: All expertise section content now center-aligned with larger, more prominent icons (20x20 with 10x10 icons)
- **Enhanced Interactivity**: Added hover effects with subtle lift animations for both expertise cards and cruise line logos

### Content Updates
- **Expanded Cruise Line Showcase**: Now displays all 14 provided cruise line logos instead of just 4:
  - Azamara, Carnival, Crystal, Cunard, Holland America, Norwegian, Oceania, P&O Australia, P&O UK, Princess, Regent, Seabourn, Silversea, Viking
- **Hero Section Update**: Replaced diving background image with provided HERO IMAGE1 and HERO IMAGE2 for authentic branding
  - HERO IMAGE1 now serves as main hero background
  - HERO IMAGE2 positioned behind contact section for visual consistency
- **Partner Affiliate Links**: Added top navigation bar featuring trusted travel service partners with affiliate links
- **Professional Profile Enhancement**: Added Nuch's professional photo and updated language specification to "English and Thai"
- **Responsive Grid Layout**: Cruise logos now display in up to 5 columns on larger screens with responsive breakpoints

### Visual Design
- **Color Psychology**: Each expertise area now has distinct color branding to improve visual hierarchy and memorability
- **Consistent Styling**: Maintained professional navy/gold color scheme while adding modern gradient elements
- **Enhanced Visual Hierarchy**: Improved spacing and alignment throughout expertise and cruise lines sections
- **Experience Summary Section**: Professional overview highlighting the Pattisons' combined decades of expertise
  - Comprehensive narrative covering all major travel industry sectors
  - Clean, focused presentation emphasizing credibility and industry knowledge
  - Strategic positioning between hero section and individual profiles
  - Streamlined user experience leading directly to team introductions