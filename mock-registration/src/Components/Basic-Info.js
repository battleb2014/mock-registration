import React, { Component } from 'react';

class BasicInfo extends Component {

    componentDidMount() {
        this.nameInput.focus();
    }

    handleOtherJobRole(e) {
        const other = document.querySelector('.other-job-role');
        if (e.target.value === 'other') {
            other.hidden = false;
        } else if (e.target.value !== 'other') {
            other.hidden = true;
        }
    }

    render() {
        return (
            <fieldset className='basic-info'>
                <legend>Basic Info</legend>

                <label htmlFor='name'>Name: <span className='asterisk'>*</span>
                    <input
                        ref={(input) => { this.nameInput = input; }}
                        type='text'
                        id='name'
                        name='user-name'
                        className='error-border'
                        onInput={this.props.nameChange}
                    />
                    <span id='name-hint' className='name-hint hint'>Name field cannot be blank</span>
                </label>

                <label htmlFor='email'>Email: <span className='asterisk'>*</span>
                    <input
                        type='email'
                        id='email'
                        name='user-email'
                        className='error-border'
                        onInput={this.props.emailChange}
                    />
                    <span id='email-hint' className='email-hint hint'>Name field cannot be blank</span>
                </label>

                <label htmlFor='title'>Job Role</label>
                <select id='title' name='user-title' onChange={this.handleOtherJobRole}>
                    <option hidden>Select Job Role</option>
                    <option value='full-stack js developer'>Full Stack Javascript Developer</option>
                    <option value='front-end developer'>Front End Developer</option>
                    <option value='back-end developer'>Back End Developer</option>
                    <option value='designer'>Designer</option>
                    <option value='student'>Student</option>
                    <option value='other'>Other</option>
                </select>

                <input type='text' name='other-job-role' id='other-job-role' className='other-job-role' placeholder='Other job role?' hidden />
            </fieldset>
        );
    }
}

export default BasicInfo;