import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('/api/getData')
      .then(response => response.json())
      .then(data => setPeople(data.people));
  }
  , []);


  return (
    <div className={styles.container}>
      {people.map(person => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}
