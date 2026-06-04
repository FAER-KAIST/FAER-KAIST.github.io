# FAER Lab GitHub Pages Prototype

This is a static GitHub Pages-ready prototype for the FAER Lab research group site.

## Files

- `index.html` contains the page content and section structure.
- `styles.css` controls layout, colors, typography, and responsive behavior.
- `script.js` controls the mobile menu, publication filter, active nav state, and contact form mailto behavior.
- `assets/hero-faer.jpg` is the generated website hero image.
- `assets/gallery/` contains lab gallery images selected by the user; thumbnails open in a lightbox preview.

## Current Content Notes

- The hero uses `FAER Lab` as the primary name so the full lab name remains readable as a subtitle.
- Lee Youjeong is listed under Alumni.
- Ph.D. students are labeled as Ph.D. Candidates.
- Student members are grouped by BTM and GGGS. SFER is shown as a per-person joint-lab badge, excluding Kim Wonjun.
- Member portraits are limited to the user-provided QUV page and lab-introduction deck; do not scan or import unrelated local photos without explicit selection.
- Kim Kevin's profile reflects the provided CV, including Associate Professor title and research interests in information processing costs, information intermediaries, ESG, and M&A.
- Hyunjee Lee and Philippine Sarre were added from the provided lab-introduction deck and can be expanded later with emails and bios.
- The current research topics incorporate the provided deck's themes: ESG and financial reporting, green finance, carbon accounting, conference-call audio analysis, disclosure readability, ESG report text analysis, and LLM-based reporting research.
- The publication list was revised from the original QUV draft into a verified selected-publications list using Google Scholar-linked AD Scientific Index data and KAIST Pure records.

## GitHub Pages Setup

1. Create a GitHub repository, for example `faer-lab.github.io` or `faer-site`.
2. Upload these files to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to `Deploy from a branch`, branch `main`, folder `/root`.
5. Save. GitHub will publish the site after the first Pages build.

## Updating Content

- Edit members in the `#members` section of `index.html`.
- Edit papers in the `#publications` section.
- Replace the hero visual by adding images to `assets/` and updating `assets/hero-faer.jpg` in `styles.css`.
- Replace a member photo by saving the new image in `assets/members/`, then updating that member's `<img src="...">` in `index.html`.
- After editing, run `git add .`, `git commit -m "Update site content"`, and `git push` from this folder to publish the change.
- If a custom domain is added later, create a `CNAME` file containing only that domain.

## References Used For This Draft

- Existing QUV site content provided by the user.
- User-provided admissions presentation deck.
- Alpha Research Lab, University of Waterloo, used as a loose benchmark for a clean ESG/accounting research lab site structure: https://uwaterloo.ca/alpha-research-lab/
