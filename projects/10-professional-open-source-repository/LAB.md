# Lab 10: Professional Open Source Repository

## Learning Objectives

- Structure a professional repository with all standard community files
- Write each file with its specific purpose and conventions
- Configure branch protection rules and CODEOWNERS
- Create a GitHub Release with a version tag
- Enable community features (Discussions, Wiki, Sponsors)
- Apply best practices for repository maintainers

## Prerequisites

- Completion of Labs 01–09 or equivalent experience
- Understanding of Markdown, YAML, and Git basics
- Familiarity with Issues, Pull Requests, and GitHub Actions
- A GitHub repository you own

## Task List

1. **Explore the existing structure** — Review every file already in the repository. Note the purpose of each file:
   - `README.md` — Project introduction, badges, install/usage, contributing, license
   - `LICENSE` — MIT (or appropriate) open-source license
   - `CHANGELOG.md` — Keep a Changelog format (`## [Unreleased]`, `## [1.0.0] - YYYY-MM-DD`)
   - `CONTRIBUTING.md` — How to contribute, branch naming, PR process
   - `CODE_OF_CONDUCT.md` — Community behavior standards
   - `SECURITY.md` — How to report vulnerabilities
   - `.gitignore` — Comprehensive ignore rules for Node.js and Go
   - `index.js` and `main.go` — Example project code
   - `.github/ISSUE_TEMPLATE/bug_report.md` — Bug report template
   - `.github/ISSUE_TEMPLATE/feature_request.md` — Feature request template
   - `.github/PULL_REQUEST_TEMPLATE.md` — PR description template
   - `.github/workflows/ci.yml` — CI pipeline
   - `.github/dependabot.yml` — Automated dependency updates

2. **Review and improve `README.md`** — Ensure it includes:
   - Title with a shield.io badge (e.g., `![CI](https://github.com/user/repo/workflows/CI/badge.svg)`)
   - Table of Contents
   - Installation and usage sections
   - Contributing section linking to `CONTRIBUTING.md`
   - License section linking to `LICENSE`

3. **Set up branch protection rules** — Go to Settings → Branches → Add rule. Configure:
   - Require pull request reviews (at least 1)
   - Dismiss stale reviews
   - Require status checks (the CI workflow)
   - Require up-to-date branches
   - Restrict who can push to matching branches

4. **Create `CODEOWNERS`** — Create `.github/CODEOWNERS`:
   ```
   * @username
   *.js @javascript-team
   *.go @go-team
   /docs/ @docs-team
   ```

5. **Create a release** — Go to Releases → Create a new release. Use tag `v1.0.0`. Write release notes with:
   - Summary of changes
   - New features
   - Bug fixes
   - Contributors list

6. **Enable community features** — Go to Settings → General:
   - Enable **Discussions** and create categories (General, Q&A, Ideas, Show and tell)
   - Enable **Wiki** and add a "Home" page with project documentation
   - (Optional) Enable **Sponsors** if you want to accept contributions

7. **Review Insights** — Go to the Insights tab and explore:
   - **Contributors** graph (who has contributed over time)
   - **Code frequency** (additions/deletions per week)
   - **Community Standards** checklist (README, LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, etc.)

## Expected Result

- A repository that looks professional and follows open-source conventions
- Every required file is present with meaningful content
- Branch protection rules enforce PR reviews and CI status checks
- A `v1.0.0` release exists with tags and release notes
- Discussions and Wiki are enabled and have initial content
- The Community Standards checklist in Insights is fully green

## Common Mistakes

- **Missing a `LICENSE` file** — Without a license, others cannot legally use your code. Always include one. MIT is the most common for open-source projects.
- **Writing vague `README.md`** — A good README answers "what is this?", "how do I install it?", "how do I use it?", and "how do I contribute?". Badges add credibility.
- **Ignoring `CODEOWNERS`** — Without it, no one is automatically requested to review changes. This slows down PRs, especially in large teams.
- **Skipping branch protection** — Without protection, anyone can push directly to `main`. This is the #1 cause of accidental production breaks.
- **Forgetting to update `CHANGELOG.md`** — A changelog that is never updated is useless. Follow the Keep a Changelog format and update it with every release.

## Verification Checklist

- [ ] `README.md` has a title, badges, install/usage, contributing, and license sections
- [ ] `LICENSE` file is present and appropriate (MIT recommended)
- [ ] `CHANGELOG.md` follows the Keep a Changelog format
- [ ] `CONTRIBUTING.md` explains how to contribute
- [ ] `CODE_OF_CONDUCT.md` sets community standards
- [ ] `SECURITY.md` explains how to report vulnerabilities
- [ ] `.gitignore` covers Node.js, Go, and OS-specific files
- [ ] Issue templates and PR template are present under `.github/`
- [ ] CI workflow and Dependabot config are present under `.github/`
- [ ] Branch protection rules require PR reviews and CI checks
- [ ] `.github/CODEOWNERS` assigns owners to file patterns
- [ ] A `v1.0.0` release with release notes is published
- [ ] Discussions and Wiki are enabled
- [ ] Community Standards checklist in Insights is fully green
