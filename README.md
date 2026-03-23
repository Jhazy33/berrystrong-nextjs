# BerryStrong - Next.js Application

## 🚀 Phase 1: Next.js Conversion

**Status:** 🟢 Ready for Development
**Repository:** https://github.com/Jhazy33/berrystrong-nextjs
**Deployment:** TBD

### Tech Stack
- **Next.js 16.2.1** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4**
- **ESLint 9**

### Project Structure
```
app/                    # Next.js App Router
├── layout.tsx         # Root layout with fonts
├── page.tsx           # Homepage
└── globals.css        # Global styles & Tailwind
components/            # React components
├── ui/               # Reusable UI components
├── layout/           # Layout components (Header, Footer)
└── sections/         # Page sections (Hero, Services, etc.)
lib/                   # Utilities & constants
├── utils.ts          # Helper functions (cn, formatDate, truncate)
└── constants.ts      # Site constants (navigation, social links)
types/                 # TypeScript type definitions
public/               # Static assets
└── images/           # All images from original site
```

### 🎨 Design System

#### Colors
```css
--berry-red: #aa0202
--berry-red-dark: #e60e0e
--nav-black: #000000
--gray-dark: #262d3f
--gray-light: #fbfcfd
```

#### Typography
- **Headings:** Oswald (200-700 weights)
- **Body:** Open Sans (300-800 weights)
- **Characteristics:** Uppercase headings, 0.05em letter spacing

### 📋 Progress

#### Phase 1: Project Setup ✅
- [x] Initialize Next.js 16 project
- [x] Configure TypeScript
- [x] Setup Tailwind CSS 4
- [x] Add Google Fonts (Oswald, Open Sans)
- [x] Create component structure
- [x] Add utility functions
- [x] Define TypeScript types
- [x] Copy all images from original clone
- [x] Setup git repository

#### Phase 2: Homepage Conversion (Next)
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Convert Hero section
- [ ] Convert Services section
- [ ] Convert Testimonials section
- [ ] Convert Contact section
- [ ] Mobile responsiveness

#### Phase 3: Other Pages
- [ ] About page
- [ ] Services page
- [ ] Testimonials page
- [ ] Contact page

#### Phase 4: Component Extraction
- [ ] Reusable UI components
- [ ] Layout components
- [ ] Section components

#### Phase 5: Testing & Deployment
- [ ] Component testing
- [ ] E2E testing
- [ ] Performance optimization
- [ ] Deploy to production

### 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### 📦 Dependencies

#### Runtime
- `next@16.2.1` - React framework
- `react@19.2.4` - UI library
- `react-dom@19.2.4` - React DOM renderer

#### Development
- `@tailwindcss/postcss@^4` - Tailwind CSS PostCSS plugin
- `@types/node@^20` - Node.js type definitions
- `@types/react@^19` - React type definitions
- `@types/react-dom@^19` - React DOM type definitions
- `eslint@^9` - Code linting
- `eslint-config-next@16.2.1` - Next.js ESLint config
- `tailwindcss@^4` - Utility-first CSS framework
- `typescript@^5` - TypeScript compiler

### 🌐 Original Site

The original static HTML clone is available at:
- **Repository:** https://github.com/Jhazy33/berrystrong
- **Live Demo:** https://berrystrong-clone.vercel.app

### 🎯 Development Guidelines

#### Component Architecture
- Use Server Components by default
- Use Client Components for interactivity
- Extract reusable logic into custom hooks
- Keep components small and focused

#### Styling Conventions
- Use Tailwind utility classes
- Apply `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use semantic HTML elements

#### TypeScript Best Practices
- Enable strict mode
- Avoid `any` type
- Use proper generics
- Type all props and return values

### 🔧 Next Steps

1. **Header Component:** Create navigation with Berry Strong branding
2. **Hero Section:** Convert homepage hero with CTA
3. **Services Grid:** Display fitness training services
4. **Testimonials:** Show client reviews
5. **Contact Form:** Implement contact functionality

### 📝 Notes

- Using Next.js 16 with latest features
- Tailwind CSS 4 with new @theme inline syntax
- Google Fonts optimized with next/font
- All assets from original clone imported
- Git repository initialized and ready

---

**Last Updated:** March 23, 2026
**Version:** 0.1.0
