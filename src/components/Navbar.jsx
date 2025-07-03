import React from 'react';
import styles from '.components/Navbar.css' 
import { useTheme } from '../context/ThemeContext'


function navbar(){
    const { theme, toggleTheme } = useTheme()

    return(
        <nav className='nav'>
            <div className='Container-nav'>
                <h1 className='nav-h1'>
                This is my heading and should be styled properly.
                </h1>
                 <button onClick={toggleTheme} className="bg-white text-black px-2 py-1 rounded">
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                </button>
            <Link to="/posts" className="hover:underline">Posts</Link>
            </div>
        </nav>
    )
}



export default navbar;