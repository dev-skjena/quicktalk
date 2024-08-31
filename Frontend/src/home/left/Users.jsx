import React from "react";
import User from "./User";
import getAllUsers from "../../context/getAllUsers.jsx";

const Users = () => {
  const [allUsers, loading] = getAllUsers();
  return (
    <>
      <div
        style={{ maxHeight: "calc(92vh)" }}
        className="scrollbar-hidden overflow-y-auto pb-14"
      >
        {allUsers?.map((user, index) => {
          return <User key={index} user={user} />;
        })}
      </div>
    </>
  );
};

export default Users;
