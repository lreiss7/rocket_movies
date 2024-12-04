import PropTypes from "prop-types";
import { Container } from "./styles";

export function Button({ title, loading = false, children, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? (
        "Carregando..."
      ) : (
        <>
          {children && <span>{children}</span>} {/* Renderiza o ícone */}
          {title}
        </>
      )}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
