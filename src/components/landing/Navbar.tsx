import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-gradient">WPXPO</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="rounded-full font-semibold">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-2 text-sm font-medium text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="mt-3 w-full rounded-full font-semibold">
            Get Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
