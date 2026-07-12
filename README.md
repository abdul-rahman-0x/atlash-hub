<p align="center">
  <img src="./public/icon.svg" alt="Atlash Hub Logo" width="150" height="130">
</p>

<h1 align="center">Atlash Hub</h1>

<p align="center">
  <strong>Discover, validate, and showcase products that deserve to be seen.</strong>
</p>

<p align="center">
  Atlash Hub is a community-driven product discovery platform built for developers, makers, and startups. It provides a structured ecosystem where creators share their work and communities discover trusted products through a scalable moderation workflow.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16_Stable-black?style=flat&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-19-%2361DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-%233178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-%2306B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Better_Auth-Production-black?style=flat" />
  <img src="https://img.shields.io/badge/Drizzle-ORM-%23C5F74F?style=flat" />
  <img src="https://img.shields.io/badge/Neon-PostgreSQL-%234169E1?style=flat&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel" />
</p>

## Why Atlash Hub Exists

Modern developers build thousands of valuable products every day, yet discovering reliable software remains difficult. Great tools often disappear inside fragmented GitHub repositories, Slack channels, Notion pages, or outdated documentation.

The challenge isn't building products—it's helping people **discover and trust them**.

Atlash Hub solves this by creating a curated ecosystem. Instead of a static directory, we provide a platform where builders showcase validated work and administrators maintain quality through a rigorous moderation pipeline.

> **Goal:** Build a platform where great products become easier to discover, easier to trust, and easier to scale.

## The Engineering Challenge: The Auth Pivot

Building Atlash Hub was never primarily a UI challenge. The real test was designing a platform capable of supporting secure, role-based workflows and database consistency.

One of the largest architectural decisions involved migrating the entire authentication system. Originally, the project used **Clerk**. As the application evolved, several limitations became apparent:

- Increasing dependency on external abstractions.
- Reduced control over session persistence.
- Challenges supporting custom administrative "Admin" roles.

To solve this, I migrated the entire stack to **Better Auth**. This required rebuilding the session management, OAuth providers, and database schemas from the ground up. The result is an authentication architecture with complete application ownership, improved maintainability, and significantly greater flexibility for future authorization and administrative workflows.

## Product Submission Workflow

Every product passes through a server-side validation pipeline before becoming discoverable.

```mermaid
flowchart LR
    A[Authenticated User] --> B[Submission]
    B --> C[Server Validation]
    C --> D[Database Storage]
    D --> E[Admin Moderation]
    E --> F[Public Discovery]
```

This workflow ensures:

- authenticated ownership
- validated submissions
- scalable moderation
- future review systems
- maintainable approval pipelines

## System Architecture

The platform follows a **Server-First** architecture using Next.js Server Components and Server Actions to keep the client bundle minimal and logic secure.

```mermaid
flowchart LR
    User[User Browser] --> UI[Next.js 16 App Router]
    UI --> Auth[Better Auth]
    UI --> Actions[Server Actions]
    Actions --> ORM[Drizzle ORM]
    ORM --> DB[(Neon PostgreSQL)]
    Actions -.-> Future[Future Services]
```

This architecture provides:

- minimal client-side complexity
- centralized business logic
- end-to-end type safety
- simplified authorization
- scalable database access
- easier long-term maintenance

## Authentication Architecture

Authentication was one of the most important engineering concerns during development.

The application now owns its entire authentication flow through Better Auth, providing significantly greater flexibility for future administrative and authorization features.

```mermaid
sequenceDiagram
    participant U as User
    participant A as Atlash
    participant B as Better Auth
    participant G as Google/GitHub
    participant D as Database

    U->>A: Sign In
    A->>B: Request Authentication
    B->>G: OAuth Flow
    G-->>B: User Profile
    B->>D: Create Session
    D-->>A: Authenticated Session
    A-->>U: Redirect
```

This approach provides:

- server-side session handling
- secure OAuth workflows
- centralized authorization
- future role-based permissions
- maintainable administrative access

## Security Architecture

Security influenced nearly every architectural decision within Atlash Hub.

