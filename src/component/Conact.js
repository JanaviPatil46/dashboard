import React from 'react'
import { RxCross2 } from "react-icons/rx";
import './contact.css'
const Conact = () => {
    return (
        <>
            <div className='contact-container col-5'>
                <div className='con-header col-12'>
                    <h2 className='name-title'>New Contact</h2>
                    <button type='button' className='cancle-btn'> <RxCross2 /></button>

                </div>
                <div className='form-container col-12'>
                    <h5>Contact Info</h5>
                    <form className='form-fields'>
                        <div className='fields-one col-12'>
                            <label>
                                <div className="f-name">
                                    First name
                                </div>
                                <input
                                    type="text"
                                    placeholder=" First name"
                                    className='col-12'
                                    required
                                />
                            </label>
                            <label>
                                <div className="m-name">
                                    Middle name
                                </div>
                                <input
                                    type="text"
                                    placeholder="Middle name"
                                    className='col-12'
                                    required
                                />
                            </label>
                            <label>
                                <div className="l-name">
                                    Last name
                                </div>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='contact-name col-12'>
                            <label>
                                <div className="l-name">
                                    Contact name
                                </div>
                                <input
                                    type="text"
                                    placeholder="Contact name"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='company-name col-12'>
                            <label>
                                <div className="l-name">
                                    Company name
                                </div>
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='company-note col-12'>
                            <label>
                                <div className="l-name">
                                   Note
                                </div>
                                <input
                                    type="text"
                                    placeholder="Note"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='company-ssn col-12'>
                            <label>
                                <div className="l-name">
                                    SSN
                                </div>
                                <input
                                    type="text"
                                    placeholder="SSN"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='company-email col-12'>
                            <label>
                                <div className="l-name">
                                    Email
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='col-12'
                                    required
                                />
                            </label>
                        </div>
                        <div className='tags col-12'>
                            <label>
                                <div className="l-name">
                                   Tags
                                </div>
                                <select className='tags-options col-12'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Conact