import React, { Component } from 'react';
import Activity from './Activity';
import js from '../img/js.svg';
import react from '../img/react.svg';
import node from '../img/node.svg';
import angular from '../img/angular.svg';
import build from '../img/build.svg';
import npm from '../img/npm.svg';
import express from '../img/express.svg';

class Activities extends Component {

    render() {
        const activityList = [
            { name: 'js-libs', dayAndTime: 'Tuesday 9am-12pm', title: 'JavaScript Libraries Workshop', cost: '100', className: 'activity-img react-img', src: react },
            { name: 'node', dayAndTime: 'Tuesday 1pm-4pm', title: 'Node.js Workshop', cost: '100', className: 'activity-img node-img', src: node },
            { name: 'js-frameworks', dayAndTime: 'Tuesday 9am-12pm', title: 'JavaScript Frameworks Workshop', cost: '100', className: 'activity-img angular-img', src: angular },
            { name: 'build-tools', dayAndTime: 'Tuesday 1pm-4pm', title: 'Build tools Workshop', cost: '100', className: 'activity-img build-img', src: build },
            { name: 'npm', dayAndTime: 'Wednesday 9am-12pm', title: 'npm Workshop', cost: '100', className: 'activity-img npm-img', src: npm },
            { name: 'express', dayAndTime: 'Wednesday 1pm-4pm', title: 'Express Workshop', cost: '100', className: 'activity-img express-img', src: express }
        ];

        return (
            <fieldset id='activities' className='activities' onChange={this.props.handleTotal}>
                <legend>Register for Activities</legend>
                <div id='activities-box' className='activities-box error-border'>
                    <label>
                        <input className='input' type='checkbox' name='all' value='200' unchecked />
                        <span>Main Conference</span>
                        <span className='activity-cost'>$200</span>
                        <img className='activity-img js-img' src={js} alt=''></img>
                    </label>

                    {activityList.map((activity) => (
                        <label>
                            <Activity
                                name={activity.name}
                                dayAndTime={activity.dayAndTime}
                                title={activity.title}
                                cost={activity.cost}
                                className={activity.className}
                                src={activity.src}
                            />
                        </label>
                    ))}
                </div>

                <p id='activities-cost' className='activities-cost'>Total: ${this.props.total}</p>
                <p id='activities-hint' className='activities-hint hint'>Choose at least one activity</p>
            </fieldset >
        );
    }
}

export default Activities;