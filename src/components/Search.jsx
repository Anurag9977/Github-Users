import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleError, updateUser } from "../features/userSlice/userSlice";
import { getRateLimit } from "../features/dataSlice/dataSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((store) => store.userState);
  const { rateLimit } = useSelector((store) => store.dataState);
  const [username, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleError());
    if (username) {
      dispatch(updateUser({ username }));
    }
  };

  useEffect(() => {
    dispatch(getRateLimit());
  }, []);

  return (
    <section className="align-content-center bg-slate-200 mt-16 ">
      <h2 className="text-center my-4 text-red-500 font-content tracking-wider text-base">
        {error.show && error.message}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4">
        <form
          className="flex w-full md:w-3/5 gap-x-4 md:gap-x-8 font-content"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Enter Username..."
            className="w-full p-2 rounded-md tracking-wide"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {rateLimit !== 0 && (
            <button
              type="submit"
              className={`${
                isLoading ? "bg-teal-600" : "bg-primary"
              } w-32 px-4 rounded-md text-white tracking-wider hover:bg-teal-600`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="mx-auto animate-spin h-5 w-5 border-4 border-teal-400 border-t-white rounded-full"></div>
              ) : (
                "Search"
              )}
            </button>
          )}
        </form>
        <h1 className="font-heading font-semibold tracking-wider italic">
          Requests Remaining : {rateLimit}/60
        </h1>
      </div>
    </section>
  );
};
export default Search;
