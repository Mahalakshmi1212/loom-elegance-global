import { Card, CardContent } from "@/components/ui/card";
import artisanImage from "@/assets/artisan-weaving.jpg";

const artisans = [
  {
    name: "Lakshmi Devi",
    craft: "Banaras Silk Weaving",
    experience: "30+ years",
    story: "Master weaver preserving the ancient art of brocade patterns",
  },
  {
    name: "Ravi Kumar",
    craft: "Pochampally Ikat",
    experience: "25+ years",
    story: "Third-generation artisan specializing in geometric ikat designs",
  },
  {
    name: "Meera Sharma",
    craft: "Chanderi Handloom",
    experience: "20+ years",
    story: "Expert in creating lightweight fabrics with golden zari work",
  },
];

const Artisans = () => {
  return (
    <section id="artisans" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Meet Our Artisans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The skilled hands and passionate hearts behind every creation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={artisanImage}
              alt="Traditional artisan weaving on a handloom"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-semibold">
              Preserving Heritage, Creating Futures
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our artisans are the heart of our business. Each piece is created by skilled 
              craftspeople who have inherited centuries-old techniques passed down through 
              generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By choosing handloom, you're not just buying fabric—you're supporting families, 
              preserving traditional skills, and keeping cultural heritage alive for future 
              generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-elegant transition-smooth"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <h4 className="text-2xl font-serif font-semibold mb-2">
                    {artisan.name}
                  </h4>
                  <p className="text-primary font-medium">{artisan.craft}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {artisan.experience} of experience
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {artisan.story}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artisans;
