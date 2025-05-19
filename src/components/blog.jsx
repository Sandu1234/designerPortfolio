import React from 'react';
import Header from './Header';          
import './blog.css';
import img1 from '../assets/1.jpeg';

const blogs = [
  {
    title: 'Arriving at the station of great literature',
    date: 'May 2023',
    tags: ['Branding', 'Experience Design'],
    image: img1,
    span: 'tall',
  },
  {
    title: 'Connecting the flavour of nature for promo',
    date: 'Apr 2023',
    tags: ['Branding', 'Web Design'],
    image: img1,
    span: 'wide',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
  {
    title: 'Arriving at the station of great literature',
    date: 'May 2023',
    tags: ['Branding', 'Experience Design'],
    image: img1,
    span: 'tall',
  },
  {
    title: 'Connecting the flavour of nature for promo',
    date: 'Apr 2023',
    tags: ['Branding', 'Web Design'],
    image: img1,
    span: 'wide',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
];

const Blog = () => (
  <>
    <Header />  {/* ✅ Add Header on top */}

    <section id="blog">
      <div className="blog-header">
        <h2 className="blog-title">Blogs</h2>
        {/* <Link to="/fullwork" className="see-more">See more →</Link> ✅ use Link */}
      </div>

      <div className="bento-grid">
        {blogs.map((blog, index) => (
          <div className={`bento-card ${blog.span}`} key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="tags">
              <span>{blog.date}</span>
              {blog.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
