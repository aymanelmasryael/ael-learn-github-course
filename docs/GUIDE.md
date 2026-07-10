# Learn GitHub Academy — Project Guide

A comprehensive step-by-step guide to understanding, modifying, and contributing to the Learn GitHub Academy interactive course.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [File Structure](#2-file-structure)
3. [Architecture](#3-architecture)
4. [Data Layer](#4-data-layer)
5. [How to Add a New Module](#5-how-to-add-a-new-module)
6. [How to Add a New Project](#6-how-to-add-a-new-project)
7. [How to Add a New Quiz](#7-how-to-add-a-new-quiz)
8. [How to Add a New Lesson](#8-how-to-add-a-new-lesson)
9. [How to Modify the UI](#9-how-to-modify-the-ui)
10. [How to Add a New Section/Page](#10-how-to-add-a-new-sectionpage)
11. [How the Navigation Works](#11-how-the-navigation-works)
12. [Progress & State Management](#12-progress--state-management)
13. [How to Run the Project](#13-how-to-run-the-project)
14. [How to Deploy](#14-how-to-deploy)
15. [Common Tasks](#15-common-tasks)

---

## 1. Project Overview

**Learn GitHub Academy** is a fully self-contained, single-page interactive web application that teaches Git and GitHub from zero to professional level. It runs entirely in the browser with no server or build step.

### Key Features

- **3 Levels** — Git Foundation, GitHub Ecosystem, Professional Mastery (23 modules total)
- **10 Hands-on Projects** — Each teaching one Git/GitHub concept
- **Interactive Playground** — Terminal simulator, PR/Issue/Actions editors
- **Quiz System** — 2-3 questions per module with auto-grading
- **Achievements** — 12 unlockable badges
- **Progress Tracking** — Saved to browser localStorage
- **Cheat Sheet** — Git, Markdown, and Actions references
- **Glossary** — 65+ Git/GitHub terms with search
- **4 Learning Paths** — Curated paths for different goals
- **GitHub Certification Guides** — Study plans for official exams
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Fully Self-Contained** — No dependencies, no server, no build tools

### Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and sections |
| CSS3 | Styling, animations, responsive design |
| Vanilla JavaScript (ES6) | All logic, rendering, data |
| localStorage | Progress persistence |
| SVG | Logo, diagrams, social preview |

**Zero external dependencies.** No frameworks, no libraries, no build tools.

---

## 2. File Structure

```
learn-github-course/
├── learn-github-course.html    # Main HTML (skeleton + sections)
├── styles.css                  # All CSS (~890 lines)
├── app.js                      # All data + logic (~1830 lines)
├── lessons.js                  # Lesson content (loaded separately)
├── assets/
│   └── ael-logo.svg            # Logo used in navbar + about
├── diagrams/
│   ├── m1.svg ... m23.svg      # 23 module flow diagrams
├── projects/
│   ├── 01-first-repository/    # Each project has:
│   │   ├── README.md           #   - README
│   │   ├── LAB.md              #   - Lab instructions
│   │   └── index.html/js/etc   #   - Starter files
│   ├── 02-professional-readme/
│   └── ... (10 total)
├── docs/
│   └── GUIDE.md                # This file
├── screenshots/                # (empty — add your own)
├── cover.svg                   # Open Graph social preview
├── README.md                   # Project readme
├── CHANGELOG.md                # Version history
├── CONTRIBUTING.md             # Contribution guidelines
├── CODE_OF_CONDUCT.md          # Community standards
├── SECURITY.md                 # Security policy
├── LICENSE                     # MIT license
├── GHSH.md                     # Arabic cheat sheet
├── SHARH.md                    # Arabic course explanation
└── GLOSSARY.md                 # Glossary (short version)
```

### Key Files Explained

| File | Purpose | Size |
|------|---------|------|
| `learn-github-course.html` | HTML shell with sections, navbar placeholder, containers | ~140 lines |
| `styles.css` | All visual styling, animations, responsive queries | ~890 lines |
| `app.js` | All data (LEVELS, PROJECTS, QUIZZES, etc.) + rendering logic + event handling | ~1830 lines |
| `lessons.js` | Detailed lesson content for each module | Loaded separately |

---

## 3. Architecture

The app follows a **simple component-based pattern** using vanilla JavaScript:

```
learn-github-course.html
  ├── <nav>  ← rendered by JS (renderNavbar)
  ├── <main>
  │   ├── #home         ← renderHome()
  │   ├── #paths        ← renderPaths()
  │   ├── #levels       ← renderLevelsSidebar() + renderModules()
  │   ├── #projects     ← renderProjects() + renderProjectDetail()
  │   ├── #playground   ← static HTML + playgroundCommand()
  │   ├── #glossary     ← renderGlossary()
  │   ├── #cheatsheet   ← renderCheatsheet()
  │   ├── #resources    ← renderResources()
  │   ├── #certifications ← renderCertifications()
  │   └── #about        ← renderAbout()
  └── <script> (lessons.js, app.js)
```

### Rendering Flow

1. `DOMContentLoaded` fires → `APP.init()` is called
2. `init()`:
   - `loadProgress()` — reads localStorage
   - `renderNavbar()` — builds the navigation
   - `renderHome()` — builds the home page
   - `renderLevelsSidebar()` — builds level cards
   - `renderModules()` — builds module grid
   - `renderProjects()` — builds project list
   - `renderGlossary()` — builds glossary
   - `renderCheatsheet()` — builds cheat sheet tables
   - `renderResources()` — builds resources section
   - `renderAchievements()` — builds achievements grid
   - `attachEvents()` — sets up all event listeners
   - `navigate("home")` — shows the home section

### Event Handling

All events are handled via **event delegation** on `document`:
- `click` events are checked against `[data-tab]`, `[data-level]`, `[data-module]`, `[data-project]`, `[data-action]`, `[data-playground]`
- `change` events handle quiz radio buttons
- `input` events handle glossary search
- `keydown` events handle playground Enter key
- `scroll` events handle navbar background and back-to-top button

---

## 4. Data Layer

All data is defined as **JavaScript constants** at the top of `app.js`:

### `LEVELS` — The 3 course levels

```javascript
const LEVELS = [
  {
    id: "level1",
    name: "Git Foundation",
    color: "var(--primary)",
    icon: "🔧",
    duration: "6h 30m",
    finalProject: "Your first GitHub repository",
    difficulty: "Beginner",
    desc: "Master the fundamentals...",
    modules: [
      {
        id: "m1",
        num: 1,
        title: "Welcome to Git & GitHub",
        level: "l1",           // l1=Beginner, l2=Intermediate, l3=Advanced
        description: "A comprehensive introduction...",
        lessons: ["Lesson 1", "Lesson 2", ...],
        detail: "<h4>Module 1</h4><div class='sec'>...</div>"
      },
      // ... more modules
    ]
  },
  // level2, level3
]
```

### `PROJECTS` — 10 projects

```javascript
const PROJECTS = [
  {
    id: "p1",
    num: 1,
    title: "First Repository",
    icon: "📦",
    difficulty: "beginner",    // beginner | intermediate | advanced
    tags: ["Git", "GitHub", "CLI"],
    description: "Create your first repository...",
    detail: "<h4>Project 1</h4><div class='sec'>..."  // Full HTML content
  },
  // ... 9 more
]
```

### `QUIZZES` — Quiz questions per module

```javascript
const QUIZZES = {
  m1: [
    {
      question: "What is Git?",
      options: ["Version control system", "Text editor", ...],
      correct: 0              // Index of correct answer
    },
    // ...
  ],
  // m2, m3, ...
}
```

### `CHEATSHEET` — 3 sections (git, markdown, actions)

```javascript
const CHEATSHEET = {
  git: {
    title: "Git Commands",
    items: [
      { cmd: "git init", desc: "Create a new Git repository" },
      // ...
    ]
  },
  markdown: { ... },
  actions: { ... }
}
```

### Other Data

| Constant | Description |
|----------|-------------|
| `OWNER` | Author info (name, studio, links, photo) |
| `COURSE_INFO` | Course title, subtitle, description |
| `STATS` | Statistics shown on home page |
| `LEARNING_PATHS` | 4 curated learning paths (cross-level) |
| `CERTIFICATIONS` | 5 GitHub certification study guides |
| `GLOSSARY` | 65+ Git/GitHub terms with definitions |
| `ACHIEVEMENTS` | 12 achievement badges |
| `RESOURCES` | 6 categories of external learning resources |

---

## 5. How to Add a New Module

### Step 1: Add the module to LEVELS

Find the appropriate level in `app.js` and add a new module object to its `modules` array:

```javascript
// Inside LEVELS → level1 → modules array
{
  id: "m24",                    // Unique ID (m + number)
  num: 24,                      // Display number
  title: "Your New Module",
  level: "l1",                  // l1, l2, or l3
  description: "Brief description for the card",
  lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
  detail: `<h4>Module 24: Your New Module</h4>
    <div class='sec'>
      <h5>Section Title</h5>
      <p>Content here...</p>
    </div>`
}
```

### Step 2: Add quiz questions (optional)

If the module needs a quiz, add to `QUIZZES`:

```javascript
m24: [
  { question: "Your question?", options: ["A", "B", "C", "D"], correct: 0 },
  { question: "Another question?", options: ["X", "Y", "Z"], correct: 2 }
]
```

### Step 3: Add a diagram (optional)

Create `diagrams/m24.svg` with a flow diagram. The app will automatically display it if a matching lesson exists in `lessons.js`.

### Step 4: Update STATS

If you want the home page stats to reflect the new module:

```javascript
const STATS = {
  modules: 24,   // ← increment this
  lessons: 104,  // ← add 4
  // ...
}
```

---

## 6. How to Add a New Project

### Step 1: Create project files

Create a folder `projects/11-your-project-name/` with:
- `LAB.md` — Step-by-step lab instructions
- `README.md` — Project readme
- Any starter files (index.html, index.js, etc.)

### Step 2: Add the project to `PROJECTS`

```javascript
{
  id: "p11",
  num: 11,
  title: "Your Project Title",
  icon: "🚀",                    // Emoji icon
  difficulty: "intermediate",    // beginner | intermediate | advanced
  tags: ["Git", "GitHub", "SpecificTag"],
  description: "Short description for the card",
  detail: `<h4>Project 11: Your Project Title</h4>
    <div class='sec'>
      <h5>Concept</h5>
      <p>What this project teaches...</p>
    </div>
    <div class='sec'>
      <h5>Steps</h5>
      <ol>
        <li>Step 1...</li>
      </ol>
    </div>`
}
```

### Step 3: Update STATS

```javascript
const STATS = {
  projects: 11,  // ← increment
  // ...
}
```

---

## 7. How to Add a New Quiz

Add to the `QUIZZES` object in `app.js`:

```javascript
m24: [
  {
    question: "What does the command 'git status' do?",
    options: [
      "Shows the working tree status",
      "Creates a new repository",
      "Deletes a branch",
      "Pushes to remote"
    ],
    correct: 0    // Index of correct answer (0-based)
  },
  {
    question: "Second question?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 2
  }
]
```

**Rules:**
- Each question must have exactly 4 options
- `correct` must be the 0-based index of the right answer
- A module can have 2-3 questions (the UI adapts automatically)

---

## 8. How to Add a New Lesson

Lesson content is stored in `lessons.js` (loaded separately from `app.js`).

Add a new entry:

```javascript
const LESSONS = {
  m24: {
    id: "m24",
    title: "Module 24: Your New Module",
    overview: "Brief module overview paragraph...",
    objectives: [
      "Objective 1",
      "Objective 2",
      "Objective 3"
    ],
    prerequisites: "What the learner should know first",
    theory: "Detailed theoretical explanation...",
    concepts: [
      { term: "Key Term", def: "Definition of the term" },
      // ...
    ],
    commands: [
      { cmd: "git command", desc: "What this command does" }
      // or leave as empty array: []
    ],
    syntax: "<pre><code>example code here</code></pre>",
    examples: [
      { desc: "Example description", code: "code block content" }
    ],
    bestPractices: [
      "Best practice 1",
      "Best practice 2"
    ],
    commonMistakes: [
      { mistake: "Common mistake", fix: "How to fix it" }
    ],
    exercise: "Exercise description and instructions",
    lab: "Lab instructions",
    summary: "Module summary paragraph",
    nextModule: "Name of the next module"
  }
};
```

The lesson is automatically displayed when a user clicks on a module card.

---

## 9. How to Modify the UI

### Colors & Theme

All colors are defined as CSS custom properties in `:root` in `styles.css`:

```css
:root {
  --primary: #0074FF;
  --primary-dark: #0052b3;
  --primary-light: #4d9bff;
  --primary-glow: rgba(0,116,255,.25);
  --secondary: #3fb950;
  --accent: #d2a8ff;
  --gold: #ffd700;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --bg-deep: #030712;
  --bg-card: rgba(5,12,24,.7);
  --text-primary: #eef2ff;
  --text-secondary: #9ab3e6;
  --text-muted: #64748b;
  --border-color: rgba(0,116,255,.25);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --font-mono: 'SF Mono','Fira Code','Cascadia Code','JetBrains Mono',monospace;
  --font-sans: -apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;
}
```

To change the theme, modify these values. The entire app uses these variables.

### Cards & Containers

Most cards use the `.glass` class:
```css
.glass {
  background: var(--bg-card);
  backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid var(--border-color);
}
```

### Layout

The main container is `max-width: 1100px` and centered:
```css
.container { width: 100%; max-width: 1100px; margin: 0 auto; }
```

To make a section full-width, override the container or use a separate wrapper.

### Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| `max-width: 768px` | Tablet / small laptop |
| `max-width: 480px` | Mobile phones |

Each breakpoint adjusts grids, padding, and typography.

---

## 10. How to Add a New Section/Page

### Step 1: Add the section to HTML

```html
<section class="section" id="mypage">
  <div class="container">
    <div class="section-header">
      <div class="section-badge">🚀 My Page</div>
      <h2>Page Title</h2>
      <p>Page description</p>
    </div>
    <div id="mypage-container"></div>
  </div>
</section>
```

### Step 2: Add a render method in `app.js`

```javascript
renderMyPage() {
  const el = document.getElementById("mypage-container");
  if (!el) return;
  el.innerHTML = `
    <!-- Your content here -->
  `;
}
```

### Step 3: Add a nav tab

In `renderNavbar()`, add a new tab:
```javascript
<span class="nav-tab" data-tab="mypage">My Page</span>
```

### Step 4: Add navigation in `navigate()`

```javascript
if (tab === "mypage") this.renderMyPage();
```

That's it. The event delegation system handles clicks on `[data-tab="mypage"]` automatically.

---

## 11. How the Navigation Works

### Section Switching

Each section is a `<section class="section" id="sectionName">`. Only one section has `.active` at a time. The `navigate(tab)` function:

1. Sets `this.state.tab = tab`
2. Removes `.active` from all sections
3. Removes `.active` from all nav tabs
4. Adds `.active` to the target section and nav tab
5. Calls the appropriate render function

### URL Hash

Currently, the app does NOT use URL hashes for deep linking. This means refreshing the page always returns to Home. To add hash-based routing, add:

```javascript
// In navigate():
window.location.hash = tab;

// In init():
const hash = window.location.hash.replace("#", "");
if (hash) this.navigate(hash);
```

### Level Switching

Clicking a level card calls `showLevel(levelId)`:
1. Sets `this.state.level = levelId`
2. Clears module detail
3. Re-renders modules grid for the selected level

### Module Navigation

Clicking a module card calls `showModule(moduleId)`:
1. Finds which level contains the module
2. Sets the level and navigates to Levels tab
3. Renders the module detail view
4. Scrolls to it

---

## 12. Progress & State Management

### State Object

```javascript
state: {
  tab: "home",
  level: "level1",
  module: null,
  project: null,
  playground: "terminal",
  quizResults: {},           // { moduleId: { correct, total, pct } }
  completedModules: [],      // ["m1", "m3", ...]
  projectProgress: [],       // ["p1", ...]
  glossaryViewed: [],        // ["Branch", "Commit", ...]
  quizAnswers: {}            // { "m1-0": 2, "m1-1": 0, ... }
}
```

### Persistence

Progress is saved to `localStorage` automatically:
- `learn-github-progress` — All state except achievements
- `learn-github-achievements` — Array of unlocked achievement IDs

### Achievement System

12 achievements auto-unlock based on progress:

| ID | Condition |
|----|-----------|
| a1 | Complete 1 module |
| a2 | Complete module m4 (Branching) |
| a3 | Complete module m6 (PRs) |
| a4 | Complete all level1 modules |
| a5 | Complete all level2 modules |
| a6 | Complete all level3 modules |
| a7 | Complete 1 project |
| a8 | Complete 5 projects |
| a9 | Answer 10 quiz questions correctly |
| a10 | Browse 20 glossary terms |
| a11 | Complete all 23 modules |
| a12 | Get 100% on any quiz |

---

## 13. How to Run the Project

### Option A: Open directly in browser

```bash
open learn-github-course.html
```

The app runs entirely client-side. No server needed.

### Option B: Serve with a local server (for development)

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then open `http://localhost:8000` in your browser.

### Option C: VS Code Live Server

If you use VS Code, install the **Live Server** extension, right-click on `learn-github-course.html`, and select "Open with Live Server".

---

## 14. How to Deploy

### GitHub Pages (Recommended)

1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select the branch (e.g., `main`) and folder (`/root`)
4. Your app will be live at `https://your-username.github.io/learn-github-course/`

### Any Static Host

Since the app is 100% static (HTML + CSS + JS), you can deploy to:
- **Netlify** — Drag-and-drop the folder
- **Vercel** — Connect your Git repository
- **Cloudflare Pages** — Connect your Git repository
- **Any web server** — Just copy the files

### Before Deployment

- [ ] Update `OWNER` info in `app.js` with your details
- [ ] Update the favicon if desired (inline SVG in HTML `<head>`)
- [ ] Add Open Graph meta tags for social sharing
- [ ] Take screenshots and add them to `screenshots/`
- [ ] Update `README.md` with your deployment URL
- [ ] Update `cover.svg` with your branding

---

## 15. Common Tasks

### Change the Owner/Authorship

Edit the `OWNER` constant in `app.js`:

```javascript
const OWNER = {
  name: "Your Name",
  studio: "Your Studio",
  title: "Your Title",
  photo: "assets/your-logo.svg",
  website: "https://your-website.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  tagline: "Your tagline"
};
```

### Change the Course Description

Edit `COURSE_INFO.description` in `app.js`.

### Update the Statistics

Edit the `STATS` object in `app.js`:

```javascript
const STATS = {
  modules: 23,
  lessons: 100,
  projects: 10,
  labs: 40,
  commands: 150,
  diagrams: 80,
  quizzes: 200,
  cheatSheets: 8,
  hours: "20+",
  certificate: "Included"
};
```

### Add a Cheat Sheet Section

Add to the `CHEATSHEET` object in `app.js`:

```javascript
const CHEATSHEET = {
  git: { ... },
  markdown: { ... },
  actions: { ... },
  yourNewSection: {
    title: "Your Section Title",
    items: [
      { cmd: "item-name", desc: "Description" }
    ]
  }
};
```

Also add an icon mapping in `renderCheatsheet()`.

### Add a Resource Category

Add to the `RESOURCES` array in `app.js`:

```javascript
{
  category: "Your Category",
  icon: "📚",
  items: [
    { title: "Resource Title", url: "https://...", desc: "Description" }
  ]
}
```

### Add an Achievement

Add to the `ACHIEVEMENTS` array and add the unlock condition to `checkAchievements()`:

```javascript
// In ACHIEVEMENTS:
{ id: "a13", title: "Achievement Title", icon: "🏆", desc: "Description", unlocked: false }

// In checkAchievements():
const checks = {
  // ...
  a13: /* your condition here */
};
```

### Change the Playground Behavior

Edit the `playgroundCommand()` method in `app.js`. The playground simulates Git commands with state tracking. Add new command handlers in the `if/else` chain starting at line ~1480.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Progress lost on browser close | localStorage is per-origin. Make sure you're using the same URL |
| Diagrams not showing | Check `diagrams/` folder has the matching SVG file (e.g., `m24.svg`) |
| Quizzes not working | Verify the quiz data structure matches the expected format |
| Module detail not showing | Check that the module ID is correctly linked in LEVELS data |
| CSS changes not visible | Hard refresh (Cmd+Shift+R) to clear browser cache |
| Mobile layout broken | Test in Chrome DevTools device mode; update media queries |

---

> **Last updated:** July 2026
> **Author:** Ayman Elmasry — AEL Digital Studio
> **License:** MIT
