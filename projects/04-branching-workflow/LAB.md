# Lab 04 — Branching Workflow

## Learning Objectives

- List, create, and switch branches using `git branch`, `git switch`, and `git checkout`
- Use branch naming conventions (`feature/`, `bugfix/`, `hotfix/`)
- Make independent changes in separate branches
- Perform a fast-forward merge when there are no divergent commits
- Perform a 3-way merge when branches have diverged
- Delete merged branches with `git branch -d`

## Prerequisites

- A Git repository with at least one commit on `main`
- Ability to stage and commit changes (`git add`, `git commit`)
- Basic understanding of Git history (`git log`)

## Task List

1. Verify you are on the `main` branch: `git branch` (the `*` indicates your current branch)
2. Create and switch to a new feature branch:
   ```bash
   git switch -c feature/navbar
   ```
3. Edit `index.html` to add a `<nav>` element with links (Home, About, Contact). Stage and commit:
   ```bash
   git add index.html
   git commit -m "Add navigation bar"
   ```
4. Switch back to `main`:
   ```bash
   git switch main
   ```
5. Merge the feature branch using a fast-forward merge:
   ```bash
   git merge feature/navbar
   ```
   Since `main` had no new commits, Git fast-forwards the pointer.
6. Delete the merged branch:
   ```bash
   git branch -d feature/navbar
   ```
7. Create two branches that will diverge:
   ```bash
   git switch -c feature/footer
   ```
   Edit `index.html` to add a `<footer>` section. Stage and commit.
8. Switch back to `main` and make a **different** change (e.g., update the `<header>`). Stage and commit. Now `main` and `feature/footer` have diverged.
9. Merge `feature/footer` into `main`:
   ```bash
   git switch main
   git merge feature/footer
   ```
   Because both branches have new commits, Git creates a 3-way merge commit.
10. Delete `feature/footer` after merge
11. Repeat the process for a branch called `feature/sidebar` or `bugfix/typo`, practicing both fast-forward and 3-way merges

## Expected Result

- A Git log that shows both fast-forward merges (linear history) and 3-way merges (merge commits with two parents)
- All feature branches are deleted after they are merged
- `git branch` shows only `main` (and any unmerged branches)
- The `index.html` file contains contributions from multiple branches (navbar, footer, etc.)

## Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| Forgetting to commit before switching branches | Uncommitted changes can "follow" you to the new branch or cause merge conflicts. Always commit or stash before switching |
| Creating a branch but never switching to it | `git branch feature-x` creates the branch but you stay on `main`. Use `git switch feature-x` or `git switch -c feature-x` |
| Not deleting branches after merging | Old branches pile up. Delete with `git branch -d <name>` after a successful merge |
| Naming branches poorly | Use consistent conventions: `feature/add-login`, `bugfix/fix-typo`, `hotfix/security-patch`. Avoid vague names like `my-branch` |
| Merging without being on the target branch | You must be on the branch you want to merge **into** (usually `main`), then run `git merge <source>` |

## Verification Checklist

- [ ] `git branch` shows only `main` and any unmerged branches
- [ ] `git log --oneline --graph` shows a clear branch structure with both fast-forward and 3-way merge history
- [ ] `index.html` contains a navbar, footer, or other elements added via branches
- [ ] At least one merge commit exists (visible in `git log`)
- [ ] Deleted branches no longer appear in `git branch`
