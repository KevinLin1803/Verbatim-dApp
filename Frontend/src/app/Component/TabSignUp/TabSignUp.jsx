import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import useState from 'react';
import { useRouter } from 'next/navigation'; 

export default function TabSignUp() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const router = useRouter();

  const submitForm = async () => {
    router.push('/Pages/HomePage');
  }


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
            <FormLabel>Name</FormLabel>
            <Input placeholder=''value={name} onChange={(e) => setName(e.target.value)}/>
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Email </FormLabel>
            <Input placeholder="Enter a email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Password </FormLabel>
            <Input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          <FormControl sx={{ gridColumn: '1/-1' }}>
            <FormLabel>Confirm Password </FormLabel>
            <Input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormControl>
         
          
          
          <CardActions sx={{ gridColumn: '1/-1' }}>
            <Button variant="solid" color="primary" onClick={submitForm}>
              Sign up
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    )
}