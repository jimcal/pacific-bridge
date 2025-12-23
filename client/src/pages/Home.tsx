import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Globe, Handshake } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bridge.jpg"
            alt="Bridge connecting Silicon Valley and Taiwan"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Bridging Innovation & Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light leading-relaxed">
              US Venture Capital Trends & The Strategic Opportunity for Taiwan Enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trends">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Explore Market Trends <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">
                "I'm not here to sell you anything. I'm here to share an opportunity window."
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The global startup ecosystem is undergoing a massive shift. Driven by the AI wave, high interest rates, and supply chain restructuring, the rules of the game have changed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For Taiwan's listed companies, this isn't just news—it's a strategic leverage point. We hold the cards that US startups desperately need: manufacturing capability, B2B networks, and Asia market know-how.
              </p>
            </motion.div>
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">AI Dominance</h3>
                    <p className="text-muted-foreground">Capital is concentrating in AI mega-rounds, reshaping the investment landscape.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Supply Chain Shift</h3>
                    <p className="text-muted-foreground">Global restructuring places Taiwan at the center of critical hardware innovation.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Strategic Partnership</h3>
                    <p className="text-muted-foreground">Startups need more than money; they need partners to scale production and reach markets.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
