import React from "react";
import { Header } from "../Global/Header/Header";
import "./PatientsSection.scss";
import { getPatients } from "../../utils/api";
import { LeftPanel } from "./LeftPanel/LeftPanel";
import { InFocusModel } from "../../types/common/data.model";
import { RightPanel } from "./RightPanel/RightPanel";
import { MainPanel } from "./MainPanel/MainPanel";

export const PatientsSection: React.FC = () => {
  const [patients, setPatients] = React.useState([]);
  const [inFocusList, setInFocusList] = React.useState<Array<InFocusModel>>([]);

  const fetchPatients = async () => {
    await getPatients()
      .then((resp) => {
        setPatients(resp);
      })
      .catch(() => {
        console.error("Error fetching the patients");
      });
  };
  React.useEffect(() => {
    fetchPatients();
  }, []);

  React.useEffect(() => {
    if (patients.length > 0) {
      const initialFocusList = patients.map((_, index) => ({
        index,
        inFocus: index === 0 ? true : false,
      }));
      setInFocusList(initialFocusList);
    }
  }, [patients]);
  return (
    <div className="patients-section">
      <Header className="header" />
      <div className="main-container">
        <div className="grid-section">
          <LeftPanel
            patients={patients}
            inFocusList={inFocusList}
            setInFocusList={setInFocusList}
          />
        </div>
        <div className="grid-section">
          <MainPanel patients={patients} inFocusList={inFocusList} />
        </div>
        <div className="grid-section right-panel">
          <RightPanel patients={patients} inFocusList={inFocusList} />
        </div>
      </div>
    </div>
  );
};
