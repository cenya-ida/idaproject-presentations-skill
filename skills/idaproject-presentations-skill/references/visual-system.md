# Visual system

All values are for a 1920×1080 frame. Coordinates inside `Content` are relative to that frame.

Contents: [Frame skeleton](#frame-skeleton) · [The 4-point rule](#the-4-point-rule) · [Colour styles](#colour-styles) · [Typography styles](#typography-styles) · [Title schemes](#title-schemes) · [Components](#components) · [Backgrounds](#backgrounds)

## Frame skeleton

| Zone | Spec |
|---|---|
| `header` | y0, h90, padding 20. Logo «ида / проджект» (two-steps instance, 157×40) on the left, partner logo on the right if any. 1px line along the bottom edge |
| `Content` | x0 y130, 1920×820. Working width x20…1900 (1880) |
| `Footer` | y990, h90. Left: 2–3 outlined pill tags with company facts. Right: «©2014–<year>» in `Mono/S` |

- Header and footer come from the template components. Keep them as they are, on every slide and dividers included, identical across the deck. Slides carry no page numbers.
- Stack the deck in one column: x0, y = (n−1)×1120. Name the frames `1…N` in order.

## The 4-point rule

Every typographic value is a multiple of 4: font size, line height (in px) and the vertical distance between text blocks. Spacing and sizes of elements you add follow the same grid: gaps, paddings, card sizes and offsets.

The reason is that a shared module makes slides built by different people, or on different days, line up and feel like one system. Baselines fall into rhythm, and nobody has to argue whether 26 or 27 looks better. When you clone an older slide whose sizes are off the grid (22, 26, 30, 38, 110), snap them to the nearest style below. The template's header and footer are the only exception, because they are shared components.

## Colour styles

Use the colour variables from the template collection «ИдаПроджект · Шаблоны» when the file has them, and bind fills to variables rather than typing hex. A bound fill keeps the deck consistent if the palette is ever tuned, and makes off-palette colours easy to spot.

| Style | Hex | Role |
|---|---|---|
| `Monochrome/[500] DUSK` | `#1A1B1D` | slide background; text on neon |
| `Monochrome/[450]` | `#292A2C` | cards, table rows, chips: flat, no radius, shadow or outline |
| `Monochrome/[0] SPACE` | `#FFFFFF` | primary text: titles, theses, values |
| card body | `#BBBBC0` | body text inside cards (used in recent decks; bind to the nearest variable if the file defines one) |
| `Monochrome/[300] STONE` | `#929298` | secondary text on the background: leads, conclusions, labels |
| `Monochrome/[400] CONCRETE` | `#6D6D75` | lines, dashed fields, tag outlines. Never text |
| `Color/[PUBLIC] NEON` | `#D5FF0C` | the single brand accent |
| `Color/[INHOUSE] FOX` | `#FF3C28` | semantic: current state, risk, error |
| `LITE` / `CHAT` | `#2A5EED` / `#1E44FF` | product decks only |
| white 40 / 20, black 40 / 20 | — | header line, glass tiles, overlays |

### Pairings and contrast

| Text | On `#1A1B1D` | On `#292A2C` | Rule |
|---|---|---|---|
| `#FFFFFF` | 17.2:1 | 14.4:1 | any size |
| `#BBBBC0` | 9.0:1 | 7.5:1 | card body |
| `#929298` | 5.6:1 | 4.6:1 | secondary text, 20px and up |
| `#D5FF0C` | 14.9:1 | 12.4:1 | accent text: kicker, key words, links between slides |
| `#FF3C28` | 4.9:1 | 4.1:1 | 24px and up, always with a word or icon beside it |
| `#6D6D75` | 3.4:1 | 2.8:1 | not for text |
| `#1A1B1D` on `#D5FF0C` | 14.9:1 | — | text on a neon marker, badge or neon background |

### How to spend colour

- **Neon budget: at most 3 places per slide.** Typical spends are the kicker, one key word or number, and one highlighted card or row. Neon is the brand signature. Spread across every header and border, it stops signalling anything and the slide looks noisy.
- **Hierarchy goes white → `#BBBBC0` → grey.** The more important the text, the lighter it is. Don't use bold for emphasis: the system has one weight on purpose.
- **Red has one meaning.** Use it for the current problem state, a risk or an error, and pair it with a label or icon, so the meaning survives a washed-out projector and colour-blind viewers. Red on a non-negative element misleads.
- **Neon backgrounds** are reserved for dividers, theses and manifesto slides. On them, all text and the header and footer turn `#1A1B1D`.
- **Product and partner colours** appear only on that product's or partner's title slides.

## Typography styles

There are two families and one weight. **Aeonik Pro Medium** sets everything. **JetBrains Mono Medium** is the technical voice for kickers, column labels, numbering and tabular figures. Set uppercase with the text-case property, not by retyping the copy.

If the file defines text styles, apply them instead of loose values. Otherwise use exactly these sizes and line heights; they are the project's scale, all on the 4-point grid.

| Style | Size / line height | Tracking | Case | Use |
|---|---|---|---|---|
| `Display/XL` | 120 / 132 | −4% | upper | divider text |
| `Display/L` | 100 / 112 | −2% | upper | cover title, CTA headline |
| `Display/M` | 80 / 88 | −4% | upper | manifesto lines |
| `Number/XL` | 160 / 160 | −2% | — | a single hero figure |
| `Number/L` | 96 / 96 | −2% | — | figures in big-number cards |
| `Heading/H1` | 68 / 76 | −1% | upper | trust headline, headlines with a neon marker |
| `Heading/H2` | 56 / 64 | −1% | upper | slide title |
| `Heading/H3` | 44 / 48 | −1% | upper | large card heading, error-row label, struck-through myths |
| `Heading/H4` | 36 / 40 | −1% | upper | card heading, figures in tables and metrics |
| `Heading/H5` | 28 / 32 | −1% | upper | card heading in a row of 5, list-row label |
| `Body/L` | 32 / 40 | −1% | lower | lead, conclusion, roadmap card text |
| `Body/M` | 28 / 36 | −1% | lower | card body, first table column, formula rows |
| `Body/S` | 24 / 32 | −1% | lower | table cells, dense card body; the floor for body text |
| `Mono/L` | 24 / 32 | −1% | upper | big step labels («НЕДЕЛИ 1–2»), tabular prices |
| `Mono/M` | 20 / 28 | 0 | upper | series kicker, column labels, chips |
| `Mono/S` | 16 / 24 | 0 | upper | small labels, badges, footer; the floor for any text |

How to use the scale:
- **Contrast between neighbours.** Adjacent levels should differ by at least one step, for example a 56 title over a 32 lead. Two sizes that are almost the same look like a mistake.
- **No more than four text styles per content slide.** A typical set is `Mono/M` kicker, `Heading/H2` title, one heading style and one body style.
- **Case carries meaning.** Titles, headings and labels are uppercase; explanations are lowercase. A lowercase sentence reads as something to read; an uppercase word reads as something to scan.
- **Copy conventions:**
  - Use the em dash «—», the en dash in ranges («4–8 ч») and «ёлочки».
  - Use the decimal comma and «₽».
  - Put non-breaking spaces inside numbers («300 000») and after short prepositions.
  - Avoid widows and mid-word breaks.

## Title schemes

1. **Overview slide** (a chapter-level idea, no series): `Heading/H2` centred at y0, `Body/L` grey lead centred at y96, content composed around the centre axis.
2. **Series slide**: `Mono/M` neon kicker at x20 y0, `Heading/H2` left-aligned at y36, conclusion or cross-link in `Body/L` top-right at y0, right-aligned to x1900. The conclusion is neon when it links to another slide and grey when it explains. With this scheme the takeaway is the first thing the eye meets after the title.

## Components

- **Card row.**
  - Cards are `#292A2C`, gap 20, 3–5 cards of equal width per row.
  - Anchor the row to the bottom of `Content` so it ends at y820, at 440–520 high. The air between the title and the cards separates the question from the answer.
  - Inside the card, padding is 28 or 32. The icon (48 or 56) or a neon `Mono/M` number «01» sits at top-left, then the heading. The body is pinned to the bottom of the card.
- **Highlighted card.** A normal card with a 2px neon outline. Use one per slide.
- **Table row.** A full-width `#292A2C` band, 12–20 between rows, no vertical rules. `Mono/M` column labels sit above the table. Merge cells whose values repeat. A highlighted row gets a 2px neon outline and a label right next to it.
- **Chip.** h56, `#292A2C`, `Mono/M` text. Active chips have a 1.5px neon outline and neon text; inactive ones are grey. A badge pill has radius 40, neon fill and `Mono/S` dark text («БЕСПЛАТНО»).
- **Arrow and plus.** A neon `→` at 40 between columns or process cards. A neon `+` joins the terms of a formula.
- **Group bracket.** A 2px neon line with 24px legs and a chip at its centre, placed over a group of cards.
- **Timeline.** A 4px `#6D6D75` line with 16px neon dots. Icons (56) sit above the dots; each step below has a `Heading/H5` heading and a `Body/S` explanation.
- **Input field.** Dashed `#6D6D75` outline, dark fill, an edit icon on the right and a grey dash placeholder.
- **Icons.** Material Symbols Outlined only, as vectors named `ms/<name>`, in neon or white, at 32, 40, 48 or 56.
- **Struck-through quote.** `Heading/H3`, grey, in «ёлочки». Used for misconceptions.
- **Big-number card.** Padding 80, `Number/L` figure in white, «= meaning» in `Body/L` below it and a grey `Body/S` explanation.
- **Neon marker.** A neon rectangle behind one key word or number in a headline, with the text `#1A1B1D` («С НАМИ [64%] …»).

## Backgrounds

Covers, dividers and manifesto slides sit on raster 3D neon artwork: vertical light "curtains", a glass cross or glass slabs. Reuse the artwork from a finished deck by cloning one of its divider slides and changing only the text; don't generate new artwork. Only products and partners get other background colours.
