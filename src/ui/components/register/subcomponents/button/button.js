 
 import { withStyles } from '@material-ui/core/styles';
 import { purple, green, orange, lightBlue } from '@material-ui/core/colors';
 import { createTheme, Button, } from '@material-ui/core';
 export const BootstrapButton = withStyles({
    root: {
      boxShadow: '0 0.25rem 0.75rem rgba(55, 81, 255, 0.24)',
      textTransform: 'none',
      fontSize: '0.875rem',
      color:'#fff',
      padding: '0.75rem 3.8rem',
      border: 'none',
      lineHeight: '1.25rem',
      backgroundColor: '#3751ff',
      borderRadius: '0.5rem',
      fontFamily: [
        '-Mulish',
  ,
      ].join(','),
      '&:hover': {
        backgroundColor: '#3751ff',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      
      },
      '&:focus': {
        boxShadow: '0 0.25rem 0.75rem rgba(55, 81, 255, 0.24)',
      },
    },
  })(Button);
  
  
   
    export  const theme = createTheme({
      palette: {
        primary:{
        main: '#FFFFFF',
      },
        
        secondary: {
        
          main: green[500],
        },
      },
    });