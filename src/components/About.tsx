import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Metodologia ágil com sprints quinzenais",
    "Equipe multidisciplinar especializada",
    "Foco em resultados mensuráveis",
    "Suporte técnico contínuo",
    "Relatórios semanais de progresso",
    "Tecnologias de ponta",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DevSystem</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos especialistas em desenvolvimento web com <strong>8 anos de experiência</strong> criando 
              soluções digitais de alta performance que combinam design impressionante, tecnologia avançada 
              e estratégia de negócios.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é transformar ideias em experiências digitais extraordinárias que geram 
              resultados reais para nossos clientes.
            </p>
            <Button variant="hero" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>

          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
