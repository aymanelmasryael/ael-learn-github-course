# Lab 07: GitHub Pages Portfolio

## Learning Objectives

- Create a `username.github.io` repository for GitHub Pages hosting
- Build a personal portfolio page with HTML and CSS
- Apply a Jekyll theme via `_config.yml`
- Enable GitHub Pages from the repository Settings
- View and share the live portfolio site
- Configure a custom domain (optional)

## Prerequisites

- A GitHub account
- Basic HTML knowledge (headings, paragraphs, links, images)
- Basic CSS knowledge (colors, fonts, layout)
- Git basics: clone, add, commit, push

## Task List

1. **Create the repository** — On GitHub, create a new public repository named exactly `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your actual GitHub username). Do NOT initialize with a README.
2. **Clone the repository** — `git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git` and `cd` into it
3. **Write `index.html`** — Create a portfolio homepage. Include:
   - Your name and a short bio
   - A profile photo or avatar
   - A list of skills or technologies
   - Links to your projects (e.g., GitHub repos, live demos)
   - Contact information or social links
4. **Add styling with `style.css`** — Create a CSS file and link it in `index.html`. Use custom fonts, colors, and a responsive layout.
5. **Configure Jekyll theme** — Create `_config.yml` with:
   ```yaml
   title: My Portfolio
   theme: jekyll-theme-cayman
   ```
   Other supported themes: `jekyll-theme-minimal`, `jekyll-theme-hacker`, `jekyll-theme-slate`, `jekyll-theme-modernist`
6. **Commit and push** — `git add . && git commit -m "initial portfolio" && git push`
7. **Enable GitHub Pages** — Go to Settings → Pages → under "Branch" select `main` and folder `/root`. Click Save.
8. **Visit your live site** — Wait 1–2 minutes, then visit `https://YOUR-USERNAME.github.io`
9. **(Optional) Add a custom domain** — In Settings → Pages → Custom domain, enter your domain (e.g., `yourname.com`). Add a `CNAME` record with your DNS provider pointing to `YOUR-USERNAME.github.io`.

## Expected Result

- `https://YOUR-USERNAME.github.io` loads a live, styled portfolio page
- The page uses a Jekyll theme applied from `_config.yml`
- Pushing new changes to `main` automatically redeploys the site
- (Optional) A custom domain resolves to your GitHub Pages site

## Common Mistakes

- **Repository name must match exactly** — `username.github.io` is required; a mismatch (e.g., `Username.github.io` or `username-site`) will not work with the default URL.
- **Forgetting the `_config.yml` theme** — Without it, Pages serves the raw HTML file. Adding a theme gives you a polished layout automatically.
- **Pushing without verifying locally** — Always open `index.html` in a browser before pushing. A broken HTML tag can make the page render incorrectly.
- **Expecting instant deployment** — GitHub Pages can take up to 2 minutes to deploy after a push. Be patient and refresh.
- **Cache issues with custom domains** — After adding a custom domain, DNS propagation can take from minutes to 48 hours. Use `dig` or online tools to verify the CNAME record.

## Verification Checklist

- [ ] My repository is named `YOUR-USERNAME.github.io`
- [ ] `index.html` contains my name, bio, skills, and links
- [ ] `style.css` is linked and provides custom styling
- [ ] `_config.yml` specifies a Jekyll theme
- [ ] GitHub Pages is enabled (Settings → Pages → branch: main, folder: /root)
- [ ] My site loads at `https://YOUR-USERNAME.github.io`
- [ ] Pushing a new change updates the live site within 2 minutes
- [ ] (Optional) Custom domain is configured and resolves correctly
