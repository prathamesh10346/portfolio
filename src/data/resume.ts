import bcswapImg from '../assets/images/project-bcswap.webp'
import bcswap0Img from '../assets/images/bcswap-0.webp'
import bcswap1Img from '../assets/images/bcswap-1.webp'
import bcswap2Img from '../assets/images/bcswap-2.webp'
import bcswap3Img from '../assets/images/bcswap-3.webp'
import oxifleetOnboardingImg from '../assets/images/project-oxifleet.webp'
import oxifleetVehiclesImg from '../assets/images/oxifleet-vehicles.webp'
import oxifleetDashboardImg from '../assets/images/oxifleet-dashboard.webp'
import zefyronExploreImg from '../assets/images/zefyron-explore.webp'
import zefyronDashboardImg from '../assets/images/zefyron-dashboard.webp'
import zefyronProfileImg from '../assets/images/zefyron-profile.webp'
import simbridge1Img from '../assets/images/simbridge-1.webp'
import simbridge2Img from '../assets/images/simbridge-2.webp'
import simbridge3Img from '../assets/images/simbridge-3.webp'

export const profile = {
  name: 'Prathmesh Tangade',
  role: 'Mobile Application Engineer',
  tagline: 'Flutter Developer building fintech, blockchain & industrial software that ships.',
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
    skills: ['Dart', 'Kotlin', 'Java', 'JavaScript', 'SQL', 'PostgreSQL'],
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
    skills: ['SQLite', 'Hive', 'Desktop & Kiosk Apps', 'PDF Reporting', 'Git', 'GitHub Actions', 'Docker', 'Postman', 'Unit & Widget Testing', 'Agile'],
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
    images: [bcswapImg, bcswap0Img, bcswap1Img, bcswap2Img, bcswap3Img],
    framed: true,
    accent: '#7c5cff',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.pnsoftware.uniswap&hl=en_IN',
    } as { android?: string; ios?: string } | undefined,
  },
  {
    id: 'oxifleet',
    name: 'Oxifleet',
    tagline: 'Fleet Management Driver App',
    description:
      'Cross-platform (iOS/Android) fleet management app for drivers with a feature-based modular architecture covering vehicle tracking, bookings, service requests, and documents. Real-time driver-fleet communication over Socket.IO, live vehicle/booking tracking with Google Maps and Geolocator, biometric auth, and Firebase push notifications.',
    stack: ['Flutter', 'Provider', 'Socket.IO', 'FCM', 'Google Maps', 'Geolocator'],
    images: [oxifleetOnboardingImg, oxifleetVehiclesImg, oxifleetDashboardImg],
    framed: false,
    accent: '#2fd4c7',
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.oxifleet.driver&hl=en_IN',
      ios: 'https://apps.apple.com/us/app/oxifleet/id6788288763',
    },
  },
  {
    id: 'zefyron',
    name: 'Zefyron',
    tagline: 'Startup ↔ Investor Networking Platform',
    description:
      'A discovery and dealmaking platform connecting startups with investors and investment companies. Built a searchable, filterable directory of thousands of startups with rich company profiles (founders, funding sought, audience, traction), plus a founder dashboard bundling tools for investor discovery, deal flow, business valuation, and pitch-deck building.',
    stack: ['Flutter', 'REST APIs', 'Firebase'],
    images: [zefyronExploreImg, zefyronDashboardImg, zefyronProfileImg],
    framed: true,
    accent: '#ff5c7c',
    links: {
      android: 'https://play.google.com/store/apps/details?id=app.mobile.zefyron&hl=en_IN',
      ios: 'https://apps.apple.com/us/app/zefyron/id6463197517',
    },
  },
  {
    id: 'simbridge',
    name: 'SIMBridge',
    tagline: 'Self-Hosted Android SMS & Call Gateway',
    description:
      'Turns an ordinary Android phone into a programmable telecom gateway: a cloud backend sends SMS through the phone’s SIM, receives incoming SMS, verifies numbers with missed calls, and bridges GSM calls, all without a third-party SMS provider. Flutter app with a native Kotlin layer (TelecomManager, InCallService) for what plugins can’t cover, a Socket.IO relay, QR pairing, always-on background operation and OTA APK updates.',
    stack: ['Flutter', 'Kotlin', 'Socket.IO', 'TelecomManager', 'fl_chart'],
    images: [simbridge1Img, simbridge2Img, simbridge3Img],
    framed: false,
    accent: '#ffb02e',
    links: undefined as { android?: string; ios?: string } | undefined,
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

export const freelance = [
  {
    id: 'pharma-mes',
    agency: 'RuruX',
    ownedLabel: 'What I owned',
    title: 'Pharma MES / HMI Terminal',
    client: 'Leading Indian pharmaceutical manufacturer',
    role: 'Freelance Flutter Developer (team project)',
    summary:
      'A Flutter Windows kiosk terminal that runs a pharmaceutical ointment production line: it controls CIP and batch phases over Modbus, and keeps a GxP-style electronic batch record in PostgreSQL. A long-running production system with 400+ Dart files, deployed on a factory-floor touchscreen.',
    owned: [
      {
        name: 'Database layer',
        detail: 'PostgreSQL schema, data access and management behind recipes, batches, tasks and records.',
      },
      {
        name: 'Process mimics',
        detail: 'Live vessel and production-line diagrams rendered from real-time PLC tag values.',
      },
      {
        name: 'Batch reports',
        detail: 'PDF batch reports and electronic batch record output for QA review.',
      },
      {
        name: 'Audit trail',
        detail: 'Traceable log of who changed what and when, built for compliance-driven workflows.',
      },
      {
        name: 'Alarms',
        detail: 'Alarm raising, listing and history for operators on the shop floor.',
      },
    ],
    flow: ['PLC', 'Modbus', 'Flutter terminal', 'PostgreSQL', 'PDF batch record'],
    stack: ['Flutter', 'GetX', 'PostgreSQL', 'Syncfusion', 'PDF', 'Windows desktop'],
    note: 'Client name, screens and data withheld under NDA.',
  },
  {
    id: 'cbell',
    agency: 'Client project',
    ownedLabel: 'What I built',
    title: 'Cbell',
    client: 'Event & task management app for organisations',
    role: 'Freelance Flutter Developer (solo)',
    summary:
      'A Flutter app where organisation teams plan events, assign and track tasks, and discuss both in real time. Built end to end on my own: about 200 Dart files across 19 feature modules, on Clean Architecture with BLoC/Cubit.',
    owned: [
      {
        name: 'Auth & sessions',
        detail: 'Org-code sign-up, OTP password reset, JWTs with automatic refresh and secure token storage.',
      },
      {
        name: 'Events & schedule',
        detail: 'Create and browse events with coordinators, guests, departments and visibility, plus a calendar view.',
      },
      {
        name: 'Task workflow',
        detail: 'Rich-text tasks with assignees, priorities, attachments and a seven-state approval workflow.',
      },
      {
        name: 'Real-time chat',
        detail: 'SignalR comment threads on every event and task.',
      },
      {
        name: 'Notifications',
        detail: 'FCM, local notifications and an in-app centre, with deep links that open the right screen.',
      },
      {
        name: 'Permissions',
        detail: 'UI actions shown or hidden from the permissions inside the user’s JWT.',
      },
    ],
    flow: ['Presentation', 'Use cases', 'Repositories', 'Retrofit / Dio', 'Client API'],
    stack: ['Flutter', 'BLoC/Cubit', 'Clean Architecture', 'Retrofit', 'SignalR', 'FCM', 'Hive'],
    note: 'Client name withheld. Source is private.',
  },
  {
    id: 'mediguard',
    agency: 'Client project',
    ownedLabel: 'What I built',
    title: 'MediGard',
    client: 'Medication management & reminder app',
    role: 'Freelance Flutter Developer (solo)',
    summary:
      'A cross-platform app that helps patients keep track of their medications, get timely push reminders, and log whether each dose was taken or skipped. I built the full mobile client against a REST backend.',
    owned: [
      {
        name: 'Secure onboarding',
        detail: 'Registration, email verification, OTP and multi-factor authentication with automatic token refresh.',
      },
      {
        name: 'Medication scheduling',
        detail: 'Multiple dose times per medication, shown as sorted, de-duplicated chips with a clock-style picker.',
      },
      {
        name: 'Push reminders',
        detail: 'FCM and local notifications with a “View Details” action and device-token registration.',
      },
      {
        name: 'Accessible instructions',
        detail: 'Instruction dialog opened from a notification, with text-to-speech for instructions and side effects.',
      },
      {
        name: 'Dose tracking',
        detail: 'Mark doses taken or skipped, with a calendar view and upcoming reminders.',
      },
      {
        name: 'Dashboard & reports',
        detail: 'Home dashboard and a report screen with charts.',
      },
    ],
    flow: ['Schedule', 'FCM reminder', 'Instruction dialog', 'Taken / skipped', 'Report'],
    stack: ['Flutter', 'Provider', 'Dio', 'FCM', 'flutter_tts', 'fl_chart'],
    note: 'Client name withheld. Source is private.',
  },
]
