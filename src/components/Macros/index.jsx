import PropTypes from "prop-types";
import IconComponent from "../IconComponent/index.jsx";
import { MacroContainer } from "./index.styles.js";
const nutriments = ["Calories", "Protéines", "Glucides", "Lipides"];
function Macros({ userId }) {
  return (
    <MacroContainer>
      {nutriments.map((nutriment, index) => (
        <IconComponent type={nutriment} value={280} key={index} />
      ))}
    </MacroContainer>
  );
}

Macros.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Macros;
