# Portfolio

Bilingual (EN/DE) personal portfolio website of an apprentice application developer.

**Live site:** https://kiera-portfolio.vercel.app

### tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Internationalization | next-intl v4 |
| Validation | Zod |
| Email | Resend |
| Animation and icons | Motion, lucide-react |
| Linting | ESLint 9 with eslint-config-next |
| Hosting | Vercel |

## Getting Started

### prerequisites

- Node.js
- npm

### installation

```bash
git clone https://github.com/kirsnif/Webportfolio
cd Webportfolio
npm install
```

### environment variables

The contact form needs two variables. Create a file names .env.local in the project root. It is listed in .gitignore, so it's never commited.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you<span>@example.com
```

### run the development server

```bash
npm run dev
```

