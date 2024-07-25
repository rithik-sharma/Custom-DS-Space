// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Card({ topic }) {
//   const navigate = useNavigate();

//   const navigateToDetail = () => {
//     navigate(`/details/${topic}`);
//   };

//   return (
//     <div className="p-4 bg-white shadow-lg rounded-lg cursor-pointer" onClick={navigateToDetail}>
//       <h2 className="text-xl font-bold mb-4">{topic}</h2>
//     </div>
//   );
// }

// export default Card;


import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ topic }) {
  const navigate = useNavigate();

  // Array of possible top border colors
  const colors = [
    'border-blue-500',
    'border-green-500',
    'border-yellow-500',
    'border-red-500',
    'border-purple-500',
    'border-indigo-500',
    'border-teal-500',
    'border-pink-500',
  ];

  // Get a random color from the colors array
  const colorClass = colors[Math.floor(Math.random() * colors.length)];

  const navigateToDetail = () => {
    navigate(`/details/${topic}`);
  };

  return (
    <div
      className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg border-t-4 ${colorClass} m-4`}
      onClick={navigateToDetail}
    >
      <h2 className="text-lg font-extrabold mb-2 text-center text-gray-800">{topic}</h2>
    </div>
  );
}

export default Card;


