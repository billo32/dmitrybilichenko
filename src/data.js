// All site content lives here. Replace every [bracketed] placeholder.

// Original BD logo (the owl). Override with VITE_LOGO_URL, or copy the file
// into /public and set it to "/bd-logo-white.png".
export const LOGO_URL =
  import.meta.env.VITE_LOGO_URL ||
  'https://dmitrybilichenko.com/static/images/bd-logo-white.png';

export const profile = {
  name: 'Dmitry Bilichenko',
  kicker: '// software development leader',
  intro: 'Senior Engineering Manager. I lead development of Paper Trading at TradingView.',
  facts: [
    ['role', 'Senior Engineering Manager'],
    ['company', 'TradingView, Paper Trading'],
    ['focus', 'delivery, performance engineering, team leadership'],
    ['experience', '14+ years in IT leadership'],
  ],
  status: '[open to / not looking]',
  about: [
    'I develop and deliver software projects, from simple websites to complex business process automation systems used worldwide. I started as a web developer and moved into engineering management.',
    '[One or two sentences on how you work: what kind of teams you build, what you are known for, what you are looking for next.]',
  ],
};

const SCOPE = '[scope · team size · key results]';

export const experience = [
  {
    period: '[YYYY] — now',
    company: 'TradingView',
    roles: ['Unit leader / Senior Manager, Paper Trading'],
    note: SCOPE,
    current: true,
  },
  {
    period: '[YYYY] — [YYYY]',
    company: 'SMART EdTech',
    roles: ['Head of development, LMS platform'],
    note: SCOPE,
  },
  {
    period: '[YYYY] — [YYYY]',
    company: 'MTS-Link',
    roles: ['Chapter / Team leader, Webinar services'],
    note: SCOPE,
  },
  {
    period: '[YYYY] — [YYYY]',
    company: 'Kaspersky',
    roles: ['Group Manager, KESCloud', 'Architect / Full-stack / UX, ThreatDeception'],
    note: SCOPE,
  },
  {
    period: '[YYYY] — [YYYY]',
    company: 'ESKY',
    roles: ['Head of development department'],
    note: SCOPE,
  },
  { period: '[YYYY] — [YYYY]', company: 'RocketStudio', roles: ['Web developer'] },
  { period: '[YYYY] — [YYYY]', company: 'Virton', roles: ['Software developer'] },
];

export const talks = [
  { year: '[YYYY]', title: '[Talk title]', event: '[Conference, city]' },
  { year: '[YYYY]', title: '[Talk title]', event: '[Conference, city]' },
  { year: '[YYYY]', title: '[Talk title]', event: '[Conference, city]' },
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
  ['talks', 'talks'],
  ['side', 'side-projects'],
  ['contact', 'contact'],
];
