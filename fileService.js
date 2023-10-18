// Importa el módulo 'fs' (File System) de Node.js para trabajar con archivos.
const fs = require('fs');
const path = require('path');

// Ruta a la carpeta que contiene los archivos.
const filesFolder = path.join(__dirname, 'files');

// Función para leer y retornar el contenido de los archivos.
function readFilesInFolder() {
  try {
    // Lee la lista de archivos en la carpeta.
    const files = fs.readdirSync(filesFolder);

    // Array para almacenar los datos de los archivos.
    const fileData = [];

    // Itera a través de los archivos y lee su contenido.
    files.forEach((fileName) => {
      const filePath = path.join(filesFolder, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      // Agrega los datos del archivo al array.
      fileData.push({
        nombre: fileName,
        code: fileContent,
      });
    });

    return fileData;
  } catch (error) {
    console.error('Error al leer archivos:', error);
    return [];
  }
}

module.exports = {
  readFilesInFolder,
};

console.log(readFilesInFolder())
