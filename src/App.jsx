import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx';
import Footer from './components/Footer.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import PricingSection from './components/PricingSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';

// ── DATA ──────────────────────────────────────────────────────────────────────

const links = [
  { name: 'About',    url: '#about'    },
  { name: 'Stack',    url: '#stack'    },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact',  url: '#contact'  },
];

// Skills / stack cards
const stackData = [
  {
    icon: '⛓',
    title: 'Solidity & DeFi',
    desc:  'Flash Loans, MEV arbitrage, PancakeSwap Flash Swaps, Aave V3, OpenZeppelin. Deployed on BSC & Ethereum Mainnet.',
  },
  {
    icon: '🤖',
    title: 'C# / .NET',
    desc:  'Off-chain MEV controllers with Nethereum. WebSocket low-latency scanners, private RPC routing, Dark Forest anti-sandwich.',
  },
  {
    icon: '🌐',
    title: 'Frontend',
    desc:  'React 18, TypeScript, Next.js, Vite, Tailwind CSS. Angular 13 for enterprise logistics platforms.',
  },
  {
    icon: '🐳',
    title: 'DevOps & Backend',
    desc:  'Docker, PostgreSQL, Spring Boot, Camunda BPM. CI/CD pipelines and containerised microservices.',
  },
  {
    icon: '📡',
    title: 'Web3 Infrastructure',
    desc:  'Alchemy RPC & WSS nodes, DexScreener API, GoPlus Security API, Foundry testing framework, Hardhat.',
  },
  {
    icon: '🎮',
    title: 'Game Dev & Other',
    desc:  'Unity / C# (MetroidVania dark platformer). Flutter mobile apps. Terminal config & developer tooling.',
  },
];

// Featured projects
const projectsData = [
  {
    icon: '⚡',
    title: 'DeFi-MEV-Ecosystem',
    desc:  'Central hub of a complete MEV system — 4 Solidity contracts, 10 off-chain C# repos, Flash Loans to autonomous sniping on BSC.',
  },
  {
    icon: '🐺',
    title: '12_MultiTokenBrain',
    desc:  'MEV radar V5 — WebSocket low-latency scanner, dynamic gas math, private RPC anti-sandwich routing on BNB Chain.',
  },
  {
    icon: '🏹',
    title: '13_SniperBot',
    desc:  'Autonomous token sniper — DexScreener + GoPlus honeypot detection + atomic PancakeSwap swap on BSC Mainnet.',
  },
  {
    icon: '🗺',
    title: 'LogicSolutionFrontend',
    desc:  'Angular 13 logistics platform with Google Maps integration, real-time route tracking and enterprise UX.',
  },
  {
    icon: '⚙',
    title: 'apiCamunda',
    desc:  'Spring Boot + Camunda BPM backend for business process automation with REST API and workflow orchestration.',
  },
  {
    icon: '🐳',
    title: 'monitoring-stack',
    desc:  'Production-ready Docker Compose stack — Prometheus, Grafana, Node Exporter, PostgreSQL with persistent volumes.',
  },
];

// Repo links (shown as "pricing" cards repurposed)
const repoLinks = [
  {
    title: 'GitHub Profile',
    price: '👨‍💻',
    features: [
      'DeFi-MEV-Ecosystem',
      '12_MultiTokenBrain',
      '13_SniperBot',
      'monitoring-stack',
      'landing-page-react-hector',
    ],
    cta: 'github.com/HEO-80',
    url: 'https://github.com/HEO-80',
  },
  {
    title: 'LinkedIn',
    price: '🔗',
    features: [
      'Backend Developer',
      'DeFi Researcher',
      'Zaragoza, España',
      'Open to opportunities',
      'DM for collaborations',
    ],
    cta: 'linkedin.com/in/hectorob',
    url: 'https://www.linkedin.com/in/hectorob/',
  },
  {
    title: 'Live Portfolio',
    price: '🌐',
    features: [
      'React + TypeScript',
      'Deployed on Vercel',
      'Auto CD on push',
      'Full project showcase',
      'Always up to date',
    ],
    cta: 'View live site',
    url: 'https://landing-page-react-hector.vercel.app',
  },
];

// Testimonials repurposed as tech highlights / facts
const highlightsData = [
  {
    name: 'MEV Architecture',
    role: 'BSC Mainnet',
    text: 'Built a complete MEV ecosystem from scratch — Flash Loans, multi-DEX arbitrage, token sniping and private RPC routing. Tx hash confirmed on BscScan.',
  },
  {
    name: 'Full-Stack DeFi',
    role: 'Solidity + C# + React',
    text: 'End-to-end ownership: Solidity contracts on-chain, C#/.NET off-chain controllers, React frontends and Docker DevOps infrastructure.',
  },
  {
    name: 'Low-Latency Systems',
    role: 'WebSocket · ~50ms',
    text: 'Replaced HTTP polling (2s delay) with WebSocket event-driven architecture. Bot now reacts to new BSC blocks in ~50ms — competitive with institutional bots.',
  },
  {
    name: 'Dark Forest Routing',
    role: 'Anti-Sandwich',
    text: 'Integrated private RPC to bypass the public mempool entirely. Transactions go direct to validators — invisible to front-running bots.',
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      {/* NAV */}
      <Navbar title="Héctor Oviedo" links={links} />

      {/* HERO */}
      <div id="about">
        <HeroSection
          title="Héctor Oviedo"
          subtitle="Backend Developer & DeFi Researcher · Solidity · C# · React · Docker · Zaragoza, España"
          image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1280&q=80"
        />
      </div>

      {/* STACK */}
      <div id="stack">
        <FeaturesGrid data={stackData} />
      </div>

      {/* DIVIDER HERO */}
      <HeroSection
        title="From Flash Loans to Dark Forest"
        subtitle="Built a complete MEV ecosystem — Flash Swaps · Multi-DEX arbitrage · Autonomous sniping · Private RPC routing on BSC Mainnet."
        image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1280&q=80"
      />

      {/* PROJECTS */}
      <div id="projects">
        <FeaturesGrid data={projectsData} />
      </div>

      {/* HIGHLIGHTS */}
      <TestimonialsSection dataTestimonials={highlightsData} />

      {/* LINKS / CONTACT */}
      <div id="contact">
        <PricingSection dataPricing={repoLinks} />
      </div>

      {/* FOOTER */}
      <Footer
        year={2026}
        socialLinks={[
          { name: 'GitHub',   url: 'https://github.com/HEO-80'                        },
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hectorob/'            },
          { name: 'Vercel',   url: 'https://landing-page-react-hector.vercel.app'     },
        ]}
      />
    </>
  );
}

export default App;
