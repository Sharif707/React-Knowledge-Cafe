
import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 border-b'>
            <h1 className='text-xl md:text-3xl lg:text-4xl text-center font-bold text-[#171717]'>Knowledge Cafe</h1>
            <img src={Profile} alt="Profile-img" />
        </div>
    );
};

export default Header;