import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2, refetchInterval: 1000 * 60 * 10 } },
});

export default function App(): React.ReactNode {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
