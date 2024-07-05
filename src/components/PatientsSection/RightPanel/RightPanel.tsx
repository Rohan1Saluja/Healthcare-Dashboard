import { Download } from "@mui/icons-material";
import { InFocusModel } from "../../../types/common/data.model";
import { Text } from "../../UI/Text";
import "./RightPanel.scss";
import { Button } from "../../UI/Button";

interface Props {
  patients: any;
  inFocusList: Array<InFocusModel>;
}

export const RightPanel: React.FC<Props> = ({ patients, inFocusList }) => {
  const patientInFocus =
    inFocusList.find((elem) => elem.inFocus === true)?.index || 0;

  const selectedPatient = patients.find(
    (patient: any, index: number) => index === patientInFocus
  );
  console.log("Patient in focus: ", selectedPatient);

  //   ------------------------------
  //JSX
  return (
    <div className="right-panel">
      <div className="section profile-section">
        <div className="name">
          <img src={selectedPatient?.profile_picture} alt="" />
          <Text text={selectedPatient?.name} className="description bold" />
        </div>
        <div className="details">
          <div className="item">
            <div className="logo birth"></div>
            <div className="item-info">
              <Text
                text="Date of Birth"
                className="description-small light-text"
              />
              <Text
                text={selectedPatient?.date_of_birth}
                className="description-small shorter-line-height"
              />
            </div>
          </div>
          <div className="item">
            <div className="logo gender"></div>
            <div className="item-info">
              <Text text="Gender" className="description-small light-text" />
              <Text
                text={selectedPatient?.gender}
                className="description-small shorter-line-height"
              />
            </div>
          </div>
          <div className="item">
            <div className="logo contact"></div>
            <div className="item-info">
              <Text
                text="Contact Info"
                className="description-small light-text"
              />
              <Text
                text={selectedPatient?.phone_number}
                className="description-small shorter-line-height"
              />
            </div>
          </div>
          <div className="item">
            <div className="logo contact"></div>
            <div className="item-info">
              <Text
                text="Emergency Contacts"
                className="description-small light-text"
              />
              <Text
                text={selectedPatient?.emergency_contact}
                className="description-small shorter-line-height"
              />
            </div>
          </div>
          <div className="item">
            <div className="logo insurance"></div>
            <div className="item-info">
              <Text
                text="Insurance Provider"
                className="description-small light-text"
              />
              <Text
                text={selectedPatient?.insurance_type}
                className="description-small shorter-line-height"
              />
            </div>
          </div>
        </div>
        <div className="action-button">
          <Button buttonText="Show All Information" className="small-text" />
        </div>
      </div>
      <div className="section reports-section">
        <div className="title">
          <Text text="Lab Results" className="description bold" />
        </div>
        <div className="reports">
          {selectedPatient?.lab_results.map((report: string, index: number) => (
            <div key={index} className="row">
              <Text text={report} className="description-small" />
              <div className="download-icon"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
