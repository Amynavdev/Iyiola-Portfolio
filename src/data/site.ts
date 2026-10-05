// Every fact on the site lives here. Placeholders in [BRACKETS] still need the owner's input.

export const site = {
  name: 'Oluwaferanmi Iyiola',
  fullName: 'Oluwaferanmi Joseph Iyiola',
  url: 'https://iyiolaoluwaferanmi.com',
  email: 'iyolastrings@gmail.com',
  location: 'Port Louis, Mauritius',
  description:
    'Electronics engineer and full stack developer in Port Louis, Mauritius. IEEE published robotics, production software at VGR Solutions, open to remote roles worldwide.',
  links: {
    linkedin: 'https://www.linkedin.com/in/oluwaferanmi-iyiola-8a07a415b/',
    github: 'https://github.com/IYIOLASTRINGS',
    audiomack: 'https://audiomack.com/iyiolastrings/song/oluorun',
    instagram: 'https://www.instagram.com/iyiolastrings/',
  },
};

export const nav = [
  { href: '/about/', label: 'About', key: 'about' },
  { href: '/electronics/', label: 'Electronics', key: 'electronics' },
  { href: '/software/', label: 'Software', key: 'software' },
  { href: '/leadership/', label: 'Leadership', key: 'leadership' },
  { href: '/music/', label: 'Music', key: 'music' },
  { href: '/map/', label: 'Map', key: 'map' },
];

/** Hero chips, positioned in percent of the portrait so they orbit the face. */
export const heroChips = [
  { t: 'IEEE ICCCNT 2023', x: 4, y: 30, depth: 40, dot: '#4c8de6' },
  { t: '700+ scholars led', x: 14, y: 15, depth: 60, dot: '#f4f1ea' },
  { t: 'First Division, DTU', x: 97, y: 12, depth: 70, dot: '#3ccf8e' },
  { t: 'Raspberry Pi robotics', x: 99, y: 42, depth: 30, dot: '#4c8de6' },
  { t: '6 years remote with Peda', x: 96, y: 64, depth: 55, dot: '#f4f1ea' },
  { t: 'WhatsApp across 12+ repos', x: 52, y: 86, depth: 28, dot: '#3ccf8e' },
  { t: 'Guitarist · Oluorun', x: 4, y: 70, depth: 45, dot: '#4c8de6' },
];

export const builds = [
  { slug: 'eirt', t: 'EIRT robot', when: 'Sep 2022 to May 2023', img: '/images/eirt-front', d: 'Finds e-waste, picks it up, classifies it and sorts it. A Raspberry Pi on board runs it all.', team: 'With Loice and Tursélio', tags: ['Raspberry Pi', 'SolidWorks', 'EfficientNet'] },
  { slug: 'street-light', t: 'Automatic street light', when: 'Feb to May 2022', img: '/images/street', d: 'An LDR and an ATmega328P switch the lights on at dusk and off at dawn, with adjustable sensitivity.', team: 'With Tursélio and Loice', tags: ['LDR', 'ATmega328P', 'Arduino Uno'], small: true },
  { slug: 'traffic-light', t: 'Four way traffic light', when: 'Apr to Jun 2021', img: '/images/traffic', d: 'A four junction model with light timings coded on an Arduino.', team: 'Solo build', tags: ['Arduino', 'Timing logic'], small: true },
  { slug: 'touch-door', t: 'Touch door', when: 'Sep to Nov 2020', img: '/images/touchdoor', d: 'A door that opens and closes from a MOSFET touch switch, no microcontroller.', team: 'With Wail', tags: ['MOSFET', 'Analog'], small: true },
  { slug: 'auto-door', t: 'Automatic door', when: 'Sep to Nov 2020', img: '/images/mcdoor', d: 'A PIR sensor tells the Arduino someone is near and the door opens by itself.', team: 'With Wail', tags: ['PIR sensor', 'Arduino'], small: true },
  { slug: 'car-park', t: '3D car park', when: 'Sep to Nov 2021', img: '/images/car3d', d: 'An OpenGL simulation with 36 cars and surrounding houses, viewable from several angles.', team: 'With Gurazeez', tags: ['C++', 'OpenGL'], small: true },
];

export const silicon = [
  { tool: 'Cadence Virtuoso · 180nm', t: '4 bit barrel shifter', d: 'Full custom design with transmission gate multiplexers, compared on power and transistor count.' },
  { tool: 'Research', t: 'Memristor synapse', d: 'Emulating biological memory and threshold firing with a memristor.' },
  { tool: 'Proteus', t: 'Digital clock', d: 'A counter clock built around the 74HC192 IC.' },
  { tool: 'Icecast · HTML5', t: 'Internet radio', d: 'Real time voice broadcast, with the server set up from scratch.' },
];

