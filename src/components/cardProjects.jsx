import PropTypes from "prop-types";
export function CardProjects({ image, title, description, onClick }) {
  return (
    <div onClick={onClick}>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>{image}</figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">{title}</h3>
          </header>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

CardProjects.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
