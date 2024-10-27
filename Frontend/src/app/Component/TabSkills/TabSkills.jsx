import React from 'react';
import { Card, ToggleButtonGroup, ToggleButton, Button } from '@mui/material'; // Ensure you have Material-UI components

const skillsMap = {
    "Software Engineering": ["Java", "Python", "SQL", "JavaScript", "C#", "C++", "Go"],
    "Data Science": ["Python", "R", "SQL", "Machine Learning", "Data Visualization", "Statistics", "Deep Learning"],
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Angular", "Vue"],
    "Mobile Development": ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"],
    // Add more fields and skills as needed
};

export default function TabSkills() {
    const [inputValue, setInputValue] = React.useState('');
    const [skills, setSkills] = React.useState([]);
    const [selectedSkills, setSelectedSkills] = React.useState([]);

    const findSkills = () => {
        const foundSkills = skillsMap[inputValue] || [];
        setSkills(foundSkills);
    };

    // Function to chunk skills into groups of 5
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const skillGroups = chunkArray(skills, 5);

    const handleAddSkill = (skill) => {
        setSelectedSkills((prev) => [...prev, skill]);
        setSkills((prev) => prev.filter(s => s !== skill)); // Remove from available skills
    };

    const handleRemoveSkill = (skill) => {
        setSelectedSkills((prev) => prev.filter(s => s !== skill));
        setSkills((prev) => [...prev, skill]); // Add back to available skills
    };

    return (
        <Card
            variant="none"
            sx={{
                maxHeight: '100%',
                maxWidth: '100%',
                mx: 'auto',
                overflow: 'auto',
                resize: 'none',
            }}
        >
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Find your position
                    </label>
                </div>
                <div className="md:w-2/3 flex">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        placeholder="Enter your position"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        onClick={findSkills}
                        className="ml-2 bg-purple-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Find Skills
                    </button>
                </div>
            </div>

            {skills.length > 0 && (
                <div className="mt-4 text-gray-700">
                    <strong>Relevant Skills for {inputValue}:</strong>
                </div>
            )}

            {skillGroups.map((group, index) => (
                <ToggleButtonGroup
                    key={index}
                    spacing={2}
                    exclusive
                >
                    {group.map((skill) => (
                        <ToggleButton key={skill} value={skill} onClick={() => handleAddSkill(skill)}>
                            {skill}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            ))}

            {selectedSkills.length > 0 && (
                <div className="mt-4 text-gray-700">
                    <strong>Your Skills:</strong>
                    <div className="flex flex-wrap mt-2">
                        {selectedSkills.map((skill) => (
                            <Button
                                key={skill}
                                variant="contained"
                                color="primary"
                                className="mr-2 mb-2"
                                onClick={() => handleRemoveSkill(skill)}
                            >
                                {skill}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </Card>
    );
}
