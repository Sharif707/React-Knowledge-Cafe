
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
   
    
    const {title} = bookmark
    return (
        <div className='bg-slate-200 mb-2 rounded-lg p-2'>
            <h3 className='font-semibold text-xl'>{
                title
            }</h3>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;