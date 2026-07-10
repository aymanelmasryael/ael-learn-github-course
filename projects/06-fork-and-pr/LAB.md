# Lab 06: Fork & Pull Request

## Learning Objectives

- Fork a public repository on GitHub to create your own copy
- Configure a local clone with both `origin` and `upstream` remotes
- Create a feature branch, make changes, and push to your fork
- Open a Pull Request and participate in code review
- Understand merge options: merge commit, squash, and rebase

## Prerequisites

- Git installed and configured (`git config --global user.name` / `user.email`)
- A GitHub account with an SSH key or PAT configured
- Basic Git workflow: clone, add, commit, push
- Familiarity with branching (`git switch -c`, `git branch`)

## Task List

1. **Fork the repository** — Go to `https://github.com/octocat/Hello-World` (or any public repo) and click the **Fork** button. Leave the default options and create your fork.
2. **Clone your fork** — `git clone https://github.com/YOUR-USERNAME/Hello-World.git` then `cd Hello-World`
3. **Add upstream remote** — `git remote add upstream https://github.com/octocat/Hello-World.git` then verify with `git remote -v`
4. **Create a feature branch** — `git switch -c improve-readme`
5. **Make changes** — Edit `README.md` to add a "Getting Started" section. Stage and commit: `git add README.md && git commit -m "add getting started section"`
6. **Push to your fork** — `git push -u origin improve-readme`
7. **Open a Pull Request** — On GitHub, click "Compare & pull request". Write a descriptive title and body using `PULL_REQUEST_TEMPLATE.md` as a guide. Submit the PR.
8. **Request a review** — Add a classmate or colleague as a reviewer. Respond to any feedback by pushing additional commits to the same branch.
9. **Merge the PR** — After approval, click **Merge pull request**. Try each merge option:
   - **Create a merge commit** (preserves full history)
   - **Squash and merge** (combines all commits into one)
   - **Rebase and merge** (reapplies commits with linear history)

## Expected Result

- Your fork exists under your GitHub account with the note "forked from original/repo"
- The local repo has two remotes: `origin` (your fork) and `upstream` (the original)
- A Pull Request was created, reviewed, and merged via one of the merge methods
- Your local `main` branch is up to date with upstream: `git pull upstream main`

## Common Mistakes

- **Pushing directly to the original repo** — You do not have write access to the upstream. Always push to `origin` (your fork) and open a PR from there.
- **Forgetting to sync your fork before starting** — Always run `git pull upstream main` first to avoid conflicts. A stale fork leads to merge headaches.
- **Working on `main` instead of a feature branch** — PRs should come from a descriptive branch name (`feature/xxx`, `bugfix/xxx`), not from `main`.
- **Not pulling changes after a PR is merged** — After your PR merges, update your local `main`: `git checkout main && git pull upstream main` then push to your fork.
- **Confusing merge options** — Merge commit preserves all commits, squash collapses them, and rebase rewrites history. Choose based on project policy.

## Verification Checklist

- [ ] I forked a public repository on GitHub
- [ ] I cloned my fork locally and verified remotes (`git remote -v` shows `origin` and `upstream`)
- [ ] I created and switched to a feature branch
- [ ] I made changes, committed, and pushed to my fork
- [ ] I opened a Pull Request with a title and description
- [ ] I requested a review and responded to feedback (if any)
- [ ] I merged the PR using one of the merge options
- [ ] I synced my local `main` with upstream after merging
