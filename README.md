<p align="center">
  <img src="./public/icon.svg" alt="Atlash Hub Logo" width="130" height="110">
</p>

<h1 align="center">Atlash Hub</h1>

<p align="center">
  <strong>Curated product discovery and verification platform for developers, makers, and startups.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16_App_Router-black?style=flat&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-19-%2361DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-%233178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-%2306B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Better_Auth-In--Database_RBAC-black?style=flat" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-Type--Safe-%23C5F74F?style=flat" />
  <img src="https://img.shields.io/badge/Neon-Serverless_PostgreSQL-%234169E1?style=flat&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-Production-black?style=flat&logo=vercel" />
</p>

---

## Overview

Modern developers build thousands of valuable utilities, developer libraries, and micro-SaaS products every week. However, discovering trustworthy software remains fragmented: great projects often get buried in chat channels, temporary social feeds, uncurated lists, or inactive forums.

**Atlash Hub** is an open platform designed to organize and elevate high-quality developer software. Instead of an unmoderated link dump, it operates as a structured directory where builders showcase active projects, community members discover tested tools, and administrators verify product quality through a server-enforced review workflow.

### Who is Atlash Hub for?

* **Developers & Indie Founders:** Showcase software, document technical specifications, link code repositories, and gain qualified visibility among technical peers.
* **Engineers & Technology Teams:** Discover reliable tools, inspect project credentials, and find tested alternatives without sorting through marketing spam.
* **Community Contributors & Reviewers:** Evaluate new submissions, curate categories, and ensure platform listings remain active, accurate, and trustworthy.

### What can you do on the platform?

1. **Explore & Search:** Filter through categorized, verified products with on-demand search and category sorting.
2. **Submit Projects:** Authenticate via GitHub or Google to submit applications, provide live demonstration URLs, repository targets, and technical metadata.
3. **Participate in Community Curation:** Upvote trusted products to surface the most valuable tools to the top of the discovery feed.
4. **Administrative Moderation:** Administrators review incoming submissions, verify project metadata, and approve or reject submissions before public indexing.

---

## Core Platform Capabilities

* **Curated Product Directory:** Public discovery portal rendered via Next.js Server Components for near-instant initial page loads and zero client-bundle bloat.
* **Authenticated Project Submissions:** Multi-field submission wizard for creators with client-side feedback and server-side validation.
* **Two-Tier Quality Control:** Staged submission pipeline where newly added tools enter a protected review queue, preventing unvetted listings from reaching the public directory.
* **Composite Community Upvoting:** Real-time engagement mechanics backed by composite database keys to ensure transparent and non-duplicated votes.
* **In-Database Session Authentication:** Native authentication powered by Better Auth, running directly within the relational database with strict role-based access control (RBAC).
* **Instant Public Revalidation:** On-demand route cache purging via `revalidatePath` that instantly reflects moderator approvals across the public directory without background polling.

---

## Product Moderation & Publishing Lifecycle

Every project submission follows a deterministic state machine to maintain ecosystem quality before indexing:

```mermaid
sequenceDiagram
    autonumber
    actor Creator as Creator (User)
    participant App as Next.js Server Action
    participant Auth as Better Auth Guard
    participant DB as Neon PostgreSQL (Drizzle)
    actor Admin as Moderator (Admin)

    Creator->>App: Submit project payload (Title, URL, Specs)
    App->>App: Validate schema boundaries via Zod
    App->>Auth: Verify authenticated session
    Auth-->>App: Session valid (User ID)
    App->>DB: Write product record (Status: "PENDING")
    DB-->>Creator: Confirmation toast (Under Review)

    Note over Admin,DB: Administrative Verification Flow
    Admin->>App: Open moderation dashboard
    App->>Auth: Enforce admin role guard (role === "admin")
    Auth-->>App: Access granted
    App->>DB: Fetch pending review queue
    Admin->>App: Dispatch Approval Action
    App->>DB: Update product (Status: "APPROVED")
    App->>App: Trigger revalidatePath('/explore')
    App-->>Admin: Feed refreshed with verified item
```

---

## Database Architecture & Data Modeling

The relational schema is configured with strict foreign-key cascades, automated timestamps, and explicit indexation across lookup columns:

