import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../home/Home';
import About_Us from '../about_us/About_Us';
import Notes from '../notes/Notes';


const pages = ['Home', 'Abouts', 'Categories'];
const navLinks = pages.map(page => (<Link to={`/${page}`} key={page} className="no-underline text-gray-800 font-semibold hover:text-gray-600" >{page}</Link>));

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="full">

            <div className="bg-gradient-to-r from-blue-200 to-blue-100">
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                {menuOpen &&
                    <MobileMenu>
                        {navLinks}
                    </MobileMenu>}
            </div>
        </div>
    );
};






const Navbar = ({ menuOpen, setMenuOpen }) => (

    <div className="flex items-center justify-between p-4">
        <div className="flex items-center ">
            <FireSvg />

            <Link to="/Home" className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">Notes-Taker</Link>

        </div>
        <nav className="hidden md:block space-x-6 ">


            {/* <Link to='/' exact className="no-underline text-gray-800 font-semibold hover:text-gray-600" >Home</Link>
                <Link to='/About-Us' exact className="no-underline text-gray-800 font-semibold hover:text-gray-600" >About-Us</Link>
                <Link to='/Notes-Category' exact className="no-underline text-gray-800 font-semibold hover:text-gray-600" >Notes-Categories</Link> */}
            {navLinks}


        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </div>

);

const MobileMenu = ({ children }) => (
    <div className="p-4 flex flex-col space-y-3 md:hidden">
        {children}
    </div>
);


const FireSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
    </svg>
);

const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);