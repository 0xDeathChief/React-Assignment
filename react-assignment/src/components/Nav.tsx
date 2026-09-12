import Logo from "../assets/logo-text.png";
const Nav = () => {
    
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white border-b border-[#F1F5F9] h-20'>
            <nav className='container mx-auto h-full'>
                <div className='flex justify-between items-center h-full font-[Plus Jakarta Sans]'>
                    <img src={Logo} alt="Logo" />

                    <ul className='flex justify-between gap-7.25'>
                        <li className="text-[#DB2777]">Home</li>
                        <li>Technology</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
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