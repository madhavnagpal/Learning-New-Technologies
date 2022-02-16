import User from "../components/user";

function UserList({ users = [] }) {
  console.log(users, " users in browser");
  return (
    <>
      <h1>List of users</h1>
      <div className="list">
        {users.map((user) => (
          <div key={user.id}>
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data, " list of users in our next server");
  return { props: { users: data } };
}
