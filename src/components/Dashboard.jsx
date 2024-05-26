import BarChart from "./BarChart";
import ColumnChart from "./ColumnChart";
import DonutChart from "./DonutChart";
import Followers from "./Followers";
import Info from "./Info";
import PieChart from "./PieChart";
import UserInfo from "./UserInfo";

const Dashboard = () => {
  return (
    <section className="align-content-center my-16">
      <Info />
      <div className="my-12 grid md:grid-cols-2 gap-x-8 gap-y-4">
        <UserInfo />
        <Followers />
      </div>
      <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
        <PieChart />
        <ColumnChart />
        <DonutChart />
        <BarChart />
      </div>
    </section>
  );
};
export default Dashboard;
