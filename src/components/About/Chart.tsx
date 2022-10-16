import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useContext } from "react";
import { WakatimeContext } from "../../utils/context";

const colors = ["#FF0000", "#FF7F00", "#00a13b", "#00FF00", "#0000FF"];
let languages: { name: string; hours: number; fill: string }[] = [];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active) {
    return (
      <div className="rounded-md bg-gray-800 p-2 text-white">
        <p>{languages[label].name}</p>
        <p>{`${payload[0].value} hours`}</p>
      </div>
    );
  }

  return null;
};

const Chart = () => {
  const data = useContext(WakatimeContext);

  if (!data) return null;

  const topLanguages = data.slice(0, 5);

  const chartData = topLanguages.map((language, index) => ({
    name: language.name,
    hours: language.hours,
    fill: colors[index],
  }));

  languages = chartData;

  return (
    <ResponsiveContainer className="hidden flex-[50%] md:flex" height="100%">
      <RadialBarChart
        innerRadius="10%"
        outerRadius="100%"
        cy="50%"
        barSize={10}
        data={chartData}
      >
        <RadialBar
          dataKey="hours"
          background={{ fill: "rgba(219, 219, 219, 0.8" }}
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          wrapperStyle={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
