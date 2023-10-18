import React, { useState, useEffect } from 'react';

const FileList = ({ onFileSelect }) => {
  const [files, setFiles] = useState([]);

useEffect(() => {
  // Hacer una solicitud a la API para obtener la lista de archivos.
  fetch('/api/files')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Agrega esto para depurar
      setFiles(data);
    })
    .catch((error) => console.error('Error al obtener archivos:', error));
}, []);


  return (
    <div className="file-list">
      <h2>Archivos</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button onClick={() => onFileSelect(file)}>{file.nombre}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
