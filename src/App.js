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
<caption>Button</caption>
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
         <caption>Input with label</caption>
        <Box boxlabel="Enter your name to get started" boxcontent="What's your name?" />

      </header>
    </div>
  );
}

export default App;
