import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$150 – $300",
    desc: "Perfect for WPXPO plugin setup, configuration, and minor customizations.",
    features: [
      "Plugin setup & configuration",
      "Basic design adjustments",
      "Performance check",
      "3-day delivery",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$800 – $2,500",
    desc: "Ideal for custom plugin development, website builds, and WooCommerce stores.",
    features: [
      "Custom development",
      "Responsive design",
      "SEO optimization",
      "2–3 week delivery",
      "Priority support",
      "2 revision rounds",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$3,000+",
    desc: "Full-scale projects with AI solutions, migrations, and ongoing support.",
    features: [
      "Everything in Professional",
      "AI-powered features",
      "Migration services",
      "Dedicated project manager",
      "SLA & ongoing support",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-background py-20 md:py-28" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-muted-foreground">
            Choose a package that fits your needs, or request a custom quote for
            your unique project.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-shadow ${
                p.popular
                  ? "border-primary bg-card shadow-elevated scale-[1.02]"
                  : "bg-card shadow-card hover:shadow-elevated"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-1 text-lg font-bold">{p.name}</h3>
              <p className="mb-4 text-2xl font-extrabold text-gradient">
                {p.price}
              </p>
              <p className="mb-6 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mb-8 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full gap-2 rounded-full font-semibold ${
                  p.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Request Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
