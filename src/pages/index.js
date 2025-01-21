import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Form from '../components/form';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.users));
  }, []);

  function checkPassword(username, password) {
    const user = users.find(user => user.username === username);
    if (!user) {
      setError('User not found!');
      return
    }
    if (user.password === password) {
      setIsLoginSuccessful(true);
    } else {
      setError('Login failed!');
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      {isLoginSuccessful ? <p>Login successful!</p>
      : <Form checkPassword={checkPassword}></Form>
      }
      {error != "" ? <div>{error}</div> : ""}
    </div>
  );
}
