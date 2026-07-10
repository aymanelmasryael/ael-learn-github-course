# Lab 01 — First Repository

## Learning Objectives

- Initialize a Git repository locally with `git init`
- Understand the working directory, staging area, and repository states using `git status`
- Stage and commit files using `git add` and `git commit`
- Create a remote repository on GitHub through the browser
- Connect a local repository to GitHub with `git remote add`
- Push commits to a remote repository with `git push -u origin main`

## Prerequisites

- Git installed on your machine (run `git --version` to verify)
- A GitHub account
- Basic terminal / command-line skills (navigating directories, creating files)
- A text editor (VS Code, Sublime Text, or any editor)

## Task List

1. Create a new folder for your project: `mkdir my-first-repo && cd my-first-repo`
2. Initialize Git: `git init`
3. Run `git status` and confirm you see a clean repository with no commits yet
4. Create `index.html` and `README.md` in the folder (starter files provided)
5. Stage the files: `git add index.html README.md`
6. Run `git status` again — notice the files are now green (staged)
7. Commit the changes: `git commit -m "Initial commit: add index.html and README"`
8. Run `git log --oneline` to see your first commit
9. Go to github.com, log in, click the **+** icon → **New repository**
10. Name it `my-first-repo`, keep it public, **do not** initialize with README, click **Create repository**
11. Copy the remote URL shown (HTTPS or SSH)
12. Connect your local repo to GitHub: `git remote add origin <paste-url>`
13. Push your code: `git push -u origin main`
14. Refresh the GitHub page — your files should now be visible

## Expected Result

- A GitHub repository named `my-first-repo` containing `index.html` and `README.md`
- The commit message "Initial commit: add index.html and README" visible in the commit history
- `git status` shows `nothing to commit, working tree clean`
- `git log` shows at least one commit

## Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| Forgetting `git init` | Running `git add` or `git commit` before `git init` will fail with "not a git repository" |
| Using `git add .` without checking first | Always run `git status` to see what will be staged; you might accidentally commit unwanted files |
| Wrong remote URL | Using `https` when you meant `SSH` (or vice versa) will cause authentication errors. Double-check the URL format |
| Not using `-u` on first push | `git push -u origin main` sets the upstream tracking reference; without it, future `git push` commands need the full branch name |
| Closing the terminal before committing | If you create files but never commit, they exist only on your local machine. Always `git commit` and `git push` |

## Verification Checklist

- [ ] `git init` created a `.git` folder (visible with `ls -a`)
- [ ] `git status` shows a clean working tree
- [ ] `git log --oneline` shows at least one commit
- [ ] The GitHub repository page displays the pushed files
- [ ] The commit message matches what you wrote
