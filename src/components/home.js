import React, {useEffect,useState} from 'react'
import ActiveMember from './activeMember';
import Events from './eventHandler';
import Navbar from './navbar';
import queryString from 'query-string';
import axios from 'axios';
import Member from './Member';
import LoggedInQuitError from './loggedinQuitError';

function Home({ location }) {
    const [sessionId, setsessionId] = useState('');
    const [Prompt, setisLoggedIn, setPristine] = LoggedInQuitError("log out first");
    const[url] = useState('http://localhost:8080/BankingApp/activity');
    const [member, setmember] = useState(null);
    useEffect(() => {
        // const { username } = queryString.parse(location.search)
        // console.log("in home1 = "+username);
        const { session_id } = queryString.parse(location.search);
        setsessionId(session_id);
        console.log("in home : " + session_id);
        return () => {
            
        }
    }, [location.search]);
    const onClickHandler = async (event) => {
        event.preventDefault();
        console.log('in home = ' + sessionId);
        await axios.post(
            url, {
                sessionId
            }
        ).then((res) => {
            // console.log("ID = "+res.data);
            setmember(res.data);
            setisLoggedIn();
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            <Navbar/>
            <Events />
            {Prompt}
            {sessionId ? <div>session_id = { sessionId   }</div>:null}
            {/* <ActiveMember sessionId={ sessionId }/> */}
            {sessionId?<button onClick={onClickHandler}>click me</button>:null}
            {member ? <div><Member member={ member }/></div> : null}
        </div>
    )
}

export default Home;
