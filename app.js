/* ============================================================
   Learn GitHub Course — Interactive Web App
   All data inline, fully self-contained
   ============================================================ */

/* ============================================================
   OWNER — AEL Digital Studio / Ayman Elmasry
   ============================================================ */

const OWNER = {
  name: "Ayman Elmasry",
  studio: "AEL Digital Studio",
  title: "Software Engineer & Technical Instructor",
  photo: "assets/ael-logo.svg",
  website: "https://www.aymanelmasry.com",
  github: "https://github.com/aymanelmasryael",
  linkedin: "https://www.linkedin.com/in/aymanelmasryael/",
  tagline: "Building digital experiences & teaching Git and GitHub"
};

/* ============================================================
   COURSE INFO
   ============================================================ */

const COURSE_INFO = {
  title: "Learn GitHub: From Zero to Professional",
  subtitle: "Interactive Written Academy",
  description: `Learn Git and GitHub from the ground up, then apply Artificial Intelligence (AI) agents to automate development workflows. This course takes you from installing Git and creating your first repository to submitting pull requests, contributing to open source, and building custom AI agents with Model Context Protocol (MCP).
  
You will start with Git fundamentals: initializing repositories, staging and committing changes, and safely undoing work with revert and reset. From there, you will connect local repositories to GitHub using push, pull, and clone, and learn to collaborate through branching, pull requests, and code review. The course covers community workflows including forking, issue tracking, and automating Continuous Integration and Continuous Delivery (CI/CD) pipelines with GitHub Actions. You will also configure gitignore patterns to keep sensitive files out of version control and write effective README documentation in Markdown.
  
The final module introduces AI agents on GitHub: the progression from code-completion assistants to autonomous agents, how agents interact with repositories and Application Programming Interfaces (APIs) through tool execution, task selection criteria, security boundaries, and building custom agents that connect to external tools via MCP.`
};

const STATS = {
  modules: 23, lessons: 100, projects: 10, labs: 40,
  commands: 150, diagrams: 80, quizzes: 200,
  cheatSheets: 8, hours: "20+", certificate: "Included"
};

/* ============================================================
   LEARNING PATHS — 4 Learning Paths
   ============================================================ */

const LEARNING_PATHS = [
  {
    id: "path1", title: "Git Foundations",
    subtitle: "Master Version Control",
    icon: "🔧",
    color: "#58a6ff",
    modules: ["m1","m2","m3","m4","m5","m6"],
    description: "Covers Git version control fundamentals, repository initialization, staging and committing, undoing changes, connecting to GitHub, and synchronizing with remote repositories via push, pull, and clone.",
    duration: "6h 38m",
    level: "Beginner"
  },
  {
    id: "path2", title: "GitHub Collaboration",
    subtitle: "Team & Open Source Workflows",
    icon: "🤝",
    color: "#3fb950",
    modules: ["m7","m8","m9","m10","m11","m12","m13","m14","m15","m16"],
    description: "Covers branching strategies, pull request workflows, forking for open source contribution, issue tracking, GitHub Actions for Continuous Integration and Continuous Delivery (CI/CD), gitignore configuration, and README documentation.",
    duration: "8h 15m",
    level: "Intermediate"
  },
  {
    id: "path3", title: "AI Agents on GitHub",
    subtitle: "Copilot, MCP & Automation",
    icon: "🤖",
    color: "#d2a8ff",
    modules: ["m14","m17","m18","m19","m22"],
    description: "Covers the evolution from AI assistants to autonomous agents, how GitHub agents interact with repositories and tools, task selection criteria for agent automation, agent security and permission boundaries, and building custom agents with Model Context Protocol (MCP).",
    duration: "4h 30m",
    level: "Intermediate"
  },
  {
    id: "path4", title: "Capstone Project",
    subtitle: "Build a Professional Repository",
    icon: "🏆",
    color: "#f0883e",
    modules: ["m20","m21","m23","p10"],
    description: "A culminating project that integrates Git fundamentals, GitHub collaboration workflows, and AI agent capabilities into a complete development workflow, evaluated against real-world team collaboration standards.",
    duration: "3h",
    level: "Advanced"
  }
];

/* ============================================================
   CERTIFICATIONS — GitHub Certification Paths
   ============================================================ */

const CERTIFICATIONS = [
  {
    id: "c1", title: "GitHub Foundations",
    description: "Measures your understanding of Git, GitHub, collaboration, and project management.",
    hours: "10h", difficulty: "Beginner",
    icon: "📘",
    skills: ["Git fundamentals","Repository management","Pull requests","Issues & Projects","GitHub Pages"],
    recommendedModules: ["m1","m2","m3","m4","m5","m6","m7","m8"],
    studyPlan: "Complete the Git Foundation level (modules 1-6), then study Issues (m7) and GitHub Pages (m8). Practice with projects 1-4."
  },
  {
    id: "c2", title: "GitHub Administration",
    description: "Measures your ability to manage, maintain, and secure GitHub environments.",
    hours: "12h", difficulty: "Intermediate",
    icon: "🛡️",
    skills: ["Organization management","Authentication & security","Repository policies","Enterprise settings","Audit logging"],
    recommendedModules: ["m17","m21","m12","m16"],
    studyPlan: "Focus on Organizations (m17), Repository Management (m21), Security (m12), and Products (m16)."
  },
  {
    id: "c3", title: "GitHub Actions",
    description: "Measures your ability to automate workflows and build CI/CD pipelines.",
    hours: "15h", difficulty: "Intermediate",
    icon: "⚡",
    skills: ["Workflow creation","YAML syntax","Custom actions","Self-hosted runners","Deployment"],
    recommendedModules: ["m9","m22","m10"],
    studyPlan: "Master GitHub Actions (m9) first, then CI/CD Pipelines (m22) and Projects (m10). Complete project 9."
  },
  {
    id: "c4", title: "GitHub Advanced Security",
    description: "Measures your ability to secure code with GitHub security features.",
    hours: "14h", difficulty: "Advanced",
    icon: "🔒",
    skills: ["Code scanning","Secret scanning","Dependabot","CodeQL","Security policies"],
    recommendedModules: ["m12","m21","m17"],
    studyPlan: "Start with Security & Dependabot (m12), then Repository Management (m21) for security policies."
  },
  {
    id: "c5", title: "GitHub Copilot",
    description: "Measures your ability to leverage AI-assisted development with Copilot.",
    hours: "8h", difficulty: "Intermediate",
    icon: "🤖",
    skills: ["Copilot setup","Prompt engineering","Agent mode","Code review","Testing"],
    recommendedModules: ["m14"],
    studyPlan: "Complete module 14 on Copilot, then practice prompt engineering in your daily workflow."
  }
];

/* ============================================================
   LEVELS & MODULES
   ============================================================ */

