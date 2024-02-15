import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaStarOfLife } from "react-icons/fa6";

import "./companee.css";

const Companee = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [firstName, setName] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    const handleAddNewCompanyClick = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!firstName) {
            console.error("Name is required");
            return;
        }

        console.log("Form submitted:", {
            firstName,
            country,
            email,
            phone,
            website,
        });
        setName("");
        setCountry("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setIsFormOpen(false);
    };

    const handleFormClose = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="form-open">
            <div className="whitebox-shadow">
                <div className="page_header">
                    <div className="page-heading">
                        <div className="header-container">
                            <div className="back-button">
                                <IoMdArrowBack />
                            </div>
                            <div className="Company-list-title">Company list</div>
                            <div className="buttons-container">
                                <div className="button1">
                                    <button type="button" className="Refresh">
                                        Refresh
                                    </button>
                                </div>
                                <div className="button2">
                                    <button
                                        type="button"
                                        className="Add-New-Company"
                                        onClick={handleAddNewCompanyClick}
                                    >
                                        Add New Company
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`form-container ${isFormOpen ? "form-open" : ""}`}>
                <div className="header_title">
                    <button type="button" onClick={handleFormClose}>
                        <RxCross2 />
                    </button>
                    <div className="title">Company</div>
                </div>
                <div className="content">
                    <div className="company-content">
                        <form className="simple-form" onSubmit={handleFormSubmit}>
                            <label>
                                <div className="Name">
                                    <FaStarOfLife className="icon" />
                                    Name:
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    value={firstName}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </label>

                            <label>
                                <div className="Country">Country:</div>
                                <select
                                    className="Countries"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select country
                                    </option>
                                    <option>Afghanistan</option>
                                    <option>Armenia</option>
                                    <option>Australia</option>
                                    <option>Canada</option>
                                    <option>Denmark</option>
                                    <option>Egypt</option>
                                    <option>France</option>
                                    <option>Indonesia</option>
                                    <option>Iceland</option>
                                    <option>India</option>
                                    <option>Others</option>
                                </select>
                            </label>

                            <label>
                                Email:
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>

                            <label>
                                Phone:
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>

                            <label>
                                Website:
                                <textarea
                                    placeholder="Enter website"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </label>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Companee;
