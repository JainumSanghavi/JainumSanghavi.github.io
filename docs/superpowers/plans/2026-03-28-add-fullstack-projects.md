# Add Full-Stack Projects to Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the "Selected Work" section into "Machine Learning" and "Full Stack" subsections, adding Dividend and Recipe Recommender as two new equal-sized grid cards with custom animated SVGs.

**Architecture:** Single-file change to `index.html`. A typographic ML divider wraps the existing 4 projects; a new Full Stack divider is appended after them with a 2-column grid. Each new card gets a bespoke `<svg>` animation embedded inline, consistent with the existing SVG pattern.

**Tech Stack:** Vanilla HTML, inline SVG, CSS3 `@keyframes`, Tailwind CDN classes.

---

## Files

- **Modify:** `index.html`
  - ~line 218: subtitle text
  - ~line 221: insert ML divider
  - ~line 403: insert Full Stack divider + 2 project card shells
  - Inside `#svg-dividend`: Dividend SVG
  - Inside `#svg-recipe`: Recipe SVG

---

### Task 1: Update subtitle and insert Machine Learning divider

**Files:**
- Modify: `index.html` (~lines 218, 221)

- [ ] **Step 1: Update subtitle text**

Find and replace (exact match):

Old:
```html
          <p class="text-sm text-ink-400 dark:text-ink-500 mt-1">Research & engineering projects</p>
```

New:
```html
          <p class="text-sm text-ink-400 dark:text-ink-500 mt-1">Research & full-stack projects</p>
```

- [ ] **Step 2: Insert ML subsection divider after the section header closing `</div>`**

Find (the closing div of the section header block, just before the first `<!-- Project 1` comment):

```html
      </div>

      <!-- Project 1: Full width feature -->
```

Replace with:

```html
      </div>

      <!-- Machine Learning subsection -->
      <div class="flex items-center gap-4 mb-8">
        <span class="text-[10px] font-mono tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 whitespace-nowrap">Machine Learning</span>
        <hr class="editorial-hr flex-1 text-ink-300 dark:text-ink-700">
      </div>

      <!-- Project 1: Full width feature -->
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser. The "Selected Work" section should now show a faint "MACHINE LEARNING" label with a hairline rule above the first project card. Existing projects must be unchanged.

- [ ] **Step 4: Commit**

```bash
cd /Users/jainumsanghavi/Desktop/ProjectsWithClaude/portfolio
git add index.html
git commit -m "feat: add ML subsection label to Selected Work"
```

---

### Task 2: Insert Full Stack divider and project card shells

**Files:**
- Modify: `index.html` (~line 403)

- [ ] **Step 1: Find the insertion point**

Locate the line immediately after the closing `</div>` of the 3-column grid (after the Latent Compression card):

```html
      </div>
    </div>
  </section>


  <!-- ========== EXPERIENCE ========== -->
