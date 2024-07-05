import React from "react";
import { InFocusModel } from "../../../types/common/data.model";
import { Text } from "../../UI/Text";
import "./MainPanel.scss";
import { getSortedObject } from "./utils";
import { LineGraph } from "./Graph/LineGraph";
import { KeyboardArrowDown } from "@mui/icons-material";

interface Props {
  patients: any;
  inFocusList: Array<InFocusModel>;
}

export const MainPanel: React.FC<Props> = ({ patients, inFocusList }) => {
  const [diagnosisHistory, setDiagnosisHistory] = React.useState<any>({});

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
            <div className="feature respiratory-rate"></div>
            <div className="feature temperature"></div>
            <div className="feature heart-rate"></div>
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
