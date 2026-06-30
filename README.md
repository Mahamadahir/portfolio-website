# Mahamad Dahir Portfolio Website

This repository contains the source code for my personal developer portfolio website, hosted at:

**https://mahamadahir.com**

The website is a central hub for my software development projects, technical skills, and project case studies. It links to live applications, including ChoreSync, hosted separately at:

**https://choresync-app.mahamadahir.com**

## Purpose

The website presents my work as a developer in a clear, professional, and accessible way. It highlights my main projects, explains the technologies behind each one, and links to live demos, GitHub repositories, and contact details.

The main featured project is **ChoreSync**, the rebuilt and improved version of my earlier **CallTask** project.

## Featured Project

### ChoreSync

ChoreSync is a full-stack household chore coordination app that decides whose turn it is, so flatmates stop arguing about the rota. Instead of a fixed schedule, a fairness engine picks the fairest available person for each chore based on who has done the least lately, what people mind doing, and whether they are home that day.

Built over my final year as a full-stack project, it builds on the original CallTask prototype and improves the structure, user experience, and feature set.

Key features:

- Fair assignment driven by a scoring pipeline that explains why you were chosen
- Recurring chores from a single recurrence rule
- Group creation and household management
- Calendar sync with Google and Outlook
- AI assistant
- Notifications and real-time updates
- Web app plus a React Native Android client

**Stack:** Django · Vue · React Native · Kubernetes

Live web app: **https://choresync-app.mahamadahir.com**
Android download: **https://github.com/Mahamadahir/ChoreSync/releases/latest**
Showcase repo: **https://github.com/Mahamadahir/ChoreSync** (source is private)

## Other Projects

### Hangman

A Hangman game with two front ends over one shared Java core: the original Swing desktop app and a web version with a shared online leaderboard. The secret word stays server-side until the round ends, so the leaderboard cannot be gamed by reading the page source.

**Stack:** Java 21 · Spring Boot 3 · PostgreSQL · vanilla JS · Java Swing · Docker · OpenShift

Live at **https://hangman.mahamadahir.com**, hosted on QMUL OpenShift and fronted by Cloudflare DNS.
Repo: **https://github.com/Mahamadahir/Java-hangman**

### Fitness Tracker

A progressive overload training companion that blends workout planning, nutrition logging, and Health Connect / Apple Health insights in a single Flutter app. Workout plans stay in sync with target muscle groups, and inactivity alerts flag muscle groups that have not been trained within a defined window.

**Stack:** Flutter (Material 3, Dart 3.8) · Hive · Drift · Health Connect / Apple Health

Repo: **https://github.com/Mahamadahir/fitness_app** (private)

### PermissionLedger

*In progress.* A dashboard to track, review, and manage online consent decisions, app permissions, and privacy policy changes from one place. Records can be created manually or captured from the current site through a browser extension, then searched, filtered, reviewed, revoked, and exported.

**Stack:** Rust · Axum · SQLx · PostgreSQL · SvelteKit · TypeScript · Tailwind CSS · Chrome Manifest V3 extension

Repo: **https://github.com/Mahamadahir/permission-ledger**

## Tech Stack

This website is built using:

- **React**
- **Vite**
- **Tailwind CSS**
- **Cloudflare Pages**
- **Cloudflare DNS**

The portfolio is a static frontend website and does not require a backend.

## Website Structure

```text
mahamadahir.com
├── /
│   Homepage and featured project
│
├── /projects
│   All project cards
│
├── /projects/choresync
│   ChoreSync case study
│
├── /projects/hangman
│   Hangman case study
│
├── /projects/fitness-tracker
│   Fitness Tracker case study
│
├── /projects/permission-ledger
│   PermissionLedger case study (in progress)
│
└── /contact
    Contact links and social profiles
```
