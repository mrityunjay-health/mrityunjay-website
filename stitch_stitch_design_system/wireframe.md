# Mritunjay Wireframe

Feature Name

Version

Status

Purpose

This document defines the structural layout of the feature.

It specifies where information appears and how components are arranged.

Visual styling belongs to the Design System.

Interactions belong to Interaction Patterns.

Only structure is defined here.

---

# Screen List

List every screen in this feature.

Example

01 Home

02 Consultation

03 Summary

04 Doctor Matching

---

# Screen

Home

Purpose

Patient immediately understands their current health and knows the next best action.

---

# Desktop Structure

Application Shell

↓

Global Header

↓

Hero Section

↓

Primary Action

↓

Health Summary

↓

Medication

↓

Recovery

↓

Recent Activity

↓

Quick Access

↓

Footer

---

# ASCII Wireframe

┌────────────────────────────────────────────────────────────────────────────┐
│ Header                                                                     │
├──────────────┬──────────────────────────────────────────────┬──────────────┤
│ Navigation   │ Hero Section                                 │ Context      │
│              ├──────────────────────────────────────────────┤ Panel        │
│              │ Primary Action Card                          │              │
│              ├──────────────────────────────────────────────┤              │
│              │ Health Summary Card                          │              │
│              ├──────────────────────────────────────────────┤              │
│              │ Medication Card                              │              │
│              ├──────────────────────────────────────────────┤              │
│              │ Recovery Card                                │              │
│              ├──────────────────────────────────────────────┤              │
│              │ Recent Activity                              │              │
│              ├──────────────────────────────────────────────┤              │
│              │ Quick Access                                 │              │
└──────────────┴──────────────────────────────────────────────┴──────────────┘

---

# Mobile Structure

Header

↓

Hero

↓

Primary Action

↓

Health Summary

↓

Medication

↓

Recovery

↓

Recent Activity

↓

Quick Access

↓

Bottom Navigation

---

# Mobile Wireframe

┌────────────────────────────┐
│ Header                     │
├────────────────────────────┤
│ Hero                       │
├────────────────────────────┤
│ Primary Action             │
├────────────────────────────┤
│ Health Summary             │
├────────────────────────────┤
│ Medication                 │
├────────────────────────────┤
│ Recovery                   │
├────────────────────────────┤
│ Recent Activity            │
├────────────────────────────┤
│ Quick Access               │
├────────────────────────────┤
│ Bottom Navigation          │
└────────────────────────────┘

---

# Component Composition

Header

* Page Header

Hero

* Health Summary Card

Primary Action

* Primary Button

Medication

* Medication Card

Recovery

* Recovery Card

Recent Activity

* Timeline Card

Quick Access

* Standard Card

---

# Information Priority

Priority 1

Hero

Priority 2

Primary Action

Priority 3

Health Summary

Priority 4

Medication

Priority 5

Recovery

Priority 6

Recent Activity

Priority 7

Quick Access

---

# Component Relationships

Hero influences

Health Summary

Health Summary influences

Medication

Medication influences

Recovery

Recovery influences

Recent Activity

---

# Scroll Behaviour

Desktop

Workspace scrolls.

Navigation remains fixed.

Context Panel remains fixed.

Mobile

Single continuous vertical scroll.

Bottom navigation remains fixed.

---

# Responsive Behaviour

Desktop

Three columns.

Tablet

Two columns.

Mobile

Single column.

---

# Constraints

No component may change position unless the UI Architecture is updated.

Only approved components may appear.

Only approved layouts may be used.

---

# Acceptance Criteria

Every approved component has a fixed location.

The visual designer should not need to invent layout.

The engineer should immediately understand the page structure.

The generated UI should match this layout before visual refinement begins.
