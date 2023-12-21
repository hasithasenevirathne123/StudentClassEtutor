import logo from './logo.svg';
import './App.css';
import { Typography, Button, IconButton, Stack, TextField, InputAdornment, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@mui/material';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { useState } from 'react';

function App() {
  const [data, setData]= useState('')
  return (
  <div className="App">
    <Stack direction="row" spacing={2} justifyContent="center" margin={5}>

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
      />
     <FormControlLabel
      value="JAVA"
      control={<Radio/>}
      label="JAVA"
      />
     <FormControlLabel
      value="Phython"
      control={<Radio/>}
      label="python"
      />
     <FormControlLabel
      value="Python"
      control={<Radio/>}
      label="Python"
      />
      </RadioGroup>
      
    </FormControl>

    </Stack>

    <Stack direction='row' spacing={2} justifyContent='center' margin={5}>
      {data}
    </Stack>
</div>
  );
}

export default App;
