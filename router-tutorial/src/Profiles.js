import { Link, Outlet } from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/sky">sky</Link>
        </li>
        <li>
          <Link to="/profiles/john">john</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Profiles;
