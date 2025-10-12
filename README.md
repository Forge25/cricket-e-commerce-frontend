# Cricket E-Commerce Frontend

A modern, responsive frontend application for a cricket equipment e-commerce platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development Guide](#development-guide)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js 15** with App Router for modern React development
- **React 19** for cutting-edge React features
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** for utility-first styling
- **Turbopack** for lightning-fast development and builds
- **ESLint** for code quality
- Server-side rendering (SSR) and static site generation (SSG)
- Optimized images with Next.js Image component
- Custom fonts (Geist Sans & Geist Mono)

## Tech Stack

- **Framework:** Next.js 15.5.4
- **React:** 19.1.0
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Bundler:** Turbopack
- **Linting:** ESLint 9
- **Package Manager:** npm

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** (v9 or higher)
- **Git**

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd cricket-ecommerce-frontend
```

2. **Install dependencies**

```bash
npm install
```

## Environment Setup

1. **Create a `.env.local` file** in the root directory:

```bash
touch .env.local
```

2. **Add environment variables** to `.env.local`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_API_VERSION=v1

# App Configuration
NEXT_PUBLIC_APP_NAME="Cricket Store"
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Image Domains (for next/image)
NEXT_PUBLIC_IMAGE_DOMAIN=your-cdn-domain.com
```

**Environment Variables Explained:**

- `NEXT_PUBLIC_API_URL`: Backend API base URL
- `NEXT_PUBLIC_API_VERSION`: API version prefix
- `NEXT_PUBLIC_APP_NAME`: Application name
- `NEXT_PUBLIC_APP_URL`: Frontend URL
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser

## Running the Application

### Development Mode

Start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

**Features in Development Mode:**
- Hot Module Replacement (HMR)
- Fast Refresh for instant updates
- TypeScript error reporting
- Detailed error overlays

### Production Preview

To test the production build locally:

```bash
npm run build
npm start
```

## Project Structure

```
cricket-ecommerce-frontend/
├── src/
│   └── app/                    # App Router directory
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx            # Home page
│       ├── globals.css         # Global styles
│       └── favicon.ico         # App favicon
├── public/                     # Static assets
│   ├── next.svg               # Next.js logo
│   ├── vercel.svg             # Vercel logo
│   └── ...                    # Other static files
├── node_modules/              # Dependencies
├── .next/                     # Next.js build output
├── .git/                      # Git repository
├── .gitignore                # Git ignore rules
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── next-env.d.ts             # Next.js TypeScript declarations
├── package.json              # Project metadata
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

### Recommended Folder Structure (As You Build)

```
src/
├── app/                       # App Router pages
│   ├── (auth)/               # Auth route group
│   │   ├── login/
│   │   └── register/
│   ├── products/             # Products pages
│   │   ├── [id]/            # Dynamic product page
│   │   └── page.tsx         # Products listing
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout flow
│   └── profile/             # User profile
├── components/               # Reusable components
│   ├── ui/                  # UI components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
├── lib/                     # Utility functions
│   ├── api.ts              # API client
│   ├── auth.ts             # Auth helpers
│   └── utils.ts            # General utilities
├── types/                   # TypeScript types
│   └── index.ts
├── hooks/                   # Custom React hooks
│   └── useAuth.ts
└── styles/                  # Additional styles
    └── custom.css
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build optimized production bundle with Turbopack |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## Development Guide

### Creating New Pages

With the App Router, create pages by adding files to the `src/app` directory:

```typescript
// src/app/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
```

### Creating Dynamic Routes

```typescript
// src/app/products/[id]/page.tsx
export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
    </div>
  );
}
```

### Creating Layouts

```typescript
// src/app/products/layout.tsx
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>{/* Navigation */}</nav>
      {children}
    </div>
  );
}
```

### Creating Reusable Components

```typescript
// src/components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}
```

### Server Components vs Client Components

By default, all components in the App Router are **Server Components**.

**Use Server Components for:**
- Fetching data
- Accessing backend resources
- Keeping sensitive information on the server

**Use Client Components for:**
- Interactivity (onClick, onChange, etc.)
- React hooks (useState, useEffect, etc.)
- Browser-only APIs

```typescript
// Client Component
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Analyze the Build

Check the build output for:
- **○** (Static) - Automatically rendered as static HTML
- **λ** (Lambda) - Server-side rendered at runtime
- **ƒ** (Dynamic) - Server-side rendered with dynamic data

## Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push your code to GitHub**
2. **Import your repository** at [vercel.com/new](https://vercel.com/new)
3. **Configure environment variables** in the Vercel dashboard
4. **Deploy** - Vercel automatically detects Next.js

### Other Platforms

#### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

Build and run:

```bash
docker build -t cricket-frontend .
docker run -p 3000:3000 cricket-frontend
```

#### Static Export

For static hosting (Netlify, GitHub Pages, etc.):

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

Build:

```bash
npm run build
```

Deploy the `out` directory.

## Styling

### Tailwind CSS

This project uses **Tailwind CSS v4** for styling.

**Basic Usage:**

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
  Hello World
</div>
```

**Responsive Design:**

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
```

**Custom Classes:**

Add custom styles in `src/app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }
}
```

### Global Styles

Edit `src/app/globals.css` for global CSS customizations.

## API Integration

### Creating an API Client

```typescript
// src/lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts() {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function fetchProduct(id: string) {
  const response = await fetch(`${API_URL}/api/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}
```

### Using the API in Server Components

```typescript
// src/app/products/page.tsx
import { fetchProducts } from '@/lib/api';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Using the API in Client Components

```typescript
'use client';

import { useState, useEffect } from 'react';
import { fetchProducts } from '@/lib/api';

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

## Performance Optimization

- **Images:** Use `next/image` for automatic optimization
- **Fonts:** Fonts are automatically optimized with `next/font`
- **Code Splitting:** Automatic with Next.js App Router
- **Dynamic Imports:** For lazy loading components

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Quality

### Run Linter

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

ISC

## Support

For support, email your-email@example.com or open an issue in the repository.

---

**Happy Coding!**
