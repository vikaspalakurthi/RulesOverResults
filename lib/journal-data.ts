export interface JournalEntry {
  id: number;
  slug: string;
  date: string;
  tradesSummary: string;
  keyLesson: string;
  result: "win" | "loss" | "neutral";
  fullContent: string;
  instruments: string[];
  setupsUsed: string[];
  externalLink?: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: 0,
    slug: "tradezella",
    date: "TradeZella Journal",
    tradesSummary: "Live external journal link to TradeZella with all your daily log entries.",
    keyLesson: "Open in a new tab to view the full TradeZella shared journal.",
    result: "neutral",
    fullContent: "This entry redirects to your shared TradeZella trade journal.",
    instruments: [],
    setupsUsed: [],
    externalLink: "https://app.tradezella.com/shared/c4089882/trade/a5106b5f",
  },
  {
    id: 1,
    slug: "2026-03-30",
    date: "March 30, 2026",
    tradesSummary: "AVGO Put - Trend continuation on pullback to 8 EMA. Hit Woodie pivot target. Net +150% ($393).",
    keyLesson: "Emotional discipline is the difference between good traders and great traders. Unrealized PnL is not real. Only PT or SL matters. Focus solely on setup execution, not outcomes.",
    result: "win",
    fullContent: `A challenging trade emotionally but exceptional from a process perspective. This is my first 150% win on a full position using systematic execution.

**Trade Setup:**
- Strategy: Trend Continuation
- Instrument: AVGO Put Options
- Setup: Pullback to 8 EMA (5-minute) at critical hourly resistance level with low volume pullback candle
- Confluence: Multiple timeframes aligned, clear structure

**Entry & Management:**
- Entered early before the official trigger to minimize stop loss based on confluence signals
- Target: 293.5 (Woodie pivot level)
- Exit: Pre-placed limit order at target, filled as market moved according to delta estimation
- Result: +150% ($393)

**What Went Right:**
1. Clean setup execution with perfect entry placement
2. Exited at predetermined target without extending or chasing further
3. Followed all entry and exit rules without deviation
4. Tight risk management enabled high reward-to-risk ratio

**The Real Challenge - Emotional Management:**
This trade exposed a critical weakness: emotional discipline while in position.

During the trade, unrealized PnL ranged from +120% down to +60% and back up. I found myself:
- Constantly monitoring profit/loss
- Fighting the urge to close early
- Wrestling with fear of giving back gains
- Struggling with thoughts of extending the target

**Key Realization:**
Unrealized PnL is not mine. It's noise. The only things I need to monitor are the price action targets (PT or SL). Watching the profit and loss creates emotional turbulence that clouds judgment.

**The Process Check (Most Important):**
✓ Did I follow my setup/strategy? YES
✓ Did I follow my entry rules? YES  
✓ Did I follow my exit rules? YES

Therefore: This was a good trade, regardless of the outcome.

What I must internalize: I should feel nothing about profits or losses. My only job is to execute the setup, follow the rules, and trust the system. The market rewards this process over time.

**What Could Improve:**
Next time, I will not stare at unrealized PnL. The trade will execute the same way, but my mental state will be clearer and I'll preserve energy for the next opportunity.`,
    instruments: ["AVGO"],
    setupsUsed: ["Trend Continuation", "Pullback"],
    externalLink: "https://app.tradezella.com/shared/c4089882/trade/6baf1d75",
  },
  {
    id: 2,
    slug: "2026-03-28",
    date: "March 28, 2026",
    tradesSummary: "2 trades on ES futures. 1 win on ORB setup, 1 scratch on failed continuation. Net +1.2R.",
    keyLesson: "Patience on the second entry would have avoided the scratch. Wait for confirmation candle to close before entering pullback trades.",
    result: "win",
    fullContent: `Today was a solid day overall. The morning started with a clear opening range on ES, and I waited patiently for the breakout as per Playbook A.

**Trade 1 - ORB Long**
- Entry: 5245.50 on confirmed break above opening range high
- Stop: 5241.00 (below range low)
- Target: 5254.00 (reached)
- Result: +1.9R

The entry was textbook. Volume confirmed the breakout, and price never looked back. I held through minor pullbacks because the structure remained intact.

**Trade 2 - Failed Continuation**
- Entry: 5256.25 on what I thought was a pullback setup
- Stop: 5253.50
- Exit: 5255.00 (scratched at breakeven)
- Result: -0.7R (slippage)

This is where I need to improve. I entered before the confirmation candle closed. The pullback turned into a deeper retracement, and I was forced to exit at breakeven. Had I waited 2 more minutes, I would have had a much better entry—or no entry at all if the setup invalidated.

**Key Takeaway:** The first trade shows what happens when I follow the process. The second trade shows the cost of impatience. Discipline is doing the same thing every time, especially when you feel like you might miss out.`,
    instruments: ["ES"],
    setupsUsed: ["Opening Range Breakout", "Trend Continuation"],
  },
  {
    id: 3,
    slug: "2026-03-27",
    date: "March 27, 2026",
    tradesSummary: "1 trade on NQ. Fade setup at resistance. Stopped out for -1R before market reversed in my direction.",
    keyLesson: "Stop placement was technically correct, but the wick stop-hunt is common at key levels. Consider using time-based stops or wider initial stops with smaller size.",
    result: "loss",
    fullContent: `Frustrating day, but an important learning experience. The analysis was correct. The execution was correct. The result was a loss. This is trading.

**Trade 1 - Overextension Fade**
- Entry: 18,425 short at resistance after rejection candle
- Stop: 18,445 (above the high)
- Target: 18,360
- Result: -1R (stopped out)

The setup was valid per Playbook B. Price had extended 2 ATR from VWAP, and we were at a key resistance level from the prior week. The rejection candle formed, and I entered on the close.

What happened next is a classic scenario: price wicked through my stop by 3 ticks, triggered my exit, then reversed aggressively in my intended direction. The market hit my original target 45 minutes later.

**Analysis:**
This wasn't a mistake in the traditional sense. My stop was placed according to the rules. But this experience highlights a nuance I need to incorporate: at major levels, stop hunts are common. Options:
1. Use a time-based stop instead of price-based
2. Use wider stops with reduced position size
3. Accept this as part of the game and maintain the current approach

**Key Takeaway:** Sometimes you do everything right and still lose. The question is whether to adapt the approach or accept the variance. I'll review the last 50 fade setups to see if stop placement adjustments would improve the overall expectancy.`,
    instruments: ["NQ"],
    setupsUsed: ["Overextension Fade"],
  },
  {
    id: 4,
    slug: "2026-03-26",
    date: "March 26, 2026",
    tradesSummary: "No trades taken. Pre-market showed choppy, range-bound conditions with no clear directional bias.",
    keyLesson: "Sitting out is a valid decision. Protecting capital on low-probability days compounds over time. Discipline is measured by what you do not do.",
    result: "neutral",
    fullContent: `No trades today. This is a win.

**Pre-Market Analysis:**
- Overnight range was extremely tight (15 points on ES)
- No clear levels being tested
- Economic calendar was light
- VIX was elevated but directionless
- Multiple timeframes showed conflicting signals

**Decision:**
The conditions didn't match any of my playbooks. There was no clear trend to join, no obvious overextension to fade, and the opening range setup requires a certain amount of volatility that wasn't present.

I watched the market for the first two hours. It chopped around in a 10-point range. Any trade I would have taken would have been a gamble, not a calculated risk.

**Reflection:**
It's easy to feel like sitting out is "missing opportunities." But the math is clear: trading low-probability setups erodes edge over time. Every dollar preserved is a dollar available for high-probability setups.

A trader I respect once said: "The best traders are the best waiters." Today, I waited.

**Key Takeaway:** Discipline isn't just about following rules when you trade. It's about not trading when the rules say don't. The account balance is the same as yesterday. That's a successful day.`,
    instruments: [],
    setupsUsed: [],
  },
];

export function getJournalEntryBySlug(slug: string): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug);
}
