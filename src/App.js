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
        <hr style={{
          borderTop: '2px dashed #383B44',
          borderBottom: '0px',
          width: '100%',
          margin: '2rem 0'
         }} />
        <h6>Button</h6>
        <Button label="Howdy ho" />
        <br />
        <hr style={{
          borderTop: '2px dashed #383B44',
          borderBottom: '0px',
          width: '100%',
          margin: '2rem 0'
         }} />
         <br />
         <h6>Input with label</h6>
        <Box boxlabel="Enter your name to get started" boxcontent="What's your name?" />

      </header>
    </div>
  );
}

export default App;
