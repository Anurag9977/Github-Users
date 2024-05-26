import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../assets/login.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <main className="h-dvh flex flex-col justify-center items-center gap-y-8">
      <img src={loginImg} alt="login-image" className="h-96 object-cover" />
      <button
        onClick={() => loginWithRedirect()}
        className="mt-2 py-2 px-4 bg-primary text-lg rounded-md font-heading tracking-widest text-white hover:bg-primary-hover duration-300"
      >
        Login/Register
      </button>
    </main>
  );
};
export default Login;
