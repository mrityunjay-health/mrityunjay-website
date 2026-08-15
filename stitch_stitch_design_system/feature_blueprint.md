# Mritunjay Feature Blueprint

# Feature: Patient Consultation Experience

Version: 1.0

Status: Design

Priority: P0 (Core MVP)

Owner: Product Team

Platform: Patient Application

---

# 1. Vision

The Consultation Experience should feel like talking to the most attentive healthcare assistant the patient has ever met.

The patient should never feel like they are chatting with a bot.

Instead, they should feel that the system is carefully understanding their health before involving a clinician.

The consultation experience should reduce anxiety while collecting clinically useful information.

---

# 2. Problem Statement

Traditional telemedicine begins with an empty conversation.

Patients repeatedly explain:

* symptoms
* medications
* allergies
* history
* reports

Doctors then reconstruct the patient's story from scratch.

Mritunjay eliminates this friction.

The AI understands first.

The doctor begins with context.

---

# 3. Objectives

Patient

* Explain symptoms naturally
* Feel understood
* Never repeat medical history
* Receive appropriate doctor matching
* Move smoothly toward treatment

Business

* Increase consultation completion
* Reduce abandoned consultations
* Improve doctor efficiency
* Improve patient satisfaction

Clinical

* Capture structured information
* Prepare doctor context
* Identify emergencies early
* Reduce missing information

---

# 4. Success Metrics

Primary

* Consultation Started
* Consultation Completed
* Doctor Connected

Secondary

* Voice Usage
* Report Upload
* AI Summary Generated
* Clarification Completion

---

# 5. Entry Conditions

Patient authenticated.

Health Memory loaded.

Consultation session created.

AI services available.

---

# 6. Exit Conditions

One of the following:

* Doctor Matching begins
* Emergency escalation
* Consultation cancelled
* Consultation saved as draft

---

# 7. User Psychology

The patient is likely experiencing:

* pain
* uncertainty
* fear
* frustration
* urgency

The consultation should feel:

* calm
* conversational
* intelligent
* attentive
* trustworthy

---

# 8. Information Priority

Priority 1

Current symptom conversation

Priority 2

AI understanding progress

Priority 3

Uploaded medical reports

Priority 4

Health Memory references

Priority 5

Conversation history

---

# 9. Navigation

Desktop

Left Sidebar

* Home
* Consultation (active)
* Timeline
* Reports
* Medicines
* Recovery
* Family
* Profile

Top Bar

Back

Consultation Status

Time Elapsed

Save Draft

Main Workspace

Conversation

Right Context Panel

AI Understanding

Relevant Health Memory

Uploaded Reports

Current Summary

Mobile

Top Bar

Conversation

Bottom Input Area

Floating Voice Button

---

# 10. Screen Inventory

01 Consultation Welcome

02 Active Conversation

03 Voice Recording

04 Report Upload

05 AI Understanding

06 Clarification Questions

07 Clinical Summary

08 Doctor Matching

09 Consultation Saved

10 Emergency Escalation

---

# 11. Consultation Welcome

Purpose

Introduce consultation.

Build trust.

Explain the process.

Components

Greeting

Estimated Time

Privacy Message

Primary CTA

Start Consultation

Secondary CTA

Upload Reports First

Information

"Your doctor will receive a structured summary so you won't need to repeat everything."

---

# 12. Active Conversation

Purpose

Collect symptoms naturally.

Layout

Header

Conversation Timeline

Suggested Questions

Input Area

Bottom Actions

Top Bar

Back

Consultation Progress

Save Draft

Conversation Area

AI Messages

Patient Messages

Voice Transcripts

Uploaded Reports

Input Area

Voice Button

Text Input

Attach Report

Camera Scan

Bottom Actions

Emergency Help

Finish Consultation

---

# 13. Voice Recording

Purpose

Natural conversation.

States

Permission Request

Recording

Paused

Processing

Completed

Waveform visible during recording.

Recording timer displayed.

Pause and Resume supported.

---

# 14. Report Upload

Supported

* PDF
* Image
* Camera Scan

After upload

