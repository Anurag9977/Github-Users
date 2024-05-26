import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { useSelector } from "react-redux";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts);

const ColumnChart = () => {
  const { repos } = useSelector((store) => store.dataState);
  let languages = repos.reduce((total, current) => {
    const { name, stargazers_count } = current;
    if (!name) return total;
    if (!total[name]) {
      total[name] = {
        label: name,
        value: stargazers_count,
      };
    } else {
      total[name] = {
        ...total[name],
        value: total[name].value + stargazers_count,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Popular Repos",
        chartTopMargin: "15",
        xAxisName: "Repos",
        yAxisName: "Stars",
        xAxisNameFontBold: true,
        yAxisNameFontBold: true,
        showPercentValues: 0,
        baseFont: "Rubik, sans-serif",
        baseFontSize: "13",
        showLegend: 0,
      },
      // Chart Data
      data: languages,
    },
  };

  return (
    <div className="chart-style">
      <ReactFC {...chartConfigs} />
    </div>
  );
};
export default ColumnChart;
