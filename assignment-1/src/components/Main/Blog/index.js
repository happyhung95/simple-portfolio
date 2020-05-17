import React from 'react';

import Heading from '../../Shared/Heading';
import BlogCard from './BlogCard';
import './Blog.scss';

const dummyParagraph =
  'Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one.';

const blogs = [
  {
    id: 1,
    title: 'Blog 1',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
  },
  {
    id: 2,
    title: 'Blog 2',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
  },
  {
    id: 3,
    title: 'Blog 3',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
  },
];

const Blog = () => (
  <section title="blogs" id="blog">
    <Heading title="Blogs" />
    <section className="blog">
      {blogs.map(({ id, title, paragraph, buttonLabel }) => (
        <BlogCard
          key={`blog-${id}`}
          id={id}
          title={title}
          paragraph={paragraph}
          buttonLabel={buttonLabel}
        />
      ))}
    </section>
  </section>
);

export default Blog;
