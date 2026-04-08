import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  ShoppingCart,
  LayoutGrid,
  ShieldCheck,
  ArrowRightLeft,
  Brain,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Plugin Development",
    desc: "Add unique, business-specific features with custom-built WordPress plugins that integrate seamlessly and perform flawlessly.",
  },
  {
    icon: Globe,
    title: "WordPress Website Development",
    desc: "High-performance, secure, and fully customized WordPress websites built from the ground up for your business goals.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Store Development",
    desc: "Optimized ecommerce stores engineered for speed, usability, and maximum conversions to grow your revenue.",
  },
  {
    icon: LayoutGrid,
    title: "Gutenberg Block Development",
    desc: "Custom Gutenberg blocks and editor enhancements that seamlessly integrate with your existing WordPress ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Security",
    desc: "Comprehensive optimization and hardened security to ensure your site loads fast and stays protected 24/7.",
  },
  {
    icon: ArrowRightLeft,
    title: "WordPress Migration",
    desc: "Seamless, zero-downtime migrations with meticulous planning to ensure business continuity and data integrity.",
  },
  {
    icon: Brain,
    title: "Custom AI Solutions",
    desc: "Automate workflows and enhance decision-making with tailored AI solutions built on cutting-edge technology.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Modern, conversion-focused Figma designs that match your brand and deliver exceptional user experiences.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            End-to-End WordPress Development Services
          </h2>
          <p className="text-muted-foreground">
            From concept to launch, we deliver tailored solutions that help your
            business grow, convert, and scale.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold">{s.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
