import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">
              Handloom Heritage
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("artisans")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Artisans
            </button>
            <button
              onClick={() => scrollToSection("sustainability")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="gradient-warm text-primary-foreground hover:opacity-90 transition-smooth"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("collections")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("artisans")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Artisans
            </button>
            <button
              onClick={() => scrollToSection("sustainability")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full gradient-warm text-primary-foreground"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
