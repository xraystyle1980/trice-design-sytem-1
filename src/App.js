import './App.css';
import Button from './lib/components/Button';
import Box from './lib/components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Design System Source
        </h1>
        <h6>Button</h6>
        <Button label="Howdy ho" />
        <br />
        <div style={{
          background: '#000',
          height: 'auto',
          padding: '2px',
          width: '70%',
          margin: '2rem;'
         }}></div>
         <br />
         <h6>Input with label</h6>
        <Box boxlabel="Enter your name to get started" boxcontent="What's your name?" />

      </header>
    </div>
  );
}

export default App;
