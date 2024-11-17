import PropTypes from 'prop-types';
import { Container } from './styles';

export function Section({ title = 'Título Padrão', children }) {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  children: PropTypes.node.isRequired,
};