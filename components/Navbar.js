import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from "react-icons/bs";
import { FaArrowLeft } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode, animationDelay }) => {
  const router = useRouter();
  const { pathname } = router;

  const justifyContent = pathname === '/blog' || pathname === '/blog/[slug]' ? 'space-between' : 'flex-end';

  const renderBackButton = () => {    
    if (pathname !== '/') {
      return (
        <button
          className="text-midnight dark:text-white flex items-center"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="mr-2" />
        </button>
      );
    }
    return null;
  };

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  return (
    <nav onAnimationEnd={(event) => endAnimation(event)} style={{ justifyContent, animationDelay }} className="transition-all duration-200 fixed inset-x-0 top-0 p-6 md:p-12 lg:px-24 w-screen text-midnight dark:text-white flex items-center z-50 opacity-0 animate-fadeUp">
      
      {renderBackButton()}
      
      <div onClick={toggleDarkMode} className="group min-h-7 py-2 px-4 cursor-pointer border-2 rounded-full flex items-center transition-all duration-200 border-midnight dark:border-white relative">
        
        <div className="transition-all duration-200 h-7 w-7 rounded-full absolute bg-midnight right-2 dark:bg-white dark:right-14 dark:mr-1" />
        
        <BsMoonFill className="transition-all duration-200 fill-midnight shrink-0 w-5 h-5" />
        <BsFillSunFill className="transition-all duration-500 ml-6 w-5 h-5 fill-white shrink-0" />
      
      </div>
    </nav>
  );
}

export default Navbar;
