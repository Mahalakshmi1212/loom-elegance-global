import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import collectionImage from "@/assets/collection-display.jpg";

const collections = [
  {
    title: "Handwoven Sarees",
    description: "Traditional silk and cotton sarees with intricate patterns",
    region: "Banaras, Kanchipuram",
  },
  {
    title: "Luxe Shawls",
    description: "Pashmina and wool shawls for global luxury markets",
    region: "Kashmir, Kullu",
  },
  {
    title: "Artisan Scarves",
    description: "Lightweight silk and cotton scarves in vibrant colors",
    region: "Maheshwar, Chanderi",
  },
  {
    title: "Premium Fabrics",
    description: "Yards of handloom fabric for bespoke creations",
    region: "Pochampally, Mangalgiri",
  },
  {
    title: "Traditional Stoles",
    description: "Elegant stoles perfect for all seasons",
    region: "Bengal, Assam",
  },
  {
    title: "Accessories",
    description: "Handcrafted bags, cushions, and home textiles",
    region: "Various Regions",
  },
];

const Collections = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="collections" className="py-24 bg-secondary/30 pattern-textile">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Our Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of tradition, craftsmanship, and sustainable fashion
          </p>
        </div>

        <div className="mb-16">
          <img
            src={collectionImage}
            alt="Display of various handloom textiles and products"
            className="w-full h-96 object-cover rounded-2xl shadow-elegant"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-elegant transition-smooth transform hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <p className="text-sm text-primary font-medium">
                  Origin: {collection.region}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="gradient-warm text-primary-foreground hover:opacity-90 transition-smooth shadow-soft"
          >
            Request Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
