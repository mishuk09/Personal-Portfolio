import mishuk from '../img/mishuk.png';

const FrontPage = () => {
    return (
        <div className="h-full pt-20 bg-cover bg-center relative" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/08/37/43/42/360_F_837434222_OHkAWlh1whfo3mCXr4tknRc5JZspgjis.jpg')" }}>
            {/* Black Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="flex flex-col justify-center items-center h-full text-white relative z-10 px-6 pb-10 md:px-20">
                {/* Supervisor and Co-supervisor Section */}
                <div className="flex flex-col sm:flex-row justify-center  md:gap-40 items-center w-full mb-12 space-y-10 sm:space-y-0">
                    {/* Supervisor */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://mmuexpert.mmu.edu.my/images/staff/1001110710.jpg"
                            alt="Supervisor"
                            className="w-40 h-40 rounded-lg mb-3 object-cover shadow-lg"
                        />
                        <p className="font-semibold text-lg">Dr. Norhidayah Binti Mohamad</p>
                        <p className="font-medium text-sm">Supervisor</p>
                    </div>

                    {/* Co-supervisor */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://mmuexpert.mmu.edu.my/images/staff/1001060739.jpg"
                            alt="Co-Supervisor"
                            className="w-40 h-40 rounded-lg mb-3 object-cover shadow-lg"
                        />
                        <p className="font-semibold text-lg">Dr. Nor Azlina Binti Ab Aziz</p>
                        <p className="font-medium text-sm">Co-Supervisor</p>
                    </div>
                </div>

                {/* Your Image and Name */}
                <div className="flex flex-col items-center text-center mb-6">
                    <img
                        src={mishuk}
                        alt="Your Image"
                        className="w-40 h-40 rounded-lg mb-4 object-cover shadow-lg"
                    />
                    <p className="font-semibold text-lg">Mahadi Hasan Mishuk</p>
                    <p className="font-medium text-sm">Research Assistant</p>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center px-4 max-w-4xl leading-relaxed">
                    Advancing Green Processing of Biodegradable Fertilizers with AI
                </h1>

                {/* Get Started Button */}
                <a href="/thesisplantwo" className="bg-blue-600 no-underline hover:bg-blue-700 text-white py-3 px-10 rounded-md shadow-lg transition-all duration-300 hover:scale-105 transform">
                    Let's Get Started
                </a>
            </div>
        </div>
    );
};

export default FrontPage;
