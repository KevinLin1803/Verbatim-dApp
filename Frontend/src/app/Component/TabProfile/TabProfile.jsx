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

export default function TabProfile() {
  const profileLayout = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem 0rem 0rem',
  };

  const [softSkillsList, setSoftSkills] = React.useState([]);
  const [hardSkillsList, setHardSkills] = React.useState([]);
  const [newSoftSkill, setNewSoftSkill] = React.useState('');
  const [newHardSkill, setNewHardSkill] = React.useState('');

  // Function to add soft skill
  const addSoftSkill = () => {
    if (newSoftSkill.trim()) {
      setSoftSkills([...softSkillsList, newSoftSkill]);
      setNewSoftSkill('');
    }
  };

  // Function to add hard skill
  const addHardSkill = () => {
    if (newHardSkill.trim()) {
      setHardSkills([...hardSkillsList, newHardSkill]);
      setNewHardSkill('');
    }
  };

  // Function to remove a soft skill
  const removeSoftSkill = (skill) => {
    setSoftSkills(softSkillsList.filter(s => s !== skill));
  };

  // Function to remove a hard skill
  const removeHardSkill = (skill) => {
    setHardSkills(hardSkillsList.filter(s => s !== skill));
  };

  return (
    <div className="Profile  flex" style={profileLayout}>
        <div className="userInfo w-1/2">
          <Card variant="outlined" sx={{ marginBottom: '1rem' }}>
            <CardContent>
              <FormControl sx={{ marginBottom: '1.5rem' }}>
                <FormLabel htmlFor="username">Username </FormLabel>
                <Input type="text" id="username" />
              </FormControl>
              <FormControl sx={{ marginBottom: '1.5rem' }}>
                <FormLabel htmlFor="dob">Date Of Birth </FormLabel>
                <Input type="text" id="dob" />
              </FormControl>
              <FormControl sx={{ marginBottom: '1.5rem' }}>
                <FormLabel htmlFor="higherEd">Higher Education </FormLabel>
                <Input type="text" id="higherEd" />
              </FormControl>
            </CardContent>
          </Card>
        </div>
        <div className="userSkills w-1/2" style={{  display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Card variant="outlined" sx={{ marginBottom: '1rem', flex: 1  }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem',}}>
                <Typography variant="h6" sx={{ minWidth: '5.5rem'}}>Soft Skills</Typography>
                <Input type="text" value={newSoftSkill} onChange={(e)=> setNewSoftSkill(e.target.value)} placeholder="Add a soft skill" />
                <button
                  id="enterSoft"
                  className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded font-medium text-sm leading-5"
                  onClick={addSoftSkill}
                >
                  Add
                </button>
              </div>
              <div className="softList" style={{ borderRadius: '4px', minHeight: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {softSkillsList.map((skill, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '4px', padding: '0.1rem 0.4rem', fontSize: '0.875rem' }}>
                    <Typography variant="body1" style={{ marginRight: '0.5rem' }}>{skill}</Typography>
                    <button onClick={() => removeSoftSkill(skill)} style={{ cursor: 'pointer', background: 'transparent', border: 'none', color: 'red' }}>
                      &times; {/* X button */}
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={{ marginBottom: '1rem', flex: 1 }}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem',}}>
                <Typography variant="h6" sx={{ minWidth: '5.6rem'}}>Hard Skills</Typography>
                <Input type="text" value={newHardSkill} onChange={(e) => setNewHardSkill(e.target.value)} placeholder="Add a hard skill" />
                <button
                  id="enterHard"
                  className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded font-medium text-sm leading-5"
                  onClick={addHardSkill}
                >
                  Add
                </button>
              </div>
              <div className="hardList" style={{borderRadius: '4px', minHeight: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {hardSkillsList.map((skill, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: '4px', padding: '0.1rem 0.4rem', fontSize: '0.875rem' }}>
                    <Typography variant="body1" style={{ marginRight: '0.5rem' }}>{skill}</Typography>
                    <button onClick={() => removeHardSkill(skill)} style={{ cursor: 'pointer', background: 'transparent', border: 'none', color: 'red' }}>
                      &times; {/* X button */}
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
