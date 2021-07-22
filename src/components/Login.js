import React, { useState } from 'react'
import axios from 'axios'
import Member from './Member'
import { Redirect } from 'react-router';
const Login = () => {
    const [url] = useState('http://localhost:8080/BankingApp/login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accepted, setaccepted] = useState(false);
    const [sessionID, setsessionID] = useState('');
    
    const onClickHandler = async (event) => {
        event.preventDefault();
        console.log(username, password);
        await axios.post(
            url, {
                username, password
        }
        ).then((res) => {
            // console.log("url = "+res.config.url);
            console.log("IN login data " + res.data);
            console.log('url = '+res.config.url);
            setsessionID(res.data);
            if (res.data)
                setaccepted(true);
                
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
                {accepted?<Redirect to = {`/home?session_id=${sessionID}`} method = 'post'/>:<div>username or password is incorrect</div>}
            </div>
        </div>
    )
}

export default Login
