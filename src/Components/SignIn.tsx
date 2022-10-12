import { useAuth0 } from "@auth0/auth0-react";

function SignIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={loginWithRedirect}>Sign In</button>
    </div>
  );
}

export default SignIn;
