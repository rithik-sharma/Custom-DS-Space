// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import AddQuestionModal from './AddQuestionModal';

// const getQuestionsFromLocalStorage = (topic) => {
//   const storedData = localStorage.getItem(`questions-${topic}`);
//   return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
// };

// const saveQuestionsToLocalStorage = (topic, questions) => {
//   localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
// };

// function CardDetail() {
//   const { topic } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });
//   const [editIndex, setEditIndex] = useState(null); // For editing questions

//   useEffect(() => {
//     const loadedQuestions = getQuestionsFromLocalStorage(topic);
//     setQuestions(loadedQuestions);
//   }, [topic]);

//   const openModal = (level, index = null) => {
//     setSelectedLevel(level);
//     setEditIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedLevel('');
//     setEditIndex(null);
//   };

//   const handleAddOrUpdateQuestion = (level, question) => {
//     const updatedQuestions = { ...questions };
//     if (editIndex !== null) {
//       updatedQuestions[level][editIndex] = question;
//     } else {
//       updatedQuestions[level] = [...updatedQuestions[level], question];
//     }
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//     closeModal();
//   };

//   const handleDeleteQuestion = (level, index) => {
//     const updatedQuestions = { ...questions };
//     updatedQuestions[level].splice(index, 1);
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return; // Dropped outside a list

//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return; // Dropped in the same position
//     }

//     const sourceList = [...questions[source.droppableId]];
//     const destinationList = source.droppableId === destination.droppableId ? sourceList : [...questions[destination.droppableId]];
//     const [movedQuestion] = sourceList.splice(source.index, 1);

//     destinationList.splice(destination.index, 0, movedQuestion);

//     const updatedQuestions = {
//       ...questions,
//       [source.droppableId]: sourceList,
//       [destination.droppableId]: destinationList,
//     };

//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   return (
//     <div className="container mx-auto p-4 select-none">
//       <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center text-black">{topic}</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="flex flex-col sm:flex-row justify-between gap-4">
//           {['easy', 'medium', 'hard'].map((level, idx) => (
//             <Droppable key={level} droppableId={level}>
//               {(provided) => (
//                 <div
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                   className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-1/3"
//                 >
//                   <h3 className={`font-semibold capitalize text-center mb-2 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-yellow-500' : 'text-red-500'}`}>
//                     {level}
//                   </h3>
//                   <ul className="space-y-4 mb-4">
//                     {questions[level].map((q, index) => (
//                       <Draggable key={q.name} draggableId={`${level}-${index}`} index={index}>
//                         {(provided) => (
//                           <li
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="bg-gray-100 p-3 rounded-lg shadow-sm"
//                           >
//                             <div className="flex justify-between items-center mb-1">
//                               <span className="font-medium">{q.name}</span>
//                               <div>
//                                 <a href={q.link} className="text-blue-500 ml-2" target="_blank" rel="noopener noreferrer">🔗</a>
//                                 <button 
//                                   onClick={() => openModal(level, index)} 
//                                   className="text-blue-500 ml-2"
//                                 >
//                                   ✏️
//                                 </button>
//                                 <button 
//                                   onClick={() => handleDeleteQuestion(level, index)} 
//                                   className="text-red-500 ml-2"
//                                 >
//                                   ❌
//                                 </button>
//                               </div>
//                             </div>
//                             <p className="text-sm text-gray-600">{q.hint || 'No hint provided.'}</p>
//                           </li>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </ul>
//                   <div className="flex justify-center">
//                     <button 
//                       onClick={() => openModal(level)} 
//                       className={`mt-2 px-4 py-2 rounded text-white ${
//                         idx === 0 ? 'bg-green-500 hover:bg-green-600' : 
//                         idx === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 
//                         'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       + Add More
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </DragDropContext>
//       {isModalOpen && (
//         <AddQuestionModal
//           closeModal={closeModal}
//           level={selectedLevel}
//           onAddQuestion={handleAddOrUpdateQuestion}
//           editMode={editIndex !== null}
//           initialQuestion={editIndex !== null ? questions[selectedLevel][editIndex] : null}
//         />
//       )}
//     </div>
//   );
// }

// export default CardDetail;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import AddQuestionModal from './AddQuestionModal';

// const getQuestionsFromLocalStorage = (topic) => {
//   const storedData = localStorage.getItem(`questions-${topic}`);
//   return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
// };

