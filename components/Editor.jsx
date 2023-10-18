'use client'
import { Editor } from "@monaco-editor/react";

const EditorCode = ({ language, selectedFile }) => {
  // Verifica si hay un archivo seleccionado y muestra su contenido.
  
    return (
      <Editor
        height={'90vh'}
        language={language}
        value={selectedFile?.code}
      />
    );

};

export default EditorCode;
