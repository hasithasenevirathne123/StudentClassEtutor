import logo from './logo.svg';
import './App.css';
import { Typography, Button, IconButton, Stack, TextField, InputAdornment, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@mui/material';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import { red, green } from '@mui/material/colors';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { DarkMode } from '@mui/icons-material';
import {CssBaseline} from '@mui/material'
import { darkTheme, lightTheme } from './theme';
import Box from  "@mui/material/Box";

function App() 
{
  const [theme, setTheme] = useState(true)
  return (
  <ThemeProvider theme={theme ? lightTheme : darkTheme}>
    <Box bgcolor="bw.main" sx={{height:'100vh'}}>
      <Typography className='text' color="primary.main" variant='h4'>Student Learning System</Typography>
      <Typography className='text' color="secondary.main" variant='h4'>Student Learning System</Typography>
      <Button startIcon={<DarkMode/>}  variant='contained' onClick={()=>setTheme(!theme)}>DarkMode</Button>
      </Box>
  </ThemeProvider>

  );
}

export default App;

     {/* Typography */}

      {/* <header className="App-header">
        <p>
          <Typography color='primary' gutterBottom variant='h1'>Hello world</Typography>
          <Typography color='secondary' gutterBottom variant='h2'>Hello world</Typography>
          <Typography color='red' variant='h3'>Hello world</Typography>
          <Typography variant='h4'>Hello world</Typography>
          <Typography variant='body1'>Hello world</Typography>
          <Typography variant='body2'>Hello world</Typography>
          <Typography variant='caption'>Caption</Typography>
        </p>
      </header> */}

     {/*Buttons */}

      {/* <Button variant='text' href='mui.com' size='small'>Text</Button>
      <Button variant='contained' size='large' color='secondary'>Contained</Button>
      <Button variant='outlined' color='success'>outlined</Button> */}

      {/* <Stack direction='row' spacing={2} justifyContent='center' margin={5}>

        <Button variant='contained' size='large' color='primary' onClick={()=>{alert('added')}} startIcon={<AddCircleIcon/>}>Add Contact</Button>
        <Button variant='contained' size='large' color='success' startIcon={<AddToHomeScreenIcon/>}>HomePage</Button>
        <Button variant='contained' size='large' color='secondary' startIcon={<AddLocationIcon/>}>AddLocation</Button>

        <IconButton aria-label='add-location' onClick={()=>{alert('location added')}} size='large' color='error'>
        
        <AddLocationIcon/>

        </IconButton>

        <TextField label="outlined" variant='outlined' color='success' size='large' required/>
        <TextField label="filled" variant='filled' />
        <TextField label="standard" variant='standard' helperText='Add something' type='password'/>

      </Stack> */}

      {/* <Stack direction='row' spacing={2} justifyContent='center' margin={5}>
      
      <TextField label='Money' variant='outlined' InputProps={{
        endAdornment: <InputAdornment position='start'><AddLocationIcon/></InputAdornment>
      }}/>

      <TextField
       label="input"
       value={data}
       onChange={e=>setData(e.target.value)}
       error = {!data}
       helperText= {!data ? 'required': 'done'}
       variant='outlined'/>
      </Stack> */}


    {/* <Stack direction="row" spacing={2} justifyContent="center" margin={5}>

    <FormControl>

    <FormLabel id='pl'>Programming Languages</FormLabel>
      <RadioGroup
      name='Programming language to learn'
      aria-labelledby='Programming_language_to_learn'
      value={data}
      onChange={e => setData(e.target.value)}
      row
      >
      <FormControlLabel
      value="C Programming"
      control={<Radio/>}
      label="C Programming"
      color='Green'
      />
     <FormControlLabel
      value="JAVA"
      control={<Radio/>}
      label="JAVA"
      />
     <FormControlLabel
      value="Phython"
      control={<Radio/>}
      label="Python"
      />
     <FormControlLabel
      value="Angular js"
      control={<Radio/>}
      label="Angular js"
      />
      </RadioGroup>

    </FormControl>

    </Stack> */}


{/* <Stack direction="row" spacing={2} justifyContent="center" margin={5}>

<FormControl>

<FormLabel id='pl'>Programming Languages</FormLabel>
  <RadioGroup
  name='Programming language to learn'
  aria-labelledby='Programming_language_to_learn'
  value={data}
  onChange={e => setData(e.target.value)}
  row
  >
  <FormControlLabel
  value="C Programming"
  control={<Radio/>}
  label="C Programming"
  color='Green'
  />
 <FormControlLabel
  value="JAVA"
  control={<Radio/>}
  label="JAVA"
  />
 <FormControlLabel
  value="Phython"
  control={<Radio/>}
  label="Python"
  />
 <FormControlLabel
  value="Angular js"
  control={<Radio/>}
  label="Angular js"
  />
  </RadioGroup>

</FormControl>

</Stack>

    <Stack direction='row' spacing={2} justifyContent='center' margin={5}>
      {data}
    </Stack> */}

 