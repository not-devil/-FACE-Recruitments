import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../App";
function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between md:flex-row items-center">
          <span class="ml-3 text-xl capitalize">FACE Recruitments</span>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-2 px-10 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black"
            onClick={() => {
              if (user.loggedIn) return;
              setUser({ loggedIn: true });

              if (location.state?.from) {
                navigate(location.state.from);
              }
            }}
          >
            Login
          </button>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-2 px-10 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black"
            onClick={() => {
              if (!user.loggedIn) return;
              setUser({ loggedIn: false });
            }}
          >
            Sign out
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
