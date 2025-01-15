

const Index = () => {
    return (
        <>
            <div id="internships" className="flex flex-col md:justify-center items-center md:items-start justify-center  md:gap-14 gap-10 h-auto lg:h-[70vh] px-8 lg:px-14 py-14 md:py-20 lg:py-28 ">
                {/* Hero Section */}
                <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
                    <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
                        Internships
                    </h1>
                    <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
                        I HAVE INTERNED FOR...
                    </h1>
                </div>

                {/* Skills Section */}
                <div className="text flex flex-col gap-6 flex-1">




                    <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">

                        <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
                            {/* <div className="date flex md:transform md:rotate-90 text-center text-teal-300 bg-slate-50 h-5 md:self-center md:align-middle ">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div> */}
                            <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                                <p className="text-xs font-semibold">05/2022-08/2022</p>
                            </div>


                            <div className="desc flex flex-col font-bold text-lg gap-8 justify-between">

                                <p className="">Bano Qabil Incubation Center</p>
                                <p className="italic">Mern and react intern</p>


                            </div>
                        </div>

                        <div className="text-zinc-100 text-sm">
                            <p>
                                Completing their Projects in react and Next js I have a solid understanding of networking protocols, including TCP/IP, DNS, HTTP, and more. I have worked on various projects to optimize network
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
