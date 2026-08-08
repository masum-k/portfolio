# Masum Kamal --- Portfolio

A modern, responsive personal portfolio built with **Next.js**,
**React**, **Tailwind CSS**, and a **JSON-driven data architecture**.

The portfolio is designed to present my skills, learning journey,
selected work, and contact information in a clean, developer-focused
interface.

## ✨ Live Website

> Add your deployed portfolio URL here.

**Live:** `https://portfolio-masumk.vercel.app`

------------------------------------------------------------------------

## 🚀 About the Project

This portfolio was built as a long-term personal website rather than a
one-time assignment.

The goal is to have a clean foundation that can evolve as I gain more
experience, learn new technologies, and build better projects.

The website currently includes:

-   Responsive navigation
-   Hero section
-   About section
-   Skills showcase
-   Currently Exploring section
-   Projects showcase
-   Individual project detail pages
-   Contact section with a working contact form
-   GitHub and LinkedIn links
-   Resume download placeholder
-   Responsive dark-first UI
-   JSON-driven portfolio content
-   Subtle animations and developer-focused visual elements

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

-   Next.js
-   React
-   JavaScript / JSX
-   Tailwind CSS

### Icons

-   Lucide React
-   React Icons

### Backend / Services

-   Next.js Route Handlers
-   Resend

### Data

-   JSON

### Development Tools

-   Git
-   GitHub
-   VS Code
-   Figma

------------------------------------------------------------------------

## 📁 Project Structure

``` text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── sections/
│   │   ├── SectionAbout.jsx
│   │   ├── SectionContact.jsx
│   │   ├── SectionHero.jsx
│   │   ├── SectionLearning.jsx
│   │   ├── SectionProjects.jsx
│   │   └── SectionSkills.jsx
│   │
│   └── ...
│
├── data/
│   ├── learning.json
│   ├── navigation.json
│   ├── personal.json
│   ├── projects.json
│   ├── site.json
│   ├── skills.json
│   └── socials.json
│
├── lib/
│   └── data.js
│
├── public/
│   └── ...
│
├── .env.local
├── package.json
└── README.md
```

> The exact file structure may change as the portfolio evolves.

------------------------------------------------------------------------

## 🧩 JSON-Driven Architecture

Portfolio content is separated from the UI so information can be updated
without rewriting components.

The main data files are:

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `personal.json`                     Name, designation, location, email,
                                      and personal information

  `navigation.json`                   Navigation links

  `skills.json`                       Skills grouped by category

  `learning.json`                     Currently Exploring technologies
                                      and interests

  `projects.json`                     Project information and links

  `socials.json`                      GitHub and LinkedIn information

  `site.json`                         General site configuration
  -----------------------------------------------------------------------

The JSON files are loaded through:

``` text
lib/data.js
```

This keeps the presentation layer separate from the portfolio content.

------------------------------------------------------------------------

## 📌 Featured Projects

### BiblioDrop

**Status:** In Progress

A full-stack digital platform connecting readers and students with local
libraries and independent book owners.

Users can browse book collections, manage reading lists, and request
doorstep delivery. Librarians and book owners can manage inventory and
delivery requests, while administrators oversee the platform.

**Technologies:**

-   Next.js
-   MongoDB
-   Express.js
-   Tailwind CSS
-   Better Auth
-   JWT
-   HeroUI
-   Gravity UI

------------------------------------------------------------------------

### SkillForge

**Status:** Finished

An education-focused web application inspired by modern online course
platforms.

The project focuses on presenting educational content and courses
through a clean and responsive interface.

**Technologies:**

-   Next.js
-   Tailwind CSS

------------------------------------------------------------------------

### Keen Keeper

**Status:** Finished

A modern contact tracking web application that combines contact
management with social interaction tracking.

It works as a hybrid between a traditional phone contact application and
a social activity tracker, helping users organize contacts and monitor
how they interact with them over time.

**Technologies:**

-   Next.js
-   Tailwind CSS

------------------------------------------------------------------------

## 📚 Currently Exploring

The portfolio also includes a section for technologies and areas I am
interested in learning:

-   Next.js App Router
-   Authentication & Security
-   Mobile App Development
-   UI/UX Design
-   Photography

This section represents areas I am exploring, not technologies I claim
to already be an expert in.

------------------------------------------------------------------------

## 📬 Contact Form

The portfolio includes a server-side contact form powered by a Next.js
Route Handler.

Messages are submitted to:

``` text
POST /api/contact
```

The API validates the submitted data and sends the message using
**Resend**.

### Environment Variable

Create a `.env.local` file:

``` env
RESEND_API_KEY=your_resend_api_key
```

Do not commit `.env.local` or expose your API key publicly.

------------------------------------------------------------------------

## ⚙️ Getting Started

### 1. Clone the repository

``` bash
git clone YOUR_REPOSITORY_URL
```

### 2. Enter the project directory

``` bash
cd portfolio
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Configure environment variables

Create:

``` text
.env.local
```

Add:

``` env
RESEND_API_KEY=your_resend_api_key
```

### 5. Start the development server

``` bash
npm run dev
```

Open:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

## 🏗️ Build for Production

Create a production build:

``` bash
npm run build
```

Start the production server:

``` bash
npm start
```

------------------------------------------------------------------------

## 🎨 Design Philosophy

The portfolio uses a dark-first visual style focused on:

-   Minimal distractions
-   Strong typography
-   Clear content hierarchy
-   Developer-oriented visual elements
-   Responsive layouts
-   Subtle animations
-   Consistent spacing
-   Accessible interactive elements

The design is intentionally kept professional rather than overloaded
with visual effects.

------------------------------------------------------------------------

## 📱 Responsive Design

The website is designed to work across:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Navigation, grids, typography, forms, project cards, and content
sections adapt to smaller screen sizes.

------------------------------------------------------------------------

## 🔮 Future Direction

This portfolio is intended to grow over time.

As I gain more knowledge and build more substantial applications, I plan
to:

-   Replace assignment-based work with stronger personal projects
-   Add a finished resume
-   Add a real LinkedIn profile
-   Expand my full-stack development experience
-   Explore Android and iOS development
-   Learn more about UI/UX design
-   Explore graphic design
-   Continue improving the portfolio itself

The current projects are included because they represent part of my
development journey. They are presented honestly without exaggerating
their scope.

------------------------------------------------------------------------

## 👨‍💻 About Me

I'm **Masum Kamal**, a Full Stack Web Developer focused on building
modern web applications.

I've been interested in computers since childhood, initially through
video games. That early interest eventually grew into an interest in
building things digitally, which led me to programming and web
development.

I'm currently focused on full-stack web development and plan to expand
into mobile development, UI/UX design, and graphic design as I continue
learning.

------------------------------------------------------------------------

## 📄 License

This portfolio is a personal project.

The source code is available for learning and reference, but personal
content, branding, project information, and assets should not be reused
as someone else's portfolio.

------------------------------------------------------------------------

## 📫 Contact

**Email:** `webdev.maasum@gmail.com`

**Location:** Comilla Sadar, Comilla, Bangladesh

**GitHub:** `https://github.com/masum-k`

**LinkedIn:** `https://linkedin.com`

------------------------------------------------------------------------

Built with ❤️ by **Masum Kamal**.
