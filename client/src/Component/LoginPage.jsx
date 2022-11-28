import React, { useContext } from "react";
// import { redirect } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <section className="login_section">
        <div className="container mx-auto px-5">
          <div className="content_main flex justify-center p-5 ">
            <div className="box_login_form p-5 drop-shadow-xl">
              <div className="content_form_heading">
                <h4 className="font-bold text-2xl p-3">Log in </h4>
              </div>
              <div className="form_main_div flex flex-col justify-center">
                <form className="w-full p-4 mb-4" method="POST">
                  <div className="contact_basic_info flex flex-col">
                    <div className="p-2 w-full">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 capitalize"
                      >
                        username
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        // value={user.name}
                        // onChange={heandleInput}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <div className="p-2 w-full">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600 capitalize"
                      >
                        password
                      </label>
                      <input
                        type="password"
                        id="email"
                        name="email"
                        // value={user.email}
                        // onChange={heandleInput}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                </form>
                <div className="my_sumit_btn">
                  <div className="w-full m-2 p-2 flex justify-center items-center">
                    <button
                      className="text-white bg-indigo-500 border-0 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      onClick={() => {
                        if (user.loggedIn) return;
                        setUser({ loggedIn: true });
          
                        if (location.state?.from) {
                          navigate(location.state.from);
                        }
                      }}
                    >
                      login 
                    </button>
                  </div>
                </div>

                <div className="content_div flex flex-col justify-center items-center">
                  <div className="heading">
                    <span className="font-semibold">
                      Already have an account? Log in
                    </span>
                  </div>
                  <div className="paragraph p-2">
                    <p className="text-xs">
                      By continuing, you agree to our Terms of Service and
                      Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
