# Design review

Every slide and every deck is judged on six criteria, then checked against Nielsen's ten usability heuristics translated to slides. Do this after building and before reporting, and again after any fix round. Look at real screenshots (800px contact sheet, 1600px for detail), not at the layer tree. The audience only ever sees the rendered slide.

## Six criteria

Score each from 0 to 10. The bar is **9 or higher on every criterion**. An average can hide a weak criterion, and the audience notices the weakest one.

| Criterion | The question to ask | A 9–10 looks like | Typical faults |
|---|---|---|---|
| **Composition** | Does the eye travel title → focus → takeaway without hunting? | One dominant element. Shared axes and edges. Groups separated by space. Card rows anchored to the bottom. Balanced fill of the 1880×820 area | Equal-weight grid of boxes, floating elements, empty half-slide, crowding at one edge |
| **Typography** | Is hierarchy clear, and is the type on the system? | Styles from the scale only; every size and line height a multiple of 4; at most four styles per slide; case used by role; no widows or mid-word breaks | Off-grid sizes (22, 26, 30), too many sizes, near-identical neighbouring sizes, body under 24 |
| **Overall perception** | Is the first impression calm, confident and readable from the back row? | The point lands in about five seconds; the slide breathes; nothing looks crammed or unfinished | Visual noise, text walls, leftover placeholders |
| **UI quality / craft** | Would a senior designer sign off on the details? | Exact alignment and spacing on the 4-grid; consistent paddings; icons from one set at standard sizes; no off-palette colours; same geometry across a series | 1–3px misalignments, mixed icon sets, stray outlines, inconsistent card heights |
| **Clarity** | Can someone who missed the speaker understand the slide? | The title states the point; labels name things in the audience's words; numbers have units and sources; the takeaway is visible | Topic-label titles, jargon without context, unexplained colour codes |
| **IdaProject brand** | Would a colleague recognise this as an IdaProject slide with the logo covered? | Dark base, neon used sparingly as the signature, Aeonik + JetBrains Mono, flat cards and chips, `[→]` and `[+]`, the house voice | Generic corporate look, neon everywhere or nowhere, foreign fonts, shadows and rounded cards |

Also give one overall score. When a criterion is below 9, list the fixes that would raise it, cheapest first: delete, reuse an existing style or component, correct a value, add something new.

## Nielsen's heuristics for slides

Check each heuristic and record violations with a severity:

| Severity | Meaning |
|---|---|
| 0 | not a problem |
| 1 | cosmetic: fix if there is time |
| 2 | minor: should fix |
| 3 | major: the slide misleads or slows understanding; must fix |
| 4 | catastrophic: the point is lost or wrong; must fix before the deck is shown |

The bar is **no violation of severity 3 or 4**.

| # | Heuristic | What it means on a slide |
|---|---|---|
| 1 | Visibility of system status | The audience knows where they are: chapter dividers, series kickers («ПРАВИЛО 3»), consistent numbering, a visible takeaway |
| 2 | Match with the real world | The audience's own words and units (₽, hours, the industry's terms); metaphors from their world; reading order that follows the story |
| 3 | User control and freedom | The speaker can skip or reorder: each slide stands on its own, nothing depends on the previous slide's animation; dense content is split rather than revealed in fragile steps |
| 4 | Consistency and standards | Same type styles, colours, title scheme and geometry for the same job across the deck; the brand system applied everywhere; one meaning per colour |
| 5 | Error prevention | No ambiguity that leads to wrong conclusions: units on every number, sources for claims, dates on prices, no cherry-picked scales |
| 6 | Recognition rather than recall | Labels and legends sit next to what they explain; the audience never has to remember a colour code or abbreviation from three slides back |
| 7 | Flexibility and efficiency | The slide serves both skimmers and readers: the title and focus give the gist, and details are there for those who look closer |
| 8 | Aesthetic and minimalist design | Every element earns its place: no repetition, no decoration without meaning, no lines where space would do, no lead-ins from the speech |
| 9 | Recognise, diagnose, recover from errors | Risk, error and current-state elements are unmistakable (red plus a word or icon), and the slide shows the way out (what to do, which rule fixes it) |
| 10 | Help and documentation | Legends, captions, sources and handout references exist where the slide alone is not self-explanatory; the homework and CTA tell people where to go next |

## Report format

For each reviewed slide, or for the deck when reviewing it whole:

```
Slide N — <title>
Scores: Composition 9 · Typography 10 · Perception 9 · UI quality 9 · Clarity 9 · Brand 10 · Overall 9
Heuristics: #6 severity 2 — legend for the red outline sits in the far corner; move it under the table
Verdict: pass | fail (<criterion below 9 / severity-3+ violation>)
Fixes: <ordered list, cheapest first>
```

If a slide fails, fix it and review it again, for up to five rounds. If it still fails, report what blocks it, for example missing content, a decision only the owner can make or a conflict with the brief. Say plainly that a review you ran on your own work is a self-review.
