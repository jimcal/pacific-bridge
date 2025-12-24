export type Lang = "en" | "zh-Hant";

export type Example = {
  title: string;
  lines: string[];
  note?: string;
};

type Section0 = { title: string; lead: string; paragraphs: string[] };

type Section1 = {
  title: string;
  lead: string;
  bullets: { strong: string; text: string }[];
};

type Section2 = {
  title: string;
  intro: string;
  items: { title: string; text: string }[];
  quote: string;
};

type Section3 = {
  title: string;
  intro: string;
  items: { title: string; text: string }[];
  highlight: string;
};

type Section4 = {
  title: string;
  intro: string;
  cards: { title: string; text: string; italic: string }[];
  highlightTop: string;
  highlightBottom: string;
};

type Section5 = {
  title: string;
  intro: string;
  cards: {
    title: string;
    text: string;
    advantages: string[];
    tradeoffs: string[];
    recommendation: string;
  }[];
  goldenRuleTitle: string;
  goldenRuleText: string;
};

type Section6 = { title: string; description: string };

type Section7 = {
  title: string;
  quote: string;
  body: string;
  paras: string[];
  ctaContact: string;
  ctaBack: string;
  footer1: string;
  footer2: string;
};

export type LocaleContent = {
  nav: string[];
  "section-0": Section0;
  "section-1": Section1;
  "section-2": Section2;
  "section-3": Section3;
  "section-4": Section4;
  "section-5": Section5;
  "section-6": Section6;
  "section-7": Section7;
  examples: Example[];
};

