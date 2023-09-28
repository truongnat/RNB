import React from 'react';
import { App } from '@packages/app';
import { ThemeProvider } from '@packages/theme';
import { Logger } from '@packages/logger';

const EntryPoint = () => {
  const logger = new Logger('EntryPoint');
  logger.info('App started');
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default EntryPoint;
