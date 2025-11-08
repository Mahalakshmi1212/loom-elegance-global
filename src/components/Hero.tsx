import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-handloom.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 z-10" />
        <img
          src={heroImage}
          alt="Beautiful handloom textile showcasing traditional Indian craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Authentic Indian Craftsmanship
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Weaving Tradition into{" "}
              <span className="text-primary">Global Fashion</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Authentic Indian Handloom Creations for the Modern World
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Discover sustainable, ethically-made textiles crafted by skilled artisans 
              preserving centuries-old weaving traditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToCollections}
                size="lg"
                className="gradient-warm text-primary-foreground hover:opacity-90 transition-smooth shadow-elegant text-lg px-8 py-6"
              >
                Explore Collections
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
              >
                Wholesale Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
