import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import './App.css';

function App() {
  const [randomColor, setRandomColor] = useState('');
  const [randomThing, setRandomThing] = useState('');
  const [differentColor, setDifferentColor] = useState('');
  
  const generateRandomColorAndThing = () => {
    const colors = ['Red', 'Green', 'Yellow', 'Orange'];
    const things = ['Right Hand', 'Right Leg', 'Left Hand', 'Left Leg'];
    const thing = things[Math.floor(Math.random() * things.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log('color',color);
    console.log('thing',thing);
    setRandomColor('');
    setRandomThing('');
    setRandomColor(color);
    setRandomThing(thing);
    setDifferentColor(getRandomColor());
  };
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App" >
      <div>
      <div style={{marginTop:'250px'}}>
      <div>
        <Card variant="outlined" style={{backgroundColor: "#aed2ff"}}>
          <h1 style={{color: differentColor}}><b>{randomColor}</b></h1>
          <h1 style={{color: differentColor}}><b>{randomThing}</b></h1>
        </Card>
        </div>
        <Button size='large' variant="contained" onClick={generateRandomColorAndThing}
          color="secondary"
          style={{marginTop:'100px', fontSize:'30px'}}
        >Generate</Button> 
      </div>
      </div>
    </div>
  );
}

export default App;
