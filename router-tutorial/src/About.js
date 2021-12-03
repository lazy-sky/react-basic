// params의 match를 받아오는 것과 마찬가지로, location도 undefined라고 나온다.
// useLocation을 통해 해결했다.

import { useLocation } from "react-router";
import qs from "qs";

const About = () => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>이것은 어바웃페이지라네~</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p>}
    </div>
  );
};

export default About;
