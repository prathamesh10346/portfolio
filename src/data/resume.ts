import bcswapImg from '../assets/images/project-bcswap.webp'
import oxifleetImg from '../assets/images/project-oxifleet.webp'

export const profile = {
  name: 'Prathmesh Tangade',
  role: 'Mobile Application Engineer',
  tagline: 'Flutter Developer building fintech & blockchain apps that ship.',
  location: 'Pune, Maharashtra, India',
  email: 'prathameshtangade097@gmail.com',
  phone: '+91 82638 16969',
  resumeUrl: '/Prathmesh_Tangade_Resume.pdf',
  summary:
    'Flutter Developer with 2+ years of experience designing and shipping production-grade mobile applications across fintech and blockchain. Skilled at translating complex product requirements into scalable, maintainable apps using clean architecture and modern state management — with end-to-end ownership from API and third-party integrations through CI/CD and store releases.',
  socials: {
    github: 'https://github.com/prathamesh10346',
    linkedin: 'https://linkedin.com',
  },
}

export const stats = [
  { label: 'Years of experience', value: 2, suffix: '+' },
  { label: 'Production apps shipped', value: 12, suffix: '+' },
  { label: 'Branded builds, one codebase', value: 7, suffix: '+' },
  { label: 'Crash-free sessions', value: 99.2, suffix: '%' },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Dart', 'Kotlin', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Mobile & Frontend',
    skills: ['Flutter SDK', 'React Native', 'Android SDK', 'BLoC', 'Riverpod', 'Provider', 'GetX', 'Material Design'],
  },
  {
    title: 'Backend, Cloud & Integrations',
    skills: ['REST APIs', 'Dio', 'Firebase', 'Web3 Integration', 'TensorFlow Lite', 'Socket.IO', 'Payment Gateways'],
  },
  {
    title: 'Tools & Practices',
    skills: ['SQLite', 'Hive', 'Git', 'GitHub Actions', 'Docker', 'Postman', 'Unit & Widget Testing', 'Agile'],
  },
]

export const experience = [
  {
    role: 'Mobile Application Development',
    company: 'PN Software Pvt Ltd',
    location: 'West Bengal, India',
    period: 'July 2024 — Present',
    points: [
      'Architected a Flutter + React Native blockchain app with secure crypto wallet connectivity and Web3 smart contract integration for on-chain transactions.',
      'Built a white-label EMI device-financing platform (device-lock app + admin/lender app) with Android Device Admin / Device Owner enforcement, shipping 7+ branded apps from one codebase.',
      'Migrated the remote command channel from Socket.IO to push-based delivery (OneSignal/FCM), improving reliability when the app is killed and cutting background battery drain.',
      'Cut average on-chain transaction processing time by 40% by optimizing gas estimation and moving submission to an async queue.',
    ],
  },
  {
    role: 'Software Engineer, Mobile Application Development (Flutter)',
    company: 'Saavy Relations Software LLP',
    location: 'India',
    period: 'July 2023 — June 2024',
    points: [
      'Built fintech features across 3+ production Flutter apps using Provider and Riverpod with a repository-based data layer.',
      'Integrated payment gateways with encrypted transaction handling; added unit/widget tests to catch regressions before release.',
      'Increased user engagement by 20% and cut app load times by 30% through UX optimization, local caching (Hive/SQLite), and fewer state rebuilds.',
    ],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Threeway.Studio',
    location: 'India',
    period: 'February 2023 — June 2023',
    points: [
      'Delivered 2 production Flutter apps end-to-end — UI, API integration, testing, and Play Store deployment.',
      'Integrated Firebase Analytics and Crashlytics with structured error handling, raising crash-free sessions from 94% to 99.2%.',
    ],
  },
]

export const projects = [
  {
    id: 'bcswap',
    name: 'BCSwap',
    tagline: 'Multi-Chain Crypto Wallet & DEX App',
    description:
      'Core wallet, swap, and blockchain integration for a multi-chain crypto wallet supporting Ethereum, Bitcoin, Solana, and Tron from a single seed phrase. Engineered a unified multi-chain wallet service handling HD key derivation and address generation across all four chains, with in-app token swapping, cross-chain bridging, staking, and real-time price/transaction updates over Socket.IO.',
    stack: ['Flutter', 'web3dart', 'Hive', 'Firebase', 'Socket.IO'],
    image: bcswapImg,
    accent: '#7c5cff',
  },
  {
    id: 'oxifleet',
    name: 'Oxifleet',
    tagline: 'Fleet Management Driver App',
    description:
      'Cross-platform (iOS/Android) fleet management app for drivers with a feature-based modular architecture covering vehicle tracking, bookings, service requests, and documents. Real-time driver-fleet communication over Socket.IO, live vehicle/booking tracking with Google Maps and Geolocator, biometric auth, and Firebase push notifications.',
    stack: ['Flutter', 'Provider', 'Socket.IO', 'FCM', 'Google Maps', 'Geolocator'],
    image: oxifleetImg,
    accent: '#2fd4c7',
  },
]

export const certifications = [
  { title: 'Docker Foundations Professional Certificate', issuer: 'Docker Inc.' },
  { title: 'GitHub Foundations', issuer: 'GitHub' },
  { title: 'SSOC Contributor', issuer: 'Social Summer of Code' },
]

export const education = {
  degree: 'Bachelor of Technology in Information Technology',
  period: '2021 — 2025',
  school: "JSPM's Bhivarabai Sawant Institute of Technology and Research, SPPU, Pune",
}
