import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchUsers} from "./usersSlice";

function Users() {
  const dispatch = useDispatch();
  const {users, status, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error : {error}</p>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
