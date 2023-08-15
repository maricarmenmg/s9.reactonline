import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { XCircleIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/images/logo/logo.svg';


const SearchModal = ({ isOpen, onClose }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Message Modal"
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-4 rounded-lg shadow-md w-200">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500">
            <XCircleIcon className="h-6 w-6" />
          </button>
        </div>
        <img 
        src={logo} 
        width="150" 
        height="150" 
        alt="logo"
        className="mx-auto"
         />
        <h2 className="text-2xl text-red-500 mt-2 text-center">You need to have an account</h2>
        <h2>Join the Community Millions of movies, TV shows to discover.</h2>
        <div className="flex justify-center mt-4">
        <Link className="btn mt-8 mb-8 items-center text-gray-700 bg-project-200 hover:bg-transparent hover:text-gray-900 hover:border-2 border-project-200  w-50 shadow-sm" to="/signup">
        JOIN THE COMMUNITY
        </Link>
        </div>
      </div>

    </Modal>
  );
};

export default SearchModal;