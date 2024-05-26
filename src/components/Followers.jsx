import { useSelector } from "react-redux";

const Followers = () => {
  const { followers } = useSelector((store) => store.dataState);
  return (
    <section>
      <h1 className="font-content bg-white w-max px-2 py-1 rounded-t-md tracking-wide">
        Followers
      </h1>
      <article className="h-64 bg-white rounded-r-md rounded-bl-md px-8 py-6 flex flex-col gap-y-4 overflow-hidden hover:overflow-y-auto">
        {followers.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <div key={id} className="flex gap-x-4 items-center">
              <img
                src={avatar_url}
                alt="follower-img"
                className="w-8 h-8 object-cover rounded-full"
              />
              <p>
                <span className="font-content text-sm font-bold tracking-wide">
                  {login}
                </span>
                <span className="block font-heading text-xs text-gray-500">
                  {html_url}
                </span>
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default Followers;
