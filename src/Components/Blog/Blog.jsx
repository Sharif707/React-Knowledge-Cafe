
import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
  const {
    title,
    cover_image,
    author_name,
    author_img,
    reading_time,
    posted_date,
    id,

    hashtags,
  } = blog;
  return (
    <div className="my-5">
      <img
        className="rounded-lg w-[800px]"
        src={cover_image}
        alt="cover-image"
      />
      <div className="flex items-center justify-between my-8 max-w-10/11 px-5">
        <div className="flex items-center gap-2">
          <img
            className="w-[60px]"
            src={author_img}
            alt={`This is image of the author ${author_name}`}
          />
          <div className="text-[#111111] text-opacity-60">
            <p className="text-2xl">{author_name}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[#111111] text-opacity-60">
            {reading_time} min read
          </span>
          <button onClick={() => {
            handleBookmark(blog)
          }}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h1 className="md:text-3xl font-semi-bold w-4/5">{title}</h1>
      <p className=" my-4 text-xl font-medium text-[#111111] text-opacity-60">
        {hashtags.map((hashtag, idx) => {
          return (
            <span className="mr-2" key={idx}>
              <a href="#">{hashtag}</a>
            </span>
          );
        })}
      </p>
      <button className="text-[#6047EC] text-lg font-semibold cursor-pointer" onClick={() => {
        handleReadingTime(reading_time, id) 
      }}>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func
};

export default Blog;
