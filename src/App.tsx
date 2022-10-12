import React from "react";
import "./App.css";
import {
  BrowserRouter,
  HashRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Components/Profile";
import SignIn from "./Components/SignIn";
import "./App.css";

function App() {
  const { isAuthenticated, logout } = useAuth0();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <BrowserRouter>
        <nav>
          {!isAuthenticated && (
            <li onClick={handleCloseNavMenu}>
              <Link to="/signIn">Sign In</Link>
            </li>
          )}
          {isAuthenticated && (
            <>
              <li onClick={handleCloseNavMenu}>
                <Link to="/profile">Profile</Link>
              </li>
              <li
                onClick={() => {
                  handleCloseNavMenu();
                  logout({
                    returnTo: window.location.origin + "/react-auth0",
                  });
                }}
              >
                <button>Sign Out</button>
              </li>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