const LEVELS = [
  {
    id: "level1", name: "Git Foundation", color: "var(--primary)", icon: "🔧", duration: "6h 30m",
    finalProject: "Your first GitHub repository", difficulty: "Beginner",
    desc: "Master the fundamentals of version control with Git and basic GitHub concepts.",
    modules: [
      {
        id: "m1", num: 1, title: "Welcome to Git & GitHub", level: "l1",
        description: "A comprehensive introduction to version control and GitHub.",
        lessons: ["Introduction to Version Control","Git vs GitHub","The Three States of Git","Basic Terminal Commands"],
        detail: "<h4>Module 1: Welcome to Git & GitHub</h4><div class='sec'><h5>What is Version Control?</h5><p>Version Control is a system that records changes to files over time. You can revert to previous versions, compare changes, and collaborate with your team without fear of losing work.</p><h5>Git vs GitHub</h5><p><strong>Git</strong>: A distributed version control system that runs on your local machine. <strong>GitHub</strong>: A cloud platform that hosts Git repositories and adds collaborative features like Pull Requests and Issues.</p><h5>The Three States of Git</h5><p>Any file in Git goes through three states: <strong>Working Directory</strong> where you modify files, <strong>Staging Area</strong> where you prepare files for commit, <strong>Repository</strong> where changes are saved permanently.</p><div style='direction:ltr;text-align:left'><pre>git init\n</pre></div></div>"
      },
      {
        id: "m2", num: 2, title: "Installing & Configuring Git", level: "l1",
        description: "Installing Git and setting up your environment.",
        lessons: ["Installing Git on All Systems","Initial Setup with git config","SSH Keys Setup","Git Identity"],
        detail: "<h4>Module 2: Installing & Configuring Git</h4><div class='sec'><h5>Installing Git</h5><p><strong>macOS:</strong> Use Homebrew: <div style='direction:ltr;text-align:left'><pre>brew install git\n</pre></div><strong>Windows:</strong> Download from git-scm.com or use <div style='direction:ltr;text-align:left'><pre>winget install Git.Git\n</pre></div><strong>Linux (Ubuntu/Debian):</strong> <div style='direction:ltr;text-align:left'><pre>sudo apt install git\n</pre></div></p><h5>Configuring Identity</h5><div style='direction:ltr;text-align:left'><pre>git config --global user.name \"Your Name\"\ngit config --global user.email \"your@email.com\"\n</pre></div><h5>SSH Keys</h5><p>To connect your machine to GitHub securely, create an SSH key:</p><div style='direction:ltr;text-align:left'><pre>ssh-keygen -t ed25519 -C \"your@email.com\"\ncat ~/.ssh/id_ed25519.pub\n</pre></div><p>Copy the key and add it to GitHub from Settings > SSH and GPG keys.</p><h5>Testing Connection</h5><div style='direction:ltr;text-align:left'><pre>ssh -T git@github.com\n</pre></div></div>"
      },
      {
        id: "m3", num: 3, title: "Your First Repository", level: "l1",
        description: "Creating and working with your first repository.",
        lessons: ["git init / git clone","First Commit Workflow","git status, git log","Connecting to GitHub"],
        detail: "<h4>Module 3: Your First Repository</h4><div class='sec'><h5>Creating a Local Repository</h5><div style='direction:ltr;text-align:left'><pre>mkdir my-project\ncd my-project\ngit init\n</pre></div><h5>Adding Files and Making Your First Commit</h5><div style='direction:ltr;text-align:left'><pre>echo \"# My Project\" > README.md\ngit add README.md\ngit commit -m \"أول commit\"\n</pre></div><h5>Repository Status & History</h5><p><strong>git status</strong> shows the state of files. <strong>git log</strong> displays the commit history.</p><div style='direction:ltr;text-align:left'><pre>git status\ngit log --oneline\n</pre></div><h5>Connecting to GitHub</h5><p>Create an empty repository on GitHub, then connect it:</p><div style='direction:ltr;text-align:left'><pre>git remote add origin git@github.com:user/repo.git\ngit branch -M main\ngit push -u origin main\n</pre></div></div>"
      },
      {
        id: "m4", num: 4, title: "Branching & Merging", level: "l1",
        description: "Branches and merging — the basics of collaboration.",
        lessons: ["What are Branches?","git branch, git checkout, git switch","Merge Strategies","Branch Naming Conventions"],
        detail: "<h4>Module 4: Branching & Merging</h4><div class='sec'><h5>What are Branches?</h5><p>Branches allow you to work on separate features without affecting the main codebase. The default branch is called <strong>main</strong> or <strong>master</strong>.</p><h5>Creating & Switching Branches</h5><div style='direction:ltr;text-align:left'><pre>git branch feature-x\ngit checkout feature-x\n# أو اختصاراً:\ngit switch -c feature-x\n</pre></div><h5>Merge Strategies</h5><p><strong>Fast-forward merge:</strong> When there are no new commits on the main branch. <strong>3-way merge:</strong> When branches have diverged and Git needs to create a new merge commit.</p><div style='direction:ltr;text-align:left'><pre>git checkout main\ngit merge feature-x\n</pre></div><h5>Naming Conventions</h5><p>Use clear names: <strong>feature/add-login</strong>, <strong>bugfix/fix-crash</strong>, <strong>hotfix/security-patch</strong>.</p></div>"
      },
      {
        id: "m5", num: 5, title: "Working with Remotes", level: "l1",
        description: "Working with remote repositories and collaboration.",
        lessons: ["git remote, git push, git pull, git fetch","Upstream vs Origin","Remote Branches","Collaboration Workflow"],
        detail: "<h4>Module 5: Working with Remote Repositories</h4><div class='sec'><h5>Managing Remote Repositories</h5><div style='direction:ltr;text-align:left'><pre>git remote add origin git@github.com:user/repo.git\ngit remote -v\n</pre></div><h5>Pushing & Pulling Changes</h5><div style='direction:ltr;text-align:left'><pre>git push origin main\ngit pull origin main\ngit fetch origin\n</pre></div><h5>Upstream vs Origin</h5><p><strong>Origin</strong> is the default name for the remote repository you cloned from. <strong>Upstream</strong> is the original repository when working on a Fork.</p><h5>Collaboration Workflow</h5><p>1. Pull latest changes <code>git pull</code> 2. Create a new branch 3. Add your changes 4. Push the branch 5. Create a Pull Request.</p></div>"
      },
      {
        id: "m6", num: 6, title: "Pull Requests & Code Review", level: "l1",
        description: "Creating pull requests and code review.",
        lessons: ["Creating PRs on GitHub","PR Template","Code Review Process","Merging PRs (merge, squash, rebase)"],
        detail: "<h4>Module 6: Pull Requests & Code Review</h4><div class='sec'><h5>Creating a Pull Request</h5><p>After pushing your branch to GitHub, go to the repository > Pull Requests > New Pull Request. Choose the source and target branches.</p><h5>Pull Request Template</h5><div style='direction:ltr;text-align:left'><pre>## Description\nWhat changes did you make?\n\n## Changes\n- [x] New feature\n- [ ] Bug fix\n- [ ] Performance improvement\n\n## How to Test\nSteps to test the changes\n</pre></div><h5>Code Review</h5><p>Team members review the code, leave comments, and request changes. After approval, it can be merged.</p><h5>Merge Options</h5><p><strong>Merge commit:</strong> Preserves all history. <strong>Squash and merge:</strong> Combines all commits into one. <strong>Rebase and merge:</strong> Reapplies commits without a merge commit.</p></div>"
      },
      {
        id: "m7", num: 7, title: "Issues & Project Management", level: "l2",
        description: "Managing tasks and projects with Issues.",
        lessons: ["Creating Issues","Labels, Milestones, Assignees","GitHub Projects (Kanban)","Issue Templates"],
        detail: "<h4>Module 7: Issues & Project Management</h4><div class='sec'><h5>Creating an Issue</h5><p>Issues are a way to track bugs, features, and tasks. Go to the Issues tab > New Issue.</p><h5>Labels & Milestones</h5><p><strong>Labels:</strong> Categories like 'bug', 'enhancement', 'help wanted'. <strong>Milestones:</strong> Group Issues towards a specific goal. <strong>Assignees:</strong> Assign responsible people.</p><h5>GitHub Projects</h5><p>A Kanban board for managing workflow. Create columns like 'To Do', 'In Progress', 'Done' and drag cards between them.</p><h5>Issue Templates</h5><div style='direction:ltr;text-align:left'><pre>---\nname: Bug Report\nabout: Report a bug\n---\n\n**Description**\nClear description of the bug\n\n**Steps to Reproduce**\n1. Go to ...\n2. Click on ...\n\n**Expected Result**\nWhat should have happened\n</pre></div></div>"
      }
    ]
  },
  {
    id: "level2", name: "GitHub Ecosystem", color: "var(--secondary)", icon: "🌐", duration: "9h 20m",
    finalProject: "CI/CD Pipeline with GitHub Actions", difficulty: "Intermediate",
    desc: "Discover advanced GitHub tools: Pages, Actions, Projects, and Security.",
    modules: [
      {
        id: "m8", num: 8, title: "GitHub Pages", level: "l2",
        description: "Hosting static sites for free on GitHub.",
        lessons: ["What is GitHub Pages?","Personal/Project/Organization Sites","Jekyll Themes","Custom Domain"],
        detail: "<h4>Module 8: GitHub Pages</h4><div class='sec'><h5>What is GitHub Pages?</h5><p>A free hosting service for static sites (HTML, CSS, JavaScript) directly from a GitHub repository.</p><h5>Site Types</h5><p><strong>Personal:</strong> <code>username.github.io</code> <strong>Project:</strong> <code>username.github.io/repo</code> <strong>Organization:</strong> <code>orgname.github.io</code></p><h5>Enabling Pages</h5><p>Go to Settings > Pages, choose the branch and folder (usually <code>/root</code> or <code>/docs</code>).</p><h5>Using Jekyll</h5><p>GitHub Pages supports Jekyll automatically. Add a <code>_config.yml</code> file:</p><div style='direction:ltr;text-align:left'><pre>title: My Site\ntheme: jekyll-theme-cayman\n</pre></div><h5>Custom Domain</h5><p>Go to Settings > Pages > Custom domain, and add a CNAME record with your domain provider.</p></div>"
      },
      {
        id: "m9", num: 9, title: "GitHub Actions", level: "l2",
        description: "Automating workflows with GitHub Actions.",
        lessons: ["YAML Basics","Workflow Structure","Events & Triggers","Actions Marketplace"],
        detail: "<h4>Module 9: GitHub Actions</h4><div class='sec'><h5>What is GitHub Actions?</h5><p>A CI/CD system built into GitHub for automating testing, building, and deployment.</p><h5>Workflow Structure</h5><div style='direction:ltr;text-align:left'><pre>name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install\n      - run: npm test\n</pre></div><h5>Events</h5><p><strong>push:</strong> When pushing <strong>pull_request:</strong> When creating a PR <strong>schedule:</strong> At a specific time <strong>workflow_dispatch:</strong> Manually.</p><h5>Marketplace</h5><p>A library of ready-made actions like checkout, setup-node, deploy-to-pages.</p></div>"
      },
      {
        id: "m10", num: 10, title: "GitHub Projects & Boards", level: "l2",
        description: "Managing projects with GitHub Projects.",
        lessons: ["Project Types (User/Repository/Organization)","Custom Fields & Views","Automation Rules","Roadmaps"],
        detail: "<h4>Module 10: GitHub Projects & Boards</h4><div class='sec'><h5>Project Types</h5><p>Projects can be created at the <strong>user</strong>, <strong>repository</strong>, or <strong>organization</strong> level.</p><h5>Custom Fields</h5><p>Add fields like text, date, single select, and numbers to organize cards.</p><h5>Views</h5><p><strong>Board view:</strong> Kanban board <strong>Table view:</strong> Table <strong>Roadmap:</strong> Project timeline.</p><h5>Automation Rules</h5><p>Create rules like 'When label bug is added, move card to In Progress column'.</p></div>"
      },
      {
        id: "m11", num: 11, title: "Releases & Tags", level: "l2",
        description: "Managing releases and tags.",
        lessons: ["Semantic Versioning","Creating Tags (git tag)","GitHub Releases","Release Notes"],
        detail: "<h4>Module 11: Releases & Tags</h4><div class='sec'><h5>Semantic Versioning</h5><p><strong>MAJOR.MINOR.PATCH</strong> e.g. v2.1.3: <strong>MAJOR:</strong> Incompatible changes <strong>MINOR:</strong> Backward-compatible new features <strong>PATCH:</strong> Bug fixes.</p><h5>Creating a Tag</h5><div style='direction:ltr;text-align:left'><pre>git tag v1.0.0\ngit push origin v1.0.0\n</pre></div><h5>Creating a Release</h5><p>On GitHub, go to Releases > Create a new release. Choose a tag, write release notes.</p><h5>Release Notes</h5><p>Write a summary of changes, new features, bug fixes, and a list of contributors.</p></div>"
      },
      {
        id: "m12", num: 12, title: "Security & Dependabot", level: "l2",
        description: "Securing repositories with GitHub security tools.",
        lessons: ["Dependabot Alerts","Dependabot Updates","Code Scanning","Secret Scanning"],
        detail: "<h4>Module 12: Security & Dependabot</h4><div class='sec'><h5>Dependabot Alerts</h5><p>Dependabot notifies you when there are security vulnerabilities in the dependencies used in your project.</p><h5>Dependabot Updates</h5><p>Automatically creates Pull Requests to update dependencies to secure versions.</p><h5>Code Scanning</h5><p>Detects security vulnerabilities in the code itself using CodeQL or other tools.</p><h5>Secret Scanning</h5><p>Detects exposed secrets like API keys and passwords in your repositories.</p></div>"
      },
      {
        id: "m13", num: 13, title: "GitHub Discussions & Wikis", level: "l2",
        description: "Community communication using Discussions and Wiki.",
        lessons: ["Discussions vs Issues","Categories & Formats","Wiki Pages","Community Engagement"],
        detail: "<h4>Module 13: Discussions & Wikis</h4><div class='sec'><h5>Discussions vs Issues</h5><p><strong>Discussions:</strong> For open conversations, questions, and ideas. <strong>Issues:</strong> For specific tasks and bugs.</p><h5>Categories</h5><p>Create categories like 'Q&A', 'Ideas', 'Show and tell', 'General'.</p><h5>Wiki</h5><p>Comprehensive project documentation. Can be edited directly on GitHub or cloned locally.</p><h5>Community Engagement</h5><p>Add <code>CODE_OF_CONDUCT.md</code>, <code>CONTRIBUTING.md</code>, and <code>SECURITY.md</code> files.</p></div>"
      },
      {
        id: "m14", num: 14, title: "GitHub Copilot", level: "l2",
        description: "AI-powered code completion and generation with GitHub Copilot.",
        lessons: ["What is GitHub Copilot?","Setting Up Copilot","Copilot in VS Code","Copilot Chat & Agent Mode"],
        detail: "<h4>Module 14: GitHub Copilot</h4><div class='sec'><h5>What is GitHub Copilot?</h5><p>GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It suggests code as you type, generates functions from comments, and helps you write better code faster.</p><h5>Setting Up Copilot</h5><p>Install the Copilot extension in VS Code, JetBrains, or Neovim. Sign in with your GitHub account, and if needed, enable the free trial.</p><h5>Copilot in VS Code</h5><p>Start typing code — Copilot suggests completions in gray text. Press <code>Tab</code> to accept. Use <code>Ctrl+Enter</code> to see multiple suggestions. Write a comment describing what you want, and Copilot generates the code.</p><h5>Copilot Chat & Agent Mode</h5><p>Copilot Chat lets you ask coding questions in natural language. Agent Mode allows Copilot to autonomously search your codebase, edit files, and run terminal commands.</p><div style='direction:ltr;text-align:left'><pre>// Type a comment and Copilot generates the function\n// function to fetch user data from an API\nasync function fetchUserData(userId) {\n  const response = await fetch(`/api/users/${userId}`);\n  return response.json();\n}\n</pre></div></div>"
      },
      {
        id: "m15", num: 15, title: "GitHub Codespaces", level: "l2",
        description: "Cloud development environments in your browser with Codespaces.",
        lessons: ["What are Codespaces?","Creating a Codespace","Dev Containers & Configuration","Codespaces vs Local Dev"],
        detail: "<h4>Module 15: GitHub Codespaces</h4><div class='sec'><h5>What are Codespaces?</h5><p>GitHub Codespaces provides fully configured cloud-hosted development environments that spin up instantly. Code, build, test, and debug from any device with a browser.</p><h5>Creating a Codespace</h5><p>From a repository page, click the <code>Code</code> button and select 'Create codespace on main'. Alternatively, open any PR or issue in a codespace.</p><h5>Dev Containers</h5><p>Customize environments with a <code>.devcontainer/devcontainer.json</code> file. Specify base images, extensions, ports, and post-create commands.</p><div style='direction:ltr;text-align:left'><pre>{\n  \"image\": \"mcr.microsoft.com/devcontainers/universal:2\",\n  \"extensions\": [\"github.copilot\", \"dbaeumer.vscode-eslint\"],\n  \"forwardPorts\": [3000],\n  \"postCreateCommand\": \"npm install\"\n}\n</pre></div><h5>Codespaces vs Local Development</h5><p>Codespaces are ephemeral, consistent across the team, and work from any device. Local development offers offline access and full hardware control. Many teams use both.</p></div>"
      },
      {
        id: "m16", num: 16, title: "GitHub Desktop & Products", level: "l2",
        description: "GitHub Desktop, Mobile, account types, and product plans.",
        lessons: ["GitHub Desktop GUI","GitHub Mobile","Account Types & Plans","Choosing the Right Product"],
        detail: "<h4>Module 16: GitHub Desktop & Products</h4><div class='sec'><h5>GitHub Desktop</h5><p>GitHub Desktop is a GUI client for Git. It simplifies common operations like committing, branching, syncing, and viewing diffs without the command line.</p><h5>GitHub Mobile</h5><p>The GitHub Mobile app lets you review PRs, manage issues, merge changes, and respond to notifications from your phone.</p><h5>Account Types & Plans</h5><p><strong>Free:</strong> Unlimited public/private repos, GitHub Actions (2000 min/mo), GitHub Pages. <strong>Team:</strong> All Free features plus protected branches, code owners, required reviewers. <strong>Enterprise:</strong> SAML/SSO, compliance, 24/7 support, advanced security.</p><h5>Choosing the Right Product</h5><p>Start with Free for personal projects. Upgrade to Team for collaboration. Choose Enterprise for organizations needing compliance and advanced security.</p></div>"
      }
    ]
  },
  {
    id: "level3", name: "Professional Mastery", color: "var(--accent)", icon: "🏆", duration: "7h 30m",
    finalProject: "Complete professional open-source repository", difficulty: "Advanced",
    desc: "Elevate your skills to professional level and manage large projects.",
    modules: [
      {
        id: "m17", num: 17, title: "Organizations & Teams", level: "l3",
        description: "Managing organizations and teams on GitHub.",
        lessons: ["Creating an Organization","Team Management","Permission Levels","Organization Profile"],
        detail: "<h4>Module 17: Organizations & Teams</h4><div class='sec'><h5>Creating an Organization</h5><p>Go to GitHub.com > + > New organization. Choose a name and plan type.</p><h5>Managing Teams</h5><p>Create teams like 'Engineering', 'Design', 'DevOps' and add members. Teams can be given permissions for specific repositories.</p><h5>Permission Levels</h5><p><strong>Read:</strong> Read-only <strong>Triage:</strong> Manage Issues and PRs <strong>Write:</strong> Push to repository <strong>Maintain:</strong> Manage settings <strong>Admin:</strong> Full control.</p><h5>Organization Profile</h5><p>Create a README for the organization that appears on the organization's main page.</p></div>"
      },
      {
        id: "m18", num: 18, title: "Open Source Contributions", level: "l3",
        description: "Contributing to open source projects.",
        lessons: ["Finding Projects","Fork & Contribute Workflow","Contributing Guidelines","Community Standards"],
        detail: "<h4>Module 18: Contributing to Open Source</h4><div class='sec'><h5>Finding a Project</h5><p>Search on GitHub using labels like 'good-first-issue', 'help-wanted'. Use <a href='https://goodfirstissue.dev' target='_blank'>goodfirstissue.dev</a>.</p><h5>Fork & Contribute</h5><div style='direction:ltr;text-align:left'><pre># Fork the repository\n# Clone your fork locally\ngit clone https://github.com/your-username/project.git\n\n# Add upstream\ngit remote add upstream https://github.com/original/project.git\n\n# Create a branch\ngit switch -c feature-x\n\n# Push and create PR\ngit push origin feature-x\n</pre></div><h5>Contributing Guidelines</h5><p>Read CONTRIBUTING.md and CODE_OF_CONDUCT.md before starting.</p><h5>Contribution Etiquette</h5><p>Be respectful, read the documentation first, ask smart questions, and be patient with reviewers.</p></div>"
      },
      {
        id: "m19", num: 19, title: "Advanced Git Workflows", level: "l3",
        description: "Advanced Git workflows for professional projects.",
        lessons: ["Git Flow","GitHub Flow","Rebase vs Merge","Cherry-pick, Stash, Reflog"],
        detail: "<h4>Module 19: Advanced Git Workflows</h4><div class='sec'><h5>Git Flow</h5><p>A workflow with multiple branches: <strong>main</strong> for production, <strong>develop</strong> for development, <strong>feature/*</strong> for features, <strong>release/*</strong> for releases, <strong>hotfix/*</strong> for urgent fixes.</p><h5>GitHub Flow</h5><p>A simpler workflow: a single <strong>main</strong> branch, with feature branches merged via PRs.</p><h5>Rebase vs Merge</h5><p><strong>Merge:</strong> Preserves full history with merge commits. <strong>Rebase:</strong> Reapplies commits for a clean linear history.</p><div style='direction:ltr;text-align:left'><pre>git rebase main\ngit rebase -i HEAD~3  # interactive\n</pre></div><h5>Advanced Commands</h5><div style='direction:ltr;text-align:left'><pre>git cherry-pick <commit>\ngit stash\ngit stash pop\ngit reflog\n</pre></div></div>"
      },
      {
        id: "m20", num: 20, title: "Professional Portfolio", level: "l3",
        description: "Building a professional GitHub profile.",
        lessons: ["Profile README","Pinned Repositories","Contributions Graph","Portfolio Site"],
        detail: "<h4>Module 20: Professional Portfolio</h4><div class='sec'><h5>Profile README</h5><p>Create a repository named <code>username/username</code> and add a README.md that appears on your profile page.</p><div style='direction:ltr;text-align:left'><pre># Hello 👋\n\nA web developer specialized in building web applications.\n\n🔭 I'm currently working on Project X\n🌱 I'm learning Rust\n👯 I'm looking to collaborate on open source projects\n</pre></div><h5>Pinned Repositories</h5><p>Choose up to 6 repositories to feature on your profile from Settings > Pinned repositories.</p><h5>Contributions Graph</h5><p>Maintain daily activity on GitHub to improve your contributions graph.</p></div>"
      },
      {
        id: "m21", num: 21, title: "Repository Management", level: "l3",
        description: "Managing repositories professionally.",
        lessons: ["Branch Protection Rules","CODEOWNERS","Templates","Repository Settings"],
        detail: "<h4>Module 21: Repository Management</h4><div class='sec'><h5>Branch Protection Rules</h5><p>In Settings > Branches > Add rule, you can: prevent direct pushes to main, require a number of reviews, require successful Checks.</p><h5>CODEOWNERS</h5><p>Create a <code>.github/CODEOWNERS</code> file to automatically assign reviewers to files:</p><div style='direction:ltr;text-align:left'><pre>*       @team-lead\n/src/   @frontend-team\n/api/   @backend-team\n</pre></div><h5>Repository Templates</h5><p>Create a repository template to standardize new project structure. Add files like README.md, LICENSE, .gitignore.</p></div>"
      },
      {
        id: "m22", num: 22, title: "CI/CD Pipelines", level: "l3",
        description: "Building complete CI/CD pipelines.",
        lessons: ["Building Pipelines","Testing in CI","Deployment","Environment Management"],
        detail: "<h4>Module 22: CI/CD Pipelines</h4><div class='sec'><h5>Building a Pipeline</h5><div style='direction:ltr;text-align:left'><pre>name: CI/CD Pipeline\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n      - run: npm ci\n      - run: npm test\n\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm run build\n      - uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: \${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist\n</pre></div><h5>Testing & Environments</h5><p>Use multiple environments: <strong>development</strong>, <strong>staging</strong>, <strong>production</strong>. Add Secrets for each environment.</p></div>"
      },
      {
        id: "m23", num: 23, title: "Professional Workflow", level: "l3",
        description: "The complete professional workflow.",
        lessons: ["Complete Workflow","Daily Routine","Team Best Practices","Git Hygiene"],
        detail: "<h4>Module 23: Professional Workflow</h4><div class='sec'><h5>Daily Routine</h5><div style='direction:ltr;text-align:left'><pre># 1. Pull latest changes\ngit checkout main\ngit pull origin main\n\n# 2. Create a branch for the task\ngit switch -c feature/task-name\n\n# 3. Work and stage changes\ngit add .\ngit commit -m \"إضافة ميزة كذا\"\n\n# 4. Push the branch\ngit push -u origin feature/task-name\n\n# 5. Create a PR on GitHub\n</pre></div><h5>Best Practices</h5><p>1. Commit frequently 2. Write clear commit messages 3. Use descriptive branches 4. Review your code before PR 5. Maintain a clean history using rebase.</p><h5>Git Hygiene</h5><p>Don't push unnecessary files. Use <code>.gitignore</code>. Clean up duplicate commits using <code>git rebase -i</code>.</p></div>"
      }
    ]
  }
];

/* ============================================================
   PROJECTS (10)
   ============================================================ */

