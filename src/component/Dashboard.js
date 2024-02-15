import React from "react";
import "./dashboard.css";

function Dashboard() {
    return (
        <>
            {/* <div className="header">
        <h1>SNP</h1>
      </div> */}

            <div class="row">
                <div class="col-2 sidebar">sidebar</div>

                <div class="col-10 view">
                    
                    <div className="header">
                        <h1>SNP</h1>
                    </div>
                    <div className="row">

                        {/* //!card 1 */}
                        <div className="col-3 menu">
                            <div class="card">
                                <div class="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div>
                                        <p>This Month</p>
                                        <div className="box">12345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 2 */}
                        <div className="col-3 menu">
                            <div class="card">
                                <div class="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div>
                                        <p>This Month</p>
                                        <div className="box">12345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 3 */}
                        <div className="col-3 menu">
                            <div class="card">
                                <div class="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div>
                                        <p>This Month</p>
                                        <div className="box">12345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!card 4 */}
                        <div className="col-3 menu">
                            <div class="card">
                                <div class="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div>
                                        <p>This Month</p>
                                        <div className="box">12345</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* //!card 1 */}
                        <div className="col-9 menu">
                            <div class="status">
                                <div class="container">
                                    <h4>
                                        <b>Invoice</b>
                                    </h4>
                                    <div className="col-4 menu">
                                        <div class="S">
                                            <div class="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 menu">
                                        <div class="S">
                                            <div class="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 menu">
                                        <div class="S">
                                            <div class="container">
                                                <h4>
                                                    <b>Invoice</b>
                                                </h4>
                                                <div>
                                                    <p>This Month</p>
                                                    <div className="box">12345</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //!cutomerview */}
                        <div className="col-3 menu">
                            <div class="status">
                                <div class="container">
                                    <h4>
                                        <b>Progress bar round</b>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;