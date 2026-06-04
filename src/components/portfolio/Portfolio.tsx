import { useState } from "react";
import {
  Cloud,
  Container,
  GitBranch,
  Server,
  Shield,
  Activity,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Terminal,
  Layers,
  TrendingDown,
  Workflow,
  CheckCircle2,
  Rocket,
  Target,
  Wrench,
  LineChart,
  Sparkles,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Served from /public so it works on any host (Netlify, Lovable, etc.)
const HEADSHOT_SRC = "/gabriel-headshot.jpeg";
const HEADSHOT_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%2322d3ee'/><stop offset='1' stop-color='%237c3aed'/></linearGradient></defs><rect width='200' height='200' fill='url(%23g)'/><text x='50%25' y='54%25' font-family='Inter,Arial' font-size='72' font-weight='700' text-anchor='middle' fill='white'>GI</text></svg>`,
  );

const skillGroups = [
  { icon: Cloud, title: "Cloud", skills: ["AWS", "Azure", "GCP"] },
  {
    icon: Container,
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm", "EKS", "AKS", "ECS"],
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "Packer", "CloudFormation"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & GitOps",
    skills: ["GitHub Actions", "Azure DevOps", "GitLab CI", "Jenkins", "ArgoCD"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "Datadog", "ELK", "CloudWatch"],
  },
  {
    icon: Code2,
    title: "Programming & Scripting",
    skills: ["Python", "Bash", "Go", "YAML", "PowerShell"],
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    skills: ["IAM", "Cloud Security", "Cost Optimization", "Linux", "SRE Practices"],
  },
];

const experience = [
  {
    role: "Senior DevOps Cloud Engineer",
    company: "Vibes Meet LLC",
    location: "Remote",
    period: "Mar 2025 – Present",
    bullets: [
      "Architected production AWS infrastructure with Terraform (EC2, ALB, ASG, VPC, CloudWatch), provisioning full environments in under 10 minutes.",
      "Built immutable, image-based delivery pipelines using GitHub Actions, Packer, Ansible, and Terraform — achieving zero-downtime deploys across staging and prod.",
      "Drove a ~40% reduction in monthly cloud spend through right-sizing, scheduled scaling, and reserved-capacity strategy.",
      "Established a reusable Terraform module library, runbooks, and architecture docs adopted across the engineering org.",
    ],
  },
  {
    role: "Site Reliability & DevOps Engineer",
    company: "Qore Inc",
    location: "Fintech",
    period: "Oct 2019 – Apr 2024",
    bullets: [
      "Implemented GitOps delivery to Azure Kubernetes Service (AKS) with Argo CD and Helm — increasing deployment frequency from weekly to multiple times per day.",
      "Operated Kubernetes workloads across multiple environments and automated image promotion through Azure Container Registry.",
      "Built SLO-driven Prometheus and Grafana dashboards, improving MTTD on revenue-critical services.",
      "Hardened release reliability across Bitbucket, Azure DevOps, and Octopus Deploy pipelines for business-critical fintech workloads.",
    ],
  },
];

const projects = [
  {
    icon: Server,
    title: "Automated Infrastructure Platform on AWS",
    challenge:
      "Teams waited days for manually provisioned environments and infrastructure drift was causing recurring incidents.",
    solution:
      "Designed a fully Terraform-managed AWS platform with an auto-scaling web tier behind an ALB, isolated VPC networking, and end-to-end CloudWatch observability — codified as reusable modules.",
    architecture: [
      "Terraform modules for VPC, ALB, ASG, IAM, CloudWatch",
      "Multi-AZ auto-scaling with health-checked launch templates",
      "Centralized logging, metrics, and SNS alerting",
    ],
    stack: ["Terraform", "AWS", "EC2", "Auto Scaling", "ALB", "VPC", "CloudWatch"],
    impact: [
      "Provisioning time: days → under 10 minutes",
      "~40% reduction in monthly cloud cost",
      "Zero-downtime deploys across environments",
    ],
    repo: "https://github.com/gabbyTI",
  },
  {
    icon: GitBranch,
    title: "Immutable CI/CD Delivery Pipeline",
    challenge:
      "Mutable in-place deploys produced snowflake servers, slow rollbacks, and inconsistent environments.",
    solution:
      "Built an immutable, image-based delivery pipeline that bakes hardened AMIs with Packer + Ansible and promotes them through environments via GitHub Actions and Terraform.",
    architecture: [
      "Packer + Ansible image bakery with security baseline",
      "GitHub Actions matrix for build → scan → promote",
      "Terraform-driven blue/green ASG swaps",
    ],
    stack: ["GitHub Actions", "Packer", "Ansible", "Terraform", "AWS"],
    impact: [
      "Eliminated config drift across environments",
      "Rollbacks reduced from ~30 min to under 2 min",
      "Repeatable, auditable releases",
    ],
    repo: "https://github.com/gabbyTI",
  },
  {
    icon: Container,
    title: "GitOps on Azure Kubernetes Service",
    challenge:
      "A fintech workload needed faster, safer releases on AKS with full auditability and clear rollback paths.",
    solution:
      "Implemented GitOps with Argo CD and Helm, automated image promotion from Azure Container Registry, and SLO-driven Prometheus/Grafana dashboards.",
    architecture: [
      "Argo CD app-of-apps for multi-env promotion",
      "Helm charts with environment overlays",
      "Prometheus + Grafana + Alertmanager observability",
    ],
    stack: ["Kubernetes", "AKS", "Argo CD", "Helm", "ACR", "Prometheus", "Grafana"],
    impact: [
      "Deployment frequency: weekly → multiple per day",
      "Improved MTTD on critical services",
      "Git-traceable rollback in seconds",
    ],
    repo: "https://github.com/gabbyTI",
  },
  {
    icon: Code2,
    title: "Serverless GenAI Chatbot on AWS",
    challenge:
      "Students needed an always-on, low-cost conversational assistant with zero infrastructure to maintain.",
    solution:
      "Delivered a fully serverless GenAI platform combining Amazon Lex, Bedrock, and Lambda, fronted by Amplify with Cognito auth and DynamoDB/S3 storage.",
    architecture: [
      "Amplify front-end + Cognito user pools",
      "Lex/Bedrock orchestrated by Lambda functions",
      "DynamoDB conversation store + S3 asset bucket",
    ],
    stack: ["Amplify", "Cognito", "Lex", "Bedrock", "Lambda", "DynamoDB", "S3"],
    impact: [
      "Zero idle infrastructure cost",
      "Auto-scales to demand with no ops overhead",
      "Production GenAI shipped end-to-end",
    ],
    repo: "https://github.com/gabbyTI",
  },
];

