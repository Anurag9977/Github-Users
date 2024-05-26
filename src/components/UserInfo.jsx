import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBuilding, FaLocationDot, FaLink } from "react-icons/fa6";
const UserInfo = () => {
  const {
    name,
    twitter_username,
    avatar_url,
    html_url,
    bio,
    company,
    location,
    blog,
  } = useSelector((store) => store.userState.user);

  return (
    <section className="h-full flex flex-col">
      <h1 className="font-content bg-white w-max px-2 py-1 rounded-t-md tracking-wide">
        User
      </h1>
      <article className="h-full bg-white rounded-r-md rounded-bl-md px-8 py-6">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-x-4 items-center">
            <img
              src={avatar_url}
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover"
            />
            <p>
              <span className="font-content font-bold tracking-wide">
                {name}
              </span>{" "}
              <br />
              <span className="font-heading text-sm text-gray-500">
                @{twitter_username}
              </span>
            </p>
          </div>
          <Link to={html_url}>
            <button
              type="button"
              className="font-heading tracking-wider text-primary rounded-full px-3 py-1 border-2 border-primary hover:bg-primary hover:text-white"
            >
              Follow
            </button>
          </Link>
        </div>
        <h3 className="my-4 font-content italic tracking-wide">{bio}</h3>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2 font-heading text-sm tracking-wider text-gray-500">
            <FaBuilding />
            {company}
          </div>
          <div className="flex items-center gap-x-2 font-heading text-sm tracking-wider text-gray-500">
            <FaLocationDot />
            {location}
          </div>
          <div
            to={blog}
            className="flex items-center gap-x-2 font-heading text-sm tracking-wider text-gray-500"
          >
            <FaLink />
            {blog}
          </div>
        </div>
      </article>
    </section>
  );
};
export default UserInfo;
