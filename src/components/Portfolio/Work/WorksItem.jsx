import PropTypes from "prop-types";

const WorksItems = ({ item }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg transition-all hover:scale-105">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h1 className="text-yellow-500 text-xl md:text-xl font-extrabold font-poppins mb-2">
        {item.title}
      </h1>
      <p className="text-zinc-400 mb-3">{item.description}</p>
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-teal-300 font-bold text-sm font-poppins hover:text-teal-400"
      >
        View Project →
      </a>
      <span className="block mt-2 text-zinc-500 text-sm">{item.category}</span>
    </div>
  );
};

// Add PropTypes validation
WorksItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired, // Ensure `id` is a number
    image: PropTypes.string.isRequired, // Ensure `image` is a string
    title: PropTypes.string.isRequired, // Ensure `title` is a string
    description: PropTypes.string.isRequired, // Ensure `description` is a string
    url: PropTypes.string.isRequired, // Ensure `url` is a string
    category: PropTypes.string.isRequired, // Ensure `category` is a string
  }).isRequired, // `item` is required
};

export default WorksItems;