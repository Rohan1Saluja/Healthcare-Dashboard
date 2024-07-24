import { useNavigate } from "react-router-dom";
import { Header } from "../Global/Header/Header";
import { Text } from "../UI/Text";
import "./Overview.scss";

export const Overview: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/patients");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Rohan1Saluja/Healthcare-Dashboard","_blank");
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
      <div className="page-description">
        <Text text="The scope of this project was to design and populate the patients' tab of the Healthcare Dashboard." className="description"/>
        <span> 
          <Text text="If you're a developer and wish to contribute to this project, feel free to check out the " className="description-mid"/>
          <Text text="GitHub Repo" className="description-mid accent link" onClick={handleGitHubClick}/>
        </span>
      </div>
    </div>
  );
};