export const content: Record<Lang, LocaleContent> = {
  en: {
    nav: [
      "Opening",
      "Market",
      "Changed",
      "Taiwan",
      "Framework",
      "Participate",
      "Examples",
      "Closing",
    ],
    "section-0": {
      title: "Bridging Innovation & Manufacturing",
      lead:
        "A candid view of U.S. venture capital trends and the strategic opportunity for Taiwanese enterprises.",
      paragraphs: [
        "This is not investment advice. This is not a fund pitch. This is not a sales deck.",
        "This is a memo from someone who has spent years bridging Silicon Valley and Taiwan—sharing what has changed, why it matters, and what doors are now open for you.",
      ],
    },
    "section-1": {
      title: "U.S. Market Snapshot",
      lead:
        "Capital has returned—but it is concentrated in fewer, larger deals, especially in AI.",
      bullets: [
        {
          strong: "70% of all funding",
          text: "now flows into mega-rounds ($100M+), the highest concentration in history.",
        },
        {
          strong: "AI dominates mega-rounds:",
          text: "Two-thirds of mega-round capital goes to AI-related companies, reshaping the entire venture ecosystem.",
        },
        {
          strong: "Only 20% of seed companies",
          text: "now graduate to Series A (down from 35% historically). This is the \"seed crunch.\"",
        },
        {
          strong: "Higher bar for founders:",
          text: "VCs now demand larger market sizes, proven business models, and lower cash burn. The easy money era is over.",
        },
      ],
    },
    "section-2": {
      title: "What Changed Since Easy Money",
      intro: "The venture landscape has shifted in three major ways:",
      items: [
        {
          title: "1. Higher Expectations",
          text:
            "In 2020–2021, a great pitch and a solid team were enough. Today, VCs want to see real customers, real revenue, and proof of product-market fit before writing a Series A check.",
        },
        {
          title: "2. Longer Time Between Rounds",
          text:
            "Seed rounds are smaller. Series A takes 24–36 months instead of 18. This puts immense pressure on early-stage teams to prove themselves with minimal capital.",
        },
        {
          title: "3. Fewer Companies Funded Overall",
          text:
            "Total VC funding has remained flat or declined, but mega-rounds are larger than ever. This means fewer companies get any VC money at all—and those that do are the elite few in AI, fintech, or software.",
        },
      ],
      quote:
        '"This is not judgment. This is data. A promising hardware or manufacturing startup in 2025 faces a very different landscape than one in 2021."',
    },
    "section-3": {
      title: "Why This Matters for Taiwanese Public Companies",
      intro:
        "Taiwanese enterprises have something U.S. startups desperately need—and now have more leverage than ever to provide it.",
      items: [
        {
          title: "Manufacturing Capability",
          text:
            "Factories, supply chains, scale-up experience, and cost control. For a hardware startup, this is invaluable. You don't just invest—you unlock production.",
        },
        {
          title: "B2B Client Networks",
          text:
            "Decades of relationships with global enterprises. A U.S. startup would spend years—and millions—to build what you already have. You can open doors in 90 days.",
        },
        {
          title: "Supply Chain & Asia Market Access",
          text:
            "As startups think beyond the U.S., your position as a bridge to Asia becomes critical. That's not a financial asset—that's a strategic asset.",
        },
      ],
      highlight:
        "The startup needs the capital. You don't need their returns as much as you need the technology, the market position, and the partnership.",
    },
    "section-4": {
      title: "The Right Frame for Startup Participation",
      intro: "Stop thinking about \"returns.\" Start thinking about these three lenses:",
      cards: [
        {
          title: "1. Technology Radar",
          text:
            "Small investments in early-stage teams give you a front-row seat to what's coming next. You're not betting on returns—you're building early-warning systems for your industry.",
          italic: "What emerging tech could disrupt or enhance your core business in 5–10 years?",
        },
        {
          title: "2. Second Growth Curve",
          text:
            "Not every startup investment needs to go into your core business. Some are pure optionality—hedges against your industry flattening. They could become 10% of your revenue in 10 years, or they could provide zero revenue. The point is, you're holding an option.",
          italic: "What adjacent markets could you expand into? Start small.",
        },
        {
          title: "3. Partnership / M&A Optionality",
          text:
            "A small investment keeps you in the deal flow. If a startup succeeds and becomes relevant to your business, you can propose a partnership, a commercial deal, or an acquisition. If it doesn't, you've learned something.",
          italic: "What acquisition targets could you identify years in advance?",
        },
      ],
      highlightTop:
        "The mental shift: You're not a venture capitalist. You're a strategist who deploys capital.",
      highlightBottom:
        "Your job is not to pick winners. Your job is to stay informed, build relationships, and maintain optionality. If you make 10 small bets and one of them becomes a multi-billion dollar strategic asset, the other 9 were tuition.",
    },
    "section-5": {
      title: "Practical Ways to Participate",
      intro: "Three paths. Choose based on your risk tolerance and internal capability.",
      cards: [
        {
          title: "Path 1: LP in Funds",
          text:
            "Invest $5–50M in reputable U.S. venture funds. Let professionals pick companies. You diversify across 20–30 companies. You learn. You have minimal day-to-day involvement.",
          advantages: [
            "Learning from world-class operators",
            "Risk diversification",
            "Low operational burden",
          ],
          tradeoffs: [
            "Passive role (no direct influence)",
            "Limited direct startup access",
            "Long-term capital commitment",
          ],
          recommendation:
            "Recommendation: Start with one fund in an area aligned to your business. Treat it as tuition in Silicon Valley.",
        },
        {
          title: "Path 2: Strategic Follow-On",
          text:
            "Work with a lead fund or investor, and co-invest in specific deals. You pick companies that matter to your business—hardware, semiconductor, logistics, AI applications. $1–10M per deal. Direct dialogue with founders.",
          advantages: [
            "Select relevant companies",
            "Direct founder relationships",
            "Clear strategic alignment",
          ],
          tradeoffs: [
            "Requires internal deal evaluation",
            "Concentrated risk",
            "More operational involvement",
          ],
          recommendation:
            "Recommendation: Focus on startups that can leverage your manufacturing or supply chain strength. Think partnerships, not just returns.",
        },
        {
          title: "Path 3: Small, In-House CVC",
          text:
            "Build a small venture committee (3–5 people) within your company. Deploy $20–100M total, with $500K–5M per company. Highly selective. Direct control. Long-term partnerships with founders.",
          advantages: [
            "Full strategic control",
            "Direct founder partnerships",
            "Deep internal knowledge",
          ],
          tradeoffs: [
            "Requires strong internal talent",
            "Operational complexity",
            "Concentrated risk",
          ],
          recommendation:
            "Recommendation: Only if you have the internal team and patience for a 10+ year horizon. Otherwise, outsource this to a fund.",
        },
      ],
      goldenRuleTitle: "The Golden Rule:",
      goldenRuleText:
        "Size each investment so that losing it doesn't hurt, but winning pays for ten losses. Think in terms of portfolio optionality, not home runs.",
    },
    "section-6": {
      title: "Case Studies",
      description:
        "Placeholder section: Real examples of Taiwanese public companies engaging with US startups will be inserted here—showing how they've used technology radar, strategic partnerships, and acquisition options to strengthen their market position.",
    },
    examples: [
      {
        title:
          "Example A | Gudeng Precision (3680, OTC) × Mirle (6438, TWSE) — Value-chain extension",
        lines: [
          "Investor: Gudeng Precision (3680, OTC)",
          "Target: Mirle (6438, TWSE)",
          "Deal: Gudeng announced acquiring Mirle shares (period, shares, average price, authorization)",
          "One-line thesis: From semiconductor components/consumables → to automation equipment; integrating up/downstream.",
        ],
      },
      {
        title:
          "Example B | Foxconn (2317, TWSE) — Use a growth-stage fund for long-term strategic investing",
        lines: [
          "Investor: Foxconn Global Investment; Oceanus Growth Fund (growth-stage focus, AI/biotech/emerging tech)",
          "One-line thesis: Use funds for long-term strategic allocation—delegate sourcing/allocation to professionals while keeping collaboration options open.",
        ],
        note:
          "Also noted: Foxconn publicly highlights significant direct/indirect investments and startup engagement in its '3+3' focus areas.",
      },
      {
        title:
          "Example C | Wistron (3231, TWSE) — CVC + be an LP (use fund networks to widen sourcing)",
        lines: [
          "Approach: Invest in Taiwan startups and also commit as LP to multiple VC funds to broaden network and deal flow; also shared multi‑year investment planning.",
          "One-line thesis: Start as LP to build pipelines and a learning curve, then select a few cases for deeper strategic/financial bets.",
        ],
      },
    ],
    "section-7": {
      title: "The Window is Open",
      quote:
        '"The US has the innovation. Taiwan has the realization. Together, we don\'t just invest in the future—we build it."',
      body:
        "The venture ecosystem is consolidating. Capital is scarce. But opportunity is abundant for those who can bridge Silicon Valley's innovation with Taiwan's manufacturing and supply chain strength.",
      paras: [
        "This is not a call to be a venture capitalist. It's a call to be strategically patient, intellectually humble, and operationally disciplined.",
        "Start small. Learn fast. Build relationships. Stay for the long term.",
      ],
      ctaContact: "Contact for Partnership",
      ctaBack: "Back to Start",
      footer1: "Pacific Bridge | A strategic memo for Taiwanese public company leadership",
      footer2: "Questions? Feedback? Please reach out to discuss.",
    },
  },
  "zh-Hant": {
    nav: ["開場", "市場", "變化", "台灣", "框架", "參與", "案例", "結語"],
    // Minimal: reuse EN copy for sections; localize examples and nav. Content owners can replace below incrementally.
    "section-0": {
      title: "Bridging Innovation & Manufacturing",
      lead:
        "A candid view of U.S. venture capital trends and the strategic opportunity for Taiwanese enterprises.",
      paragraphs: [
        "This is not investment advice. This is not a fund pitch. This is not a sales deck.",
        "This is a memo from someone who has spent years bridging Silicon Valley and Taiwan—sharing what has changed, why it matters, and what doors are now open for you.",
      ],
    },
    "section-1": {
      title: "U.S. Market Snapshot",
      lead:
        "Capital has returned—but it is concentrated in fewer, larger deals, especially in AI.",
      bullets: [
        {
          strong: "70% of all funding",
          text: "now flows into mega-rounds ($100M+), the highest concentration in history.",
        },
        {
          strong: "AI dominates mega-rounds:",
          text: "Two-thirds of mega-round capital goes to AI-related companies, reshaping the entire venture ecosystem.",
        },
        {
          strong: "Only 20% of seed companies",
          text: "now graduate to Series A (down from 35% historically). This is the \"seed crunch.\"",
        },
        {
          strong: "Higher bar for founders:",
          text: "VCs now demand larger market sizes, proven business models, and lower cash burn. The easy money era is over.",
        },
      ],
    },
    "section-2": {
      title: "What Changed Since Easy Money",
      intro: "The venture landscape has shifted in three major ways:",
      items: [
        {
          title: "1. Higher Expectations",
          text:
            "In 2020–2021, a great pitch and a solid team were enough. Today, VCs want to see real customers, real revenue, and proof of product-market fit before writing a Series A check.",
        },
        {
          title: "2. Longer Time Between Rounds",
          text:
            "Seed rounds are smaller. Series A takes 24–36 months instead of 18. This puts immense pressure on early-stage teams to prove themselves with minimal capital.",
        },
        {
          title: "3. Fewer Companies Funded Overall",
          text:
            "Total VC funding has remained flat or declined, but mega-rounds are larger than ever. This means fewer companies get any VC money at all—and those that do are the elite few in AI, fintech, or software.",
        },
      ],
      quote:
        '"This is not judgment. This is data. A promising hardware or manufacturing startup in 2025 faces a very different landscape than one in 2021."',
    },
    "section-3": {
      title: "Why This Matters for Taiwanese Public Companies",
      intro:
        "Taiwanese enterprises have something U.S. startups desperately need—and now have more leverage than ever to provide it.",
      items: [
        {
          title: "Manufacturing Capability",
          text:
            "Factories, supply chains, scale-up experience, and cost control. For a hardware startup, this is invaluable. You don't just invest—you unlock production.",
        },
        {
          title: "B2B Client Networks",
          text:
            "Decades of relationships with global enterprises. A U.S. startup would spend years—and millions—to build what you already have. You can open doors in 90 days.",
        },
        {
          title: "Supply Chain & Asia Market Access",
          text:
            "As startups think beyond the U.S., your position as a bridge to Asia becomes critical. That's not a financial asset—that's a strategic asset.",
        },
      ],
      highlight:
        "The startup needs the capital. You don't need their returns as much as you need the technology, the market position, and the partnership.",
    },
    "section-4": {
      title: "The Right Frame for Startup Participation",
      intro: "Stop thinking about \"returns.\" Start thinking about these three lenses:",
      cards: [
        {
          title: "1. Technology Radar",
          text:
            "Small investments in early-stage teams give you a front-row seat to what's coming next. You're not betting on returns—you're building early-warning systems for your industry.",
          italic: "What emerging tech could disrupt or enhance your core business in 5–10 years?",
        },
        {
          title: "2. Second Growth Curve",
          text:
            "Not every startup investment needs to go into your core business. Some are pure optionality—hedges against your industry flattening. They could become 10% of your revenue in 10 years, or they could provide zero revenue. The point is, you're holding an option.",
          italic: "What adjacent markets could you expand into? Start small.",
        },
        {
          title: "3. Partnership / M&A Optionality",
          text:
            "A small investment keeps you in the deal flow. If a startup succeeds and becomes relevant to your business, you can propose a partnership, a commercial deal, or an acquisition. If it doesn't, you've learned something.",
          italic: "What acquisition targets could you identify years in advance?",
        },
      ],
      highlightTop:
        "The mental shift: You're not a venture capitalist. You're a strategist who deploys capital.",
      highlightBottom:
        "Your job is not to pick winners. Your job is to stay informed, build relationships, and maintain optionality. If you make 10 small bets and one of them becomes a multi-billion dollar strategic asset, the other 9 were tuition.",
    },
    "section-5": {
      title: "Practical Ways to Participate",
      intro: "Three paths. Choose based on your risk tolerance and internal capability.",
      cards: [
        {
          title: "Path 1: LP in Funds",
          text:
            "Invest $5–50M in reputable U.S. venture funds. Let professionals pick companies. You diversify across 20–30 companies. You learn. You have minimal day-to-day involvement.",
          advantages: [
            "Learning from world-class operators",
            "Risk diversification",
            "Low operational burden",
          ],
          tradeoffs: [
            "Passive role (no direct influence)",
            "Limited direct startup access",
            "Long-term capital commitment",
          ],
          recommendation:
            "Recommendation: Start with one fund in an area aligned to your business. Treat it as tuition in Silicon Valley.",
        },
        {
          title: "Path 2: Strategic Follow-On",
          text:
            "Work with a lead fund or investor, and co-invest in specific deals. You pick companies that matter to your business—hardware, semiconductor, logistics, AI applications. $1–10M per deal. Direct dialogue with founders.",
          advantages: [
            "Select relevant companies",
            "Direct founder relationships",
            "Clear strategic alignment",
          ],
          tradeoffs: [
            "Requires internal deal evaluation",
            "Concentrated risk",
            "More operational involvement",
          ],
          recommendation:
            "Recommendation: Focus on startups that can leverage your manufacturing or supply chain strength. Think partnerships, not just returns.",
        },
        {
          title: "Path 3: Small, In-House CVC",
          text:
            "Build a small venture committee (3–5 people) within your company. Deploy $20–100M total, with $500K–5M per company. Highly selective. Direct control. Long-term partnerships with founders.",
          advantages: [
            "Full strategic control",
            "Direct founder partnerships",
            "Deep internal knowledge",
          ],
          tradeoffs: [
            "Requires strong internal talent",
            "Operational complexity",
            "Concentrated risk",
          ],
          recommendation:
            "Recommendation: Only if you have the internal team and patience for a 10+ year horizon. Otherwise, outsource this to a fund.",
        },
      ],
      goldenRuleTitle: "The Golden Rule:",
      goldenRuleText:
        "Size each investment so that losing it doesn't hurt, but winning pays for ten losses. Think in terms of portfolio optionality, not home runs.",
    },
    "section-6": {
      title: "案例研究",
      description:
        "以下為台灣上市櫃企業與新創互動的實例，展示如何運用技術雷達、策略合作與併購選項強化競爭力。",
    },
    examples: [
      {
        title:
          "Example A｜家登精密（3680，上櫃）× 迅得（6438，上市）— 產業鏈延伸（你已在用這個）",
        lines: [
          "投資方：家登精密（3680，上櫃）",
          "標的：迅得（6438，上市）",
          "交易：家登公告取得迅得股權（含期間、股數、均價、授權額度等）",
          "一句投資邏輯：半導體零組件/耗材 → 自動化設備，往上下游整合。",
        ],
      },
      {
        title:
          "Example B｜鴻海（2317，上市）— 用「成長型基金」做長期策略投資（Growth-stage 取向）",
        lines: [
          "投資方：鴻棋國際投資；Oceanus Growth Fund（主題式成長型，聚焦 AI/生技/新興科技）",
          "一句投資邏輯：用基金做「長期策略配置」，把案源/配置交給專業團隊，同時保留合作選項。",
        ],
        note:
          "補一句（可選）：鴻海也公開提到在「3+3」領域有大量直接/間接投資與新創互動",
      },
      {
        title:
          "Example C｜緯創（3231，上市）— CVC + 當 LP（用基金網路擴大案源）",
        lines: [
          "作法：投資台灣新創、也出資多檔 VC 基金（LP 身分），用更廣網路找機會；並提到未來幾年投資規模規劃",
          "一句投資邏輯：先用 LP 建管道與學習曲線，再挑少數案做更深策略/財務下注。",
        ],
      },
    ],
    "section-7": {
      title: "窗口正在打開",
      quote:
        '"The US has the innovation. Taiwan has the realization. Together, we don\'t just invest in the future—we build it."',
      body:
        "The venture ecosystem is consolidating. Capital is scarce. But opportunity is abundant for those who can bridge Silicon Valley's innovation with Taiwan's manufacturing and supply chain strength.",
      paras: [
        "This is not a call to be a venture capitalist. It's a call to be strategically patient, intellectually humble, and operationally disciplined.",
        "Start small. Learn fast. Build relationships. Stay for the long term.",
      ],
      ctaContact: "合作洽談",
      ctaBack: "回到開頭",
      footer1: "Pacific Bridge｜寫給台灣上市櫃企業決策者的策略備忘",
      footer2: "有想法或建議？歡迎寫信交流。",
    },
  },
};
