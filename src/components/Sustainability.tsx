import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Heart, Recycle } from "lucide-react";
import sustainabilityImage from "@/assets/sustainability.jpg";

const impacts = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Natural fibers, organic dyes, minimal carbon footprint",
  },
  {
    icon: Users,
    title: "Fair Trade",
    description: "Direct partnerships ensuring fair wages and working conditions",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Empowering local artisan communities and preserving livelihoods",
  },
  {
    icon: Recycle,
    title: "Sustainable Process",
    description: "Zero-waste weaving techniques passed through generations",
  },
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-24 bg-secondary/30 pattern-textile">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Sustainability at Our Core
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fashion that's good for people and the planet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl font-serif font-semibold">
              Ethical Fashion from Loom to You
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Handloom is inherently sustainable. Unlike power looms, traditional weaving 
              requires no electricity, produces zero industrial waste, and uses natural, 
              biodegradable materials.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every purchase supports rural artisan communities, provides sustainable livelihoods, 
              and helps preserve traditional crafts that have been practiced for thousands of years.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-accent-foreground font-medium">
                "Handloom is not just fabric—it's a way of life that respects nature, 
                honors tradition, and creates meaningful employment."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={sustainabilityImage}
              alt="Natural organic materials used in sustainable handloom textiles"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card
                key={index}
                className="bg-card hover:shadow-elegant transition-smooth text-center"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold mb-3">
                    {impact.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
