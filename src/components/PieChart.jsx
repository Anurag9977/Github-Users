import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import { useSelector } from "react-redux";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const PieChart = () => {
  const { repos } = useSelector((store) => store.dataState);
  let languages = repos.reduce((total, current) => {
    const { language } = current;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Used Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "45%",
        baseFont: "Rubik, sans-serif",
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
export default PieChart;
