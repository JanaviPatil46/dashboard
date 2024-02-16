import React, { useState, useEffect } from "react";
import "./sidebar.css";
import logo from '../img/logo.svg'
import { FaAngleLeft } from "react-icons/fa";
import Card from "./Card";



import { FaRegHeart } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { BiPieChartAlt } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineDocumentPlus } from "react-icons/hi2"
import { CgFolderAdd } from "react-icons/cg";
import { GoBook } from "react-icons/go";
import { LiaFolderSolid } from "react-icons/lia";
import { FaPaperPlane } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";
import { VscNewFolder } from "react-icons/vsc";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { LuStickyNote } from "react-icons/lu";
import { IoIosPaper } from "react-icons/io";
import { MdMoreTime } from "react-icons/md";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import { SlArrowLeft, SlArrowRight, SlQuestion, SlOptionsVertical } from "react-icons/sl"

import "react-toastify/dist/ReactToastify.css";





function Sidebar() {
  const [mainSidebar, setMainSidebar] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newsidebar, setNewSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [accountform, setAccountForm] = useState(false)

  const [selectedOption, setSelectedOption] = useState("account");
  const [selectedOptionComapny, setSelectedOptionCompany] = useState("company");
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const handleContactsButtonClick = () => {
    setShowAccountInfo(true);
  };

  const handleSidebar = () => {
    setMainSidebar(!mainSidebar)
  }
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleNewSidebar = () => {
    setNewSidebar(!newsidebar);
  };
  const handleSearchbar = () => {
    setSearchbar(!searchbar);
  }
  const handleAddNewCompanyClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleFormClose = () => {
    setNewSidebar(false);
    setSearchbar(false);

  };
  const handleContactClose = () => {
    setIsFormOpen(false);

  };
  const handleActClose = () => {
    setAccountForm(false);
  }
  const handleAddAccount = () => {
    setAccountForm(!accountform)
  }





  return (
    <>
      <div className="row">
        <div className="bars-btn">
          <HiBars3 onClick={handleSidebar} />
        </div>
       
          <div className={` ${sidebarOpen ? "col-2 menu" : "col-1 menu"}`}>
             <div className={`sidebar ${sidebarOpen ? "" : "close"}`}>

              <header>
                <div className="image-text">
                  <span className="image">
                    <img src={logo} alt="" />
                  </span>
                  <div className="text logo-text">
                    <span className="name">SNP</span>
                    {/* <span class="profession">Web developer</span> */}
                  </div>
                </div>
              </header>
              <div className="toggle">
                <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
              </div>
              <div className="menu-bar ">
                <div className="menu">
                  <li className="search-box">
                    <IoSearch className='icon' />
                    <input type="text" placeholder="Search..." />
                  </li>
                  <ul className="menu-links">
                    <li className="nav-link">
                      <a href="#">
                        <BiHomeAlt className='icon' />
                        <span class="text nav-text">Dashboard</span>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        <BiBarChartAlt2 className='icon' />
                        <span className="text nav-text">Revenue</span>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        <GoBell className='icon' />
                        <span className="text nav-text">Notifications</span>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        <BiPieChartAlt className='icon' />
                        <span className="text nav-text">Analytics</span>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#">
                        <FaRegHeart className='icon' />
                        <span className="text nav-text">Likes</span>
                      </a>
                    </li>
                    <li class="nav-link">
                      <a href="#">
                        <IoWalletOutline className='icon' />
                        <span className="text nav-text">Wallets</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bottom-content">
                  <li className="">
                    <a href="#">
                      <IoMdSettings className='icon' />
                      <span className="text nav-text">Settings</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="#">
                      <TbLogout2 className='icon' />
                      <span className="text nav-text">Logout</span>
                    </a>
                  </li>

                </div>
              </div>

            </div>
          </div>
       
        <div className={` ${sidebarOpen ? "col-10 menu2" : "col-11 menu2close"}`}>
          <div className="headers col-12">
            <div className="btns-grp ">
              <button className="nbtn col-2" onClick={handleNewSidebar} >New</button>
              <button className="sbtn col-2" onClick={handleSearchbar}><IoSearch className='bicon' /></button>
            </div>
          </div>
          <div className="view ">
            <div className="reportcard col-12">
              <Card />


            </div>


            <div className="progress col-12">
              <h1>The City</h1>
              <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
              <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>
          </div>
        </div>
        {/* onclick new button new sidebar is open */}
        <div className={`sidebar3 col-2  ${newsidebar ? "open" : ""}`}>
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
                  <AiOutlineUser className='new-icon' />
                  <span class="text nav-text" onClick={handleAddAccount}>Account</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <SlEnvolope className='new-icon' />
                  <span class="text nav-text" onClick={handleAddNewCompanyClick}>Contact</span>
                </a>
              </li>
              <hr />
              <li className="side-link">
                <a href="#">
                  <HiOutlineDocumentPlus className='new-icon' />
                  <span class="text nav-text">Document</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <CgFolderAdd className='new-icon' />
                  <span class="text nav-text">Folder</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <GoBook className='new-icon' />
                  <span class="text nav-text">Page</span>
                </a>
              </li>
              <hr />
              <li className="side-link">
                <a href="#">
                  <LiaFolderSolid className='new-icon' />
                  <span class="text nav-text">Proposal</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <FaPaperPlane className='new-icon' />
                  <span class="text nav-text">Chat</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <CiMemoPad className='new-icon' />
                  <span class="text nav-text">Organizer</span>
                </a>
              </li>
              <hr />
              <li className="side-link">
                <a href="#">
                  <VscNewFolder className='new-icon' />
                  <span class="text nav-text">Invoice</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <RiBillLine className='new-icon' />
                  <span class="text nav-text">Payment</span>
                </a>
              </li>
              <hr />
              <li className="side-link">
                <a href="#">
                  <MdOutlineAlternateEmail className='new-icon' />
                  <span class="text nav-text">Email</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <LuStickyNote className='new-icon' />
                  <span class="text nav-text">Note</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <IoIosPaper className='new-icon' />
                  <span class="text nav-text">Task</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <MdMoreTime className='new-icon' />
                  <span class="text nav-text">Time Entry</span>
                </a>
              </li>
              <li className="side-link">
                <a href="#">
                  <PiSuitcaseSimpleBold className='new-icon' />
                  <span class="text nav-text">Job</span>
                </a>
              </li>
            </div>
          </div>
        </div>



        {/*new search bar  */}
        <div className={`search-side col-2 ${searchbar ? "open" : ""}`}>
          <div className="search-container">
            <div className="header_title">
              <li className="search-box">
                <IoSearch className='icon' />
                <input type="text" placeholder="Search..." className="col-12" />
              </li>
              <button type="button" onClick={handleFormClose} style={{ margin: "10px" }} className="cancle-btn">
                <RxCross2 />
              </button>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className={`form-container col-4  ${isFormOpen ? "form-open" : ""}`}>
          <div className="header_title">
            <button type="button" onClick={handleContactClose}>
              <RxCross2 />
            </button>
            <div className="title col-4">Contact</div>
          </div>
          <div className="c-contact col-12">
            <div className="company-contact col-12">
              <div className="name-container">
                <label>First Name:</label>
                <input className="col-12" type="text" placeholder="first name" />
              </div>
              <div className="name-container">
                <label>Last Name:</label>
                <input className="col-12" type="text" placeholder="last name" />
              </div>
              <div className="name-container">
                <label>Email:</label>
                <input className="col-12" type="email" placeholder="email" />
              </div>
              <button className="submit-btn col-6">Submit</button>
            </div>
          </div>
        </div>


        {/* Account info */}
        <div className={`account-container col-4  ${accountform ? "form-open" : ""}`}>
          <div className="header_title">

            {/* <div className="title">Account</div> */}
          </div>
          <div className="account-container2 col-12">
      <div className='account-header col-12'>
        <h3 className="account_title">New Account</h3>
        <button className="header-button"><RxCross2 /></button>
      </div>

      <div className="accounttype_container col-12">
        <div className="sub-account col-6">
          <div className="account_info" style={{ fontWeight: selectedOption === "account" ? 'bold' : 'normal' }}>
            <input type='radio' id="account_info_radio" name="account_info_radio" checked={selectedOption === "account"} onChange={() => handleRadioChange("account")}
            />

            <lable for="account_info_radio">Account info</lable>
            {showAccountInfo && <span>1</span>}
          </div>
          <div className="rotate-btn">
            {selectedOption === "account" ? <SlArrowRight /> : <SlArrowLeft />}
          </div>

          <div className="company_info" style={{ fontWeight: selectedOption === "company" ? 'bold' : 'normal' }} >
            <input type="radio" id="company_info_radio" name="company_info_radio" checked={selectedOption === "company"} onChange={() => handleRadioChange("company")} />
            <lable for="company_info_radio">Comapny</lable>


          </div>

        </div>
      </div>

      <div className="clienttype_container col-12">
        <div className='title_client col-6'>
          <h3 style={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: '600' }}>
            Client type <SlQuestion style={{ color: '#007bff', fontSize: '12px', verticalAlign: 'top', paddingLeft: '2px' }} />
          </h3>
          <div className="accountsub_type">
            <div className="type1_individual">
              <input type="radio" id="individual_radio" name="client_type" />
              <label htmlFor="individual_radio" style={{ fontSize: '14px', fontFamily: 'sans-serif', marginLeft: '5px' }}>Individual</label>
            </div>
            <div className="companysub_type">
              <input type="radio" id="company_radio" name="client_type" />
              <label htmlFor="company_radio" style={{ fontSize: '14px', fontFamily: 'sans-serif', marginLeft: '5px' }}>Company</label>
            </div>
          </div>
        </div>
      </div>

      <div className="individual_input-container col-12">
        <div className='form-accountinfo col-6'>
          <h3 style={{ fontSize: '14px', fontFamily: 'sans-serif', fontWeight: '600' }}>Account info <SlQuestion style={{ color: '#007bff', fontSize: '12px', verticalAlign: 'top', }} /> <SlOptionsVertical style={{ marginLeft: '50px' }} /></h3>
        </div>

        <label for="fname">Account Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label for="lname">Tag </label>
        <select id="tag" name="tag"></select>

        <label for="team member">Team Members</label>
        <select id="team member" name="team member"></select>

        <label for="floder template"> Floder Template</label>
        <select id="floder template" name="floder template"></select>

       <div className='btn_continue col-3'>
       <input type="continue" value="continue" />
       </div>

      </div>




    </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;