import { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Users</h1>

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          {users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default UsersPage;