'use client'
import styles from './page.module.css';
import EditorCode from '../components/Editor';
import FileList from '../components/FileList';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('javascript');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelect = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <main className={styles.main}>
      <section>
        <select onChange={handleSelect}>
          <option value='javascript'>Javascript</option>
          <option value='python'>Python</option>
        </select>
      </section>
      <section>
        <p>Selected language: {language}</p>
      </section>
      <FileList onFileSelect={handleFileSelect} />
      <EditorCode language={language} selectedFile={selectedFile} />
    </main>
  );
}
