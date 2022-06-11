import { Link } from "react-router-dom"

const HeaderAuth = () => {
  return (
    <div>
      <Link to="/login">Sing In</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default HeaderAuth;
