'use client';
import styles from './page.module.css';
import EditorCode from '../components/Editor';
import { useState } from 'react';

export default function Home() {
  const [lenguage, setLenguage] = useState('javascript')

  const handleSelect = (e) => {
    e.preventDefault
    setLenguage(e.target.value)
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
        <p>selected lenguage: {lenguage}</p>
      </section>
      <EditorCode lenguage={lenguage}/>
    </main>
  )
};
