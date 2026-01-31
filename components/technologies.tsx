import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "nodedotjs",
  "python",
  "go",
  "postgresql",
  "redis",
  "graphql",
  "docker",
  "kubernetes",
  "amazonaws",
  "googlecloud",
  "terraform",
  "nginx",
  "linux",
  "git",
  "github",
  "javascript",
  "typescript",
  "openai",
  "claude",
  "googlegemini",
  "meta",
  "huggingface",
  "supabase",
  "lovable",
  "prometheus",
  "grafana",
];

interface TechnologiesProps {
  liveLinks?: boolean;
}

export default function Technologies({ liveLinks = false }: TechnologiesProps) {
  return (
    <div className="">
      <IconCloud iconSlugs={slugs} liveLinks={liveLinks} />
    </div>
  );
}
