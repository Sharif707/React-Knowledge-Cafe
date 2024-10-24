
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className='md:w-1/3 bg-[#111111] bg-opacity-5 px-3 min-h-96 h-fit py-4 rounded-lg'>
            <div>
            <h1 className='py-5 px-10 rounded-lg bg-slate-200 text-[#6047EC] text-2xl mb-3'>Spent Time On Read {readingTime} min</h1>
            </div>

           {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
   };

export default Bookmarks;