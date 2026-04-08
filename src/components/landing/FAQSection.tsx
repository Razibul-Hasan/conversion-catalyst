import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Why hire a WordPress development company?",
    a: "Hiring professional WordPress developers guarantees a high-quality, secure, and scalable website from the start. They bring great technical skills to handle complex features and follow best practices, saving you time and ensuring long-term performance.",
  },
  {
    q: "What custom development services does WPXPO offer?",
    a: "WPXPO provides custom website and theme development, specialized plugin creation, WooCommerce store development, performance/security optimization, migrations, Custom AI solutions, and Shopify App Development.",
  },
  {
    q: "Does WPXPO offer white-label development services?",
    a: "Yes! We offer white-label WordPress development services, allowing you to deliver high-quality custom WordPress solutions to your clients under your own brand.",
  },
  {
    q: "How do custom plugins enhance your site?",
    a: "Custom plugins add unique, business-specific features that you can't find in existing plugins. They integrate seamlessly, avoid third-party conflicts, and allow you to create specialized experiences tailored to your needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. Simple configurations take 3–5 days, while full custom builds typically take 2–8 weeks. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    q: "What happens after my project is delivered?",
    a: "We provide dedicated post-launch support to ensure everything runs smoothly. Our team is available for ongoing maintenance, updates, and any adjustments you may need.",
  },
];

const FAQSection = () => {
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
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our custom development services.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border bg-surface-elevated px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
