import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserList() {
  const { users } = useContext(UserContext);
  console.log("Context", useContext(UserContext));

  return (
    <div>
      {users &&
        users.map(({ id, name, username, website, company }) => (
          <div key={id} className="p-2 border m-2 rounded-md w-full">
            <p className="">
              ID:<strong> {id}</strong>
            </p>
            <p className="">
              name:<strong> {name}</strong>
            </p>
            <p className="">
              username: <strong>{username}</strong>
            </p>
            <a
              href={`https://${website}`}
              target="_blank"
              className=""
              rel="noreferrer"
            >
              <p>
                website:{" "}
                <span className="font-semibold text-blue-400">{website}</span>
              </p>
            </a>
            <p className="">
              company: <strong>{company.name}</strong>
            </p>
          </div>
        ))}
      {users && users.length === 0 && (
        <span className="text-red-400">No records found to display!</span>
      )}
    </div>
  );
}

export default UserList;
