## Advanced Todo Card – Stage 1A

This is an enhanced version of the Todo Card component built as part of the HNG Internship tasks. It extends the Stage 0 implementation into a more interactive and stateful component.


## Live Demo
https://hng-stage-0-todo-card-pi.vercel.app

## Core Features (Stage 0)
- Displays task title and description
- Shows priority (High)
- Displays due date and time remaining
- Status indicator (Pending / Done)
- Checkbox to mark task as complete
- Tags (work, urgent)
- Edit and Delete buttons (dummy actions)


## New Features (Stage 1A)
 Edit Mode
- Update title, description, priority, status, and due date
- Save and Cancel functionality

Status Control
- Dropdown with: Pending, In Progress, Done
- Fully synced with checkbox and UI state

Priority Indicator
Visual color indicator:
- Green → Low
- Orange → Medium
- Red → High

 Expand / Collapse
- Toggle long descriptions
- Prevents layout overflow

Dynamic Time Logic
Displays:
- Due in days/hours/minutes
- Overdue states
- Updates every 60 seconds
- Stops when task is mark as Done
 
 Overdue Indicator
- Displays warning when task is overdue

- ## 🛠️ Tech Used
- HTML
- CSS
- JavaScript(Vanilla)

  ## Design Decisions
  - Kept UI clean and minimal for readability
  - Used color indicators for quick priority recognition
  - Expand/collapse improves handling of long content
  - Separated edit mode from the main card for better user focus
  - Time logic designed to feel dynamic and realistic
 
  ## Known Limitations
  - Due date defaults to the start of the selected day (can appear overdue earlier in the day)
  - Only supports a single todo card (not a full app)
  - Time logic runs on client-side only (no timezone adjustments)
 
  ## Accessibility Notes
  - Used aria-live="polite" for time updates
  - Expand/collapse uses aria-expanded and aria-controls
  - Form inputs properly labeled
  - Status control includes accessible naming
  - Supports keyboard navigation via Tab

  

 ## 📌 Notes
- Built with accessibility and responsiveness in mind
- Time remaining is now dynamically calculated and updated
