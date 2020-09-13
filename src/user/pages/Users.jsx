import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/2008426/pexels-photo-2008426.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      name: "Vital Gatera",
      places: 1,
    },
    {
      id: "u2",
      image:
        "https://www.kigaliheights.com/wp-content/uploads/2013/10/5-600x360.jpg",
      name: "Steve Ndahiro",
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