```

- [ ] **Step 2: Insert Full Stack block**

Replace that closing sequence with:

```html
      </div>

      <!-- Full Stack subsection -->
      <div class="flex items-center gap-4 mt-12 mb-8">
        <span class="text-[10px] font-mono tracking-[0.2em] uppercase text-ink-400 dark:text-ink-500 whitespace-nowrap">Full Stack</span>
        <hr class="editorial-hr flex-1 text-ink-300 dark:text-ink-700">
      </div>

      <!-- Full Stack Projects: 2-column grid -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Dividend -->
        <div class="project-card rounded-2xl overflow-hidden border border-ink-200/60 dark:border-ink-800/60 bg-white dark:bg-ink-900">
          <div id="svg-dividend" class="h-48 bg-ink-100/50 dark:bg-ink-800/50 flex items-center justify-center overflow-hidden">
            <!-- SVG inserted in Task 3 -->
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">React</span>
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">Node.js</span>
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">PostgreSQL</span>
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">TypeScript</span>
            </div>
            <h3 class="font-display text-xl font-semibold text-ink-900 dark:text-ink-100 mb-2">Dividend</h3>
            <p class="text-[13px] text-ink-500 dark:text-ink-400 leading-relaxed mb-4">Full-stack investment dashboard for managing stock watchlists with <strong class="text-ink-700 dark:text-ink-300">interactive price charts</strong>, document aggregation from SEC EDGAR and Polygon.io, and Google OAuth. Multi-layer caching with React Query.</p>
            <div class="flex gap-4">
              <a href="https://github.com/JainumSanghavi/dividend" target="_blank" rel="noopener noreferrer" class="editorial-link text-[13px] font-medium text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100">Code ↗</a>
            </div>
          </div>
        </div>

        <!-- Recipe Recommender -->
        <div class="project-card rounded-2xl overflow-hidden border border-ink-200/60 dark:border-ink-800/60 bg-white dark:bg-ink-900">
          <div id="svg-recipe" class="h-48 bg-ink-100/50 dark:bg-ink-800/50 flex items-center justify-center overflow-hidden">
            <!-- SVG inserted in Task 4 -->
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">Next.js</span>
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">TypeScript</span>
              <span class="px-2 py-0.5 text-[11px] font-mono tracking-wider uppercase text-accent-light dark:text-accent-dark border border-accent-light/30 dark:border-accent-dark/30 rounded">PostgreSQL</span>
            </div>
            <h3 class="font-display text-xl font-semibold text-ink-900 dark:text-ink-100 mb-2">Recipe Recommender</h3>
            <p class="text-[13px] text-ink-500 dark:text-ink-400 leading-relaxed mb-4">Pantry-aware recipe engine scoring dishes by <strong class="text-ink-700 dark:text-ink-300">ingredient overlap</strong> and dietary filters, with live grocery pricing via Kroger API. Dual-source search with Spoonacular and MealDB.</p>
            <div class="flex gap-4">
              <a href="https://github.com/NeuralInquiries/recipe-recommender" target="_blank" rel="noopener noreferrer" class="editorial-link text-[13px] font-medium text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100">Code ↗</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ========== EXPERIENCE ========== -->
```

- [ ] **Step 3: Verify in browser**

Open `index.html`. The work section should now show:
- "MACHINE LEARNING" label → feature card + 3-col grid (existing)
- "FULL STACK" label → 2-col grid with two placeholder-filled cards (grey SVG area)
- Cards should have correct tags, titles, descriptions, and GitHub links
- Hover lift animation should work on both new cards

- [ ] **Step 4: Commit**

```bash
cd /Users/jainumsanghavi/Desktop/ProjectsWithClaude/portfolio
git add index.html
git commit -m "feat: add Full Stack subsection with Dividend and Recipe Recommender card shells"
```

---

### Task 3: Write Dividend SVG — animated stock chart

**Files:**
- Modify: `index.html` (inside `#svg-dividend`)

**Design:** Minimal stock price chart. Horizontal grid lines + faint price labels. A jagged upward-trending polyline draws itself using `stroke-dasharray`/`stroke-dashoffset` animation (draws forward, holds, redraws). Four candlestick bars appear sequentially as the line progresses. A pulsing ping circle marks the current-price endpoint.

Path length estimation: `M 55,185 L 95,172 L 135,175 L 175,158 L 215,163 L 255,143 L 295,132 L 335,118 L 360,105` ≈ 321px → use `stroke-dasharray: 325`.

Ping uses `transform: scale()` with `transform-origin` at the dot center for cross-browser compatibility.

- [ ] **Step 1: Replace the `<!-- SVG inserted in Task 3 -->` comment**

Find:
```html
            <!-- SVG inserted in Task 3 -->
```

Replace with the full SVG:

