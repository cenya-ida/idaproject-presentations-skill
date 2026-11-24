# Quality pass

## Deck

- [ ] The order is: cover → trust → three theses → chapters (divider + slides) → manifesto → practice → theses repeated → homework → CTA.
- [ ] Every chapter has a divider, and there is a breather every 3–6 dense slides.
- [ ] Series run without gaps («ПРАВИЛО 1…N»), and cross-links point to slides that exist.
- [ ] The opening and closing theses match word for word.
- [ ] Header and footer are identical everywhere and the © year is current.
- [ ] Frames are named `1…N` in order, with no stray variants left in the deck column.

## Slide

- [ ] The slide makes one point, and its title is a claim, question or formula of 2–7 words.
- [ ] The takeaway sits in its fixed place: top-right on series slides, or a grey lead under a centred title.
- [ ] There is one focal element, and it is what the audience should remember.
- [ ] Neon appears in 1–3 places. Red appears only for current state, risk or error, and always with a second cue.
- [ ] Nothing is said twice: repeated table values are merged and each item appears once.
- [ ] There are no speaker lead-ins, bullets, shadows, rounded cards, stock photos or classic bar/line charts.
- [ ] Card rows are anchored to the bottom of `Content`. Like elements share axes, and gaps and paddings sit on the 4-point grid (20 between cards).
- [ ] The design review in [review.md](review.md) scores every criterion at 9 or more, with no heuristic violation of severity 3 or 4.
- [ ] Text is at least 24px and labels at least 16px. Every font size, line height and text gap is a multiple of 4 and comes from the type scale; a content slide uses at most four text styles.
- [ ] Fills use the palette (bound to colour variables where the file has them); no off-palette hex.
- [ ] There are no widows, mid-word breaks or overflow.
- [ ] Every number comes from the input; any without a source is flagged in the report.

## Typical failures and fixes

| Failure | Fix |
|---|---|
| A grid of many equal boxes looks heavy and unattractive | 2–3 large elements and a row of facts, with one highlighted card or big number as the focus |
| The conclusion is a footnote at the bottom, far from the title | Move it top-right, opposite the title (series), or under a centred title |
| Cards sit right under the title and the bottom half is empty | Anchor the card row to the bottom; let air separate the question from the answer |
| Card body in white at the same weight as the heading | Put the heading in uppercase white at the top and the body in `#BBBBC0` at the bottom |
| Two tables crammed onto one slide at 16–18px | Two slides with a shared kicker, text at 24–28 |
| A red outline with no explanation | A warning icon in the cell and a legend under the table |
| A bare «—» where the audience should write | A dashed input field with a pencil icon |
| Mono labels at 14px | `Mono/S` 16 at least; column headers `Mono/M` 20 |
| Sizes like 22, 26, 30, 38 copied from an old slide | Snap to the 4-point scale (24, 28, 32, 36/40) |
| The explanation of a highlight sits in the far corner | A label right next to the highlighted group |
| Neon on every header, border and label | Keep it for the kicker and one highlight; make the rest grey or white |
