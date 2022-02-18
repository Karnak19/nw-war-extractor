import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';

export const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