```html
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated stock price chart for Dividend app" class="w-full h-full">
  <style>
    .div-grid { stroke: currentColor; stroke-width: 1; opacity: 0.07; }
    .div-lbl { fill: currentColor; opacity: 0.2; font-size: 8px; font-family: 'JetBrains Mono', monospace; text-anchor: start; }
    .div-area { fill: currentColor; opacity: 0.05; }
    .div-line { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; opacity: 0.7; stroke-dasharray: 325; animation: div-draw 5s cubic-bezier(0.16,1,0.3,1) infinite alternate; }
    .div-bar { opacity: 0; animation: div-appear 5s ease-in-out infinite alternate; }
    .div-bar-2 { animation-delay: 0.4s; }
    .div-bar-3 { animation-delay: 0.8s; }
    .div-bar-4 { animation-delay: 1.2s; }
    .div-dot { fill: currentColor; opacity: 0.85; }
    .div-ping { fill: none; stroke: currentColor; stroke-width: 1.2; transform-origin: 360px 105px; animation: div-ping 1.8s ease-out infinite; }
    @keyframes div-draw {
      from { stroke-dashoffset: 325; opacity: 0.12; }
      to   { stroke-dashoffset: 0;   opacity: 0.7; }
    }
    @keyframes div-appear {
      0%,  15% { opacity: 0; }
      35%, 100% { opacity: 0.55; }
    }
    @keyframes div-ping {
      0%   { transform: scale(1);   opacity: 0.65; }
      100% { transform: scale(4.2); opacity: 0; }
    }
  </style>

  <!-- Horizontal grid lines -->
  <line class="div-grid" x1="40" y1="65"  x2="375" y2="65"/>
  <line class="div-grid" x1="40" y1="105" x2="375" y2="105"/>
  <line class="div-grid" x1="40" y1="145" x2="375" y2="145"/>
  <line class="div-grid" x1="40" y1="185" x2="375" y2="185"/>

  <!-- Price labels -->
  <text class="div-lbl" x="6" y="68">$420</text>
  <text class="div-lbl" x="6" y="108">$370</text>
  <text class="div-lbl" x="6" y="148">$320</text>
  <text class="div-lbl" x="6" y="188">$270</text>

  <!-- Area fill under price line -->
  <path class="div-area" d="M 55,185 L 95,172 L 135,175 L 175,158 L 215,163 L 255,143 L 295,132 L 335,118 L 360,105 L 360,215 L 55,215 Z"/>

  <!-- Animated price line -->
  <path class="div-line" d="M 55,185 L 95,172 L 135,175 L 175,158 L 215,163 L 255,143 L 295,132 L 335,118 L 360,105"/>

  <!-- Candlestick bar 1 -->
  <g class="div-bar">
    <line stroke="currentColor" stroke-width="1" x1="85" y1="164" x2="85" y2="180"/>
    <rect fill="currentColor" x="82" y="167" width="6" height="8" rx="0.5"/>
  </g>
  <!-- Candlestick bar 2 -->
  <g class="div-bar div-bar-2">
    <line stroke="currentColor" stroke-width="1" x1="165" y1="150" x2="165" y2="166"/>
    <rect fill="currentColor" x="162" y="153" width="6" height="8" rx="0.5"/>
  </g>
  <!-- Candlestick bar 3 -->
  <g class="div-bar div-bar-3">
    <line stroke="currentColor" stroke-width="1" x1="245" y1="135" x2="245" y2="150"/>
    <rect fill="currentColor" x="242" y="138" width="6" height="8" rx="0.5"/>
  </g>
  <!-- Candlestick bar 4 -->
  <g class="div-bar div-bar-4">
    <line stroke="currentColor" stroke-width="1" x1="325" y1="110" x2="325" y2="125"/>
    <rect fill="currentColor" x="322" y="113" width="6" height="8" rx="0.5"/>
  </g>

  <!-- Pulsing endpoint dot -->
  <circle class="div-ping" cx="360" cy="105" r="3"/>
  <circle class="div-dot"  cx="360" cy="105" r="3"/>
</svg>
```

- [ ] **Step 2: Verify in browser**

