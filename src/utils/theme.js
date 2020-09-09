import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSize: 12,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
