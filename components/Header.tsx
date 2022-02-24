import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Header = ()=>{
    return (
        <header className="max-w-7xl w-full md:flex md:justify-between rounded-xl bg-white p-6 mt-12">
            <div className="md:mr-5 lg:w-1/4">
                <img className="md:w-96 w-full rounded-xl" src="/logo.jpg" alt="my face" />
            </div>
            <div className="lg:w-3/4">
                <div>
                    <div className="md:mt-0 mt-4 mb-4">
                        <h1 className=" text-black text-opacity-80 text-2xl font-semibold">Milker Castro</h1>
                        <h2 className=" text-gray-400 text-lg font-medium">Front-end Developer</h2>
                    </div>
                    <div className="mt-4 mb-4">                   
                        <p className="flex items-center text-lg font-medium text-neutral-700"><span className="mr-5"><FaEnvelope/></span>milkercastro66@gmail.com</p>
                        <p className="flex items-center text-lg font-medium text-neutral-700"><span className="mr-5"><FaPhoneAlt/></span>(+58) 426 486 4691</p>
                    </div>
                </div>
                <div>
                    <p className=" text-lg font-medium text-gray-400">Self taught developer striving to improve every day, and learn more things</p>
                </div>
            </div>
        </header>
    )
}

export default Header;