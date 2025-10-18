import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Premium",
      category: "E-commerce",
      description: "Plataforma completa de vendas online com integração de pagamento e gestão de estoque.",
      tech: ["React", "Node.js", "Stripe"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "App SaaS",
      category: "SaaS",
      description: "Aplicação web escalável com dashboard analytics e sistema de usuários.",
      tech: ["Next.js", "PostgreSQL", "Tailwind"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Site Institucional",
      category: "Institucional",
      description: "Website corporativo moderno com CMS personalizado e blog integrado.",
      tech: ["Vue.js", "Nuxt", "Strapi"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Recentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-up border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group/btn">
                  Ver Projeto
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
