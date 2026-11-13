# Exercise 1: Build a KeepNote Task Page

## Problem Statement

KeepNote is a simple task-management application.

Create a React application that displays a KeepNote page using React functional components.

The KeepNote Reference Screenshot is provided as a learning aid to help you understand the expected page layout and appearance.

The page should be built using separate React functional components and assembled through the `App` component.

The page should contain the following elements:

**Header**
- Display the application name: KeepNote.

**Page Heading**
- Display: Checklist Chronicles: Conquering Tasks One Tick at a Time

**Note Card**

Display one note card with the following information:

-**Priority:** Represented by a yellow circular indicator.
- **Task:** Group Project Discussion
- **Description:** Schedule a meeting with team members to discuss the science project.
- **Category:** Project
- **Status:** yet-to-start

The note card should include a visible priority indicator for the Medium priority.

**Footer**
- Display: © 2026 KeepNote. All rights reserved.
- Display Facebook, Instagram, and LinkedIn icons.

---

## Writing Your Spec

Complete this exercise using **SCVHS Mode 1 — Hand-First + Validate AI**.

Write the specification yourself using any AI tool.

Before using any AI tool, your specification must include the following requirements. Add each one as a separate Constraint or Acceptance Criterion, using your own words.

### What to Build

Your specification must identify and describe these React components:

| Component | Purpose |
|---|---|
| `Header` | Displays the KeepNote application name. |
| `NoteCard` | Displays the page heading and the given task information. |
| `Footer` | Displays the copyright information and social media icons. |
| `App` | Combines the Header, NoteCard, and Footer into the complete page. |

### Constraints

Your specification must include the following constraints:

1. Use separate React functional components for `Header`, `NoteCard`, and `Footer`, and compose them through `App`.
2. Define the given task information directly inside the `NoteCard` component.
3. Use Tailwind CSS utility classes for styling. Apply the classes using JSX syntax (`className`).
4. Keep the implementation static and limited to the requirements of this exercise.

### Acceptance Criteria

Your specification must include the following acceptance criteria:

1. The page displays the required heading and one note card with the specified task information.
2. The note card displays a yellow circular priority indicator.
3. The complete page displays the KeepNote header and footer with the specified copyright information and Facebook, Instagram, and LinkedIn icons.


**Note:** You may include additional Constraints or Acceptance Criteria if they are relevant to the exercise requirements.



