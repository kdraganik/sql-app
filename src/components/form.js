import React, {useState} from 'react';

export default function Form({checkPassword, error}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPassword(username, password);
    }

    return (
        <form>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {error != "" ? <div class="error">{error}</div> : ""}
            <button class="button" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}
