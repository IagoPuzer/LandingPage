import PropTypes from "prop-types";

export function CardServices({ icon, title, description }) {
  return (
    <div>
      <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200 w-[300px]">
        <figure className="p-6 pb-0">{icon}</figure>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Adicionando PropTypes para as propriedades
CardServices.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
