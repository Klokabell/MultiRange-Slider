import './App.css';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Dayrow from './Components/Row';
import '@fontsource/roboto/300.css';



const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
  },
  palette: {
    primary: {
      main: '#c8288f', 
    },
    secondary: {
      main: '#9885b8c0',
    },
  },
});

function App() {
  return (
    <body>
      <ThemeProvider theme={theme}>
        <Box className='availability' 
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100vh'
          >
        <Grid container direction="column" rowSpacing={2} >
          <Grid item xs={12}>
            <Dayrow day={"Mon"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Tue"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Wed"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Thurs"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Fri"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Sat"} />
          </Grid>
          <Grid item xs={12}>
            <Dayrow day={"Sun"} />
          </Grid>
        </Grid>
        </Box>
      </ThemeProvider>
    </body>


  );

}

export default App;







