import React, { useState, useEffect } from 'react';

function AddQuestionModal({ closeModal, level, onAddQuestion, editMode, initialQuestion }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    if (editMode && initialQuestion) {
      setName(initialQuestion.name);
      setLink(initialQuestion.link);
      setHint(initialQuestion.hint || ''); // If hint is undefined, set to empty string
    }
  }, [editMode, initialQuestion]);

  const handleSubmit = () => {
    if (name && link) {
      onAddQuestion(level.toLowerCase(), { name, link, hint });
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">{editMode ? 'Update Question' : 'Add More'}</h2>
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
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{editMode ? 'Update' : 'Submit'}</button>
        </div>
      </div>
    </div>
  );
}

export default AddQuestionModal;
