import PropTypes from "prop-types";
import { icons_type_infos, icons_unit_infos } from "../../constants/index.js";
import {
  IconContainer,
  IconInfos,
  IconInfoType,
  IconInfoValue,
} from "./index.styles.js";

function IconComponent({ type, value, ...props }) {
  return (
    <IconContainer>
      <img src={icons_type_infos[type]} alt={type} width="60" height="60" />

      <IconInfos>
        <IconInfoValue>{`${value} ${icons_unit_infos[type]}`}</IconInfoValue>

        <IconInfoType>{type}</IconInfoType>
      </IconInfos>
    </IconContainer>
  );
}

IconComponent.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
export default IconComponent;