The platform currently implements:

- server-side session validation
- OAuth authentication
- protected routes
- server actions
- schema validation
- database constraints
- centralized authorization
- environment isolation

The goal was to minimize attack surfaces while avoiding unnecessary client-side trust assumptions.

## Scalability Strategy

Atlash Hub was intentionally designed to support future growth.

Current architectural decisions enable:

- role-based permissions
- moderation workflows
- analytics dashboards
- recommendation systems
- search infrastructure
- real-time notifications
- event-driven processing
- API integrations

By maintaining clear boundaries between authentication, business logic, and persistence layers, future features can be introduced incrementally without requiring large-scale rewrites.

## Tech Stack & Tooling

- **Framework:** Next.js 16 (App Router, Server Components)
- **Authentication:** Better Auth (Google & GitHub OAuth)
- **Database:** Neon PostgreSQL (Serverless)
- **ORM:** Drizzle ORM
- **Validation:** Zod (Schema-first integrity)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui + Radix UI
- **Deployment:** Vercel
- **Tooling:** PNPM, ESLint, TypeScript Strict Mode

## Project Structure

```bash
atlash-hub/

├── app/                    # Next.js App Router pages and route handlers
│   ├── admin/              # Admin moderation dashboard
│   ├── api/                # API routes and server endpoints
│   ├── explore/            # Product discovery experience
│   ├── products/           # Product detail pages
│   └── submit/             # Product submission workflow
│
├── components/             # Reusable UI and feature components
│   ├── admin/              # Admin dashboard components
│   ├── forms/              # Form components and validation UI
│   ├── landing-page/       # Homepage sections
│   ├── products/           # Product-related components
│   └── ui/                 # Shared design system components
│
├── db/                     # Database layer
│   ├── schema.ts           # Drizzle database schema
│   ├── auth-schema.ts      # Authentication schema
│   └── seeds.ts            # Seed data
│
├── lib/                    # Business logic and server utilities
│   ├── admin/              # Admin actions and utilities
│   ├── products/           # Product services and actions
│   ├── auth.ts             # Better Auth configuration
│   ├── auth-client.ts      # Client authentication helpers
│   └── auth-session.ts     # Session management
│
├── public/                 # Static assets
├── types/                  # Shared TypeScript definitions
└── drizzle/                # Database migrations
```

## Getting Started

### 1. Prerequisites

Before running Atlash Hub locally, ensure you have:

- Node.js 22+
- PNPM(`npm install -g pnpm`)
- A Neon PostgreSQL instance

### 2. Installation

```bash
git clone https://github.com/your-username/atlash-hub.git
cd atlash-hub
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Environment Setup

Copy the example file and fill in your credentials:

```bash
cp .env.example .env.local
```

Required Variables:

```env
# PostgreSQL connection string from Neon
DATABASE_URL="postgresql://username:password@host/neondb?sslmode=require"

# Better Auth (Generate secret via: openssl rand -base64 32)
BETTER_AUTH_SECRET="your_generated_secret"
BETTER_AUTH_URL="http://localhost:3000"

# Google & GitHub OAuth credentials
GOOGLE_CLIENT_ID="your_id"
GOOGLE_CLIENT_SECRET="your_secret"
GITHUB_CLIENT_ID="your_id"
GITHUB_CLIENT_SECRET="your_secret"

# Local URL for development
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 5. Database Sync & Launch

```bash
# Push schema to Neon
pnpm drizzle-kit push

# Start the dev server
pnpm dev
```

Open `http://localhost:3000` to see it in action.

## Security & Scalability

Atlash Hub was designed around a server-first architecture where authentication, authorization, validation, and persistence remain clearly separated concerns.

Current implementation includes:

- Server-side session validation
- Route protection via middleware
- Zod-based schema validation
- Centralized authorization logic
- Database-level integrity constraints

The architecture also provides clear expansion paths for:

- Background job processing
- Event-driven workflows
- Search indexing
- Analytics systems
- Redis caching layers
- Real-time notification systems

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Built by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**
