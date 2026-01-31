export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const projects = [
    {
      id: "paddle",
      slug: "paddle",
      body: "Global payments infrastructure for SaaS and digital products.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Paddle",
        description: "Global payments infrastructure for SaaS and digital products.",
        category: "projects",
        image: "/images/paddle.svg",
        tags: ["Payments", "SaaS", "Billing"],
        projectURL: "https://www.paddle.com",
        repoURL: null,
      },
    },
    {
      id: "linguaexams",
      slug: "linguaexams",
      body: "Language exam preparation platform with structured practice and assessments.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "LinguaExams",
        description: "Language exam preparation platform with structured practice and assessments.",
        category: "projects",
        image: "/images/linguaexams.png",
        tags: ["EdTech", "Assessments", "Learning"],
        projectURL: "https://linguaexams.com",
        repoURL: null,
      },
    },
    {
      id: "metrade",
      slug: "metrade",
      body: "Trading analytics and market insights for smarter decisions.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Metrade",
        description: "Trading analytics and market insights for smarter decisions.",
        category: "projects",
        image: "/images/metrade.png",
        tags: ["Fintech", "Analytics", "Trading"],
        projectURL: "https://metrade.io/",
        repoURL: null,
      },
    },
  ];

  return new Response(JSON.stringify({ postsData: projects }), { status: 200 });
}
