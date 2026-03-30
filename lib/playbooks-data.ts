export interface PlaybookSection {
  title: string;
  items: string[];
}

export interface Playbook {
  id: string;
  slug: string;
  name: string;
  objective: string;
  sections: PlaybookSection[];
  myRule: string;
}

export const playbooks: Playbook[] = [
  {
    id: "A",
    slug: "opening-range-breakout",
    name: "Opening Range Breakout",
    objective: "Trade the initial breakout of the opening range after the first 15-30 minutes of price discovery.",
    sections: [
      {
        title: "Market Conditions",
        items: [
          "High volume expected (earnings, news catalyst, gap)",
          "Clear directional bias from premarket",
          "Market (SPY/QQQ) showing supportive trend",
        ],
      },
      {
        title: "Setup Criteria",
        items: [
          "Wait for opening range to establish (15-30 min)",
          "Range should be defined with clear high and low",
          "Volume building near range boundary",
          "Price consolidating before breakout attempt",
        ],
      },
      {
        title: "Entry Rules",
        items: [
          "Entry on confirmed break with volume surge",
          "Wait for candle close above/below range",
          "Avoid fakeouts by requiring volume confirmation",
          "No entry if range is too wide (defines risk)",
        ],
      },
      {
        title: "Stop Loss",
        items: [
          "Below range low (for long)",
          "Above range high (for short)",
          "Consider midpoint of range for tighter stop",
        ],
      },
      {
        title: "Take Profit",
        items: [
          "Target 1:2 risk-reward minimum",
          "Scale out at 1R, let runner go to 2R+",
          "Use prior day levels as targets",
        ],
      },
      {
        title: "Invalidation",
        items: [
          "Failed breakout with immediate reversal",
          "Volume dies after breakout",
          "Market reverses against trade direction",
        ],
      },
      {
        title: "Mistakes to Avoid",
        items: [
          "Entering before range is established",
          "Chasing after extended move from range",
          "Ignoring overall market direction",
          "Trading during low volume periods",
        ],
      },
    ],
    myRule: "Only trade ORB when the setup is clean and volume confirms. No forcing trades on weak breakouts.",
  },
  {
    id: "C",
    slug: "trend-continuation",
    name: "Trend Continuation",
    objective: "Trade with the trend after a controlled pullback, entering only when momentum resumes.",
    sections: [
      {
        title: "Market Conditions",
        items: [
          "Stock is clearly trending (higher highs / higher lows or lower highs / lower lows)",
          "Market (SPY / QQQ) is aligned with direction",
          "No major news risk",
        ],
      },
      {
        title: "Setup Criteria",
        items: [
          "Strong move in one direction",
          "Pullback to key moving average (9 EMA / 20 EMA)",
          "Pullback to support / resistance zone",
          "Volume dries up on pullback",
          "Buyers/sellers step back in at level",
        ],
      },
      {
        title: "Entry Rules",
        items: [
          "Enter only when momentum resumes (confirmation candle)",
          "Avoid chasing extended moves",
          "No entry if structure is unclear",
        ],
      },
      {
        title: "Stop Loss",
        items: [
          "Below pullback low (for long)",
          "Above pullback high (for short)",
        ],
      },
      {
        title: "Take Profit",
        items: [
          "Previous high/low",
          "OR fixed R:R (1.5R – 2R)",
        ],
      },
      {
        title: "Invalidation",
        items: [
          "Break of structure",
          "Weak continuation (low momentum)",
        ],
      },
      {
        title: "Mistakes to Avoid",
        items: [
          "Entering during pullback (too early)",
          "Overtrading choppy conditions",
          "Ignoring overall market direction",
        ],
      },
    ],
    myRule: "Only take this setup when it is clean, obvious, and aligned with trend. No forcing trades.",
  },
];

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return playbooks.find((p) => p.slug === slug);
}

export function getAllPlaybookSlugs(): string[] {
  return playbooks.map((p) => p.slug);
}
