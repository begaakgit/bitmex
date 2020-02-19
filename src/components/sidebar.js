import React, { Component } from 'react'

export class Sidebar extends Component {
    render() {
        return (
           
            <div id="bg_sidebar" role="tablist">
            {/* ist accordian */}
            <div id="bg_sidebar" class="  card">
                <div class="card-header form-inline" role="tab" id="headingOne">
                    <h5 class="mb-0">
                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Place Order
                           </a>
                    </h5>
                    <span id="settingicon">
                        <a href="/app/support/contact" class="fa fa-calendar _2HHdzcBx hidden-xs"></a>
                        <a href="/app/support/contact" class="fa fa-cogs _2HHdzcBx hidden-xs"></a>
                    </span>

                </div>
                <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                    <div class="card-body" id="istcardbody_">
                        <div className="row ">
                            <div className="col-lg-4">
                                <span className="small" >
                                    <a href="#" >limit</a>
                                </span>
                            </div>
                            <div className="col-lg-5">
                                <span className="small" >
                                    <a href="#" >Market</a>
                                </span>
                            </div>
                            <div className="col-lg-3">
                                <div class="dropdown" >
                                    <button class="small btn btn-secondary dropdown-toggle sidebarDropdownButton"
                                        type="button" id="dropdownMenu1" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <a class="dropdown-item" href="#!">Profit</a>
                                        <a class="dropdown-item" href="#!">Stop limit</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <span className="small">
                                    Quality
                            </span>
                            </div>

                            <div className="col-lg-6">
                                <input type="number" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <span className="small">
                                    Stop Price
                            </span>
                            </div>

                            <div className="col-lg-6">
                                <input type="number" placeholder="0.00000" />
                            </div>
                        </div>
                        <br></br>
                        <div className="row">

                            <div className="col-lg-6">
                                <span class="badge badge-success small">
                                    Set By Stop
                           <hr></hr>
                                    5 @market <br />
                                    Trigger >980.77
                           </span>
                                <h6>Cost 0.0006XBt</h6>
                                <h6>Order Value</h6>
                                <h6>Available balance</h6>
                            </div>

                            <div className="col-lg-6">

                                <span class="badge badge-success small">
                                    Set By Stop
                           <hr></hr>
                                    5 @market <br />
                                    Trigger >980.77
                           </span>
                                <h6>Cost 0.0006XBt</h6>
                                <h6>Order Value</h6>
                                <h6>Available balance</h6>
                            </div>
                        </div>
                        <div className="row bg-dark">
                            <div className="col-lg-3">
                                <div class="dropdown" >
                                    <button class="small btn btn-secondary dropdown-toggle sidebarDropdownButton"
                                        type="button" id="dropdownMenu1" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <a class="dropdown-item" href="#!">Profit</a>
                                        <a class="dropdown-item" href="#!">Stop limit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <span className="small" >
                                    <a href="#" >Target</a>
                                </span>
                            </div>
                            <div className="col-lg-6 small">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                    <label class="custom-control-label" for="customCheck1">Close on target</label>
                                </div>
                                {/* <span className="small" >
                                        <a href="#" >Close on target</a>
                                    </span> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ist accordian ended */}

            <div id="bg_sidebar" class="card">
                <div class="card-header" role="tab" id="headingTwo">

                    <h5 class="mb-0">
                        <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Your Position:XbTUSD
                    </a>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="col">
                                    <span>0</span>
                                </div>
                                <div className="col">
                                    <span>Contracts</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    <span>0.00%</span>
                                </div>
                                <div className="col">
                                    <span>ROE</span>
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>


                        <div className="row small bg-success">

                            <span className="col-lg-4">
                                <a href="#">0.00x</a>
                            </span>
                            <span className="col-lg-4">
                                LEVERAGE
                                </span>
                            <span className="col-lg-4">
                                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            </span>
                        </div>


                    </div>


                </div>
            </div>

            {/* 2nd ended */}


            {/* 3rd */}

            <div id="bg_sidebar" class="card">
                <div class="card-header" role="tab" id="headingThree">

                    <h5 class="mb-0">
                        <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contract Details: XBTUSD
                    </a>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="card-body">

                        <div className="row">

                            <div className="col-6 offset-3">
                                <strong>9774.18/99989</strong>
                            </div>


                        </div>

                        <div className="row">

                            <div className="col-6 offset-3">
                                <strong>9786.0</strong>
                            </div>

                        </div>

                        <div className="row small ">

                            <span className="col-md-6">
                                <a href="#">Pricing Source</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">BitMEX Index</a>
                            </span>
                            <span className="col-md-6">
                                <a href="#">BitMEX Index Price</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">9786.57</a>
                            </span>
                            <span className="col-md-6">
                                <a href="#">24H Turnover</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">343,563.9184 XBT</a>
                            </span>
                            <span className="col-md-6">
                                <a href="#">Open value</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">9873,563.9184 XBT</a>
                            </span>

                            <span className="col-md-6">
                                <a href="#">Predicted Rate</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">0.0100% In 13 hours</a>
                            </span>
                            <span className="col-md-6">
                                <a href="#"> Contract Value</a>
                            </span>
                            <span className="col-md-6">
                                <i class="fa fa-" aria-hidden="true"></i> <a href="#">1.00 USD</a>
                            </span>


                        </div>


                    </div>


                </div>
            </div>

            {/* 3rd ended */}



        </div>


        )
    }
}

export default Sidebar
