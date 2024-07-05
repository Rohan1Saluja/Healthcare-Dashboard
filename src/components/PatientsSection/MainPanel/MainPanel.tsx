import React from "react";
import { InFocusModel } from "../../../types/common/data.model";
import { Text } from "../../UI/Text";
import "./MainPanel.scss";
import { getSortedObject } from "./utils";
import { LineGraph } from "./Graph/LineGraph";
import {
  ArrowDropDown,
  ArrowDropUp,
  KeyboardArrowDown,
} from "@mui/icons-material";

interface Props {
  patients: any;
  inFocusList: Array<InFocusModel>;
}

export const MainPanel: React.FC<Props> = ({ patients, inFocusList }) => {
  const [diagnosisHistory, setDiagnosisHistory] = React.useState<any>({});
  const [respiratoryRate, setRespiratoryRate] = React.useState<{
    value: number;
    levels: string;
  }>();
  const [temperature, setTemperature] = React.useState<{
    value: number;
    levels: string;
  }>();
  const [heartRate, setHeartRate] = React.useState<{
    value: number;
    levels: string;
  }>();

  //----------------------------

  const fetchOtherDiagnosisFeatures = (diagnosisData: any) => {
    const respiratoryData = diagnosisData?.at(-1).respiratory_rate;
    setRespiratoryRate(respiratoryData);
    const temperatureData = diagnosisData?.at(-1).temperature;
    setTemperature(temperatureData);
    const heartData = diagnosisData?.at(-1).heart_rate;
    setHeartRate(heartData);
  };

  //---------------------------

  React.useEffect(() => {
    const fetchSortedDiagnosisHistory = () => {
      const patientInFocus =
        inFocusList.find((elem) => elem.inFocus === true)?.index || 0;

      const selectedPatient = patients.find(
        (patient: any, index: number) => index === patientInFocus
      );

      const sortedDiagnosisHistory = getSortedObject(
        selectedPatient?.diagnosis_history
      );
      setDiagnosisHistory(sortedDiagnosisHistory);

      fetchOtherDiagnosisFeatures(sortedDiagnosisHistory);
    };
    fetchSortedDiagnosisHistory();
  }, [inFocusList, patients]);

  return (
    <div className="main-panel">
      <div className="section diagnosis-history">
        <div className="title">
          <Text text="Diagnosis History" className="description bold" />
        </div>
        <div className="sub-section">
          <div className="chart-section">
            <LineGraph diagnosisHistory={diagnosisHistory} />
          </div>
          <div className="features-section">
            <div className="feature respiratory-rate">
              <div className="logo"></div>
              <Text text="Respiratory Rate" className="description-small" />
              <Text
                text={`${respiratoryRate?.value ?? ""} bpm`}
                className="description bold"
              />
              <div className="levels">
                {respiratoryRate?.levels.toUpperCase().includes("HIGHER") ? (
                  <ArrowDropUp />
                ) : (
                  respiratoryRate?.levels.toUpperCase().includes("LOWER") && (
                    <ArrowDropDown />
                  )
                )}
                <Text
                  text={respiratoryRate?.levels ?? ""}
                  className="description-extra-small"
                />
              </div>
            </div>
            <div className="feature temperature">
              <div className="logo"></div>
              <Text text="Temperature" className="description-small" />
              <Text
                text={`${temperature?.value ?? ""} °F`}
                className="description bold"
              />
              <div className="levels">
                {temperature?.levels.toUpperCase().includes("HIGHER") ? (
                  <ArrowDropUp />
                ) : (
                  temperature?.levels.toUpperCase().includes("LOWER") && (
                    <ArrowDropDown />
                  )
                )}
                <Text
                  text={temperature?.levels ?? ""}
                  className="description-extra-small"
                />
              </div>
            </div>
            <div className="feature heart-rate">
              <div className="logo"></div>
              <Text text="Heart Rate" className="description-small" />
              <Text
                text={`${heartRate?.value ?? ""} bpm`}
                className="description bold"
              />
              <div className="levels">
                {heartRate?.levels.toUpperCase().includes("HIGHER") ? (
                  <ArrowDropUp />
                ) : (
                  heartRate?.levels.toUpperCase().includes("LOWER") && (
                    <ArrowDropDown />
                  )
                )}
                <Text
                  text={heartRate?.levels ?? ""}
                  className="description-extra-small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section diagnostic-list">
        <div className="title">
          <Text text="Diagnostic List" className="description bold" />
        </div>
      </div>
    </div>
  );
};
