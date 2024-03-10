import * as React from 'react';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#fd00a7',
          light: '#FD33B8',
          dark: '#B10074',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#ffc3ee',
          light: '#FFCFF1',
          dark: '#B288A6',
          contrastText: 'rgba(0,0,0,0.87)',
        },
      },
  });

  

