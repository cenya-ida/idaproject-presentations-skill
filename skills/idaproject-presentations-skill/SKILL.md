---
name: idaproject-presentations-skill
description: Build, rebuild or review presentation slides in the IdaProject (ИдаПроджект) house style — dark 1920×1080 Figma decks with a single neon accent, Aeonik Pro and JetBrains Mono on a 4-point type scale, flat cards and chips. Covers the whole path from a brief, script or speaker notes to a deck outline, the right slide type for every point, colour and type styles, the build in Figma, and a scored design review (composition, typography, perception, UI quality, clarity, brand) plus Nielsen's heuristics. Use this skill whenever someone asks for a talk, workshop, webinar, conference or sales deck for IdaProject, wants one slide redesigned "in our style", asks why a slide looks cluttered or weak, wants slides reviewed, or hands over a brief (ТЗ) or script to turn into slides — even if they don't say "IdaProject" but the work is in the company's Figma presentation files.
---

# IdaProject slides

This skill turns any brief into a deck that reads and looks like IdaProject's own talks. Topics, speakers and brief formats change from deck to deck. What stays the same is how a slide thinks, how it is composed, the visual system and the shape of the deck. Those are what this skill teaches.

## Sources of truth

You only need two kinds of reference material:

- **The slide template** «ИдаПроджект шаблоны»: https://www.figma.com/slides/yRNgBdeFmQR59BYGiiiDJL (fileKey `yRNgBdeFmQR59BYGiiiDJL`, Figma Slides). It holds 50 layouts in a light row and a dark row, the colour and type variables, and the header and footer components.
- **Finished decks** «Презентации · Мероприятия»: https://www.figma.com/design/Xq7u4weQ5eKXuHdK0uqFYT (fileKey `Xq7u4weQ5eKXuHdK0uqFYT`), one deck per page. Before you design, list its pages and look at the three or four most recent decks. Treat what they do as the current style. Where the template and recent decks disagree, follow the recent decks, because the template is the older corporate base.

When you need a layout, find a slide in those decks that solves the same problem and clone it. Do this before drawing from scratch. Cloning keeps the header, footer, background and spacing exact for free.

### How you get access

These are private company files, so the skill can't ship them. You reach them live through the **Figma MCP server**. It acts with the Figma account of the person you are working for, which means you can see exactly what they can see.

1. **Check the connection.** Call Figma's `whoami`. If the Figma tools are missing or not authenticated, tell the user in Russian that the Figma connector must be connected and signed in. In Claude Code that is `/mcp` or the connector settings; in other clients, their MCP settings.
2. **Open a session** with `create_session` on the fileKey you need. Use a separate session for each file you read.
3. **Read the template and decks:**
   - `get_screenshot` on a node to see a layout.
   - `use_figma` with read-only code to list pages and frames, and to read sizes, styles and variables.
   - `get_metadata` works for the decks file (`/design/`) but not for the template (`/slides/`); use `use_figma` there.
4. **If a file is not accessible** (403 or not found), the user's account has no access to it. Ask the user to request view access from the file owner, or to share the link with their account. Until then, work from [references/visual-system.md](references/visual-system.md) and [references/slide-types.md](references/slide-types.md), which capture the style. Say in the report that no live examples were checked.
5. **Respect the boundaries.** The template and the finished decks are read-only references. Clone from them into the working file and never edit them. Write only to the file and page the user named for the new deck.

## Workflow

1. **Understand the input.** Note the topic, audience, length, speaker and venue. Write down in one sentence the single idea the audience should leave with. Pick the three theses that support it. Mark every number in the input along with its source. If a slide needs a number the input doesn't contain, ask for it or leave a visible fill-in field. An invented figure on a slide gets repeated by the audience as fact.
2. **Outline the deck.** Read [references/narrative.md](references/narrative.md) and build an outline table with these columns: slide number, chapter, slide type, the one point the slide makes, and the source text. Show it to the user before building unless they asked you to work autonomously. Moving a slide in the outline costs a minute; moving it in Figma costs an hour.
3. **Choose a slide type.** Use [references/slide-types.md](references/slide-types.md). Decide first what the slide's job is, then pick the type that does that job, then find an instance to clone. Every slide gets one point and one focal element.
4. **Apply the styles and build.**
   - Use [references/visual-system.md](references/visual-system.md) for the grid, the colour styles and how to spend them, the typography scale and the components.
   - Use [references/figma-build.md](references/figma-build.md) for the mechanics.
   - Apply named styles or variables instead of loose values wherever the file has them.
