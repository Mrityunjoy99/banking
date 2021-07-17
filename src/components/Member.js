import React from 'react'

const Member = (props) => {
    const member = props.member;
    // if(member)
    //     const { id, name, start_date, balance, isAdmin, isActive } = member;
    return (
        member ?
        <div>
            <p>id = {member.id}</p>
            <p>name = {member.name}</p>
            <p>start_date = {member.opening_date}</p>
            <p>balance = {member.Balance}</p>
            <p>isAdmin = {String(member.isAdmin)}</p>
            <p>isActive = {String(member.isActive)}</p>
        </div >: null
        
    )
}

export default Member
