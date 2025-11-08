import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Handloom Heritage
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Authentic Indian handloom textiles connecting traditional artisans 
              with global fashion markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#home" className="hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:opacity-100 transition-opacity">
                  Collections
                </a>
              </li>
              <li>
                <a href="#artisans" className="hover:opacity-100 transition-opacity">
                  Artisans
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:opacity-100 transition-opacity">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Wholesale Enquiry
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:export@handloomheritage.com"
                className="bg-accent-foreground/10 p-2 rounded-full hover:bg-accent-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-90">
              export@handloomheritage.com
            </p>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {currentYear} Handloom Heritage. All rights reserved. | Weaving tradition into global fashion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
