import { FaArrowLeft } from "react-icons/fa6";
import PropTypes from "prop-types";
import { Container } from "./styles";

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <FaArrowLeft />
      {title}
    </Container>
  );
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
};
