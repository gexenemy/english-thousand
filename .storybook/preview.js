import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../src/styles/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/storybook.scss';

const customViewports = {
    desktop: {
        name: 'Desktop',
        styles: {
            width: '1600px',
            height: '1200px',
        },
    },
    tablet: {
        name: 'Tablet',
        styles: {
            width: '1024px',
            height: '768px',
        },
    },
    mobile: {
        name: 'Mobile',
        styles: {
            width: '360px',
            height: '480px',
        },
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            ...customViewports,
        },
    },
};

export const decorators = [(Story) => <ThemeProvider theme={baseTheme}>{Story()}</ThemeProvider>];
