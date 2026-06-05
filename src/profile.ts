export type ProjectGlyph = 'tui' | 'color' | 'portrait' | 'school' | 'gold'

export interface PersonalProject {
  title: string
  kind: string
  year: string
  desc: string
  tags: string[]
  link?: string
  url?: string
  status: 'live' | 'archived'
  glyph: ProjectGlyph
}

export interface WorkItem {
  title: string
  kind: string
  year: string
  desc: string
  tags: string[]
  link?: string
  url?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  where: string
  blurb: string
  stack: string[]
}

export interface Profile {
  name: string
  contact: {
    email: string
    linkedin: string
    linkedinUrl: string
    github: string
    githubUrl: string
    twitter: string
    twitterUrl: string
  }
  bio: string[]
  personal: PersonalProject[]
  work: WorkItem[]
  experience: ExperienceItem[]
}

export const PROFILE: Profile = {
  name: 'Ilham Farobi',
  contact: {
    email: 'hello@ifarobi.com',
    linkedin: 'linkedin.com/in/ifarobi',
    linkedinUrl: 'https://id.linkedin.com/in/ifarobi',
    github: 'github.com/ifarobi',
    githubUrl: 'https://github.com/ifarobi',
    twitter: 'x.com/ifarobi',
    twitterUrl: 'https://x.com/ifarobi',
  },
  bio: [
    "I've led squads at Bukalapak, shipped healthcare tooling at KangarooHealth, and freelanced fullstack for startups and Fortune 500s in between. Frontend most days — React, Vue, TypeScript, design systems — but I'm at home on Node, Go, Ruby, or PHP when the back end calls.",
    "What I care about: software that feels obvious to use, codebases that don't punish the next person to open them, and the small interaction details that turn a spec into a product.",
  ],
  personal: [
    {
      title: 'ServerTUI',
      kind: 'Open source · Solo',
      year: '2026',
      desc: 'A terminal UI for managing local servers — Docker, Ollama, cron, and apps in one place. Deploys apps, manages env, and speaks MCP. Python, scratching my own itch.',
      tags: ['Python', 'TUI', 'OSS'],
      link: 'github.com/ifarobi/servertui',
      url: 'https://github.com/ifarobi/servertui',
      status: 'live',
      glyph: 'tui',
    },
    {
      title: 'Pemantau Harga Emas',
      kind: 'Side product · Solo',
      year: '2026',
      desc: 'Gold price tracker for the Indonesian market — daily Antam and UBS spot prices, historical trend, and per-gram math. Built to scratch a personal investing itch.',
      tags: ['Next.js', 'Finance', 'ID'],
      link: 'pantauemas.id',
      url: 'https://www.pantauemas.id',
      status: 'live',
      glyph: 'gold',
    },
    {
      title: 'Coloring Cafe',
      kind: 'Side product · Solo',
      year: '2026',
      desc: 'Turn any photo into a coloring page — or generate a whole book. Upload, share, remix, download. Public gallery; AI image generation under the hood.',
      tags: ['Next.js', 'Convex', 'AI'],
      link: 'coloring.cafe',
      url: 'https://coloring.cafe/',
      status: 'live',
      glyph: 'color',
    },
    {
      title: 'Wong Library',
      kind: 'Side project · Archived',
      year: '2018',
      desc: 'Hand-drawn portrait generator — pick a style, get an illustrated version of yourself. Pre-AI, all crafted by hand. Sunsetted as life moved on.',
      tags: ['Generator', 'Illustration'],
      status: 'archived',
      glyph: 'portrait',
    },
    {
      title: 'Rumah Belajar',
      kind: 'Side project · Archived',
      year: '2015',
      desc: 'Interactive learning platform for Indonesian kids aged 6–12 — animated, colorful, encyclopedia-meets-playground. Sunsetted when the team disbanded.',
      tags: ['EdTech', 'Animation'],
      status: 'archived',
      glyph: 'school',
    },
  ],
  work: [
    {
      title: 'KangarooHealth Provider Dashboard',
      kind: 'Product · Frontend lead',
      year: '2023 — Now',
      desc: 'The dashboard providers — physicians, nurses, care coordinators — use to monitor remote patients. Real-time vitals, care-plan tooling, an opinionated component library underneath.',
      tags: ['React', 'TS', 'Healthcare'],
      link: 'kangaroohealth.com',
      url: 'https://kangaroohealth.com',
    },
    {
      title: 'Mitra Bukalapak',
      kind: 'Product · Squad lead',
      year: '2019 — 2022',
      desc: "The warung-owner companion app. Led the frontend squad and owned the design system that fed it; one of Bukalapak's flagship products at the time.",
      tags: ['Vue', 'Design system', 'Lead'],
      link: 'about',
      url: 'https://mitra.bukalapak.com',
    },
    {
      title: 'Late Checkout Studio',
      kind: 'Studio · Senior SWE',
      year: '2022 — 2023',
      desc: 'Public-facing studio website built while on the team at Late Checkout. Most product work there sits under NDA; this is the piece I can point at.',
      tags: ['Next.js', 'Site'],
      link: 'latecheckout.studio',
      url: 'https://www.latecheckout.studio/',
    },
    {
      title: 'Havenwood Academy',
      kind: 'Client · Fullstack',
      year: '2024',
      desc: 'Site for a residential treatment academy in Utah. Sister-site to Havenwood SLC. Built and shipped solo as freelance.',
      tags: ['Next.js', 'Freelance'],
      link: 'havenwoodacademy.org',
      url: 'https://www.havenwoodacademy.org/',
    },
    {
      title: 'Havenwood SLC',
      kind: 'Client · Fullstack',
      year: '2024',
      desc: 'Companion site for the Salt Lake City clinical campus. Same system, different brand surface.',
      tags: ['Next.js', 'Freelance'],
      link: 'havenwoodslc.com',
      url: 'https://www.havenwoodslc.com/',
    },
    {
      title: 'Modern Animal',
      kind: 'Client · archived',
      year: '2021',
      desc: 'Marketing site for the modern veterinary practice. The site has since been redesigned by the in-house team — archived in spirit.',
      tags: ['Freelance', 'Archive'],
      link: 'modernanimal.com',
      url: 'https://modernanimal.com',
    },
  ],
  experience: [
    {
      role: 'Senior Frontend Engineer',
      company: 'KangarooHealth',
      period: '2023 — Now',
      where: 'Remote · USA',
      blurb: 'Frontend lead on the provider dashboard — the tool physicians, nurses and care coordinators use to monitor patients remotely. Architecture, mentorship, and the components people actually reach for.',
      stack: ['React', 'TypeScript', 'Vue'],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Late Checkout',
      period: '2022 — 2023',
      where: 'Remote',
      blurb: 'Worked across a portfolio of projects — Fortune 500 clients and consumer products — spanning frontend, backend, Web3, and Framer. Greenfield work; shipped fast, broke little.',
      stack: ['Next.js', 'Node', 'Web3', 'Framer'],
    },
    {
      role: 'Frontend Engineer · Squad Lead',
      company: 'Bukalapak',
      period: '2018 — 2022',
      where: 'Jakarta, ID',
      blurb: "Led the squad behind Mitra (warung-owner app, the company's largest product). Owned Official Brands and Cloud Migration's core frontend. Touched Ruby/Vue on the backend when squads needed it.",
      stack: ['Vue', 'Ruby', 'JS'],
    },
    {
      role: 'Software Engineer',
      company: 'Eaciit',
      period: '2017 — 2018',
      where: 'Jakarta, ID',
      blurb: 'Data-heavy software for enterprise clients across industries.',
      stack: ['React', 'Go'],
    },
    {
      role: 'Frontend Developer',
      company: 'Limakilo',
      period: '2016 — 2017',
      where: 'Jakarta, ID',
      blurb: 'E-commerce site + admin dashboard for a farm-to-kitchen marketplace.',
      stack: ['React', 'Bootstrap'],
    },
  ],
}