const impactHighlights = [
  { icon: TrendingDown, value: "~40%", label: "Reduction in AWS infrastructure cost" },
  { icon: Workflow, value: "10×+", label: "Increase in deployment frequency via GitOps" },
  { icon: Container, value: "Multi-env", label: "Kubernetes workloads operated end-to-end" },
  { icon: GitBranch, value: "<2 min", label: "Rollback time on immutable pipelines" },
  { icon: Activity, value: "24/7", label: "SLO-driven observability & on-call readiness" },
  { icon: Rocket, value: "5+ yrs", label: "Building reliable cloud-native platforms" },
];

const availableFor = [
  "Senior DevOps Engineer",
  "Site Reliability Engineer (SRE)",
  "Platform Engineer",
  "Cloud Engineer",
  "Infrastructure Engineer",
];

const recruiterStack = [
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Terraform",
  "Docker",
  "CI/CD",
  "Observability",
];

const resumeVariants = [
  { label: "Senior DevOps Resume", file: "/gabriel-ibenye-resume.pdf" },
  { label: "Site Reliability Engineer Resume", file: "/gabriel-ibenye-sre-resume.pdf" },
  { label: "Senior Cloud Engineer Resume", file: "/gabriel-ibenye-cloud-resume.pdf" },
];

const certifications = [
  "Google Associate Cloud Engineer",
  "AWS Certified Solutions Architect – Associate",
  "Microsoft Certified: Azure Administrator Associate",
  "Google Cloud Digital Leader",
  "Microsoft Certified: Azure Fundamentals",
  "Microsoft 365 Certified: Fundamentals",
];

const education = [
  { school: "George Brown College", program: "Cloud Computing Technologies", period: "2024 – 2025" },
  { school: "Madonna University", program: "B.Sc. Computer Science", period: "2015 – 2019" },
];