5. **Review and fix.** Score the result with [references/review.md](references/review.md): six criteria and Nielsen's ten heuristics, on real screenshots. Fix and re-review until every criterion is at least 9/10 and no heuristic violation is severity 3 or 4. Then run [references/qa-checklist.md](references/qa-checklist.md) for the mechanical checks.
6. **Report** what you changed, any text you wrote yourself, which numbers came from the input, the review scores and what you could not verify.

## Slide types at a glance

| Family | Job | Types |
|---|---|---|
| Frame | open and close the talk | Cover, Trust, Thesis cards, Agenda, CTA |
| Statement | mark a chapter, land a thought | Divider, Manifesto, Error rows |
| Card | 3–5 causes, measures or options | Overview cards, Card row, Damage cards, Owner cards |
| Number | a figure is the argument | Hero numbers, Big number, Levels |
| Comparison | two states or two concepts | Compare arrow, Compare cards, Myths |
| Table | scenarios × options, or 6–8 items | Formula, Scenario, Price, Numbered checklist |
| Process | steps in time, parts of a system | Timeline, Roadmap, Layer scheme |
| Audience | work for the room | Matrix, Template table, Homework |
| Visual | product or tension release | Mockup, Chip cloud, Meme |

The full catalogue gives each type its layout, the type and colour styles it uses, and the mistake to watch for.

## What makes a slide IdaProject

The details live in the reference files. These are the ideas behind them:

- **Statement, not topic.** A title is a claim, a question or a formula, for example "Поиск по смыслу, а не по галочкам" or "Почему нет результата?". A topic label like "Аналитика" leaves the audience to work out the point for themselves.
- **One focal element.** The biggest or brightest thing on a slide is the thing to remember. If three things compete, nothing is remembered, so make one of them dominant and quiet the rest.
- **Colour has jobs.**
  - The dark base carries the content, and the light-to-grey steps carry the hierarchy.
  - Neon `#D5FF0C` is the brand signature, spent in at most three places per slide.
  - Red `#FF3C28` means only "current state / risk / error" and always comes with words or an icon.
  - Bind fills to the template's colour variables, so the palette stays exact.
- **Typography on a 4-point system.** Every font size, line height and vertical gap between text is a multiple of 4. Take values from the scale in the visual system, which has named styles from `Display/XL` 120/132 down to `Mono/S` 16/24. Use at most four styles per slide. A shared module is what makes slides from different people line up as one deck.
- **Space instead of boxes.** Flat cards group content, but a grid of nine equal boxes reads as a spreadsheet. Prefer two or three large elements and air between groups. Remove lines, outlines and repeated values that spacing or merging can replace.
- **The deck is a loop.** The three theses open the deck and return at the end, now proven. Chapters open on full-bleed divider slides. Repeating items, like errors, rules or levels, run as a numbered series on one template so the audience learns the layout once.
- **Readable from the back row.** Body text is at least 24px and labels at least 16px. Titles and labels are uppercase; card text is lowercase. Use typographic dashes, «ёлочки» and non-breaking spaces after short prepositions and inside numbers.

## Quality bar

A slide is done when it holds up on all six criteria:
- **composition**: the eye flows from title to focus to takeaway;
- **typography**: the hierarchy is clear and every value is on the 4-point scale;
- **overall perception**: the point lands in five seconds;
- **UI quality**: exact alignment, spacing and consistency;
- **clarity**: it makes sense without the speaker;
- **IdaProject brand**: it is recognisable with the logo covered.

Each criterion needs 9/10 or more, and checking against Nielsen's heuristics must turn up nothing of severity 3 or 4. The reasoning and the rubric are in [references/review.md](references/review.md).

## Permissions and safety

Figma files are shared company assets. Edit them only when the user asked you to. Before a large rebuild, duplicate the slide or page so the previous state is one click away. Don't commit, push or publish without a request. Keep client data and internal numbers out of anything that leaves the file.

## Language

The skill files are in English, but the work happens in Russian:

- **Talk to the user in Russian**: questions, outlines, progress updates, review findings and the final report.
- **Write all slide copy in Russian**: titles, kickers, labels, captions and table text. Keep the speaker's wording where it exists.
- Keep in their original form: brand and product names, established English industry terms, and the style and layer names in Figma (`Heading/H2`, `ms/<name>`).

The audience and the owners are Russian-speaking. A deck or a report that mixes in English reads as unfinished.

## Reporting

In Russian, list slides created or changed, added copy (kickers, labels, captions), numbers taken from the input, the review scores and heuristic findings, open questions for the owner and anything unverified. Call a self-review a self-review.
