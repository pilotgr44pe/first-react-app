# To-Do List App

A simple, fully functional to-do list built while learning React and TypeScript fundamentals that covers adding, completing, and deleting tasks with a clean, minimal UI.

## Features

- Add new to-do items via a controlled input
- Mark items as complete/incomplete (toggle with a strikethrough)
- Delete items from the list
- Empty-state message when there are no to-dos
- Prevents adding blank/empty to-dos

## Tech Stack

- React
- TypeScript
- Vite

## What I Practiced

- Managing array-based state with `useState`, including non-mutating updates using `.map()` and `.filter()` instead of directly mutating state
- Controlled inputs and two-way data binding between state and the DOM
- Component composition and passing data via props
- Using `key` props correctly when rendering dynamic lists
- Conditional rendering (`&&` and ternaries) for empty states and dynamic styling
- Basic input validation with guard clauses

## Running Locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).