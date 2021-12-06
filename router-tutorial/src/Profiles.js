import { Link, NavLink, Outlet } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          {/* NavLink는 Link와 유사한데, 만약 현재 경로와 Link에서 사용하는 경로가 일치하는 경우,
          특정 스타일 혹은 클래스를 적용할 수 있는 컴포넌트다. */}
          <NavLink
            to="/profiles/sky"
            style={({ isActive }) => ({
              color: isActive ? "white" : "blue",
              background: isActive ? "black" : "white",
            })}
          >
            sky
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/john"
            style={({ isActive }) => ({
              color: isActive ? "white" : "blue",
              background: isActive ? "black" : "white",
            })}
          >
            john
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Profiles;
