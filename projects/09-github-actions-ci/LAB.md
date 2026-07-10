# Lab 09: GitHub Actions CI

## Learning Objectives

- Write YAML syntax for GitHub Actions workflows
- Configure workflow triggers (push, pull_request, schedule)
- Define jobs with multiple steps and a matrix strategy
- Use Actions from the Marketplace (checkout, setup-node)
- Manage secrets and environment variables for workflows
- Read workflow logs to debug failed runs

## Prerequisites

- A GitHub repository with Node.js code (the `index.js` and `test.js` in this project)
- Basic understanding of CI/CD concepts
- Familiarity with YAML (indentation, key-value pairs, lists)
- Node.js installed locally for testing

## Task List

1. **Explore the existing files** — Read `index.js`, `test.js`, `package.json`, and the workflow files under `.github/workflows/` to understand the project structure.
2. **Write `ci.yml`** — Create or edit `.github/workflows/ci.yml`:
   ```yaml
   name: CI
   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]
   jobs:
     test:
       runs-on: ubuntu-latest
       strategy:
         matrix:
           node-version: [16, 18, 20]
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: ${{ matrix.node-version }}
         - run: npm ci
         - run: npm test
   ```
3. **Push and observe** — Commit and push the workflow. Go to the Actions tab and watch the workflow run. Notice the matrix creates 3 parallel jobs (one per Node version).
4. **Write `deploy.yml`** — Create `.github/workflows/deploy.yml` to deploy on success:
   ```yaml
   name: Deploy
   on:
     workflow_run:
       workflows: [CI]
       types: [completed]
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       if: ${{ github.event.workflow_run.conclusion == 'success' }}
       steps:
         - uses: actions/checkout@v4
         - run: npm ci && npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```
5. **Add a scheduled trigger** — Add a `schedule` event to `ci.yml` to run every Monday at 9:00 UTC:
   ```yaml
   on:
     schedule:
       - cron: '0 9 * * 1'
   ```
6. **Use secrets** — In your repo Settings → Secrets and variables → Actions, add a secret named `MY_SECRET`. Reference it in a step: `run: echo "${{ secrets.MY_SECRET }}"` (for testing only — never print real secrets).
7. **Read workflow logs** — Go to the Actions tab, click a completed run, and explore each job's log output. Look for the matrix dimension label, test results, and any error messages.
8. **Break and fix** — Introduce a deliberate syntax error in `index.js`, push, and watch the CI fail. Read the logs to identify the error. Fix it and confirm the workflow passes again.

## Expected Result

- A CI workflow runs on every push and PR to `main`, testing across Node 16, 18, and 20
- A deploy workflow runs only after CI succeeds on `main`
- A scheduled cron trigger runs weekly
- Secrets and environment variables are correctly referenced in the workflow
- Failed runs are debuggable through the Actions log viewer

## Common Mistakes

- **YAML indentation errors** — YAML is whitespace-sensitive. Use 2 spaces per level, never tabs. A single wrong indent can break the entire workflow.
- **Forgetting `npm ci` vs `npm install`** — Use `npm ci` in CI: it installs from `package-lock.json` and fails if the lockfile is out of date, ensuring reproducible builds.
- **Missing the `on` trigger** — A workflow file that compiles is useless if it has no trigger. Always double-check the `on:` block.
- **Not pinning Action versions** — Use `@v4` or a specific commit SHA (e.g., `@actions/checkout@v4`) instead of `@main` or `@latest` to avoid unexpected breaking changes.
- **Hardcoding secrets in the file** — Never write secrets directly in YAML. Use `${{ secrets.SECRET_NAME }}` and store values in the repository Settings.

## Verification Checklist

- [ ] `.github/workflows/ci.yml` triggers on push and pull_request to main
- [ ] CI uses a matrix strategy with Node 16, 18, and 20
- [ ] CI runs `npm ci` and `npm test` for each matrix entry
- [ ] `.github/workflows/deploy.yml` runs after CI succeeds
- [ ] A scheduled trigger (`cron`) is configured
- [ ] A secret is stored in the repository and referenced in the workflow
- [ ] I viewed workflow logs in the Actions tab
- [ ] I intentionally broke the code, observed a failure, fixed it, and saw green
