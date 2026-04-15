import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Zap, DollarSign, Map, ShieldCheck, Clock, Compass, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Brain, text: "Clear website strategy based on your business" },
  { icon: BarChart3, text: "Feature & structure planning" },
  { icon: Zap, text: "UX & conversion improvement ideas" },
  { icon: DollarSign, text: "Budget & timeline estimation" },
  { icon: Map, text: "Step-by-step project roadmap" },
];

const reasons = [
  { icon: ShieldCheck, text: "Avoid costly mistakes" },
  { icon: Clock, text: "Save time & budget" },
  { icon: Compass, text: "Get expert direction" },
  { icon: Rocket, text: "Build the right solution from day one" },
];

const ConsultationSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-14"
        >
          <h2 className="mb-6 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Why Join a Free{" "}
            <span className="text-gradient">30-Minute Consultation?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Not sure how to start your website project?
            <br />
            Most people waste time and money because they don't have a clear plan.
          </p>
          <p className="mt-4 text-lg font-semibold text-primary">
            That's why we offer a free 30-minute strategy session.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* What You'll Get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface-elevated p-8 shadow-elevated"
          >
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              🎁 What You'll Get
            </h3>
            <ul className="space-y-5">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base text-foreground pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface-elevated p-8 shadow-elevated"
          >
            <h3 className="mb-6 text-xl font-bold flex items-center gap-2">
              🔥 Why It Matters
            </h3>
            <ul className="space-y-5">
              {reasons.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base text-foreground pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-muted/30 p-4 text-center">
              <p className="text-sm text-muted-foreground italic">
                No sales pressure. Just honest advice.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="gap-2 rounded-full px-10 text-base font-semibold">
            Book Your Free 30-Minute Consultation Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationSection;
