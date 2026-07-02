# MacroMeals – Design Brainstorm

## Three Stylistic Approaches

### Approach A: "Iron Kitchen"
Bold industrial aesthetic — raw concrete textures, heavy black type, electric yellow accents. Feels like a premium gym locker room meets a Michelin-star prep kitchen. Probability: **0.07**

### Approach B: "Performance Lab"
Clean, data-driven UI inspired by sports analytics dashboards. White space, sharp grids, macro bars, monospace numbers. Feels clinical and trustworthy. Probability: **0.04**

### Approach C: "Beast Mode Diner"
High-energy streetwear-meets-food brand. Oversized typography, diagonal cuts, bold black/yellow contrast, grunge textures. Feels like a Nike drop crossed with a premium meal kit. Probability: **0.09**

---

## Chosen Approach: **C — "Beast Mode Diner"**

### Design Movement
Neo-brutalist streetwear branding — raw energy, unapologetic contrast, editorial boldness.

### Core Principles
1. **Maximum contrast** — pure black (#0A0A0A) against electric yellow (#FFD600) and white. No grey zones.
2. **Oversized, kinetic typography** — headlines feel like they're about to burst off the screen.
3. **Diagonal energy** — sections use angled clip-paths to create forward momentum.
4. **Data as design** — macro numbers (protein/carbs/fat) are displayed as bold visual elements, not footnotes.

### Color Philosophy
- **Black (#0A0A0A)**: Power, premium, discipline — the gym floor at 5am.
- **Electric Yellow (#FFD600)**: Energy, optimism, speed — the PR you just hit.
- **White (#FFFFFF)**: Clean fuel, purity of ingredients, breathing room.
- Accent use: Yellow is reserved for CTAs, highlights, and key numbers — never overused.

### Layout Paradigm
Asymmetric, full-bleed sections with diagonal clip-path transitions. Hero uses a split layout (text left, image right). Cards break the grid with slight rotations and offset shadows. Navigation is sticky with a yellow underline indicator.

### Signature Elements
1. **Yellow slash dividers** — angled yellow bars separate sections, creating visual momentum.
2. **Macro badges** — pill-shaped P/C/F breakdowns in bold monospace on every meal card.
3. **Bold number callouts** — large typographic numbers (e.g., "42g", "580 kcal") used as decorative anchors.

### Interaction Philosophy
Every hover reveals energy: cards lift with a sharp shadow, CTAs pulse with a yellow glow, nav items slide-underline. The site should feel like it's training you.

### Animation
- Entrance: Elements slide in from bottom with `translateY(30px) → 0` over 400ms ease-out.
- Stagger: 60ms between list items.
- Hover: Cards scale to 1.03 with `box-shadow` expansion in 160ms.
- CTA buttons: Scale to 0.97 on `:active`, yellow glow pulse on focus.
- Scroll-triggered reveals using Intersection Observer.

### Typography System
- **Display/Headlines**: "Barlow Condensed" ExtraBold 900 — tall, compressed, aggressive.
- **Body/UI**: "DM Sans" Regular/Medium — clean, modern, readable.
- **Numbers/Macros**: "DM Mono" — technical precision for macro data.
- Hierarchy: H1 = 80–120px, H2 = 48–64px, H3 = 28–36px, Body = 16–18px.

### Brand Essence
MacroMeals: precision fuel for athletes who refuse to compromise — for the 5am crowd who tracks every gram.
Personality: **Disciplined. Energetic. Uncompromising.**

### Brand Voice
Headlines sound like a coach's pre-game speech. CTAs are direct commands, not invitations.
- Example headline: *"Stop Guessing. Start Fuelling."*
- Example CTA: *"Lock In Your Meals"*
- Banned: "Welcome to our website", "Get started today", "Learn more"

### Wordmark & Logo
A bold "M" letterform with a lightning bolt integrated — representing both Macro and momentum. Rendered in yellow on black, or black on yellow.

### Signature Brand Color
**Electric Yellow #FFD600** — unmistakably MacroMeals.