```bash
db/
├── schema.ts           # Business schemas (Products, Categories, Reviews, Votes)
├── auth-schema.ts      # Identity schemas (Users, Sessions, Accounts, Verifications)
└── seeds.ts            # Local development seed records
```

### Relational Entity Graph

* **`users`**: Central identity records storing user profiles and role attributes (`user`, `moderator`, `admin`).
* **`sessions`**: Server-managed authentication tokens with cryptographically generated expiry timestamps.
* **`products`**: Product specifications, repository links, media assets, owner foreign keys, and moderation states (`pending`, `approved`, `rejected`).
* **`reviews` / `votes`**: Community interaction records constrained by composite foreign keys to guarantee single-vote attribution per user.

---

## Security, Data Integrity & Scalability

1. **Zero Client Trust:** All mutations occur through Next.js Server Actions backed by strict Zod schema validation. Incomplete or malformed payloads are rejected before touching database transactions.
2. **Deterministic Role Gates:** Administrative routes (`/admin/*`) enforce a multi-layered barrier: path-level middleware protection combined with server-side database verification of the user's role on every action.
3. **Database Connection Pooling:** Neon serverless connection pooling prevents connection starvation during high-concurrency read and write cycles.
4. **On-Demand Cache Purging:** The public directory relies on static rendering with Next.js `revalidatePath`. Database reads remain minimal and fast, purging cached pages only when a product state transitions to approved.

---

## Tech Stack

* **Framework:** Next.js 16 (React 19, Server Components, Server Actions)
* **Language:** TypeScript (Strict Mode)
* **Authentication:** Better Auth (In-Database Sessions, Google & GitHub OAuth)
* **Database:** Neon PostgreSQL (Serverless, Pooled Architecture)
* **ORM:** Drizzle ORM (Type-Safe Query Layer)
* **Validation:** Zod (Runtime & Type-Level Schema Validation)
* **Styling:** Tailwind CSS v4 + Radix UI Primitives
* **Deployment:** Vercel

---

## Project Structure

```bash
atlash-hub/
├── app/
│   ├── (auth)/             # Login, signup, and OAuth callbacks
│   ├── (public)/           # Explore directory, search, and product detail views
│   ├── admin/              # Protected moderator review queue and platform metrics
│   ├── api/auth/[...all]/  # Better Auth wildcard HTTP route handler
│   └── submit/             # Authenticated product submission wizard
├── components/
│   ├── admin/              # Moderation tables and approval action triggers
│   ├── forms/              # Zod-backed form controllers and validation states
│   ├── products/           # Product cards, upvote controls, and spec presenters
│   └── ui/                 # Design system tokens (shadcn/ui primitives)
├── db/                     # Drizzle schemas, connection pools, and migration scripts
├── lib/
│   ├── actions/            # Type-safe Server Actions for mutations
│   ├── auth.ts             # Better Auth server configuration and plugin hooks
│   └── auth-client.ts      # Client session listener helpers
└── types/                  # Shared domain contracts and DTO definitions
```

---

## Getting Started

### 1. Prerequisites

Ensure you have the following installed locally:

* Node.js: `22.0.0` or higher
* Package Manager: `pnpm` (`npm install -g pnpm`)
* Database: A PostgreSQL instance (such as a free tier on [Neon](https://neon.tech))

### 2. Repository Setup

```bash
git clone https://github.com/abdul-rahman-0x/atlash-hub.git
cd atlash-hub
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Populate the required environment variables:

```env
# PostgreSQL connection string (Neon pooled instance)
DATABASE_URL="postgresql://username:password@ep-sample-pooler.region.neon.tech/atlash?sslmode=require"

# Better Auth Secret (Generate via: openssl rand -base64 32)
BETTER_AUTH_SECRET="your_32_character_base64_secret"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your_google_oauth_client_id"
GOOGLE_CLIENT_SECRET="your_google_oauth_client_secret"

GITHUB_CLIENT_ID="your_github_oauth_client_id"
GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"

# Public App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Initialization

```bash
# Push schemas directly to Neon PostgreSQL
pnpm drizzle-kit push

# (Optional) Seed the database with sample products and categories
pnpm db:seed
```

### 5. Launch Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to access Atlash Hub.

---

## License

Distributed under the [MIT License](LICENSE).

---

## Author

Developed by **[Abdul Rahman](https://github.com/abdul-rahman-0x)**
