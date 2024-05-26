import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="h-dvh flex justify-center items-center text-center">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-heading font-bold text-primary text-9xl">404</h1>
        <h2 className="font-heading text-2xl tracking-wider">
          Sorry, the page you requested was not found!
        </h2>
        <Link to="/">
          <button className="mt-2 py-2 px-4 bg-primary text-lg rounded-md font-heading tracking-widest text-white hover:bg-primary-hover duration-300">
            Back To Home
          </button>
        </Link>
      </div>
    </main>
  );
};
export default Error;
