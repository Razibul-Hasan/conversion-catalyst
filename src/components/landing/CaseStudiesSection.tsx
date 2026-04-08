import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    title: "E-Commerce Store Overhaul",
    category: "WooCommerce",
    metric: "+185% Revenue",
    desc: "Complete WooCommerce rebuild with custom checkout flow, resulting in dramatically improved conversion rates.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Custom Plugin for SaaS Dashboard",
    category: "Plugin Development",
    metric: "50K+ Active Installs",
    desc: "Built a feature-rich analytics plugin that became one of the top-rated in its category on WordPress.org.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Enterprise Migration & Optimization",
    category: "Migration",
    metric: "3x Faster Load",
    desc: "Migrated a high-traffic news site with zero downtime and achieved 3x performance improvement.",
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const CaseStudiesSection = () => {
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
            Case Studies
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Real Results for Real Businesses
          </h2>
          <p className="text-muted-foreground">
            See how we've helped businesses transform their WordPress presence and achieve measurable growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-surface-elevated shadow-card transition-shadow hover:shadow-elevated"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${c.color}`}
              >
                <TrendingUp className="h-16 w-16 text-primary/40" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {c.category}
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    {c.metric}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{c.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View Case Study <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
