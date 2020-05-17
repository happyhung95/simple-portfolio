import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Shared/Button/Button';
import './BlogCard.scss';

const BlogCard = ({ id, title, paragraph, buttonLabel }) => {
  const blogId = `blog-${id}`;
  const titleId = `blog--title-${id}`;
  const buttonId = `blog--btn-${id}`;
  const buttonAriaLabelledBy = `${titleId} ${buttonId}`;

  return (
    <section className="blog__card" title={title} id={blogId}>
      <h3 className="blog__title" id={titleId}>
        {title}
      </h3>
      <p>{paragraph}</p>
      <Button
        label={buttonLabel}
        variant="blog"
        ariaLabelledby={buttonAriaLabelledBy}
        id={buttonId}
      />
    </section>
  );
};

BlogCard.displayName = 'Blog Card';
BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
};

export default BlogCard;
