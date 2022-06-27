import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import Router from './Router';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </ThemeProvider>
);
