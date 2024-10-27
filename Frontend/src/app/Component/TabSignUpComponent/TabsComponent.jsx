import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabProfile from '../TabProfile/TabProfile';
import TabSkills from '../TabSkills/TabSkills';
import useState from 'react';

export default function TabsComponent() {
  const [value, setValue] = React.useState('1');
  const [name, setName] = React.useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="SIGN-UP" value="1" />
        <Tab label="LOG IN" value="2" />
      </TabList>
    </Box>
    <TabPanel value="1" sx={{ padding: 0 }}>  
      <div className="SignUp">
        <TabProfile/>
      </div>
    </TabPanel>
    <TabPanel value="2" sx={{ padding: 0 }}>
      <div className="LogIn">
        {/* Content for Preferences goes here */}
      </div>
    </TabPanel>
  </TabContext>
</Box>

  );
}
