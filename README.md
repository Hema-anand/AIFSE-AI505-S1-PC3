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

- **Priority:** Medium
- **Task:** Group Project Discussion
- **Description:** Schedule a meeting with team members to discuss the science project.
- **Category:** Project
- **Status:** yet-to-start

The note card should include a yellow circular indicator representing the Medium priority. Do not display the priority value as text.

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

### Reference Files

Use the following resources while completing the exercise:

- **Template Spec File:** [Template Spec File](https://github.com/niit-afls/scvhs_learner_pack/blob/main/templates/Spec_SX_Sprint-Name.md)
- **Template AI Decision Log:** [Template AI Decision Log](https://github.com/niit-afls/scvhs_learner_pack/blob/main/templates/Decision_Log_SX_Sprint-Name_vx.md)

Follow the AI-assisted workflow when creating, reviewing, and validating your implementation.

---

## Evaluation Criteria

The exercise will be evaluated based on the following:

1. Specification: The specification identifies the required React components and includes the Constraints and Acceptance Criteria specified in this README.
2. AI Decision Log: The Decision Log records whether the implementation follows the specification, identifies any important issues, and includes a brief Summary and Reflection.
3. React Implementation: The application uses the required functional components and displays the specified page content
4. Do not require exact screenshot matching. The reference screenshot is only a learning aid.


Additional relevant requirements in the student's specification should be accepted and rewarded, provided they do not contradict the exercise requirements.
