# Mritunjay Navigation Architecture

Version: 1.0

Status: Foundation

Owner: Product & Design

Purpose

Define the complete navigation system for the Patient Application.

This document standardizes navigation behavior across every feature.

Feature blueprints are not allowed to redefine navigation.

---

# 1. Navigation Philosophy

Navigation should feel invisible.

Patients should never think:

"Where do I go now?"

The system should naturally guide them.

Navigation exists to support healthcare, not exploration.

The application should always answer:

* Where am I?
* Where can I go?
* How do I return?
* What should I do next?

---

# 2. Navigation Principles

* Consistency over creativity.
* One navigation system for the entire application.
* Predictability over novelty.
* Important actions require fewer steps.
* Never make patients search for essential health information.
* Preserve context while navigating.
* Returning should restore previous state whenever practical.

---

# 3. Application Navigation Levels

Level 1: Global Navigation

Persistent application sections.

Level 2: Feature Navigation

Navigation inside a feature.

Level 3: Context Navigation

Temporary navigation inside dialogs, sheets, or flows.

No feature may introduce a fourth level.

---

# 4. Global Navigation

Desktop

Persistent Left Sidebar

Order

1. Home
2. Consultation
3. Timeline
4. Reports
5. Medicines
6. Recovery
7. Family
8. Profile

Settings is accessed from Profile.

Never place Settings directly in the main navigation.

---

Mobile Navigation

Persistent Bottom Navigation

Items

Home

Consultation

Timeline

Recovery

Profile

Maximum five items.

Reports, Medicines, and Family are accessed from Home or Profile shortcuts.

---

# 5. Global Header

Desktop

Left

Current Page Title

Center

Optional feature status

Right

Search

Notifications

Profile

---

Mobile

Left

Back Button (only when applicable)

Center

Current Page

Right

Notifications

No search icon unless the feature requires search.

---

# 6. Navigation Behavior

Selecting a navigation item:

* highlights the destination
* preserves shell
* loads workspace
* preserves previous feature state when possible

Navigation should never refresh the entire application.

---

# 7. Back Navigation Rules

Back returns to the previous logical location.

Not necessarily the previous URL.

Example

Home

↓

Consultation

↓

Upload Report

↓

Back

Returns to Consultation.

Never Home.

Patient progress is always preserved.

---

# 8. Feature Navigation

Feature navigation is local.

Examples

Timeline

* All Events
* Visits
* Reports
* Medicines

Recovery

* Overview
* Check-ins
* Progress

Feature navigation never changes global navigation.

---

# 9. Tabs

Tabs are allowed only inside a feature.

Rules

Maximum four tabs.

All tabs remain visible.

Never hide tabs behind menus.

Tab labels must remain consistent.

---

# 10. Breadcrumbs

Patient application does not use breadcrumbs.

Healthcare tasks are linear.

Breadcrumbs increase complexity without adding value.

---

# 11. Deep Linking

Supported.

Examples

Specific report

Specific prescription

Specific consultation

Specific recovery plan

Opening a deep link always restores surrounding navigation.

---

# 12. Search Navigation

Search never becomes a separate page.

Search overlays the current context.

Closing search returns the user to the same state.

---

# 13. Notifications

Selecting a notification navigates directly to the relevant context.

Examples

Medication Reminder

↓

Medication Detail

Report Ready

↓

Report Viewer

Upcoming Consultation

↓

Consultation

Never send users to Home first.

---

# 14. Primary Action Navigation

Primary CTA always advances the user toward care.

Examples

Start Consultation

↓

Consultation

Confirm Summary

↓

Doctor Matching

Join Consultation

↓

Consultation Room

Complete Recovery Check

↓

Recovery Questions

---

# 15. Protected Navigation

Some destinations require prerequisites.

Examples

Consultation Room

Requires:

Accepted consultation.

Recovery

Requires:

Recovery plan.

Attempting to access unavailable destinations explains why and offers the appropriate next step.

---

# 16. Dialog Navigation

Dialogs never become pages.

Closing a dialog always returns to the previous context.

Dialogs must never change global navigation state.

---

# 17. Bottom Sheets

Bottom sheets temporarily interrupt workflow.

Closing them returns to the originating screen.

Never use bottom sheets for long multi-step processes.

---

# 18. External Navigation

Leaving the application

Examples

Video consultation provider

Payment gateway

Government health portal

Rules

Clearly inform users.

Return them to the previous context after completion.

---

# 19. Session Recovery

If the application closes unexpectedly:

Restore:

* current feature
* current screen
* scroll position (where practical)
* draft consultation
* uploads in progress (where supported)

Users should not feel punished for interruptions.

---

# 20. Offline Navigation

Users may continue navigating cached content.

Actions requiring connectivity display a clear offline explanation and resume automatically when possible.

---

# 21. Error Navigation

If navigation fails:

Display:

* what happened
* retry
* alternative destination if available

Never leave users on a blank screen.

---

# 22. Accessibility

Navigation must support:

* keyboard navigation
* screen readers
* touch
* voice commands

Focus should move to the main page heading after navigation.

---

# 23. Navigation Analytics

Track

home_opened

consultation_opened

timeline_opened

reports_opened

medication_opened

recovery_opened

profile_opened

navigation_back

deep_link_opened

notification_navigation

These events help identify confusing flows.

---

# 24. Navigation Constraints

Features may not:

* change sidebar order
* change bottom navigation
* add global navigation items
* replace navigation components
* create hidden navigation paths
* move profile actions outside Profile

Changes require updating this document first.

---

# 25. Decision Log

NAV-001

Sidebar order is fixed.

Reason

Build long-term spatial memory.

---

NAV-002

Bottom navigation is limited to five items.

Reason

Maintain clarity and reachability.

---

NAV-003

Back follows the user's task, not the browser history.

Reason

Healthcare workflows are task-oriented.

---

NAV-004

Search overlays the current feature instead of becoming a page.

Reason

Preserve user context.

---

NAV-005

Settings lives inside Profile.

Reason

Healthcare actions should remain the primary focus of navigation.

---

# Definition of Done

Navigation is complete when:

* Every feature uses the standard navigation structure.
* Global navigation remains unchanged across the application.
* Back behavior is predictable.
* Navigation preserves user progress.
* Deep links restore surrounding context.
* Accessibility requirements are met.
* No feature invents its own navigation system.
