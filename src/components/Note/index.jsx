import PropTypes from "prop-types"; 
import { IoStar, IoStarOutline } from "react-icons/io5";

import { Container } from "./styles";
import { Tag } from "../../components/Tag";

export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {/* Renderização dinâmica das estrelas */}
      <div>
        {Array.from({ length: 5 }, (_, index) => 
          index < data.rating ? (
            <IoStar key={index} size={10} />
          ) : (
            <IoStarOutline key={index} size={10} />
          )
        )}
      </div>

      {children && <p>{children}</p>}
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

Note.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.number, // Nova propriedade para avaliação
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
