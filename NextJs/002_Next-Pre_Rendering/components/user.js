function User({ user }) {
  return (
    <div className="user">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}

export default User;
