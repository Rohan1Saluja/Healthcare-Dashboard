import React from "react";
import { FeatureModel, InFocusModel } from "../../../types/common/data.model";
import { Text } from "../../UI/Text";
import "./MainPanel.scss";
import { getSortedObject } from "./utils";
import { LineGraph } from "./Graph/LineGraph";
import {
  ArrowDropDown,
  ArrowDropUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Features } from "./Features/Features";
import { DiagnosticList } from "./DiagnosticList/DiagnosticList";

interface Props {
  patients: any;
  inFocusList: Array<InFocusModel>;
}

export const MainPanel: React.FC<Props> = ({ patients, inFocusList }) => {
  const [diagnosisHistory, setDiagnosisHistory] = React.useState<any>([]);
  const [diagnosticList, setDiagnosticList] = React.useState<any>([]);
  const [respiratoryRate, setRespiratoryRate] = React.useState<FeatureModel>(
    {} as FeatureModel
  );
  const [temperature, setTemperature] = React.useState<FeatureModel>(
    {} as FeatureModel
  );
  const [heartRate, setHeartRate] = React.useState<FeatureModel>(
    {} as FeatureModel
  );

  //----------------------------

  const fetchOtherDiagnosisFeatures = (diagnosisData: any) => {
    if (!!diagnosisData && diagnosisData.length > 0) {
      const respiratoryData = diagnosisData?.at(-1).respiratory_rate;
      setRespiratoryRate(respiratoryData);
      const temperatureData = diagnosisData?.at(-1).temperature;
      setTemperature(temperatureData);
      const heartData = diagnosisData?.at(-1).heart_rate;
      setHeartRate(heartData);
    }
  };

  //---------------------------

  React.useEffect(() => {
    const fetchSortedDiagnosisHistory = () => {
      const patientInFocus =
        inFocusList.find((elem) => elem.inFocus === true)?.index || 0;

      const selectedPatient = patients.find(
        (_patient: any, index: number) => index === patientInFocus
      );

      const sortedDiagnosisHistory = getSortedObject(
        selectedPatient?.diagnosis_history
      );
      setDiagnosisHistory(sortedDiagnosisHistory);
      setDiagnosticList(selectedPatient?.diagnostic_list);

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
            {respiratoryRate.value && temperature.value && heartRate.value ? (
              <Features
                respiratoryRate={respiratoryRate}
                temperature={temperature}
                heartRate={heartRate}
              />
            ) : (
              <Text text="Loading features..." className="description" />
            )}
          </div>
        </div>
      </div>
      <div className="section diagnostic-list">
        <DiagnosticList diagnostic_list={diagnosticList} />
      </div>
    </div>
  );
};
