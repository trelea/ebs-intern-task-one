import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// /users: User management.
// /users/create: Add User (New page)
// /posts: Post management grid.
// /posts/create: Create a new post. (New Page)
// /posts/:id: Post details.
// /posts/:id/edit: Edit a post. (In modal)
// /dashboard: Dashboard with charts.
// /login: Login page.
// /register: Registration page.

const Routes: { path: string; element: React.ReactNode }[] = [
  { path: '/users', element: <></> },
  { path: '/users/create', element: <></> },
  { path: '/posts', element: <></> },
  { path: '/posts/create', element: <></> },
  { path: '/posts/:id', element: <></> },
  { path: '/posts/:id/edit', element: <></> },
  { path: '/dashboard', element: <></> },
  { path: '/login', element: <></> },
  { path: '/register', element: <></> },
];

// ROUTER
export const router = createBrowserRouter(Routes);
