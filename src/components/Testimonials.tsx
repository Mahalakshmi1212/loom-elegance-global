import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Ethereal Boutique, UK",
    text: "The quality and craftsmanship are unparalleled. Our customers love the authentic handloom pieces, and the story behind each textile adds incredible value.",
    rating: 5,
  },
  {
    name: "Marco Rossi",
    company: "Artisan Imports, Italy",
    text: "Working with Handloom Heritage has been transformative for our business. The attention to detail and ethical practices align perfectly with our values.",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    company: "Zen Fashion, Japan",
    text: "Exceptional textiles that resonate with our customers. The sustainable approach and artisan partnerships make this collaboration truly special.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by boutiques and buyers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-elegant transition-smooth"
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