* Processing indicator
* AI extraction progress
* Upload success confirmation

Never interrupt the conversation.

---

# 15. AI Understanding Panel

Visible throughout consultation.

Shows

Symptoms identified

Relevant history found

Medications considered

Allergies detected

Missing information

This panel updates dynamically.

It does not expose internal reasoning.

---

# 16. Clarification Questions

Purpose

Ask only clinically relevant follow-up questions.

Questions should:

* be short
* ask one thing at a time
* explain why additional information is needed when appropriate

Maximum of one active question on screen.

---

# 17. Clinical Summary

Purpose

Confirm understanding before doctor matching.

Sections

Primary Complaint

Duration

Severity

Relevant History

Current Medicines

Allergies

Reports Reviewed

Patient can:

Edit information

Add missing information

Confirm summary

---

# 18. Doctor Matching Transition

Patient sees

"We're selecting the most appropriate doctor for your situation."

Display

Preparation progress

Doctor specialty

Estimated wait time

Do not show a random list of doctors first.

Recommend one doctor based on the clinical context, while allowing the patient to view alternatives if they choose.

---

# 19. Buttons

Primary

Start Consultation

Continue

Confirm Summary

Secondary

Upload Report

Use Voice

Edit Summary

Save Draft

Emergency Help

One visually dominant CTA per screen.

---

# 20. Conversation Components

Patient Message

AI Message

Voice Transcript

Report Attachment

Timeline Marker

Typing Indicator

Progress Indicator

Clinical Tag

Date Separator

---

# 21. States

Idle

Conversation Active

Recording

Processing

Clarification

Summary Review

Doctor Matching

Completed

Saved Draft

Offline

Error

Emergency

---

# 22. Loading States

Examples

Preparing your consultation...

Reviewing your previous reports...

Understanding your symptoms...

Preparing information for your doctor...

Never use a generic "Loading..." message.

---

# 23. Empty States

No reports

"You can upload previous reports to help us understand your health."

No Health History

"We'll begin building your health memory today."

---

# 24. Error States

Speech Recognition Failed

Offer retry or manual typing.

Upload Failed

Allow retry without losing progress.

Connection Lost

Save consultation automatically.

Resume when reconnected.

---

# 25. Accessibility

Voice-first interaction supported.

Large touch targets.

High contrast.

Captions for voice transcripts.

Keyboard accessible on desktop.

Screen-reader compatible.

---

# 26. Motion

Conversation messages fade in.

Voice waveform animates only while recording.

AI Understanding panel updates smoothly.

Progress transitions communicate advancement through the consultation.

Avoid decorative animations.

---

# 27. Security & Privacy

Consultation data encrypted.

Reports processed securely.

Voice recordings handled according to privacy settings.

Clearly indicate when information is being shared with the selected clinician.

---

# 28. Analytics Events

consultation_opened

voice_started

voice_completed

report_uploaded

clarification_answered

summary_generated

summary_confirmed

doctor_matching_started

consultation_saved

consultation_completed

---

# 29. Acceptance Criteria

The feature is complete when:

* Patients can complete a consultation without repeating known medical history.
* Voice and text interactions are equally supported.
* Reports can be uploaded without disrupting the consultation.
* AI Understanding is visible but not overwhelming.
* A structured clinical summary is generated and confirmed before doctor matching.
* Loading, empty, offline, emergency, and error states are fully designed.
* The experience follows the Mritunjay Design Bible and remains visually consistent with the Patient Home Experience.

---

# 30. Design Decisions

DD-005

Voice is the default consultation method.

Reason

Speaking is more natural when patients are unwell.

DD-006

Health Memory is referenced automatically.

Reason

Patients should never repeat known information.

DD-007

The AI Understanding panel displays observable progress, not hidden reasoning.

Reason

Increase transparency while avoiding misleading representations of AI reasoning.

DD-008

Patients review and confirm the clinical summary before doctor matching.

Reason

Improve accuracy, trust, and patient involvement.

DD-009

Only one recommended doctor is highlighted by default.

Reason

Reduce decision fatigue while preserving patient choice.