export const eirtParts = [
  { t: 'Raspberry Pi', x: 53, y: 61, d: 'The brain, cooled by two fans. It runs the classification model, moves the arm and drives the motors, all on board.' },
  { t: 'Servo driver', x: 54, y: 43, d: 'A PWM board that drives every servo in the arm from the Pi.' },
  { t: 'Robotic arm', x: 74, y: 38, d: 'A servo arm that picks the item up and drops it into the right bin.' },
  { t: 'Sorting bins', x: 29, y: 38, d: 'Three bins, one per class of e-waste: [CLASSES FROM THE PAPER].' },
  { t: 'Power regulator', x: 28, y: 68, d: 'Steps the battery voltage down for the electronics. Its display shows the output voltage.' },
];

export const projects = [
  { t: 'WhatsApp for Elastik', where: 'At VGR Solutions', kind: 'Platform', stack: 'PHP · Socket.IO · Meta API', href: '/software/#elastik', d: 'Onboarding, live chat, templates and webhooks across a 12 repository ERP.' },
  { t: 'AmyNav', where: 'My product', kind: 'Product', stack: 'React · TypeScript · PHP', href: '/software/#products', d: 'WhatsApp commerce: 4 payment gateways and an assistant that never invents a price.' },
  { t: 'Tailor on the Go', where: 'My product', kind: 'Product', stack: 'PHP · Paystack', href: '/software/#products', d: 'Multi tenant platform for bespoke tailoring with subscriptions and a sandbox to live pipeline.' },
  { t: 'PropertyTrack', where: 'My product', kind: 'Product', stack: 'PHP · typed, DI', href: '/software/#products', d: 'Property management software on a strict, interface based architecture.' },
  { t: 'Xidok', where: '[WHO IT WAS FOR]', kind: 'Product', stack: '[STACK]', href: '/software/#products', d: '[ONE LINE: WHAT XIDOK IS AND WHAT YOU BUILT]' },
  { t: 'Print Engine V2', where: 'At VGR Solutions', kind: 'Platform', stack: 'PHP · TCPDF', href: '/software/#elastik', d: '40+ legacy templates rebuilt as one renderer, with tenant migration tooling.' },
  { t: 'AI Reports service', where: 'At VGR Solutions', kind: 'Platform', stack: 'Python · FastAPI · SSO', href: '/software/#elastik', d: 'A standalone microservice I wrote alone, fed by a QuickBooks data warehouse.' },
  { t: 'Peda Entertainment', where: 'Client since 2020', kind: 'Client', stack: 'WordPress · React · Astro', href: '/software/#clients', d: 'Their store and reading platform, now being rebuilt on React and Astro.' },
  { t: 'Rawbloom', where: 'Client · thegossipears', kind: 'Client', stack: 'WooCommerce', href: '/software/#clients', d: 'Skincare store with multi currency checkout.' },
  { t: 'EIRT robot', where: 'DTU · IEEE 2023', kind: 'Hardware', stack: 'Raspberry Pi · EfficientNet', href: '/electronics/eirt/', img: '/images/eirt-front-800.webp', d: 'Finds, classifies and sorts e-waste. 82.3% accuracy.' },
];

export const clientSites = ['IHVN-IRCE', 'ComicsDI', 'Futaku Studios', 'Peda Video', 'The Light Home Care', 'Nuskillz Legacy', 'Posh Wurld', 'Kaf Missions'];

export const elastik = [
  { t: 'WhatsApp Business integration', d: 'Meta Embedded Signup, real time messaging over Socket.IO, template management, per tenant credentials, webhooks and admin screens, across nearly every repo.' },
  { t: 'Integration Management framework', d: 'The shared way to configure and store third party credentials, shipped identically in 7 apps. WhatsApp and QuickBooks plug into it.' },
  { t: 'Print Preview V2', d: '40+ legacy print templates consolidated into one engine, plus the V1 to V2 tenant migration tooling and fixes for real cross tenant rendering bugs.' },
  { t: 'AI Reports service', d: 'A standalone FastAPI microservice I wrote alone: signed SSO token exchange, per tenant report bundles, read only warehouse access, fed by a QuickBooks ETL.' },
];

export const jobs = [
  { when: 'Sep 2023 to now', org: 'VGR Solutions, Port Louis', what: 'Software Developer on Elastik, their multi tenant ERP, CRM and CMS', tag: 'Day job' },
  { when: 'Apr 2020 to now', org: 'Peda Entertainment, Texas', what: 'Full Stack Developer for their store and reading platform, remote', tag: 'Long term client' },
  { when: 'Since 2017', org: 'thegossipears', what: 'My agency: WordPress, SEO and brand work for clients', tag: 'Built by me' },
];

