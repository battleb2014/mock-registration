import React from 'react';

const Activity = (props) => {
    return (
        <div>
            <input className='input' type='checkbox' name={props.name} data-day-and-time={props.dayAndTime} value={props.cost} unchecked />
            <span>{props.title}</span>
            <span>{props.dayAndTime}</span>
            <span className='activity-cost'>${props.cost}</span>
            <img className={props.className} src={props.src} alt='' />
        </div>
    );
}

export default Activity;