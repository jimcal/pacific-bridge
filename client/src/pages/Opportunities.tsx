import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Network, MapPin } from "lucide-react";

export default function Opportunities() {
  return (
    <Layout>
      <div className="bg-background py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Taiwan? Why Now?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              "Taiwanese enterprises possess exactly what US startups are missing."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/ai-chip-manufacturing.jpg" 
                alt="Advanced Manufacturing" 
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold mb-6">The "Pattern Matching" Problem</h2>
              <p className="text-lg text-muted-foreground mb-4">
                US VCs rely heavily on pattern matching: repeat founders, Bay Area location, big brand backing.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This leaves a massive gap: <strong>Industrial, Manufacturing, and B2B startups</strong>. These companies have solid tech but often lack the "sexy" consumer appeal or Silicon Valley pedigree.
              </p>
              <div className="p-6 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="font-medium text-foreground italic">
                  "Their technology is solid. The market exists. But they are overlooked by traditional VC."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">The Three Pillars of Taiwan's Advantage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:border-primary transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Manufacturing Capability</h3>
                  <p className="text-muted-foreground">
                    Factories, supply chains, and mass production experience. For a hardware startup, this is priceless.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:border-primary transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">B2B Client Networks</h3>
                  <p className="text-muted-foreground">
                    Decades of relationships with global giants. Startups would take years to build what you already have.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:border-primary transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4">Asia Market Know-how</h3>
                  <p className="text-muted-foreground">
                    A bridge to Asia. Many US startups want to enter Asia but don't know how. You can be their guide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Strategic Mindset Shift</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Use it as a "Technology Radar"</h3>
                  <p className="text-muted-foreground">See future tech trends before your competitors do.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Build a "Second Growth Curve"</h3>
                  <p className="text-muted-foreground">Find new business lines and possibilities beyond your mature core business.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Long-term Strategy, Not Speculation</h3>
                  <p className="text-muted-foreground">This isn't stock trading. It's strategic positioning for the next decade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
