import "./LineGraph.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { getGraphPlugins, getGraphScales, getLineGraphData } from "./utils";
import { Text } from "../../../UI/Text";
import {
  ArrowDropDown,
  ArrowDropUp,
  KeyboardArrowDown,
} from "@mui/icons-material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  diagnosisHistory: any;
}

export const LineGraph: React.FC<Props> = ({ diagnosisHistory }) => {
  const [graphData, setGraphData] = React.useState<any>(null);
  const [systolicValue, setSystolicValue] = React.useState<{
    value: number;
    levels: string;
  }>();
  const [diastolicValue, setDiastolicValue] = React.useState<{
    value: number;
    levels: string;
  }>();

  React.useEffect(() => {
    if (diagnosisHistory && diagnosisHistory.length > 0) {
      const timeFrame = 6; // To be implemented
      const data = getLineGraphData(diagnosisHistory, timeFrame);
      setGraphData(data);

      const systolicGraphData =
        diagnosisHistory?.at(-1).blood_pressure.systolic;

      setSystolicValue(systolicGraphData);

      const diastolicGraphData =
        diagnosisHistory?.at(-1).blood_pressure.diastolic;

      setDiastolicValue(diastolicGraphData);
    }
  }, [diagnosisHistory]);

  const options = React.useMemo(
    () => ({
      scales: getGraphScales(graphData),
      plugins: getGraphPlugins(),
    }),
    [graphData]
  );

  const data = React.useMemo(
    () => ({
      labels: graphData?.labels || [],
      datasets: graphData?.datasets || [],
    }),
    [graphData]
  );

  //   -------------------------------
  //JSX
  //   -------------------------------

  return (
    data && (
      <div className="line-graph">
        <div className="graph-section">
          <div className="header">
            <Text text="Blood Pressure" className="description-mid bold" />
            <div className="chart-time">
              <Text text="Last 6 Months" className="description-small" />
              <KeyboardArrowDown />
            </div>
          </div>
          <Line options={options} data={data} />
        </div>

        <div className="info-section">
          <div className="systolic">
            <div className="heading">
              <div className="bulletin"></div>
              <Text text="Systolic" className="description-small semi-bold" />
            </div>
            <Text
              text={`${systolicValue?.value ?? ""}`}
              className="description semi-bold"
            />
            <div className="levels">
              {systolicValue?.levels.toUpperCase().includes("HIGHER") ? (
                <ArrowDropUp />
              ) : (
                systolicValue?.levels.toUpperCase().includes("LOWER") && (
                  <ArrowDropDown />
                )
              )}
              <Text
                text={systolicValue?.levels ?? ""}
                className="description-small"
              />
            </div>
          </div>
          <div className="break"></div>
          <div className="diastolic">
            <div className="heading">
              <div className="bulletin"></div>
              <Text text="Diastolic" className="description-small semi-bold" />
            </div>
            <Text
              text={`${diastolicValue?.value ?? ""}`}
              className="description semi-bold"
            />
            <div className="levels">
              {diastolicValue?.levels.toUpperCase().includes("HIGHER") ? (
                <ArrowDropUp />
              ) : (
                diastolicValue?.levels.toUpperCase().includes("LOWER") && (
                  <ArrowDropDown />
                )
              )}
              <Text
                text={diastolicValue?.levels ?? ""}
                className="description-small"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
