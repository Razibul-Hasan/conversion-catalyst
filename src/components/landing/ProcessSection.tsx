import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We analyze your business, goals, and technical requirements to create a comprehensive project roadmap.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    desc: "Our UI/UX team crafts pixel-perfect mockups and prototypes that align with your brand identity.",
  },
  {
    icon: Code,
    step: "03",
    title: "Develop",
    desc: "Expert developers bring designs to life with clean, scalable code following WordPress best practices.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    desc: "Rigorous QA testing, smooth deployment, and ongoing support to ensure long-term success.",
  },
];

const ProcessSection = () => {
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
            Our Process
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            From Idea to Launch in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground">
            A proven, transparent workflow designed to deliver results on time and within budget.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-0.5 bg-border md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10">
                <s.icon className="h-10 w-10 text-primary" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