const PROJECTS = [
  {
    id: "p1", num: 1, title: "First Repository", icon: "📦",
    difficulty: "beginner", tags: ["Git","GitHub","CLI","Init","Push"],
    description: "Create your first repository, clone, commit, and push to GitHub.",
    detail: "<h4>Project 1: First Repository</h4><div class='sec'><h5>Concept</h5><p>Learn the foundational Git workflow: init, add, commit, and push. This is the first step every developer takes.</p><h5>Steps</h5><ol><li>Create a folder: <code>mkdir my-first-repo && cd my-first-repo</code></li><li>Initialize Git: <code>git init</code></li><li>Create README.md with a project title</li><li>Stage: <code>git add README.md</code></li><li>Commit: <code>git commit -m \"first commit\"</code></li><li>Create an empty repo on GitHub</li><li>Connect: <code>git remote add origin https://github.com/user/repo.git</code></li><li>Push: <code>git push -u origin main</code></li></ol><div dir='ltr' style='text-align:left'><pre>git init\ngit add .\ngit commit -m \"first commit\"\ngit remote add origin &lt;url&gt;\ngit push -u origin main\n</pre></div></div>"
  },
  {
    id: "p2", num: 2, title: "Professional README", icon: "📝",
    difficulty: "beginner", tags: ["Markdown","Documentation","README"],
    description: "Write a professional README using every Markdown feature.",
    detail: "<h4>Project 2: Professional README</h4><div class='sec'><h5>Concept</h5><p>Markdown is the language of GitHub. A great README makes your project stand out. Master headings, lists, code blocks, tables, badges, and more.</p><h5>Requirements</h5><ul><li>Title with shield.io badge</li><li>Description paragraph</li><li>Table of Contents</li><li>Installation and usage sections with code blocks</li><li>Features checklist</li><li>Technologies table</li><li>Contributing section with emoji</li><li>License footer</li></ul><div dir='ltr' style='text-align:left'><pre># Project Name\n\n![License](https://img.shields.io/badge/license-MIT-blue)\n\n## Description\nWhat does this project do?\n\n## Installation\n```bash\nnpm install\n```\n</pre></div></div>"
  },
  {
    id: "p3", num: 3, title: "Git Ignore Lab", icon: "🚫",
    difficulty: "beginner", tags: ["Git",".gitignore","Config"],
    description: "Master .gitignore to keep secrets and build artifacts out of Git.",
    detail: "<h4>Project 3: Git Ignore Lab</h4><div class='sec'><h5>Concept</h5><p>Not every file belongs in Git. Secrets, dependencies, build output, and OS files must be ignored. Learn the syntax and best practices.</p><h5>Steps</h5><ol><li>Create <code>.gitignore</code> in the project root</li><li>Add patterns: <code>node_modules/</code>, <code>.env</code>, <code>*.log</code>, <code>dist/</code>, <code>.DS_Store</code></li><li>Use <code>gitignore.io</code> to generate a comprehensive file</li><li>Create a dummy <code>.env</code> file and verify <code>git status</code> hides it</li><li>Test with <code>git add .</code> — ignored files must not appear</li></ol><div dir='ltr' style='text-align:left'><pre>node_modules/\n.env\n*.log\ndist/\n.DS_Store\n*.pyc\n.idea/\n.vscode/\n</pre></div></div>"
  },
  {
    id: "p4", num: 4, title: "Branching Workflow", icon: "🌿",
    difficulty: "intermediate", tags: ["Git","Branching","Merging","Workflow"],
    description: "Create branches, merge them, and understand Git flow.",
    detail: "<h4>Project 4: Branching Workflow</h4><div class='sec'><h5>Concept</h5><p>Branches are the backbone of collaboration. Learn to create, switch, merge, and delete branches using real-world naming conventions.</p><h5>Steps</h5><ol><li>Create branches: <code>feature/navbar</code>, <code>feature/footer</code>, <code>bugfix/typo</code></li><li>Switch between branches using <code>git switch</code> and <code>git checkout</code></li><li>Make different changes in each branch</li><li>Merge via fast-forward and 3-way merge</li><li>Delete merged branches: <code>git branch -d feature/navbar</code></li></ol><div dir='ltr' style='text-align:left'><pre>git switch -c feature/navbar\necho \"<nav>...</nav>\" > navbar.html\ngit add . && git commit -m \"add navbar\"\ngit switch main\ngit merge feature/navbar\ngit branch -d feature/navbar\n</pre></div></div>"
  },
  {
    id: "p5", num: 5, title: "Merge Conflict Lab", icon: "⚔️",
    difficulty: "intermediate", tags: ["Git","Merge Conflicts","Resolution"],
    description: "Create and resolve merge conflicts step by step.",
    detail: "<h4>Project 5: Merge Conflict Lab</h4><div class='sec'><h5>Concept</h5><p>Merge conflicts are inevitable. Learn to read conflict markers, choose the right changes, and complete the merge safely.</p><h5>Steps</h5><ol><li>Create <code>index.html</code> with a title line on <code>main</code></li><li>Branch to <code>feature/title-change</code> and edit the title</li><li>Switch back to <code>main</code> and edit the <em>same</em> title line differently</li><li>Merge <code>feature/title-change</code> — a conflict appears</li><li>Open the file, find <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> markers, pick the correct version</li><li>Remove markers, <code>git add index.html</code>, <code>git commit</code></li></ol><div dir='ltr' style='text-align:left'><pre>git merge feature/title-change\n# CONFLICT in index.html\nnano index.html\n# Fix markers <<<<<<< and =======\ngit add index.html\ngit commit -m \"resolve merge conflict\"\n</pre></div></div>"
  },
  {
    id: "p6", num: 6, title: "Fork & Pull Request", icon: "🍴",
    difficulty: "intermediate", tags: ["GitHub","Fork","PR","Code Review"],
    description: "Fork a repository, create a PR, and review code.",
    detail: "<h4>Project 6: Fork & Pull Request</h4><div class='sec'><h5>Concept</h5><p>Forking and PRs are how open source works. Learn the full cycle: fork, clone, branch, push, PR, code review, and merge.</p><h5>Steps</h5><ol><li>Fork any public repository on GitHub</li><li>Clone your fork: <code>git clone https://github.com/your-username/repo.git</code></li><li>Add upstream: <code>git remote add upstream https://github.com/original/repo.git</code></li><li>Create a branch: <code>git switch -c improve-readme</code></li><li>Make changes, push: <code>git push origin improve-readme</code></li><li>Open a Pull Request on GitHub</li><li>Request a review, respond to feedback, merge</li></ol></div>"
  },
  {
    id: "p7", num: 7, title: "GitHub Pages Portfolio", icon: "🌐",
    difficulty: "intermediate", tags: ["GitHub Pages","HTML","CSS","Deploy"],
    description: "Publish a personal portfolio site using GitHub Pages.",
    detail: "<h4>Project 7: GitHub Pages Portfolio</h4><div class='sec'><h5>Concept</h5><p>GitHub Pages turns repositories into live websites. Learn to deploy a portfolio, choose a Jekyll theme, and set a custom domain.</p><h5>Steps</h5><ol><li>Create repo named <code>username.github.io</code></li><li>Add <code>index.html</code> with your portfolio content</li><li>Add <code>_config.yml</code> with a Jekyll theme</li><li>Enable Pages: Settings > Pages > branch: main, folder: /root</li><li>Wait 1–2 minutes, visit <code>https://username.github.io</code></li><li>Optional: add a custom domain via CNAME record</li></ol><div dir='ltr' style='text-align:left'><pre># _config.yml\ntitle: My Portfolio\ntheme: jekyll-theme-cayman\n</pre></div></div>"
  },
  {
    id: "p8", num: 8, title: "Issue & Project Board", icon: "📋",
    difficulty: "intermediate", tags: ["GitHub","Issues","Projects","Milestones"],
    description: "Manage tasks with Issues, Projects, and Milestones.",
    detail: "<h4>Project 8: Issue & Project Board</h4><div class='sec'><h5>Concept</h5><p>Issues track bugs and features. Projects visualize workflows. Milestones group work toward a goal. Together they form a complete project management system.</p><h5>Steps</h5><ol><li>Create 5+ Issues with labels (bug, enhancement, docs)</li><li>Create a Milestone called \"v1.0 Launch\"</li><li>Assign Issues to the Milestone</li><li>Create a Project board with columns: To Do, In Progress, Done</li><li>Add Issues to the board as cards</li><li>Set up automation: move to Done when Issue closes</li></ol></div>"
  },
  {
    id: "p9", num: 9, title: "GitHub Actions CI", icon: "⚡",
    difficulty: "advanced", tags: ["GitHub Actions","CI/CD","YAML","Automation"],
    description: "Create a CI workflow that builds and tests automatically.",
    detail: "<h4>Project 9: GitHub Actions CI</h4><div class='sec'><h5>Concept</h5><p>GitHub Actions automates testing, building, and deployment. Write a YAML workflow that runs on every push and PR.</p><h5>Steps</h5><ol><li>Create <code>.github/workflows/ci.yml</code></li><li>Trigger on push and pull_request to main</li><li>Set up a matrix of Node.js versions (16, 18, 20)</li><li>Install dependencies: <code>npm ci</code></li><li>Run tests: <code>npm test</code></li><li>Build: <code>npm run build</code></li><li>Deploy to Pages on success</li></ol><div dir='ltr' style='text-align:left'><pre>name: CI\non:\n  push: { branches: [main] }\n  pull_request: { branches: [main] }\njobs:\n  build:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node: [16, 18, 20]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: \"${{ matrix.node }}\" }\n      - run: npm ci\n      - run: npm test\n      - run: npm run build\n</pre></div></div>"
  },
  {
    id: "p10", num: 10, title: "Professional Open Source Repository", icon: "🏆",
    difficulty: "advanced", tags: ["GitHub","Professional","Best Practices","Open Source"],
    description: "Build a complete professional repository with all standard files.",
    detail: "<h4>Project 10: Professional Open Source Repository</h4><div class='sec'><h5>Concept</h5><p>A professional repository looks like a product, not a homework folder. Every file serves a purpose: documentation, licensing, contribution guidelines, security policy, and automation.</p><h5>Required Files</h5><ul><li><code>README.md</code> — badges, TOC, install, usage, contributing, license</li><li><code>LICENSE</code> — MIT (or appropriate choice)</li><li><code>CHANGELOG.md</code> — Keep a Changelog format</li><li><code>CONTRIBUTING.md</code> — how to contribute</li><li><code>CODE_OF_CONDUCT.md</code> — community standards</li><li><code>SECURITY.md</code> — how to report vulnerabilities</li><li><code>.gitignore</code> — comprehensive ignore rules</li><li><code>.github/ISSUE_TEMPLATE/bug_report.md</code></li><li><code>.github/ISSUE_TEMPLATE/feature_request.md</code></li><li><code>.github/PULL_REQUEST_TEMPLATE.md</code></li><li><code>.github/workflows/ci.yml</code> — CI pipeline</li><li><code>.github/dependabot.yml</code> — dependency updates</li></ul></div>"
  }
];

/* ============================================================
   GLOSSARY (50+ terms)
   ============================================================ */

const GLOSSARY = [
  { term: "Branch", definition: "A standalone branch of code that allows working on separate features without affecting the main branch." },
  { term: "Clone", definition: "Copy a remote Git repository to your local machine using git clone." },
  { term: "Commit", definition: "A snapshot of changes saved in the local repository with a descriptive message." },
  { term: "Fetch", definition: "Retrieve changes from the remote repository without automatically merging them." },
  { term: "Fork", definition: "A personal copy of someone else's repository, allowing modifications without affecting the original." },
  { term: "Git", definition: "A distributed, open-source version control system created by Linus Torvalds." },
  { term: "GitHub", definition: "A cloud platform for hosting Git repositories and managing software projects." },
  { term: "Issue", definition: "A bug report, feature request, or task tracked within a GitHub repository." },
  { term: "Merge", definition: "Combining changes from one branch into another, which may result in a merge commit." },
  { term: "Pull", definition: "Fetch and merge changes (git pull = git fetch + git merge)." },
  { term: "Push", definition: "Upload local commits to the remote repository." },
  { term: "Rebase", definition: "Reapply commits on top of another branch to achieve a linear history." },
  { term: "Remote", definition: "A copy of the repository hosted on a remote server like GitHub." },
  { term: "Repository", definition: "A folder containing your project and all its Git history." },
  { term: "Staging", definition: "The staging area where you place files before committing (git add)." },
  { term: "Tag", definition: "A marker pointing to a specific point in Git history, often for releases." },
  { term: "Upstream", definition: "The original repository from which a Fork was derived." },
  { term: "Origin", definition: "The default name for the main remote repository." },
  { term: "Main", definition: "The default name for the main branch in Git (formerly master)." },
  { term: "Master", definition: "The old name for the main branch, replaced by main." },
  { term: "HEAD", definition: "A pointer to the latest commit in the current branch." },
  { term: "Index", definition: "The staging area that stores files before a commit." },
  { term: "Working Directory", definition: "The local working directory where you are currently modifying files." },
  { term: "Blob", definition: "A Git object type that stores file content." },
  { term: "Tree", definition: "A Git object type that represents folder structure." },
  { term: "SHA", definition: "A unique 40-character identifier for each commit or object in Git." },
  { term: "Checkout", definition: "Switching between branches or restoring files from a previous commit." },
  { term: "Cherry-pick", definition: "Apply a specific commit from another branch to the current branch." },
  { term: "Stash", definition: "Temporarily save uncommitted changes to clean the working directory." },
  { term: "Diff", definition: "Show differences between commits, branches, or files." },
  { term: "Blame", definition: "Show who modified each line in a file and when." },
  { term: "Log", definition: "A chronological list of commits." },
  { term: "Config", definition: "Git configuration at three levels: system, global, local." },
  { term: "Alias", definition: "A shortcut for lengthy Git commands like co instead of checkout." },
  { term: "Hook", definition: "A script that runs automatically on certain Git events." },
  { term: "Release", definition: "An official project release on GitHub with notes and attachments." },
  { term: "PR", definition: "Pull Request - a request to merge changes from one branch to another." },
  { term: "Actions", definition: "A CI/CD platform built into GitHub for workflow automation." },
  { term: "Workflow", definition: "A YAML file defining CI/CD steps in GitHub Actions." },
  { term: "Job", definition: "A set of steps executed on the same runner." },
  { term: "Step", definition: "A single unit of execution within a Job (a command or Action)." },
  { term: "Runner", definition: "A server that executes workflows in GitHub Actions." },
  { term: "YAML", definition: "A data serialization language used in GitHub Actions configuration files." },
  { term: "Markdown", definition: "A lightweight markup language for writing formatted text easily." },
  { term: "README", definition: "A project description file written in Markdown, displayed on the repository's main page." },
  { term: "License", definition: "A license defining how the code can be used, distributed, and published." },
  { term: ".gitignore", definition: "A file specifying files and folders that Git will ignore." },
  { term: "Downstream", definition: "Repositories built on top of yours or derived from it." },
  { term: "Fast-forward", definition: "A type of merge that occurs when the target branch is directly ahead." },
  { term: "3-way merge", definition: "A merge using an intermediate commit when history has diverged." },
  { term: "Merge conflict", definition: "A conflict that occurs when merging branches that modified the same file in the same area." },
  { term: "Squash", definition: "Combining multiple commits into one to simplify history." },
  { term: "Code review", definition: "Reviewing code by a colleague before merging it into the main branch." },
  { term: "PR template", definition: "An automatic template for Pull Request content." },
  { term: "Issue template", definition: "An automatic template for creating Issues." },
  { term: "Milestone", definition: "A milestone that groups Issues and PRs toward a specific goal." },
  { term: "Label", definition: "A tag for categorizing Issues and PRs." },
  { term: "Project board", definition: "A Kanban board for managing tasks and projects." },
  { term: "Wiki", definition: "A separate documentation space within the repository." },
  { term: "Discussion", definition: "A forum for open discussions within the repository." },
  { term: "Dependabot", definition: "An automated tool for updating dependencies and fixing security vulnerabilities." },
  { term: "Code scanning", definition: "Automated security scanning of code to detect vulnerabilities." },
  { term: "Secret scanning", definition: "Detecting exposed secrets in repositories." },
  { term: "GPG", definition: "An encryption system used to sign commits and tags in Git." },
  { term: "SSH", definition: "A secure protocol for connecting to GitHub without entering a password." },
  { term: "Token", definition: "An authentication token used to access the GitHub API." },
  { term: "PAT", definition: "Personal Access Token - a personal access token for GitHub authentication." },
  { term: "OAuth", definition: "An authentication protocol used to allow applications to access a GitHub account." },
  { term: "Webhook", definition: "An HTTP notification sent on certain repository events." },
  { term: "CLI", definition: "Command Line Interface." },
  { term: "GUI", definition: "Graphical User Interface." },
  { term: "IDE", definition: "Integrated Development Environment." },
  { term: "VSCode", definition: "A code editor from Microsoft with built-in Git support." },
  { term: "Copilot", definition: "AI-powered code completion tool by GitHub that suggests code as you type." },
  { term: "Codespaces", definition: "Cloud-hosted development environments accessible from any device with a browser." },
  { term: "Agent Mode", definition: "An AI agent mode in Copilot that autonomously edits files and runs commands." },
  { term: "MCP", definition: "Model Context Protocol — a standard for connecting AI agents to external tools and services." },
  { term: "Prompt Engineering", definition: "The practice of crafting effective prompts to get desired outputs from AI models." },
  { term: "Dev Container", definition: "A container-based development environment defined by a devcontainer.json file." },
  { term: "Model Context Protocol", definition: "See MCP — an open protocol for connecting AI agents to tools and APIs." },
  { term: "GitHub Mobile", definition: "A mobile app for reviewing PRs, managing issues, and responding to notifications." },
  { term: "GitHub Desktop", definition: "A GUI client for Git that simplifies committing, branching, and syncing." },
  { term: "Product Plan", definition: "GitHub account tiers: Free, Team, and Enterprise with different features and support." },
  { term: "Organization", definition: "A shared GitHub account for teams with permission levels and centralized management." },
  { term: "Permission Level", definition: "Access levels in GitHub: Read, Triage, Write, Maintain, Admin." },
  { term: "Profile README", definition: "A special README displayed on your GitHub profile, created in a username/username repo." },
  { term: "Pinned Repository", definition: "Up to 6 featured repositories displayed prominently on your GitHub profile." },
  { term: "Branch Protection", definition: "Rules that prevent direct pushes to important branches and require reviews." },
  { term: "CODEOWNERS", definition: "A file that defines who is responsible for specific files or folders." },
  { term: "Git Flow", definition: "A branching model with main, develop, feature, release, and hotfix branches." },
  { term: "GitHub Flow", definition: "A simpler branching model with a single main branch and feature branches." },
  { term: "SemVer", definition: "Semantic Versioning — MAJOR.MINOR.PATCH version numbering scheme." }
];

