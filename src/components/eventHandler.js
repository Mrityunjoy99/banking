import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios';

import Event from './event';

class Events extends Component {
    
    state = {
        url: 'http://localhost:8080/BankingApp/events',
        events: []
    }

    componentDidMount = () => {
        this.refresh = setInterval(
            () => {
                axios.post(
                    this.state.url, {
        
                }
                ).then((res) => {
                    this.setState({
                        events: [...res.data]
                    });
                    
                }).catch((error) => {
                    console.log(error);
                });
            }, 1000
        );
    }

    componentWillUnmount = () => {
        clearInterval(this.refresh);
    }

    // componentDidUpdate = () => {

    // }

    // fetchDeals = () => {
    //     axios.post(
    //         this.state.url, {

    //         }
    //     ).then((res) => {
    //         this.setState({
    //             deals: [...res]
    //         });
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    render() {
        
        return (

            <div className='eventsContainer'>
                {/* <Link to='/search-flights'>
                    <button className='searchFlight'>Search Flights</button>
                </Link> */}
                <div className='eventContainer'>
                   {this.state.events.map((event, idx) => <Event key={idx} event={event}/>)} 
                </div>
            </div>
        )
    }
};

export default Events;
