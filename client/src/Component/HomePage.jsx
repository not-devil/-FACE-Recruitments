import React, { useState, useEffect } from "react";
import FetchRandomUser from "./fetchuserData";
// import UserList from "./UserList";

function HomePage() {
  return (
    <>
      <section className="home_user">
        <div className="user_main_div container mx-auto px-5">
          <div className="content_main">
            <div className="heading_home mt-5">
              <div className="content flex justify-center align-middle">
                <h2 className="heading text-2xl font-medium tracking-normal">
                  User Contact List
                </h2>
              </div>
            </div>
            <div className="contact_home my-4">
              <div className="contact_list">
                <div className="p-2 flex flex-col my-5 gap-4 justify-center items-center">
                  <FetchRandomUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
