import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Search, Shield, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web com React, Next.js e tecnologias modernas para máxima performance.",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e atraentes que proporcionam experiências memoráveis aos usuários.",
    },
    {
      icon: Smartphone,
      title: "Responsivo & Mobile",
      description: "Design mobile-first garantindo perfeita experiência em todos os dispositivos.",
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Técnicas avançadas de SEO para posicionar seu site no topo dos resultados de busca.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Otimização técnica para carregamento rápido e excelente desempenho.",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de certificados SSL e práticas de segurança robustas.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
