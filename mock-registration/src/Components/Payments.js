import React, { Component } from 'react';

class Payments extends Component {

    handlePaymentSelect(e) {

        const creditCard = document.querySelector('.credit-card');
        const paypal = document.querySelector('.paypal');
        const bitcoin = document.querySelector('.bitcoin');

        if (e.target.value === 'paypal') {
            creditCard.hidden = true;
            bitcoin.hidden = true;
            paypal.hidden = false;
        } else if (e.target.value === 'bitcoin') {
            creditCard.hidden = true;
            paypal.hidden = true;
            bitcoin.hidden = false;
        } else if (e.target.value === 'credit-card') {
            paypal.hidden = true;
            bitcoin.hidden = true;
            creditCard.hidden = false;
        }
    }

    render() {
        return (
            <fieldset className='payment-methods'>
                <legend>Payment Info</legend>
                <div className='payment-method-box'>
                    <label htmlFor='payment'>I'm going to pay with:</label>
                    <select id='payment' name='user-payment' onChange={this.handlePaymentSelect}>
                        <option value='select method' hidden>Select Payment Method</option>
                        <option value='credit-card'>Credit Card</option>
                        <option value='paypal'>PayPal</option>
                        <option value='bitcoin'>Bitcoin</option>
                    </select>
                </div>

                <div id='credit-card' className='credit-card'>
                    <div className='expiration-box'>
                        <div className='month-box'>
                            <label htmlFor='exp-month'>Expiration Date:</label>
                            <select id='exp-month' name='user-exp-month' className='error-border'>
                                <option hidden>Select Date</option>
                                <option value='1'>01 - January</option>
                                <option value='2'>02 - February</option>
                                <option value='3'>03 - March</option>
                                <option value='4'>04 - April</option>
                                <option value='5'>05 - May</option>
                                <option value='6'>06 - June</option>
                                <option value='7'>07 - July</option>
                                <option value='8'>08 - August</option>
                                <option value='9'>09 - September</option>
                                <option value='10'>10 - October</option>
                                <option value='11'>11 - November</option>
                                <option value='12'>12 - December</option>
                            </select>
                        </div>

                        <div className='year-box'>
                            <label htmlFor='exp-year'>Expiration Year:</label>
                            <select id='exp-year' name='user-exp-year' className='error-border'>
                                <option hidden>Select Year</option>
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024'>2024</option>
                                <option value='2020'>2025</option>
                            </select>
                        </div>
                    </div>

                    <div className='credit-card-box'>
                        <div className='num-box'>
                            <label htmlFor='cc-num'>Card Number: <span className='asterisk'>*</span>
                                <input id='cc-num' name='user-cc-num' type='text' className='error-border' onInput={this.onCreditCardChange} />
                                <span id='cc-hint' className='cc-hint hint'>Credit card number must be between 13 - 16 digits</span>
                            </label>
                        </div>

                        <div className='zip-box'>
                            <label htmlFor='zip'>Zip Code: <span className='asterisk'>*</span>
                                <input id='zip' name='user-zip' type='text' className='error-border' onInput={this.onZipCodeChange} />
                                <span id='zip-hint' className='zip-hint hint'>Zip Code must be 5 digits</span>
                            </label>
                        </div>

                        <div className='cvv-box'>
                            <label htmlFor='cvv'>CVV: <span className='asterisk'>*</span>
                                <input id='cvv' name='user-cvv' type='text' className='error-border' onInput={this.onCvvChange} />
                                <span id='cvv-hint' className='cvv-hint hint'>CVV must be 3 digits</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className='paypal' hidden>
                    <h3>Paypal</h3>
                    <p>If you selected the PayPal option we\'ll take you to Paypal\'s site to set up your billing information, when you click “Register” below.</p>
                </div>

                <div className='bitcoin' hidden>
                    <h3>Bitcoin</h3>
                    <p>If you selected the Bitcoin option we\'ll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
                </div>
            </fieldset>
        );
    }
}

export default Payments;