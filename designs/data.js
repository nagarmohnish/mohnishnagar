// Shared portfolio content. Sets window.PORTFOLIO_DATA so every design
// pulls from the same source and edits propagate everywhere.

window.PORTFOLIO_DATA = {
  name: "Mohnish Nagar",
  initials: "MN",
  title: "Growth, Product, and Monetization Operator",
  tagline: "Growth, product & monetization, shipped 0 → 1.",
  location: "Bangalore, India",
  available: "Available for opportunities",
  email: "mohnish238@gmail.com",
  phone: "+91 95558 64171",
  linkedin: "linkedin.com/in/mohnishnagar",
  github: "github.com/nagarmohnish",
  resumeUrl: "https://nagarmohnish.github.io/mohnishnagar/Mohnish_Nagar_Resume.pdf",

  intro: "Growth, product, and monetization operator with 3+ years across digital media, AI/ML products, and startup ecosystems. Currently in the Founder's Office at LH2 Holdings (Strategy & Ops), driving 0→1 monetization across 35+ U.S. content properties — subscription monetization, funnel optimization, and analytics instrumentation.",

  bioLong: "Hands-on across subscription monetization, funnel optimization, AdOps, and analytics instrumentation. Launched the \"Go Ad-Free\" subscription on Shark Tank Blog, instrumented end-to-end GA4 + Stripe conversion funnels across 4 assets, scaled a newsletter to 20K subs in 3 months, and built content syndication partnerships with MSN, Yahoo News, and Newsbreak. Previously the first employee at Opinium.ai (~40L pre-seed), building an AI-powered social and news intelligence platform from 0→1, and assessed 500+ startups at PedalStart.",

  headlineStats: [
    { value: "35+",   label: "Content properties" },
    { value: "20K+",  label: "Newsletter subs / 3mo" },
    { value: "10%+",  label: "Revenue uplift" },
    { value: "~50M",  label: "Monthly sessions" },
  ],

  snapshot: {
    period: "Snapshot 2026",
    role: "Founder's Office, LH2 Holdings · Bangalore",
    building: [
      "\"Go Ad-Free\" subscription on Shark Tank Blog",
      "GA4 + Stripe webhook conversion funnels",
      "Newsletter monetization workflows",
    ],
    stack: ["Stripe", "GA4", "FastAPI", "GCP", "WordPress", "AdOps"],
    launch: {
      label: "Recent launch · Shark Tank Blog",
      body: "Launched the \"Go Ad-Free\" subscription ($1–2/month) with Stripe-first checkout, SSO / Google One Tap login, ad-suppression logic, and a custom WordPress membership plugin.",
    },
  },

  education: {
    school: "IIT Kanpur",
    degree: "B.Sc. Earth Sciences + MBA Minor",
  },

  skills: [
    {
      group: "Growth & Monetization",
      caption: "Core domain",
      primary: ["Subscription Systems", "Funnel Optimization", "Newsletter Growth", "Payments Integration", "AdOps", "Revenue Optimization", "CRO"],
      more: ["Audience Segmentation", "A/B Testing", "Pricing Strategy", "Email Marketing", "Content Syndication"],
    },
    {
      group: "Analytics & Product",
      caption: "Measurement stack",
      primary: ["GA4", "Google Tag Manager", "Stripe Dashboard", "PayPal", "Event Instrumentation"],
      more: ["User Behavior Analytics", "Cohort Analysis", "Dashboarding", "A/B Testing"],
    },
    {
      group: "Programming & Data",
      caption: "Build & pipelines",
      primary: ["Python", "FastAPI", "GCP", "SQL", "PostgreSQL", "NLP"],
      more: ["Neo4j", "Elasticsearch", "REST APIs", "JSON", "HTML", "CSS", "Git"],
    },
    {
      group: "Platforms & Distribution",
      caption: "Day-to-day · syndication",
      primary: ["WordPress", "Stripe", "PayPal", "Mediavine", "Raptive", "Jira"],
      more: ["MSN", "Yahoo News", "Newsbreak", "Google Sheets", "PowerPoint"],
    },
    {
      group: "Business & Ops",
      caption: "How I work",
      primary: ["Cross-functional Execution", "0→1 Product Launches", "Startup Operations", "GTM Strategy"],
      more: ["Stakeholder Management", "Structured Problem Solving", "Competitive Analysis"],
    },
  ],

  experience: [
    {
      period: "Jul 2025 — Present",
      role: "Founder's Office, Strategy & Ops",
      company: "LH2 Holdings",
      location: "Bangalore",
      current: true,
      summary: "Strategy & Ops across 35+ U.S. content properties — subscriptions, payments, GA4 instrumentation, AdOps, newsletters, and funnel optimization.",
      body: "Drive growth, monetization, and operations across a U.S.-based digital media portfolio of 35+ content properties — including Inquisitr, AllMusic, Shark Tank Blog, Vintage Aviation News, and F4WOnline — generating ~50M monthly sessions. Hands-on across subscription systems, payments, GA4 instrumentation, newsletter growth, AdOps, and funnel optimization. Built content syndication partnerships with MSN, Yahoo News, and Newsbreak to expand distribution. Ran competitive pricing analysis (e.g., F4WOnline $14.99/mo vs. Fightful $5.99/mo) to inform subscription pricing and feature prioritization.",
      highlight: {
        label: "Headline launch: \"Go Ad-Free\" Subscription",
        body: "Launched the \"Go Ad-Free\" subscription on Shark Tank Blog ($1–2/month) end-to-end — Stripe-first checkout, SSO / Google One Tap login, ad-suppression logic, and a custom WordPress membership plugin. Instrumented GA4 conversion funnels and Stripe webhook tracking across 4 publishing assets, contributing to a 10%+ revenue uplift through pricing experiments, CTA placement tests, and audience segmentation.",
      },
      metrics: [
        { value: "35+",   label: "Properties" },
        { value: "~50M",  label: "Sessions / mo" },
        { value: "20K+",  label: "Subs / 3mo" },
        { value: "10%+",  label: "Revenue uplift" },
      ],
      stack: ["Python", "FastAPI", "GCP", "GA4", "GTM", "Stripe", "PayPal", "WordPress", "AdOps", "Mediavine", "Raptive"],
    },
    {
      period: "Jul 2024 — Apr 2025",
      role: "Founding Data Analyst",
      company: "Opinium.ai",
      location: "Delhi",
      summary: "First employee at an AI/ML social & news intelligence startup. Raised ~40L pre-seed; built the product 0→1.",
      body: "First employee at Opinium.ai — an AI-powered social and news intelligence platform for trend analysis and digital identity tracking. Raised ~40 Lakh pre-seed at ideation stage from T9L Qube Studios; contributed to building the product from 0→1 over a 10-month period across product, data, and engineering. Designed NLP and LLM-based pipelines to analyze engagement patterns, sentiment, user behavior, and topic trends across large-scale datasets, and supported product strategy, feature prioritization, and user insight generation. Company wound down following PMF challenges — gained end-to-end exposure to building and shipping an AI product before shutdown.",
      stack: ["Python", "SQL", "PostgreSQL", "Neo4j", "NLP", "LLMs", "Elasticsearch"],
    },
    {
      period: "Aug 2023 — Jun 2024",
      role: "Startup Analyst",
      company: "PedalStart",
      location: "Gurugram",
      summary: "500+ startups evaluated; 200+ founder community ops; ecosystem programming.",
      body: "Led startup evaluation and onboarding workflows — assessing 500+ startups across product, market, and business potential. Worked with founders on GTM, growth positioning, and investor readiness. Ran ops and engagement for a 200+ founder community and coordinated ecosystem events across Bangalore and NCR.",
      stack: ["Excel", "Google Sheets", "PowerPoint", "Python"],
    },
    {
      period: "Apr 2023 — Jul 2023",
      role: "Business Associate, Investor Relations",
      company: "Cyntra",
      location: "Noida · POS & Integration Solutions",
      summary: "Investor research, pitch materials, and financial models for fundraising across fintech and POS integration segments.",
      body: "Conducted market research and investor analysis to identify strategic fundraising and business development opportunities. Built investor presentations, business decks, and financial models supporting fundraising conversations and partnership outreach. Supported ecosystem networking and strategic partnership initiatives across fintech and POS integration segments.",
      stack: ["Excel", "Google Sheets", "PowerPoint"],
    },
  ],

  featuredProjects: [
    {
      num: "01",
      tag: "Newsletter",
      title: "Inquisitr Dashboard",
      desc: "Real-time newsletter analytics — subscriber growth, open rates, and revenue tracking. Backbone of the 20K-subs / 3-month growth run at LH2.",
      stack: "JavaScript",
      url: "https://github.com/nagarmohnish/inquisitr_dashboard",
    },
    {
      num: "02",
      tag: "Subscription",
      title: "LH2 Subscription Analytics",
      desc: "Multi-site subscription analytics dashboard across F4W, AllMusic, VAN, and Shark Tank — with a locked metric spec for cross-property comparability.",
      stack: "TypeScript",
      url: "https://github.com/nagarmohnish/lh2-subscription-analytics",
    },
    {
      num: "03",
      tag: "LH2 Analytics",
      title: "AllMusic Stripe × GA4",
      desc: "LH2 multi-property pipeline joining Stripe transactions with GA4 behavioural data — unifying engagement and monetisation signals into one analytics layer.",
      stack: "Python",
      url: "https://github.com/nagarmohnish/all_music_stripe",
    },
    {
      num: "04",
      tag: "AI Tools",
      title: "convertinX",
      desc: "Universal content localization tool — translate text, dub audio, and localize video with subtitles across 10+ languages using open-source ML models.",
      stack: "TypeScript",
      url: "https://github.com/nagarmohnish/convertinX",
    },
  ],

  projectCategories: [
    {
      cat: "Newsletter",
      count: 1,
      items: [
        { title: "Email Revenue Simulator", desc: "Fintech-grade simulator — model newsletter economics, forecast breakeven, validate email monetisation.", stack: "TypeScript", url: "https://github.com/nagarmohnish/email-revenue-simulator" },
      ],
    },
    {
      cat: "Subscription",
      count: 1,
      items: [
        { title: "LH2 Assets UI", desc: "Shark Tank Blog UI — episode recaps, products, blog, startup listings with auth & subscription system.", stack: "HTML", url: "https://github.com/nagarmohnish/LH2_Assets_UI" },
      ],
    },
    {
      cat: "LH2 Analytics, UI, Content & AdOps",
      count: 6,
      items: [
        { title: "AllMusic Stripe Dashboard", desc: "Interactive Stripe analytics dashboard across a 12-month window.", stack: "HTML", url: "https://github.com/nagarmohnish/allmusic-stripe-dashboard" },
        { title: "Vintage Aviation News", desc: "Replica build for the VAN property — content layout and AdOps surfaces.", stack: "TypeScript", url: "https://github.com/nagarmohnish/vintage-aviation-news" },
        { title: "Wordsmyth UI", desc: "Front-end build tuned for editorial and discovery flows.", stack: "TypeScript", url: "https://github.com/nagarmohnish/wordsmyth-UI" },
        { title: "SEO Analytics Pipeline", desc: "Automated pipeline with Airflow and PostgreSQL for keyword tracking.", stack: "Python", url: "https://github.com/nagarmohnish/seo-analytics-pipeline" },
        { title: "SEO Audit", desc: "SEO audit automation — crawl, indexation, on-page checks.", stack: "Python", url: "https://github.com/nagarmohnish/seo-audit" },
        { title: "Miami Herald Scraper", desc: "Automated content monitoring via Google News RSS.", stack: "Python", url: "https://github.com/nagarmohnish/miami-herald-scraper" },
      ],
    },
    {
      cat: "AI Tools, DevOps & Automations",
      count: 11,
      items: [
        { title: "SIGNAL", desc: "AI & tech news platform with an automated content pipeline.", stack: "TypeScript", url: "https://github.com/nagarmohnish/signal" },
        { title: "Founder OS", desc: "Closed-loop AI operating layer for early-stage startups and VCs.", stack: "TypeScript", url: "https://github.com/nagarmohnish/founder-os" },
        { title: "Halo Demo", desc: "UI demos for event-bound discovery and proximity-based models.", stack: "HTML", url: "https://github.com/nagarmohnish/halo-demo" },
        { title: "Neo4j Graph Pipeline", desc: "PostgreSQL → LLM → Neo4j knowledge graph automation.", stack: "Python", url: "https://github.com/nagarmohnish/neo4j-setup" },
        { title: "CBot Ollama", desc: "Local chatbot with Ollama — on-device LLM.", stack: "Python", url: "https://github.com/nagarmohnish/cbot-ollama" },
        { title: "Translator", desc: "Multi-language translation engine using open-source NLP models.", stack: "Python", url: "https://github.com/nagarmohnish/translator" },
        { title: "ReelIt", desc: "AI-powered short-form video generation for social.", stack: "Python", url: "https://github.com/nagarmohnish/reelit" },
        { title: "Persi", desc: "Personal AI assistant — conversational interface, modern stack.", stack: "TypeScript", url: "https://github.com/nagarmohnish/persi" },
        { title: "Global Startups", desc: "Scraper across 6 cities — 1,019 startups indexed.", stack: "Python", url: "https://github.com/nagarmohnish/global-startups" },
        { title: "Honey & Lemon", desc: "Performance marketing agency — brand identity and web presence.", stack: "TypeScript", url: "https://github.com/nagarmohnish/agency" },
        { title: "Geo Analysis Tool", desc: "Spatial data analysis and location-based visualization.", stack: "Python", url: "https://github.com/nagarmohnish/geo_analysis_tool" },
      ],
    },
  ],
};
