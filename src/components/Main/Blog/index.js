import React from 'react';

import Heading from '../../Shared/Heading';
import BlogCard from './BlogCard';
import './Blog.scss';

const pokerBoard =
'An API to record buy-ins, buy-outs, and loans for the poker nights with friends. This project was completed out of  interest in poker and to sharpen the knowledge of relevant technologies, specifically real-time updates. The API is publicly available.'
const blogs = [
  {
    id: 1,
    title: 'Poker Board API',
    paragraph: pokerBoard,
    buttonLabel: 'Read more',
  },
  {
    id: 2,
    title: 'Blog 2',
    paragraph: pokerBoard,
    buttonLabel: 'Read more',
  },
  {
    id: 3,
    title: 'Blog 3',
    paragraph: pokerBoard,
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
