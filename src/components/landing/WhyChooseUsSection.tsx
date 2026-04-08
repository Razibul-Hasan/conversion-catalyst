import { motion } from "framer-motion";
import { CheckCircle2, Users, Rocket, HeadphonesIcon, Handshake } from "lucide-react";

const points = [
  {
    icon: Users,
    title: "Expertise You Can Trust",
    desc: "Years of deep WordPress, WooCommerce, and SaaS expertise. Our team delivers production-ready code, not experiments.",
  },
  {
    icon: Rocket,
    title: "Solutions That Scale",
    desc: "Every line of code is engineered for performance and growth. We build foundations, not quick fixes.",
  },
  {
    icon: Handshake,
    title: "Collaborative Process",
    desc: "We work closely with you from day one — aligning on vision, goals, and feedback at every milestone.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "Responsive, expert-level support even after delivery. We're committed to your long-term success.",
  },
];

const stats = [
  { value: "65K+", label: "Active Users" },
  { value: "400+", label: "5-Star Reviews" },
  { value: "8+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-hero relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-hero-foreground md:text-4xl">
            We're Not Just Developers — We're Problem Solvers
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-hero-muted/10 bg-hero-muted/5 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-base font-bold text-hero-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-hero-muted">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-extrabold text-gradient md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-hero-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