The Dividend card's grey area should now show:
- Four faint horizontal grid lines with price labels ($420–$270) on the left
- A price line that draws from bottom-left to upper-right and then retraces
- Candlestick bars appearing sequentially as the line progresses
- A small pulsing ring at the rightmost endpoint
- All elements inherit `currentColor` — check both light and dark modes

- [ ] **Step 3: Commit**

```bash
cd /Users/jainumsanghavi/Desktop/ProjectsWithClaude/portfolio
git add index.html
git commit -m "feat: add animated stock chart SVG to Dividend card"
```

---

### Task 4: Write Recipe Recommender SVG — ingredient matching visualization

**Files:**
- Modify: `index.html` (inside `#svg-recipe`)

**Design:** Eight pantry items arranged in a 2×4 grid on the left. Four items activate in sequence (opacity pulse), each connected by a hairline to a central recipe node on the right. When each item activates, a dot travels along its line to the node; the node emits a brief expanding ring on each arrival. All at low opacity in the existing editorial style.

Item centers: col1 x=66, col2 x=108; rows y=50, 95, 145, 195.
Activating items (alternating columns): (66,50), (108,95), (66,145), (108,195).
Recipe node: cx=295, cy=120.

Dot travel uses `cx`/`cy` CSS animation (SVG 2 presentation properties, supported in all modern browsers).
Timing: 6s cycle, staggered by 1.5s per item. Each dot travels for 25% of the cycle (1.5s).

Translations for each dot (from item center to node center):
- Dot A (66,50)   → (295,120): Δcx=+229, Δcy=+70
- Dot B (108,95)  → (295,120): Δcx=+187, Δcy=+25
- Dot C (66,145)  → (295,120): Δcx=+229, Δcy=−25
- Dot D (108,195) → (295,120): Δcx=+187, Δcy=−75

Node ping: `r` animates 22→38, using CSS `r` property (SVG 2, modern browsers; same pattern as existing SVG pulsing animations).

- [ ] **Step 1: Replace the `<!-- SVG inserted in Task 4 -->` comment**

Find:
```html
            <!-- SVG inserted in Task 4 -->
```

Replace with:

