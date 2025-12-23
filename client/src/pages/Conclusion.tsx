import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Conclusion() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 text-foreground">
              The Window is Open.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              "The US has the innovation. Taiwan has the realization.<br />
              Together, we don't just invest in the future—we build it."
            </p>
            
            <div className="bg-card border border-border p-8 rounded-2xl shadow-xl mb-12 max-w-2xl mx-auto">
              <h3 className="font-bold text-xl mb-4 text-primary">Key Takeaway</h3>
              <p className="text-lg text-muted-foreground">
                Don't just watch the AI and supply chain revolution from the sidelines. 
                Leverage your manufacturing strength to become an indispensable partner to the next generation of US unicorns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                <Mail className="mr-2 h-5 w-5" /> Contact for Partnership
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2">
                  Back to Start
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
