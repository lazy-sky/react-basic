import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON-L</Button>
        <Button>BUTTON-M</Button>
        <Button size="small">BUTTON-S</Button>
      </div>
    </div>
  );
}

export default App;
