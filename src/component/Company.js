import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";

import { HiOutlinePlus } from "react-icons/hi";
import "./company.css";

const Company = () => {
  const [newsidebar, setNewSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false)
  const [firstName, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const handleAddNewCompanyClick = () => {
    setNewSidebar(!newsidebar);
  };

  const handleSearchbar = () => {
    setSearchbar(!searchbar);
  }
  const handleFormClose = () => {
    setNewSidebar(false);
    setSearchbar(false);
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
                    onClick={handleSearchbar}
                  >
                    Add New Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sidebar3 col-2 ${newsidebar ? "open" : ""}`}>
        <div className="header_title">
          <div className="new-title"> <HiOutlinePlus className="plus" />Company</div>
          <button type="button" onClick={handleFormClose}>
            <RxCross2 />
          </button>
        </div>
        <div className="content">
          <div className="content-list">
            <li className="side-link">
              <a href="#">
                <AiOutlineUser className='icon' />
                <span class="text nav-text">Account</span>
              </a>
            </li>
            <li className="side-link">
              <a href="#">
                <SlEnvolope className='icon' />
                <span class="text nav-text">Contact</span>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className={`search-side col-2 ${searchbar ? "open" : ""}`}>
        <div className="search-container">
          <div className="header_title">

            <button type="button" onClick={handleFormClose}>
              <RxCross2 />
            </button>
          </div>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
};
export default Company;
