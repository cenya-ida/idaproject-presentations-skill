# Slide types

Every slide in an IdaProject deck belongs to one of the types below. Choose a type by the slide's job, then find an instance of that type in a recent finished deck (file `Xq7u4weQ5eKXuHdK0uqFYT`) or in the dark row of the template (file `yRNgBdeFmQR59BYGiiiDJL`) and clone it. Cloning gets the header, footer, background and spacing right for free.

Each entry lists:
- **Job**: what the slide is for.
- **Layout**: the geometry inside `Content`.
- **Styles**: the type and colour styles from [visual-system.md](visual-system.md).
- **Watch**: the mistake to avoid.

Contents: [Choosing a type](#choosing-a-type) · [Frame types](#frame-types) · [Statement types](#statement-types) · [Card types](#card-types) · [Number types](#number-types) · [Comparison types](#comparison-types) · [Table types](#table-types) · [Process types](#process-types) · [Audience types](#audience-types) · [Visual types](#visual-types)

## Choosing a type

| The slide's job | Type family | Types |
|---|---|---|
| open or close the talk | Frame | Cover, Trust, Thesis cards, Agenda, CTA |
| mark a chapter, land a thought | Statement | Divider, Manifesto, Error rows |
| list 3–5 causes, measures or options | Card | Overview cards, Card row, Damage cards, Owner cards |
| make a number the argument | Number | Hero numbers, Big number, Levels |
| show two states or two concepts | Comparison | Compare arrow, Compare cards, Myths |
| cross scenarios with options; 6–8 items | Table | Formula table, Scenario table, Price table, Numbered checklist |
| show steps in time or a system's parts | Process | Timeline, Roadmap, Layer scheme |
| give the room work to do | Audience | Matrix, Template table, Homework |
| show the product or release tension | Visual | Mockup, Chip cloud, Meme |

A healthy deck mixes families. If more than three slides in a row are the same family, check whether one of them is really a statement or a number in disguise.

## Frame types

### Cover
- **Job**: name the talk and the speaker.
- **Layout**: 3D neon background. The speaker's name is top-left at y0. The title is bottom-left, ending at y820, in 3–5 lines. Optionally one line sits on a neon marker, or a neon doodle goes top-right.
- **Styles**: name in `Heading/H4` uppercase white; title in `Display/L` white.
- **Watch**: a long title in fewer, wider lines. Break the lines by meaning, not by width.

### Trust
- **Job**: earn credibility in five seconds.
- **Layout**:
  - headline in two lines, the key figure on a neon marker;
  - a wall of white client logos: 3 rows × 11 cells of 171×112, the last cell a count («180+»);
  - a small grey caption bottom-left.
- **Styles**: `Heading/H1` uppercase; marker text `#1A1B1D` on neon; caption `Body/M` grey.
- **Watch**: coloured logos. Keep them monochrome white so the wall reads as one block.

### Thesis cards
- **Job**: state the talk's three theses; repeat them near the end, proven.
- **Layout**: centred title; 3 equal cards anchored to the bottom. Each card has a number at the top and the thesis at the bottom. The opening version has a short grey explanation; the closing one doesn't.
- **Styles**: number `Mono/M` neon; thesis `Heading/H3` white; explanation `Body/M` `#BBBBC0`.
- **Watch**: wording that drifts between the opening and closing. Keep it word for word.

### Agenda
- **Job**: preview the chapters.
- **Layout**: 4–5 cards or teaser questions. Each becomes a chapter divider later.
- **Styles**: as Card row.
- **Watch**: topic labels. Phrase the items as questions the talk will answer.

### CTA
- **Job**: give the audience a next step.
- **Layout**:
  - left-aligned headline «Больше интересного тут»;
  - 3 cards (≈612×420), each with a white QR (260) and a caption (Telegram, site, YouTube);
  - a grey caption about stories and the hashtag bottom-left.
- **Styles**: headline `Display/L`; captions `Heading/H5` centred; footnote `Body/M` grey.
- **Watch**: QR codes too small to scan from the hall. Keep them 260 or larger.

## Statement types

### Divider
- **Job**: open a chapter and reset attention.
- **Layout**: neon 3D curtains; 2–5 words centred on `Content`; nothing else.
- **Styles**: `Display/XL` white.
- **Watch**: rubric words («Решение»). Use a question or a hook («Как встроить это в работу»).

### Manifesto
- **Job**: the line people will quote, placed before the practical close.
- **Layout**: curtains; 2–3 centred lines with a parallel structure («X отвечает за…, Y — за…, вы — за…»).
- **Styles**: `Display/M` white.
- **Watch**: more than three lines. Cut until it can be said in one breath.

### Error rows
- **Job**: show cause → consequence → outcome.
- **Layout**: 3 rows split by thin rules. The label is on the left in a column about 640 wide; the statement is on the right.
- **Styles**: labels `Heading/H2` (the first one neon, the rest white); statements `Body/L` `#BBBBC0`.
- **Watch**: a neon label on every row. Only the error itself is neon.

## Card types

### Overview cards
- **Job**: list all N items of a chapter before the series.
- **Layout**: centred title and grey lead. N equal cards anchored to the bottom, each with a neon icon top-left and its name at the bottom.
- **Styles**: name `Heading/H5`; icon 48 neon; lead `Body/L` grey.
- **Watch**: card names that differ from the series titles. Keep them identical.

### Card row (series slide)
- **Job**: the workhorse. Present 3–5 measures, causes or options for one item of a series.
- **Layout**:
  - series title scheme: kicker, left title, conclusion top-right;
  - a row of 3–5 cards from about y300–380 down to y820;
  - inside each card, the heading at the top (an icon above it if helpful) and the body pinned to the bottom.
- **Styles**: kicker `Mono/M` neon; heading `Heading/H4` (3 cards) or `Heading/H5` (4–5 cards); body `Body/M` or `Body/S` `#BBBBC0`.
- **Watch**: geometry that changes between slides of the same series. Same card count, same heights, same positions.

### Damage / option cards
- **Job**: introduce 2–3 categories the deck will return to.
- **Layout**: centred title; 3 cards. Each has the name at the top and a grey description. Below a thin rule, a neon label («что с этим делать») with the answer in white.
- **Styles**: name `Heading/H3`; description `Body/M` `#BBBBC0`; label `Mono/M` neon; answer `Body/M` white.
- **Watch**: answers longer than one line. They are pointers, not explanations.

### Owner cards
- **Job**: answer who owns it, what it costs and how to measure it.
- **Layout**: 3 tall cards. Each has a number at the top, the question under it and the answer as a short list at the bottom.
- **Styles**: number `Mono/M` neon; question `Heading/H3`; answer `Body/M` `#BBBBC0`.
- **Watch**: answers that are paragraphs. Use 2–4 short lines.

## Number types

### Hero numbers
- **Job**: one or two figures carry the argument.
- **Layout**: two big-number cards side by side, the second highlighted with a neon outline. Below them, 3 fact columns with mono labels, separated by thin rules.
- **Styles**: figure `Number/L` white; «= meaning» `Body/L`; explanation `Body/S` grey; labels `Mono/M` grey.
- **Watch**: both cards highlighted. The highlight marks the one that should stick.

### Big number
- **Job**: a breather with a single fact.
- **Layout**: one figure with a short caption, or figure + word + logo strip (template #4, #24–25, #30).
- **Styles**: `Number/XL` white; caption `Body/L` grey with the key words white.
- **Watch**: adding a second number. Then it is no longer a breather.

### Levels
- **Job**: explain a tiered model (maturity levels, service tiers).
- **Layout**: one column per tier. From top to bottom: a neon badge with the tier name and who it suits, a description, a small icon diagram of what the tier adds, and two metrics with mono labels.
- **Styles**: badge `Mono/L` dark on neon; description `Body/S`; metrics `Heading/H4` white; labels `Mono/S` grey.
- **Watch**: inconsistent metrics between tiers. Every column answers the same two questions.

## Comparison types

### Compare arrow
- **Job**: before → after, how it looks → what it leads to.
- **Layout**: two columns of bands with a neon `→` between them. The left label is grey; the right label is red when the right side is the risk.
- **Styles**: labels `Mono/M`; band text `Body/M` white.
- **Watch**: unequal row counts left and right without a reason. Pair items row by row when they correspond.

### Compare cards
- **Job**: separate two concepts people confuse.
- **Layout**: two cards side by side. Each has a mono source label, the name and a list with `→`. The conclusion sits top-right in neon.
- **Styles**: name `Heading/H1` uppercase; list `Body/M`; label `Mono/M` grey.
- **Watch**: lists of different lengths that make one side look stronger.

### Myths
- **Job**: break misconceptions before presenting the cure.
- **Layout**: a short row of icon cards at the top. Below, a mono label («три заблуждения») and 2–3 struck-through quotes.
- **Styles**: quotes `Heading/H3` grey with strikethrough, in «ёлочки»; label `Mono/M` grey.
- **Watch**: struck-through text too small to read. Keep it at `Heading/H3`.

## Table types

### Formula table
- **Job**: show what a cost or metric is made of (6–8 terms).
- **Layout**: a lead line with the key phrase in white, then full-width bands: neon `+`, term, explanation. The first band has no `+`.
- **Styles**: term `Heading/H5`; explanation `Body/M` grey; `+` `Heading/H4` neon.
- **Watch**: terms that are not additive. Use a plain list if `+` would be a lie.

### Scenario table
- **Job**: what happens in each scenario under each option.
- **Layout**: one band per scenario (5–6 at most). The "current state" column is red; option columns have neon labels. Repeated values are merged into one cell. Highlighted rows get a neon outline and an adjacent label.
- **Styles**: first column `Body/M` white; cells `Body/S`; labels `Mono/M`; current-state cells red at 24+.
- **Watch**: triplicated values. Merging them is what makes the differences visible.

### Price table
- **Job**: cost per size × option, plus a rule for choosing.
- **Layout**: tabular figures on the left with the "current" row in red. On the right, a "правило выбора" column of condition → option rows. A date or caveat goes top-right in grey.
- **Styles**: figures `Mono/L`; option labels `Mono/L` neon; rules `Body/S` white.
- **Watch**: proportional figures. Use mono so digits align by column.

### Numbered checklist
- **Job**: contract clauses, questions to ask, 4–8 items.
- **Layout**: one or two columns of bands, each with a neon number and the text. A check question goes top-right in neon.
- **Styles**: number `Mono/M` neon; text `Body/S` white; column label `Mono/M` grey.
- **Watch**: more than 8 rows. Split into two columns or two slides.

## Process types

### Timeline
- **Job**: stages of a roadmap.
- **Layout**: centred title and lead; a horizontal line with neon dots; icons above the dots; steps below. Optionally a row of chips below that: active ones neon, future ones grey. Template #12 offers a Gantt variant.
- **Styles**: step heading `Heading/H5`; step text `Body/S` `#BBBBC0`; chips `Mono/M`.
- **Watch**: uneven step text lengths that make the row ragged. Keep steps to 2–4 lines.

### Roadmap
- **Job**: "first 90 days", or N concrete steps.
- **Layout**: centred title and lead. 4 cards (≈440×468) anchored to the bottom, a period label at the top and the actions pinned to the bottom, `→` between cards. A neon bracket with a chip («без бюджета») over the free steps.
- **Styles**: period `Mono/L` neon; actions `Body/L` white.
- **Watch**: abstract actions («внедрить процессы»). Each card names concrete artefacts.

### Layer scheme
- **Job**: show what a system is made of and how the parts connect.
- **Layout**: 5–8 narrow cards in a row. Each card shows a number, a name and asset labels with icons at the bottom. Under the cards runs a connecting line with neon dots. A centred conclusion has its key phrase in neon.
- **Styles**: name `Heading/H5`; asset labels `Mono/S`; conclusion `Body/L` (white, key phrase neon).
- **Watch**: labels below 16px. Drop asset detail rather than shrink it.

## Audience types

### Matrix
- **Job**: a map the audience fills in (systems × properties).
- **Layout**:
  - mono column labels;
  - first column with names, the other cells empty cards;
  - risk cells with a red outline, a warning icon and a legend below.
- **Styles**: labels `Mono/M` white; names `Body/M`; legend `Body/S`.
- **Watch**: a red outline alone. Colour must not be the only cue.

### Template table
- **Job**: an artefact the audience completes (action plan, responsibilities).
- **Layout**: a question column plus answer columns made of dashed input fields with a pencil icon. A «бесплатно» pill sits next to the kicker if relevant.
- **Styles**: questions `Body/M` white; placeholders grey.
- **Watch**: bare dashes. They read as unfinished work, not as fields.

### Homework
- **Job**: one concrete task with a deadline.
- **Layout**: a centred title and the one-sentence task. Below, two cards: a red-labelled list ("отметьте красным:") and a neon-labelled list ("принесите N решений:").
- **Styles**: title `Heading/H2`; task `Body/L` white; card labels `Body/L` red or neon; lists `Body/L` white.
- **Watch**: vague tasks. Name the artefact and when it is due.

## Visual types

### Mockup
- **Job**: show the product.
- **Layout**: a split headline (the start top-left, the end top-right) with a phone or laptop mockup in the centre, bleeding off the bottom edge (template #10).
- **Styles**: headline `Heading/H1`.
- **Watch**: screenshots with lorem ipsum or other clients' data.

### Chip cloud
- **Job**: list features, tools or roles at a glance.
- **Layout**: centred title, 1–3 rows of pills (template #7). The selected item is filled.
- **Styles**: chips `Mono/M` or `Body/S` uppercase.
- **Watch**: more than about 15 chips. Group them or cut.

### Meme / full-bleed photo
- **Job**: release tension, or return to an opening joke with a twist.
- **Layout**: an image across the whole slide with caption bubbles.
- **Styles**: captions `Heading/H4` on a neon or dark bubble.
- **Watch**: more than two per deck. Use them as punctuation, not as content.
