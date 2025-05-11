Ed Venture Park - Main Website

Status - Under Development
Table of Contents

Home
About
Protfolio 
Programs 
Apply Now

Edventure Park is a student-focused idea stage startup incubator which aims to empower student-led startups through an intensive 4-month pre incubation program.

The platform is built with scalability, security, and ease of use in mind.

Built With

TypeScript  NextJS  Bun  TailwindCSS  Cloudflare  git

Built and Maintained by Adnan, Arshil

Key Features of PlantoMart:

Admin Panel
Super Admin Controls: The platform includes an overarching admin panel where the platform administrators can monitor all vendor activity, approve product listings, handle disputes, and enforce platform rules.
Transaction Management: Admins can track all platform-wide transactions, including vendor payouts and customer purchases.
User & Role Management: The admin can assign and manage roles to different users, such as moderators, vendors, and customer service representatives, ensuring smooth operation.
Scalable Architecture
Modular Design: Planto-Mart's architecture is modular, allowing for easy addition of new features and expansion as the platform grows. Whether you’re scaling to hundreds or thousands of vendors, the system can handle high traffic and large volumes of data.
Microservices-based: The platform leverages a microservices-based architecture, making it easier to update, maintain, and scale each component independently without disrupting the entire system.
Cloud-Optimized: Deployed on Cloudflare for performance optimization, security enhancements, and scalability, ensuring fast load times and high availability.
Security and Privacy
Secure Authentication: Users and vendors are required to log in via secure authentication protocols, including multi-factor authentication (MFA), ensuring that only authorized users can access sensitive data.
Data Encryption: All user and transaction data is encrypted, maintaining the privacy and security of sensitive information.
PCI-DSS Compliance: The platform follows PCI-DSS standards for payment processing, ensuring all transactions are secure and compliant with industry regulations.
Fraud Prevention: Built-in fraud detection systems monitor suspicious activity, protecting both vendors and customers from potential scams.
Mobile-Responsive Design
The platform is fully mobile-responsive, offering an optimized experience for customers and vendors alike. Whether browsing products, placing orders, or managing store settings, users can seamlessly interact with the platform on any device.
Integrated Marketing and SEO Tools
SEO Optimization: Vendors can optimize their products with detailed SEO fields to improve visibility on search engines.
Promotions & Coupons: The platform allows vendors to create promotions, coupons, and discount codes, helping them boost sales and attract new customers.
Product Reviews: Customers can leave feedback on products, helping vendors build trust and enabling shoppers to make informed decisions.
Getting Started

First, run the development server:

bun run dev
If bun is not installed
For Windows

powershell -c "irm bun.sh/install.ps1 | iex"
For Mac

npm install bun -g
Open http://localhost:3000 with your browser to see the result.

Working Guidelines

1. Branching Strategy

Start from dev branch: When starting any work, always create your branch from the dev branch. Branch naming convention:

For new features: feat/feature-name
For bug fixes: fix/whatyouarefixing
For updating content: update/whereyouareupdating
For documentation updates: docs/whatyouupdated
For refactoring code: refactor/whatyourefactored
For urgent hotfixes: hotfix/urgentfix
2. Pull Request (PR) Workflow

Step 1: Development

After completing your task, push your changes and create a PR to merge your branch into the dev branch. Provide a clear description of the changes in the PR.

Step 2: Testing

Test your code locally before creating a Pull Request merge with the main.

bun run deploy
For Windows systems use wsl

wsl --install
wsl --install -d Ubuntu-22.04
sudo apt update
sudo apt full-upgrade -y
sudo apt install curl
sudo apt install unzip
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
Verify Installation

bun --version
Now test the deployment locally

bun run deploy
Step 3: Production

After successful testing, create a PR from the test branch to the main branch.

3. Commit Message Guidelines

Use the following prefixes for clear and consistent commit messages:

feat: for new features.
fix: for bug fixes.
docs: for documentation updates.
refactor: for code refactoring.
style: for formatting and style changes (not affecting code logic).
test: for adding or updating tests.
chore: for maintenance tasks.
Example: feat: add user authentication to login page.
4. CI/CD Pipeline Requirements

The CI/CD pipeline must run error-free. Both ESLint checks and Next.js build must pass successfully for the PR to be valid.

5. Conflict Resolution

If any merge conflicts arise, contributors should immediately contact Adnan for resolution.

6. PR Review Time

All PRs should be reviewed and resolved within 5 days of submission.

Deployed on CloudFlare

The Planto-Mart platform is deployed on Cloudflare for improved security, performance, and scalability.

Benefits of this Platform:

For Vendors:

Increased Reach: Planto-Mart provides vendors with access to a broad customer base, eliminating the need to drive traffic to a standalone website.
Analytics: Real-time performance tracking and actionable insights help vendors optimize their offerings.
Cost-Effective: By utilizing a shared platform, vendors don’t have to build their own infrastructure from scratch, saving on development and hosting costs.
Easy Management: A user-friendly dashboard simplifies the process of managing inventory, orders, and customer interactions.
For Customers:

Convenience: Shoppers can explore a wide variety of products across different vendors in one place, with a unified cart and checkout process.
Competitive Prices: Customers can compare prices from various vendors, helping them find the best deals.
Trustworthy Reviews: The ability to read reviews from other customers adds a layer of trust and transparency to the shopping experience.
For Platform Administrators:

Centralized Control: Admins can oversee all platform operations, monitor transactions, and enforce policies in one place.
Revenue Generation: The platform offers various monetization strategies, including subscription fees, transaction fees, or featured product listings.
User Management: Admins can easily manage users, resolve disputes, and ensure compliance with platform guidelines.
Use Cases:

Small-to-Medium Enterprises (SMEs) looking for an affordable way to manage their online stores.
Large Marketplaces with multiple vendors who need centralized management tools for both the platform and vendors.
Niche Vendors who want to sell their products to a broader audience but lack the infrastructure for an independent eCommerce site.
Global Enterprises that need scalable, secure solutions for managing multiple vendors in various regions.
