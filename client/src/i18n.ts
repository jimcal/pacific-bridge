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
  advLabel: string;
  tradeoffLabel: string;
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
  contactSubject: string;
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
  "section-8": Section0;
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
      "About",
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
        '"This is not subjective opinion. This is objective data. A promising hardware or manufacturing startup in 2025 faces a very different landscape than one in 2021."',
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
      advLabel: "Advantages:",
      tradeoffLabel: "Tradeoffs:",
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
      contactSubject: "Partnership Inquiry",
      ctaContact: "Contact for Partnership",
      ctaBack: "Back to Start",
      footer1: "The New Heights | A strategic memo for Taiwanese public company leadership",
      footer2: "Questions? Feedback? Please reach out to discuss.",
    },
    "section-8": {
      title: "About",
      lead: "About the author and how market data providers help capital markets.",
      paragraphs: [
        "I lead engineering teams that build marketing and operations data systems, integrating tools like Marketo and Salesforce so leads and customer data flow more accurately and quickly to the right people and processes.",
        "I am an engineering leader with a software and data engineering background, long experience building high-traffic products and data platforms including large-scale real-time data systems. Recently I have led teams in e-commerce and financial data domains to make product, data, and business processes into scalable systems.",
        "Our mission is to provide investors with reliable data on startups and private companies, and make private company performance comparable as benchmarks to speed and validate investment decisions.",
        "Morningstar provides investment research, ratings, and market data to help investors with asset allocation and security selection. PitchBook provides private-market and startup data—tracking companies, financings, valuations, and transactions to support investment research and benchmarking.",
        "In short: Morningstar covers public markets and funds research; PitchBook extends similar research and data into the private and startup world.",
      ],
    },
  },
  "zh-Hant": {
    nav: ["開場", "市場", "變化", "台灣", "框架", "參與", "案例", "結語", "關於"],
    "section-0": {
      title: "再造高峰｜連結創新與實務",
      lead: "從美國創投趨勢出發，直觀整理台灣企業的策略機會。",
      paragraphs: [
        "這不是投資建議。不是基金簡報。也不是銷售投影片。",
        "長期往返美國與台灣的親身觀察，最近這幾年創投環境的變化、以及台灣企業的機會在哪裡。",
      ],
    },
    "section-1": {
      title: "美國市場速寫",
      lead: "資金回來了，但集中在更少、規模更大的案子，特別是 AI。",
      bullets: [
        { strong: "70% 的資金", text: "流向超大額募資（$100M+），集中度創新高。" },
        {
          strong: "AI 吸金主流：",
          text: "近三分之二的資金投入 AI 相關公司，重塑整體創投生態。",
        },
        {
          strong: "只有約 20% 的種子公司",
          text: "能進入 A 輪（歷史約 35%）。這就是所謂的「種子擁擠」。",
        },
        {
          strong: "對創業者的門檻更高：",
          text: "VC 更要求市場規模、商業驗證與更低的燒錢速度。「資金寬鬆」時代已結束。",
        },
      ],
    },
    "section-2": {
      title: "低利率時代結束後，風向往哪裡吹",
      intro: "三個核心變化：",
      items: [
        {
          title: "1. 募資標竿更高",
          text:
            "2020–2021 年，好的簡報與團隊或許就夠。現在投資人更要看到真實客戶、營收與 PMF 證據才會寫 A 輪支票。",
        },
        {
          title: "2. 輪次間距更長",
          text:
            "種子輪更小，A 輪從 18 個月拉長到 24–36 個月，逼迫早期團隊用更少資本證明自己。",
        },
        {
          title: "3. 投資標的集中",
          text:
            "創投資金趨平甚至下降，但超大額更大。導致拿到錢的更少，集中在 AI/金融科技/軟體的少數菁英。",
        },
      ],
      quote: "「這不是主觀意見，是真實數據。2025 年的硬體/製造新創，處境和 2021 年已大不相同。」",
    },
    "section-3": {
      title: "台灣企業決策者，為何要關注這些變化？",
      intro: "台灣企業擁有美國新創迫切需要的資源，而且現在議價能力更強。",
      items: [
        {
          title: "製造與量產能力",
          text:
            "工廠、供應鏈、擴產經驗、成本控管。對硬體新創極其關鍵。你不只投資，還能協助量產。",
        },
        {
          title: "B2B 客戶網路",
          text:
            "多年累積的全球企業關係。美國新創要花數年與上千萬美金才能建立的，你 90 天就能打開門。",
        },
        {
          title: "供應鏈與亞洲市場通道",
          text:
            "當新創放眼美國以外，台灣企業能作為通往亞洲的戰略盟友，而非單純提供資金的股東。",
        },
      ],
      highlight: "新創不只需要資金；更需要的是技術、戰略位置與長期合作的盟友。",
    },
    "section-4": {
      title: "參與新創的正確心態",
      intro: "別只想報酬，請用三個視角思考：",
      cards: [
        {
          title: "1. 技術雷達",
          text:
            "小額投資早期團隊，買前排座位觀察未來。不是為了回報，而是打造產業的早期預警系統。",
          italic: "哪個新興技術可能在 5–10 年內改變你的核心業務？",
        },
        {
          title: "2. 第二條成長曲線",
          text:
            "不一定要進核心事業，有些純粹是選擇權—為產業趨緩的對沖。可能 10 年後占 10% 營收，也可能 0%。透過小額投資，掌握先機。",
          italic: "可以切入哪些鄰近市場？從小做起。",
        },
        {
          title: "3. 合作 / 併購的選擇權",
          text:
            "小額持續跟案，若成功且與你相關，就能進一步談合作、商業合約，甚至併購；若不成，也累積了學習經驗。",
          italic: "有哪些潛在標的可以提前多年鎖定與追蹤？",
        },
      ],
      highlightTop: "心態位移：你不是 VC，你是善用資本的策略型領導者。",
      highlightBottom:
        "任務不是挑贏家，而是保持資訊流通、建立關係、維持選擇權。10 個小注其中一個成為數十億的戰略資產，其他 9 個就是學費。",
    },
    "section-5": {
      title: "參與的實務做法",
      intro: "三條路徑，依風險承受度與內部能力選擇。",
      advLabel: "優點：",
      tradeoffLabel: "取捨：",
      cards: [
        {
          title: "路徑一：成為基金 LP",
          text:
            "投資 500–5,000 萬美元於可信賴的美國創投基金，讓專業團隊選案。分散至 20–30 家，邊投邊學，日常投入最低。",
          advantages: ["向一流團隊學習", "風險分散", "營運負擔低"],
          tradeoffs: ["較被動（影響力有限）", "直接接觸新創較少", "資金鎖定期長"],
          recommendation: "建議：先從一支與本業相符的基金開始，把它當作在矽谷上課的學費。",
        },
        {
          title: "路徑二：策略型共同投資",
          text:
            "與領投者合作，在特定案子跟投。挑與你有關的領域—硬體、半導體、物流、AI 應用。每案 25–100 萬美元，直接和創辦人互動。",
          advantages: ["可選擇與業務高度相關的公司", "建立直接創辦人關係", "策略一致性清楚"],
          tradeoffs: ["需要內部評估能力", "風險較集中", "營運投入較高"],
          recommendation: "建議：優先找能運用你製造/供應鏈優勢的團隊，先談合作，再談報酬。",
        },
        {
          title: "路徑三：小型內部 CVC",
          text:
            "在公司內建立 3–5 人的小型投資委員會。總額 2–10 億美元，每案 50–500 萬。極度嚴選、直接掌控、與創辦人建立長期夥伴關係。",
          advantages: ["完整策略主導權", "直接的創辦人夥伴關係", "累積深厚內部知識"],
          tradeoffs: ["需要強韌的內部人才", "營運複雜度提高", "風險集中"],
          recommendation: "建議：只有在具備人才與 10 年以上耐心時再自建；否則外包給基金。",
        },
      ],
      goldenRuleTitle: "黃金法則：",
      goldenRuleText:
        "每筆金額都要小到輸了不會痛，但贏了能補十次。用選擇權組合思維，而不是全壘打思維。",
    },
    "section-6": {
      title: "案例研究",
      description:
        "以下為台灣上市櫃企業與新創互動的實例，展示如何運用技術雷達、策略合作與併購選項強化競爭力。",
    },
    examples: [
      {
        title:
          "Example A｜家登精密（3680，上櫃）× 迅得（6438，上市）— 產業鏈延伸",
        lines: [
          "投資方：家登精密（3680，上櫃）",
          "標的：迅得（6438，上市）",
          "交易：家登公告取得迅得股權（含期間、股數、均價、授權額度等）",
          "投資邏輯：半導體零組件/耗材 → 自動化設備，往上下游整合。",
        ],
      },
      {
        title:
          "Example B｜鴻海（2317，上市）— 用「成長型基金」做長期策略投資（Growth-stage 取向）",
        lines: [
          "投資方：鴻棋國際投資；Oceanus Growth Fund（主題式成長型，聚焦 AI/生技/新興科技）",
          "投資邏輯：用基金做「長期策略配置」，把案源/配置交給專業團隊，同時保留合作選項。",
        ],
      },
      {
        title:
          "Example C｜緯創（3231，上市）— CVC + 當 LP（用基金網路擴大案源）",
        lines: [
          "作法：投資台灣新創、也出資多檔 VC 基金（LP 身分），用更廣網路找機會；並提到未來幾年投資規模規劃",
          "投資邏輯：先用 LP 建管道與學習曲線，再挑少數案做更深策略/財務下注。",
        ],
      },
    ],
    "section-7": {
      title: "窗口正在打開",
      quote: "「美國創新，台灣實現。一起，不只是投資未來—而是實現未來。」",
      body:
        "創投生態正在集中，資金稀缺；但能把矽谷創新與台灣製造與供應鏈連起來的人，機會反而更多。",
      paras: [
        "成為創投並不是本業，而是要以耐心培養長期策略、謙卑的學習認知、嚴謹自律的執行。",
        "從小開始，快速學習，建立關係，眼光放長。",
      ],
      contactSubject: "與我聯絡",
      ctaContact: "與我聯絡",
      ctaBack: "回到開頭",
      footer1: "The New Heights｜寫給台灣上市櫃企業決策者的策略備忘",
      footer2: "有想法或建議？歡迎寫信交流。",
    },
    "section-8": {
      title: "關於",
      lead: "關於作者，以及資料提供方如何協助資本市場決策",
      paragraphs: [
        "劉有智，美國華盛頓大學資管碩士;台灣大學資管學士。現任 PitchBook 資料平台資深經理。現居美國西雅圖。",
        "我帶領工程團隊做行銷與營運資料系統，把像 Marketo / Salesforce 這類工具的資料與流程串起來，讓線索與客戶資訊更準、更快流到正確的人和流程。",
        "我是軟體與資料工程背景的工程主管，長期做高流量產品與資料平台，包含大型即時資料處理系統；近年在電商/金融資料領域帶團隊，把產品、資料與商業流程做成可規模化的系統。",
        "我們的任務是提供投資人新創/私募公司的可靠資料，並把未上市公司的資料提供評比，讓投資決策更快也更可驗證。",
        "Morningstar（晨星）：提供投資研究、評等與市場資料，幫投資人做更好的資產配置與標的判讀。",
        "PitchBook：提供私募市場與新創公司的資料平台，追蹤公司、募資、估值與交易，用來做投資研究與比較基準（benchmark）。",
        "Morningstar 做公開市場與基金研究的資料與研究；PitchBook 把同一件事延伸到私募/新創世界。",
      ],
    },
  },
};
