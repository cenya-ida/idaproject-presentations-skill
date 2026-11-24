# Building in Figma

## Before touching anything

1. Call `create_session` with the working fileKey, and load the `figma-use` guidance before the first `use_figma`.
2. List the page's frames (id, name, x, y) and screenshot the slides you will touch. Owners rename and reorder frames, so don't trust a slide number you remember.
3. Back up before a large edit: duplicate the frame next to the deck (x ≥ 2120) as «N · было», or duplicate the page.

## Building a slide

- **Clone the closest example** from a finished deck or the template (`frame.clone()`, then move it into place). Header, footer, background and spacing come with it. Clear and refill only the children of `Content`.
- Positions inside `Content` are absolute. Card rows and table bands are easiest to keep aligned in auto-layout frames (horizontal, gap 20).
- **Styles first.** If the file has text styles and colour variables, apply them (`textStyleId`, `setBoundVariableForPaint`) instead of raw sizes and hex. Otherwise set the exact values from the scale in [visual-system.md](visual-system.md), including `lineHeight` in pixels.
- **Fonts.** Call `loadFontAsync` for `{family:'Aeonik Pro', style:'Medium'}` and `{family:'JetBrains Mono', style:'Medium'}` before setting text. Set uppercase with `textCase = 'UPPER'` and keep the stored text in normal case, so the copy stays editable and searchable.
- **Wrapping.** For text that wraps, set `textAutoResize = 'HEIGHT'` and then `resize(width, height)`. For single lines, use `'WIDTH_AND_HEIGHT'`.
- **Emphasis** inside a line uses `setRangeFills(start, end, fills)`, called after `characters` is set, because changing `characters` resets range styles. The non-breaking space is ` `.
- **Icons.** Download the Material Symbols Outlined SVG from `https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/<name>/default/24px.svg`. Then call `figma.createNodeFromSvg(svg)`, `rescale(size / 24)`, recolour every `VECTOR` child, and name the node `ms/<name>`. If the icon already exists in the file, clone it instead.
- **Exploring options.** When the right composition is unclear, build 2–3 genuinely different variants as clones beside the deck (x = 2120, 4220, 6320…) named «N · вариант A — <idea>». Put the chosen one in the deck frame and leave the others for the owner to pick from.
- **Inserting a slide.** Shift the following frames by +1120 on y and rename them so the names stay `1…N` in order.

## Verifying

- Run `get_screenshot` (URL plus curl download) on every changed slide. Put them on a 3×3 contact sheet at 800px with PIL, and inspect details at 1600px.
- Check the deck by script:
  - frame names run `1…N`;
  - y = (n−1)×1120;
  - header and footer are identical on every frame;
  - no text node is smaller than 16px, and every `fontSize` and pixel `lineHeight` is divisible by 4 (`fontSize` may be `figma.mixed`; check each range with `getRangeFontSize`);
  - no text overflows its parent;
  - no fill uses a hex outside the palette.
- Read every changed slide once more against the input for wording and numbers.

## Common traps

- `figma.currentPage = …` is not supported; use `await figma.setCurrentPageAsync(page)`.
- Non-breaking spaces make a line wider. Recheck `width` after assigning text that contains them.
- Red text below 24px on a card fails contrast.
- Don't edit backup frames, variant frames or other decks unless asked.
