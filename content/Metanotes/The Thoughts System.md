---
title: "The Thoughts System"
publish: true
tags:
  - metanote
  - systems
  - obsidian
  - publishing
---

# How This Digital Garden Works

This note documents the system that publishes select notes from my Obsidian vault to [thoughts.danhelo.com](https://thoughts.danhelo.com).

## The Architecture

```
Obsidian Vault (private)
    │
    ├── Auto-commit every 30 min (Obsidian Git plugin)
    │
    ▼
GitHub: Danhelo/second-brain (private repo)
    │
    ├── On push → dispatches event to thoughts repo
    │
    ▼
GitHub: Danhelo/thoughts (public repo)
    │
    ├── GitHub Action copies safe folders only:
    │   Ideas/, Materials/, Metanotes/, Projects/
    │
    ├── Quartz v4 builds the site
    │   └── ExplicitPublish filter: only notes with
    │       publish: true in frontmatter get rendered
    │
    ▼
Vercel: thoughts.danhelo.com
```

## Three Layers of Privacy

1. **Folder-level**: The sync workflow only copies safe folders. Daily journals, people notes, personal reflections, health tracking — none of it ever leaves the private repo.

2. **Pattern-level**: Quartz's `ignorePatterns` config blocks entire folder paths even if they somehow appear in the content directory.

3. **Note-level**: The `ExplicitPublish` filter requires `publish: true` in a note's YAML frontmatter. Everything else is invisible. This is the final gate.

## How to Publish a Note

Add this to the top of any note in a safe folder:

```yaml
---
title: "Your Note Title"
publish: true
tags:
  - your-tags
---
```

Save it. Within 30 minutes, Obsidian Git auto-pushes → GitHub Action syncs → Quartz rebuilds → live on the site.

## What Gets Published

- **Ideas** — Research notes, technical concepts, philosophical explorations
- **Materials** — Book summaries, article notes, learning materials
- **Metanotes** — Notes about note-taking, thinking systems, this very document
- **Projects** — Selected project writeups and vision docs

## What Never Gets Published

- Daily journal entries (THE Journal/Days)
- People notes and relationship tracking
- Personal development and self-reflection
- Health and fitness tracking
- Strategy documents with personal details
- Weekly/monthly reflections

## The Stack

- **Obsidian** — Where I write. Local-first, markdown, linked thinking.
- **Quartz v4** — Static site generator built for Obsidian vaults. Handles [[wikilinks]], graph view, backlinks, search, and all the Obsidian-flavored markdown.
- **Vercel** — Hosts the static output. Rebuilds on every push.
- **Giscus** — GitHub Discussions-backed comments on every page.
- **Theme** — Custom-matched to danhelo.com's warm scholarly aesthetic: DM Serif Display headings, Instrument Sans body, beige/brown/gold palette.

## Features

- **Graph View** — Interactive visualization of how notes connect. Click nodes to navigate.
- **Backlinks** — Every note shows which other notes link to it.
- **Full-text search** — Client-side, instant, powered by FlexSearch.
- **Explorer** — File tree sidebar for browsing by folder.
- **Link Popovers** — Hover over any internal link for a preview.
- **Table of Contents** — Auto-generated from headings on longer notes.
- **Dark Mode** — Synced with the main site's theme toggle.
- **RSS Feed** — Subscribe at thoughts.danhelo.com/index.xml.
- **Comments** — Giscus-powered, themed to match the site.

## Philosophy

This is not a blog. It's a garden. Notes are planted as seeds — sometimes just a link and a question — and grow over time as I learn more. The graph reveals connections I didn't plan. The backlinks surface relationships I forgot.

Publishing raw, interconnected notes instead of polished essays is a deliberate choice. It's closer to how thinking actually works: messy, branching, recursive. The value isn't in any single note but in the network.

> "The garden is the web as topology. Every walk through the garden creates new paths, new meanings." — Mike Caulfield
