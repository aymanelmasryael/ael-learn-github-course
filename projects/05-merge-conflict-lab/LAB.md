# Lab 05 — Merge Conflict Lab

## Learning Objectives

- Create a merge conflict by editing the same lines in two branches
- Read and understand conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`
- Manually resolve conflicting changes by choosing, combining, or rewriting code
- Stage the resolved file and complete the merge with `git add` and `git commit`
- Abort a merge safely with `git merge --abort`
- Apply best practices to minimize merge conflicts

## Prerequisites

- A Git repository with `index.html` and `style.css` on the `main` branch
- Understanding of branching and merging (Lab 04)
- A text editor capable of finding and editing conflict markers

## Task List

1. Make sure you start on `main` with a clean working tree (`git status` shows nothing to commit)
2. Create a branch for changing the title:
   ```bash
   git switch -c feature/title-change
   ```
3. In `index.html`, change the `<h1>` text from `"Welcome to Merge Conflict Lab"` to `"Merge Conflicts — Now with Extra Drama!"`. Also change the `.title` color in `style.css` from `blue` to `red`.
4. Stage and commit:
   ```bash
   git add index.html style.css
   git commit -m "Change title and color on feature branch"
   ```
5. Switch back to `main`:
   ```bash
   git switch main
   ```
6. On `main`, change the **same** `<h1>` text to `"Merge Conflict Lab — Main Branch Edition"`. Also change the `.title` color to `green`.
7. Stage and commit:
   ```bash
   git add index.html style.css
   git commit -m "Change title and color on main"
   ```
8. Merge the feature branch:
   ```bash
   git merge feature/title-change
   ```
9. Git reports a **merge conflict**. Read the output carefully — it tells you which file(s) have conflicts
10. Open `index.html` in your editor. You will see:
    ```
    <<<<<<< HEAD
    <h1>Merge Conflict Lab — Main Branch Edition</h1>
    =======
    <h1>Merge Conflicts — Now with Extra Drama!</h1>
    >>>>>>> feature/title-change
    ```
11. Decide which title to keep (or write a completely new one). Delete the conflict markers and the unwanted line
12. Do the same for `style.css` (resolve the `.title` color conflict)
13. Stage the resolved files:
    ```bash
    git add index.html style.css
    ```
14. Complete the merge:
    ```bash
    git commit -m "Resolve merge conflict between main and feature/title-change"
    ```
15. (Optional) Delete the feature branch: `git branch -d feature/title-change`
16. **Bonus**: Before step 8, practice the escape hatch by running `git merge --abort`. This cancels the merge and returns to the pre-merge state

## Expected Result

- A successful merge commit that resolved conflicts in `index.html` and `style.css`
- The final `index.html` contains the chosen title (no conflict markers remain)
- The final `style.css` contains the chosen color
- `git log` shows the merge commit with two parent commits
- The working tree is clean after resolution

## Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| Accidentally deleting the conflict markers but keeping both versions | After removing `<<<<<<<`, `=======`, `>>>>>>>`, only **one** version should remain (or a combined version). Leaving both will compile/run incorrectly |
| Resolving in the editor but forgetting `git add` | Git does not know the conflict is resolved until you `git add` the file. The merge is incomplete until you do |
| Using `git commit` without `git add` first | After resolving, you must `git add` before `git commit`. A direct `git commit` will fail because Git still sees unmerged paths |
| Editing the wrong file | Always check the merge output: `git status` lists every conflicted file. Resolve **all** of them |
| Not aborting when stuck | If a merge conflict is too complex, run `git merge --abort` to go back to the clean state and start over. Do not force-push or delete branches |

## Verification Checklist

- [ ] `git log --oneline --graph` shows a merge commit with two parent branches
- [ ] `index.html` and `style.css` contain NO conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- [ ] `git status` shows a clean working tree
- [ ] The chosen title renders as expected in the browser
- [ ] The chosen color is applied to `.title` in CSS
- [ ] (Optional) `git merge --abort` was tested and returns to the clean pre-merge state
