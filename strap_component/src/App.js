import 'bootstrap/dist/css/bootstrap.css';
import OnMouseMove from './OnMouseMove';
import OnMouseOver from './OnMouseOver';
import KeyEvent from './KeyEvent';

function App() {
  return (
    <div className="App">
      <OnMouseMove/>
      <OnMouseOver/>
      <KeyEvent/>
    </div>
  );
}

export default App;
