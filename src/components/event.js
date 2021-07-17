import React from 'react'
// import './Deal.css'

const getIntegerFromTime = (time) => {

    let num = 0;
    const li = [0, 1, 3, 4, 6, 7];
    li.forEach((x) => {
        num = num * 10 + (time[x]-'0');
    })

    return num;
}

const Event = (props) => {
    let { id,data,start_time,end_time } = props.event;
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let active = false;
    // console.log(start_time, end_time, hours,":",minutes,":",seconds);
    

    // if (hours > start_time.substring(0, 2) && hours < end_time.substring(0, 2))
    //     active = true;
    // else if(hours == start_time.substring(0, 2) || hours == end_time.substring(0, 2))
    //     if(minuts >= start_time.substring(3, 5) && minuts <= end_time.substring(3, 5))
    //         if(seconds >= start_time.substring(6,8) && seconds <= end_time.substring(6,8))
    
    const timeNum = hours * 10000 + minutes * 100 + seconds;
    if (timeNum <= getIntegerFromTime(end_time) && timeNum >= getIntegerFromTime(start_time))
        active = true;

    // console.log("hour = " + hours + "\tminute = " + minutes + "\tsecond = " + seconds);
    return (
        active
        ?
        <div className="dealContainer">
            <div className="dealArrangement1">
                Event {id}
            </div>
            <div className="dealArrangement2">
                {data}
            </div>
            <div className="dealArrangement5">
                Deal Start time {start_time}
            </div>
            <div className="dealArrangement6">
                Deal End Time {end_time}
            </div>
        </div>
        : null
    )
}

export default Event
