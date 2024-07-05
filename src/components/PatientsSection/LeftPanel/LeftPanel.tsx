import { MoreHoriz, SearchOutlined } from "@mui/icons-material";
import { Text } from "../../UI/Text";
import "./LeftPanel.scss";
import { InFocusModel } from "../../../types/common/data.model";

interface Props {
  patients: any;
  inFocusList: Array<InFocusModel>;
  setInFocusList: any;
}

export const LeftPanel: React.FC<Props> = ({
  patients,
  inFocusList,
  setInFocusList,
}) => {
  const handlePatientClick = (index: number) => {
    const initialFocusList = patients.map((_: any, index: number) => ({
      index,
      inFocus: false,
    }));
    const updatedFocusList = initialFocusList.map(
      (item: InFocusModel, idx: number) =>
        idx === index ? { ...item, inFocus: !item.inFocus } : item
    );

    setInFocusList(updatedFocusList);
  };
  console.log("Patients: ", patients);
  return (
    <div className="left-panel">
      <div className="title">
        <Text text="Patients" className="sub-heading" />
        <SearchOutlined />
      </div>
      <div className="profile-rows">
        {patients.map((patient: any, index: number) => (
          <div
            className={`row ${inFocusList[index]?.inFocus && "in-focus"}`}
            key={index}
            onClick={() => handlePatientClick(index)}
          >
            <div className="profile-info">
              <img
                src={patient.profile_picture ?? ""}
                alt=""
                height="20%"
                width="20%"
              />
              <div className="name">
                <Text text={patient.name ?? ""} className="description-mid" />
                <Text
                  text={`${patient.gender}, ${patient.age}`}
                  className="description-small light-text"
                />
              </div>
            </div>
            <div className="more-options">
              <MoreHoriz />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
