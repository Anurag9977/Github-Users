import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { useSelector } from "react-redux";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts);

const BarChart = () => {
  const { repos } = useSelector((store) => store.dataState);
  let languages = repos.reduce((total, current) => {
    const { name, forks } = current;
    if (!name) return total;
    if (!total[name]) {
      total[name] = {
        label: name,
        value: forks,
      };
    } else {
      total[name] = {
        ...total[name],
        value: total[name].value + forks,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Forked",
        captionFontSize: "16",
        xAxisName: "Repos",
        yAxisName: "Forks",
        xAxisNameFontSize: "13",
        yAxisNameFontSize: "13",
        xAxisNameFontBold: true,
        yAxisNameFontBold: true,
        showPercentValues: 0,
        baseFont: "Rubik, sans-serif",
        baseFontSize: "13",
        outCnvBaseFontSize: "11",
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
export default BarChart;