export function Portfolio() {
  const [imgSrc, setImgSrc] = useState(HEADSHOT_SRC);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <Terminal className="h-5 w-5 text-primary" />
            <span>Gabriel Ibenye</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-border/60"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,oklch(0.75_0.16_190/0.4)_1px,transparent_0)] [background-size:24px_24px]" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to Senior DevOps · SRE · Platform roles
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Toronto, ON, Canada · Remote · Hybrid · Relocation
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Gabriel Ibenye
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium md:text-2xl">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Senior DevOps Engineer
              </span>
              <span className="text-muted-foreground">
                {" "}· Cloud Infrastructure · Kubernetes · Platform Engineering
              </span>
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              5+ years designing and operating scalable, secure, cloud-native
              platforms across <span className="text-foreground">AWS, Azure, and GCP</span>.
              I build Kubernetes-based platforms, immutable CI/CD pipelines, and
              Infrastructure-as-Code that ship faster, cost less, and stay reliable under load.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {recruiterStack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-card/60 px-2.5 py-1 text-xs text-foreground/90 backdrop-blur"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg">
                <a href="/gabriel-ibenye-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://github.com/gabbyTI" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div
              className="absolute -inset-6 rounded-full opacity-70 blur-3xl"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <div
              className="absolute -inset-1 rounded-full opacity-90"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden
            />
            <img
              src={imgSrc}
              onError={() => setImgSrc(HEADSHOT_FALLBACK)}
              alt="Portrait of Gabriel Ibenye, Senior DevOps Engineer"
              width={288}
              height={288}
              loading="eager"
              className="relative h-56 w-56 rounded-full border-4 border-background object-cover shadow-2xl md:h-64 md:w-64 lg:h-72 lg:w-72"
              style={{ boxShadow: "var(--shadow-glow)" }}
            />
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section id="impact" className="border-b border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Impact" title="Business outcomes, not just tooling" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactHighlights.map((h) => (
              <div
                key={h.label}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-30"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold tracking-tight text-foreground">
                    {h.value}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="About" title="Cloud-native operator with a builder's mindset" />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-muted-foreground lg:col-span-2">
            I'm a Senior DevOps / Site Reliability Engineer with{" "}
            <span className="text-foreground">5+ years</span> shipping production
            platforms on <span className="text-foreground">AWS, Azure, and GCP</span>.
            I specialize in Kubernetes-based platform engineering, immutable CI/CD,
            Infrastructure-as-Code with Terraform, and SLO-driven observability —
            with a track record of cutting cloud spend, accelerating release
            velocity, and hardening reliability for revenue-critical systems.
          </p>
          <div className="rounded-xl border border-border/60 bg-card/60 p-5 backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How I work
            </div>
            <ul className="mt-4 space-y-3 text-sm text-foreground/90">
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-primary" />
                Automate first — repeatable, codified, reviewable.
              </li>
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-primary" />
                Optimize for reliability, cost, and developer velocity.
              </li>
              <li className="flex gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 flex-none text-primary" />
                Treat docs and runbooks as production artifacts.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Skills" title="Tooling across the cloud-native stack" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <Card
                key={g.title}
                className="group border-border/60 bg-card/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <CardHeader className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="font-normal">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Experience" title="Where I've shipped" />
        <div className="relative mt-10">
          <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:block" />
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role + e.company} className="relative md:pl-12">
                <span className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />
                <Card className="border-border/60 bg-card/70 backdrop-blur transition-colors hover:border-primary/40">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <CardTitle className="text-xl">{e.role}</CardTitle>
                        <CardDescription className="mt-1 flex flex-wrap items-center gap-2 text-base text-primary">
                          <Briefcase className="h-4 w-4" />
                          {e.company}
                          {e.location ? (
                            <span className="text-muted-foreground"> · {e.location}</span>
                          ) : null}
                        </CardDescription>
                      </div>
                      <span className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground">
                        {e.period}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5 text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <CircleDot className="mt-1 h-3.5 w-3.5 flex-none text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Case Studies" title="Selected work" />
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real production systems — broken down into challenge, solution,
            architecture, and measurable impact.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Card
                key={p.title}
                className="group flex h-full flex-col border-border/60 bg-card/70 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <CaseRow icon={Target} label="Challenge" body={p.challenge} />
                  <CaseRow icon={Wrench} label="Solution" body={p.solution} />
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      <Layers className="h-3.5 w-3.5" />
                      Architecture Highlights
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {p.architecture.map((a) => (
                        <li key={a} className="flex gap-2">
                          <CircleDot className="mt-1 h-3 w-3 flex-none text-primary" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      <LineChart className="h-3.5 w-3.5" />
                      Business Impact
                    </div>
                    <ul className="space-y-1.5 text-sm text-foreground/90">
                      {p.impact.map((i) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-1">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="font-normal">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certs + Education */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Certifications" title="Credentials" />
            <div className="mt-8 space-y-3">
              {certifications.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/70 px-4 py-3 backdrop-blur transition-colors hover:border-primary/40"
                >
                  <Award className="h-5 w-5 flex-none text-primary" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <div className="mt-8 space-y-4">
              {education.map((e) => (
                <Card key={e.school} className="border-border/60 bg-card/70 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <CardTitle className="text-base">{e.program}</CardTitle>
                        <CardDescription className="mt-1">
                          {e.school} · {e.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build reliable infrastructure together"
            center
          />
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Recruiters and hiring managers — I respond within 24 hours. Happy to
            discuss your team's infrastructure, platform, or migration roadmap.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-card/70 p-6 text-left backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Available For
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {availableFor.map((r) => (
                <Badge key={r} variant="secondary" className="px-3 py-1 text-sm font-normal">
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-primary" />
                  {r}
                </Badge>
              ))}
            </div>
            <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>Toronto, ON, Canada · Remote, Hybrid, or Relocation</span>
              </div>
              <div className="flex items-start gap-2">
                <Activity className="mt-0.5 h-4 w-4 flex-none text-primary" />
                <span>Availability: Immediate · Full-time</span>
              </div>
            </div>

            <div className="mt-6 border-t border-border/60 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tailored Resumes
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {resumeVariants.map((r) => (
                  <Button key={r.label} asChild variant="outline" size="sm">
                    <a href={r.file} download>
                      <Download className="mr-2 h-4 w-4" />
                      {r.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:gabrielibenye3@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                gabrielibenye3@gmail.com
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://linkedin.com/in/gabbyti" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/gabbyTI" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Gabriel Ibenye. All rights reserved.</span>
          <span>Toronto, ON · Built with care.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function CaseRow({
  icon: Icon,
  label,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  body: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
