import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tecnologia de Ponta</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Transformamos Ideias em
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
              Experiências Digitais
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Criamos sites modernos, performáticos e responsivos com as tecnologias mais avançadas do mercado. 
            Soluções personalizadas que geram resultados reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="lg" className="group">
              Começar Projeto
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Ver Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">100+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">8+</div>
              <div className="text-sm text-muted-foreground">Anos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
