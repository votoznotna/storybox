import type { Preview } from '@storybook/react';
import '../src/index.css';

// Registers the msw addon
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW with Safari-compatible options
initialize({
  onUnhandledRequest: 'warn',
  serviceWorker: {
    url: './mockServiceWorker.js',
    options: {
      scope: '/',
    },
  },
});

const preview: Preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
