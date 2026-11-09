<div align="center">
  <img src="public/icon.svg" alt="Atlash Hub Logo" width="80" height="80" />

  <h1>ATLASH HUB</h1>

  <p><strong>A curated discovery and verification platform for developer tools, libraries, and micro-SaaS products.</strong></p>

  <p>
    <a href="https://atlash-hub.vercel.app"><strong>Explore Live Platform →</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16_App_Router-%23000000?style=flat&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19-%2361DAFB?style=flat&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-Strict-%233178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-%2306B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/Better_Auth-In--Database_RBAC-%23000000?style=flat" alt="Better Auth" />
    <img src="https://img.shields.io/badge/Drizzle_ORM-Type--Safe-%23C5F74F?style=flat&logo=drizzle&logoColor=black" alt="Drizzle ORM" />
    <img src="https://img.shields.io/badge/Neon-Serverless_Postgres-%2300E699?style=flat&logo=postgresql&logoColor=black" alt="Neon Postgres" />
  </p>
</div>

---

## Table of Contents

- [Overview](#overview)
  - [Target Audience](#target-audience)
  - [Core User Flow](#core-user-flow)
- [Core Platform Capabilities](#core-platform-capabilities)
- [Product Moderation Lifecycle](#product-moderation-lifecycle)
- [Database Architecture & Entity Graph](#database-architecture--entity-graph)
- [Security & Performance Design](#security--performance-design)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#1-prerequisites)
  - [Installation](#2-repository-setup)
  - [Environment Configuration](#3-environment-configuration)
  - [Database Initialization](#4-database-initialization)
  - [Development Server](#5-launch-development-server)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

---

## Overview

Finding reliable developer software is frustrating. Great open-source utilities and indie tools frequently get lost in social feeds, unindexed forums, or uncurated link lists stuffed with marketing noise.

**Atlash Hub** provides a structured, community-indexed alternative. It operates as a verified product directory where creators showcase active tools and community members surface vetted software through authenticated reviews and a server-enforced moderation pipeline.

### Target Audience

* **Developers & Indie Builders**: Showcase software with live links, source repositories, and technical specs to reach an engineering audience.
* **Engineering Teams**: Discover tested tools, inspect project health, and compare alternatives without promotional bloat.
* **Reviewers & Curators**: Review submissions, moderate listings, and prevent stale or spam submissions from reaching the public feed.

### Core User Flow

1. **Search & Filter**: Browse products by category, tech stack, and verified community ratings with instant client-side filtering.
2. **Submit Projects**: Authenticate via GitHub or Google to submit an application with technical specs and repository targets.
3. **Community Upvoting**: Support quality tools with single-vote composite constraints that prevent vote duplication.
4. **Moderator Verification**: Administrators review submissions in a protected queue, validating repository health before approving public indexing.

---

## Core Platform Capabilities

* **Server-Rendered Directory**: Public discovery pages are generated via Next.js Server Components for instant initial paint and zero unnecessary client JavaScript.
* **Two-Tier Quality Control**: New tools enter a protected `PENDING` queue, preventing unvetted entries from appearing on the live discovery feed.
* **Native In-Database Authentication**: Powered by **Better Auth**, storing sessions and user records directly in PostgreSQL with strict Role-Based Access Control (RBAC).
* **Instant Cache Revalidation**: On-demand route cache purging via `revalidatePath('/explore')` reflects moderator approvals immediately across public pages.
* **Composite Key Upvoting**: Relational constraints prevent bot or duplicate vote loops at the database schema level.

---

## Product Moderation Lifecycle

Every submission follows a deterministic pipeline from creation through verification and cache purging:

```mermaid
sequenceDiagram
    autonumber
    actor Creator as Creator
    participant App as Server Action
    participant DB as Neon PostgreSQL
    actor Admin as Moderator

    Creator->>App: Submit product (Metadata, Repo, Specs)
    App->>DB: Insert record (Status: "PENDING")
    DB-->>Creator: Submission queued for review

    Admin->>App: Access moderation panel (/admin)
    App->>DB: Query pending submissions
    Admin->>App: Dispatch approve action
    App->>DB: Update record (Status: "APPROVED")
    App->>App: Trigger revalidatePath('/explore')
    App-->>Admin: Feed cache purged & item live
```

---

## Database Architecture & Entity Graph

The relational schema is built with Drizzle ORM, utilizing foreign-key cascades, automated timestamps, and explicit indexation on high-frequency lookup keys:

```text
db/
├── schema.ts           # Business schemas (Products, Categories, Reviews, Votes)
├── auth-schema.ts      # Identity schemas (Users, Sessions, Accounts, Verifications)
└── seeds.ts            # Local development fixtures
```

### Relational Entity Graph

* **`users`**: Core identity storage with role attributes (`user`, `moderator`, `admin`).
* **`sessions`**: Server-managed authentication tokens with cryptographic expiration boundaries.
* **`products`**: Product specifications, repository links, media assets, owner foreign keys, and status flags (`pending`, `approved`, `rejected`).
* **`reviews` & `votes`**: Community interaction records constrained by composite primary keys (`userId`, `productId`) to enforce single-vote integrity.

---

## Security & Performance Design

1. **Server-Side Validation**: All mutations run via Next.js Server Actions validated through strict **Zod** schemas before executing database transactions.
2. **Layered RBAC Protection**: Administrative endpoints enforce both route-level middleware checks and database-level user role verification on every mutation.
3. **Connection Pooling**: Neon serverless connection pooling prevents pool exhaustion during concurrent read/write spikes.
4. **Static Regeneration**: Discovery routes rely on static rendering paired with on-demand cache revalidation, serving instant cached pages until a moderator update triggers an invalidation.

---

## Tech Stack

* **Framework**: Next.js 16 (App Router, Server Actions, React 19)
* **Language**: TypeScript (Strict Mode)
* **Authentication**: Better Auth (In-Database Sessions, OAuth)
* **Database**: Neon Serverless PostgreSQL
* **ORM**: Drizzle ORM
* **Validation**: Zod
* **Styling**: Tailwind CSS v4, Radix UI Primitives
* **Package Manager**: pnpm
* **Deployment**: Vercel

---

## Project Structure

```text
atlash-hub/
├── app/
│   ├── (auth)/             # Authentication views and OAuth callbacks
│   ├── (public)/           # Explore feed, search, and product details
│   ├── admin/              # Protected moderation review dashboard
│   ├── api/auth/[...all]/  # Better Auth wildcard HTTP handler
│   └── submit/             # Authenticated submission wizard
├── components/
│   ├── admin/              # Review queue tables and approval controls
│   ├── forms/              # Zod-backed form controllers
│   ├── products/           # Product cards, badges, and upvote controls
│   └── ui/                 # Design system primitives
├── db/                     # Drizzle schemas, migrations, and seed scripts
├── lib/
│   ├── actions/            # Type-safe Server Actions
│   ├── auth.ts             # Better Auth server configuration
│   └── auth-client.ts      # Client session helpers
└── types/                  # Shared domain contracts and DTOs
```

---

## Getting Started

### 1. Prerequisites

Ensure the following tools are installed:
* Node.js `22.0.0` or higher
* [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
* A [Neon PostgreSQL](https://neon.tech) database instance

### 2. Repository Setup

```bash
git clone https://github.com/abdul-rahman-0x/atlash-hub.git
cd atlash-hub
pnpm install
```

### 3. Environment Configuration

Create a local environment file:

```bash
cp .env.example .env.local
```

Configure your service credentials:

```env
# Database
DATABASE_URL="postgresql://username:password@ep-sample-pooler.region.neon.tech/atlash?sslmode=require"

# Better Auth
BETTER_AUTH_SECRET="your_32_character_base64_secret"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your_google_oauth_client_id"
GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"

GITHUB_CLIENT_ID="your_github_oauth_client_id"
GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Initialization

```bash
# Push schemas to Neon PostgreSQL
pnpm drizzle-kit push

# (Optional) Seed initial categories and products
pnpm db:seed
```

### 5. Launch Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

---

## Roadmap

- [ ] Automated GitHub repository health checks (stars, license, commit recency).
- [ ] RSS and webhook feeds for newly approved products by category.
- [ ] Creator dashboard with analytics on profile views and external link clicks.
- [ ] Public developer API for querying verified tools programmatically.

---

## License

Distributed under the [MIT License](LICENSE).

---

## Author

Crafted by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**
