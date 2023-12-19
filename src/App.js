import logo from './logo.svg';
import './App.css';
import { Typography, Button, IconButton, Stack, TextField, InputAdornment } from '@mui/material';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function App() {
  return (
    <div className="App">

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
      <Button variant='text' href='mui.com' size='small'>Text</Button>
      <Button variant='contained' size='large' color='secondary'>Contained</Button>
      <Button variant='outlined' color='success'>outlined</Button>

      <Stack direction='row' spacing={2} justifyContent='center' margin={5}>

        {/* <Button variant='contained' size='large' color='primary' onClick={()=>{alert('added')}} startIcon={<AddCircleIcon/>}>Add Contact</Button>
        <Button variant='contained' size='large' color='success' startIcon={<AddToHomeScreenIcon/>}>HomePage</Button>
        <Button variant='contained' size='large' color='secondary' startIcon={<AddLocationIcon/>}>AddLocation</Button>

        <IconButton aria-label='add-location' onClick={()=>{alert('location added')}} size='large' color='error'>
        
        <AddLocationIcon/>

        </IconButton> */}

        <TextField label="outlined" variant='outlined' color='success' size='large' required/>
        <TextField label="filled" variant='filled' />
        <TextField label="standard" variant='standard' helperText='Add something' type='password'/>

      </Stack>

      <Stack direction='row' spacing={2} justifyContent='center' margin={5}>
      
      <TextField label='size' variant='outlined' InputProps={{
        startAdornment: <InputAdornment position='start'>H</InputAdornment>
      }}/>
      </Stack>

    </div>
  );
}

export default App;
