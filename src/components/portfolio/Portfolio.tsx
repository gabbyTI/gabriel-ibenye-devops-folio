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

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP", "EC2", "ECS", "ALB", "Auto Scaling"],
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    skills: ["Terraform", "Packer", "Ansible", "CloudFormation"],
  },
  {
    icon: Container,
    title: "Containers & Orchestration",
    skills: ["Kubernetes", "Docker", "Argo CD", "Helm", "GitOps"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Automation",
    skills: ["GitHub Actions", "Azure DevOps", "Bitbucket", "Octopus Deploy"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    skills: ["Prometheus", "Grafana", "CloudWatch", "SRE"],
  },
  {
    icon: Shield,
    title: "Security & Optimization",
    skills: ["Cloud Security", "Cost Optimization", "Linux", "IAM"],
  },
];

const experience = [
  {
    role: "Senior DevOps Cloud Engineer",
    company: "Vibes Meet LLC",
    location: "Remote",
    period: "Mar 2025 – May 2026",
    bullets: [
      "Designed and deployed AWS infrastructure using Terraform, EC2, ALB, Auto Scaling, and CloudWatch.",
      "Built immutable deployment pipelines using GitHub Actions, Packer, Ansible, and Terraform.",
      "Reduced cloud infrastructure costs by approximately 40%.",
      "Created reusable Terraform modules, runbooks, and architecture documentation.",
    ],
  },
  {
    role: "Site Reliability & DevOps Engineer",
    company: "Qore Inc",
    location: "",
    period: "Oct 2019 – Apr 2024",
    bullets: [
      "Implemented GitOps deployments to Azure Kubernetes Service using Argo CD and Helm.",
      "Managed Azure Container Registry and automated image updates.",
      "Built Prometheus and Grafana dashboards for monitoring.",
      "Improved deployment reliability using Bitbucket, Azure DevOps, and Octopus Deploy.",
    ],
  },
];

const projects = [
  {
    icon: Server,
    title: "Automated Infrastructure on AWS",
    description:
      "Production-grade AWS environment provisioned end-to-end with Terraform, including auto-scaling web tier, load balancing, and full observability.",
    stack: ["Terraform", "AWS", "EC2", "Auto Scaling", "ALB", "CloudWatch"],
  },
  {
    icon: GitBranch,
    title: "Immutable Deployment Pipeline",
    description:
      "Immutable image-based delivery pipeline that bakes AMIs with Packer and Ansible, then promotes them through environments via GitHub Actions and Terraform.",
    stack: ["GitHub Actions", "Packer", "Ansible", "Terraform", "AWS"],
  },
  {
    icon: Code2,
    title: "AWS Student Chatbot Platform",
    description:
      "Serverless conversational platform on AWS combining Lex, Bedrock, and Lambda with Amplify front-end and Cognito authentication.",
    stack: ["Amplify", "Cognito", "Lex", "Bedrock", "Lambda", "DynamoDB", "S3"],
  },
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
  {
    school: "George Brown College",
    program: "Cloud Computing Technologies",
    period: "2024 – 2025",
  },
  {
    school: "Madonna University",
    program: "B.Sc. Computer Science",
    period: "2015 – 2019",
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
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
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Toronto, ON, Canada
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Gabriel Ibenye
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Senior DevOps Engineer
            <span className="mx-2 text-primary">·</span>
            AWS · Azure · Kubernetes · Terraform · CI/CD
          </p>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            5+ years designing, automating, and operating reliable cloud infrastructure
            for high-availability workloads.
          </p>
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
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="About" title="Cloud-native operator with a builder's mindset" />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Cloud and DevOps Engineer with 5+ years of experience designing,
          automating, and supporting reliable infrastructure across AWS, Azure,
          Kubernetes, and virtualized environments. Skilled in Terraform, CI/CD
          automation, GitHub Actions, Docker, ECS, Linux administration,
          monitoring, and infrastructure documentation.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Skills" title="Tooling across the cloud-native stack" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <Card key={g.title} className="border-border/60 bg-card transition-colors hover:border-primary/40">
                <CardHeader className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
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
        <div className="mt-10 space-y-6">
          {experience.map((e) => (
            <Card key={e.role + e.company} className="border-border/60 bg-card">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-xl">{e.role}</CardTitle>
                    <CardDescription className="mt-1 flex items-center gap-2 text-base text-primary">
                      <Briefcase className="h-4 w-4" />
                      {e.company}
                      {e.location ? <span className="text-muted-foreground"> · {e.location}</span> : null}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="flex h-full flex-col border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-primary/40">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-3 text-lg">{p.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="outline" className="font-normal">
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

      {/* Certs + Education */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Certifications" title="Credentials" />
            <div className="mt-8 space-y-3">
              {certifications.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3"
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
                <Card key={e.school} className="border-border/60 bg-card">
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
            Available for senior DevOps, SRE, and Cloud Engineering roles. Happy to
            discuss your team's infrastructure, automation, or migration needs.
          </p>
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
      <div
        className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary ${
          center ? "" : ""
        }`}
      >
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}