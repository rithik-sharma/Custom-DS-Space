// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Card from './components/Card';
// import CardDetail from './components/CardDetail';
// import Footer from './components/Footer';

// const topics = [
//   "Array", "String", "2D-Array(Matrix)", "Mathematics",
//   "Sorting & Searching", "Linked List", "Stack & Queues", 
//   "Two pointer", "Sliding Window", "Recursion", "Binary Tree", 
//   "Binary Search Tree(BST)", "Heap(Priority Queue)", "Dynamic Programming",
//   "Greedy", "Graph", "Trie"
// ];

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto">
//         <Routes>
//           <Route path="/" element={
//             <div>
//               <h1 className="text-3xl font-bold text-center mb-8">Custom-DS Space</h1>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {topics.map((topic, index) => (
//                   <Card key={index} topic={topic} />
//                 ))}
//               </div>
//             </div>
//           } />
//           <Route path="/details/:topic" element={<CardDetail />} />
//         </Routes>
//         <Footer />
//       </div>
//       </>
//   );
// }



// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CardDetail from './components/CardDetail';
import Footer from './components/Footer';

const topics = [
  "Array", "String", "2D-Array(Matrix)", "Mathematics",
  "Sorting & Searching", "Linked List", "Stack & Queues", 
  "Two pointer", "Sliding Window", "Recursion", "Binary Tree", 
  "Binary Search Tree(BST)", "Heap(Priority Queue)", "Dynamic Programming",
  "Greedy", "Graph", "Trie"
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold text-center mb-8">Custom-DS Space</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topics.map((topic, index) => (
                  <Card key={index} topic={topic} />
                ))}
              </div>
            </div>
          } />
          <Route path="/details/:topic" element={<CardDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

