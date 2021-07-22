import React , {useState,useEffect} from 'react'
import axios from 'axios'
import getMAC, { isMAC } from 'getmac'

const ActiveMember = (props) => {
    const[url] = useState('http://localhost:8080/BankingApp/activity');
    const [member, setmember] = useState(null);
    const [addr, setaddr] = useState('');
    const [session_id] = useState(props.sessionId+'');
    // useEffect(() => {

    //     // var id = require('macaddress').all().then(
    //     //     function (all) {
    //     //         console.log(JSON.stringify(all, null, 2));
    //     //         return (JSON.stringify(all, null, 2));
    //     //     }
    //     // );

    //     // console.log("id = "+id);
       
    //     // console.log("MAC address = " + getMAC('eth0'));
    //     // getMac(setaddr);
    //     // setaddr(getMAC('eth0'));

    //     // console.log(require('address').ip());
    //     // console.log('react ta madarchod chele')
    //     return () => {
            
    //     }
    // }, []);

    const onClickHandler = async (event) => {
        event.preventDefault();
        console.log('session id = ' + props.sessionId);
        console.log(session_id);
        await axios.post(
            url, {
                session_id: props.session_id
            }
        ).then((res) => {
            console.log("ID = "+res.data);
            setmember(res.data);
        }).catch((error) => {
            console.log(error);
        });
        console.log(addr);
    };

    return (
        <div>
            <button onClick={onClickHandler}>click me</button>
            {member ? <div>{member}</div> : null}
        </div>
    )
}
export default ActiveMember
