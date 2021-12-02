import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

// 라이브러리가 버전 6으로 업그레이드 되면서 몇 가지가 바뀐 듯하다.
// https://reactrouter.com/docs/en/v6/upgrading/v5

// 일단은 Switch가 Routes로, component가 element로 바뀌었다.
// exact props가 사라졌다.

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
