import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FinalCTASection = () => {
  return (
    <section className="bg-hero relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[200px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-hero-foreground md:text-4xl lg:text-5xl">
              Ready to Make Your{" "}
              <span className="text-gradient">Dream Project</span> a Reality?
            </h2>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-hero-muted">
              Tell us about your idea, and our team will get in touch with you
              within 48 hours with a free project consultation.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm text-hero-muted">
                <Clock className="h-4 w-4 text-primary" />
                Response within 48h
              </div>
              <div className="flex items-center gap-2 text-sm text-hero-muted">
                <MessageCircle className="h-4 w-4 text-primary" />
                Free consultation included
              </div>
            </div>

            <div className="rounded-xl border border-hero-muted/10 bg-hero-muted/5 p-4">
              <p className="text-sm text-hero-muted">
                <span className="font-semibold text-hero-foreground">
                  Limited offer:
                </span>{" "}
                Get a free website audit with every project inquiry this month.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-surface-elevated p-8 shadow-elevated">
              <h3 className="mb-6 text-xl font-bold">
                Get Your Free Quote
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Full Name *" className="rounded-xl" />
                  <Input
                    type="email"
                    placeholder="Email *"
                    className="rounded-xl"
                  />
                </div>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select Service *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plugin-setup">Plugin Setup & Configuration</SelectItem>
                    <SelectItem value="plugin-dev">Custom Plugin Development</SelectItem>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="woocommerce">WooCommerce Store</SelectItem>
                    <SelectItem value="gutenberg">Gutenberg Development</SelectItem>
                    <SelectItem value="security">Performance & Security</SelectItem>
                    <SelectItem value="migration">Migration Service</SelectItem>
                    <SelectItem value="ai">Custom AI Solutions</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Project Budget *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="150-300">$150 – $300</SelectItem>
                    <SelectItem value="400-800">$400 – $800</SelectItem>
                    <SelectItem value="800-1500">$800 – $1,500</SelectItem>
                    <SelectItem value="1500-2500">$1,500 – $2,500</SelectItem>
                    <SelectItem value="3000-4000">$3,000 – $4,000</SelectItem>
                    <SelectItem value="5000+">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Describe your project *"
                  className="min-h-[100px] rounded-xl"
                />
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-full text-base font-semibold"
                >
                  Submit & Get Free Consultation{" "}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam. We'll respond within 48 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