export const leadership = {
  facts: [
    { t: 'Co founded the society and wrote its constitution', when: '2021' },
    { t: 'Helped build its website', when: '2021' },
    { t: 'Vice President, then President', when: '2022 to 2023' },
    { t: 'Hosted Summit 1.0 and Orientation', when: 'Jan 2023' },
    { t: 'Honoured at the ICCR Exit Engagement Evening', when: 'Jun 2023' },
  ],
  videos: [
    { t: 'Speech as President, DTU-ISS', when: 'University of Delhi', img: '/images/speech', src: '' },
    { t: 'Interview on DTU Studio', when: 'President, DTU-ISS 22 to 23', img: '/images/interview', src: '' },
    { t: 'Summit 1.0 and Orientation', when: '27 Jan 2023 · BR Auditorium, DTU', img: '/images/summit', src: '' },
  ],
};

export const places = [
  { key: 'port-louis', label: 'Port Louis', name: 'Port Louis, Mauritius', when: 'Home base · 2023 to now', line: 'VGR Solutions, AmyNav and my own products.', pt: [787, 418],
    items: [ { t: 'VGR Solutions', k: 'Software Developer, Elastik ERP', href: '/software/#elastik' }, { t: 'AmyNav', k: 'My product', href: '/software/#products' }, { t: 'Tailor on the Go, PropertyTrack', k: 'My products', href: '/software/#products' } ] },
  { key: 'new-delhi', label: 'New Delhi', name: 'New Delhi, India', when: '2019 to 2023', line: 'DTU, First Division. The society, EIRT, the lab builds and client work in India.', pt: [846, 230],
    items: [ { t: 'Delhi Technological University', k: 'BTech, First Division', href: '/about/' }, { t: 'DTU International Students Society', k: 'Co founder, then President', href: '/leadership/' }, { t: 'EIRT robot', k: 'IEEE ICCCNT 2023', href: '/electronics/eirt/' }, { t: 'The lab builds', k: '6 hardware projects', href: '/electronics/' }, { t: '[INDIA CLIENTS]', k: 'Through thegossipears', href: '/software/#clients' } ] },
  { key: 'usa', label: 'USA', name: 'United States', when: 'Remote · 2020 to now', line: 'Peda Entertainment in Texas, a long term client, and other US clients.', pt: [290, 224],
    items: [ { t: 'Peda Entertainment', k: 'Full Stack Developer, Texas', href: '/software/#clients' }, { t: 'Peda Video', k: 'Video site for Chayomo comics', href: '/software/#clients' }, { t: '[OTHER US CLIENTS]', k: 'Through thegossipears', href: '/software/#clients' } ] },
  { key: 'uk', label: 'UK', name: 'United Kingdom', when: '[YEARS]', line: 'Client work through thegossipears. [WHICH CLIENTS]', pt: [600, 143],
    items: [ { t: '[UK CLIENTS]', k: 'Through thegossipears', href: '/software/#clients' } ] },
  { key: 'nigeria', label: 'Nigeria', name: 'Nigeria', when: '[YEARS]', line: 'thegossipears client work. [CONFIRM]', pt: [617, 312],
    items: [ { t: 'thegossipears', k: 'My agency, since 2017', href: '/software/#clients' }, { t: '[CONFIRM CLIENTS HERE]', k: 'e.g. IHVN-IRCE, Rawbloom', href: '/software/#clients' } ] },
];

export const certificates = ['Web Applications for Everybody', 'Building Database Applications in PHP', 'JavaScript, jQuery and JSON', 'Foundations of UX Design', 'Object Oriented Programming in Java', 'Crash Course on Python', 'Python Programming, Udemy', 'Introduction to SQL'];

export const cvs = [
  { label: 'Embedded and vision', t: 'Embedded, robotics and computer vision', d: 'For hardware facing roles. Leads with EIRT, the IEEE paper and the lab builds.', pts: ['EIRT e-waste robot on a Raspberry Pi', 'IEEE ICCCNT 2023, 82.3% accuracy', 'Cadence Virtuoso, Arduino, ATmega328P'], file: '' },
  { label: 'Software', t: 'Software engineer', d: 'For PHP, Python and full stack roles. Leads with Elastik and production ownership.', pts: ['WhatsApp Business integration across 12+ repos', 'Integration Management framework in 7 apps', 'FastAPI reports service with SSO, sole author'], file: '' },
  { label: 'Full CV', t: 'Everything, in one file', d: 'Electronics, software, leadership and the rest.', pts: ['Work history since 2017', 'Projects and publication', 'Leadership and certificates'], file: '' },
];

export const toolkit = {
  hardware: ['Raspberry Pi', 'Arduino', 'ROS', 'OpenCV', 'TensorFlow', 'MATLAB', 'LTspice', 'Proteus', 'Cadence Virtuoso', 'SolidWorks'],
  software: ['Python', 'C++', 'C', 'C#', '.NET', 'PHP', 'React', 'Astro', 'FastAPI', 'PostgreSQL', 'MySQL', 'REST APIs'],
  platform: ['Linux', 'Docker', 'Git', 'GitHub', 'WordPress', 'Socket.IO'],
};
