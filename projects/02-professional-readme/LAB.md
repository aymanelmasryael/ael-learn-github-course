# Lab 02 — Professional README

## Learning Objectives

- Write structured Markdown using heading hierarchy (`#` through `######`)
- Apply text formatting: bold, italic, inline code, blockquotes, horizontal rules
- Create ordered and unordered lists, including nested lists
- Insert images and links with descriptive alt text
- Build tables with aligned columns
- Generate and embed shields.io badges
- Write task lists (checklists) and use emoji in Markdown
- Embed raw HTML in Markdown files

## Prerequisites

- A GitHub repository (use the one from Lab 01 or create a new one)
- A text editor capable of writing Markdown (VS Code recommended)
- Basic familiarity with Markdown syntax

## Task List

1. In your project folder, create or edit `README.md`
2. Add a top-level heading (`#`) with your project name
3. Add a shields.io badge row under the title (e.g., license, build status, version):
   ```markdown
   ![License](https://img.shields.io/badge/license-MIT-blue)
   ```
4. Write a short description paragraph using plain text
5. Add a **Table of Contents** section using a bulleted or numbered list with links
6. Create an **Installation** section with a fenced code block using language highlighting:
   ````markdown
   ```bash
   npm install
   ```
   ````
7. Create a **Usage** section with a JavaScript/Node.js code block
8. Add a **Features** section with a task list (`- [x]` and `- [ ]`)
9. Create a **Technologies** table with at least 3 columns (Name, Version, Purpose)
10. Add a **Contributing** section that includes at least one emoji
11. Add a **License** section using an HTML `<details>` block
12. Commit and push the file to GitHub and verify it renders correctly

## Expected Result

- A rendered README.md on GitHub that includes: badges, headings, a table of contents with working anchor links, syntax-highlighted code blocks, a table, a task list with checked and unchecked items, emoji, and a collapsible HTML section
- The file is readable both on GitHub and in any Markdown viewer

## Common Mistakes

| Mistake | Explanation |
|---------|-------------|
| Forgetting a space after `#` | `#Heading` is not a heading; Markdown requires `# Heading` with a space |
| Broken badge URLs | shields.io badges use URL-encoded parameters; test the URL in a browser before adding it |
| Tables without alignment markers | Column alignment (`:--`, `--:`, `:--:`) is optional but recommended for proper formatting |
| Task list items without proper spacing | GitHub requires a space after `-` and before `[x]`: `- [x] done` |
| HTML not separated from Markdown | Some Markdown parsers require a blank line before and after raw HTML blocks |

## Verification Checklist

- [ ] Badge images appear at the top of the README
- [ ] Clicking a Table of Contents link scrolls to the correct section
- [ ] Code blocks have syntax highlighting matching the specified language
- [ ] The table renders with proper borders and alignment
- [ ] Task list items show real checkboxes (not plain text)
- [ ] Emoji renders as a graphic symbol on GitHub
- [ ] The HTML `<details>` block is collapsible on GitHub
