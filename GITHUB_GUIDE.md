# 🐙 The Complete GitHub Guide for Beginners
### Everything you need — from zero to confidently managing projects

---

## 🗂️ Table of Contents

1. [What Is Git vs. GitHub?](#1-what-is-git-vs-github)
2. [How It All Fits Together](#2-how-it-all-fits-together)
3. [Setting Up — One-Time Steps](#3-setting-up--one-time-steps)
4. [Key Concepts You Must Know](#4-key-concepts-you-must-know)
5. [Your First Project — Step by Step](#5-your-first-project--step-by-step)
6. [The Daily Workflow (What You Do Every Day)](#6-the-daily-workflow-what-you-do-every-day)
7. [Branches — Working Without Breaking Things](#7-branches--working-without-breaking-things)
8. [Reading a Repository on GitHub](#8-reading-a-repository-on-github)
9. [The `.gitignore` File](#9-the-gitignore-file)
10. [The `README.md` File](#10-the-readmemd-file)
11. [GitHub Pages — Publish Your Website for Free](#11-github-pages--publish-your-website-for-free)
12. [Cloning Someone Else's Project](#12-cloning-someone-elses-project)
13. [Common Mistakes & How to Fix Them](#13-common-mistakes--how-to-fix-them)
14. [Every Command — Quick Reference Card](#14-every-command--quick-reference-card)
15. [Glossary — Plain English Definitions](#15-glossary--plain-english-definitions)

---

## 1. What Is Git vs. GitHub?

These two are often confused because they sound alike. They are **different things**:

| | Git | GitHub |
|-|-----|--------|
| **What it is** | A program installed on your computer | A website (github.com) |
| **What it does** | Tracks changes to your files locally | Stores your project online so others can see it |
| **Needs internet?** | ❌ No | ✅ Yes |
| **Analogy** | A detailed diary of every change you ever made | A cloud backup + social network for that diary |

> **Real-world analogy:** Git is like the *undo history* in a word processor — it remembers
> every version of every file. GitHub is like Google Drive — it stores that history in the
> cloud so you (and others) can access it anywhere.

You can use Git **without** GitHub (just locally), but you can't use GitHub without Git.

---

## 2. How It All Fits Together

Here is the journey a file takes from your computer to GitHub:

```
Your Computer                     GitHub (the cloud)
─────────────────────────         ──────────────────
 Working Directory                   Remote Repository
  │  (files you edit)                 (github.com/you/project)
  │
  │  git add .
  ▼
 Staging Area
  │  (files queued to save)
  │
  │  git commit -m "message"
  ▼
 Local Repository
  │  (saved history on your PC)
  │
  │  git push
  ▼
 Remote Repository  ──────────────────────────────────▶  github.com
```

> **Analogy:** Imagine sending a parcel:
> 1. **Working Directory** = items on your desk (you're still editing them)
> 2. **Staging Area** = items packed in the box (ready to send, not sent yet)
> 3. **Commit** = sealing the box and writing the label
> 4. **Push** = handing the box to the courier (sending to GitHub)

---

## 3. Setting Up — One-Time Steps

### Step 1 — Install Git

Download from: **https://git-scm.com/downloads**

Choose Windows → Download the installer → Run it → click Next through everything.

Verify it worked. Open PowerShell and type:
```powershell
git --version
# Should show something like: git version 2.45.0
```

---

### Step 2 — Tell Git Who You Are

Git stamps every save ("commit") with your name and email. Do this **once**:

```powershell
git config --global user.name "Brian Cyrus"
git config --global user.email "your@email.com"
```

Check it worked:
```powershell
git config --global --list
# Shows: user.name=Brian Cyrus  user.email=your@email.com
```

---

### Step 3 — Create a GitHub Account

Go to **https://github.com** → Sign up → Choose a username (people will see this!).

---

### Step 4 — Connect Git to GitHub (SSH Key — Do Once)

An SSH key is like a special password your computer uses to talk to GitHub
automatically, without you typing your password every single push.

```powershell
# 1. Generate the key (press Enter 3 times to accept defaults)
ssh-keygen -t ed25519 -C "your@email.com"

# 2. Copy the key to your clipboard
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | Set-Clipboard

# 3. Go to github.com → Settings → SSH and GPG Keys → New SSH Key
#    Paste your key there and save it
```

Test the connection:
```powershell
ssh -T git@github.com
# Should say: Hi Brian! You've successfully authenticated.
```

---

## 4. Key Concepts You Must Know

### Repository (repo)
A **repository** is a project folder that Git is tracking. It's your project +
all its history. Every commit, every change, forever.

> **Analogy:** A repo is like a filing cabinet. Every time you finish a piece of
> work, you file it in a labelled folder. Git keeps every folder — even the ones
> from months ago.

---

### Commit
A **commit** is a snapshot — a saved version of your project at a specific moment.
Each commit has:
- A unique ID (called a "hash") — e.g., `a3f2c91`
- A message you write — e.g., `"Add nutrition table styles"`
- The author and date

> **Analogy:** A commit is like taking a photo of your LEGO build mid-way through.
> If you knock it over later, you can look at the photo and rebuild from that exact point.

---

### Branch
A **branch** is a separate copy of your project where you can experiment.
The main/default branch is called `main`.

> **Analogy:** Think of a tree. The trunk is `main` (your working, live version).
> Branches grow off the trunk — you can work on a branch without touching the trunk.
> When the branch work is done, you merge it back into the trunk.

---

### Remote
A **remote** is the online version of your repository (on GitHub). By convention,
the main remote is named `origin`.

---

### Staging Area (Index)
Before you commit, you choose *which* changes to include — this is staging.
You can change 10 files but only commit 3 of them.

---

## 5. Your First Project — Step by Step

### Option A — Starting from scratch (new project)

```powershell
# 1. Navigate to your project folder
cd "C:\Users\User\GMC SOFTWARE DEV\recipe-page-main"

# 2. Initialise Git — creates the hidden .git folder
git init
# Output: Initialized empty Git repository

# 3. Stage all your files
git add .
# The dot (.) means "add everything in this folder"

# 4. Make your first commit
git commit -m "Initial commit: add recipe page HTML and CSS"

# 5. Go to github.com → click the green "New" button → create a repo
#    Name it: recipe-page-main
#    Leave everything else as default → click Create Repository

# 6. Link your local repo to GitHub (copy the SSH URL from GitHub)
git remote add origin git@github.com:YourUsername/recipe-page-main.git

# 7. Push your files to GitHub
git push -u origin main
# -u sets "origin main" as the default, so future pushes just need: git push
```

---

### Option B — Starting from GitHub (clone first)

```powershell
# 1. Go to GitHub, find the repo, click the green "Code" button, copy SSH URL
# 2. Clone it to your computer
git clone git@github.com:YourUsername/recipe-page-main.git

# This creates a folder called recipe-page-main with all files inside it
# Git is already set up — no need for git init or git remote add
```

---

## 6. The Daily Workflow (What You Do Every Day)

This is the sequence you'll use **every single time** you work on a project:

```powershell
# ── START OF YOUR WORK SESSION ──────────────────────────

# Pull latest changes from GitHub first (in case you worked elsewhere)
git pull

# ... do your work, edit files ...

# ── WHEN YOU WANT TO SAVE YOUR PROGRESS ─────────────────

# 1. See what changed
git status

# 2. See the exact changes line by line (optional)
git diff

# 3. Stage the files you want to commit
git add .               # stage everything
git add index.html      # stage just one file
git add style.css LEARNING.md  # stage specific files

# 4. Commit with a meaningful message
git commit -m "Fix navigation layout on mobile"

# 5. Push to GitHub
git push

# ── END OF YOUR WORK SESSION ────────────────────────────
```

### ✍️ Writing Good Commit Messages

A commit message should complete the sentence: **"This commit will…"**

| ✅ Good | ❌ Bad |
|--------|-------|
| `Add hero image to recipe card` | `stuff` |
| `Fix nutrition table row borders` | `fix` |
| `Update README with setup instructions` | `updated files` |
| `Remove unused CLAUDE.md file` | `asdfgh` |

**Rules:**
- Start with a capital letter
- Use present tense ("Add" not "Added")
- Keep it under 72 characters
- Be specific about *what* changed

---

## 7. Branches — Working Without Breaking Things

Use branches when you want to try something new without risking your working version.

```powershell
# See all branches (* marks the current one)
git branch

# Create a new branch and switch to it
git checkout -b feature/dark-mode
# OR (modern way):
git switch -c feature/dark-mode

# Switch between branches
git checkout main
git checkout feature/dark-mode

# After working on your branch, push it to GitHub
git push -u origin feature/dark-mode

# When the feature is done, merge it back into main
git checkout main          # go back to main
git merge feature/dark-mode  # bring the branch work in

# Delete the branch after merging (it's no longer needed)
git branch -d feature/dark-mode
```

### Branch Naming Conventions

| Prefix | Use for | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/add-dark-mode` |
| `fix/` | Bug fixes | `fix/mobile-navigation` |
| `style/` | Visual only changes | `style/update-card-colours` |
| `docs/` | Documentation updates | `docs/update-readme` |

---

## 8. Reading a Repository on GitHub

When you open any repo on GitHub, here's what you see:

```
📁 recipe-page-main             ← Repository name
├── 📄 index.html               ← Files & folders
├── 📄 style.css
├── 📄 README.md                ← Shown automatically below the files
│
[main ▾] [1 branch] [0 tags]   ← Branch selector
[Code] [Issues] [Pull requests] ← Navigation tabs
[⭐ Star] [🍴 Fork]             ← Interact with the repo
```

### Important Tabs

| Tab | What it's for |
|-----|--------------|
| **Code** | Browse files, read README |
| **Issues** | Bug reports / feature requests (like a to-do list) |
| **Pull Requests** | Proposed changes from branches waiting to be merged |
| **Actions** | Automated tasks (tests, deployments) |
| **Settings** | Rename repo, set up GitHub Pages, manage access |

### Commit History

Click **"X commits"** (shown near the top right of the file list) to see every commit
ever made — like reading the full diary.

Click any commit to see exactly what changed (green = added, red = removed).

---

## 9. The `.gitignore` File

`.gitignore` is a file that tells Git: **"Don't track these files."**

Some files should never go to GitHub:
- `node_modules/` — thousands of dependency files (too big, can be reinstalled)
- `.env` — secret passwords and API keys (NEVER commit these!)
- OS files like `.DS_Store` (Mac) or `Thumbs.db` (Windows)
- Log files, build outputs

Your project already has a `.gitignore`. Open it to see what's being ignored.

**Example `.gitignore`:**
```
# Dependencies
node_modules/

# Environment variables (SECRETS — never commit!)
.env
.env.local

# Build output
/dist
/build

# OS generated files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
```

> **Analogy:** `.gitignore` is like a "Do Not Pack" list when you're moving house.
> Some things (like the old takeaway boxes) you leave behind intentionally.

---

## 10. The `README.md` File

The `README.md` is the **front page** of your repository — the first thing anyone reads.
GitHub automatically renders it below your file list.

A good README answers these questions:

```markdown
# Project Name

A short description of what this project does.

## 🔍 Preview
![Screenshot](./preview.jpg)

## 🚀 Live Demo
[View Live](https://yourusername.github.io/recipe-page-main)

## 🛠️ Built With
- HTML5
- CSS3
- Google Fonts (Young Serif, Outfit)

## 📋 What I Learned
- Flexbox layout
- CSS Custom Properties (variables)
- Responsive design with media queries

## 👤 Author
- GitHub: [@BrianCyrus](https://github.com/BrianCyrus)
- Frontend Mentor: [@BrianCyrus](https://www.frontendmentor.io/profile/BrianCyrus)
```

---

## 11. GitHub Pages — Publish Your Website for Free

GitHub Pages lets you host **any HTML/CSS project for free** with a public URL.

### How to turn it on:

1. Go to your repo on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, choose `Deploy from a branch`
5. Select branch: `main` — Folder: `/ (root)`
6. Click **Save**

After 1–2 minutes your site is live at:
```
https://YourUsername.github.io/recipe-page-main
```

Every time you `git push`, the live site updates automatically! 🎉

> **Important:** Your main file **must** be named `index.html` (which ours already is).

---

## 12. Cloning Someone Else's Project

You can copy any public repo to your computer to study it or build on it.

```powershell
# Clone (copy) a repo
git clone git@github.com:someone/their-project.git

# This creates a folder called "their-project" with all their files
# You can open it, read it, run it — but to push YOUR changes you'd
# need your own copy (called a "Fork") on GitHub first
```

### Forking

A **Fork** is your own personal copy of someone else's repository on GitHub.
You fork → clone YOUR fork → make changes → push to YOUR fork.

This is how open-source contribution works:
1. Fork the repo (click the 🍴 Fork button on GitHub)
2. Clone YOUR fork to your computer
3. Make changes
4. Push to your fork
5. Open a **Pull Request** to suggest your changes to the original

---

## 13. Common Mistakes & How to Fix Them

### ❌ "I committed to main instead of a branch"
```powershell
# Move the last commit to a new branch (undo from main, keep changes)
git branch feature/oops        # create branch with current work
git reset HEAD~1 --soft        # undo the commit on main (keep files changed)
git checkout feature/oops      # go to the branch that has your work
```

---

### ❌ "I made a typo in my last commit message"
```powershell
git commit --amend -m "Correct message here"
# Only do this BEFORE pushing — never amend commits already on GitHub
```

---

### ❌ "I accidentally staged a file I didn't mean to"
```powershell
git restore --staged index.html   # unstage index.html (keeps your changes)
git restore --staged .            # unstage everything
```

---

### ❌ "I want to undo all my changes to a file since the last commit"
```powershell
git restore index.html   # ⚠️ WARNING: This permanently discards your changes!
```

---

### ❌ "I pushed my password/secret to GitHub!"
1. Immediately go to **GitHub → Settings → Developer Settings → Personal Access Tokens** and revoke any affected keys
2. Change passwords/regenerate API keys in any service that was exposed
3. Remove the secret from your code, commit, and force push:
```powershell
git push --force   # ⚠️ Use carefully
```
4. The old commit still exists in history — contact GitHub support if critical

---

### ❌ "My push was rejected"
```powershell
# This means GitHub has changes you don't have locally.
# Pull first, then push:
git pull --rebase   # get GitHub's changes, replay yours on top
git push
```

---

### ❌ "I have merge conflicts!"

A merge conflict happens when two people changed the same line in different ways.
Git doesn't know which version to keep, so it asks you.

Open the conflicted file — you'll see:
```
<<<<<<< HEAD
color: red;          ← YOUR version
=======
color: blue;         ← THEIR version (from GitHub)
>>>>>>> origin/main
```

Simply:
1. Delete the `<<<`, `===`, and `>>>` lines
2. Keep whichever code is correct (or combine them)
3. Save the file
4. `git add .` → `git commit`

---

## 14. Every Command — Quick Reference Card

### Setup (one-time)
```powershell
git config --global user.name "Your Name"     # set your name
git config --global user.email "you@mail.com" # set your email
git init                                       # start tracking a folder
git clone <url>                                # copy a repo to your computer
```

### Daily Workflow
```powershell
git status              # see what changed
git diff                # see exact line changes
git add .               # stage everything
git add <file>          # stage one file
git commit -m "message" # save a snapshot
git push                # upload to GitHub
git pull                # download latest from GitHub
```

### Branches
```powershell
git branch                        # list all branches
git switch -c <branch-name>       # create + switch to new branch
git switch main                   # go back to main
git merge <branch-name>           # merge a branch into current
git branch -d <branch-name>       # delete a branch
git push -u origin <branch-name>  # push a new branch to GitHub
```

### Undoing Things
```powershell
git restore <file>           # discard changes to a file (dangerous!)
git restore --staged <file>  # unstage a file (keeps changes)
git commit --amend -m "msg"  # fix last commit message (before push only!)
git log --oneline            # see commit history
git revert <hash>            # safely undo a commit (creates a new commit)
```

### Remote Repos
```powershell
git remote -v                         # see connected remotes
git remote add origin <url>           # connect to GitHub
git remote set-url origin <new-url>   # change the remote URL
```

### Viewing History
```powershell
git log                   # full history
git log --oneline         # compact history (one line per commit)
git log --oneline --graph # visual branch history
git show <hash>           # see what one commit changed
```

---

## 15. Glossary — Plain English Definitions

| Term | Plain English Meaning |
|------|-----------------------|
| **Repository (repo)** | A project folder that Git is tracking — including its full history |
| **Commit** | A saved snapshot of your project at a moment in time |
| **Branch** | A parallel copy of your project to safely experiment on |
| **Merge** | Combining the work from one branch into another |
| **Remote** | The online copy of your repo (usually on GitHub) |
| **Origin** | The default name for your GitHub remote |
| **Main** | The default branch name (used to be called "master") |
| **Push** | Uploading your local commits to GitHub |
| **Pull** | Downloading GitHub's latest commits to your computer |
| **Clone** | Copying a repo from GitHub to your computer |
| **Fork** | Making your own copy of someone else's GitHub repo |
| **Pull Request (PR)** | A proposal to merge one branch into another (reviewed by others) |
| **Staging Area** | A waiting room for changes before you commit them |
| **Hash / SHA** | The unique ID of a commit (e.g., `a3f2c91`) |
| **HEAD** | A pointer to the commit you're currently "at" |
| **Merge Conflict** | Two branches changed the same line differently — needs manual fixing |
| **Rebase** | Re-applying your commits on top of a newer base (advanced) |
| **Tag** | A permanent label on a specific commit (e.g., `v1.0`) |
| **Issue** | A bug report or feature request on GitHub |
| **README.md** | The documentation shown on the front page of a repo |
| **.gitignore** | A list of files/folders Git should never track |
| **SSH Key** | A cryptographic password that lets your PC talk to GitHub securely |
| **GitHub Pages** | GitHub's free service for hosting HTML/CSS websites |

---

## 🎯 The Workflow at a Glance (Cheat Sheet)

```
Every day:
  git pull                    ← start by downloading any new changes

When you finish something:
  git status                  ← see what changed
  git add .                   ← stage your changes
  git commit -m "what I did"  ← save a snapshot
  git push                    ← upload to GitHub

When trying something risky:
  git switch -c feature/name  ← work on a branch
  ... do your work ...
  git switch main
  git merge feature/name      ← merge it back when done
  git branch -d feature/name  ← clean up the branch
```

---

> 💡 **Remember:** Git's #1 superpower is that you can ALWAYS go back. You can never
> truly "break" a project that's being tracked by Git — the history is always there.
> So commit often, push regularly, and don't be afraid to experiment on branches!
>
> 🙌 **You've got this.** Every professional developer uses Git every single day —
> and every single one of them had to learn it exactly where you are right now.
>
> **Next steps:**
> 1. Push this project to GitHub using the steps in Section 5
> 2. Turn on GitHub Pages so your recipe page is live on the internet (Section 11)
> 3. Keep building Frontend Mentor challenges — each one will feel easier!
