import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Technologies() {
    return (
      <section id="technologies" className="container mx-auto p-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center uppercase mb-8 sm:mb-12">Technologies</h1>
        <InfiniteMovingCardsTechnologies />
      </section>
    );
  }

export function InfiniteMovingCardsTechnologies() {
  // UI and Frontend technologies
  const frontendTech = [
    { name: "Figma", quote: "Design Tool", title: "UI/UX" },
    { name: "Flutter", quote: "Mobile Framework", title: "Cross-Platform" },
    { name: "React", quote: "Frontend Library", title: "JavaScript" },
    { name: "Next.js", quote: "React Framework", title: "Full-Stack" },
    { name: "Vue.js", quote: "Progressive Framework", title: "JavaScript" },
    { name: "Angular", quote: "TypeScript Framework", title: "Enterprise" },
    { name: "Tailwind CSS", quote: "Utility Framework", title: "CSS" },
    { name: "ShadCN/UI", quote: "Component Library", title: "React" },
    { name: "TypeScript", quote: "Typed JavaScript", title: "Language" },
    { name: "JavaScript", quote: "Web Language", title: "Programming" },
    { name: "HTML5", quote: "Markup Language", title: "Web" },
    { name: "CSS3", quote: "Styling Language", title: "Web" },
    { name: "Sass", quote: "CSS Preprocessor", title: "Styling" },
    { name: "Webpack", quote: "Module Bundler", title: "Build Tool" },
    { name: "Vite", quote: "Build Tool", title: "Development" },
  ];

  // Backend technologies
  const backendTech = [
    { name: "PHP", quote: "Server Language", title: "Backend" },
    { name: "Laravel", quote: "PHP Framework", title: "Web" },
    { name: "Bun", quote: "JavaScript Runtime", title: "Fast" },
    { name: "Supabase", quote: "Backend Platform", title: "Database" },
    { name: "Appwrite", quote: "Backend Service", title: "API" },
    { name: "Node.js", quote: "JavaScript Runtime", title: "Server" },
    { name: "Express", quote: "Node Framework", title: "Web" },
    { name: "Python", quote: "Programming Language", title: "Versatile" },
    { name: "Django", quote: "Python Framework", title: "Web" },
    { name: "FastAPI", quote: "Python API", title: "Modern" },
    { name: "PostgreSQL", quote: "Database", title: "Relational" },
    { name: "MySQL", quote: "Database", title: "Popular" },
    { name: "MongoDB", quote: "NoSQL Database", title: "Document" },
    { name: "Redis", quote: "Cache Database", title: "In-Memory" },
    { name: "Firebase", quote: "Google Platform", title: "Backend" },
  ];

  // Tools and DevOps
  const toolsTech = [
    { name: "GitHub", quote: "Code Repository", title: "Version Control" },
    { name: "Sentry", quote: "Error Monitoring", title: "Debugging" },
    { name: "Docker", quote: "Containerization", title: "DevOps" },
    { name: "Atlassian", quote: "Development Tools", title: "Productivity" },
    { name: "AWS", quote: "Cloud Platform", title: "Amazon" },
    { name: "Vercel", quote: "Deployment Platform", title: "Frontend" },
    { name: "Netlify", quote: "Web Platform", title: "Hosting" },
    { name: "Kubernetes", quote: "Container Orchestration", title: "DevOps" },
    { name: "Jenkins", quote: "CI/CD Tool", title: "Automation" },
    { name: "GitLab", quote: "DevOps Platform", title: "Complete" },
    { name: "Jira", quote: "Project Management", title: "Agile" },
    { name: "Confluence", quote: "Documentation", title: "Knowledge" },
    { name: "Slack", quote: "Communication", title: "Team" },
    { name: "Figma", quote: "Design Tool", title: "Collaboration" },
    { name: "Notion", quote: "Workspace", title: "Productivity" },
  ];

  // Digital Marketing technologies
  const marketingTech = [
    { name: "Google Analytics", quote: "Web Analytics", title: "Tracking" },
    { name: "Google Ads", quote: "PPC Advertising", title: "Google" },
    { name: "Facebook Ads", quote: "Social Advertising", title: "Meta" },
    { name: "Instagram", quote: "Visual Platform", title: "Social Media" },
    { name: "LinkedIn", quote: "Professional Network", title: "B2B" },
    { name: "Twitter", quote: "Microblogging", title: "Social Media" },
    { name: "TikTok", quote: "Short Videos", title: "Social Media" },
    { name: "YouTube", quote: "Video Platform", title: "Google" },
    { name: "HubSpot", quote: "Marketing Automation", title: "CRM" },
    { name: "Mailchimp", quote: "Email Marketing", title: "Automation" },
    { name: "Salesforce", quote: "CRM Platform", title: "Enterprise" },
    { name: "Hootsuite", quote: "Social Management", title: "Scheduling" },
    { name: "Buffer", quote: "Social Publishing", title: "Management" },
    { name: "Canva", quote: "Design Tool", title: "Graphics" },
    { name: "Adobe Creative", quote: "Creative Suite", title: "Design" },
    { name: "SEMrush", quote: "SEO Tool", title: "Analytics" },
    { name: "Ahrefs", quote: "SEO Platform", title: "Research" },
    { name: "Moz", quote: "SEO Software", title: "Optimization" },
    { name: "WordPress", quote: "CMS Platform", title: "Content" },
    { name: "Shopify", quote: "E-commerce", title: "Online Store" },
  ];

  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      {/* First Row - Frontend/UI moving left */}
      <div className="mb-4">
        <InfiniteMovingCards
          items={frontendTech}
          direction="left"
          speed="slow"
        />
      </div>
      
      {/* Second Row - Backend moving right */}
      <div className="mb-4">
        <InfiniteMovingCards
          items={backendTech}
          direction="right"
          speed="slow"
        />
      </div>
      
      {/* Third Row - Tools/DevOps moving left */}
      <div className="mb-4">
        <InfiniteMovingCards
          items={toolsTech}
          direction="left"
          speed="slow"
        />
      </div>
      
      {/* Fourth Row - Digital Marketing moving right */}
      <div>
        <InfiniteMovingCards
          items={marketingTech}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}