import React, {useState} from 'react';

export default function Form({checkPassword}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        checkPassword(username, password);
    }

    return (
        <form>
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}
