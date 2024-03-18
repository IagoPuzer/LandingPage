import PropTypes from "prop-types";

export function Cards({ icon, title, description }) {
  return (
    <div>
      {/*<!-- Component: Card with icon --> */}
      <div className="overflow-hidden text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200 w-[300px]">
        {/*  <!-- Icon --> */}
        <figure className="p-6 pb-0">{icon}</figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-slate-700">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

// Adicionando PropTypes para as propriedades
Cards.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
