import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h3>Blogs: {blogs.length}</h3>

      {blogs.map((blog) => (
        <Blog key={blogs.id} blog={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blogs;
