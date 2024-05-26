import { useSelector } from "react-redux";
import { RiGitRepositoryLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { HiMiniUserPlus } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import InfoCard from "./InfoCard";

const Info = () => {
  const { public_repos, public_gists, followers, following } = useSelector(
    (store) => store.userState.user
  );
  const infoData = [
    {
      label: "Repos",
      value: public_repos,
      icon: <RiGitRepositoryLine />,
      bgColor: "bg-pink-200",
      color: "text-pink-800",
    },
    {
      label: "Following",
      value: following,
      icon: <HiMiniUserPlus />,
      bgColor: "bg-violet-200",
      color: "text-violet-800",
    },
    {
      label: "Followers",
      value: followers,
      icon: <HiUserGroup />,
      bgColor: "bg-green-200",
      color: "text-green-800",
    },
    {
      label: "Gists",
      value: public_gists,
      icon: <FaCode />,
      bgColor: "bg-amber-200",
      color: "text-amber-800",
    },
  ];
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
      {infoData.map((item, index) => {
        return <InfoCard key={index} data={item} />;
      })}
    </section>
  );
};
export default Info;
