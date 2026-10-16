import { useEffect, useState } from "react";
import { getUsers } from "./api";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      {users.slice(0, 5).map((user) => (
        <UserCard key={user.id} />
      ))}
    </div>
  );
}

export default UserList;