```html
<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ingredient-to-recipe matching visualization" class="w-full h-full">
  <style>
    /* Pantry items */
    .rc-item  { fill: none; stroke: currentColor; stroke-width: 1; opacity: 0.12; }
    .rc-act-a { animation: rc-glow 6s 0.0s ease-in-out infinite; }
    .rc-act-b { animation: rc-glow 6s 1.5s ease-in-out infinite; }
    .rc-act-c { animation: rc-glow 6s 3.0s ease-in-out infinite; }
    .rc-act-d { animation: rc-glow 6s 4.5s ease-in-out infinite; }
    /* Connecting lines */
    .rc-line  { stroke: currentColor; stroke-width: 1; opacity: 0.08; fill: none; }
    .rc-ln-a  { animation: rc-lp 6s 0.0s ease-in-out infinite; }
    .rc-ln-b  { animation: rc-lp 6s 1.5s ease-in-out infinite; }
    .rc-ln-c  { animation: rc-lp 6s 3.0s ease-in-out infinite; }
    .rc-ln-d  { animation: rc-lp 6s 4.5s ease-in-out infinite; }
    /* Traveling dots */
    .rc-dot   { fill: currentColor; opacity: 0; }
    .rc-dot-a { animation: rc-trav-a 6s 0.0s linear infinite; }
    .rc-dot-b { animation: rc-trav-b 6s 1.5s linear infinite; }
    .rc-dot-c { animation: rc-trav-c 6s 3.0s linear infinite; }
    .rc-dot-d { animation: rc-trav-d 6s 4.5s linear infinite; }
    /* Recipe node */
    .rc-node  { fill: none; stroke: currentColor; stroke-width: 1; opacity: 0.18; }
    .rc-ping  { fill: none; stroke: currentColor; stroke-width: 1; opacity: 0; }
    .rc-png-a { animation: rc-ring 6s 1.3s ease-out infinite; }
    .rc-png-b { animation: rc-ring 6s 2.8s ease-out infinite; }
    .rc-png-c { animation: rc-ring 6s 4.3s ease-out infinite; }
    .rc-png-d { animation: rc-ring 6s 5.8s ease-out infinite; }
    .rc-lbl   { fill: currentColor; opacity: 0.2; font-size: 8px; font-family: 'JetBrains Mono', monospace; text-anchor: middle; }

    @keyframes rc-glow {
      0%,  8%  { opacity: 0.12; }
      18%, 30% { opacity: 0.70; }
      42%, 100%{ opacity: 0.12; }
    }
    @keyframes rc-lp {
      0%,  8%  { opacity: 0.08; }
      18%, 30% { opacity: 0.40; }
      42%, 100%{ opacity: 0.08; }
    }
    @keyframes rc-trav-a {
      0%        { cx: 66;  cy: 50;  opacity: 0; }
      8%        { cx: 66;  cy: 50;  opacity: 0.80; }
      23%       { cx: 295; cy: 120; opacity: 0.80; }
      28%       { cx: 295; cy: 120; opacity: 0; }
      28%, 100% { cx: 66;  cy: 50;  opacity: 0; }
    }
    @keyframes rc-trav-b {
      0%        { cx: 108; cy: 95;  opacity: 0; }
      8%        { cx: 108; cy: 95;  opacity: 0.80; }
      23%       { cx: 295; cy: 120; opacity: 0.80; }
      28%       { cx: 295; cy: 120; opacity: 0; }
      28%, 100% { cx: 108; cy: 95;  opacity: 0; }
    }
    @keyframes rc-trav-c {
      0%        { cx: 66;  cy: 145; opacity: 0; }
      8%        { cx: 66;  cy: 145; opacity: 0.80; }
      23%       { cx: 295; cy: 120; opacity: 0.80; }
      28%       { cx: 295; cy: 120; opacity: 0; }
      28%, 100% { cx: 66;  cy: 145; opacity: 0; }
    }
    @keyframes rc-trav-d {
      0%        { cx: 108; cy: 195; opacity: 0; }
      8%        { cx: 108; cy: 195; opacity: 0.80; }
      23%       { cx: 295; cy: 120; opacity: 0.80; }
      28%       { cx: 295; cy: 120; opacity: 0; }
      28%, 100% { cx: 108; cy: 195; opacity: 0; }
    }
    @keyframes rc-ring {
      0%   { r: 22; opacity: 0.45; }
      40%  { r: 38; opacity: 0; }
      100% { r: 22; opacity: 0; }
    }
  </style>

  <!-- Static pantry items (background, low opacity) -->
  <rect class="rc-item" x="52" y="41" width="28" height="18" rx="3"/><!-- A1 static -->
  <rect class="rc-item" x="94" y="41" width="28" height="18" rx="3"/><!-- B1 static -->
  <rect class="rc-item" x="52" y="86" width="28" height="18" rx="3"/><!-- A2 static -->
  <rect class="rc-item" x="94" y="86" width="28" height="18" rx="3"/><!-- B2 static -->
  <rect class="rc-item" x="52" y="136" width="28" height="18" rx="3"/><!-- A3 static -->
  <rect class="rc-item" x="94" y="136" width="28" height="18" rx="3"/><!-- B3 static -->
  <rect class="rc-item" x="52" y="186" width="28" height="18" rx="3"/><!-- A4 static -->
  <rect class="rc-item" x="94" y="186" width="28" height="18" rx="3"/><!-- B4 static -->

  <!-- Activating items (overlay on top, animated) -->
  <rect class="rc-item rc-act-a" x="52"  y="41"  width="28" height="18" rx="3"/>
  <rect class="rc-item rc-act-b" x="94"  y="86"  width="28" height="18" rx="3"/>
  <rect class="rc-item rc-act-c" x="52"  y="136" width="28" height="18" rx="3"/>
  <rect class="rc-item rc-act-d" x="94"  y="186" width="28" height="18" rx="3"/>

  <!-- Connecting lines from activating items to recipe node -->
  <line class="rc-line rc-ln-a" x1="66"  y1="50"  x2="295" y2="120"/>
  <line class="rc-line rc-ln-b" x1="108" y1="95"  x2="295" y2="120"/>
  <line class="rc-line rc-ln-c" x1="66"  y1="145" x2="295" y2="120"/>
  <line class="rc-line rc-ln-d" x1="108" y1="195" x2="295" y2="120"/>

  <!-- Recipe node -->
  <circle class="rc-node" cx="295" cy="120" r="22"/>
  <text class="rc-lbl" x="295" y="124">recipe</text>

  <!-- Expanding ping rings on node arrival -->
  <circle class="rc-ping rc-png-a" cx="295" cy="120" r="22"/>
  <circle class="rc-ping rc-png-b" cx="295" cy="120" r="22"/>
  <circle class="rc-ping rc-png-c" cx="295" cy="120" r="22"/>
  <circle class="rc-ping rc-png-d" cx="295" cy="120" r="22"/>

  <!-- Traveling dots (one per activating item) -->
  <circle class="rc-dot rc-dot-a" cx="66"  cy="50"  r="2.5"/>
  <circle class="rc-dot rc-dot-b" cx="108" cy="95"  r="2.5"/>
  <circle class="rc-dot rc-dot-c" cx="66"  cy="145" r="2.5"/>
  <circle class="rc-dot rc-dot-d" cx="108" cy="195" r="2.5"/>
</svg>
```

