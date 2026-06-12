export type TimelineTone = 'past' | 'current';

export type TimelineItem = {
  period: string;
  title: string;
  place?: string;
  tone: TimelineTone;
  summary: string;
  stack?: readonly string[];
};

export const timeline = [
  {
    period: '2009–2013',
    title: 'Computer Engineering',
    place: 'Uniderp · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I studied Computer Engineering at Uniderp. Some of it was useful, some of it was only useful later, and plenty of it I do not think about now.',
    stack: ['Computer engineering', 'Programming', 'Systems'],
  },
  {
    period: '2013–2017',
    title: 'Legal statutes and public planning software',
    place: 'PSG Tecnologia · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I wrote C# and SQL Server software for legal statute workflows and public planning/budget tracking. Government software was slow in the normal ways: meetings, forms, rules, and names that changed after I had already built the screen.',
    stack: ['C#', '.NET', 'SQL Server', 'Government workflows'],
  },
  {
    period: '2017–2019',
    title: 'Dispatch software and a CPU problem',
    place: 'Fonte Tecnologia · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I worked on SIGO-CADG, a dispatch system in Mato Grosso do Sul. I fixed a vehicle tracking screen that was burning CPU with timer loops, and built forms for emergency call reporting. It was not glamorous; it was a screen people needed open.',
    stack: ['JavaScript', '.NET', 'Vehicle tracking', 'Dispatch'],
  },
  {
    period: '2019–2022',
    title: 'Old apps, new screens, slow links',
    place: 'GEOI2 Tecnologia da Informação LTDA. · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I helped move a JSF app to Angular 13 and Spring Boot, and built a Java CLI to move and provision data across Sybase, Firebird, PostgreSQL, MySQL, and MongoDB. Some municipalities still had 128kbps links, so gzip mattered more than clever code.',
    stack: ['Java', 'Spring Boot', 'Angular', 'Sybase', 'Firebird', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    period: '2022–2025',
    title: 'Remote backend contract work',
    place: 'BairesDev · Remote',
    tone: 'past',
    summary:
      'I did remote backend work: privacy compliance APIs in Java/Spring Boot, Shopify SKU and order sync, SQS inventory updates, Lambda image composition with SkiaSharp, and CSV reports with schema validation. A lot of it was getting two systems to agree long enough to not wake someone up.',
    stack: ['Java', 'Spring Boot', '.NET 8', 'AWS Lambda', 'SQS', 'S3', 'Shopify API', 'SkiaSharp'],
  },
  {
    period: '2025–Present',
    title: 'Transit systems',
    place: 'Velozient · Remote contract',
    tone: 'current',
    summary:
      'I am contracting at Velozient now, working around transit management systems with .NET, Angular, AWS, APIs, and integrations. Mostly normal software work: tickets, bugs, meetings, and figuring out what the system actually does before changing it.',
    stack: ['.NET 8', 'Angular', 'AWS', 'APIs', 'Integrations'],
  },
] as const satisfies readonly TimelineItem[];
