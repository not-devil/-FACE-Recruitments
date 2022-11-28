import React from "react";

function UserList(props) {
  return (
    <>
      <div className="list_content w-96 py-4 bg-[#F8F0E3] rounded-lg my-4">
        <div className="list_inside flex flex-row justify-around">
          <div className="contact_name px-6 flex justify-center items-center">
            <h2 className="h-fit text-2xl font-medium tracking-normal">
              {props.username}
            </h2>
          </div>
          <div className="user_image flex justify-center items-center">
            <img className="rounded-full" src={props.userimage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
