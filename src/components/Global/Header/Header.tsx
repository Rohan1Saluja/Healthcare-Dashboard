import { MoreVert, SettingsOutlined } from "@mui/icons-material";
import "./Header.scss";
import { Text } from "../../UI/Text";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("Path: ", location.pathname.slice(1));

  const handleNavigateElement = (navRoute: string) => {
    navigate(`/${navRoute}`);
  };

  return (
    <div className={`${className} global-header`}>
      <div className="logo"></div>
      <div className="nav-elements">
        <div
          className={`element overview-elem ${
            location.pathname.slice(1) === "" && "active"
          }`}
          onClick={() => handleNavigateElement("")}
        >
          <div className="logo"></div>
          <Text text="Overview" className="description-small" />
        </div>
        <div
          className={`element patients-elem ${
            location.pathname.slice(1) === "patients" && "active"
          }`}
          onClick={() => handleNavigateElement("patients")}
        >
          <div className="logo"></div>
          <Text text="Patients" className="description-small" />
        </div>
        <div
          className={`element schedule-elem ${
            location.pathname.slice(1) === "schedule" && "active"
          }`}
          // onClick={() => handleNavigateElement("schedule")}
        >
          <div className="logo"></div>
          <Text text="Schedule" className="description-small" />
        </div>
        <div
          className={`element message-elem ${
            location.pathname.slice(1) === "message" && "active"
          }`}
        >
          <div className="logo"></div>
          <Text text="Message" className="description-small" />
        </div>
        <div
          className={`element transactions-elem ${
            location.pathname.slice(1) === "transactions" && "active"
          }`}
        >
          <div className="logo"></div>
          <Text text="Transactions" className="description-small" />
        </div>
      </div>
      <div className="profile-info">
        <div className="current-profile">
          <div className="profile-logo"></div>
          <div className="profile-name">
            <Text text="Dr. Jose Simmons" className="description-small bold" />
            <Text
              text="General Practitioner"
              className="description-small light-text"
            />
          </div>
        </div>
        <div className="settings-and-menu">
          <SettingsOutlined fontSize="small" />
          <MoreVert fontSize="small" />
        </div>
      </div>
    </div>
  );
};
