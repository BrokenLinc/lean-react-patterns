import React from 'react';
import {
  CSSReset,
  theme,
  ThemeProvider as DefaultThemeProvider,
} from '@chakra-ui/core';

const customTheme = {
  ...theme,
  // TODO: Add theme customizations here. https://chakra-ui.com/theme
};

export const ThemeProvider = ({ children }) => (
  <DefaultThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </DefaultThemeProvider>
);

export {
  Box,
  Button,
  Checkbox,
  Stack,
  Text
} from '@chakra-ui/core';
