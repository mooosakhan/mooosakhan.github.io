
const Index = () => {
  return (
    <>
      <div className="flex flex-col md:justify-center items-center md:items-start justify-center md:gap-14 gap-10 h-auto lg:h-[70vh] px-8 lg:px-14 py-14 md:py-20 lg:py-28">
        {/* Hero Section */}
        <div className="hero text-center md:text-left flex flex-col gap-3 items-center md:items-start md:self-start self-center">
          <h1 className="text-yellow-500 text-4xl md:text-6xl font-extrabold font-poppins">
            Community
          </h1>
          <h1 className="text-teal-300 text-center font-bold text-sm font-poppins self-center lg:text-left md:self-start">
            I AM A PART OF...
          </h1>
        </div>

        {/* Skills Section */}
        <div className="text flex flex-col gap-6 flex-1">

          <div className="flex flex-col font-poppins text-yellow-500 items-start gap-8 justify-start">

            <div className="flex h-28 gap-8 flex-col md:flex-row md:gap-3 ">
              <div className="date flex md:transform md:rotate-90 text-center text-teal-300 h-5 md:self-center md:align-middle md:-ml-12 md:-mr-12">
                <p className="text-xs font-semibold">11/2023-Present</p>
              </div>

              <div className="desc flex flex-col font-bold text-lg gap-8 justify-between">
                <p className="">Member</p>
                <p className="italic">IEEE Community</p>
              </div>
            </div>

            <div className="text-zinc-100 text-sm">
              <p>
                I am an active member of the IEEE community since November 2023. In this role, I am engaged in various technology-driven projects, particularly focusing on areas such as robotics, machine learning, and networking. The IEEE community provides me with opportunities to collaborate with like-minded individuals, share knowledge, and contribute to technical advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
