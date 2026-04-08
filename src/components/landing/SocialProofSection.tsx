import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hannah Zribi",
    text: "The support is exceptional: they answered my question in less than 24 hours with a good explanation. Fast and helpful customer service!",
    rating: 5,
    source: "Trustpilot",
  },
  {
    name: "Fani Awan",
    text: "The assistance provided by the support team was invaluable in resolving a plugin issue affecting my website. Their support was exceptional with prompt responses.",
    rating: 5,
    source: "Trustpilot",
  },
  {
    name: "Truny (@blecha)",
    text: "The plugin is exactly what I was looking for. Plus the support is amazing. They gave me time even on the weekend to solve my problem!",
    rating: 5,
    source: "WordPress",
  },
  {
    name: "Grey Forge LeFey",
    text: "Even after midnight, tech help was immediately available. They saved all my hard work quickly and efficiently. All tech help should be this good!",
    rating: 5,
    source: "Trustpilot",
  },
  {
    name: "Francisco Gil Gonzalez",
    text: "A great plugin, easy to use and many interesting features. The support is great and professional. I recommend this plugin.",
    rating: 5,
    source: "Trustpilot",
  },
  {
    name: "Susan Pearson",
    text: "I shared some details about my settings and he quickly came back and explained why the error happened. Quick fix with clear explanation!",
    rating: 5,
    source: "Trustpilot",
  },
];

const brands = [
  "WordPress.org", "WooCommerce", "Gutenberg", "Trustpilot", "Envato", "Shopify"
];

const SocialProofSection = () => {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Recognized by Experts
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by WordPress Professionals Worldwide
          </h2>
          <p className="text-muted-foreground">
            4.9/5 rating based on 400+ reviews across Trustpilot and WordPress.org
          </p>
        </motion.div>

        {/* Brand logos */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold tracking-wide text-muted-foreground/60"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl bg-surface-elevated p-6 shadow-card transition-shadow hover:shadow-elevated"
            >
              <Quote className="mb-4 h-6 w-6 text-primary/30" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.source}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
