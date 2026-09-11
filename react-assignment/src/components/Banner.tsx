import BannerImg from '../../../B14-A05-DevStack/assets/banner-stack.png'

const Banner = () => {
    return (
            <div className='container mx-auto py-20 flex justify-between items-center'>
                <div>
                    <h1 className='font-[Inter] text-6xl font-bold '>
                        Build Your Ideal <br/>
                    
                        <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span>
                    </h1>

                    <p className='mt-6 w-2xl font-[Plus Jakarta Sans] text-[18px]'>Explore frontend, backend, database, and tooling options,<br/>
                    compare them side by side, and put together the stack that fits your<br/>
                    next project.</p>

                    <div className='mt-16 flex gap-5 w-87.5'>
                        <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500  py-3 font-semibold text-white w-42 h-10 flex justify-center items-center">Explore Tehcnology</button>
                        <button className="rounded-lg border border-slate-200 py-3 text-slate-700 w-42 h-10 flex justify-center items-center">Default</button>
                    </div>
                </div>

                <div>
                    <img src={BannerImg} alt="Banner Image" />
                </div>
            </div>
    );
};

export default Banner;