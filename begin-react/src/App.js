import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      {/* isSpecial에서 값 설정을 생략해도 true로 설정한 것으로 간주한다. */}
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
