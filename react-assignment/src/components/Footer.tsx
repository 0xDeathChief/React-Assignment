const Footer = () => {
    return (
        <footer className='bg-[#FFFFFF] border border-[#F1F5F9] h-80 mt-20'>
            <div className='container mx-auto bg-white rounded-2xl pt-20 '>
                <div className='flex justify-between gap-10'>
                    
                    <div className='max-w-xs font-[Plus Jakarta Sans]'>
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-8 h-8 rounded-lg bg-linear-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold'>
                                DS
                            </div>
                            <span className='font-semibold text-lg'>
                                Dev <span className='text-[#DB2777]'>Stack</span>
                            </span>
                        </div>
                        <p className='text-gray-500 text-sm mb-4'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='flex gap-4 text-sm text-gray-700'>
                            <a href="#" className="font-semibold">GitHub</a>
                            <a href="#" className="font-semibold">Twitter</a>
                            <a href="#" className="font-semibold">LinkedIn</a>
                        </div>
                    </div>

                    
                    <div>
                        <h4 className='text-xs font-semibold tracking-wide text-gray-900 mb-3'>PRODUCT</h4>
                        <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className='text-xs font-semibold tracking-wide text-gray-900 mb-3'>COMPANY</h4>
                        <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className='text-xs font-semibold tracking-wide text-gray-900 mb-3'>LEGAL</h4>
                        <ul className='flex flex-col gap-2 text-sm text-gray-500'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <hr className='my-8 border-gray-100' />

                <div className='flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;