import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/2008426/pexels-photo-2008426.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "Vital Gatera",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
