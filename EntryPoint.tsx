import React from 'react';
import { App } from '@packages/app';
import { ThemeProvider } from '@packages/theme';

const EntryPoint = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default EntryPoint;
