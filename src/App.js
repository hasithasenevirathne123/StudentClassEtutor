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
import {styled} from "@mui/material";
import {Table,TableBody,TableHead,TableCell,TableRow,TableContainer,Paper} from "@mui/material";


function createData(id,nic,email,firstname,lastname,gender,dateofbirth,age){
  return {id, nic, email, firstname, lastname, gender, dateofbirth, gender, age}
}
const data = [
  createData("1","970122672v","hasitha97@gmail.com","Hasitha","Senevirathne","Male","1997/01/12","26"),
  createData("2","970122672v","hasitha97@gmail.com","Hasitha","Senevirathne","Male","1997/01/12","26"),
  createData("3","970122672v","hasitha97@gmail.com","Hasitha","Senevirathne","Male","1997/01/12","26"),
  createData("4","970122672v","hasitha97@gmail.com","Hasitha","Senevirathne","Male","1997/01/12","26"),
  // {
  //     id:'1',
  //     nic:'970122672',
  //     email:'hasitha97@gmail.com',
  //     firstname:'Hasitha',
  //     lastname:'Senevirathne',
  //     gender:'Male',
  //     dateofbirth:'1997/1/12',
  //     age:'26' 
  //  },
 ];
 
function App(){
  return(
    <div>
      <div style={{backgroundColor:'#E8ECF4', height:'100vh', padding:10}}>
      <TableContainer component={Paper} sx={{margin:5, width:1200}}>
        <Table sx={{minWidth:650}}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nic</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>DateofBirth</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {data.map((row)=>(
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nic}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.firstname}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.dateofbirth}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
           ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </div>
  );
}

export default App;










// const CustomizedType = styled(Typography)(({theme})=>({
//   color: theme.palette.primary.main,
//   '&:hover':{
//     color:theme.palette.secondary.main
//   }
// }))

// `color:#000055;
// :hover{
//   color:#ff3d00;
//   background:#afafaf
// }
// `

// function App() 
// {
//   const [theme, setTheme] = useState(true)
//   return (
//   <ThemeProvider theme={theme ? lightTheme : darkTheme}>
//     <Box bgcolor="bw.main" sx={{height:'100vh'}}>
//       <Typography className='text' color="primary.main" variant='h4'>Student Learning System</Typography>
//       <Typography className='text' color="secondary.main" variant='h4'>Student Learning System</Typography>
//       <Button startIcon={<DarkMode/>}  variant='contained' onClick={()=>setTheme(!theme)}>DarkMode</Button>
//       <CustomizedType variant='h4'>Select</CustomizedType>
//     </Box>
//   </ThemeProvider>

//   );
// }



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

 