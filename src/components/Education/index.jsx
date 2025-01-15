
const Index = () => {
    return (
        <>
            <div className="flex flex-col md:justify-center items-center md:items-start justify-center md:gap-14 gap-10 h-auto px-8 lg:px-14 py-14 md:py-20 lg:py-20">
                {/* Hero Section */}
                <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                        Education

                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                        STUDIED AT
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex flex-col gap-6 flex-1">


                    {/* first Education */}
                    <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">

                        <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
                            {/* <div className="date flex md:transform md:rotate-90 text-center text-teal-300 bg-slate-50 h-5 md:self-center md:align-middle ">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div> */}
                            <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                                <p className="text-xs font-semibold">09/2023-03/2027</p>
                            </div>


                            <div className="desc flex flex-col font-bold text-lg gap-4 md:gap-8 justify-between">

                                <p className="">Dawood University of Engineering technology</p>
                                <p className="italic">Karachi,Pakistan</p>


                            </div>
                        </div>

                        <div className="text-zinc-100 text-sm">
                            <p>
                            As a second-year Bachelor of Science in Artificial Intelligence (BS AI) student, I am expanding my knowledge in programming, mathematics, statistics, and modeling skills.  This comprehensive education equips me with the technical and critical thinking skills necessary to contribute effectively to the rapidly evolving field of artificial intelligence. 
                            </p>
                        </div>
                    </div>
                    {/* Second Education  */}
                    <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">

                        <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
                            {/* <div className="date flex md:transform md:rotate-90 text-center text-teal-300 bg-slate-50 h-5 md:self-center md:align-middle ">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div> */}
                            <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                                <p className="text-xs font-semibold">08/2021-06/2023</p>
                            </div>


                            <div className="desc flex flex-col font-bold text-lg gap-4 md:gap-8  justify-between">

                                <p className="">Islamia College of science and technology</p>
                                <p className="italic">Karachi,Pakistan</p>


                            </div>
                        </div>

                        <div className="text-zinc-100 text-sm">
                            <p>
                            At there completed my Intermediate in Computer Science, where I developed a strong foundation in programming, mathematics, and problem-solving skills. This education has been instrumental in preparing me for advanced studies in Artificial Intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
