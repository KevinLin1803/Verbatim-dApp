import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { useRouter } from 'next/navigation'; 
import Button from '@mui/joy/Button';
import axios from 'axios';


export default function TabLogIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const submitForm = async () => {
    setIsLoading(true);
    try {

        // BOB THE BUILDER - check connection
      const response = await axios.post('/api/login', { 
        action: 2,
        email: email, 
        password: password });
      
      if (response.data.success) {
        setError('');
        router.push('/Pages/HomePage');
      } else {
        setError('Incorrect email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

    return (
        <Card
        variant="none"
        sx={{
          maxHeight: '100%',
          maxWidth: '100%',
          mx: 'auto',
          // to make the demo resizable
          overflow: 'auto',
          resize: 'none'
        }}
      >
        
       
        <CardContent
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
            gap: 1.5,
          }}
        >
          
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Email </FormLabel>
            <Input placeholder="Enter a email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Password </FormLabel>
            <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>


          {error && (
            <Typography sx={{ color: 'red', gridColumn: '1/-1', fontSize: '0.875rem' }}>
              {error}
            </Typography>
        )}

          
          
          <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button variant="solid" color="primary" onClick={submitForm}>
              Log in
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    )
}