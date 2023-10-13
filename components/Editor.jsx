'use client'
import { Editor } from "@monaco-editor/react";
import { useRef } from "react";

const EditorCode = ({ lenguage }) => {

  // function handleEditorDidMount(editor, monaco) {
  //   console.log('onMount: the editor instance:', editor);
  //   console.log('onMount: the monaco instance:', monaco);
  // }

  // function handleEditorWillMount(monaco) {
  //   console.log('beforeMount: the monaco instance:', monaco);
  // }

  // function handleEditorValidation(markers) {
  //   // model markers
  //   // markers.forEach(marker => console.log('onValidate:', marker.message));
  // }

  const editorRef = useRef(null);
  const monacoRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;
  }

  function showCode() {
    console.log(editorRef.current.getValue())
  }

  function showMonaco() {
    console.log(monacoRef.current.language)
  }

  return (
    <>
      {/* <button onClick={showCode}>Show editor instance</button>
      <button onClick={showMonaco}>Show monaco instance</button> */}
      <Editor
      height={'90vh'}
      language={lenguage}
      onMount={handleEditorDidMount}
      // beforeMount={handleEditorWillMount}
      // onValidate={handleEditorValidation}
      />
    </>
)};

export default EditorCode