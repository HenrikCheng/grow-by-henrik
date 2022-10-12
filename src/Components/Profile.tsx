import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <main style={{ padding: "1rem 0" }}>
      {isAuthenticated && (
        <div>
          <div>
            <div>
              <img alt={user?.email} src={user?.picture} />
            </div>
            <div>
              <input id="email" value={user?.email} type="text" />
            </div>
            <div>
              <input id="nickname" value={user?.nickname} type="text" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Profile;
