import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Ibenye — Senior DevOps Engineer | AWS, Azure, Kubernetes" },
      {
        name: "description",
        content:
          "Gabriel Ibenye is a Senior DevOps Engineer in Toronto specializing in AWS, Azure, Kubernetes, Terraform, and CI/CD automation.",
      },
      { property: "og:title", content: "Gabriel Ibenye — Senior DevOps Engineer" },
      {
        property: "og:description",
        content:
          "Cloud and DevOps Engineer with 5+ years building reliable infrastructure on AWS, Azure, and Kubernetes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
