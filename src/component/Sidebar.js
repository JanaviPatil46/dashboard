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


import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newsidebar, setNewSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [accountform, setAccountForm] = useState(false)

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

  // Account info useState
  const [accountType, setAccountType] = useState('accountInfo');
  const [accountname, setAccountName] = useState('');
  const [tag, setTag] = useState('');
  const [team_members, setTeam_members] = useState('');
  const [folder_template, setFolder_template] = useState('');


  const [companyname, setComapnyName] = useState('');
  const [clientType, setClientType] = useState('individual', 'company');

  const handleFormToggle = (formType) => {
    setAccountType(formType);
  };

  // 

  // Validation of Account info
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for validation errors

    const validationErrors = {};

    if (!accountname.trim()) {
      validationErrors.accountname = '*Account Name is required*';

    }

    if (!companyname.trim()) {
      validationErrors.companyname = '*Company Name  is required*';

    }

    if (!tag.trim()) {
      validationErrors.tag = "*Tag is required*";
    }

    if (!team_members.trim()) {
      validationErrors.team_members = "*Team members is required*";
    }

    if (!folder_template.trim()) {
      validationErrors.folder_template = '*Folder template is required*';
    }

    if (clientType === 'company') {
      if (!country.value) {
        validationErrors.country = '*Country is required*';
      }
      if (!street_address.trim()) {
        validationErrors.street_address = '*Street address is required*';
      }
      if (!city.trim()) {
        validationErrors.city = '*City is required*';
      }
      if (!state.trim()) {
        validationErrors.state = '*State/province is required*';
      }
      if (!zip.trim()) {
        validationErrors.zip = '*ZIP/postal code is required*';
      }
    }




    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill in all required fields", { autoClose: 4000 })
      return;
    }

    setErrors({});

    // Log the form input values
    console.log('Account Type:', accountType);
    console.log('Account Name:', accountname);
    console.log('Company Name:', companyname);
    console.log('Client Type:', clientType);
    console.log('Tag:', tag);
    console.log('Team Members:', team_members);
    console.log('Folder Template:', folder_template);

    // Company Fields

    console.log('Client Type:', clientType);
    console.log("country :", country);
    console.log("street_address :", street_address);
    console.log("city :", city);
    console.log("state :", state);
    console.log("zip :", zip);
    toast.success("Account created successfully", { autoClose: 3000 })

  };



  // =================================================================================================================================

  // Comapny Form UseState=============

  const [country, setCountry] = useState('');
  const [street_address, setStreet_address] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/positions"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(
          data.data.map((country) => ({
            value: country.name,
            label: country.name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);



  // 

  return (
    <>
      <div className="row">
        <div className="bars-btn">
          <HiBars3 />
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
              {/* <Company /> */}
            </div>


            <div className="progress col-12">
              <h1>The City</h1>
              <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
              <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>
          </div>
        </div>
        {/* onclick new button new sidebar is open */}
        <div className={`sidebar3  ${newsidebar ? "open" : ""}`}>
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
        <div className={`form-container col-8  ${isFormOpen ? "form-open" : ""}`}>
          <div className="header_title">
            <button type="button" onClick={handleContactClose}>
              <RxCross2 />
            </button>
            <div className="title">Company</div>
          </div>
          <div className="content">
            <div className="company-content">

            </div>
          </div>
        </div>


        {/* Account info */}
        <div className={`account-container col-8  ${accountform ? "form-open" : ""}`}>
          <div className="header_title">
            <button type="button" onClick={handleActClose}>
              <RxCross2 />
            </button>
            <div className="title">Account</div>
          </div>
          <div className="content">
            <div className="company-content">
              <div className="new-account-container">
                <ToastContainer />
                <form className="new-account-form">
                  <h2>New Account</h2>
                  <div className="form-row">
                    <div className="form-column">
                      <div className="form-toggle">
                        <button
                          type="button"
                          onClick={() => handleFormToggle('accountInfo')}
                          className={accountType === 'accountInfo' ? 'active' : ''}
                        >
                          Account Info
                        </button>
                        <button
                          type="button"
                          onClick={() => handleFormToggle('contact')}
                          className={accountType === 'contact' ? 'active' : ''}
                        >
                          Contacts
                        </button>
                      </div>

                      {accountType === 'accountInfo' && (
                        <div className="form-content">
                          <h2>Client Type</h2>
                          <div className='radio-row'>
                            <div className="radio-label1">
                              <label>individual</label>
                              <input
                                type="radio"
                                name="clientType"
                                value="individual"
                                checked={clientType === 'individual'}
                                onChange={() => setClientType('individual')}
                              />
                            </div>
                            <div className="radio-label2">
                              <label>Company</label>
                              <input
                                type="radio"
                                name="clientType"
                                value="company"
                                checked={clientType === 'company'}
                                onChange={() => setClientType('company')}
                              />
                            </div>
                          </div>
                          <h5>Account Info</h5>
                          <div className="act_name">
                            <label>Account Name</label>
                            <input
                              type="text"
                              value={accountname}
                              onChange={e => setAccountName(e.target.value)}
                            />
                            {/* {errors.accountname && <p className="error-message">{errors.accountname}</p>} */}
                          </div>

                          <div className="com_name">
                            <label>Company Name</label>
                            <input
                              type="text"
                              value={companyname}
                              onChange={e => setComapnyName(e.target.value)}

                            />
                            {/* {errors.companyname && <p className="error-message">{errors.companyname}</p>} */}
                          </div>
                          <div className="com_name">
                            <label>Tag</label>
                            <input
                              type="text"
                              value={tag}
                              onChange={e => setTag(e.target.value)}

                            />
                            {/* {errors.tag && <p className="error-message">{errors.tag}</p>} */}
                          </div>

                          <div className="com_name">
                            <label>Team Members</label>
                            <input
                              type="text"
                              value={team_members}
                              onChange={e => setTeam_members(e.target.value)}

                            />
                            {/* {errors.team_members && <p className="error-message">{errors.team_members}</p>} */}
                          </div>


                          <div className="com_name">
                            <label>Folder template</label>
                            <input
                              type="text"
                              value={folder_template}
                              onChange={e => setFolder_template(e.target.value)}
                            />
                            {/* {errors.folder_template && <p className="error-message">{errors.folder_template}</p>} */}
                          </div>
                          {clientType === 'company' && (
                            <>
                              <h5>Company address</h5>

                              <div className="grp_country">
                                <label>Country</label>
                                <Select
                                  value={country}
                                  onChange={setCountry}
                                  options={countries}
                                  placeholder="Select a country..."
                                />
                                {/* {errors.country && <p className="error-message">{errors.country}</p>} */}

                              </div>

                              <div className="grp-address">
                                <lable>Street address</lable>
                                <input
                                  type="text"
                                  value={street_address}
                                  onChange={e => setStreet_address(e.target.value)}
                                />
                                {/* {errors.street_address && <p className="error-message">{errors.street_address }</p>} */}
                              </div>

                              <div className="grp-address">
                                <lable> City</lable>
                                <input
                                  type="text"
                                  value={city}
                                  onChange={e => setCity(e.target.value)}

                                />
                                {/* {errors.city && <p className="error-message">{errors.city }</p>} */}
                              </div>

                              <div className="grp-address">
                                <lable> State/province</lable>
                                <input
                                  type="text"
                                  value={state}
                                  onChange={e => setState(e.target.value)}
                                />
                                {/* {errors.state && <p className="error-message">{errors.state }</p>} */}
                              </div>

                              <div className="grp-address">
                                <lable> ZIP/postal code</lable>
                                <input
                                  type="text"
                                  value={zip}
                                  onChange={e => setZip(e.target.value)}

                                />
                                {/* {errors.zip && <p className="error-message">{errors.zip }</p>} */}
                              </div>




                            </>
                          )}
                          <button type="submit" onClick={handleSubmit}>Continue</button>
                        </div>
                      )}
                      {accountType === 'contact' && (
                        <div className="form-content">
                          {/* <Contact /> */}

                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;