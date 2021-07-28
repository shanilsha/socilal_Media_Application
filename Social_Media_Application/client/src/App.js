import './App.css';
import { Container ,AppBar,Typography,Grow,Grid} from '@material-ui/core';


function App() {
  return (
   <Container maxWidth="lg">
     <AppBar position='static' color='inherit'>
     <Typography varriant="h2" align='center'>Memories</Typography>

     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify='space-between' alignItems='stretch' spacing="{4}">
         <Grid item xs={12} sm={7} >

         </Grid>

          <Grid item xs={12} sm={7} >

         </Grid>
         
         <Grid item xs={12} sm={7} >

         </Grid>

         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
