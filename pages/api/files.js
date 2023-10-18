import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Ruta a la carpeta que contiene los archivos.
  const filesFolder = path.join(process.cwd(), 'files');

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

    res.status(200).json(fileData);
  } catch (error) {
    console.error('Error al leer archivos:', error);
    res.status(500).json({ error: 'Error al leer archivos' });
  }
}
