import React from 'react';
import PropTypes from 'prop-types';

const Card = ({img, headline, author, tab}) => {
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt=""/>
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  img: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired, 
  author: PropTypes.string.isRequired, 
  tab: PropTypes.string.isRequired,
}

export default Card;
