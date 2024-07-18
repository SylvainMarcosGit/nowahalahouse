// src/components/NotFound.jsx
import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Non Trouvée</h2>
        <p className="mt-2 text-gray-600">Désolé, la page que vous recherchez n'existe pas.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default NotFound;
