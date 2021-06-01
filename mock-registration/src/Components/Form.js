import React, { Component } from 'react';
import BasicInfo from './Basic-Info';
import Shirts from './Shirts';
import Activities from './Activities';
import Payments from './Payments';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nmbuerOfActivities: 0,
            total: 0,
            name: '',
            nameValid: false,
            email: '',
            emailValid: false,
            cardNumber: '',
            cardNumberValid: false,
            zipCode: '',
            zipCodeValid: false,
            cvv: '',
            cvvValid: false
        };

        this.handleTotal = this.handleTotal.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.validateName = this.validateName.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.onCreditCardChange = this.onCreditCardChange(this);
        this.validateCardNumber = this.validateCardNumber(this);
        this.onZipCodeChange = this.onZipCodeChange.bind(this);
        this.validateZipCode = this.validateZipCode.bind(this);
        this.onCvvChange = this.onCvvChange.bind(this);
        this.validateCvv = this.validateCvv.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.validate = this.validate.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    validateName() {
        const nameCheck = /[a-zA-Z]+/.test(this.state.name);
        if (this.state.name !== '') {
            if (nameCheck === true) {
                this.setState({
                    nameValid: true
                });
            }
        }
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    //Break these up
    validateEmail() {
        const testEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(this.state.email);
        if (this.state.email !== '') {
            if (testEmail) {
                this.setState({
                    emailValid: true
                });
            }
        }
    }

    onCreditCardChange(e) {
        this.setState({
            cardNumber: e.value
        });
    }

    validateCardNumber() {
        const creditCardValue = parseInt(this.state.cardNumber);
        const testCreditCard = /^\d{13,16}$/.test(creditCardValue);
        if (this.state.cardNumber !== '') {
            if (testCreditCard) {
                this.setState({
                    cardNumberValid: true
                });
            }
        }
    }

    onZipCodeChange(e) {
        this.setState({
            zipCode: e.target.value
        });
    }

    validateZipCode() {
        const zipValue = parseInt(this.state.zipCode);
        const testZip = /^\d{5}$/.test(zipValue);
        if (this.state.zipCode !== '') {
            if (testZip) {
                this.setState({
                    zipCodeValid: true
                });
            }
        }
    }

    onCvvChange(e) {
        this.setState({
            cvv: e.target.value
        });
    }

    validateCvv() {
        const cvvValue = parseInt(this.state.cvv);
        const testCvv = /^\d{3}$/.test(cvvValue);
        if (this.state.zipCode !== '') {
            if (testCvv) {
                this.setState({
                    cvvValue: true
                });
            }
        }
    }

    handleTotal(e) {

        if (e.target.checked) {
            if (e.target.value === '200') {
                this.setState({
                    total: this.state.total + 200
                });
            } else {
                this.setState({
                    total: this.state.total + 100
                });
            }
        } else {
            if (e.target.value === '200') {
                this.setState({
                    total: this.state.total - 200
                });
            } else {
                this.setState({
                    total: this.state.total - 100
                });
            }
        }
    }

    validate() {
        const nameHint = document.querySelector('#name-hint');
        const emailHint = document.querySelector('#email-hint');
        const activityHint = document.querySelector('#activities-hint');
        const creditCardHint = document.querySelector('#cc-hint');
        const zipHint = document.querySelector('#zip-hint');
        const cvvHint = document.querySelector('#cvv-hint');

        if (this.state.validateName) {
            nameHint.className = 'valid';
        } else {
            nameHint.className = 'not-valid';
        }

        if (this.state.validateEmail) {
            emailHint.className = 'valid';
        } else {
            emailHint.className = 'not-valid';
        }

        if (this.state.validateActivities) {
            activityHint.className = 'valid';
        } else {
            activityHint.className = 'not-valid';
        }

        if (this.state.validateCardNumber) {
            creditCardHint.className = 'valid';
        } else {
            creditCardHint.className = 'not-valid';
        }

        if (this.validateZipCode) {
            zipHint.className = 'valid';
        } else {
            zipHint.className = 'not-valid';
        }

        if (this.state.validateCvv) {
            cvvHint.className = 'valid';
        } else {
            cvvHint.className = 'not-valid';
        }
    }

    handleRegister(e) {
        e.preventDefault();

        this.validate();
    }

    render() {
        return (
            <form name='form' method='post' noValidate>
                <p id='form-hint' className='form-hint'><span className='asterisk'>*</span> - required field</p>
                <div className='basic-info-and-shirt-box'>
                    <BasicInfo
                        nameChange={this.onNameChange}
                        emailChange={this.onEmailChange}
                    />
                    <Shirts />
                </div>
                <Activities
                    total={this.state.total}
                    handleTotal={this.handleTotal}
                />
                <Payments
                    onCreditCardChange={this.onCreditCardChange}
                    onZipCodeChange={this.onZipCodeChange}
                    onCvvChange={this.onCvvChange}
                />
                <button type="submit" onClick={this.handleRegister}>Register</button>
            </form>
        );
    }
}

export default Form;