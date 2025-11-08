import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Connecting traditional craftsmanship with global fashion
            </p>
          </div>

          <Card className="bg-card shadow-elegant mb-12">
            <CardContent className="p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Handloom Heritage was born from a passion to preserve India's rich textile 
                  traditions while creating sustainable livelihoods for artisan communities. 
                  We work directly with master weavers across India, from the silk looms of 
                  Banaras to the cotton fields of Gujarat.
                </p>
                <p>
                  Each piece in our collection represents hours of skilled handwork, traditional 
                  techniques refined over generations, and a commitment to quality that modern 
                  manufacturing simply cannot replicate.
                </p>
                <p>
                  We believe fashion should be beautiful, sustainable, and meaningful. By choosing 
                  handloom, you're making a statement—supporting artisans, preserving heritage, 
                  and choosing quality over quantity.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card text-center hover:shadow-soft transition-smooth">
              <CardContent className="p-8">
                <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Artisan Families</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-center hover:shadow-soft transition-smooth">
              <CardContent className="p-8">
                <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Regions Covered</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-center hover:shadow-soft transition-smooth">
              <CardContent className="p-8">
                <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Handwoven Quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
