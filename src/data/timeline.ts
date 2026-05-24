export type TimelineTone = 'origin' | 'education' | 'work' | 'open-source' | 'current';

export type TimelineItem = {
  period: string;
  title: string;
  place?: string;
  tone: TimelineTone;
  summary: string;
  lesson: string;
  evidence?: readonly string[];
  stack?: readonly string[];
};

export const timeline = [
  {
    period: 'TODO',
    title: 'First contact with computers',
    tone: 'origin',
    summary:
      'This needs Túlio’s actual memory: the machine, the room, the person nearby, or the small obsession that made computers feel like something to investigate instead of just use.',
    lesson: 'Do not polish this until the real first moment is known.',
    evidence: ['Ask Túlio for the concrete first machine or moment.'],
  },
  {
    period: 'TODO',
    title: 'First internet years',
    tone: 'origin',
    summary:
      'This needs the real internet story: forums, downloads, games, tutorials, chat rooms, slow links, or whatever made the network feel less like a utility and more like a place.',
    lesson: 'The important detail is not that the internet existed. It is what it let him reach.',
    evidence: ['Ask Túlio what he actually did online first.'],
  },
  {
    period: 'TODO',
    title: 'First programming pull',
    tone: 'origin',
    summary:
      'This needs the first thing he changed with code: a script, page, copied snippet, broken install, tiny automation, or small tool that made the computer answer differently.',
    lesson: 'The first useful program is usually small. Keep the exact smallness.',
    evidence: ['Ask Túlio for the first language, script, or project.'],
  },
  {
    period: '2009–2013',
    title: 'Computer Engineering foundation',
    place: 'Uniderp · Campo Grande, Brazil',
    tone: 'education',
    summary:
      'University gave formal names to things he was already circling: programming, systems, hardware and software boundaries, and the habit of breaking messy problems into parts without pretending they are clean.',
    lesson: 'The useful part was not sounding like an engineer. It was learning how to stay with a problem long enough to model it.',
    evidence: ['Bachelor’s in Computer Engineering'],
    stack: ['Computer engineering', 'Programming fundamentals', 'Systems thinking'],
  },
  {
    period: '2013–2017',
    title: 'Government systems with real-world accountability',
    place: 'PSG Tecnologia · Campo Grande, Brazil',
    tone: 'work',
    summary:
      'Worked on systems for legal statutes and public planning. Government software was an early lesson in friction: budgets, procurement, and politics move slower than a sprint, but the code still has to be understandable after the meeting is over.',
    lesson: 'A system can be boring and still be carrying real accountability.',
    evidence: [
      'Built statute creation, editing, and tracking workflows',
      'Improved organization and tracking of public spending initiatives',
    ],
    stack: ['C#', '.NET', 'SQL Server', 'Government workflows'],
  },
  {
    period: '2017–2019',
    title: 'Public safety systems where latency had consequences',
    place: 'Fonte Tecnologia · Campo Grande, Brazil',
    tone: 'work',
    summary:
      'Worked on SIGO-CADG, a dispatch system used by public safety forces in Mato Grosso do Sul. The performance problem was not abstract: live vehicle tracking was wasting CPU in a screen operators needed to stay responsive.',
    lesson: 'A slow screen is not cosmetic when someone is trying to coordinate a response.',
    evidence: [
      'Fixed a CPU bottleneck in live vehicle tracking by replacing inefficient timer loops',
      'Built a telephone form module for emergency call reporting',
    ],
    stack: ['JavaScript', '.NET', 'Real-time tracking', 'Operational systems'],
  },
  {
    period: '2019–2022',
    title: 'Modernization under ugly infrastructure constraints',
    place: 'GEOI2 Tecnologia da Informação LTDA. · Campo Grande, Brazil',
    tone: 'work',
    summary:
      'Modernization here meant carrying old systems forward, not pretending a clean rewrite was available. He rebuilt slow legacy workflows and built ETL tooling for public audit work across several databases, including compression because some municipal networks were still brutally slow.',
    lesson: 'Sometimes the architecture decision is compression because the network is the boss.',
    evidence: [
      'Migrated a legacy JSF app to Angular 13 and Spring Boot',
      'Built a Java CLI for ETL and database provisioning across Sybase, Firebird, PostgreSQL, MySQL, and MongoDB',
      'Used Gzip compression to reduce data size by 90% for unreliable 128kbps municipal networks',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'Pentaho KTR', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    period: '2022–2025',
    title: 'Remote backend systems, integrations, and scale pressure',
    place: 'BairesDev · Remote',
    tone: 'work',
    summary:
      'Remote backend work widened the surface area: privacy compliance APIs, Shopify SKU and order sync, SQS-backed inventory updates, Lambda image composition, and reporting. The common thread was integration work, where failures tend to hide between systems.',
    lesson: 'Most production bugs do not respect repo boundaries.',
    evidence: [
      'Refactored Java APIs into Spring Boot REST services for privacy compliance',
      'Built Shopify integration services for SKU and order synchronization',
      'Built AWS Lambda image composition with SkiaSharp and S3 output',
      'Designed CSV reporting with schema-based validation',
    ],
    stack: ['Java', 'Spring Boot', '.NET 8', 'AWS Lambda', 'SQS', 'S3', 'Shopify API', 'SkiaSharp'],
  },
  {
    period: '2025–Present',
    title: 'Transit systems, .NET, Angular, and production clarity',
    place: 'BairesDev · Remote',
    tone: 'current',
    summary:
      'Current work sits in transit management systems, with .NET, Angular, APIs, integrations, and AWS around it. The center of gravity has not changed much: make the moving parts clear enough that production has fewer places to surprise you.',
    lesson: 'Good systems are easier to explain when something is already going wrong.',
    evidence: ['.NET 8', 'Angular', 'AWS services', 'Transit management context'],
    stack: ['.NET 8', 'Angular', 'AWS', 'APIs', 'Integrations'],
  },
] as const satisfies readonly TimelineItem[];
