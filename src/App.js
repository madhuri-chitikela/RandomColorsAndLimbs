import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  const [randomColor, setRandomColor] = useState('');
  const [randomThing, setRandomThing] = useState('');

  const generateRandomColorAndThing = () => {
    const colors = ['Red', 'Green', 'Blue', 'Orange'];
    const things = ['Right Hand', 'Right Leg', 'Left Hand', 'Left Leg'];
    const thing = things[Math.floor(Math.random() * things.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log('color', color);
    console.log('thing', thing);
    setRandomColor('');
    setRandomThing('');
    setRandomColor(color);
    setRandomThing(thing);

  };

  return (
    <Container maxWidth="sm" className="App">

      <Stack direction="column" spacing={2} sx={{ height: '100vh', justifyContent: 'space-around' }}>
        <div>
          <Card variant="outlined" >
            <h1 style={{ color: randomColor, fontSize: '3em' }} ><b>{randomThing}</b></h1>
          </Card>
          <Card variant="outlined" >
            <h1 style={{ color: randomColor, fontSize: '3em' }}><b>{randomColor}</b></h1>
          </Card>
        </div>
        <Button size='large' variant="contained" onClick={generateRandomColorAndThing}
          color="secondary" style={{ height: '100px', fontSize: '3em' }}
        >Generate</Button>
      </Stack>
    </Container >
  );
}

export default App;
