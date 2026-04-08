import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Users, label: "65K+ Users" },
  { icon: Star, label: "4.9/5 Rating" },
  { icon: Shield, label: "100% Secure" },
  { icon: Award, label: "Top Rated" },
];

const HeroSection = () => {
  return (
    <section className="bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-hero-muted/20 bg-hero-muted/10 px-4 py-1.5 text-sm text-hero-muted"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Trusted by 65,000+ WordPress professionals
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-hero-foreground md:text-5xl lg:text-6xl"
          >
            Custom WordPress &{" "}
            <span className="text-gradient">WooCommerce</span>{" "}
            Development Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-hero-muted"
          >
            From custom plugins to high-performance stores, we build WordPress
            solutions that drive growth, boost conversions, and scale with your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-hero-muted/30 bg-transparent px-8 text-base font-semibold text-hero-foreground hover:bg-hero-muted/10"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-hero-muted"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
