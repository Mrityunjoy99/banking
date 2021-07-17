import React ,{useState} from 'react'
import axios from 'axios'
const Register = () => {
    const [urlID] = useState('http://localhost:8080/BankingApp/idCheck');
    const [urlUN] = useState('http://localhost:8080/BankingApp/usernameCheck');
    const [id, setId] = useState();
    const [idAccepted, setIdAccepted] = useState(false);
    const [UNAccepted, setUNAccepted] = useState(false);
    const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [member, setMember] = useState(null);
    const onClickIdCheck = async (event) => {
        event.preventDefault();
        console.log("id = " + id);
        if (id) {
            await axios.post(
                urlID, {
                id
            }
            ).then((res) => {
                console.log(res.data);
                setIdAccepted(res.data);
                    
            }).catch((error) => {
                console.log(error);
            });
        }
        else
        {
            console.log("id is blank");
        }
        
    };

    const onClickUNCheck = async (event) => {
        event.preventDefault();
        if (username === "") {
            console.log("Enter valid string");
        }
        else {
            console.log("username = " + username);
            await axios.post(
                urlUN, {
                username
            }
            ).then((res) => {
                console.log(res.data);
                setUNAccepted(res.data);
                    
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    

    // const funcIDHandler = (event) => {
    //     setId(event.target.value);
    //     onClickIdCheck(event);
    // };
    return (
        <div>
            <div>
                <input type='text' placeholder='Enter id' value={id} onChange={(event) => {
                    setId(event.target.value);
                    
                    onClickIdCheck(event);
                }} />
                <button type='submit' onClick={onClickIdCheck}>check</button>
            </div>
            <div>
                <p>Id availability = {String(idAccepted)}</p>
            </div>
            <div>
                <input type='text' placeholder='Enter username' value={username} onChange={(event) => {
                    setUsername(event.target.value);
                    onClickUNCheck(event);
                }} />
                <button type = 'submit' onClick = {onClickUNCheck}>check</button>
            </div>
            <div>
                <p>username availability = {String(UNAccepted)}</p>
            </div>
        </div>
    )
}

export default Register
