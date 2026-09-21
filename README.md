# Kuldeep Singh — Portfolio

An interactive, space-inspired portfolio for iOS engineering and on-device AI, refreshed with September 2026 resume content. Built with React, CSS, Canvas 2D, and the existing react-icons package.

## Development

```sh
npm install
npm start
```

## Production

```sh
npm run build
```

The production output is in `build/`. Relative asset paths support hosting at the root or a subdirectory.

The live site at https://ar5en1c.github.io/react-portfolio/ currently uses GitHub Pages branch publishing from `latestVersion` at `/`. To publish, build the app, synchronize the contents of `build/` into the repository root (including `static/` and `resume/`), then commit and push `latestVersion`. Keep the source files alongside the generated output.

The older `npm run deploy` command targets `gh-pages`, and the checked-in Actions workflow targets `main`; neither is the active Pages publishing source.

## Editing content

- `src/data/portfolio.js`: six selected projects, benchmark caveats, and work experience.
- `src/App.jsx`: page sections, biography, education, navigation, and social links.
- `src/index.css`: responsive layout, design tokens, and reduced-motion support.
- `src/components/scene/OrbitalScene.jsx`: pointer-responsive particle globe, Orbit/Neural modes, and pause/play controls.
- `src/components/scene/ProjectVisual.jsx`: bespoke project architecture illustrations.
- `public/resume/Kuldeep-Singh-2026.pdf`: downloadable resume.
- `public/index.html`: page title, description, and social metadata.

The orbital illustration uses Canvas 2D, so it does not require WebGL or GPU context creation. It respects reduced-motion settings, skips drawing offscreen or in hidden tabs, and releases its animation and observers on unmount. No remote fonts or new dependencies are required. Contact uses a direct email link; there is no backend or EmailJS configuration required by the new page. Earlier components remain in `src/components/` for reference and are not imported by the redesigned page.

Project metrics are sourced from the supplied September 2026 resume. Expand “Behind the build” for measurement scope and caveats. Project illustrations are original typographic/diagrammatic treatments, not product screenshots.
