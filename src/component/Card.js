import React from "react";
import "./card.css";
import { FaArrowRightFromBracket } from "react-icons/fa6";

function Card() {
    return (
        <>
            
                <div className="card_db ">
                    <div class="form-group">
                        <div className="box">
                            <select id="selectOption">
                                <option value="option1">Week</option>
                                <option value="option2">Month</option>
                                <option value="option3">Year</option>
                            </select>
                        </div>
                    </div>
                    <h3>To do</h3>
                    <h2>21</h2>
                    <div className="bottom">
                        <p>"Genrate Invoice Vedatnta group"</p>
                        <FaArrowRightFromBracket />
                    </div>
                </div>
          
        </>
    );
}

export default Card;