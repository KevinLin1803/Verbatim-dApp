import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabSignUp from '../../Component/TabSignUp/TabSignUp';
import TabLogIn from '../../Component/TabLogIn/TabLogIn';
import useState from 'react';

export default function SignUp() {
  const [value, setValue] = React.useState('1');
  const [name, setName] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SIGN UP" value="1" />
            <Tab label="LOGIN" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0 }}>  
          <div className="SignUp">
            <TabSignUp />
          </div>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0 }}>
          <div className="LogIn">
            <TabLogIn />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
    <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
  </div>
    
  );
}
