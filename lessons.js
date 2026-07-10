/* ============================================================
   LESSONS — Complete written lessons for all 23 modules
   Each module: overview, objectives, prerequisites, theory,
   concepts, diagram, commands, syntax, examples, best practices,
   common mistakes, exercise, lab, summary, next module
   ============================================================ */

const LESSONS = {
  "m1": {
    "id": "m1",
    "num": 1,
    "title": "Welcome to Git & GitHub",
    "level": "l1",
    "overview": "Git is the most widely used version control system. This module introduces version control concepts, the difference between Git and GitHub, and the three fundamental states of Git files.",
    "objectives": [
      "Understand what version control is and why it matters",
      "Distinguish between Git (local) and GitHub (cloud)",
      "Learn the three states of Git: working, staged, committed",
      "Write basic terminal commands to navigate your computer"
    ],
    "prerequisites": "Basic computer literacy. No prior Git experience needed.",
    "theory": "Version control is a system that records changes to files over time. You can recall specific versions, compare changes across versions, and collaborate without losing work. Git is a distributed version control system created by Linus Torvalds in 2005. Unlike centralized systems (SVN, CVS), every developer has a full copy of the repository history, enabling offline work and preventing single points of failure. GitHub is a cloud platform that hosts Git repositories and adds collaboration features like Pull Requests, Issues, Actions, and Projects. Files in Git move through three states: the Working Directory where you edit files, the Staging Area where you prepare changes for a snapshot, and the Repository where committed snapshots are stored permanently. Understanding these three states is fundamental to mastering Git.",
    "concepts": [
      {
        "term": "Version Control",
        "def": "A system that records file changes over time, allowing rollback and collaboration."
      },
      {
        "term": "Git",
        "def": "A distributed, open-source version control system created by Linus Torvalds."
      },
      {
        "term": "GitHub",
        "def": "A cloud platform for hosting Git repositories with collaboration features."
      },
      {
        "term": "Repository",
        "def": "A folder containing your project and its complete Git history."
      },
      {
        "term": "Commit",
        "def": "A snapshot of changes saved to the local repository with a unique SHA identifier."
      },
      {
        "term": "Working Directory",
        "def": "The folder where you currently edit files before staging."
      },
      {
        "term": "Staging Area",
        "def": "A temporary area where files are prepared before commit."
      }
    ],
    "diagram": "Working Directory -->[git add]--> Staging Area -->[git commit]--> Repository",
    "commands": [
      {
        "cmd": "pwd",
        "desc": "Print working directory"
      },
      {
        "cmd": "ls -la",
        "desc": "List all files including hidden"
      },
      {
        "cmd": "cd <folder>",
        "desc": "Change directory"
      },
      {
        "cmd": "mkdir <name>",
        "desc": "Create a new folder"
      },
      {
        "cmd": "touch <file>",
        "desc": "Create an empty file"
      }
    ],
    "syntax": "<pre><code># Navigate and create folders\npwd\nls\ncd ~/Desktop\nmkdir my-project\ncd my-project</code></pre>",
    "examples": [
      {
        "desc": "Create a project folder and navigate into it",
        "code": "mkdir learn-git\ncd learn-git\npwd"
      },
      {
        "desc": "List all files including hidden",
        "code": "ls -la"
      }
    ],
    "bestPractices": [
      "Use meaningful folder names with hyphens, no spaces",
      "Keep one project per folder",
      "Learn basic terminal commands before diving into Git",
      "Practice navigating folders daily"
    ],
    "commonMistakes": [
      {
        "mistake": "Confusing Git with GitHub",
        "fix": "Git = local version control. GitHub = cloud hosting."
      },
      {
        "mistake": "Skipping the staging area",
        "fix": "Always stage with git add before commit."
      }
    ],
    "exercise": "Create a folder called version-control-practice. Create notes.txt inside it. Use terminal to navigate, create, and list files.",
    "lab": "Open terminal. Run pwd. Create folder git-intro. Navigate into it. Create hello.txt. List contents. Navigate back to home.",
    "summary": "Version control tracks file changes. Git manages versions locally. GitHub hosts repos in the cloud. Files move through working, staged, committed states.",
    "nextModule": "Module 2: Installing & Configuring Git"
  },
  "m2": {
    "id": "m2",
    "num": 2,
    "title": "Installing & Configuring Git",
    "level": "l1",
    "overview": "Before using Git you must install it and configure your identity. This module covers installation on all major OSes, identity configuration, SSH key generation, and connection verification.",
    "objectives": [
      "Install Git on macOS, Windows, or Linux",
      "Configure your name and email globally",
      "Generate and add an SSH key to GitHub",
      "Verify your connection to GitHub"
    ],
    "prerequisites": "Basic terminal familiarity. A GitHub account. Completed Module 1.",
    "theory": "Git can be installed via package managers or direct download. After installation you must set your identity because every commit uses this information. Git supports three configuration levels: system (all users), global (current user), and local (current repository). SSH keys provide secure password-free authentication to GitHub. The ed25519 algorithm is the current recommended standard for SSH keys due to its strong security and good performance. After generating the key pair, you add the public key to your GitHub account under Settings > SSH and GPG keys.",
    "concepts": [
      {
        "term": "git config",
        "def": "Git's configuration system with system, global, and local levels."
      },
      {
        "term": "SSH Key",
        "def": "A cryptographic key pair for secure authentication without passwords."
      },
      {
        "term": "ed25519",
        "def": "A modern secure elliptic-curve algorithm for SSH keys."
      },
      {
        "term": "Global Config",
        "def": "Configuration applied to all repos for the current user."
      },
      {
        "term": "Identity",
        "def": "Your name and email attached to every commit you make."
      }
    ],
    "diagram": "Install Git --> Configure Identity --> Generate SSH Key --> Add to GitHub --> Verify Connection",
    "commands": [
      {
        "cmd": "git config --global user.name 'Name'",
        "desc": "Set your Git username globally"
      },
      {
        "cmd": "git config --global user.email 'you@email.com'",
        "desc": "Set your Git email globally"
      },
      {
        "cmd": "ssh-keygen -t ed25519 -C 'you@email.com'",
        "desc": "Generate a new SSH key"
      },
      {
        "cmd": "cat ~/.ssh/id_ed25519.pub",
        "desc": "Display your public SSH key"
      },
      {
        "cmd": "ssh -T git@github.com",
        "desc": "Test SSH connection to GitHub"
      },
      {
        "cmd": "git config --list",
        "desc": "Show all Git configuration"
      }
    ],
    "syntax": "<pre><code># macOS\nbrew install git\n# Windows\nwinget install Git.Git\n# Linux\nsudo apt install git\n# Verify\ngit --version</code></pre>",
    "examples": [
      {
        "desc": "Configure Git identity",
        "code": "git config --global user.name 'Ayman Elmasry'\ngit config --global user.email 'ayman@example.com'\ngit config --global core.editor 'code --wait'"
      },
      {
        "desc": "Create and display SSH key",
        "code": "ssh-keygen -t ed25519 -C 'ayman@example.com'\ncat ~/.ssh/id_ed25519.pub"
      }
    ],
    "bestPractices": [
      "Use the same email for Git and GitHub to connect commits to your account",
      "Configure your editor once with git config --global core.editor",
      "Use SSH instead of HTTPS for security and convenience",
      "Verify config with git config --list"
    ],
    "commonMistakes": [
      {
        "mistake": "Not setting user.name and user.email",
        "fix": "Run git config --global for both immediately after install."
      },
      {
        "mistake": "Adding private key to GitHub instead of public",
        "fix": "Only add the .pub file. Never share your private key."
      },
      {
        "mistake": "Using HTTPS instead of SSH",
        "fix": "SSH is more secure and does not need a password each time."
      }
    ],
    "exercise": "Install Git. Configure your name and email globally. Generate an ed25519 SSH key. Add the public key to GitHub. Run ssh -T git@github.com to verify.",
    "lab": "Check git --version. Install if needed. Configure name and email. Generate SSH key. Display public key. Add to GitHub. Test connection. Run git config --list to verify settings.",
    "summary": "Install Git, set your identity, generate SSH keys, and verify connection to GitHub before starting development.",
    "nextModule": "Module 3: Your First Repository"
  },
  "m3": {
    "id": "m3",
    "num": 3,
    "title": "Your First Repository",
    "level": "l1",
    "overview": "Create your first Git repository, stage and commit changes, and connect your local work to GitHub. This is the fundamental daily workflow.",
    "objectives": [
      "Initialize a Git repository with git init",
      "Stage files using git add",
      "Commit changes with descriptive messages",
      "Connect local repo to GitHub and push",
      "View commit history with git log"
    ],
    "prerequisites": "Git installed and configured with SSH. GitHub account ready.",
    "theory": "A Git repository is a folder with a hidden .git directory storing all version history. The git init command creates this structure. After making changes you stage files with git add and commit with git commit. Each commit creates a snapshot with a unique SHA hash, author, timestamp, and message. To back up on GitHub you add a remote with git remote add and push with git push. The first push uses -u to set upstream tracking so later pushes only need git push.",
    "concepts": [
      {
        "term": "git init",
        "def": "Initializes a new Git repository."
      },
      {
        "term": "git add",
        "def": "Stages changes for the next commit."
      },
      {
        "term": "git commit",
        "def": "Creates a snapshot of staged changes with a message."
      },
      {
        "term": "SHA",
        "def": "Unique 40-character identifier for each commit."
      },
      {
        "term": "Remote",
        "def": "A copy of the repository hosted on GitHub."
      },
      {
        "term": "git push",
        "def": "Uploads local commits to the remote repository."
      },
      {
        "term": "git status",
        "def": "Shows the current state of files (modified/staged/committed)."
      }
    ],
    "diagram": "git init --> git add --> git commit --> git remote add --> git push",
    "commands": [
      {
        "cmd": "git init",
        "desc": "Initialize a new Git repository"
      },
      {
        "cmd": "git add <file>",
        "desc": "Stage a specific file"
      },
      {
        "cmd": "git add .",
        "desc": "Stage all changes"
      },
      {
        "cmd": "git commit -m 'msg'",
        "desc": "Commit staged changes"
      },
      {
        "cmd": "git status",
        "desc": "Show current file state"
      },
      {
        "cmd": "git log --oneline",
        "desc": "Compact commit history"
      },
      {
        "cmd": "git remote add origin <url>",
        "desc": "Connect to GitHub"
      }
    ],
    "syntax": "<pre><code>git init\ngit add README.md\ngit commit -m 'initial commit'\ngit remote add origin git@github.com:user/repo.git\ngit push -u origin main</code></pre>",
    "examples": [
      {
        "desc": "Full first-repo workflow",
        "code": "mkdir my-first-repo && cd $_\ngit init\necho '# Hello' > README.md\ngit add README.md\ngit commit -m 'first commit'\ngit remote add origin git@github.com:user/repo.git\ngit push -u origin main"
      }
    ],
    "bestPractices": [
      "Commit early and often with small focused changes",
      "Write clear commit messages in present tense",
      "Check git status before every commit",
      "Create a .gitignore at the start",
      "Never push sensitive data like passwords or API keys"
    ],
    "commonMistakes": [
      {
        "mistake": "Creating GitHub repo with README then trying to add local repo",
        "fix": "Either create an empty GitHub repo (no README) or clone first."
      },
      {
        "mistake": "Forgetting git add before git commit",
        "fix": "Nothing commits unless staged. Always run git add first."
      }
    ],
    "exercise": "Create a folder my-website. Init Git. Add index.html. Stage and commit. Create an empty repo on GitHub. Connect and push. Verify files appear on GitHub.com.",
    "lab": "mkdir lab-first-repo && cd $_. Init Git. Create README.md, index.html, style.css. git add . and commit. Create GitHub repo. Link and push. Make a change, stage, commit, push again. Verify with git log.",
    "summary": "Core workflow: init creates a repo, add stages files, commit saves snapshots, push uploads to GitHub.",
    "nextModule": "Module 4: Branching & Merging"
  },
  "m4": {
    "id": "m4",
    "num": 4,
    "title": "Branching & Merging",
    "level": "l1",
    "overview": "Branches are Git's most powerful feature for parallel development. Create, switch, merge, and delete branches to work on features without interfering with stable code.",
    "objectives": [
      "Understand what branches are and why they matter",
      "Create and switch between branches",
      "Merge branches using fast-forward and 3-way merge",
      "Follow branch naming conventions",
      "Delete branches after merging"
    ],
    "prerequisites": "Basic Git workflow: init, add, commit (Modules 1-3).",
    "theory": "A branch is a movable pointer to a specific commit. When you create a branch Git creates a new pointer starting at your current commit. Changes on one branch do not affect others until merged. The default branch is called main. Branches enable isolated development. Merging combines changes from one branch into another. A fast-forward merge happens when the target branch has not diverged since the branch point. A 3-way merge creates a new merge commit when both branches have new commits. Branch naming conventions help organize: feature/, bugfix/, hotfix/, release/.",
    "concepts": [
      {
        "term": "Branch",
        "def": "An independent line of development pointing to a specific commit."
      },
      {
        "term": "main",
        "def": "The default branch name."
      },
      {
        "term": "HEAD",
        "def": "Pointer to the current branch's latest commit."
      },
      {
        "term": "Fast-forward Merge",
        "def": "A merge that simply moves the pointer forward."
      },
      {
        "term": "3-way Merge",
        "def": "A merge creating a new commit with two parents."
      }
    ],
    "diagram": "main: A---B---C---D---E---M\n                \\         /\nfeature:         F---G---H",
    "commands": [
      {
        "cmd": "git branch",
        "desc": "List branches"
      },
      {
        "cmd": "git branch <name>",
        "desc": "Create a branch"
      },
      {
        "cmd": "git switch <branch>",
        "desc": "Switch to a branch"
      },
      {
        "cmd": "git switch -c <name>",
        "desc": "Create and switch"
      },
      {
        "cmd": "git merge <branch>",
        "desc": "Merge into current branch"
      },
      {
        "cmd": "git branch -d <name>",
        "desc": "Delete merged branch"
      }
    ],
    "syntax": "<pre><code>git switch -c feature/navbar\necho '&lt;nav&gt;Home&lt;/nav&gt;' > navbar.html\ngit add . && git commit -m 'add navbar'\ngit switch main\ngit merge feature/navbar\ngit branch -d feature/navbar</code></pre>",
    "examples": [
      {
        "desc": "Feature branch workflow",
        "code": "git switch -c feature/login\ngit add . && git commit -m 'add login form'\ngit switch main\ngit merge feature/login"
      }
    ],
    "bestPractices": [
      "Use descriptive names: feature/add-payment bugfix/fix-crash hotfix/security-patch",
      "Delete branches after merging to keep repo clean",
      "Keep branches short-lived and merge frequently",
      "Never commit directly to main",
      "Use git switch instead of git checkout for clarity"
    ],
    "commonMistakes": [
      {
        "mistake": "Working on main instead of creating a branch",
        "fix": "Always create a feature branch first: git switch -c name."
      },
      {
        "mistake": "Forgetting to switch back before creating a new branch",
        "fix": "New branch starts from current location. Switch to main first."
      }
    ],
    "exercise": "Init a repo and make 3 commits on main. Create feature/greeting branch. Add a greeting file and commit. Switch to main and create another commit. Merge feature/greeting. View with git log --graph.",
    "lab": "Init Git. Commit README.md. Create three branches: feature/header, feature/footer, bugfix/typo. Work on each and commit. Merge all into main. View the full graph with git log --graph --oneline --all. Delete merged branches.",
    "summary": "Branches enable parallel development. Create branches for features, merge when complete, delete afterward. main stays deployable.",
    "nextModule": "Module 5: Working with Remotes"
  },
  "m5": {
    "id": "m5",
    "num": 5,
    "title": "Working with Remotes",
    "level": "l1",
    "overview": "Remote repositories connect your local Git work to servers like GitHub. Push to share, pull to sync, fetch to review changes before merging.",
    "objectives": [
      "Manage remote repositories with git remote",
      "Push local commits to GitHub",
      "Pull and fetch changes from remotes",
      "Understand origin vs upstream in fork workflows",
      "Collaborate using remote workflows"
    ],
    "prerequisites": "Git installed, configured, connected to GitHub (Modules 1-3).",
    "theory": "A remote is a version of your repository hosted on another server. The default remote name is origin. You push local commits to share them and pull others' changes to stay in sync. git push uploads your commits. git pull = git fetch + git merge. git fetch only downloads data without merging, giving you a chance to review before integrating. When you fork a repository, the original is called upstream and your fork on GitHub is origin. This two-remote pattern is the foundation of open source contribution.",
    "concepts": [
      {
        "term": "Origin",
        "def": "Default name for your main remote repository."
      },
      {
        "term": "Upstream",
        "def": "The original repository you forked from."
      },
      {
        "term": "Push",
        "def": "Upload local commits to remote."
      },
      {
        "term": "Pull",
        "def": "Download and merge remote changes."
      },
      {
        "term": "Fetch",
        "def": "Download remote changes without merging."
      }
    ],
    "diagram": "Local Repo --[git push]--> GitHub\nLocal Repo <--[git pull]-- GitHub\nLocal Repo <--[git fetch]-- GitHub (review then merge)",
    "commands": [
      {
        "cmd": "git remote -v",
        "desc": "List remote repositories"
      },
      {
        "cmd": "git remote add origin <url>",
        "desc": "Add a remote"
      },
      {
        "cmd": "git push origin main",
        "desc": "Push to remote main"
      },
      {
        "cmd": "git pull origin main",
        "desc": "Pull from remote main"
      },
      {
        "cmd": "git fetch origin",
        "desc": "Fetch without merging"
      },
      {
        "cmd": "git push -u origin <branch>",
        "desc": "Push and set upstream"
      }
    ],
    "syntax": "<pre><code>git remote add origin git@github.com:user/repo.git\ngit push -u origin main\ngit pull origin main\ngit fetch origin</code></pre>",
    "examples": [
      {
        "desc": "Push a new branch",
        "code": "git push -u origin feature/login"
      },
      {
        "desc": "Pull latest changes",
        "code": "git pull origin main"
      }
    ],
    "bestPractices": [
      "Always pull before pushing to avoid conflicts and rejected pushes",
      "Use git fetch instead of pull when you want to review changes before merging",
      "Set upstream with -u on first push to simplify later commands",
      "Keep your fork synced with the original repo by fetching from upstream regularly"
    ],
    "commonMistakes": [
      {
        "mistake": "Pushing without pulling first",
        "fix": "Always git pull before git push to avoid conflicts."
      },
      {
        "mistake": "Confusing origin with upstream",
        "fix": "Origin is your remote. Upstream is the original repo you forked."
      }
    ],
    "exercise": "Init a local repo. Create a repo on GitHub. Connect and push. Make a change on GitHub via the web interface. Pull the change locally. Make a local change and push. Verify two-way sync works.",
    "lab": "Create a local repo. Push to GitHub. Make changes on the GitHub web editor. Pull locally. Make local changes and push. Practice fetch: fetch without merging and review the incoming changes before merging.",
    "summary": "Remotes connect local repos to GitHub. Push sends changes up, pull merges remote changes down, fetch lets you review first.",
    "nextModule": "Module 6: Pull Requests & Code Review"
  },
  "m6": {
    "id": "m6",
    "num": 6,
    "title": "Pull Requests & Code Review",
    "level": "l1",
    "overview": "Pull Requests are the heart of collaboration on GitHub. Create PRs, review code, write templates, and merge using the right strategy.",
    "objectives": [
      "Create a Pull Request on GitHub from a feature branch",
      "Write effective PR descriptions using templates",
      "Review code and leave constructive feedback",
      "Choose between merge commit, squash, and rebase merge",
      "Merge a PR and clean up the branch"
    ],
    "prerequisites": "Basic Git workflow, branching, and remotes (Modules 1-5).",
    "theory": "A Pull Request is a request to merge changes from one branch into another on GitHub. PRs enable code review before changes reach the main branch. PR templates standardize descriptions. During review, team members comment on specific lines, request changes, or approve. GitHub offers three merge options: Merge Commit preserves all history with a merge commit; Squash and Merge combines all PR commits into a single commit for clean history; Rebase and Merge replays commits without a merge commit for a linear history but loses the PR context.",
    "concepts": [
      {
        "term": "Pull Request",
        "def": "A request to merge changes from one branch to another."
      },
      {
        "term": "Code Review",
        "def": "Examining code changes before merging."
      },
      {
        "term": "Squash Merge",
        "def": "Combining all PR commits into a single commit."
      },
      {
        "term": "Rebase Merge",
        "def": "Reapplying commits without a merge commit."
      },
      {
        "term": "PR Template",
        "def": "A predefined form for PR descriptions."
      }
    ],
    "diagram": "Feature Branch --> Push to GitHub --> Open PR --> Review --> Approve --> Merge --> Delete Branch",
    "commands": [
      {
        "cmd": "git push -u origin <branch>",
        "desc": "Push branch to GitHub to open a PR"
      }
    ],
    "syntax": "<pre><code>## PR Template\n## Description\nWhat does this PR do?\n\n## Changes\n- [x] Feature\n- [ ] Bug fix\n\n## How to Test\n1. Go to...\n2. Click...\n3. Verify...</code></pre>",
    "examples": [
      {
        "desc": "Full PR workflow",
        "code": "git push -u origin feature/new-page\n# On GitHub: New PR, write description, create\n# After review: merge and clean up\ngit switch main\ngit pull origin main\ngit branch -d feature/new-page"
      }
    ],
    "bestPractices": [
      "Write clear PR titles and descriptions explaining what and why",
      "Keep PRs small and focused on a single feature or fix",
      "Review your own PR before requesting others",
      "Respond to review comments promptly and respectfully",
      "Use Draft PRs for work in progress"
    ],
    "commonMistakes": [
      {
        "mistake": "Creating massive PRs with many unrelated changes",
        "fix": "Keep PRs under 400 lines. Split large features into multiple PRs."
      },
      {
        "mistake": "Closing a PR instead of merging it",
        "fix": "Use the merge button to close PRs. Closing without merging discards changes."
      }
    ],
    "exercise": "Create a feature branch locally. Make 3 commits. Push to GitHub. Create a PR with a description. Add a reviewer. Respond to feedback. Merge the PR and delete the branch.",
    "lab": "Fork a partner's repo. Clone it. Create a feature branch. Make changes and push. Create a PR. Review each other's PRs leaving line comments. Request changes, then approve. Practice all three merge strategies on different PRs.",
    "summary": "PRs are the core of GitHub collaboration. Push your branch, open a PR with a clear description, review code, merge, and clean up.",
    "nextModule": "Module 7: Issues & Project Management"
  },
  "m7": {
    "id": "m7",
    "num": 7,
    "title": "Issues & Project Management",
    "level": "l2",
    "overview": "Issues track bugs, features, and tasks. Projects visualize workflow. Milestones group work. Together they form a complete project management system.",
    "objectives": [
      "Create and manage Issues with labels, milestones, and assignees",
      "Write issue templates for bugs and features",
      "Create GitHub Project boards with columns",
      "Use automation rules to move cards"
    ],
    "prerequisites": "GitHub account. Basic understanding of repositories.",
    "theory": "Issues are GitHub's built-in issue tracking system. Each issue can have labels for categorization, milestones for grouping toward a goal, and assignees for responsibility. GitHub Projects provides Kanban boards with customizable columns, automation rules, and multiple views (board, table, roadmap). Issue templates standardize how bugs and features are reported. Projects can be created at the user, repository, or organization level. Automation rules reduce manual work by moving cards based on triggers like issue closing or label changes.",
    "concepts": [
      {
        "term": "Issue",
        "def": "A bug report, feature request, or task tracked in a repository."
      },
      {
        "term": "Label",
        "def": "A tag for categorizing issues (bug, enhancement, question)."
      },
      {
        "term": "Milestone",
        "def": "Groups issues toward a specific goal or release."
      },
      {
        "term": "Assignee",
        "def": "Person responsible for an issue."
      },
      {
        "term": "Project Board",
        "def": "A Kanban board for tracking work across columns."
      }
    ],
    "diagram": "Bug Report --> Issue Created --> Labeled --> Assigned --> Milestone --> In Progress --> Done",
    "commands": [],
    "syntax": "<pre><code>---\nname: Bug Report\nabout: Report a bug to help us improve\n---\n**Description**\nWhat happened?\n\n**Steps to Reproduce**\n1. Go to...\n2. Click...\n\n**Expected Behavior**\nWhat should have happened</code></pre>",
    "examples": [
      {
        "desc": "Create a complete issue workflow",
        "code": "1. Create issue with template\n2. Add label (bug/enhancement)\n3. Assign to team member\n4. Add to milestone\n5. Add to Project board\n6. Close when resolved"
      }
    ],
    "bestPractices": [
      "Use labels consistently (bug, enhancement, question, docs)",
      "Write clear issue titles that summarize the problem",
      "Link issues to PRs with 'Fixes #123' to auto-close",
      "Use milestones to plan releases and track progress",
      "Automate project boards to reduce manual card movement"
    ],
    "commonMistakes": [
      {
        "mistake": "Creating vague issue titles like 'Fix it'",
        "fix": "Use specific titles: 'Login button not working on mobile' instead of 'Fix'."
      },
      {
        "mistake": "Not linking related issues",
        "fix": "Reference related issues with #number in descriptions to create traceability."
      }
    ],
    "exercise": "Create 3 issues with different labels. Create a milestone. Assign issues to it. Create a Project board with To Do, In Progress, Done columns. Add issues as cards.",
    "lab": "Create a test repo. Add issue templates for bugs and features. Create 5 issues with labels bug, enhancement, docs. Create milestone v1.0. Assign all issues. Create a Project board and add all issues. Set up automation: move to Done when issue closes.",
    "summary": "Issues track work, labels categorize, milestones group, and Projects visualize. Together they form a complete project management system on GitHub.",
    "nextModule": "Module 8: GitHub Pages"
  },
  "m8": {
    "id": "m8",
    "num": 8,
    "title": "GitHub Pages",
    "level": "l2",
    "overview": "GitHub Pages hosts static websites for free directly from your repository. Perfect for portfolios, documentation, and project sites.",
    "objectives": [
      "Understand GitHub Pages site types (personal, project, organization)",
      "Enable Pages on a repository",
      "Use Jekyll themes for styling",
      "Set up a custom domain"
    ],
    "prerequisites": "Basic HTML/CSS knowledge. Git and GitHub basics (Modules 1-3).",
    "theory": "GitHub Pages serves static files (HTML, CSS, JavaScript) from a GitHub repository. Three types exist: Personal sites named username.github.io, Project sites at username.github.io/repo-name, and Organization sites at orgname.github.io. Pages can use Jekyll, a static site generator that converts Markdown and Liquid templates into HTML. You can also add a custom domain via a CNAME record. Pages are automatically built and deployed when you push to the configured branch.",
    "concepts": [
      {
        "term": "GitHub Pages",
        "def": "Free static site hosting from GitHub repos."
      },
      {
        "term": "Jekyll",
        "def": "A static site generator integrated with Pages."
      },
      {
        "term": "CNAME",
        "def": "A DNS record mapping a custom domain."
      },
      {
        "term": "Static Site",
        "def": "A website with fixed content and no server-side processing."
      }
    ],
    "diagram": "Push HTML/CSS --> Enable Pages in Settings --> Site Goes Live --> Add Custom Domain",
    "commands": [
      {
        "cmd": "git push origin main",
        "desc": "Push changes to trigger automatic Pages rebuild"
      }
    ],
    "syntax": "<pre><code># _config.yml\ntitle: My Site\ntheme: jekyll-theme-cayman</code></pre>",
    "examples": [
      {
        "desc": "Create a personal site",
        "code": "Create repo username/username.github.io\nAdd index.html\nPush to main\nVisit https://username.github.io"
      }
    ],
    "bestPractices": [
      "Use Jekyll for easy theming and layouts",
      "Keep all filenames lowercase",
      "Test locally with bundle exec jekyll serve",
      "Add a custom domain for a professional look",
      "Add a 404.html for a custom error page"
    ],
    "commonMistakes": [
      {
        "mistake": "Forgetting to select the branch in Settings > Pages",
        "fix": "Go to Settings > Pages and choose the correct branch (main) and folder (/root)."
      },
      {
        "mistake": "Using uppercase filenames",
        "fix": "GitHub Pages is case-sensitive. Use lowercase for all files."
      }
    ],
    "exercise": "Create a project repo. Add index.html with your name and bio. Enable Pages from Settings. Visit the live URL within 2 minutes.",
    "lab": "Create username.github.io repo. Add index.html, style.css, about.md. Add _config.yml with a Jekyll theme. Enable Pages. Verify the site is live. Add a custom domain via a CNAME file.",
    "summary": "GitHub Pages provides free static hosting. Push your files, enable Pages in Settings, and your site goes live in minutes.",
    "nextModule": "Module 9: GitHub Actions"
  },
  "m9": {
    "id": "m9",
    "num": 9,
    "title": "GitHub Actions",
    "level": "l2",
    "overview": "GitHub Actions is a CI/CD platform built into GitHub. Automate testing, building, and deployment with YAML workflows.",
    "objectives": [
      "Understand CI/CD concepts",
      "Write YAML workflow files",
      "Configure triggers and events",
      "Use pre-built actions from the Marketplace"
    ],
    "prerequisites": "Basic Git and GitHub knowledge. Familiarity with YAML is helpful but not required.",
    "theory": "GitHub Actions automates software workflows directly in your repository. A workflow is a YAML file in .github/workflows/ that defines jobs triggered by events like push, pull_request, or schedule. Each job runs on a runner (Ubuntu, Windows, macOS) and executes steps. Steps use either shell commands or pre-built Actions from the Marketplace. Actions support matrix builds (testing across multiple versions), environment secrets, artifact uploads, and deployment to cloud services.",
    "concepts": [
      {
        "term": "Workflow",
        "def": "A YAML file defining CI/CD automation steps."
      },
      {
        "term": "Job",
        "def": "A set of steps running on the same runner."
      },
      {
        "term": "Step",
        "def": "A single unit of execution (command or Action)."
      },
      {
        "term": "Runner",
        "def": "A server that executes workflow jobs."
      },
      {
        "term": "Marketplace",
        "def": "A library of pre-built Actions shared by the community."
      }
    ],
    "diagram": "Push Code --> Trigger Event --> Jobs Run on Runners --> Steps Execute --> Success/Failure",
    "commands": [
      {
        "cmd": "name: CI",
        "desc": "Set workflow name"
      },
      {
        "cmd": "on: [push, pull_request]",
        "desc": "Define trigger events"
      },
      {
        "cmd": "jobs:",
        "desc": "Start jobs section"
      },
      {
        "cmd": "runs-on: ubuntu-latest",
        "desc": "Choose runner OS"
      },
      {
        "cmd": "steps:",
        "desc": "Define execution steps"
      }
    ],
    "syntax": "<pre><code>name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install\n      - run: npm test</code></pre>",
    "examples": [
      {
        "desc": "Simple CI workflow",
        "code": "name: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n      - run: npm ci\n      - run: npm test"
      }
    ],
    "bestPractices": [
      "Start with simple workflows and gradually add complexity",
      "Use specific action versions (v4 not @main) for stability",
      "Use matrix strategy to test across multiple versions",
      "Keep secrets out of workflow files \u2014 use repository secrets",
      "Use workflow_dispatch for manual triggering"
    ],
    "commonMistakes": [
      {
        "mistake": "Using @main or @master instead of versioned actions",
        "fix": "Always use versioned tags like actions/checkout@v4 for stability."
      },
      {
        "mistake": "Storing secrets directly in workflow files",
        "fix": "Use GitHub Secrets for API keys, tokens, and passwords."
      }
    ],
    "exercise": "Create a repository with a simple Node.js project. Create .github/workflows/ci.yml that runs npm install and npm test on every push.",
    "lab": "Create a new repo with a simple script. Add a workflow that: checks out code, sets up Node, installs deps, runs tests. Trigger it by pushing. View the Actions tab to see real-time execution logs.",
    "summary": "GitHub Actions automates CI/CD with YAML workflows triggered by events. Jobs run on runners with steps that use commands or marketplace actions.",
    "nextModule": "Module 10: GitHub Projects & Boards"
  },
  "m10": {
    "id": "m10",
    "num": 10,
    "title": "GitHub Projects & Boards",
    "level": "l2",
    "overview": "GitHub Projects provides project management with Kanban boards, customizable fields, and automation. Manage work across repositories and teams.",
    "objectives": [
      "Create projects at user, repository, and organization levels",
      "Add custom fields and multiple views",
      "Set up automation rules",
      "Use roadmaps for planning"
    ],
    "prerequisites": "GitHub account. Familiarity with Issues (Module 7).",
    "theory": "GitHub Projects (the modern v2) is a flexible project management tool. Unlike the classic projects, v2 projects are powered by GitHub Issues and offer spreadsheet-like tables, Kanban boards, timeline roadmaps, and custom fields. You can create projects at the user, repository, or organization level. Custom fields include text, number, date, single select, and iteration. Views let you switch between board, table, and roadmap layouts. Automation rules can move cards based on label changes, status changes, or issue closures.",
    "concepts": [
      {
        "term": "Project",
        "def": "A customizable board for planning and tracking work."
      },
      {
        "term": "Custom Field",
        "def": "A user-defined data field (text, date, select, number)."
      },
      {
        "term": "View",
        "def": "A way to visualize data: board, table, or roadmap."
      },
      {
        "term": "Automation",
        "def": "Rules that trigger actions based on events."
      },
      {
        "term": "Roadmap",
        "def": "A timeline view for long-term planning."
      }
    ],
    "diagram": "Create Project --> Add Fields --> Add Views --> Set Automation --> Track Progress",
    "commands": [],
    "syntax": "<pre><code># Custom fields examples:\n- Status: Single select (Todo, In Progress, Done)\n- Priority: Single select (Low, Medium, High, Critical)\n- Story Points: Number (1, 2, 3, 5, 8)\n- Sprint: Iteration (Sprint 1, Sprint 2, etc.)</code></pre>",
    "examples": [
      {
        "desc": "Create a sprint board",
        "code": "1. Create project at repo level\n2. Add Status field: Todo, In Progress, Review, Done\n3. Add Sprint iteration field\n4. Add Priority field\n5. Create board view grouped by Status\n6. Add automation: Status \u2192 In Progress when PR opened"
      }
    ],
    "bestPractices": [
      "Start with a simple Status field and add complexity over time",
      "Use Iteration fields for sprint tracking",
      "Group board views by status for a clear Kanban",
      "Use table view for bulk editing",
      "Keep automation rules simple and test them"
    ],
    "commonMistakes": [
      {
        "mistake": "Creating too many fields at the start",
        "fix": "Start with 3-4 essential fields and add more as needed."
      },
      {
        "mistake": "Not using automation rules",
        "fix": "Save time by automating common transitions like moving to Done on close."
      }
    ],
    "exercise": "Create a project board with 3 columns: To Do, In Progress, Done. Add 5 issues as cards. Use labels and assignees. Test automation by closing an issue and watching it move to Done.",
    "lab": "Create a repo-level project. Add single-select Status field (Todo, In Progress, Review, Done). Add numbered field for Story Points. Create board view grouped by Status. Add 10 issues with different statuses and priorities. Create a table view and sort by priority.",
    "summary": "GitHub Projects provides flexible project management with custom fields, multiple views, and automation rules. Use it to track work across your repository or organization.",
    "nextModule": "Module 11: Releases & Tags"
  },
  "m11": {
    "id": "m11",
    "num": 11,
    "title": "Releases & Tags",
    "level": "l2",
    "overview": "Tags mark specific points in Git history, typically for releases. GitHub Releases add release notes, binaries, and assets on top of tags.",
    "objectives": [
      "Understand semantic versioning (SemVer)",
      "Create and push tags with git tag",
      "Create GitHub Releases with release notes",
      "Use release automation"
    ],
    "prerequisites": "Basic Git commands. Understanding of commit history.",
    "theory": "Semantic Versioning (SemVer) uses MAJOR.MINOR.PATCH format: increment MAJOR for incompatible API changes, MINOR for backward-compatible features, PATCH for bug fixes. In Git, tags are pointers to specific commits, either lightweight (just a pointer) or annotated (with metadata). Annotated tags are recommended for releases. GitHub Releases wraps a tag with release notes, attachments, and a download page. Releases can be automated with GitHub Actions using the softprops/action-gh-release action.",
    "concepts": [
      {
        "term": "SemVer",
        "def": "Semantic Versioning \u2014 MAJOR.MINOR.PATCH."
      },
      {
        "term": "Tag",
        "def": "A pointer to a specific commit."
      },
      {
        "term": "Annotated Tag",
        "def": "A tag with metadata: message, author, date."
      },
      {
        "term": "Release",
        "def": "A GitHub object wrapping a tag with notes and assets."
      }
    ],
    "diagram": "Develop --> Commit --> git tag v1.0.0 --> git push --tags --> Create Release on GitHub --> Release Live",
    "commands": [
      {
        "cmd": "git tag v1.0.0",
        "desc": "Create a lightweight tag"
      },
      {
        "cmd": "git tag -a v1.0.0 -m 'msg'",
        "desc": "Create an annotated tag"
      },
      {
        "cmd": "git push origin v1.0.0",
        "desc": "Push a specific tag"
      },
      {
        "cmd": "git push --tags",
        "desc": "Push all tags"
      },
      {
        "cmd": "git tag -d v1.0.0",
        "desc": "Delete a local tag"
      },
      {
        "cmd": "git tag",
        "desc": "List all tags"
      }
    ],
    "syntax": "<pre><code># Create and push an annotated tag\ngit tag -a v1.0.0 -m 'Release version 1.0.0'\ngit push origin v1.0.0\n\n# List tags\ngit tag -l 'v2.*'</code></pre>",
    "examples": [
      {
        "desc": "Create a release from command line",
        "code": "git tag -a v1.0.0 -m 'Production release'\ngit push origin v1.0.0\n# Then on GitHub: Releases > Draft a new release"
      }
    ],
    "bestPractices": [
      "Always use annotated tags for releases (-a flag)",
      "Use SemVer consistently: vMAJOR.MINOR.PATCH",
      "Write descriptive release notes with changes, new features, and bug fixes",
      "Use git tag -l with wildcards to filter tags",
      "Automate release creation with GitHub Actions"
    ],
    "commonMistakes": [
      {
        "mistake": "Using lightweight tags for releases",
        "fix": "Use annotated tags (git tag -a) to capture metadata."
      },
      {
        "mistake": "Forgetting to push tags",
        "fix": "Tags are local until pushed. Use git push origin <tagname>."
      }
    ],
    "exercise": "Create a tag v0.1.0 on your current repo. Push it to GitHub. Create a Release with release notes describing what changed.",
    "lab": "In a test repo, make 3 commits. Create annotated tag v0.1.0. Push. Create a Release on GitHub with notes. Then make 3 more commits, tag v0.2.0, push the tag only. Create another Release.",
    "summary": "Tags mark specific commits. Releases wrap tags with notes and assets. SemVer (MAJOR.MINOR.PATCH) provides a standard versioning scheme.",
    "nextModule": "Module 12: Security & Dependabot"
  },
  "m12": {
    "id": "m12",
    "num": 12,
    "title": "Security & Dependabot",
    "level": "l2",
    "overview": "GitHub provides built-in security tools to keep your code safe. Dependabot alerts, code scanning, and secret scanning help prevent vulnerabilities.",
    "objectives": [
      "Understand Dependabot alerts and security updates",
      "Configure Dependabot for automated dependency updates",
      "Enable code scanning with CodeQL",
      "Understand secret scanning"
    ],
    "prerequisites": "Basic understanding of dependencies and package managers. GitHub repository with dependencies.",
    "theory": "GitHub's security suite includes three main tools. Dependabot monitors your dependency files (package.json, requirements.txt, etc.) against the GitHub Advisory Database and alerts you to known vulnerabilities. It can also auto-create PRs to update insecure dependencies. Code scanning uses CodeQL to analyze code for security vulnerabilities and coding errors. Secret scanning detects exposed secrets like API keys, tokens, and passwords in your repositories and alerts you or the secret provider.",
    "concepts": [
      {
        "term": "Dependabot",
        "def": "Automated dependency update and vulnerability alert tool."
      },
      {
        "term": "Code Scanning",
        "def": "Automated code analysis to find security vulnerabilities."
      },
      {
        "term": "Secret Scanning",
        "def": "Detects exposed secrets in repositories."
      },
      {
        "term": "CodeQL",
        "def": "GitHub's semantic code analysis engine."
      },
      {
        "term": "Advisory Database",
        "def": "GitHub's curated database of known security vulnerabilities."
      }
    ],
    "diagram": "Dependency File --> Dependabot Scans --> Vulnerability Found --> Alert Created --> PR Auto-Generated --> Merge Fix",
    "commands": [],
    "syntax": "<pre><code># .github/dependabot.yml\nversion: 2\nupdates:\n  - package-ecosystem: 'npm'\n    directory: '/'\n    schedule:\n      interval: 'weekly'\n    open-pull-requests-limit: 10</code></pre>",
    "examples": [
      {
        "desc": "Configure Dependabot for npm and Docker",
        "code": "version: 2\nupdates:\n  - package-ecosystem: 'npm'\n    directory: '/'\n    schedule:\n      interval: 'weekly'\n  - package-ecosystem: 'docker'\n    directory: '/'\n    schedule:\n      interval: 'monthly'"
      }
    ],
    "bestPractices": [
      "Enable Dependabot from the start of every project",
      "Review Dependabot PRs promptly \u2014 vulnerabilities are time-sensitive",
      "Use the Security tab to view all alerts in one place",
      "Configure dependency in .github/dependabot.yml for custom schedules",
      "Never commit secrets \u2014 use GitHub Secrets or environment variables"
    ],
    "commonMistakes": [
      {
        "mistake": "Ignoring Dependabot alerts",
        "fix": "Set aside time weekly to review and merge dependency updates."
      },
      {
        "mistake": "Committing secrets to the repository",
        "fix": "Use .env files with .gitignore and GitHub Secrets for production."
      }
    ],
    "exercise": "Create a new repo with a package.json containing a few dependencies. Enable Dependabot alerts. Add a .github/dependabot.yml to enable automatic updates.",
    "lab": "Create a repo with a Node.js project. Add known outdated dependencies. Enable Dependabot from Security tab. Observe alerts appear. Configure dependabot.yml for weekly npm updates. Let it create an update PR and merge it.",
    "summary": "GitHub's security tools protect your code. Dependabot handles dependency vulnerabilities, CodeQL scans for code issues, and secret scanning prevents credential leaks.",
    "nextModule": "Module 13: GitHub Discussions & Wikis"
  },
  "m13": {
    "id": "m13",
    "num": 13,
    "title": "GitHub Discussions & Wikis",
    "level": "l2",
    "overview": "Discussions and Wikis provide community communication and documentation spaces directly in your repository.",
    "objectives": [
      "Differentiate Discussions from Issues",
      "Set up Discussion categories",
      "Create and edit Wiki pages",
      "Engage the community with guidelines"
    ],
    "prerequisites": "GitHub account. Familiarity with Issues.",
    "theory": "Discussions is a forum space for your repository. It's separate from Issues: Discussions are for open-ended conversations, questions, ideas, and announcements, while Issues track specific tasks and bugs. Discussions can have categories (Q&A, Ideas, Show and Tell, General) with optional announcement-only posts. Wikis provide a separate documentation space within the repository. You can edit Wiki pages directly on GitHub or clone them as a separate Git repository. Together Discussions and Wikis create a community hub around your project.",
    "concepts": [
      {
        "term": "Discussion",
        "def": "A forum for open conversation in a repository."
      },
      {
        "term": "Category",
        "def": "A section within Discussions (Q&A, Ideas, etc.)."
      },
      {
        "term": "Wiki",
        "def": "A separate documentation space in the repository."
      },
      {
        "term": "Announcement",
        "def": "A category where only maintainers can post."
      }
    ],
    "diagram": "Repository --> Enable Discussions --> Create Categories --> Community Conversations --> Documentation Lives in Wiki",
    "commands": [],
    "syntax": "<pre><code># Good Discussion categories:\n- Q&A: Questions from the community\n- Ideas: Feature suggestions\n- Show and Tell: Share what you built\n- General: Everything else\n- Announcements: Maintainer posts only</code></pre>",
    "examples": [
      {
        "desc": "Set up a welcoming community",
        "code": "1. Enable Discussions in repo Settings\n2. Create categories: Q&A, Ideas, Show and Tell, Announcements\n3. Write a pinned Discussion welcoming new members\n4. Set Announcements to maintainer-only\n5. Add CODE_OF_CONDUCT.md\n6. Enable Wiki for docs"
      }
    ],
    "bestPractices": [
      "Enable Discussions for community support and Q&A",
      "Use Announcement categories for important updates",
      "Pin welcome posts and FAQs to the top of Discussions",
      "Keep Wiki documentation up to date with the latest API or features",
      "Clone the Wiki repo locally for batch editing"
    ],
    "commonMistakes": [
      {
        "mistake": "Using Issues for questions",
        "fix": "Questions belong in Discussions. Issues are for bugs and tasks."
      },
      {
        "mistake": "Not enabling Discussions early",
        "fix": "Enable Discussions when you have users who need support."
      }
    ],
    "exercise": "Enable Discussions on a repository. Create 3 categories. Start a welcome Discussion and pin it. Add Wiki pages for installation and usage.",
    "lab": "Create a repo. Enable Discussions. Create categories (Q&A, Ideas, General). Create an announcement post. Make 2 Q&A posts and answer them. Enable Wiki. Add Getting Started and API Reference pages. Clone the Wiki locally and add more pages.",
    "summary": "Discussions handle conversations and questions. Wikis provide project documentation. Together they build a community and knowledge base around your project.",
    "nextModule": "Module 14: GitHub Copilot"
  },
  "m14": {
    "id": "m14",
    "num": 14,
    "title": "GitHub Copilot",
    "level": "l2",
    "overview": "GitHub Copilot is an AI-powered code completion tool that suggests code as you type. Learn setup, usage, and Copilot Chat.",
    "objectives": [
      "Understand what Copilot is and how it works",
      "Install and set up Copilot in VS Code",
      "Use Copilot completions and suggestions",
      "Use Copilot Chat for natural language queries"
    ],
    "prerequisites": "VS Code or supported IDE. A GitHub account. Basic programming knowledge.",
    "theory": "GitHub Copilot is an AI pair programmer powered by OpenAI's models. It suggests code as you type, generates functions from comments, and helps complete boilerplate. Copilot learns from context: your open files, surrounding code, and natural language comments. Copilot Chat lets you ask coding questions in natural language, get explanations, and refactor code. Agent Mode extends this with autonomous file editing and terminal commands. Copilot is available in VS Code, JetBrains, Neovim, and on GitHub.com.",
    "concepts": [
      {
        "term": "Copilot",
        "def": "AI-powered code completion tool from GitHub."
      },
      {
        "term": "Copilot Chat",
        "def": "Conversational AI assistant for coding."
      },
      {
        "term": "Agent Mode",
        "def": "Autonomous mode where Copilot edits files and runs commands."
      },
      {
        "term": "Context",
        "def": "The code and comments Copilot uses to generate suggestions."
      }
    ],
    "diagram": "Install Extension --> Sign In --> Start Typing --> Copilot Suggests --> Tab to Accept --> Refine with Chat",
    "commands": [],
    "syntax": "<pre><code>// Write a comment and Copilot generates the function\n// function to calculate fibonacci sequence\nfunction fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}</code></pre>",
    "examples": [
      {
        "desc": "Using Copilot suggestions",
        "code": "// Type a comment:\n// function to validate email address\n// Copilot will suggest the implementation\nfunction validateEmail(email) {\n  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return re.test(email);\n}"
      }
    ],
    "bestPractices": [
      "Write clear comments describing what you want",
      "Accept suggestions with Tab, reject with Escape",
      "Use Ctrl+Enter to see alternative suggestions",
      "Use Copilot Chat to refactor or explain existing code",
      "Review all Copilot suggestions before using them"
    ],
    "commonMistakes": [
      {
        "mistake": "Accepting Copilot suggestions without review",
        "fix": "Always review generated code for correctness and security."
      },
      {
        "mistake": "Writing vague comments",
        "fix": "Be specific in your comments: 'validate email format' not 'check email'."
      }
    ],
    "exercise": "Install Copilot in VS Code. Sign in with your GitHub account. Write a comment describing a function and let Copilot complete it. Try generating 3 different functions.",
    "lab": "Create a new JavaScript file. Write comments describing: a function to fetch data from an API, a sorting algorithm, a password validator. For each comment, let Copilot generate the implementation. Try Ctrl+Enter to see alternative suggestions. Use Copilot Chat to ask 'explain this code' for one of the generated functions.",
    "summary": "Copilot is your AI pair programmer. Write comments, get suggestions, accept with Tab, refine with Chat. Always review generated code.",
    "nextModule": "Module 15: GitHub Codespaces"
  },
  "m15": {
    "id": "m15",
    "num": 15,
    "title": "GitHub Codespaces",
    "level": "l2",
    "overview": "Codespaces provides cloud-hosted development environments that spin up instantly. Code from any device with a full VS Code experience in your browser.",
    "objectives": [
      "Understand what Codespaces are and their benefits",
      "Create and manage Codespaces",
      "Configure dev containers",
      "Know when to use Codespaces vs local dev"
    ],
    "prerequisites": "GitHub account. Basic knowledge of VS Code.",
    "theory": "GitHub Codespaces are cloud-hosted development environments based on VS Code and Docker containers. They start in seconds and include a full editor, terminal, and debugging tools accessible from any browser. Codespaces are configurable via a devcontainer.json file that specifies the base image, VS Code extensions, port forwarding, post-create commands, and more. Teams get consistent development environments because everyone uses the same configuration. Codespaces are ephemeral \u2014 you can create, delete, and recreate them as needed.",
    "concepts": [
      {
        "term": "Codespace",
        "def": "A cloud-hosted development environment."
      },
      {
        "term": "Dev Container",
        "def": "A Docker-based development environment configuration."
      },
      {
        "term": "devcontainer.json",
        "def": "Configuration file for codespace environment."
      },
      {
        "term": "Ephemeral",
        "def": "Temporary environments that can be created and destroyed."
      }
    ],
    "diagram": "Open Repo --> Create Codespace --> Environment Spins Up --> Code in Browser --> Stop/Delete When Done",
    "commands": [],
    "syntax": "<pre><code># .devcontainer/devcontainer.json\n{\n  \"image\": \"mcr.microsoft.com/devcontainers/universal:2\",\n  \"extensions\": [\"github.copilot\", \"dbaeumer.vscode-eslint\"],\n  \"forwardPorts\": [3000],\n  \"postCreateCommand\": \"npm install\"\n}</code></pre>",
    "examples": [
      {
        "desc": "Create a basic devcontainer",
        "code": "mkdir -p .devcontainer\ncat > .devcontainer/devcontainer.json << 'EOF'\n{\n  \"image\": \"mcr.microsoft.com/devcontainers/universal:2\",\n  \"extensions\": [\"github.copilot\"],\n  \"forwardPorts\": [3000],\n  \"postCreateCommand\": \"npm install\"\n}\nEOF\ngit add .devcontainer\ngit commit -m 'add devcontainer config'\ngit push"
      }
    ],
    "bestPractices": [
      "Add a devcontainer.json to every project for consistent team environments",
      "Keep codespaces small \u2014 install only needed extensions",
      "Stop or delete unused codespaces to save core hours",
      "Use prebuilds for faster startup times",
      "Commit devcontainer config along with your code"
    ],
    "commonMistakes": [
      {
        "mistake": "Forgetting to stop codespaces when not in use",
        "fix": "Stop codespaces or set auto-stop timeout in settings."
      },
      {
        "mistake": "Not using devcontainer.json for team projects",
        "fix": "Always define environment in code so every team member gets the same setup."
      }
    ],
    "exercise": "Open any repository on GitHub. Click Code > Codespaces > Create codespace on main. Wait for it to build. Verify you can edit files and use the terminal.",
    "lab": "Edit a repository to add a .devcontainer/devcontainer.json with: base image, Copilot extension, port forwarding for 3000, and postCreateCommand. Commit and push. Create a new codespace from this branch. Verify the environment has the Copilot extension and port forwarding configured.",
    "summary": "Codespaces provide cloud-hosted, configurable development environments. Configure with devcontainer.json for consistent team setups. Stop when not in use to save resources.",
    "nextModule": "Module 16: GitHub Desktop & Products"
  },
  "m16": {
    "id": "m16",
    "num": 16,
    "title": "GitHub Desktop & Products",
    "level": "l2",
    "overview": "GitHub Desktop provides a GUI for common Git operations. GitHub Mobile lets you manage projects on the go. Understand GitHub product plans.",
    "objectives": [
      "Use GitHub Desktop for common Git tasks",
      "Use GitHub Mobile for PRs and issues",
      "Compare GitHub Free, Team, and Enterprise plans",
      "Choose the right plan for your needs"
    ],
    "prerequisites": "GitHub account. Basic understanding of Git concepts.",
    "theory": "GitHub Desktop is a GUI client that simplifies Git operations without the command line. It visualizes commits, branches, diffs, and syncs. GitHub Mobile brings GitHub to your phone for reviewing PRs, managing issues, merging, and responding to notifications. GitHub offers three plans: Free includes unlimited repos, 2000 Actions minutes/month, and community support; Team adds protected branches, code owners, required reviewers, and 3000 Actions minutes; Enterprise adds SAML/SSO, compliance features, audit logs, 24/7 support, and 50,000 Actions minutes.",
    "concepts": [
      {
        "term": "GitHub Desktop",
        "def": "A GUI client for Git."
      },
      {
        "term": "GitHub Mobile",
        "def": "Mobile app for GitHub."
      },
      {
        "term": "Free Plan",
        "def": "Free tier with unlimited repos and 2000 Actions minutes."
      },
      {
        "term": "Team Plan",
        "def": "Paid plan with collaboration features."
      },
      {
        "term": "Enterprise Plan",
        "def": "Enterprise plan with SSO, compliance, and support."
      }
    ],
    "diagram": "Install Desktop --> Clone Repo --> Make Changes --> Commit --> Sync -->Push to GitHub",
    "commands": [
      {
        "cmd": "File > Clone Repository",
        "desc": "Clone a repo from GitHub"
      },
      {
        "cmd": "Changes tab",
        "desc": "View unstaged changes"
      },
      {
        "cmd": "Commit to main",
        "desc": "Commit changes"
      },
      {
        "cmd": "Fetch origin",
        "desc": "Sync with remote"
      }
    ],
    "syntax": "<pre><code># GitHub Desktop workflow:\n1. File > Clone Repository\n2. Choose repo from GitHub or URL\n3. Make changes in your editor\n4. Switch to GitHub Desktop\n5. Review changes visually\n6. Write commit message\n7. Click Commit to main\n8. Click Push origin</code></pre>",
    "examples": [
      {
        "desc": "Using GitHub Desktop for PR management",
        "code": "1. Branch > New Branch > feature-x\n2. Make changes, commit\n3. Publish branch to GitHub\n4. On GitHub.com: create PR\n5. Review and merge in browser\n6. In Desktop: fetch and delete branch"
      }
    ],
    "bestPractices": [
      "GitHub Desktop is great for visual diff review and beginners",
      "Use GitHub Mobile for quick PR approvals and issue triage",
      "Start with Free plan for personal projects",
      "Upgrade to Team for professional collaboration features",
      "Choose Enterprise for organizations needing compliance and SSO"
    ],
    "commonMistakes": [
      {
        "mistake": "Using Desktop for complex rebases",
        "fix": "Desktop handles basic operations well. Use CLI for interactive rebases and advanced operations."
      },
      {
        "mistake": "Choosing Free plan for team projects",
        "fix": "Team plan adds essential collaboration features: protected branches, code owners, required reviews."
      }
    ],
    "exercise": "Install GitHub Desktop. Clone a repository. Make a change in your editor. Commit in Desktop. Push to GitHub. View the change on GitHub.com.",
    "lab": "Install GitHub Desktop. Clone a repo. Create a branch in Desktop. Make changes and commit. Publish the branch. Open the repo on GitHub and create a PR. Use GitHub Mobile (or web mobile view) to review and merge the PR. Go back to Desktop, fetch, and delete the local branch.",
    "summary": "GitHub Desktop simplifies Git with a visual interface. GitHub Mobile enables on-the-go management. Choose Free for personal, Team for collaboration, Enterprise for organizations.",
    "nextModule": "Module 17: Organizations & Teams"
  },
  "m17": {
    "id": "m17",
    "num": 17,
    "title": "Organizations & Teams",
    "level": "l3",
    "overview": "GitHub Organizations enable team-level repository management with permissions, teams, and centralized administration.",
    "objectives": [
      "Create and manage GitHub Organizations",
      "Create teams with specific permissions",
      "Manage repository access levels",
      "Understand organization security features"
    ],
    "prerequisites": "GitHub account. Understanding of repositories and permissions.",
    "theory": "GitHub Organizations are shared accounts for teams and companies. Organizations allow centralized management of repositories, members, and billing. Teams within organizations group members and control repository access. Permission levels scale from Read to Admin: Read (view only), Triage (manage issues/PRs), Write (push and modify), Maintain (manage repo without admin), Admin (full control). Organizations also support SAML/SSO, audit logs, domain verification, and repository policies (like branch protection enforced org-wide).",
    "concepts": [
      {
        "term": "Organization",
        "def": "A shared GitHub account for team management."
      },
      {
        "term": "Team",
        "def": "A group of members with shared permissions."
      },
      {
        "term": "Permission Level",
        "def": "Access level: Read, Triage, Write, Maintain, Admin."
      },
      {
        "term": "SAML/SSO",
        "def": "Single Sign-On for organization authentication."
      }
    ],
    "diagram": "Create Organization --> Add Members --> Create Teams --> Set Permissions --> Manage Repositories",
    "commands": [],
    "syntax": "<pre><code># Organization best practices:\n# - Create teams: Engineering, Design, DevOps\n# - Each team gets Read access by default\n# - Elevate to Write for active contributors\n# - Use CODEOWNERS for mandatory review\n# - Enforce branch protection org-wide</code></pre>",
    "examples": [
      {
        "desc": "Create and configure an organization",
        "code": "1. GitHub.com > + > New organization\n2. Choose plan (Free/Team/Enterprise)\n3. Add organization name and contact email\n4. Invite members\n5. Create teams\n6. Create repositories\n7. Set team permissions\n8. Configure security settings"
      }
    ],
    "bestPractices": [
      "Create separate teams for different functions (Engineering, Design, DevOps)",
      "Grant minimum required permissions to each team",
      "Use team discussions for internal communication",
      "Configure SAML/SSO for Enterprise security",
      "Set up audit logging to track team activities"
    ],
    "commonMistakes": [
      {
        "mistake": "Adding all members to Admin team",
        "fix": "Grant minimum required permissions. Only few people need Admin."
      },
      {
        "mistake": "Not using teams at all",
        "fix": "Teams make permission management scalable. Always create teams for groups."
      }
    ],
    "exercise": "Create a free GitHub Organization. Invite a test account. Create a team named 'Developers' with Write permission. Create a repo in the org and add it to the Developers team.",
    "lab": "Create a new Organization. Add 2 teams: Engineering and Design. Set Engineering to Write access to all repos, Design to Read. Create 2 repos: project-app (Engineering write) and project-design (Design write). Invite a collaborator. Test permissions.",
    "summary": "Organizations enable team-level repository management with teams, permissions, and security features. Use teams to group members and grant appropriate access levels.",
    "nextModule": "Module 18: Open Source Contributions"
  },
  "m18": {
    "id": "m18",
    "num": 18,
    "title": "Open Source Contributions",
    "level": "l3",
    "overview": "Contributing to open source is one of the best ways to learn, build your portfolio, and give back to the community. Learn the workflow and etiquette.",
    "objectives": [
      "Find suitable open source projects",
      "Understand the fork-and-contribute workflow",
      "Follow contributing guidelines and codes of conduct",
      "Navigate the contribution process professionally"
    ],
    "prerequisites": "Git and GitHub fundamentals (Modules 1-6).",
    "theory": "Open source contribution follows a standard workflow: Fork the project to your GitHub account, Clone your fork locally, Create a feature branch, Make your changes, Push and create a Pull Request. Good first issues are labeled with 'good first issue' or 'help wanted'. Always read CONTRIBUTING.md and CODE_OF_CONDUCT.md before starting. Professional contribution etiquette includes: commenting on an issue before starting work, keeping PRs small and focused, responding to reviewer feedback promptly, and being respectful in all communications.",
    "concepts": [
      {
        "term": "Fork",
        "def": "A personal copy of someone else's repository."
      },
      {
        "term": "Good First Issue",
        "def": "An issue suitable for new contributors."
      },
      {
        "term": "Upstream",
        "def": "The original repository you forked from."
      },
      {
        "term": "Contribution Guideline",
        "def": "A document explaining how to contribute (CONTRIBUTING.md)."
      }
    ],
    "diagram": "Find Project --> Fork --> Clone --> Branch --> Make Changes --> Push --> Open PR --> Review --> Merge",
    "commands": [
      {
        "cmd": "git remote add upstream <url>",
        "desc": "Add original repo as upstream"
      },
      {
        "cmd": "git fetch upstream",
        "desc": "Fetch original repo changes"
      },
      {
        "cmd": "git merge upstream/main",
        "desc": "Sync with original repo"
      }
    ],
    "syntax": "<pre><code># Complete open source workflow\ngit clone https://github.com/your-username/project.git\ncd project\ngit remote add upstream https://github.com/original/project.git\ngit fetch upstream\ngit switch -c feature/improvement\n# Make changes...\ngit add . && git commit -m 'improve docs'\ngit push origin feature/improvement\n# Then open PR on GitHub</code></pre>",
    "examples": [
      {
        "desc": "Sync fork with upstream",
        "code": "git fetch upstream\ngit checkout main\ngit merge upstream/main\ngit push origin main"
      }
    ],
    "bestPractices": [
      "Search for 'good first issue' and 'help wanted' labels",
      "Comment on the issue before starting work",
      "Keep PRs small and focused on one change",
      "Follow the project's commit message style",
      "Be patient and respectful in all communications",
      "Keep your fork synced with upstream regularly"
    ],
    "commonMistakes": [
      {
        "mistake": "Starting work without checking if someone else is already working on it",
        "fix": "Comment on the issue first to let maintainers know you're working on it."
      },
      {
        "mistake": "Creating a large PR that touches many files",
        "fix": "Make small, focused PRs. One feature or fix per PR."
      }
    ],
    "exercise": "Find a repository with a 'good first issue' label. Fork it. Clone your fork. Create a branch. Fix the issue. Push and create a PR. Follow the project's CONTRIBUTING.md.",
    "lab": "Find 3 open source projects with good-first-issue labels. Read each project's CONTRIBUTING.md. Fork one of them. Clone, create a branch, make a small improvement (documentation fix is great for first contribution). Push, create PR. If the PR is accepted or receives feedback, engage professionally.",
    "summary": "Open source contribution follows: fork, branch, push, PR. Find good first issues, read contribution guidelines, make small focused changes, and communicate respectfully.",
    "nextModule": "Module 19: Advanced Git Workflows"
  },
  "m19": {
    "id": "m19",
    "num": 19,
    "title": "Advanced Git Workflows",
    "level": "l3",
    "overview": "Beyond basic branching, Git offers advanced workflows like Git Flow, interactive rebase, cherry-pick, stash, and reflog for professional development.",
    "objectives": [
      "Understand Git Flow and GitHub Flow branching models",
      "Use interactive rebase for clean history",
      "Apply cherry-pick and stash effectively",
      "Recover lost commits with reflog"
    ],
    "prerequisites": "Solid understanding of branching, merging, and remotes (Modules 1-5).",
    "theory": "Git Flow is a multi-branch workflow with main (production), develop (integration), feature/* (features), release/* (releases), and hotfix/* (urgent fixes). GitHub Flow is simpler: one main branch with feature branches and PRs. Interactive rebase (git rebase -i) lets you squash, reorder, edit, and drop commits. Cherry-pick applies specific commits from another branch. Stash saves unfinished work temporarily. Reflog is a safety net that records every HEAD movement, allowing recovery of seemingly lost commits.",
    "concepts": [
      {
        "term": "Git Flow",
        "def": "A multi-branch workflow with develop, release, and hotfix branches."
      },
      {
        "term": "GitHub Flow",
        "def": "A simpler workflow with main and feature branches."
      },
      {
        "term": "Interactive Rebase",
        "def": "Rebase with options to squash, edit, reorder, or drop commits."
      },
      {
        "term": "Cherry-pick",
        "def": "Apply a specific commit from one branch to another."
      },
      {
        "term": "Stash",
        "def": "Temporarily save uncommitted changes."
      },
      {
        "term": "Reflog",
        "def": "A log of all HEAD movements for recovery."
      }
    ],
    "diagram": "[Git Flow] main <-- develop <-- feature/*\n[GitHub Flow] main <-- feature-branch (via PR)",
    "commands": [
      {
        "cmd": "git rebase -i HEAD~3",
        "desc": "Interactive rebase last 3 commits"
      },
      {
        "cmd": "git cherry-pick <hash>",
        "desc": "Apply a specific commit"
      },
      {
        "cmd": "git stash",
        "desc": "Save changes temporarily"
      },
      {
        "cmd": "git stash list",
        "desc": "List stashes"
      },
      {
        "cmd": "git stash pop",
        "desc": "Restore latest stash"
      },
      {
        "cmd": "git reflog",
        "desc": "Show HEAD movement history"
      }
    ],
    "syntax": "<pre><code># Interactive rebase to squash last 3 commits\ngit rebase -i HEAD~3\n# In editor: pick, squash, squash\n# Result: 3 commits become 1</code></pre>",
    "examples": [
      {
        "desc": "Rescue lost changes with reflog",
        "code": "git reflog\n# Find the commit hash before the reset\ngit reset --hard <hash>\n# Or create a branch at that point\ngit branch recovery-branch <hash>"
      }
    ],
    "bestPractices": [
      "Use Git Flow for larger projects with release cycles",
      "Use GitHub Flow for simpler or continuous delivery projects",
      "Use interactive rebase to clean up commits before pushing PRs",
      "Stash often when context-switching between tasks",
      "Practice reflog recovery in a safe test repo before needing it for real"
    ],
    "commonMistakes": [
      {
        "mistake": "Rebasing shared branches",
        "fix": "Never rebase commits that others have based work on. Only rebase local or feature branches."
      },
      {
        "mistake": "Using git reset --hard without checking reflog first",
        "fix": "Use git reflog to find the previous HEAD before performing destructive operations."
      }
    ],
    "exercise": "Create a branch with 5 messy commits. Use interactive rebase to squash them into 2 meaningful commits. Use git stash to save work. Use reflog to recover a commit after a reset.",
    "lab": "Create a new repo. Make 5 small commits with messages like 'wip', 'fix', 'changes'. Switch to a new branch and use git rebase -i HEAD~5 to squash into 2 well-named commits. Cherry-pick a commit from your branch into main. Use stash while switching branches. Practice finding a commit in reflog after a hard reset.",
    "summary": "Advanced Git workflows give you precise control over history. Use the right workflow (Git Flow / GitHub Flow), rebase interactively for clean history, and reflog for safety.",
    "nextModule": "Module 20: Professional Portfolio"
  },
  "m20": {
    "id": "m20",
    "num": 20,
    "title": "Professional Portfolio",
    "level": "l3",
    "overview": "Your GitHub profile is your professional portfolio. Learn to craft a compelling profile README, pin strategic repos, and showcase your contributions.",
    "objectives": [
      "Create a standout profile README",
      "Pin repositories strategically",
      "Understand the contributions graph",
      "Build a portfolio site with GitHub Pages"
    ],
    "prerequisites": "GitHub account. Basic Markdown knowledge.",
    "theory": "Your GitHub profile is often the first thing employers and collaborators see. The profile README (created in a special repository named after your username) appears at the top of your profile. It can include your skills, projects, current work, and links. You can pin up to 6 repositories to highlight your best work. The contributions graph shows your GitHub activity over time. A portfolio site using GitHub Pages showcases your work beyond just code repositories.",
    "concepts": [
      {
        "term": "Profile README",
        "def": "A README displayed on your GitHub profile."
      },
      {
        "term": "Pinned Repository",
        "def": "A featured repository on your profile."
      },
      {
        "term": "Contributions Graph",
        "def": "A visual display of GitHub activity over time."
      },
      {
        "term": "Portfolio Site",
        "def": "A personal website built with GitHub Pages."
      }
    ],
    "diagram": "Create username/username repo --> Write Profile README --> Pin Repos --> Build Portfolio --> Stay Active",
    "commands": [],
    "syntax": "<pre><code># Example Profile README\n# Hi there \ud83d\udc4b\n\nI'm a full-stack developer passionate about open source.\n\n- \ud83d\udd2d Working on [Project Name]\n- \ud83c\udf31 Learning Rust and GraphQL\n- \ud83d\udcac Ask me about JavaScript, React, Node.js\n- \ud83d\udceb How to reach me: email@example.com\n\n## Skills\n![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E)</code></pre>",
    "examples": [
      {
        "desc": "Create a profile README",
        "code": "1. Create repo named your-username/your-username\n2. Add README.md with intro, skills, and projects\n3. Add badges for skills using shields.io\n4. Add links to portfolio, LinkedIn, blog\n5. Commit and push\n6. View your profile page"
      }
    ],
    "bestPractices": [
      "Keep your profile README professional and focused",
      "Pin your best 6 repositories (quality over quantity)",
      "Add skill badges with shields.io for visual appeal",
      "Contribute regularly to maintain a green contributions graph",
      "Link to your portfolio, LinkedIn, and other professional profiles"
    ],
    "commonMistakes": [
      {
        "mistake": "Adding too many pinned repositories",
        "fix": "Pin only your 6 best, most complete projects."
      },
      {
        "mistake": "Using unprofessional language or content",
        "fix": "Keep your profile professional \u2014 this is your public face to employers."
      }
    ],
    "exercise": "Create a username/username repository. Write a profile README with: introduction, skills, current work, and links. Pin 3 repositories.",
    "lab": "Create your profile README repo. Write a complete README with: header with intro, skills section with badges, pinned projects descriptions, GitHub stats card (using github-readme-stats), and links to portfolio and socials. Pin 6 repos: 2 projects, the profile repo, your portfolio site, and 2 contributions.",
    "summary": "Your GitHub profile is your portfolio. Create a profile README, pin strategic repos, maintain activity, and build a portfolio site to showcase your work.",
    "nextModule": "Module 21: Repository Management"
  },
  "m21": {
    "id": "m21",
    "num": 21,
    "title": "Repository Management",
    "level": "l3",
    "overview": "Professional repositories need more than just code. Branch protection, CODEOWNERS, templates, and proper settings keep projects organized and secure.",
    "objectives": [
      "Set up branch protection rules",
      "Configure CODEOWNERS for code review",
      "Create repository templates",
      "Manage repository settings professionally"
    ],
    "prerequisites": "GitHub account with repository admin access. Understanding of teams and permissions.",
    "theory": "Branch protection rules prevent direct pushes to important branches and enforce required workflows like passing checks and code reviews. CODEOWNERS defines who is responsible for specific files or directories, automatically requesting their review on PRs affecting those files. Repository templates provide a starting structure for new projects with standard files (README, .gitignore, LICENSE). Repository settings include features (Issues, Projects, Wiki), merge strategies, and automated branch deletion.",
    "concepts": [
      {
        "term": "Branch Protection",
        "def": "Rules that restrict pushes and enforce reviews on branches."
      },
      {
        "term": "CODEOWNERS",
        "def": "A file defining ownership of specific paths."
      },
      {
        "term": "Template Repository",
        "def": "A repo used as a starting point for new projects."
      },
      {
        "term": "Repository Settings",
        "def": "Configuration options for features, merges, and access."
      }
    ],
    "diagram": "Create Repo --> Set Branch Protection --> Add CODEOWNERS --> Create Templates --> Configure Settings",
    "commands": [],
    "syntax": "<pre><code># .github/CODEOWNERS\n*       @org/engineering-leads\n/src/   @org/frontend-team\n/api/   @org/backend-team\n/docs/  @org/docs-team\n\n# Branch Protection Rules:\n# - Require pull request before merging\n# - Require 1 approval\n# - Require status checks\n# - Restrict force pushes</code></pre>",
    "examples": [
      {
        "desc": "Set up a professionally managed repository",
        "code": "1. Create repo with README, .gitignore, LICENSE\n2. Settings > Branches > Add branch protection rule for main\n   - Require PR with 1 approval\n   - Require status checks\n3. Create .github/CODEOWNERS with team assignments\n4. Enable auto-merge for approved PRs\n5. Set up Dependabot for dependency updates"
      }
    ],
    "bestPractices": [
      "Protect main and develop branches \u2014 never allow direct pushes",
      "Use CODEOWNERS for automatic reviewer assignment",
      "Create repository templates for standard project setup",
      "Enable auto-merge to reduce manual merging overhead",
      "Review security settings and disable unused features"
    ],
    "commonMistakes": [
      {
        "mistake": "Not protecting the main branch",
        "fix": "Always set branch protection to require PR reviews before merging."
      },
      {
        "mistake": "Overcomplicating CODEOWNERS",
        "fix": "Start with broad ownership rules and refine as needed."
      }
    ],
    "exercise": "In a repository, configure a branch protection rule requiring 1 approval on main. Create a CODEOWNERS file. Test by creating a branch and a PR \u2014 verify the reviewer is auto-assigned.",
    "lab": "Create a new repo. Set branch protection: require PR with 1 approval, require status checks. Create .github/CODEOWNERS assigning @your-username as owner of all files. Configure repo as a template. Create a branch protection rule that auto-deletes branches after merge. Test the full flow: create branch, push, PR, review, merge, branch auto-deletes.",
    "summary": "Branch protection keeps main safe. CODEOWNERS assigns reviewers. Template repos standardize project creation. Proper settings streamline team workflows.",
    "nextModule": "Module 22: CI/CD Pipelines"
  },
  "m22": {
    "id": "m22",
    "num": 22,
    "title": "CI/CD Pipelines",
    "level": "l3",
    "overview": "Continuous Integration and Continuous Deployment pipelines automate testing, building, and deployment. Build professional-grade pipelines with GitHub Actions.",
    "objectives": [
      "Design multi-stage CI/CD pipelines",
      "Set up testing across multiple environments",
      "Implement deployment strategies",
      "Manage environment secrets and variables"
    ],
    "prerequisites": "GitHub Actions basics (Module 9). Understanding of testing concepts.",
    "theory": "CI/CD pipelines automate the software delivery process. CI (Continuous Integration) automatically builds and tests every change. CD (Continuous Deployment/Delivery) automatically deploys to production or staging after tests pass. A professional pipeline includes: linting, unit tests, integration tests, build, and deployment. Environments (development, staging, production) separate configuration and secrets. Deployment strategies include: direct deploy, blue-green, canary releases. GitHub Actions supports matrix builds, artifact sharing between jobs, environment protection rules, and deployment gates.",
    "concepts": [
      {
        "term": "CI",
        "def": "Continuous Integration \u2014 automated testing of every change."
      },
      {
        "term": "CD",
        "def": "Continuous Deployment \u2014 automated deployment after testing."
      },
      {
        "term": "Matrix Build",
        "def": "Testing across multiple OS/version combinations."
      },
      {
        "term": "Environment",
        "def": "A deployment target with specific secrets and protection rules."
      },
      {
        "term": "Artifact",
        "def": "A file or output passed between workflow jobs."
      }
    ],
    "diagram": "Push Code --> Lint --> Test --> Build --> Deploy to Staging --> Deploy to Production",
    "commands": [
      {
        "cmd": "needs: job-name",
        "desc": "Make a job dependent on another"
      },
      {
        "cmd": "matrix:",
        "desc": "Define a matrix of OS/version combinations"
      },
      {
        "cmd": "environment:",
        "desc": "Set deployment environment"
      },
      {
        "cmd": "artifacts:",
        "desc": "Upload artifacts between jobs"
      }
    ],
    "syntax": "<pre><code>name: CI/CD\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node: [16, 18, 20]\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: ${{ matrix.node }} }\n      - run: npm ci && npm test\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    environment: production\n    steps:\n      - run: echo 'Deploying...'</code></pre>",
    "examples": [
      {
        "desc": "Complete CI/CD with matrix and deployment",
        "code": "name: Production Pipeline\non:\n  push: { branches: [main] }\njobs:\n  test:\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest]\n        node: [16, 18]\n    runs-on: ${{ matrix.os }}\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: ${{ matrix.node }} }\n      - run: npm ci\n      - run: npm test\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    environment: production\n    if: github.ref == 'refs/heads/main'\n    steps:\n      - run: npm run build\n      - run: echo 'Deployed!'"
      }
    ],
    "bestPractices": [
      "Start with simple CI (lint + test) and add CD incrementally",
      "Use matrix builds to test across versions and OSes",
      "Use separate environments with different secrets",
      "Add environment protection rules for production",
      "Use artifacts to pass build output between jobs"
    ],
    "commonMistakes": [
      {
        "mistake": "Skipping the matrix and only testing on one version",
        "fix": "Use matrix strategy to test across multiple versions of Node, Python, etc."
      },
      {
        "mistake": "Hard-coding credentials in the pipeline",
        "fix": "Always use environment secrets for sensitive data."
      }
    ],
    "exercise": "Create a pipeline with lint, test, and build jobs. Configure environment secrets for deployment. Add a deployment job that only runs on push to main.",
    "lab": "Create a full CI/CD pipeline: 1) Test matrix across Node 16, 18, 20. 2) Build step that creates an artifact. 3) Staging environment deployment that uses the artifact. 4) Production environment with manual approval gate. 5) Test by pushing a commit and watching the full pipeline execute.",
    "summary": "CI/CD pipelines automate testing and deployment. Start with CI (test every commit), add CD (deploy on success), use environments for separation, and matrices for coverage.",
    "nextModule": "Module 23: Professional Workflow & Capstone"
  },
  "m23": {
    "id": "m23",
    "num": 23,
    "title": "Professional Workflow & Capstone",
    "level": "l3",
    "overview": "Bring everything together into a single professional workflow. Daily Git routine, team best practices, and Git hygiene for production environments.",
    "objectives": [
      "Establish a professional daily Git routine",
      "Apply team best practices",
      "Maintain Git hygiene",
      "Complete the full professional workflow"
    ],
    "prerequisites": "All previous modules (1-22).",
    "theory": "A professional Git workflow is a daily habit. Start by pulling latest changes, create or switch to a feature branch, make focused commits, push early, open a PR, address review feedback, merge, and clean up. Git hygiene means: writing clear commit messages, using .gitignore, keeping commits focused, cleaning up branches, and never force-pushing to shared branches. The professional workflow is not just about commands \u2014 it's about communication, review, discipline, and consistency.",
    "concepts": [
      {
        "term": "Daily Workflow",
        "def": "The routine of pull, branch, work, commit, push, PR, merge."
      },
      {
        "term": "Git Hygiene",
        "def": "Practices for maintaining a clean and readable repository."
      },
      {
        "term": "Force Push",
        "def": "Overwriting remote history \u2014 dangerous on shared branches."
      },
      {
        "term": "Communication",
        "def": "PR descriptions, reviews, and issue comments are part of the workflow."
      }
    ],
    "diagram": "Pull main --> Create Branch --> Work --> Commit --> Push --> Open PR --> Review --> Merge --> Delete Branch --> Repeat",
    "commands": [
      {
        "cmd": "git pull origin main",
        "desc": "Pull latest at start of day"
      },
      {
        "cmd": "git switch -c feature/task",
        "desc": "Create task branch"
      },
      {
        "cmd": "git push -u origin feature/task",
        "desc": "Push branch for early backup"
      },
      {
        "cmd": "git rebase -i HEAD~3",
        "desc": "Clean up local commits before PR"
      }
    ],
    "syntax": "<pre><code># Professional daily flow\ngit switch main\ngit pull origin main\ngit switch -c feature/my-task\n\n# Work, commit, work, commit...\ngit add . && git commit -m 'add feature X'\n\n# Before PR, clean up history\ngit rebase -i HEAD~$(git rev-list --count HEAD ^main)\n\n# Push, open PR\ngit push -u origin feature/my-task\n\n# After PR merged, clean up\ngit switch main\ngit pull origin main\ngit branch -d feature/my-task</code></pre>",
    "examples": [
      {
        "desc": "Full professional day workflow",
        "code": "# Morning\ngit switch main && git pull origin main\n\n# Work on task\ngit switch -c feature/dashboard-widget\n# ... make changes, commit frequently ...\n\n# Mid-day push for backup\ngit push -u origin feature/dashboard-widget\n\n# Clean up before PR\ngit rebase -i HEAD~4  # squash fixup commits\n\n# Create PR on GitHub, request review\n# After approval, merge\n\n# Clean up branch\ngit switch main && git pull origin main\ngit branch -d feature/dashboard-widget"
      }
    ],
    "bestPractices": [
      "Pull latest before starting any new work each day",
      "Create a branch for each task \u2014 never work on main",
      "Commit frequently with clear messages",
      "Push early for backup even if not done",
      "Clean up local commits before opening a PR",
      "Delete branches after merging",
      "Never force-push to shared branches",
      "Communicate in PRs \u2014 describe what and why"
    ],
    "commonMistakes": [
      {
        "mistake": "Working on main instead of creating a branch",
        "fix": "Always create a feature branch for every task. Use git switch -c."
      },
      {
        "mistake": "Force-pushing to shared branches",
        "fix": "Use git push --force-with-lease if absolutely necessary \u2014 never force push to shared branches."
      }
    ],
    "exercise": "Simulate a full professional day: pull main, create a branch, make 3 commits with fixup messages, squash them into 1 clean commit, push, open a PR, merge, clean up.",
    "lab": "Create a practice repo. Simulate a full week of professional workflow: Day 1: Start feature branch, commit, push. Day 2: Pull changes, continue working, rebase. Day 3: Open PR, request review, make changes. Day 4: Address review feedback, push changes. Day 5: PR approved, merge, delete branch, pull main. Repeat for a second feature.",
    "summary": "The professional Git workflow is pull, branch, work, commit, push, PR, review, merge, clean up. Git hygiene and communication make the difference between an amateur and a professional.",
    "nextModule": "Congratulations! You have completed all 23 modules. Next: explore the 10 projects, practice in the playground, and prepare for GitHub certifications."
  }
};
