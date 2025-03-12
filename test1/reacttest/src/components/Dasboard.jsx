import React from "react";

function Dashboard({ users }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.image} alt={user.name} width="50" height="50" />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
