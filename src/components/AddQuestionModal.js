// import React, { useState } from 'react';

// function AddQuestionModal({ closeModal }) {
//   const [questionName, setQuestionName] = useState('');
//   const [questionLink, setQuestionLink] = useState('');

//   const handleAddQuestion = () => {
//     // Handle adding the new question
//     closeModal();
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//       <div className="bg-white p-4 rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Add More</h2>
//         <input
//           type="text"
//           placeholder="Question Name"
//           value={questionName}
//           onChange={(e) => setQuestionName(e.target.value)}
//           className="border p-2 mb-2 w-full"
//         />
//         <input
//           type="text"
//           placeholder="Question Link"
//           value={questionLink}
//           onChange={(e) => setQuestionLink(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         />
//         <div className="flex justify-end">
//           <button onClick={handleAddQuestion} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add</button>
//           <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddQuestionModal;
// src/components/AddQuestionModal.js
// import React, { useState } from 'react';

// function AddQuestionModal({ closeModal, level, onAddQuestion }) {
//   const [name, setName] = useState('');
//   const [link, setLink] = useState('');

//   const handleSubmit = () => {
//     if (name && link) {
//       onAddQuestion(level.toLowerCase(), { name, link });
//       closeModal();
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Add More</h2>
//         <input
//           type="text"
//           placeholder="Question Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="block w-full mb-2 p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Question Link"
//           value={link}
//           onChange={(e) => setLink(e.target.value)}
//           className="block w-full mb-4 p-2 border border-gray-300 rounded"
//         />
//         <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Submit</button>
//         <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
//       </div>
//     </div>
//   );
// }

// export default AddQuestionModal;


// src/components/AddQuestionModal.js
import React, { useState } from 'react';

function AddQuestionModal({ closeModal, level, onAddQuestion }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [hint, setHint] = useState(''); // New state for hint

  const handleSubmit = () => {
    if (name && link) {
      onAddQuestion(level.toLowerCase(), { name, link, hint });
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add More</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Question Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Question Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Hint/Method"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionModal;
