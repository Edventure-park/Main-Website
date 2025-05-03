This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
bun run dev
```
If bun is not installed 
<br>
For Windows
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```
For Mac
```bash
npm install bun -g
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Built With


<div>
  <p>
    <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
    <img alt="NextJS" src="https://img.shields.io/badge/-NextJS-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
    <img alt="Bun" src="https://img.shields.io/badge/-Bun.js-000000?style=flat-square&logo=bun&logoColor=white" />
    <img alt="TailwindCSS" src="https://img.shields.io/badge/-Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
    <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-F38020?style=flat&logo=Cloudflare&logoColor=white" />
    <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  </p>
</div>

# Contributing Guidelines

## 1. Branching Strategy
Start from dev branch: When starting any work, always create your branch from the dev branch.
Branch naming convention:
* For new features: feat/featurename
* For bug fixes: fix/whatyouarefixing
* For updating content: update/whereyouareupdating
* For documentation updates: docs/whatyouupdated
* For refactoring code: refactor/whatyourefactored
* For urgent hotfixes: hotfix/urgentfix

## 2. Pull Request (PR) Workflow
### Step 1: Development
After completing your task, push your changes and create a PR to merge your branch into the dev branch.
Provide a clear description of the changes in the PR.
### Step 2: Testing
Test your code locally before creating a Pull Request merge with the main.
```
bun run deploy
```
# For Windows systems use wsl
```
wsl --install
wsl --install -d Ubuntu-22.04
sudo apt update
sudo apt full-upgrade -y
sudo apt install curl
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```
**Verify Installation**
```
bun --version
```
**Now test the deployement locally**
```
bun run deploy
```

At least 2 members must review and approve the PR before merging into the test branch.
### Step 3: Production
After successful testing, create a PR from the test branch to the main branch.
This PR must be approved by the CTO and at least 1 other member.
Once approved, the changes will be deployed to production.
## 3. Commit Message Guidelines
Use the following prefixes for clear and consistent commit messages:

```
feat: for new features.
fix: for bug fixes.
docs: for documentation updates.
refactor: for code refactoring.
style: for formatting and style changes (not affecting code logic).
test: for adding or updating tests.
chore: for maintenance tasks.
```
```
Example: feat: add user authentication to login page.
```
## 4. CI/CD Pipeline Requirements
The CI/CD pipeline must run error-free.
Both ESLint checks and Next.js build must pass successfully for the PR to be valid.
## 5. Conflict Resolution
If any merge conflicts arise, contributors should immediately contact the CTO for resolution.
## 6. PR Review Time
All PRs should be reviewed and resolved within 5 days of submission.

## Deployed on CloudFlare