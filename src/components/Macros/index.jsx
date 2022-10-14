import PropTypes from "prop-types";
import IconComponent from "../IconComponent/index.jsx";
import { MacroContainer } from "./index.styles.js";
import { USER_MAIN_DATA } from "./../../mock/mockedData";
const nutriments = ["Calories", "Protéines", "Glucides", "Lipides"];
function Macros({ userId }) {
  const nutriment = USER_MAIN_DATA[0];

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
