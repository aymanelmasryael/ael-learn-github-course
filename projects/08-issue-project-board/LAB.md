# Lab 08: Issue & Project Board

## Learning Objectives

- Create Issues with descriptive titles, bodies, and labels
- Organize work using Milestones with due dates
- Assign Issues to Milestones and team members
- Build a Project board with custom columns
- Add Issues to the board as cards and automate movements
- Use the Roadmap view for timeline planning

## Prerequisites

- A GitHub repository you own (any project will work)
- Understanding of what Issues are (bug reports, feature requests, tasks)
- Familiarity with Markdown for formatting Issue descriptions

## Task List

1. **Create 5+ Issues** — Go to the Issues tab → New Issue. Create at least 5 Issues with varying types:
   - A bug report (use the `bug_report.md` template)
   - A feature request (use the `feature_request.md` template)
   - A documentation task
   - A refactoring or tech-debt task
   - A design or UI task
2. **Add labels** — Assign appropriate labels (e.g., `bug`, `enhancement`, `docs`, `good first issue`) to each Issue.
3. **Create a Milestone** — Go to Issues → Milestones → New Milestone. Name it `v1.0 Launch` with a due date.
4. **Assign Issues to the Milestone** — Open each Issue and add it to the `v1.0 Launch` milestone. Also assign yourself or a collaborator.
5. **Create a Project board** — Go to Projects → New Project. Choose **Board** view. Name it `Sprint Board`.
6. **Add columns** — Create three columns: `To Do`, `In Progress`, `Done`.
7. **Add Issues to the board** — Open the project board and add the Issues you created as cards. Drag them into the appropriate columns.
8. **Set up automation** — Click the three-dot menu on each column → Manage automation. Configure:
   - `To Do` → "When a new issue is added, move to To Do"
   - `In Progress` → Manual movement
   - `Done` → "When an issue is closed, move to Done"
9. **Test automation** — Close one of the Issues in `In Progress`. Verify it automatically moves to `Done`.
10. **Use the Roadmap view** — Switch to **Roadmap** view in the project. Add the `v1.0 Launch` milestone to visualize the timeline.

## Expected Result

- A repository with 5+ Issues, each properly labeled and assigned
- A Milestone (`v1.0 Launch`) grouping several Issues with a due date
- A Project board with three columns and Issues as cards
- Automation rules that move closed Issues to `Done` automatically
- A Roadmap view showing the milestone timeline

## Common Mistakes

- **Skipping labels** — Labels make filtering and searching Issues much easier. Always add at least one label per Issue.
- **Not setting a milestone due date** — A milestone without a due date loses its urgency. Always set a realistic deadline.
- **Dragging cards instead of automating** — Manual updates are error-prone. Use automation rules so that closing an Issue automatically moves it to `Done`.
- **Creating the project board inside the wrong scope** — Ensure the project is linked to the correct repository (not your personal user-level projects).
- **Forgetting to assign Issues** — Unassigned Issues lack ownership. Always assign yourself or a team member so everyone knows who is responsible.

## Verification Checklist

- [ ] I created 5+ Issues with descriptive titles and bodies
- [ ] Each Issue has at least one label (bug, enhancement, docs, etc.)
- [ ] A Milestone named `v1.0 Launch` exists with a due date
- [ ] Multiple Issues are assigned to the Milestone
- [ ] A Project board exists with `To Do`, `In Progress`, and `Done` columns
- [ ] Issues are added as cards to the board
- [ ] Automation is set: closing an Issue moves it to `Done`
- [ ] The Roadmap view shows the milestone timeline
