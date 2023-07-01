import './App.css';
import Button from './lib/components/Button';
import Box from './lib/components/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Design System Source
        </p>

        <Button label="Howdy ho" />
        <br />
        <Box boxlabel="Large input field" boxcontent="What's your name?" />

      </header>
    </div>
  );
}

export default App;
