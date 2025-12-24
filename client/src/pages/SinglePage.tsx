import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/i18n";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SinglePage() {
  const [activeSection, setActiveSection] = useState(0);
  const { lang, toggle, setLang } = useLanguage();
  const t = content[lang];

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
          <div className="ml-auto flex items-center gap-3">
            <nav className="hidden md:flex gap-1 text-sm">
              {t.nav.map((label, idx) => (
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
            <div className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
              <button
                aria-label="Switch to English"
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 rounded ${
                  lang === "en" ? "text-foreground underline" : "hover:text-foreground"
                }`}
              >
                EN
              </button>
              <span className="opacity-50">|</span>
              <button
                aria-label="切換為繁體中文"
                onClick={() => setLang("zh-Hant")}
                className={`px-1.5 py-0.5 rounded ${
                  lang === "zh-Hant" ? "text-foreground underline" : "hover:text-foreground"
                }`}
              >
                繁中
              </button>
            </div>
          </div>
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
              {t["section-0"].title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
              {t["section-0"].lead}
            </p>
            <div className="space-y-4 text-lg text-muted-foreground">
              {t["section-0"].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
              {t["section-1"].title}
            </h2>

            <div className="mb-12">
              <p className="text-2xl font-semibold text-primary mb-6 leading-relaxed">
                {t["section-1"].lead}
              </p>
            </div>

            <div className="space-y-6">
              {t["section-1"].bullets.map((b, i) => (
                <div key={i} className="p-6 border-l-4 border-primary bg-card rounded-r-lg">
                  <p className="text-lg text-foreground">
                    <strong>{b.strong}</strong> {b.text}
                  </p>
                </div>
              ))}
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
              {t["section-2"].title}
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t["section-2"].intro}
            </p>

            <div className="space-y-8">
              {t["section-2"].items.map((it, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{it.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground italic">{t["section-2"].quote}</p>
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
              {t["section-3"].title}
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t["section-3"].intro}
            </p>

            <div className="space-y-8">
              {t["section-3"].items.map((it, i) => (
                <div key={i} className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{it.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold">{t["section-3"].highlight}</p>
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
              {t["section-4"].title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t["section-4"].intro}
            </p>

            <div className="space-y-8">
              {t["section-4"].cards.map((c, i) => (
                <Card key={i} className="border-t-4 border-t-primary">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{c.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">{c.text}</p>
                    <p className="text-muted-foreground italic">{c.italic}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold mb-4">{t["section-4"].highlightTop}</p>
              <p className="text-muted-foreground">{t["section-4"].highlightBottom}</p>
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
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">{t["section-5"].title}</h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">{t["section-5"].intro}</p>

            <div className="space-y-8">
              {t["section-5"].cards.map((c, i) => (
                <Card key={i}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{c.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{c.text}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-bold text-green-700 mb-3">Advantages:</p>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          {c.advantages.map((a, j) => (
                            <li key={j}>• {a}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold text-red-700 mb-3">Tradeoffs:</p>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                          {c.tradeoffs.map((d, j) => (
                            <li key={j}>• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-muted rounded text-sm text-foreground">
                      {c.recommendation}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-card border border-border rounded-lg">
              <p className="text-lg text-foreground font-semibold mb-4">{t["section-5"].goldenRuleTitle}</p>
              <p className="text-muted-foreground">{t["section-5"].goldenRuleText}</p>
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
            <h2 className="font-serif text-4xl font-bold mb-8 text-foreground">{t["section-6"].title}</h2>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t["section-6"].description}</p>

            <div className="space-y-8">
              {content[lang].examples.map((ex, i) => (
                <Card key={i}>
                  <CardContent className="p-8">
                    <div className="text-foreground font-semibold mb-2">{ex.title}</div>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      {ex.lines.map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                      {ex.note && (
                        <p className="italic opacity-80">{ex.note}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
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
            <h2 className="font-serif text-5xl font-bold mb-8 text-foreground">{t["section-7"].title}</h2>

            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed font-light">{t["section-7"].quote}</p>

            <div className="p-8 bg-card border border-border rounded-lg mb-12 max-w-2xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">{t["section-7"].body}</p>
            </div>

            <div className="space-y-4">
              {t["section-7"].paras.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="mr-2 h-5 w-5" /> {t["section-7"].ctaContact}
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2"
              >
                {t["section-7"].ctaBack}
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
              <p>{t["section-7"].footer1}</p>
              <p className="mt-2 italic">{t["section-7"].footer2}</p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