// const saveQuestionsToLocalStorage = (topic, questions) => {
//   localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
// };

// function CardDetail() {
//   const { topic } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedLevel, setSelectedLevel] = useState('');
//   const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });
//   const [editIndex, setEditIndex] = useState(null); // For editing questions

//   useEffect(() => {
//     const loadedQuestions = getQuestionsFromLocalStorage(topic);
//     setQuestions(loadedQuestions);
//   }, [topic]);

//   const openModal = (level, index = null) => {
//     setSelectedLevel(level);
//     setEditIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedLevel('');
//     setEditIndex(null);
//   };

//   const handleAddOrUpdateQuestion = (level, question) => {
//     const updatedQuestions = { ...questions };
//     if (editIndex !== null) {
//       updatedQuestions[level][editIndex] = question;
//     } else {
//       updatedQuestions[level] = [...updatedQuestions[level], question];
//     }
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//     closeModal();
//   };

//   const handleDeleteQuestion = (level, index) => {
//     const updatedQuestions = { ...questions };
//     updatedQuestions[level].splice(index, 1);
//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return; // Dropped outside a list

//     if (source.droppableId === destination.droppableId && source.index === destination.index) {
//       return; // Dropped in the same position
//     }

//     const sourceList = [...questions[source.droppableId]];
//     const destinationList = source.droppableId === destination.droppableId ? sourceList : [...questions[destination.droppableId]];
//     const [movedQuestion] = sourceList.splice(source.index, 1);

//     destinationList.splice(destination.index, 0, movedQuestion);

//     const updatedQuestions = {
//       ...questions,
//       [source.droppableId]: sourceList,
//       [destination.droppableId]: destinationList,
//     };

//     setQuestions(updatedQuestions);
//     saveQuestionsToLocalStorage(topic, updatedQuestions);
//   };

//   return (
//     <div className="container mx-auto p-4 select-none">
//       <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center text-black">{topic}</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div className="flex flex-col sm:flex-row justify-between gap-4">
//           {['easy', 'medium', 'hard'].map((level, idx) => (
//             <Droppable key={level} droppableId={level}>
//               {(provided) => (
//                 <div
//                   {...provided.droppableProps}
//                   ref={provided.innerRef}
//                   className="bg-white shadow-md rounded-lg p-2 w-full sm:w-1/3 mb-4"
//                 >
//                   <h3 className={`font-semibold capitalize text-center mb-2 ${idx === 0 ? 'text-green-500' : idx === 1 ? 'text-yellow-500' : 'text-red-500'}`}>
//                     {level}
//                   </h3>
//                   <ul className="space-y-2">
//                     {questions[level].map((q, index) => (
//                       <Draggable key={q.name} draggableId={`${level}-${index}`} index={index}>
//                         {(provided) => (
//                           <li
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             className="bg-gray-200 p-2 rounded-md shadow-sm"
//                           >
//                             <div className="flex justify-between items-center mb-1">
//                               <span className="font-medium text-sm">{q.name}</span>
//                               <div className="text-xs">
//                                 <a href={q.link} className="text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">🔗</a>
//                                 <button 
//                                   onClick={() => openModal(level, index)} 
//                                   className="text-blue-500 ml-1"
//                                 >
//                                   ✏️
//                                 </button>
//                                 <button 
//                                   onClick={() => handleDeleteQuestion(level, index)} 
//                                   className="text-red-500 ml-1"
//                                 >
//                                   ❌
//                                 </button>
//                               </div>
//                             </div>
//                             <p className="text-xs text-gray-600">{q.hint || 'No hint provided.'}</p>
//                           </li>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </ul>
//                   <div className="flex justify-center">
//                     <button 
//                       onClick={() => openModal(level)} 
//                       className={`mt-2 px-2 py-1 text-xs rounded text-white ${
//                         idx === 0 ? 'bg-green-500 hover:bg-green-600' : 
//                         idx === 1 ? 'bg-yellow-500 hover:bg-yellow-600' : 
//                         'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       + Add More
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </Droppable>
//           ))}
//         </div>
//       </DragDropContext>
//       {isModalOpen && (
//         <AddQuestionModal
//           closeModal={closeModal}
//           level={selectedLevel}
//           onAddQuestion={handleAddOrUpdateQuestion}
//           editMode={editIndex !== null}
//           initialQuestion={editIndex !== null ? questions[selectedLevel][editIndex] : null}
//         />
//       )}
//     </div>
//   );
// }

