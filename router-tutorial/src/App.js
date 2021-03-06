import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import Profile from "./Profile";
import NavigateSample from "./NavigateSample";

// 라이브러리가 버전 6으로 업그레이드 되면서 몇 가지가 바뀐 듯하다.
// https://reactrouter.com/docs/en/v6/upgrading/v5

// 일단은 Switch가 Routes로, component가 element로 바뀌었다.
// exact props가 사라졌다.

// Link는 다른 주소로 이동시키는 컴포넌트다.
// a 태그가 페이지를 이동시키면서 페이지를 아예 새로 불러오는 것과 달리,
// Link는 HTML5 History API를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않는다.
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="about">소개</Link>
        </li>
        <li>
          <Link to="profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* exact 안쓰는 대신 /*가 필수 */}
        {/* Outlet 없이 이전 커밋처럼 Routes, Route로 기재해도 상관없다. */}
        <Route path="profiles/*" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="/history" element={<NavigateSample />} />
        <Route path="*" element={<div>Not Found Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;
