import "./Features.scss";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Text } from "../../../UI/Text";
import { FeatureModel } from "../../../../types/common/data.model";

interface Props {
  respiratoryRate: FeatureModel;
  temperature: FeatureModel;
  heartRate: FeatureModel;
}

export const Features: React.FC<Props> = ({
  respiratoryRate,
  temperature,
  heartRate,
}) => {
  return (
    <div className="features">
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
  );
};