/* ============================================================
   QUIZZES (2-3 per module, 40+ total)
   ============================================================ */

const QUIZZES = {
  m1: [
    { question: "What is Git?", options: ["Version control system","Text editor","Programming language","Social network"], correct: 0 },
    { question: "How many Git states are there for files?", options: ["2","3","4","5"], correct: 1 },
    { question: "What is the function of the Staging Area?", options: ["Modifying files","Preparing files for commit","Deleting files","Cloning repository"], correct: 1 }
  ],
  m2: [
    { question: "Which command is used to set the username in Git?", options: ["git config user.name","git set user.name","git --user name","git name --set"], correct: 0 },
    { question: "What is the correct command to create an SSH key?", options: ["ssh-create -t rsa","ssh-keygen -t ed25519","ssh new key","git ssh generate"], correct: 1 },
    { question: "Command to test connection to GitHub?", options: ["git test connection","ssh -T git@github.com","github connect","git ssh test"], correct: 1 }
  ],
  m3: [
    { question: "Which command creates a new Git repository?", options: ["git start","git new","git init","git create"], correct: 2 },
    { question: "Command to display repository status?", options: ["git state","git show","git status","git log"], correct: 2 },
    { question: "To connect a local repository to GitHub we use?", options: ["git connect","git link","git remote add","git push link"], correct: 2 }
  ],
  m4: [
    { question: "Command to create a new branch and switch to it directly?", options: ["git branch new","git checkout new","git switch -c","git create branch"], correct: 2 },
    { question: "What type of merge does not create a merge commit?", options: ["3-way merge","Fast-forward merge","Merge commit","Squash merge"], correct: 1 },
    { question: "Branch naming for fixing a production bug?", options: ["feature/xxx","bugfix/xxx","hotfix/xxx","release/xxx"], correct: 2 }
  ],
  m5: [
    { question: "Command to fetch changes from remote without merging?", options: ["git pull","git fetch","git get","git receive"], correct: 1 },
    { question: "Default name for the remote repository?", options: ["upstream","main","origin","remote"], correct: 2 }
  ],
  m6: [
    { question: "What is the best way to merge a PR with a clean history?", options: ["Create merge commit","Squash and merge","Rebase and merge","Force push"], correct: 2 },
    { question: "What does Code Review mean?", options: ["Writing new code","Reviewing code before merging","Deleting code","Testing code"], correct: 1 }
  ],
  m7: [
    { question: "What are Labels in Issues?", options: ["Titles","Classification tags","Colors","Numbers"], correct: 1 },
    { question: "What are Milestones?", options: ["Milestones that group Issues","Deadlines","Team members","Branches"], correct: 0 }
  ],
  m8: [
    { question: "What is the purpose of GitHub Pages?", options: ["Hosting static sites","Hosting databases","Running servers","Managing API"], correct: 0 },
    { question: "Which theme does GitHub Pages support automatically?", options: ["Bootstrap","Jekyll","React","Vue"], correct: 1 }
  ],
  m9: [
    { question: "In which language are GitHub Actions files written?", options: ["JSON","XML","YAML","TOML"], correct: 2 },
    { question: "Which keyword defines the trigger event in Actions?", options: ["trigger","on","event","when"], correct: 1 }
  ],
  m10: [
    { question: "How many view types are in modern GitHub Projects?", options: ["2","3","4","5"], correct: 1 },
    { question: "What is the function of automation in Projects?", options: ["Moving cards automatically","Sending emails","Copying project","Deleting cards"], correct: 0 }
  ],
  m11: [
    { question: "In semantic versioning v2.1.3, what does the number 3 mean?", options: ["MAJOR","MINOR","PATCH","BUILD"], correct: 2 },
    { question: "Command to create a tag in Git?", options: ["git tag","git mark","git label","git release"], correct: 0 }
  ],
  m12: [
    { question: "What is the function of Dependabot?", options: ["Managing dependencies automatically","Writing code","Reviewing PRs","Hosting projects"], correct: 0 },
    { question: "What is Code Scanning?", options: ["Security scanning of code","Code formatting","Code compilation","Code optimization"], correct: 0 }
  ],
  m13: [
    { question: "What is the difference between Discussions and Issues?", options: ["No difference","Discussions for open conversation","Issues for open conversation","Both are closed"], correct: 1 },
    { question: "Wiki on GitHub is used for?", options: ["Project documentation","Writing code","Task management","Chatting"], correct: 0 }
  ],
  m14: [
    { question: "What is GitHub Copilot?", options: ["A code editor","An AI code completion tool","A Git client","A CI/CD tool"], correct: 1 },
    { question: "Which keyboard shortcut accepts a Copilot suggestion?", options: ["Ctrl+Enter","Tab","Shift+Tab","Alt+Enter"], correct: 1 },
    { question: "Copilot Chat allows you to?", options: ["Chat with team members","Ask coding questions in natural language","Send emails","Browse the web"], correct: 1 }
  ],
  m15: [
    { question: "What are GitHub Codespaces?", options: ["Physical servers","Cloud development environments","Git repositories","Code editors"], correct: 1 },
    { question: "Codespaces configuration file is?", options: ["Dockerfile","devcontainer.json","config.yml","setup.json"], correct: 1 },
    { question: "A key benefit of Codespaces is?", options: ["Offline-only","Consistent dev environment","Requires powerful hardware","Only for Windows"], correct: 1 }
  ],
  m16: [
    { question: "GitHub Desktop is a?", options: ["Web browser","GUI client for Git","Cloud service","Terminal emulator"], correct: 1 },
    { question: "Which GitHub plan includes protected branches?", options: ["Free Only","Team and Enterprise","Enterprise Only","None"], correct: 1 },
    { question: "GitHub Mobile allows you to?", options: ["Write code on phone","Review PRs on mobile","Host servers","Deploy apps"], correct: 1 }
  ],
  m17: [
    { question: "What is the lowest permission in a GitHub organization?", options: ["Read","Write","Admin","Triage"], correct: 0 },
    { question: "Which permission level allows managing Issues only?", options: ["Read","Triage","Write","Maintain"], correct: 1 }
  ],
  m18: [
    { question: "What does Fork mean on GitHub?", options: ["A personal copy of a repository","Deleting a repository","Merging a repository","Moving a repository"], correct: 0 },
    { question: "Why do we add upstream?", options: ["To sync changes from the original","To delete the repository","To create a new branch","To merge changes"], correct: 0 }
  ],
  m19: [
    { question: "What is Git Flow?", options: ["A multi-branch workflow","A Git tool","A VSCode extension","A programming language"], correct: 0 },
    { question: "Command to save changes temporarily?", options: ["git save","git stash","git hold","git temp"], correct: 1 }
  ],
  m20: [
    { question: "Which repository creates a README on your profile page?", options: ["username/username","username/profile","username/readme","username/about"], correct: 0 },
    { question: "Maximum number of pinned repositories?", options: ["4","6","8","10"], correct: 1 }
  ],
  m21: [
    { question: "What is the function of Branch Protection Rules?", options: ["Protecting branches from direct pushes","Deleting branches","Creating branches","Naming branches"], correct: 0 },
    { question: "The CODEOWNERS file specifies?", options: ["Who is responsible for files","Protection rules","Dependencies","Releases"], correct: 0 }
  ],
  m22: [
    { question: "What does CI/CD mean?", options: ["Continuous development","Continuous Integration and Continuous Deployment","Manual testing","Manual deployment"], correct: 1 },
    { question: "The word 'needs' in Actions means?", options: ["Execution dependency on another Job","Environment variable","Operating system","Trigger event"], correct: 0 }
  ],
  m23: [
    { question: "Best practice for commit messages?", options: ["Vague and short","Clear and descriptive","Very long","No message"], correct: 1 },
    { question: "Command to clean up repeated commits?", options: ["git clean","git rebase -i","git squash","git fixup"], correct: 1 }
  ]
};

/* ============================================================
   CHEATSHEET
   ============================================================ */

/* ============================================================
   RESOURCES — External references and learning materials
   ============================================================ */

