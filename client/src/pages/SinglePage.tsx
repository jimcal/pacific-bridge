import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SinglePage() {
  const [activeSection, setActiveSection] = useState(0);

  const handleContactClick = () => {
    const mailtoLink = `mailto:contact@pacific-bridge.io?subject=Partnership Inquiry`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-4 h-16 flex items-center">
          <span className="font-serif text-xl font-bold tracking-tight text-primary">
            Pacific Bridge
          </span>
          <nav className="hidden md:flex ml-auto gap-1 text-sm">
            {[
              "Opening",
              "Market",
              "Changed",
              "Taiwan",
              "Framework",
              "Participate",
              "Examples",
              "Closing",
            ].map((label, idx) => (
              <button
                key={idx}
                onClick={() =>
                  document.getElementById(`section-${idx}`)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-3 py-2 rounded text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Section 1: Opening */}
        <section
          id="section-0"
          className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-bridge.jpg"
              alt="Bridge"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl relative z-10 text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Bridging Innovation & Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
              A candid view of U.S. venture capital trends and the strategic opportunity for Taiwanese enterprises.
            </p>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong>This is not investment advice.</strong> This is not a fund pitch. This is
                not a sales deck.
              </p>
              <p>
                This is a memo from someone who has spent years bridging Silicon Valley and
                Taiwan—sharing what has changed, why it matters, and what doors are now open for
                you.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 2: U.S. Market Snapshot */}
        <section
          id="section-1"
          className="min-h-screen flex items-center py-24 px-4 bg-muted/30"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">
              U.S. Market Snapshot
            </h2>

            <div className="mb-12">
              <p className="text-2xl font-semibold text-primary mb-6 leading-relaxed">
                Capital has returned—but it is concentrated in fewer, larger deals, especially in
                AI.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-l-4 border-primary bg-card rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>70% of all funding</strong> now flows into mega-rounds ($100M+), the
                  highest concentration in history.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary bg-card rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>AI dominates mega-rounds:</strong> Two-thirds of mega-round capital goes
                  to AI-related companies, reshaping the entire venture ecosystem.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary bg-card rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>Only 20% of seed companies</strong> now graduate to Series A (down from
                  35% historically). This is the "seed crunch."
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary bg-card rounded-r-lg">
                <p className="text-lg text-foreground">
                  <strong>Higher bar for founders:</strong> VCs now demand larger market sizes,
                  proven business models, and lower cash burn. The easy money era is over.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: What Changed */}
        <section id="section-2" className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">
              What Changed Since Easy Money
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The venture landscape has shifted in three major ways:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">1. Higher Expectations</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In 2020–2021, a great pitch and a solid team were enough. Today, VCs want to see
                  real customers, real revenue, and proof of product-market fit before writing a
                  Series A check.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  2. Longer Time Between Rounds
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Seed rounds are smaller. Series A takes 24–36 months instead of 18. This puts
                  immense pressure on early-stage teams to prove themselves with minimal capital.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  3. Fewer Companies Funded Overall
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Total VC funding has remained flat or declined, but mega-rounds are larger than
                  ever. This means fewer companies get any VC money at all—and those that do are
                  the elite few in AI, fintech, or software.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground italic">
                "This is not judgment. This is data. A promising hardware or manufacturing startup
                in 2025 faces a very different landscape than one in 2021."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Why This Matters for Taiwan */}
        <section
          id="section-3"
          className="min-h-screen flex items-center py-24 px-4 bg-muted/30"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">
              Why This Matters for Taiwanese Public Companies
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Taiwanese enterprises have something U.S. startups desperately need—and now have more
              leverage than ever to provide it.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Manufacturing Capability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Factories, supply chains, scale-up experience, and cost control. For a hardware
                  startup, this is invaluable. You don't just invest—you unlock production.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">B2B Client Networks</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Decades of relationships with global enterprises. A U.S. startup would spend
                  years—and millions—to build what you already have. You can open doors in 90 days.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Supply Chain & Asia Market Access
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As startups think beyond the U.S., your position as a bridge to Asia becomes
                  critical. That's not a financial asset—that's a strategic asset.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold">
                The startup needs the capital. You don't need their returns as much as you need
                the technology, the market position, and the partnership.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 5: Framework (Conceptual Center) */}
        <section id="section-4" className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">
              The Right Frame for Startup Participation
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Stop thinking about "returns." Start thinking about these three lenses:
            </p>

            <div className="space-y-8">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">1. Technology Radar</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Small investments in early-stage teams give you a front-row seat to what's
                    coming next. You're not betting on returns—you're building early-warning systems
                    for your industry.
                  </p>
                  <p className="text-muted-foreground italic">
                    What emerging tech could disrupt or enhance your core business in 5–10 years?
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">2. Second Growth Curve</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Not every startup investment needs to go into your core business. Some are pure
                    optionality—hedges against your industry flattening. They could become 10% of
                    your revenue in 10 years, or they could provide zero revenue. The point is,
                    you're holding an option.
                  </p>
                  <p className="text-muted-foreground italic">
                    What adjacent markets could you expand into? Start small.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    3. Partnership / M&A Optionality
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    A small investment keeps you in the deal flow. If a startup succeeds and
                    becomes relevant to your business, you can propose a partnership, a commercial
                    deal, or an acquisition. If it doesn't, you've learned something.
                  </p>
                  <p className="text-muted-foreground italic">
                    What acquisition targets could you identify years in advance?
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold mb-4">
                The mental shift: You're not a venture capitalist. You're a strategist who deploys
                capital.
              </p>
              <p className="text-muted-foreground">
                Your job is not to pick winners. Your job is to stay informed, build relationships,
                and maintain optionality. If you make 10 small bets and one of them becomes a
                multi-billion dollar strategic asset, the other 9 were tuition.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 6: Practical Ways to Participate */}
        <section
          id="section-5"
          className="min-h-screen flex items-center py-24 px-4 bg-muted/30"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">
              Practical Ways to Participate
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Three paths. Choose based on your risk tolerance and internal capability.
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Path 1: LP in Funds</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Invest $5–50M in reputable U.S. venture funds. Let professionals pick companies.
                    You diversify across 20–30 companies. You learn. You have minimal day-to-day
                    involvement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-green-700 mb-3">Advantages:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Learning from world-class operators</li>
                        <li>• Risk diversification</li>
                        <li>• Low operational burden</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-red-700 mb-3">Tradeoffs:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Passive role (no direct influence)</li>
                        <li>• Limited direct startup access</li>
                        <li>• Long-term capital commitment</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded text-sm text-foreground">
                    <strong>Recommendation:</strong> Start with one fund in an area aligned to your
                    business. Treat it as tuition in Silicon Valley.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Path 2: Strategic Follow-On</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Work with a lead fund or investor, and co-invest in specific deals. You pick
                    companies that matter to your business—hardware, semiconductor, logistics, AI
                    applications. $1–10M per deal. Direct dialogue with founders.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-green-700 mb-3">Advantages:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Select relevant companies</li>
                        <li>• Direct founder relationships</li>
                        <li>• Clear strategic alignment</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-red-700 mb-3">Tradeoffs:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Requires internal deal evaluation</li>
                        <li>• Concentrated risk</li>
                        <li>• More operational involvement</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded text-sm text-foreground">
                    <strong>Recommendation:</strong> Focus on startups that can leverage your
                    manufacturing or supply chain strength. Think partnerships, not just returns.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Path 3: Small, In-House CVC
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Build a small venture committee (3–5 people) within your company. Deploy $20–100M
                    total, with $500K–5M per company. Highly selective. Direct control. Long-term
                    partnerships with founders.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-bold text-green-700 mb-3">Advantages:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Full strategic control</li>
                        <li>• Direct founder partnerships</li>
                        <li>• Deep internal knowledge</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-red-700 mb-3">Tradeoffs:</p>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Requires strong internal talent</li>
                        <li>• Operational complexity</li>
                        <li>• Concentrated risk</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted rounded text-sm text-foreground">
                    <strong>Recommendation:</strong> Only if you have the internal team and patience
                    for a 10+ year horizon. Otherwise, outsource this to a fund.
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold mb-4">The Golden Rule:</p>
              <p className="text-muted-foreground">
                Size each investment so that losing it doesn't hurt, but winning pays for ten losses.
                Think in terms of portfolio optionality, not home runs.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 7: Examples (Placeholders) */}
        <section id="section-6" className="min-h-screen flex items-center py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full"
          >
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">Case Studies</h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Placeholder section: Real examples of Taiwanese public companies engaging with US startups
              will be inserted here—showing how they've used technology radar, strategic partnerships,
              and acquisition options to strengthen their market position.
            </p>

            <div className="space-y-8">
              {[1, 2, 3].map((idx) => (
                <Card key={idx} className="border-dashed border-2 border-muted-foreground/30">
                  <CardContent className="p-8 text-center">
                    <div className="text-muted-foreground italic mb-4">
                      Case Study {idx}: [Company Name]
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      [Industry] | [Investment Strategy] | [Outcome / Learnings]
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      To be completed with real examples.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
              <p className="text-muted-foreground text-sm">
                <strong>Note:</strong> These are placeholders for real case studies. We are gathering
                data and will populate with actual examples in the next version.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 8: Closing */}
        <section
          id="section-7"
          className="min-h-screen flex items-center py-24 px-4 bg-muted/30"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto w-full text-center"
          >
            <h2 className="font-serif text-5xl font-bold mb-8 text-foreground">The Window is Open</h2>

            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              "The US has the innovation. Taiwan has the realization. Together, we don't just invest
              in the future—we build it."
            </p>

            <div className="p-8 bg-card border border-border rounded-lg mb-12 max-w-2xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">
                The venture ecosystem is consolidating. Capital is scarce. But opportunity is abundant
                for those who can bridge Silicon Valley's innovation with Taiwan's manufacturing and
                supply chain strength.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                This is not a call to be a venture capitalist. It's a call to be strategically
                patient, intellectually humble, and operationally disciplined.
              </p>

              <p className="text-lg text-muted-foreground">
                Start small. Learn fast. Build relationships. Stay for the long term.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="mr-2 h-5 w-5" /> Contact for Partnership
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2"
              >
                Back to Start
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
              <p>Pacific Bridge | A strategic memo for Taiwanese public company leadership</p>
              <p className="mt-2 italic">
                Questions? Feedback? Please reach out to discuss.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
