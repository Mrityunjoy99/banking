import React ,{useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
const Register = () => {
    const [url] = useState('http://localhost:8080/BankingApp/register');
    const [id, setId] = useState('');
    const [name, setname] = useState('');
    const [openingDate, setopeningDate] = useState('');
    const [balance, setbalance] = useState(0);
    const [isAdmin, setisAdmin] = useState(false);
    const [isActive, setisActive] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [cnfPassword, setcnfPassword] = useState('');
    const [errMsg, seterrMsg] = useState('');
    const [data, setdata] = useState([true, true]);
    const [accepted, setaccepted] = useState(false);
    
    const onClickSubmit = async (event) => {
        event.preventDefault();
        if (password === cnfPassword) {
            await axios.post(
                url, {
                id,name,openingDate,balance,isAdmin,isActive,username,password
            }
            ).then((res) => {
                console.log(res.data);
                setdata(res.data);
                if (res.data[0] && res.data[1])
                {
                    console.log('id acc = '+res.data[0]+'\tun acc = '+res.data[1]);
                    setaccepted(true);   
                }
            }).catch((error) => {
                console.log(error);
            });
        }
        else
        {
            seterrMsg('Enter same password in both the box ');
        }
    };

    

    

    // const funcIDHandler = (event) => {
    //     setId(event.target.value);
    //     onClickIdCheck(event);
    // };
    return (
        <div>
            <input type='text' placeholder='Enter id' value={id} onChange={(event) => setId(event.target.value)} />
            {(data[0]) ? null : <div>This ID is not available</div>}
            <br/>
            <input type='text' placeholder='Enter username' value={username} onChange={(event) => setUsername(event.target.value)} />
            {(data[1]) ? null : <div>This username is not available</div>}
            <br/>
            <input type='password' placeholder='Enter password' value={password} onChange={(event) => setpassword(event.target.value)} />
            <input type='password' placeholder='Confirm Password' value={cnfPassword} onChange={(event) => setcnfPassword(event.target.value)} />
            {(errMsg) ? <div>{errMsg}</div> : null}
            <br />
            <input type='text' placeholder='Enter name' value={name} onChange={(event) => setname(event.target.value)} />
            <br />
            <input type='text' placeholder='opening date YYYY-MM-DD' value={openingDate} onChange={(event) => setopeningDate(event.target.value)} />
            <br/>
            <button onClick={onClickSubmit}>Submit</button>
            {accepted ? <Redirect to='/home' /> : null}
        </div>
    )
}

export default Register
