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
    period: 'Apr 2026–Present',
    title: 'Voice ordering and stale menus',
    place: 'Velozient / HungerRush · Remote contract',
    tone: 'current',
    summary:
      'I am contracting at Velozient now, embedded with HungerRush on OrderAI, a voice ordering system for restaurants. I work on the .NET side of LLM calls, Twilio ConversationRelay, menu snapshots, Teams alerts, and the parts where a retry should not send the same order to the POS twice. It is still restaurant software: the customer wants food, the system wants edge cases.',
    stack: [
      '.NET 8',
      'ASP.NET Core',
      'Twilio ConversationRelay',
      'LLM agents',
      'Microsoft.Extensions.AI',
      'Teams webhooks',
      'Npgsql',
      'OpenTelemetry',
      'Datadog',
    ],
  },
  {
    period: 'Jun 2022–Nov 2025',
    title: 'Remote backend contract work',
    place: 'BairesDev · Remote',
    tone: 'past',
    summary:
      'I did remote contract work for a few US products. There was fleet telematics with 150M+ daily vehicle signals, Shopify sync against a 100K+ item catalog, Lambda image processing, queues, reports, and privacy APIs. A lot of it was getting old and new systems to agree long enough for nobody to notice the seam.',
    stack: [
      'C#',
      '.NET',
      'Java',
      'Spring Boot',
      'Angular',
      'React',
      'BigQuery',
      'RabbitMQ',
      'MassTransit',
      'AWS Lambda',
      'SQS',
      'Shopify API',
      'SkiaSharp',
    ],
  },
  {
    period: 'Aug 2019–Jun 2022',
    title: 'Municipal data and slow links',
    place: 'Grupo Imagetech · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I worked with the State Audit Court of Mato Grosso do Sul on audit systems for municipal financial data. I built a Java CLI that ran against local legacy databases, executed Kettle extraction scripts, compressed the result, and sent it to a central MongoDB repository. There were 79 municipalities, which meant 79 ways for the schema to be almost the same.',
    stack: [
      'Java',
      'Angular',
      'Spring Boot',
      'Pentaho Kettle',
      'MongoDB',
      'Sybase',
      'Firebird',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'GitLab CI/CD',
    ],
  },
  {
    period: 'Aug 2017–Aug 2019',
    title: 'Dispatch software and incident screens',
    place: 'Fonte Tecnologia · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I worked on public safety systems for Mato Grosso do Sul, including the Computer-Aided Dispatch system used by the Military Police. I maintained ASP.NET Web API code, worked with SignalR updates, and built screens around incident reporting. It was not glamorous; it was software people needed open while something was happening.',
    stack: [
      'C#',
      '.NET',
      'ASP.NET Web API',
      'SignalR',
      'Knockout.js',
      'PHP',
      'Backbone.js',
      'Dispatch',
      'Public safety',
    ],
  },
  {
    period: 'Mar 2013–Aug 2017',
    title: 'Legal statutes and public planning software',
    place: 'PSG Tecnologia · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I wrote C# and SQL Server software for fiscal planning, budget workflows, and legislative drafting at SEFAZ-MS. Some of the legal hierarchy lived in recursive SQL, which is about as pleasant as it sounds. Government software was slow in the normal ways: meetings, forms, rules, and names that changed after I had already built the screen.',
    stack: [
      'C#',
      '.NET',
      'SQL Server',
      'Recursive SQL',
      'jQuery',
      'Bootstrap',
      'Government workflows',
      'Budget planning',
    ],
  },
  {
    period: '2009–2013',
    title: 'Computer Engineering',
    place: 'Uniderp · Campo Grande, Brazil',
    tone: 'past',
    summary:
      'I studied Computer Engineering at Uniderp. Some of it was useful, some of it was only useful later, and plenty of it became background noise. I also picked up Oracle Java certification and C2 English later, mostly because paperwork still matters.',
    stack: ['Computer engineering', 'OCP Java SE 11', 'English C2', 'Systems'],
  },
] as const satisfies readonly TimelineItem[];