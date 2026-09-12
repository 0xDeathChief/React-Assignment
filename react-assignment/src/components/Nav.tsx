import { useState } from 'react';
import Logo from "../assets/logo-text.png";
const Nav = () => {
    
    const [active, setActive] = useState("home");

    return (
        <div className='border-b border-[#F1F5F9] h-20'>
            <nav className='container mx-auto h-full'>
                <div className='flex justify-between items-center h-full font-[Plus Jakarta Sans]'>
                    <img src={Logo} alt="Logo" />

                    <ul className='flex justify-between gap-7.25'>
                        <li onClick={() => setActive("home")} className={active === 'home' ? "text-[#DB2777]": " "}>Home</li>
                        <li onClick={() => setActive("technology")} className={active === 'technology' ? "text-[#DB2777]": " "}>Technology</li>
                        <li onClick={() => setActive("projects")} className={active === 'projects' ? "text-[#DB2777]": " "}>Projects</li>
                        <li onClick={() => setActive("about")} className={active === 'about' ? "text-[#DB2777]": " "}>About</li>
                        <li onClick={() => setActive("contact")} className={active === 'contact' ? "text-[#DB2777]": " "}>Contact</li>
                    </ul>

                    <div className='flex gap-3'>
                        <button className=''>Sign In</button>
                        <button className="btn btn-secondary rounded-full w-23">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;