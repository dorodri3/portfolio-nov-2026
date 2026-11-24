# Darrell Rodriguez | UX Portfolio

This is the source for [Darrell Rodriguez’s UX portfolio](https://darrell-rodriguez-ux.dorodux.chatgpt.site/). It includes six case studies, their design images, the AI Driving demo, and its original process report.

## Edit the portfolio

- Update the case study copy, project order, and image captions in `portfolio-content.mjs`.
- Edit `build-portfolio.mjs` for homepage copy and page templates.
- Edit `dist/style.css` and `dist/portfolio.css` for styling. The gallery script is `dist/gallery.js`.
- Project images are in `dist/assets/projects/`. Update `image-sizes.json` when adding or replacing an image with different dimensions.

Run `node build-portfolio.mjs` from the repository root to regenerate the HTML. The build has no package dependencies. Commit the source changes and regenerated files together.

## Preview locally

From the repository root, run `python -m http.server 4173 --directory dist` and open [the local preview](http://localhost:4173/). On Windows, you can use `py` in place of `python`. The site uses root-relative links, so serve `dist/` as the web root.

The GitHub repository stores the code. The public portfolio is hosted separately on ChatGPT Sites.
