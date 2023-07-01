import './App.css';
import Button from './lib/components/Button';
import TextInput from './lib/components/TextInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Design System Source
        </h1>
        <label className='label-base'>Getting Started</label>
        <code>
          npm i trice-design-sytem-1
        </code>
       
        <ul>
        <label className='label-base'>Links</label>
          <li><a href="https://github.com/xraystyle1980/trice-design-sytem-1" className='links'>Github</a></li>
          <li><a href="https://www.npmjs.com/package/trice-design-sytem-1" className='links'>NPM</a></li>
        </ul>
        
        <br />
        
        <hr style={{
          borderTop: '2px dashed #383B44',
          borderBottom: '0px',
          width: '100%',
          margin: '2rem 0'
         }} />
        
        <label className='label-base'>Button</label>
        <Button label="Howdy ho" />
        <br />
        <label className='label-base'>Usage</label>
        <code>
          import Button from './components/Button';
        </code>
        <br />
        <hr style={{
          borderTop: '2px dashed #383B44',
          borderBottom: '0px',
          width: '100%',
          margin: '2rem 0'
         }} />
         <br />
         <label className='label-base'>Text Input with label</label>
        <TextInput TextInputLabel="Enter your name to get started" boxcontent="What's your name?" />
        <br />
        <label className='label-base'>Usage</label>
        <code>
          import TextInput from './components/TextInput';
        </code>

      </header>
    </div>
  );
}

export default App;
