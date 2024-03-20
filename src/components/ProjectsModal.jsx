import PropTypes from "prop-types";
import { useEffect } from "react";

export function ProjectsModal({ isOpen, onClose, project }) {
  useEffect(() => {
    if (isOpen) {
      // Adiciona a classe para desabilitar o scroll
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove a classe ao fechar o modal
      document.body.classList.remove("overflow-hidden");
    }

    // Função de limpeza quando o componente for desmontado
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg max-w-md p-8">
        <button className=" top-4 right-4 text-gray-600" onClick={onClose}>
          Fechar
        </button>
        <figure className="mb-4">{project.image}</figure>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
      </div>
    </div>
  );
}

ProjectsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};
