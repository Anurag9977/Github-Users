import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { useSelector } from "react-redux";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const DonutChart = () => {
  const { repos } = useSelector((store) => store.dataState);
  let starsInLanguages = repos.reduce((total, current) => {
    const { language, stargazers_count } = current;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + stargazers_count,
      };
    }
    return total;
  }, {});
  starsInLanguages = Object.values(starsInLanguages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars per Language",
        theme: "candy",
        decimals: 0,
        pieRadius: "60%",
        showPercentValues: 0,
        baseFont: "Rubik, sans-serif",
        showLegend: 0,
      },
      // Chart Data
      data: starsInLanguages,
    },
  };

  return (
    <div className="chart-style">
      <ReactFC {...chartConfigs} />
    </div>
  );
};
export default DonutChart;
