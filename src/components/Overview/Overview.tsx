import { useNavigate } from "react-router-dom";
import { Header } from "../Global/Header/Header";
import { Text } from "../UI/Text";
import "./Overview.scss";

export const Overview: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/patients");
  };
  return (
    <div className="overview">
      <Header className="header" />
      <div className="main-container">
        <span className="inline-text">
          <Text text="Head over to" className="sub-heading" />
          <Text
            text="Patients"
            className="sub-heading accent link"
            onClick={handleNavClick}
          />
        </span>
      </div>
    </div>
  );
};