// export default CardDetail;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddQuestionModal from './AddQuestionModal';

const getQuestionsFromLocalStorage = (topic) => {
  const storedData = localStorage.getItem(`questions-${topic}`);
  return storedData ? JSON.parse(storedData) : { easy: [], medium: [], hard: [] };
};

const saveQuestionsToLocalStorage = (topic, questions) => {
  localStorage.setItem(`questions-${topic}`, JSON.stringify(questions));
};

function CardDetail() {
  const { topic } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [questions, setQuestions] = useState({ easy: [], medium: [], hard: [] });
  const [editIndex, setEditIndex] = useState(null); // For editing questions

  useEffect(() => {
    const loadedQuestions = getQuestionsFromLocalStorage(topic);
    setQuestions(loadedQuestions);
  }, [topic]);

  const openModal = (level, index = null) => {
    setSelectedLevel(level);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLevel('');
    setEditIndex(null);
  };

  const handleAddOrUpdateQuestion = (level, question) => {
    const updatedQuestions = { ...questions };
    if (editIndex !== null) {
      updatedQuestions[level][editIndex] = question;
    } else {
      updatedQuestions[level] = [...updatedQuestions[level], question];
    }
    setQuestions(updatedQuestions);
    saveQuestionsToLocalStorage(topic, updatedQuestions);
    closeModal();
  };

  const handleDeleteQuestion = (level, index) => {
    const updatedQuestions = { ...questions };
    updatedQuestions[level].splice(index, 1);
    setQuestions(updatedQuestions);
    saveQuestionsToLocalStorage(topic, updatedQuestions);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // Dropped outside a list

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return; // Dropped in the same position
    }

    const sourceList = [...questions[source.droppableId]];
    const destinationList = source.droppableId === destination.droppableId ? sourceList : [...questions[destination.droppableId]];
    const [movedQuestion] = sourceList.splice(source.index, 1);

    destinationList.splice(destination.index, 0, movedQuestion);

    const updatedQuestions = {
      ...questions,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    };

    setQuestions(updatedQuestions);
    saveQuestionsToLocalStorage(topic, updatedQuestions);
  };

  return (
    <div className="container mx-auto p-4 select-none">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center text-gray-800">{topic}</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {['easy', 'medium', 'hard'].map((level, idx) => (
            <Droppable key={level} droppableId={level}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-900 shadow-lg rounded-lg p-2 w-full sm:w-1/3 mb-4 border border-gray-700"
                >
                  <h3 className={`font-semibold text-md capitalize text-center mb-3 ${level === 'easy' ? 'text-green-500' : level === 'medium' ? 'text-orange-500' : 'text-red-600'}`}>
                    {level}
                  </h3>
                  <ul className="space-y-2">
                    {questions[level].map((q, index) => (
                      <Draggable key={q.name} draggableId={`${level}-${index}`} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-600"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-sm text-white">{q.name}</span>
                              <div className="text-sm">
                                <a href={q.link} className="text-blue-400 hover:text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">🔗</a>
                                <button 
                                  onClick={() => openModal(level, index)} 
                                  className="text-blue-400 hover:text-blue-500 ml-1"
                                >
                                  ✏️
                                </button>
                                <button 
                                  onClick={() => handleDeleteQuestion(level, index)} 
                                  className="text-red-400 hover:text-red-500 ml-1"
                                >
                                  ❌
                                </button>
                              </div>
                            </div>
                            <p className="text-xs text-gray-300">{q.hint || 'No hint provided.'}</p>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                  <div className="flex justify-center">
                    <button 
                      onClick={() => openModal(level)} 
                      className={`mt-2 px-3 py-1 text-sm rounded-lg text-white ${
                        level === 'easy' ? 'bg-green-600 hover:bg-green-700' : 
                        level === 'medium' ? 'bg-orange-600 hover:bg-orange-700' : 
                        'bg-red-600 hover:bg-red-700'
                      }`}
                    >
                      + Add More
                    </button>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {isModalOpen && (
        <AddQuestionModal
          closeModal={closeModal}
          level={selectedLevel}
          onAddQuestion={handleAddOrUpdateQuestion}
          editMode={editIndex !== null}
          initialQuestion={editIndex !== null ? questions[selectedLevel][editIndex] : null}
        />
      )}
    </div>
  );
}

export default CardDetail;
