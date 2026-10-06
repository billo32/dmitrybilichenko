// All site content lives here. Replace every [bracketed] placeholder.

// Original BD logo (the owl). Override with VITE_LOGO_URL, or copy the file
// into /public and set it to "/bd-logo-white.png".
export const LOGO_URL =
  import.meta.env.VITE_LOGO_URL ||
  'https://dmitrybilichenko.com/static/images/bd-logo-white.png';

export const profile = {
  name: 'Dmitry Bilichenko',
  kicker: '// software development leader',
  intro:
    'Senior Engineering Manager. I lead development of Paper Trading at TradingView, including The Leap and Contests.',
  facts: [
    ['role', 'Senior Engineering Manager'],
    ['company', 'TradingView, Paper Trading'],
    ['focus', 'delivery, performance engineering, team leadership'],
    ['experience', '14+ years in IT leadership'],
  ],
  status: '[open to / not looking]',
  about: [
    'I manage software projects and take responsibility for delivery: planning, risk control, status governance and what actually ships. I have led projects from simple websites to complex business process automation systems used worldwide.',
    'I build teams and set up the processes around them, from hiring and growing team leads to delivery management. My goal is to launch international-grade features with the quality, performance and scale that implies. I started as a web developer, so I stay close to the engineering.',
  ],
};

const SCOPE = '[scope · team size · key results]';

// Dates come from LinkedIn. A role with its own `period` is shown with it
// (used when one company has several roles).
export const experience = [
  {
    period: 'Apr 2025 — now',
    company: 'TradingView',
    roles: [{ title: 'Unit leader / Senior Manager, Paper Trading' }],
    note: '3 teams · 19 people in total',
    current: true,
  },
  {
    period: 'Dec 2024 — Apr 2025',
    company: 'SMART EdTech',
    roles: [{ title: 'Head of development, LMS platform' }],
    note: '2 teams · 10 people in total',
  },
  {
    period: 'Dec 2023 — Dec 2024',
    company: 'MTS-Link',
    roles: [{ title: 'Chapter / Team leader, Webinar services' }],
    note: '5 teams · 17 people in total',
  },
  {
    period: 'Jun 2016 — Jan 2023',
    company: 'Kaspersky',
    roles: [
      { title: 'Group Manager, KESCloud', period: 'Apr 2022 — Jan 2023' },
      { title: 'Team Lead, KESCloud', period: 'Oct 2018 — Apr 2022' },
      { title: 'Architect / Full-stack / UX, ThreatDeception', period: 'Jun 2016 — Oct 2018' },
    ],
  },
  {
    period: 'Oct 2015 — Jun 2016',
    company: 'Self-employed',
    roles: [{ title: 'Entrepreneur' }],
    note: '[what you built · clients · results]',
  },
  {
    period: 'Jun 2014 — Oct 2015',
    company: 'ESKY',
    roles: [
      { title: 'Head of development department', period: 'Jun 2015 — Oct 2015' },
      { title: 'Senior software developer', period: 'Jan 2015 — Jun 2015' },
      { title: 'Software developer', period: 'Jun 2014 — Jan 2015' },
    ],
    note: SCOPE,
  },
  {
    period: 'Sep 2012 — May 2013',
    company: 'RocketStudio',
    roles: [{ title: 'Web developer' }],
  },
  {
    period: 'Feb 2012 — Sep 2012',
    company: 'Virton',
    roles: [{ title: 'Software developer' }],
  },
];

export const hackathons = ['MTS-Link', 'Intel IoT', 'Facebook'];

export const projects = [
  {
    name: 'my-level.in',
    url: 'https://my-level.in/',
    text: 'Free adaptive English level test, CEFR A1–C2',
    kind: 'web',
  },
  {
    name: 'dosgatos.app',
    url: 'https://dosgatos.app/',
    text: 'Alternative firmware for the Ulanzi TC001 pixel clock',
    kind: 'firmware',
  },
  {
    name: 'miitokn.com',
    url: 'https://www.miitokn.com/',
    text: 'Offline macOS tool for Xiaomi device tokens, Rust + Tauri',
    kind: 'macOS',
  },
];

export const links = [
  { label: 'linkedin', href: '#' },
  { label: 'x', href: '#' },
  { label: 'blog', href: '#' },
  { label: 'buy-me-a-coffee', href: '#' },
  { label: '[email]', href: '#' },
];

export const nav = [
  ['about', 'about'],
  ['experience', 'experience'],
  ['hackathons', 'hackathons'],
  ['side', 'side-projects'],
  ['contact', 'contact'],
];
