// 페이지 주소를 정의할 땐 유동적인 값을 전달해야할 때도 있다.
// 이는 파라미터와 쿼리로 나눠진다.
// 일반적으로 파라미터는 특정 id나 이름을 통해 조회할 떄,
// 쿼리는 어떤 키워드를 검색하거나, 요청에 필요한 옵션을 전달할 때 사용한다.

// 튜토리얼에 있는 match를 이용한 파라미터 받아오기는 작동하지 않는다.
// match가 undefined라고 나온다. 구글링을 해봤으나 원인을 찾지는 못했고, useParams를 통해 해결했다.

import { useParams } from "react-router";

const profileData = {
  sky: {
    name: "미어캣",
    description: "Frontend Engineer @ Meerkat Inc. 미어캣이라네!",
  },
  john: {
    name: "Doe",
    description: "very good",
  },
};

const Profile = () => {
  const params = useParams();
  const { username } = params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
