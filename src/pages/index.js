import { useEffect, useState } from 'react';
import MainView from '@/views/MainView';
import LoginView from '@/views/LoginView';

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
    <div className="container">
      {
        isLoginSuccessful 
        ? <MainView/>
        : <LoginView checkPassword={checkPassword} error={error}/>
      }
    </div>
  );
}
