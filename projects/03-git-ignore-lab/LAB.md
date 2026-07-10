# Lab 03 — Git Ignore Lab

## Learning Objectives

- Create and configure a `.gitignore` file from scratch
- Write `.gitignore` patterns: exact filenames, directories, wildcards, and negation
- Use gitignore.io to generate comprehensive ignore rules
- Test ignore rules with `git status --ignored`
- Prevent sensitive files (`.env`, `secret.config.js`, `*.log`) from being tracked by Git

## Prerequisites

- A local Git repository (clone this project or run `git init` in the lab folder)
- Ability to stage and commit files (`git add`, `git commit`)
- Basic understanding of file paths and glob patterns

## Task List

1. Look at the existing files in the project: `index.js`, `secret.config.js`, `.env.example`, `build/bundle.js`. Imagine which of these should **not** be committed to Git
2. Create a file named `.gitignore` in the project root
3. Add the following patterns (one per line):
   - `node_modules/` — ignore the npm dependencies folder
   - `.env` — ignore environment variable files
   - `*.log` — ignore all log files
   - `build/` — ignore the entire build output directory
   - `.DS_Store` — ignore macOS system files
4. Save `.gitignore` and run `git status --ignored` to verify that `build/bundle.js` and (if present) `.env` are listed as ignored
5. Add a negation pattern. Create a file `build/.gitkeep` and add `!build/.gitkeep` to `.gitignore` so the build folder itself can be tracked with a placeholder
6. Commit `.gitignore` with message: `git commit -m "Add .gitignore with common patterns"`
7. Visit [gitignore.io](https://www.toptal.com/developers/gitignore) and generate a file for your tech stack (e.g., `Node`, `macOS`, `VisualStudioCode`). Add any missing patterns to your `.gitignore`
8. Run `git status --ignored` again and confirm no secrets or build artifacts appear in the tracked files

## Expected Result

- A `.gitignore` file exists in the project root
- Running `git status --ignored` shows `build/bundle.js`, `*.log`, `.env`, and other matched files under the "Ignored files" section
- `git add .` does not stage any ignored files (they remain greyed out in `git status`)
- `secret.config.js` can be staged for commit only if the student intentionally removes its pattern from `.gitignore` (but the lab teaches them **not** to)

## Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| Forgetting the trailing `/` on directories | `build` matches a file named `build`, but `build/` matches only a directory |
| Adding `.env` after it was already tracked | If `.env` was already committed, `.gitignore` won't ignore it. Use `git rm --cached .env` first |
| Using `*` too broadly | `*` in the wrong place can ignore everything in a folder. Test with `git status --ignored` |
| Not committing `.gitignore` itself | The `.gitignore` file must be staged and committed like any other file for the rules to apply to other collaborators |
| Ignoring `.env.example` instead of `.env` | The `.env.example` file is safe to share (it contains placeholder values); `.env` contains real secrets and should be ignored |

## Verification Checklist

- [ ] `.gitignore` file exists in the project root
- [ ] `git status --ignored` lists `build/`, `*.log`, `.env` patterns under "Ignored files"
- [ ] `git add .` does not stage any ignored files
- [ ] `secret.config.js` is NOT ignored by default (the student must decide whether to include it)
- [ ] `.env.example` is NOT ignored (it should be tracked as a template)
- [ ] A commit exists with the message "Add .gitignore with common patterns"
