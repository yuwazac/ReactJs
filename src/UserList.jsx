import { useState } from "react";

const UserList = () => {
  const info = [
    { id: 1, name: "abdi", email: "alice1@gmail.com" },
    { id: 2, name: "ali", email: "alice2@gmail.com" },
    { id: 3, name: "abdi1", email: "alice3@gmail.com" },
    { id: 4, name: "abdi2", email: "alice4@gmail.com" },
  ];

  return (
    <div>
      <h1>List Of Users</h1>

      <ul>
        {info.map((user) => {
          return (
            <li key={user.id}>
              Name : {user.name} Email : {user.email} Id : {user.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
