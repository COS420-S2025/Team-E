import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const NavBar = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToGlossary = () => {
    navigate("/glossary");
  };

  const goToAdminLogin = () => {
    if (auth.currentUser !== null) {
      navigate("/choose-editor");
    } else {
      navigate("/adminlogin");
    }
  };

  const SignOut = async () => {
    if (auth.currentUser !== null) {
      await auth.signOut();
      navigate("/");
    }
  };

  return (
    <div>
      <button className="App-headerButtonStyle" onClick={goToHome}>
        Home
      </button>
      <button className="App-headerButtonStyle" onClick={goToGlossary}>
        Glossary
      </button>
      <button className="App-headerButtonStyle" onClick={goToAbout}>
        About
      </button>
      <button className="App-headerButtonStyle" onClick={goToAdminLogin}>
        Admin Login
      </button>
      {auth.currentUser !== null && (
        <button className="App-headerButtonStyle" onClick={SignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};
export default NavBar;
