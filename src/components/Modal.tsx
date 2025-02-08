import React from 'react';

type ModalProps = {
  message: {
    title: string;
    body: string;
  };
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-center">{message.title}</h2>
        <p className="mt-4 text-center">{message.body}</p>
        <div className="mt-6 text-center">
          <button
            className="bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
