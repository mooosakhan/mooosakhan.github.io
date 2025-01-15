
// export default Works;
import { useEffect, useState } from 'react';
import { projects, projectsNav } from './Data';
import WorksItems from './WorksItem';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProject(projects);
    } else {
      const newProject = projects.filter((project) => 
        project.category.toLowerCase() === item.name.toLowerCase()
      );
      setProject(newProject);
    }
  }, [item]);

  const clickHandler = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div className="flex flex-col items-center text-sm font-poppins self-end">
      <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            onClick={(e) => clickHandler(e, index)}
            className={`px-4 py-2 font-medium rounded-lg cursor-pointer capitalize ${
              active === index ? 'text-teal-300' : 'bg-zinc-900 text-gray-300'
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {project.map((item) => (
          <WorksItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;