const RESOURCES = [
  {
    category: "Official Documentation",
    icon: "📘",
    items: [
      { title: "Git Official Documentation", url: "https://git-scm.com/doc", desc: "Complete reference for all Git commands, tutorials, and the Pro Git book." },
      { title: "GitHub Docs", url: "https://docs.github.com", desc: "Official GitHub documentation covering all features and products." },
      { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", desc: "Learn how to automate workflows with GitHub Actions." },
      { title: "GitHub REST API", url: "https://docs.github.com/en/rest", desc: "API reference for integrating with GitHub programmatically." }
    ]
  },
  {
    category: "Interactive Learning",
    icon: "🎮",
    items: [
      { title: "GitHub Skills", url: "https://skills.github.com", desc: "Interactive courses taught by GitHub's own training team." },
      { title: "Oh My Git!", url: "https://ohmygit.org", desc: "An open-source Git learning game for all skill levels." },
      { title: "Learn Git Branching", url: "https://learngitbranching.js.org", desc: "Interactive visual tool for learning Git branching." },
      { title: "Git Exercises", url: "https://gitexercises.fracz.com", desc: "Practice Git commands with real-time feedback." }
    ]
  },
  {
    category: "Visual Tools",
    icon: "🔍",
    items: [
      { title: "Git Graph (VS Code)", url: "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph", desc: "VS Code extension for viewing Git history as an interactive graph." },
      { title: "gitignore.io", url: "https://www.toptal.com/developers/gitignore", desc: "Generate comprehensive .gitignore files for your project." },
      { title: "Shields.io", url: "https://shields.io", desc: "Create beautiful badges for your README files." },
      { title: "GitHub Profile Readme Generator", url: "https://profile-readme-generator.com", desc: "Generate a beautiful profile README with badges and stats." }
    ]
  },
  {
    category: "Community & News",
    icon: "🌐",
    items: [
      { title: "GitHub Changelog", url: "https://github.blog/changelog", desc: "Stay up to date with the latest GitHub features and changes." },
      { title: "GitHub Community Forum", url: "https://github.com/orgs/community/discussions", desc: "Ask questions, share ideas, and connect with other GitHub users." },
      { title: "The GitHub Blog", url: "https://github.blog", desc: "News, insights, and product updates from GitHub." },
      { title: "Stack Overflow — Git Tag", url: "https://stackoverflow.com/questions/tagged/git", desc: "Community answers to common and advanced Git questions." }
    ]
  },
  {
    category: "Certification Prep",
    icon: "🎓",
    items: [
      { title: "GitHub Certification", url: "https://resources.github.com/learn/certification", desc: "Official certification programs and preparation materials." },
      { title: "GitHub Foundations Exam Guide", url: "https://assets.ctfassets.net/8j5n9df3na6c/5f0g9v9LZ8Cc4Uj9f7TqjY/", desc: "Official study guide for GitHub Foundations certification." },
      { title: "GitHub Actions Exam Guide", url: "https://assets.ctfassets.net/8j5n9df3na6c/2k6nX9L9Z8Cc4Uj9f7TqkZ/", desc: "Official study guide for GitHub Actions certification." },
      { title: "Microsoft Learn — GitHub", url: "https://learn.microsoft.com/en-us/training/github", desc: "Free Microsoft Learn modules for GitHub skills." }
    ]
  },
  {
    category: "Books & Guides",
    icon: "📚",
    items: [
      { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2", desc: "The definitive free book on Git by Scott Chacon and Ben Straub." },
      { title: "Git for Teams", url: "https://www.oreilly.com/library/view/git-for-teams/9781491911204", desc: "A practical guide for collaborative development with Git." },
      { title: "Atlassian Git Tutorials", url: "https://www.atlassian.com/git/tutorials", desc: "Comprehensive Git tutorials from beginner to advanced." },
      { title: "Git Cheat Sheet (PDF)", url: "https://training.github.com/downloads/github-git-cheat-sheet.pdf", desc: "Official GitHub Git cheat sheet in printable PDF format." }
    ]
  }
];

const CHEATSHEET = {
  git: {
    title: "Git Commands",
    items: [
      { cmd: "git init", desc: "Create a new Git repository" },
      { cmd: "git clone <url>", desc: "Clone a remote repository" },
      { cmd: "git status", desc: "Show file status" },
      { cmd: "git add <file>", desc: "Add a file to the staging area" },
      { cmd: "git add .", desc: "Add all files" },
      { cmd: "git commit -m 'message'", desc: "Make a commit with a message" },
      { cmd: "git log", desc: "View commit history" },
      { cmd: "git log --oneline", desc: "View log with one line per commit" },
      { cmd: "git diff", desc: "Show unstaged changes" },
      { cmd: "git branch", desc: "List branches" },
      { cmd: "git branch <name>", desc: "Create a new branch" },
      { cmd: "git checkout <branch>", desc: "Switch to a branch" },
      { cmd: "git switch <branch>", desc: "Switch to a branch (modern)" },
      { cmd: "git switch -c <name>", desc: "Create and switch to a new branch" },
      { cmd: "git merge <branch>", desc: "Merge a branch into the current branch" },
      { cmd: "git rebase <branch>", desc: "Reapply commits on top of a branch" },
      { cmd: "git remote -v", desc: "View remote repositories" },
      { cmd: "git push origin <branch>", desc: "Push the branch to remote" },
      { cmd: "git pull origin <branch>", desc: "Pull changes from remote" },
      { cmd: "git fetch origin", desc: "Fetch changes without merging" },
      { cmd: "git stash", desc: "Save changes temporarily" },
      { cmd: "git stash pop", desc: "Restore saved changes" },
      { cmd: "git tag <name>", desc: "Create a tag" },
      { cmd: "git cherry-pick <commit>", desc: "Apply a specific commit" },
      { cmd: "git reset HEAD <file>", desc: "Remove a file from staging" },
      { cmd: "git reset --hard <commit>", desc: "Revert to a commit discarding changes" },
      { cmd: "git reflog", desc: "View reference log (for recovery)" },
      { cmd: "git blame <file>", desc: "Show who edited each line" }
    ]
  },
  markdown: {
    title: "Markdown",
    items: [
      { cmd: "# Heading 1", desc: "Main heading" },
      { cmd: "## Heading 2", desc: "Sub heading" },
      { cmd: "**bold**", desc: "Bold text" },
      { cmd: "*italic*", desc: "Italic text" },
      { cmd: "`code`", desc: "Inline code" },
      { cmd: "```lang\ncode\n```", desc: "Code block" },
      { cmd: "- item", desc: "Unordered list" },
      { cmd: "1. item", desc: "Ordered list" },
      { cmd: "[text](url)", desc: "Link" },
      { cmd: "![alt](image.jpg)", desc: "Image" },
      { cmd: "> quote", desc: "Blockquote" },
      { cmd: "---", desc: "Horizontal rule" },
      { cmd: "| Col1 | Col2 |", desc: "Table" },
      { cmd: "**Task**", desc: "- [x] Done\n- [ ] Not done" }
    ]
  },
  actions: {
    title: "Actions YAML",
    items: [
      { cmd: "name: Workflow", desc: "Workflow name" },
      { cmd: "on: [push, pull_request]", desc: "Trigger events" },
      { cmd: "jobs:", desc: "Start of job definitions" },
      { cmd: "runs-on: ubuntu-latest", desc: "Operating system" },
      { cmd: "steps:", desc: "List of steps" },
      { cmd: "- uses: actions/checkout@v4", desc: "Checkout repository" },
      { cmd: "- run: npm test", desc: "Run a command" },
      { cmd: "with:", desc: "Pass variables to an action" },
      { cmd: "env:", desc: "Environment variables" },
      { cmd: "secrets:", desc: "Repository secrets" },
      { cmd: "needs: job-name", desc: "Dependency on another job" },
      { cmd: "if: condition", desc: "Execution condition" },
      { cmd: "matrix:", desc: "Test across multiple versions" },
      { cmd: "schedule:", desc: "Schedule" },
      { cmd: "workflow_dispatch:", desc: "Manual trigger" }
    ]
  }
};

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */

const ACHIEVEMENTS = [
  { id: "a1", title: "First Commit", icon: "🎯", desc: "Complete the first module", unlocked: false },
  { id: "a2", title: "Branch Master", icon: "🌿", desc: "Complete the branching and merging module", unlocked: false },
  { id: "a3", title: "PR Pro", icon: "🔄", desc: "Complete the Pull Requests module", unlocked: false },
  { id: "a4", title: "Level 1 Complete", icon: "⭐", desc: "Complete the Git Foundation level entirely", unlocked: false },
  { id: "a5", title: "Level 2 Complete", icon: "🚀", desc: "Complete the GitHub Ecosystem level entirely", unlocked: false },
  { id: "a6", title: "Level 3 Complete", icon: "👑", desc: "Complete the Professional Mastery level entirely", unlocked: false },
  { id: "a7", title: "Project Starter", icon: "📦", desc: "Complete the first project", unlocked: false },
  { id: "a8", title: "Project Master", icon: "🏗️", desc: "Complete 5 projects", unlocked: false },
  { id: "a9", title: "Quiz Whiz", icon: "🧠", desc: "Answer 10 questions correctly", unlocked: false },
  { id: "a10", title: "Glossary Guru", icon: "📖", desc: "Browse 20 glossary terms", unlocked: false },
  { id: "a11", title: "All-Rounder", icon: "🏅", desc: "Complete all modules", unlocked: false },
  { id: "a12", title: "Gold Star", icon: "🌟", desc: "Get 100% on any quiz", unlocked: false }
];

/* ============================================================
   APP — Application Logic
   LESSONS data is loaded from lessons.js
   ============================================================ */

const APP = {
  state: {
    tab: "home",
    level: "level1",
    module: null,
    project: null,
    playground: "terminal",
    quizResults: {},
    completedModules: [],
    projectProgress: [],
    glossaryViewed: [],
    quizAnswers: {}
  },

  init() {
    const hash = window.location.hash.replace("#", "");
    if (hash) this.state.tab = hash;
    this.loadProgress();
    this.renderNavbar();
    this.renderModules();
    this.renderLevelsSidebar();
    this.renderProjects();
    this.renderGlossary();
    this.renderCheatsheet();
    this.renderResources();
    this.renderAchievements();
    this.renderHome();
    this.attachEvents();
    const initialTab = window.location.hash.replace("#", "") || "home";
    this.navigate(initialTab);
  },

  renderNavbar() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    nav.innerHTML = `<div class="nav-inner">
      <span class="nav-logo" data-tab="home">
        <img src="assets/ael-logo.svg" alt="AEL" class="nav-logo-img">
        <span>AEL GitHub Academy</span>
      </span>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-tabs" id="navTabs">
        <span class="nav-tab active" data-tab="home">Home</span>
        <span class="nav-tab" data-tab="paths">Paths</span>
        <span class="nav-tab" data-tab="levels">Levels</span>
        <span class="nav-tab" data-tab="projects">Projects</span>
        <span class="nav-tab" data-tab="playground">Playground</span>
        <span class="nav-tab" data-tab="glossary">Glossary</span>
        <span class="nav-tab" data-tab="cheatsheet">Cheat Sheet</span>
        <span class="nav-tab" data-tab="resources">Resources</span>
        <span class="nav-tab" data-tab="certifications">Certs</span>
        <span class="nav-tab" data-tab="search">&#x1F50D;</span>
        <span class="nav-tab" data-tab="settings">&#x2699;&#xFE0F;</span>
        <span class="nav-tab" data-tab="about">About</span>
      </div>
    </div>`;
  },

  renderStats() {
    const el = document.getElementById("stats");
    if (!el) return;
    el.innerHTML = `
      <div class="stat"><span class="stat-num">${STATS.modules}</span><span class="stat-label">Modules</span></div>
      <div class="stat"><span class="stat-num">${STATS.lessons}</span><span class="stat-label">Lessons</span></div>
      <div class="stat"><span class="stat-num">${STATS.projects}</span><span class="stat-label">Projects</span></div>
      <div class="stat"><span class="stat-num">${STATS.hours}</span><span class="stat-label">Hours</span></div>
    `;
  },

  renderLevelsSidebar() {
    const el = document.getElementById("levels-sidebar");
    if (!el) return;
    el.innerHTML = `
      <div class="level-cards">
        ${LEVELS.map((l, i) => {
          const total = l.modules.length;
          const done = l.modules.filter(m => this.state.completedModules.includes(m.id)).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const active = l.id === this.state.level;
          return `
            <div class="level-card ${active ? 'active' : ''}"
                 data-level="${l.id}"
                 style="--lc:${l.color};animation-delay:${i * 0.06}s">
              <div class="lc-icon">${l.icon}</div>
              <div class="lc-body">
                <div class="lc-top">
                  <span class="lc-name">${l.name}</span>
                  <span class="lc-difficulty" style="background:${l.color}15;color:${l.color}">${l.difficulty}</span>
                </div>
                <p class="lc-desc">${l.desc}</p>
                <div class="lc-meta">
                  <span>${l.modules.length} modules</span>
                  <span>${l.duration}</span>
                </div>
                <div class="lc-progress">
                  <div class="lc-progress-bar"><div class="lc-progress-fill" style="width:${pct}%"></div></div>
                  <span class="lc-progress-text">${done}/${total} (${pct}%)</span>
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  modulesInLevel(levelId) {
    const l = LEVELS.find(x => x.id === levelId);
    return l ? l.modules : [];
  },

  getModuleIcon(num) {
    const icons = ["🔧","⚙️","📦","🌿","🔗","🔄","📋","🌐","⚡","📊","🏷️","🔒","💬","🤖","☁️","🖥️","🏢","🍴","🔀","👤","📁","📐","🏆"];
    return icons[num % icons.length];
  },

  renderModules() {
    const el = document.getElementById("modules-container");
    if (!el) return;
    const level = LEVELS.find(l => l.id === this.state.level);
    if (!level) return;
    const total = level.modules.length;
    const done = level.modules.filter(m => this.state.completedModules.includes(m.id)).length;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    el.innerHTML = `
      <div class="level-summary">
        <div class="ls-left">
          <span class="ls-badge" style="background:${level.color}15;color:${level.color}">${level.difficulty}</span>
          <h3 class="ls-title">${level.name}</h3>
          <p class="ls-desc">${level.desc}</p>
          <div class="ls-stats">
            <span>${level.modules.length} Modules</span>
            <span>${level.duration}</span>
            <span>${level.finalProject}</span>
          </div>
        </div>
        <div class="ls-right">
          <div class="ls-progress-label">Progress</div>
          <div class="ls-progress-bar">
            <div class="ls-progress-fill" style="width:${pct}%;background:${level.color}"></div>
          </div>
          <div class="ls-progress-text">${done}/${total} modules completed &middot; ${pct}%</div>
          ${done > 0 ? `<button class="btn btn-secondary" style="margin-top:8px;font-size:11px;padding:4px 10px" data-action="reset-level">🗑 Reset Level</button>` : ""}
        </div>
      </div>
      <div class="modules-grid">
        ${level.modules.map((m, i) => `
          <div class="module-card ${this.state.completedModules.includes(m.id) ? 'completed' : ''}"
               data-module="${m.id}" style="animation-delay:${i * 0.04}s">
            <div class="module-top">
              <span class="module-num">${String(m.num).padStart(2,"0")}</span>
              ${this.state.completedModules.includes(m.id) ? '<span class="module-check">✓</span>' : ''}
            </div>
            <h3>${m.title}</h3>
            <p>${m.description}</p>
            <div class="module-bottom">
              <span class="module-lessons">${m.lessons.length} lessons</span>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderModuleDetail(moduleId) {
    const el = document.getElementById("module-detail");
    if (!el) return;
    let mod = null;
    for (const l of LEVELS) {
      const found = l.modules.find(m => m.id === moduleId);
      if (found) { mod = found; break; }
    }
    if (!mod) { el.innerHTML = ""; el.style.display = "none"; return; }
    const completed = this.state.completedModules.includes(mod.id);
    const quiz = QUIZZES[mod.id] || [];
    const lesson = LESSONS[mod.id];
    el.style.display = "block";
    let content = `<button class="back-btn" data-action="back-modules">← Back to Modules</button>`;
    if (lesson) {
      content += `
        <div class="module-detail-inner">
          <h4>${lesson.title}</h4>
          <div class="sec"><h5>Overview</h5><p>${lesson.overview}</p></div>
          <div class="sec">
            <h5>Objectives</h5>
            <ul>${lesson.objectives.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>
          <div class="sec"><h5>Prerequisites</h5><p>${lesson.prerequisites}</p></div>
          <div class="sec"><h5>Theory</h5><p>${lesson.theory}</p></div>
          <div class="sec">
            <h5>Key Concepts</h5>
            <ul>${lesson.concepts.map(c => `<li><strong>${c.term}:</strong> ${c.def}</li>`).join("")}</ul>
          </div>
          <div class="sec">
            <h5>Flow Diagram</h5>
            <img src="diagrams/${lesson.id}.svg" alt="${lesson.title} flow diagram" style="width:100%;max-width:600px;border-radius:12px;border:1px solid var(--border-color);margin:8px 0;display:block" loading="lazy">
          </div>
          ${lesson.commands.length > 0 ? `
          <div class="sec">
            <h5>Commands</h5>
            <table style="width:100%;font-size:12px">
              ${lesson.commands.map(c => `<tr><td style="font-family:var(--font-mono);color:var(--success);padding:4px 8px;direction:ltr;text-align:left"><code>${c.cmd}</code></td><td style="color:var(--text-secondary);padding:4px 8px">${c.desc}</td></tr>`).join("")}
            </table>
          </div>` : ""}
          <div class="sec">
            <h5>Syntax Example</h5>
            ${lesson.syntax}
          </div>
          <div class="sec">
            <h5>Examples</h5>
            ${lesson.examples.map(e => `<div class="tip"><strong>${e.desc}</strong><pre style="margin-top:6px">${e.code}</pre></div>`).join("")}
          </div>
          <div class="sec">
            <h5>Best Practices</h5>
            <ul>${lesson.bestPractices.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
          <div class="sec">
            <h5>Common Mistakes</h5>
            ${lesson.commonMistakes.map(cm => `<div class="tip"><strong>⚠️ ${cm.mistake}</strong><br>${cm.fix}</div>`).join("")}
          </div>
          <div class="sec">
            <h5>Exercise</h5>
            <p>${lesson.exercise}</p>
          </div>
          <div class="sec">
            <h5>Lab</h5>
            <p>${lesson.lab}</p>
          </div>
          <div class="sec" style="background:rgba(0,255,204,.04);border-radius:8px;padding:14px">
            <h5>Summary</h5>
            <p>${lesson.summary}</p>
            <p style="margin-top:8px"><strong>Next:</strong> ${lesson.nextModule}</p>
          </div>
        </div>`;
    } else {
      content += `<div class="module-detail-inner">${mod.detail || ""}
        <div class="sec"><h5>Lessons</h5><ul>${mod.lessons.map(l => `<li>${l}</li>`).join("")}</ul></div>
      </div>`;
    }
    if (quiz.length > 0) {
      content += `
        <div class="module-detail-inner">
          <h4>Module Quiz</h4>
          <div id="quiz-${mod.id}">
            ${quiz.map((q, qi) => `
              <div class="quiz-question" data-quiz="${mod.id}" data-q="${qi}">
                <p><strong>${qi+1}. ${q.question}</strong></p>
                ${q.options.map((o, oi) => `
                  <label class="quiz-option ${this.state.quizAnswers[mod.id+'-'+qi] === oi ? 'selected' : ''}">
                    <input type="radio" name="q-${mod.id}-${qi}" value="${oi}"
                      ${this.state.quizAnswers[mod.id+'-'+qi] === oi ? 'checked' : ''}>
                    ${o}
                  </label>
                `).join("")}
              </div>
            `).join("")}
            <button class="btn" data-action="check-quiz" data-module="${mod.id}">Check Answers</button>
            <div id="quiz-result-${mod.id}" class="quiz-result"></div>
            <button class="btn" data-action="reset-quiz" data-module="${mod.id}" style="display:none;margin-top:8px" id="reset-quiz-${mod.id}">↻ Restart Quiz</button>
          </div>
        </div>`;
    }
    content += `
      <button class="btn ${completed ? 'btn-secondary' : 'btn-primary'}"
        data-action="toggle-module" data-module="${mod.id}">
        ${completed ? '✓ Completed' : 'Mark as Complete'}
      </button>`;
    el.innerHTML = content;
  },

  renderProjects(selectedId) {
    const el = document.getElementById("projects-container");
    if (!el) return;
    el.innerHTML = PROJECTS.map((p, i) => `
      <div class="project-list-item ${(selectedId || this.state.project) === p.id ? 'active' : ''}"
           data-project="${p.id}" style="animation-delay:${i * 0.04}s">
        <span class="pli-num">${String(p.num).padStart(2,"0")}</span>
        <span class="pli-icon">${p.icon}</span>
        <div class="pli-body">
          <span class="pli-title">${p.title}</span>
          <span class="pli-desc">${p.description}</span>
        </div>
        <span class="pli-difficulty ${p.difficulty}">${p.difficulty}</span>
        <span class="pli-arrow">→</span>
      </div>
    `).join("");
    if (selectedId || this.state.project) {
      this.renderProjectDetail(selectedId || this.state.project);
    } else {
      const pd = document.getElementById("project-detail");
      if (pd) pd.innerHTML = `<div class="pd-placeholder"><span>Select a project to view details</span></div>`;
    }
  },

  renderProjectDetail(projectId) {
    const el = document.getElementById("project-detail");
    if (!el) return;
    const proj = PROJECTS.find(p => p.id === projectId);
    if (!proj) {
      el.innerHTML = `<div class="pd-placeholder"><span>Project not found</span></div>`;
      return;
    }
    this.state.project = projectId;
    document.querySelectorAll(".project-list-item").forEach(item => {
      item.classList.toggle("active", item.dataset.project === projectId);
    });
    el.innerHTML = `
      <div class="project-detail-inner">
        <div class="pdi-header">
          <span class="pdi-icon">${proj.icon}</span>
          <div>
            <h3>${proj.num}. ${proj.title}</h3>
            <div class="pdi-meta">
              <span class="project-difficulty ${proj.difficulty}">${proj.difficulty}</span>
              <span class="pdi-tags">${proj.tags.map(t => `<span>${t}</span>`).join("")}</span>
            </div>
          </div>
        </div>
        <p class="pdi-desc">${proj.description}</p>
        ${proj.detail}
        <div class="ael-branding" style="margin-top:32px;border-top:2px solid var(--border-color);padding-top:24px">
          <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "ael_seal": "AEL Vision Framework — © Ayman Elmasry — AEL Digital Studio. All rights reserved under AEL Prompt IP System v1.0.",
  "owner": "Ayman Elmasry",
  "jobTitle": "Visionary Architect · AI Orchestrator · Brand Designer",
  "founderOf": ["AEL Digital Studio","Ayman Elmasry LLC (UAE)","Ayman Elmasry Advertising & Marketing (Egypt)"],
  "legal_entities": ["Ayman Elmasry LLC — UAE","Ayman Elmasry Advertising & Marketing — Egypt"],
  "digital_assets": ["AEL Vision Framework — v2.2","AEL Prompt IP System — v1.0","AEL 1000+ Prompts Library","AEL Sovereign Identity Block"],
  "certifications": ["AAST — Mini Certificate in Digital Arts & Web Design (Grade A in all 8 courses)","IBM — Artificial Intelligence Fundamentals","UPV — edX Information Systems (Parts 1 & 2)","Google — Digital Marketing Professional","Domestika — Creative Suite Mastery (7+ Courses)","Smouha Academy — Computer Systems Engineering"],
  "contact": { "website": "https://www.aymanelmasry.com", "email": "info@aymanelmasry.com", "telephone": ["+201113300073","+971506039162","+96555121251"] },
  "social": { "github": "https://github.com/aymanelmasryael", "linkedin": "https://www.linkedin.com/in/aymanelmasryael", "twitter": "https://x.com/aymanelmasryael", "codepen": "https://codepen.io/aymanelmasryael" },
  "verification_timestamp": "2026-07-05T00:00:00Z",
  "system_version": "v2.2",
  "color_sequence": [
    { "name": "AEL Blue", "hex": "#0074FF", "meaning": "Trust & Intelligence" },
    { "name": "Gold", "hex": "#FFD700", "meaning": "Premium & Vision" },
    { "name": "Teal", "hex": "#00FFCC", "meaning": "Innovation & Flow" },
    { "name": "Purple", "hex": "#6C47FF", "meaning": "Depth & Creativity" },
    { "name": "Pink", "hex": "#FF4D8D", "meaning": "Energy & Distinction" }
  ]
}
          </script>
          <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;padding:16px;background:var(--surface-color);border:1px solid var(--border-color);border-radius:12px">
            <img src="assets/ael-logo.svg" alt="AEL Digital Studio" style="width:52px;height:52px;border-radius:10px;flex-shrink:0">
            <div>
              <div style="font-weight:700;font-size:15px;color:var(--text-primary)">AEL Digital Studio</div>
              <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">Visionary Architect · AI Orchestrator · Brand Designer</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:4px">
                <a href="https://www.aymanelmasry.com" target="_blank" rel="noopener" style="color:var(--primary)">aymanelmasry.com</a>
                <span style="margin:0 6px">·</span>
                <a href="mailto:info@aymanelmasry.com" style="color:var(--primary)">info@aymanelmasry.com</a>
              </div>
            </div>
          </div>
          <div style="display:flex;gap:4px;margin-bottom:20px;border-radius:8px;overflow:hidden;height:6px">
            <span style="flex:1;background:#0074FF" title="AEL Blue — Trust & Intelligence"></span>
            <span style="flex:1;background:#FFD700" title="Gold — Premium & Vision"></span>
            <span style="flex:1;background:#00FFCC" title="Teal — Innovation & Flow"></span>
            <span style="flex:1;background:#6C47FF" title="Purple — Depth & Creativity"></span>
            <span style="flex:1;background:#FF4D8D" title="Pink — Energy & Distinction"></span>
          </div>
          <div style="font-size:12px;color:var(--text-muted);line-height:1.7;text-align:center">
            <p style="font-style:italic;margin:4px 0">&ldquo;AI gives you the tools, but the artist is the one who turns them into masterpieces.&rdquo;<br>&ldquo;الذكاء الاصطناعي يعطي الأدوات، لكن الفنان هو من يحولها إلى تحف فنية.&rdquo;</p>
            <p style="font-style:italic;margin:4px 0">&ldquo;Fame does not mean quality, and noise does not mean efficiency. True quality reveals itself in silence, while noise disappears when it truly matters.&rdquo;<br>&ldquo;الشهرة لا تعني الجودة، والضجيج لا يعني الكفاءة. الجودة الحقيقية تظهر في صمت، بينما يختفي الضجيج عندما يحين وقت الإنجاز الحقيقي.&rdquo;</p>
            <p style="font-style:italic;margin:4px 0">&ldquo;I don't design logos. I design logo generators. I don't build images. I build engines that produce images.&rdquo;<br>&ldquo;أنا لا أصمم الشعارات، بل أصمم مولدات الشعارات. ولا أبني الصور، بل أبني محركات تُنتج الصور.&rdquo;</p>
            <p style="margin:12px 0 0;font-weight:600;color:var(--text-secondary)">— Ayman Elmasry</p>
          </div>
        </div>
        <button class="btn-primary" style="margin-top:16px">&#x25B6; Start Project</button>
      </div>
    `;
  },

  renderGlossary() {
    const el = document.getElementById("glossary-container");
    if (!el) return;
    el.innerHTML = `
      <h2>Complete Glossary</h2>
      <div class="glossary-search">
        <input type="text" id="glossary-search-input" placeholder="Search for a term..." />
      </div>
      <div id="glossary-list" class="glossary-list">
        ${GLOSSARY.map(g => `
          <div class="glossary-term">
            <span class="glossary-term-word">${g.term}</span>
            <span class="glossary-term-def">${g.definition}</span>
          </div>
        `).join("")}
      </div>
    `;
  },

  searchGlossary() {
    const input = document.getElementById("glossary-search-input");
    const list = document.getElementById("glossary-list");
    if (!input || !list) return;
    const q = input.value.toLowerCase();
    const filtered = GLOSSARY.filter(g =>
      g.term.toLowerCase().includes(q) || g.definition.includes(q)
    );
    list.innerHTML = filtered.map(g => `
      <div class="glossary-term">
        <span class="glossary-term-word">${g.term}</span>
        <span class="glossary-term-def">${g.definition}</span>
      </div>
    `).join("");
    if (filtered.length > 0) {
      this.state.glossaryViewed = [...new Set([...this.state.glossaryViewed, ...filtered.map(g => g.term)])];
      this.checkAchievements();
    }
  },

  renderResources() {
    const el = document.getElementById("resources-container");
    if (!el) return;
    el.innerHTML = RESOURCES.map(section => `
      <div class="resources-section" style="margin-bottom:28px">
        <h3 style="font-size:16px;margin-bottom:14px;color:var(--text-primary)">${section.icon} ${section.category}</h3>
        <div class="resources-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px">
          ${section.items.map(item => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-card glass" style="display:block;padding:16px;border-radius:12px;text-decoration:none;transition:all .2s;border:1px solid var(--border-color);cursor:pointer">
              <strong style="color:var(--primary);font-size:13px;display:block;margin-bottom:4px">${item.title}</strong>
              <span style="color:var(--text-secondary);font-size:11px;line-height:1.6">${item.desc}</span>
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");
  },

  renderCheatsheet() {
    const el = document.getElementById("cheatsheet-container");
    if (!el) return;
    const sectionIcons = { git: "🔧", markdown: "📝", actions: "⚡" };
    el.innerHTML = Object.entries(CHEATSHEET).map(([key, section], si) => `
      <div class="cs-section glass" style="margin-bottom:20px;padding:20px;border-radius:var(--radius-lg)">
        <h3 style="font-size:16px;margin-bottom:14px;color:var(--text-primary);display:flex;align-items:center;gap:8px">
          <span>${sectionIcons[key] || "📋"}</span> ${section.title}
        </h3>
        <div class="cs-table-wrap">
          <table class="cs-table">
            <thead><tr><th>Command</th><th>Description</th></tr></thead>
            <tbody>
              ${section.items.map((i, idx) => `<tr class="${idx % 2 === 0 ? 'even' : 'odd'}">
                <td dir="ltr" style="text-align:left"><code>${i.cmd}</code></td>
                <td>${i.desc}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `).join("");
  },

  renderAbout() {
    const el = document.getElementById("about-content");
    if (!el) return;
    el.innerHTML = `
      <div class="section-header">
        <div class="section-badge">&#x2139;&#xFE0F; About</div>
        <h2>About This Course</h2>
      </div>
      <div class="about-grid">
        <div class="about-card glass">
          <div class="about-owner">
            <img src="${OWNER.photo}" alt="${OWNER.studio}" class="about-owner-img">
            <div class="about-owner-info">
              <h3>${OWNER.name}</h3>
              <strong>${OWNER.studio}</strong>
              <p>${OWNER.title}</p>
              <div class="about-owner-links">
                <a href="${OWNER.github}" target="_blank">&#x1F4BB; GitHub</a>
                <a href="${OWNER.linkedin}" target="_blank">&#x1F4C4; LinkedIn</a>
                <a href="${OWNER.website}" target="_blank">&#x1F310; Website</a>
              </div>
            </div>
          </div>
        </div>
        <div class="about-card glass">
          <h3>Course Info</h3>
          <p>A comprehensive, free Interactive Written Academy to learn Git and GitHub from zero to professional. Includes ${STATS.modules} modules across 4 learning paths, ${STATS.projects} hands-on projects, and 40+ labs.</p>
          <div class="about-version">Version 2.0.0</div>
          <div class="about-license">MIT License</div>
        </div>
        <div class="about-card glass">
          <h3>Features</h3>
          <ul class="about-list">
            <li>Interactive command playground</li>
            <li>Automatic progress tracking</li>
            <li>Interactive quizzes per module</li>
            <li>Achievements & badges</li>
            <li>4 structured Learning Paths</li>
            <li>GitHub Certification guides</li>
            <li>Dark mode</li>
            <li>Fully self-contained</li>
          </ul>
        </div>
      </div>
      <div id="achievements-container"></div>
      <div class="about-footer glass">
        <p>&#x00A9; 2026 <strong>${OWNER.studio}</strong> — All rights reserved</p>
        <p class="about-tagline">Created by <strong>${OWNER.name}</strong></p>
      </div>
    `;
    this.renderAchievements();
  },

  renderAchievements() {
    const el = document.getElementById("achievements-container");
    if (!el) return;
    const unlocked = ACHIEVEMENTS.filter(a => a.unlocked);
    const locked = ACHIEVEMENTS.filter(a => !a.unlocked);
    el.innerHTML = `
      <h2>Achievements</h2>
      <div class="achievements-grid">
        ${[...unlocked, ...locked].map(a => `
          <div class="achievement ${a.unlocked ? 'unlocked' : 'locked'}">
            <span class="achievement-icon">${a.unlocked ? a.icon : '🔒'}</span>
            <span class="achievement-title">${a.unlocked ? a.title : '???'}</span>
            <span class="achievement-desc">${a.unlocked ? a.desc : 'This achievement has not been unlocked yet'}</span>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderHome() {
    const el = document.getElementById("home-content");
    if (!el) return;
    const totalModules = LEVELS.reduce((a, l) => a + l.modules.length, 0);
    const done = this.state.completedModules.length;
    const totalPct = totalModules > 0 ? Math.round((done / totalModules) * 100) : 0;
    const unlockedCount = ACHIEVEMENTS.filter(a => a.unlocked).length;
    const projectDone = this.state.projectProgress.length;
    el.innerHTML = `
      <div class="owner-section glass">
        <div class="owner-avatar">
          <img src="${OWNER.photo}" alt="${OWNER.studio}">
          <span class="owner-status">Active</span>
        </div>
        <div class="owner-info">
          <h1 class="owner-name">${OWNER.name}</h1>
          <div class="owner-studio">${OWNER.studio}</div>
          <div class="owner-title">${OWNER.title}</div>
          <div class="owner-tagline">${OWNER.tagline}</div>
          <div class="owner-links">
            <a href="${OWNER.website}" target="_blank" class="owner-link">&#x1F310; Website</a>
            <a href="${OWNER.github}" target="_blank" class="owner-link">&#x1F4BB; GitHub</a>
            <a href="${OWNER.linkedin}" target="_blank" class="owner-link">&#x1F4C4; LinkedIn</a>
          </div>
        </div>
      </div>

      <div class="course-header glass">
        <div class="course-badge">&#x1F393; ${COURSE_INFO.subtitle}</div>
        <h1 class="course-title">${COURSE_INFO.title}</h1>
        <p class="course-desc">${COURSE_INFO.description.replace(/\n/g, '<br>')}</p>
        <div class="course-actions">
          <button class="btn btn-primary" data-tab="levels">&#x1F4DA; Start Learning</button>
          <button class="btn btn-secondary" data-tab="paths">&#x1F9F0; Learning Paths</button>
          <button class="btn btn-secondary" data-tab="projects">&#x1F680; Projects</button>
        </div>
      </div>

      <div class="home-stats-grid">
        <div class="home-stat-card glass" style="animation-delay:0s"><span class="stat-icon">&#x1F4DA;</span><span class="stat-num">${STATS.modules}</span><span class="stat-label">Modules</span></div>
        <div class="home-stat-card glass" style="animation-delay:.05s"><span class="stat-icon">&#x1F4D6;</span><span class="stat-num">${STATS.lessons}+</span><span class="stat-label">Lessons</span></div>
        <div class="home-stat-card glass" style="animation-delay:.1s"><span class="stat-icon">&#x1F680;</span><span class="stat-num">${STATS.projects}</span><span class="stat-label">Projects</span></div>
        <div class="home-stat-card glass" style="animation-delay:.15s"><span class="stat-icon">&#x1F9E0;</span><span class="stat-num">${STATS.quizzes}+</span><span class="stat-label">Quizzes</span></div>
        <div class="home-stat-card glass" style="animation-delay:.2s"><span class="stat-icon">&#x23F0;</span><span class="stat-num">${STATS.hours}</span><span class="stat-label">Hours</span></div>
        <div class="home-stat-card glass highlight" style="animation-delay:.25s"><span class="stat-icon">&#x1F3C6;</span><span class="stat-num">&#x2714;&#xFE0F;</span><span class="stat-label">${STATS.certificate}</span></div>
      </div>
      <div class="home-divider"></div>

      <div class="home-section-header">
        <h2>&#x1F9F0; Learning Paths</h2>
        <p>Choose your learning path</p>
      </div>
      <div class="home-paths-grid">
        ${LEARNING_PATHS.map((p, i) => `
          <div class="home-path-card glass" data-tab="paths" style="--path-color:${p.color};animation-delay:${i * 0.08}s">
            <div class="home-path-icon" style="background:${p.color}20;color:${p.color}">${p.icon}</div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="home-path-meta">
              <span class="home-path-level" style="background:${p.color}20;color:${p.color}">${p.level}</span>
              <span class="home-path-duration">&#x23F0; ${p.duration}</span>
              <span class="home-path-modules">${p.modules.length} ${p.id === 'path4' ? 'steps' : 'modules'}</span>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="home-progress-section glass" style="animation-delay:.3s">
        <h3>&#x1F4CB; Your Progress</h3>
        <div class="home-progress-stats">
          <div class="home-prog-stat"><strong>${done}</strong> modules done</div>
          <div class="home-prog-stat"><strong>${projectDone}</strong> projects done</div>
          <div class="home-prog-stat"><strong>${unlockedCount}</strong> achievements</div>
          <div class="home-prog-stat"><strong>${totalPct}%</strong> complete</div>
        </div>
        <div class="progress-bar big"><div class="progress-fill" style="width:${totalPct}%"></div></div>
      </div>
    `;
  },

  renderPaths() {
    const el = document.getElementById("paths-content");
    if (!el) return;
    el.innerHTML = `
      <div class="section-header">
        <div class="section-badge">&#x1F9F0; Learning Paths</div>
        <h2>Choose Your Learning Path</h2>
        <p>Four paths designed for different skill levels and goals</p>
      </div>
      <div class="paths-container">
        ${LEARNING_PATHS.map(p => {
          const mods = p.modules.map(mid => {
            for (const l of LEVELS) {
              const m = l.modules.find(x => x.id === mid);
              if (m) return m;
            }
            return null;
          }).filter(Boolean);
          const pDone = mods.filter(m => this.state.completedModules.includes(m.id)).length;
          return `
            <div class="path-card glass" style="--path-color:${p.color}">
              <div class="path-header">
                <div class="path-icon" style="background:${p.color}20;color:${p.color}">${p.icon}</div>
                <div class="path-title">
                  <h2>${p.title}</h2>
                  <span class="path-subtitle">${p.subtitle}</span>
                </div>
              </div>
              <p class="path-desc">${p.description}</p>
              <div class="path-meta">
                <span class="path-level" style="background:${p.color}20;color:${p.color}">${p.level}</span>
                <span>&#x23F0; ${p.duration}</span>
                <span>${p.modules.length} ${p.id === 'path4' ? 'steps' : 'modules'}</span>
              </div>
              <div class="path-progress-bar">
                <div class="path-progress-fill" style="width:${mods.length > 0 ? Math.round((pDone/mods.length)*100) : 0}%;background:${p.color}"></div>
              </div>
              <div class="path-progress-text">${pDone}/${mods.length} completed</div>
              <div class="path-modules-list">
                ${mods.map(m => `
                  <div class="path-module-item ${this.state.completedModules.includes(m.id) ? 'done' : ''}"
                       data-module="${m.id}">
                    <span class="path-module-icon">${this.state.completedModules.includes(m.id) ? '&#x2705;' : '&#x1F539;'}</span>
                    <span>${m.title}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  renderCertifications() {
    const el = document.getElementById("certifications-content");
    if (!el) return;
    el.innerHTML = `
      <div class="section-header">
        <div class="section-badge">&#x1F3C6; Certifications</div>
        <h2>GitHub Certification Paths</h2>
        <p>Prepare for official GitHub certifications with structured study paths</p>
      </div>
      <div class="certs-grid">
        ${CERTIFICATIONS.map(c => `
          <div class="cert-card glass">
            <div style="font-size:32px;margin-bottom:8px">${c.icon}</div>
            <h3>${c.title}</h3>
            <p>${c.description}</p>
            <div class="cert-meta">
              <span class="cert-difficulty ${c.difficulty.toLowerCase()}">${c.difficulty}</span>
              <span>&#x23F0; ${c.hours}</span>
            </div>
            <div class="cert-skills">
              <h4>Skills Measured</h4>
              <ul>${c.skills.map(s => `<li>${s}</li>`).join("")}</ul>
            </div>
            ${c.recommendedModules ? `
            <div class="cert-modules" style="margin-top:10px">
              <h4 style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Recommended Modules</h4>
              <div style="display:flex;flex-wrap:wrap;gap:4px">
                ${c.recommendedModules.map(mid => {
                  for (const l of LEVELS) {
                    const m = l.modules.find(x => x.id === mid);
                    if (m) return `<span style="background:rgba(0,116,255,.08);border:1px solid rgba(0,116,255,.1);padding:2px 8px;border-radius:6px;font-family:var(--font-mono);font-size:9px;color:var(--text-muted)">${m.num}: ${m.title}</span>`;
                  }
                  return '';
                }).join("")}
              </div>
            </div>` : ""}
            ${c.studyPlan ? `
            <div class="cert-study-plan" style="margin-top:10px;padding:10px;background:rgba(0,116,255,.06);border-radius:8px;font-size:11px;color:var(--text-secondary)">
              <strong>Study Plan:</strong> ${c.studyPlan}
            </div>` : ""}
          </div>
        `).join("")}
      </div>
    `;
  },

  attachEvents() {
    document.addEventListener("click", (e) => {
      const toggle = e.target.closest("#navToggle");
      if (toggle) {
        const tabs = document.getElementById("navTabs");
        if (tabs) tabs.classList.toggle("open");
        return;
      }
      const tab = e.target.closest("[data-tab]");
      if (tab) { e.preventDefault(); this.navigate(tab.dataset.tab); const tabs = document.getElementById("navTabs"); if (tabs) tabs.classList.remove("open"); return; }
      const level = e.target.closest("[data-level]");
      if (level) { this.showLevel(level.dataset.level); return; }
      const mod = e.target.closest("[data-module]");
      if (mod && !e.target.closest("[data-action]")) { this.showModule(mod.dataset.module); return; }
      const proj = e.target.closest("[data-project]");
      if (proj) { this.showProject(proj.dataset.project); return; }
      const action = e.target.closest("[data-action]");
      if (!action) return;
      const a = action.dataset.action;
      if (a === "back-modules") { this.navigate("levels"); return; }
      if (a === "back-projects") { this.navigate("projects"); return; }
      if (a === "toggle-module") { this.completeModule(action.dataset.module); return; }
      if (a === "check-quiz") { this.checkQuiz(action.dataset.module); return; }
      if (a === "reset-quiz") { this.resetQuiz(action.dataset.module); return; }
      if (a === "reset-level") { this.resetLevel(); return; }
      if (a === "reset-quiz-clear") { this.resetQuizClear(action.dataset.module); return; }
      if (a === "reset-quiz-keep") { this.resetQuizKeep(action.dataset.module); return; }
      if (a === "cancel-quiz-reset") { document.getElementById("quiz-reset-overlay")?.remove(); return; }
      if (a === "reset-all") {
        if (confirm("Are you sure you want to delete ALL progress? This cannot be undone.")) {
          this.state.completedModules = [];
          this.state.quizResults = {};
          this.state.quizAnswers = {};
          this.state.projectProgress = [];
          this.state.glossaryViewed = [];
          ACHIEVEMENTS.forEach(a => a.unlocked = false);
          this.saveProgress();
          localStorage.removeItem("learn-github-achievements");
          this.renderSettings();
          this.renderModules();
          this.renderLevelsSidebar();
          this.checkAchievements();
          this.renderAchievements();
          this.renderHome();
        }
        return;
      }
      if (a === "export-progress") {
        const data = {
          completedModules: this.state.completedModules,
          quizResults: this.state.quizResults,
          quizAnswers: this.state.quizAnswers,
          projectProgress: this.state.projectProgress,
          glossaryViewed: this.state.glossaryViewed,
          achievements: ACHIEVEMENTS.filter(a => a.unlocked).map(a => a.id)
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const aEl = document.createElement("a");
        aEl.href = url;
        aEl.download = "learn-github-backup.json";
        aEl.click();
        URL.revokeObjectURL(url);
        return;
      }
      if (a === "import-progress") {
        document.getElementById("import-file").click();
        return;
      }
      if (a === "goto-module") {
        this.state.level = action.dataset.level;
        this.showModule(action.dataset.module);
        return;
      }
      if (a === "goto-project") {
        this.state.level = "level1";
        this.showProject(action.dataset.project);
        this.navigate("projects");
        return;
      }
      if (a === "goto-glossary") {
        document.getElementById("glossary-search-input").value = action.dataset.term;
        this.navigate("glossary");
        this.searchGlossary();
        return;
      }
      if (a === "playground-run") { this.playgroundCommand(document.getElementById("playground-input")?.value || ""); return; }
      if (a === "playground-format") { this.playgroundFormat(); return; }
      if (a === "playground-action") { this.playgroundRunAction(); return; }
      if (a === "playground-clear") { document.getElementById("playground-input").value = ""; document.getElementById("playground-output").innerHTML = '<div class="output-placeholder">&#x1F3AE; Type a command and run it...</div>'; return; }
      if (a === "playground-copy") { const inp = document.getElementById("playground-input"); if (inp && inp.value) { navigator.clipboard.writeText(inp.value); } return; }
      const pg = e.target.closest("[data-playground]");
      if (pg) {
        document.querySelectorAll("[data-playground]").forEach(b => b.classList.remove("active"));
        pg.classList.add("active");
        document.getElementById("playground-input").style.display = pg.dataset.playground === "terminal" ? "block" : "none";
        document.getElementById("playground-md-input").style.display = pg.dataset.playground === "pr" ? "block" : "none";
        document.getElementById("playground-yml-input").style.display = pg.dataset.playground === "actions" ? "block" : "none";
        this.state.playground = pg.dataset.playground;
        return;
      }
    });

    document.addEventListener("change", (e) => {
      if (e.target.name && e.target.name.startsWith("q-")) {
        const parts = e.target.name.split("-");
        if (parts.length >= 3) {
          const modId = parts[1];
          const qIdx = parseInt(parts[2]);
          this.state.quizAnswers[modId + "-" + qIdx] = parseInt(e.target.value);
          this.saveProgress();
        }
      }
      if (e.target.id === "import-file") {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            if (data.completedModules) this.state.completedModules = data.completedModules;
            if (data.quizResults) this.state.quizResults = data.quizResults;
            if (data.quizAnswers) this.state.quizAnswers = data.quizAnswers;
            if (data.projectProgress) this.state.projectProgress = data.projectProgress;
            if (data.glossaryViewed) this.state.glossaryViewed = data.glossaryViewed;
            if (data.achievements) {
              ACHIEVEMENTS.forEach(a => a.unlocked = false);
              data.achievements.forEach(u => { const a = ACHIEVEMENTS.find(x => x.id === u); if(a) a.unlocked = true; });
            }
            this.saveProgress();
            this.renderSettings();
            this.renderModules();
            this.renderLevelsSidebar();
            this.checkAchievements();
            this.renderAchievements();
            this.renderHome();
          } catch(err) { alert("Invalid backup file"); }
        };
        reader.readAsText(file);
        e.target.value = "";
        return;
      }
    });

    document.addEventListener("input", (e) => {
      if (e.target.id === "glossary-search-input") { this.searchGlossary(); }
      if (e.target.id === "playground-input" && e.key === "Enter") { this.playgroundCommand(e.target.value); }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && document.activeElement?.id === "playground-input") {
        this.playgroundCommand(document.activeElement.value);
      }
    });

    // Navbar background on scroll
    document.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
      const btn = document.getElementById("backToTop");
      if (btn) btn.classList.toggle("visible", window.scrollY > 300);
    });
    document.getElementById("backToTop")?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "1") this.navigate("home");
      if (e.key === "2") this.navigate("paths");
      if (e.key === "3") this.navigate("levels");
      if (e.key === "4") this.navigate("projects");
      if (e.key === "5") this.navigate("playground");
      if (e.key === "6") this.navigate("glossary");
      if (e.key === "7") this.navigate("resources");
      if (e.key === "8") this.navigate("cheatsheet");
      if (e.key === "9") this.navigate("about");
      if (e.key === "0") this.navigate("search");
      if (e.key === "h" || e.key === "H") this.navigate("home");
      if (e.key === "g" || e.key === "G") this.navigate("glossary");
      if (e.key === "r" || e.key === "R") this.navigate("resources");
      if (e.key === "s" || e.key === "S") this.navigate("search");
      if (e.key === "?") {
        alert("Keyboard Shortcuts:\n\n1  Home\n2  Paths\n3  Levels\n4  Projects\n5  Playground\n6  Glossary\n7  Resources\n8  Cheat Sheet\n9  About\n0 / S  Search\nG  Glossary\nR  Resources\nH  Home\n?  Show this help");
      }
    });
  },

  navigate(tab) {
    window.location.hash = tab;
    this.state.tab = tab;
    document.querySelectorAll(".section").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));
    const navTab = document.querySelector(`.nav-tab[data-tab="${tab}"]`);
    if (navTab) navTab.classList.add("active");
    const target = document.getElementById(tab);
    if (target) target.classList.add("active");
    if (tab === "home") this.renderHome();
    if (tab === "paths") this.renderPaths();
    if (tab === "certifications") this.renderCertifications();
    if (tab === "levels") {
      this.renderLevelsSidebar();
      this.renderModules();
    }
    if (tab === "projects") {
      this.renderProjects();
    }
    if (tab === "glossary") this.renderGlossary();
    if (tab === "cheatsheet") this.renderCheatsheet();
    if (tab === "resources") this.renderResources();
    if (tab === "about") this.renderAbout();
    if (tab === "settings") this.renderSettings();
    if (tab === "search") this.renderSearch();
    if (tab === "levels") {
      const sd = document.getElementById("module-detail");
      if (sd) sd.style.display = "none";
    }
    this.checkAchievements();
  },

  playgroundCommand(cmd) {
    const body = document.getElementById("terminal-body");
    if (!body) return;
    const input = document.getElementById("playground-input");
    if (!cmd || cmd.trim() === "") return;
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `<span class="terminal-prompt">$</span> ${cmd.replace(/</g,'&lt;').replace(/>/g,'&gt;')}`;
    body.appendChild(line);
    const out = document.createElement("div");
    out.className = "terminal-line terminal-output";
    const c = cmd.trim().replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const lower = c.toLowerCase();

    // Stateful simulation
    if (!this._pg) this._pg = { init: false, commits: 1, staged: false, branch: "main" };
    const pg = this._pg;

    // Parse command
    const parts = lower.split(/\s+/);
    const gitCmd = parts[0] === "git" ? parts[1] : parts[0];
    const args = parts.slice(parts[0] === "git" ? 2 : 1);

    const isDiff = lower.startsWith("git diff") || c === "diff";
    const isAdd = lower.startsWith("git add") || c === "add";
    const isCommit = lower.startsWith("git commit") || c === "commit";
    const isStatus = lower.startsWith("git status") || c === "status" || c === "git status -s" || c === "status -s";
    const isLog = lower.startsWith("git log") || c === "log";
    const isBranch = lower.startsWith("git branch") || c === "branch";
    const isSwitch = lower.startsWith("git switch") || lower.startsWith("git checkout");

    if (c === "help" || c === "git help") {
      out.innerHTML = "Commands: init, status, add, commit, log, branch, switch, checkout, merge, push, pull, fetch, clone, remote, tag, stash, stash pop, diff, blame, rebase, cherry-pick, reflog, config, clear, help";
    } else if (c === "clear" || c === "reset") {
      body.innerHTML = "";
      out.innerHTML = "";
    } else if (c === "init" || c === "git init") {
      pg.init = true;
      pg.commits = 1;
      out.innerHTML = "✓ Initialized empty Git repository in ~/learner/project/.git/";
    } else if (isStatus) {
      if (!pg.init) out.innerHTML = "fatal: not a git repository (run 'init' first)";
      else {
        let s = `On branch ${pg.branch}`;
        if (pg.staged) s += `<br>Changes to be committed:<br>  (use "git restore --staged &lt;file&gt;..." to unstage)<br>        new file:   index.html`;
        else s += `<br>nothing to commit, working tree clean`;
        out.innerHTML = s;
      }
    } else if (isAdd) {
      if (!pg.init) { out.innerHTML = "fatal: not a git repository"; }
      else { pg.staged = true; out.innerHTML = "✓ Added to staging area"; }
    } else if (isCommit) {
      if (!pg.init) { out.innerHTML = "fatal: not a git repository"; }
      else if (!pg.staged) { out.innerHTML = "nothing to commit, working tree clean"; }
      else {
        pg.commits++;
        pg.staged = false;
        const hash = "a1b2c3d" + pg.commits + "e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f";
        out.innerHTML = `[${pg.branch} ${hash.slice(0,7)}] commit message<br> 1 file changed, 1 insertion(+)`;
      }
    } else if (isLog) {
      if (!pg.init) { out.innerHTML = "fatal: not a git repository"; }
      else {
        let logs = "";
        for (let i = pg.commits; i >= 1; i--) {
          const hash = "a1b2c3d" + i + "e5f6a";
          logs += `<span style="color:#d2a8ff">commit ${hash}${i === pg.commits ? ' (HEAD -> ' + pg.branch + ')' : ''}</span><br>`;
          logs += `Author: Learner &lt;learner@example.com&gt;<br>Date:   ${new Date().toDateString()}<br><br>    Commit #${i}<br><br>`;
        }
        out.innerHTML = logs || "No commits yet";
      }
    } else if (isBranch) {
      if (!pg.init) { out.innerHTML = "fatal: not a git repository"; }
      else {
        const branches = ["main", "feature-x", "bugfix/y"];
        out.innerHTML = branches.map(b => (b === pg.branch ? `* ${b}` : `  ${b}`)).join("<br>");
      }
    } else if (isSwitch) {
      const target = args[args.length - 1] || "main";
      pg.branch = target;
      out.innerHTML = `✓ Switched to branch '${target}'`;
    } else if (c.startsWith("git merge") || c === "merge") {
      out.innerHTML = "✓ Merge successful (fast-forward)<br> 1 file changed, 2 insertions(+)";
    } else if (c === "push" || c.startsWith("git push")) {
      out.innerHTML = `✓ Pushed to origin/${pg.branch}`;
    } else if (c === "pull" || c.startsWith("git pull")) {
      out.innerHTML = "✓ Already up to date";
    } else if (c === "fetch" || c.startsWith("git fetch")) {
      out.innerHTML = "✓ Fetched origin/main";
    } else if (c === "clone" || c.startsWith("git clone")) {
      out.innerHTML = `✓ Cloned into '${args[0] || 'project'}'`;
    } else if (c.startsWith("git remote") || c === "remote") {
      if (c.includes("-v")) out.innerHTML = "origin  git@github.com:user/repo.git (fetch)<br>origin  git@github.com:user/repo.git (push)";
      else out.innerHTML = "origin";
    } else if (c.startsWith("git tag")) {
      const tag = args[0] || "v1.0.0";
      out.innerHTML = `✓ Created tag '${tag}'`;
    } else if (c === "stash" || c === "git stash") {
      pg.staged = false;
      out.innerHTML = "✓ Saved working directory and index state WIP on main: a1b2c3d";
    } else if (c === "stash pop" || c === "git stash pop") {
      out.innerHTML = "✓ Restored changes from stash";
    } else if (c === "stash list" || c === "git stash list") {
      out.innerHTML = "stash@{0}: WIP on main: a1b2c3d commit message";
    } else if (isDiff) {
      out.innerHTML = "diff --git a/index.html b/index.html<br>new file mode 100644<br>index 0000000..e69de29<br>--- /dev/null<br>+++ b/index.html<br>@@ -0,0 +1 @@<br>+&lt;h1&gt;Hello&lt;/h1&gt;";
    } else if (c.startsWith("git blame") || c === "blame") {
      out.innerHTML = "a1b2c3d (Learner 2026-07-10 1) &lt;h1&gt;Hello&lt;/h1&gt;";
    } else if (c.startsWith("git rebase")) {
      out.innerHTML = "✓ Successfully rebased and updated refs/heads/feature";
    } else if (c.startsWith("git cherry-pick") || c === "cherry-pick") {
      out.innerHTML = "✓ Cherry-picked commit x1y2z3";
    } else if (c === "reflog" || c === "git reflog") {
      out.innerHTML = "a1b2c3d HEAD@{0}: commit: Commit #1<br>e5f6a7b HEAD@{1}: commit (initial): Initial commit";
    } else if (c.startsWith("git config")) {
      out.innerHTML = "✓ Configured: user.name=Learner";
    } else if (c === "version" || c === "--version" || c === "git --version" || c === "git version") {
      out.innerHTML = "git version 2.45.0 (Apple Git-3.1)";
    } else {
      out.innerHTML = `⨯ unknown command: ${cmd}. Type 'help' for available commands.`;
    }
    if (out.innerHTML) body.appendChild(out);
    body.scrollTop = body.scrollHeight;
    if (input) input.value = "";
  },

  playgroundFormat() {
    const input = document.getElementById("playground-md-input");
    const preview = document.getElementById("playground-md-preview");
    if (!input || !preview) return;
    let md = input.value;
    let html = md
      .replace(/### (.+)/g, "<h3>$1</h3>")
      .replace(/## (.+)/g, "<h2>$1</h2>")
      .replace(/# (.+)/g, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/```(\w*)\n?([\s\S]*?)```/g, "<pre><code>$2</code></pre>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/^- (.+)/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
      .replace(/\n\n/g, "</p><p>")
      .replace(/^(.+)$/gm, (m) => {
        if (m.startsWith("<")) return m;
        return `<p>${m}</p>`;
      });
    preview.innerHTML = html;
  },

  playgroundRunAction() {
    const input = document.getElementById("playground-yml-input");
    const output = document.getElementById("playground-action-output");
    if (!input || !output) return;
    output.innerHTML = `
      <div class="action-log">
        <div class="action-step">✓ Workflow loaded</div>
        <div class="action-step">✓ Job 'test' started on ubuntu-latest</div>
        <div class="action-step">✓ actions/checkout@v4 completed</div>
        <div class="action-step">✓ Run completed successfully</div>
      </div>
    `;
  },

  showLevel(levelId) {
    this.state.level = levelId;
    this.state.module = null;
    document.querySelectorAll(".level-tab").forEach(el => el.classList.remove("active"));
    const tab = document.querySelector(`.level-tab[data-level="${levelId}"]`);
    if (tab) tab.classList.add("active");
    this.renderModules();
    document.getElementById("module-detail").style.display = "none";
  },

  showModule(moduleId) {
    this.state.module = moduleId;
    for (const l of LEVELS) {
      if (l.modules.find(m => m.id === moduleId)) {
        this.state.level = l.id;
        break;
      }
    }
    this.navigate("levels");
    this.renderModuleDetail(moduleId);
    setTimeout(() => {
      const el = document.getElementById("module-detail");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  },

  showProject(projectId) {
    this.renderProjects(projectId);
  },

  completeModule(id) {
    const idx = this.state.completedModules.indexOf(id);
    if (idx > -1) {
      this.state.completedModules.splice(idx, 1);
    } else {
      this.state.completedModules.push(id);
    }
    this.saveProgress();
    this.renderModules();
    this.renderModuleDetail(id);
    this.checkAchievements();
    this.renderAchievements();
  },

  checkQuiz(moduleId) {
    const quiz = QUIZZES[moduleId];
    if (!quiz) return;
    let correct = 0;
    quiz.forEach((q, qi) => {
      const ans = this.state.quizAnswers[moduleId + "-" + qi];
      if (ans === q.correct) correct++;
      const opts = document.querySelectorAll(`.quiz-question[data-quiz="${moduleId}"][data-q="${qi}"] .quiz-option`);
      opts.forEach((o, oi) => {
        o.classList.remove("correct", "wrong");
        if (oi === q.correct) o.classList.add("correct");
        if (oi === ans && ans !== q.correct) o.classList.add("wrong");
      });
    });
    const result = document.getElementById(`quiz-result-${moduleId}`);
    if (result) {
      const total = quiz.length;
      const pct = Math.round((correct / total) * 100);
      result.innerHTML = `✅ ${correct}/${total} correct answers (${pct}%)`;
      if (pct === 100) {
        result.innerHTML += " 🏆 Excellent!";
        const ach = ACHIEVEMENTS.find(a => a.id === "a12");
        if (ach) { ach.unlocked = true; this.renderAchievements(); this.saveProgress(); }
      }
      this.state.quizResults[moduleId] = { correct, total, pct };
      this.saveProgress();
      this.checkAchievements();
    }
    const resetBtn = document.getElementById(`reset-quiz-${moduleId}`);
    if (resetBtn) resetBtn.style.display = "inline-flex";
  },

  resetQuiz(moduleId) {
    const existing = document.getElementById("quiz-reset-overlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.id = "quiz-reset-overlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center";
    overlay.innerHTML = `
      <div style="background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:28px;max-width:380px;width:90%;text-align:center">
        <h4 style="margin:0 0 8px;font-size:15px">Restart Quiz</h4>
        <p style="font-size:13px;color:var(--text-secondary);margin:0 0 18px">Choose how to restart the quiz:</p>
        <button class="btn" data-action="reset-quiz-clear" data-module="${moduleId}" style="width:100%;margin-bottom:8px">🗑 Clear Answers & Restart</button>
        <button class="btn btn-secondary" data-action="reset-quiz-keep" data-module="${moduleId}" style="width:100%;margin-bottom:8px">📝 Keep Answers, Reset Result</button>
        <button class="btn" style="width:100%;background:transparent;color:var(--text-muted);border:0;font-size:12px;padding:6px" data-action="cancel-quiz-reset">Cancel</button>
      </div>`;
    overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });
    document.body.appendChild(overlay);
  },

  resetQuizClear(moduleId) {
    const el = document.getElementById("quiz-reset-overlay");
    if (el) el.remove();
    const quiz = QUIZZES[moduleId];
    if (!quiz) return;
    quiz.forEach((q, qi) => delete this.state.quizAnswers[moduleId + "-" + qi]);
    delete this.state.quizResults[moduleId];
    this.saveProgress();
    this.renderModuleDetail(moduleId);
  },

  resetQuizKeep(moduleId) {
    const el = document.getElementById("quiz-reset-overlay");
    if (el) el.remove();
    delete this.state.quizResults[moduleId];
    this.saveProgress();
    this.renderModuleDetail(moduleId);
  },

  resetLevel() {
    const level = LEVELS.find(l => l.id === this.state.level);
    if (!level) return;
    level.modules.forEach(m => {
      const idx = this.state.completedModules.indexOf(m.id);
      if (idx > -1) this.state.completedModules.splice(idx, 1);
      const quiz = QUIZZES[m.id];
      if (quiz) quiz.forEach((q, qi) => delete this.state.quizAnswers[m.id + "-" + qi]);
      delete this.state.quizResults[m.id];
    });
    this.saveProgress();
    this.renderModules();
    this.renderLevelsSidebar();
    this.checkAchievements();
    this.renderAchievements();
  },

  renderSettings() {
    const el = document.getElementById("settings-container");
    if (!el) return;
    const totalModules = LEVELS.reduce((a, l) => a + l.modules.length, 0);
    const done = this.state.completedModules.length;
    const pct = totalModules > 0 ? Math.round((done / totalModules) * 100) : 0;
    el.innerHTML = `
      <div style="max-width:500px;margin:0 auto">
        <div class="glass" style="padding:24px;border-radius:var(--radius-lg);margin-bottom:16px">
          <h4 style="margin-bottom:12px">&#x1F4CA; Progress Summary</h4>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">${done}/${totalModules} modules completed (${pct}%)</p>
          <div style="height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden;margin-bottom:16px">
            <div style="height:100%;width:${pct}%;background:var(--primary);border-radius:3px;transition:width .4s"></div>
          </div>
          <p style="font-size:12px;color:var(--text-muted)">${Object.keys(this.state.quizResults).length} quizzes taken</p>
        </div>
        <div class="glass" style="padding:24px;border-radius:var(--radius-lg);margin-bottom:16px">
          <h4 style="margin-bottom:12px">&#x1F5D1; Reset All Progress</h4>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px">This will permanently delete all completed modules, quiz results, and achievements.</p>
          <button class="btn btn-danger" data-action="reset-all" style="background:var(--danger);color:#fff;border:0">Delete Everything</button>
        </div>
        <div class="glass" style="padding:24px;border-radius:var(--radius-lg)">
          <h4 style="margin-bottom:12px">&#x1F4E6; Export / Import</h4>
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:12px">Backup your progress or restore from a backup.</p>
          <button class="btn btn-secondary" data-action="export-progress" style="margin-right:8px">&#x1F5E5; Export</button>
          <button class="btn btn-secondary" data-action="import-progress">&#x1F4E4; Import</button>
          <input type="file" id="import-file" accept=".json" style="display:none" data-action="import-file">
        </div>
      </div>`;
  },

  renderSearch() {
    const el = document.getElementById("search-container");
    if (!el) return;
    el.innerHTML = `
      <div style="max-width:600px;margin:0 auto">
        <div style="position:relative;margin-bottom:20px">
          <input type="text" id="search-input" placeholder="Search modules, lessons, projects, glossary..." style="width:100%;padding:12px 16px;border-radius:var(--radius-md);border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-primary);font-size:14px;font-family:var(--font-sans);outline:none">
        </div>
        <div id="search-results" style="font-size:13px;color:var(--text-secondary)">Start typing to search...</div>
      </div>`;
    const input = document.getElementById("search-input");
    if (input) {
        input.focus();
        input.addEventListener("input", () => this.performSearch(input.value));
    }
  },

  performSearch(query) {
    const el = document.getElementById("search-results");
    if (!el) return;
    const q = query.trim().toLowerCase();
    if (!q) { el.innerHTML = "Start typing to search..."; return; }

    const results = [];

    LEVELS.forEach(l => {
        l.modules.forEach(m => {
            let score = 0;
            if (m.title.toLowerCase().includes(q)) score += 10;
            if (m.description.toLowerCase().includes(q)) score += 5;
            const lesson = LESSONS[m.id];
            if (lesson) {
                if (lesson.overview?.toLowerCase().includes(q)) score += 3;
                if (lesson.objectives?.some(o => o.toLowerCase().includes(q))) score += 3;
                if (lesson.theory?.toLowerCase().includes(q)) score += 2;
                if (lesson.concepts?.some(c => c.term.toLowerCase().includes(q) || c.def.toLowerCase().includes(q))) score += 3;
                if (lesson.commands?.some(c => c.cmd.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))) score += 3;
                if (lesson.examples?.some(e => e.desc.toLowerCase().includes(q))) score += 2;
                if (lesson.bestPractices?.some(b => b.toLowerCase().includes(q))) score += 2;
                if (lesson.commonMistakes?.some(cm => cm.mistake.toLowerCase().includes(q) || cm.fix.toLowerCase().includes(q))) score += 2;
            }
            if (score > 0) results.push({ type: "module", title: m.title, desc: m.description, id: m.id, level: l.id, score });
        });
    });

    PROJECTS.forEach(p => {
        let score = 0;
        if (p.title.toLowerCase().includes(q)) score += 10;
        if (p.description.toLowerCase().includes(q)) score += 5;
        if (p.detail?.toLowerCase().includes(q)) score += 2;
        if (score > 0) results.push({ type: "project", title: p.title, desc: p.description, id: p.id, score });
    });

    GLOSSARY.forEach(g => {
        let score = 0;
        if (g.term.toLowerCase().includes(q)) score += 10;
        if (g.def.toLowerCase().includes(q)) score += 5;
        if (score > 0) results.push({ type: "glossary", title: g.term, desc: g.def, score });
    });

    results.sort((a, b) => b.score - a.score);
    const top = results.slice(0, 20);

    if (top.length === 0) { el.innerHTML = `<p style="color:var(--text-muted)">No results found for "${q}"</p>`; return; }

    el.innerHTML = `<p style="color:var(--text-muted);margin-bottom:10px;font-size:12px">${top.length} result${top.length > 1 ? 's' : ''}</p>
      ${top.map(r => {
        const icon = r.type === "module" ? "&#x1F4DA;" : r.type === "project" ? "&#x1F680;" : "&#x1F4D6;";
        const action = r.type === "module" ? `data-action="goto-module" data-module="${r.id}" data-level="${r.level}"` : r.type === "project" ? `data-action="goto-project" data-project="${r.id}"` : `data-action="goto-glossary" data-term="${r.title}"`;
        return `<div class="search-result" style="padding:10px 14px;border-radius:var(--radius-sm);border:1px solid var(--border-color);margin-bottom:6px;cursor:pointer;transition:background .2s" ${action}>
          <span style="font-weight:600;font-size:13px">${icon} ${r.title}</span>
          <span style="display:block;font-size:11px;color:var(--text-secondary);margin-top:2px">${r.desc.substring(0, 100)}${r.desc.length > 100 ? '...' : ''}</span>
        </div>`;
      }).join("")}`;
  },

  checkAchievements() {
    const totalModules = LEVELS.reduce((a, l) => a + l.modules.length, 0);
    const done = this.state.completedModules.length;
    const level1 = LEVELS[0].modules;
    const level2 = LEVELS[1].modules;
    const level3 = LEVELS[2].modules;
    const l1Done = level1.filter(m => this.state.completedModules.includes(m.id)).length;
    const l2Done = level2.filter(m => this.state.completedModules.includes(m.id)).length;
    const l3Done = level3.filter(m => this.state.completedModules.includes(m.id)).length;
    const quizCorrect = Object.values(this.state.quizResults).reduce((a, r) => a + r.correct, 0);

    const checks = {
      a1: done >= 1,
      a2: this.state.completedModules.includes("m4"),
      a3: this.state.completedModules.includes("m6"),
      a4: l1Done >= level1.length,
      a5: l2Done >= level2.length,
      a6: l3Done >= level3.length,
      a7: this.state.projectProgress.length >= 1,
      a8: this.state.projectProgress.length >= 5,
      a9: quizCorrect >= 10,
      a10: this.state.glossaryViewed.length >= 20,
      a11: done >= totalModules,
      a12: Object.values(this.state.quizResults).some(r => r.pct === 100)
    };
    let changed = false;
    ACHIEVEMENTS.forEach(a => {
      if (checks[a.id] && !a.unlocked) { a.unlocked = true; changed = true; }
    });
    if (changed) { this.renderAchievements(); this.saveProgress(); }
  },

  loadProgress() {
    try {
      const saved = localStorage.getItem("learn-github-progress");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.completedModules) this.state.completedModules = data.completedModules;
        if (data.quizResults) this.state.quizResults = data.quizResults;
        if (data.quizAnswers) this.state.quizAnswers = data.quizAnswers;
        if (data.glossaryViewed) this.state.glossaryViewed = data.glossaryViewed;
        if (data.projectProgress) this.state.projectProgress = data.projectProgress;
        if (data.level) this.state.level = data.level;
      }
      ACHIEVEMENTS.forEach(a => { a.unlocked = false; });
      const savedAch = localStorage.getItem("learn-github-achievements");
      if (savedAch) {
        const achData = JSON.parse(savedAch);
        if (Array.isArray(achData)) {
          achData.forEach(u => {
            const a = ACHIEVEMENTS.find(x => x.id === u);
            if (a) a.unlocked = true;
          });
        }
      }
    } catch (e) { /* ignore */ }
  },

  saveProgress() {
    try {
      const data = {
        completedModules: this.state.completedModules,
        quizResults: this.state.quizResults,
        quizAnswers: this.state.quizAnswers,
        glossaryViewed: this.state.glossaryViewed,
        projectProgress: this.state.projectProgress,
        level: this.state.level
      };
      localStorage.setItem("learn-github-progress", JSON.stringify(data));
      const unlocked = ACHIEVEMENTS.filter(a => a.unlocked).map(a => a.id);
      localStorage.setItem("learn-github-achievements", JSON.stringify(unlocked));
    } catch (e) { /* ignore */ }
  }
};

/* ============================================================
   Initialize on DOMContentLoaded
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => APP.init());
