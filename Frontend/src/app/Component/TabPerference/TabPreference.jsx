import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
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


export default function TabPreference() {

    
    const locations = ['Aberdeen', 'Bath', 'Belfast', 'Birmingham', 'Bristol', 'Bournemouth', 'Cambridge', 'Cardiff', 'Edinburgh', 'Exeter', 'Leeds', 'Liverpool', 'London', 'Luton', 'Manchester', 'Northampton', 'Oxford', 'Poole', 'Reading', 'Southampton'];
    const industries = ['Hospitality', 'Retail', 'Catering', 'Education', 'Care', 'Customer services', 'Marketing', 'Admin jobs', 'Receptionist jobs', 'Healthcare'];
    const jobTypes = ['Part-time', 'Full-time', 'Temporary', 'Permanent', 'Christmas-temp', 'Easter-temp', 'Summer-job'];
    
    const [searchTerm, setSearchTerm] = useState(''); // For the search input
    const [filteredOptions, setFilteredOptions] = useState(locations); // Filtered options based on search
    const [selectedOption, setSelectedOption] = useState(null); // Selected option


    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter options based on the search term                  
        const filtered = locations.filter((option) =>
          option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };
    
    
    const handleOptionSelect = (option) => {
        setSelectedOption(option); // Set the selected option
        setSearchTerm(''); // Clear search term when an option is selected
        setFilteredOptions(options); // Reset the filtered options
    };



/*
  return (
    <Box sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        disablePortal
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        locations={locations}
        renderInput={(params) => <TextField {...params} label="Location" />}
        sx={{
          maxHeight: 200,
          overflowY: 'auto',
        }}
        ListboxProps={{
          style: {
            maxHeight: '150px', // Height of the dropdown menu
            overflowY: 'auto', // Enable scrolling
          },
        }}
      />
    </Box>

    <Box sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        disablePortal
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        options={industries}
        renderInput={(params) => <TextField {...params} label="Industry" />}
        sx={{
          maxHeight: 200,
          overflowY: 'auto',
        }}
        ListboxProps={{
          style: {
            maxHeight: '150px', // Height of the dropdown menu
            overflowY: 'auto', // Enable scrolling
          },
        }}
      />
    </Box>

    <Box sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        disablePortal
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        options={jobTypes}
        renderInput={(params) => <TextField {...params} label="Job type" />}
        sx={{
          maxHeight: 200,
          overflowY: 'auto',
        }}
        ListboxProps={{
          style: {
            maxHeight: '150px', // Height of the dropdown menu
            overflowY: 'auto', // Enable scrolling
          },
        }}
      />
    </Box>
      
  );


    
}

*/





return (
    <div style={{ width: '300px', margin: 'auto', fontFamily: 'Arial' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search and select an option"
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '1rem',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      <div
        style={{
          maxHeight: '150px',
          overflowY: 'auto',
          marginTop: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '0',
          position: 'relative',
          background: '#fff',
        }}
      >
        {filteredOptions.map((option) => (
          <div
            key={option}
            onClick={() => handleOptionSelect(option)}
            style={{
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: selectedOption === option ? '#e0e0e0' : '#fff',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            {option}
          </div>
        ))}
      </div>

      {selectedOption && (
        <p style={{ marginTop: '8px' }}>Selected: {selectedOption}</p>
      )}
    </div>
  );
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
          <FormLabel>Location</FormLabel>
          <Input placeholder="Choose a location" />
        </FormControl>
          
        <FormControl>
          <FormLabel>Industry</FormLabel>
          <Input placeholder="Choose industry" />
        </FormControl>
          
        <FormControl>
          <FormLabel>Job Type</FormLabel>
          <Input placeholder="Choose job type" />
        </FormControl>
          
        
       
        
        
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Save
          </Button>
        </CardActions>
      </CardContent>
        
    </Card>
  );
}







