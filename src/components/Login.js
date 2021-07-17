import React, { useState } from 'react'
import axios from 'axios'
import Member from './Member'
const Login = () => {
    const [url] = useState('http://localhost:8080/BankingApp/login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [member, setMember] = useState(null);
    
    const onClickHandler = async (event) => {
        event.preventDefault();
        console.log(username, password);
        await axios.post(
            url, {
            username,password
        }
        ).then((res) => {
            console.log(res.data);
            setMember(res.data);
                
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            <div>
                <input type='text' placeholder='Enter username' value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type='password' placeholder='Enter password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <button onClick={onClickHandler} type='submit'>Submit</button>
            </div>
            <div>
                <Member member={member}></Member>
            </div>
        </div>
    )
}

export default Login
