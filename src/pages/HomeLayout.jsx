import { useSelector } from "react-redux";
import { Dashboard, DashboardLoader, Navbar, Search } from "../components";

const HomeLayout = () => {
  const { isLoading } = useSelector((store) => store.userState);
  return (
    <main className="overflow-auto bg-slate-200">
      <Navbar />
      <Search />
      {isLoading ? <DashboardLoader /> : <Dashboard />}
    </main>
  );
};
export default HomeLayout;