- [ ] **Step 2: Verify in browser**

The Recipe Recommender card's grey area should show:
- 8 faint rectangular pantry items in a 2×4 grid on the left
- 4 items light up in sequence (staggered)
- Hairlines connect each activated item to the recipe circle on the right
- A tiny dot travels along each hairline when its item activates
- The recipe circle emits a brief expanding ring on each dot arrival
- "recipe" label inside the node
- Works in both light and dark modes

- [ ] **Step 3: Commit**

```bash
cd /Users/jainumsanghavi/Desktop/ProjectsWithClaude/portfolio
git add index.html
git commit -m "feat: add ingredient-matching SVG animation to Recipe Recommender card"
```

---

### Task 5: Final verification

- [ ] **Step 1: Full visual check in browser**

Open `index.html`. Scroll to "Selected Work" and confirm:
1. Section subtitle reads "Research & full-stack projects"
2. "MACHINE LEARNING" label with hairline rule appears above the feature card
3. Existing 4 ML projects are pixel-identical to before
4. "FULL STACK" label with hairline rule appears below the 3-col grid
5. Two new cards appear in a 2-column grid (collapses to 1-col on mobile)
6. Both SVG animations play correctly
7. Hover lift (`translateY(-6px)`) works on all 6 project cards
8. Editorial link underlines animate on hover

- [ ] **Step 2: Dark mode check**

Toggle dark mode. Verify:
- Subsection labels remain readable (text-ink-400 / text-ink-500)
- Both new SVGs use `currentColor` and render correctly in dark theme
- Card backgrounds, borders, and text all follow the dark palette

- [ ] **Step 3: Mobile responsiveness**

Resize browser to below 768px:
- 2-col Full Stack grid collapses to 1-col stacked
- ML feature card collapses to single-column layout

- [ ] **Step 4: Link verification**

Click "Code ↗" on Dividend → opens `https://github.com/JainumSanghavi/dividend` in new tab.
Click "Code ↗" on Recipe Recommender → opens `https://github.com/NeuralInquiries/recipe-recommender` in new tab.

- [ ] **Step 5: Final commit**

```bash
cd /Users/jainumsanghavi/Desktop/ProjectsWithClaude/portfolio
git add index.html
git commit -m "feat: split Selected Work into ML/Full Stack subsections with Dividend and Recipe Recommender"
```
