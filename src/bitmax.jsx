import React, { Component } from 'react'
import './App.css';
import MyChart from './graphs/mychart'
import { LineChart } from './graphs/linechart';
export class BitMax extends Component {
    render() {

        return (
            <div className="Container ">

                <div className="row">
                    {/* header */}
                    <header className="col-lg-12 form-inline text_header  header_ " id="bg-bitmax">
                        {/* imgae */}
                        <div className=" col-lg-3  col-sm-12"  >
                            <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                        </div>
                        {/* imgae end */}



                        {/* menu */}

                        <div className="col-lg-4 col-sm-12" >
                            <nav class=" navbar navbar-expand-lg " id="bg-bitmax" >
                                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon forecolor">Menu</span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Trade<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item active">
                                            <a class="nav-link" href="#"> Account<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contract</a>
                                        </li>


                                        <li class="nav-item">
                                            <a class="nav-link" href="#">References</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">API</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* menue ended */}

                        {/* header links */}

                        <div className="col-lg-5 col-sm-12 form-inline" >
                            <div className="col-lg-3 col-sm-3 col-xs-3 small border-left border-right " id="bg-bitmax">
                                <div className="col"><a>Total:0.0000XBT</a></div>
                                <div className="col"><a>Total:0.0000XBT</a></div>
                            </div >
                            <div className="col-lg-1 col-sm-1  col-xs-1" >
                                <i class=" dropdown-toggle-icon fa fa-fw fa-bullhorn"></i>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-left border-right">
                                <img src="./assets/img/usflag.png" class="flag-icon" />
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-right">
                                <a href="/app/support/contact" class="fa fa-question-circle _2HHdzcBx hidden-xs"></a>
                            </div>
                            <div class="col-md-3 col-sm-3  col-xs-3 btn-group"  >
                                <button id="dropdown-Email" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Example@bitmex.com
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button class="dropdown-item" type="button">  Example@bitmex.com</button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com </button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com  </button>
                                </div>
                            </div>
                        </div>
                        {/* header links ended */}
                    </header>
                    {/* header ended */}



                    {/* sidebar */}



                    <div className="col-lg-3 text_ col-md-12 col-xs-12" id="sidebar_">


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




                    </div>

                    {/* sidebar ended */}

                    <div className="col-lg-9 " id="mainbodycontent_">
                        <div className="row ">
                            {/* uppernav */}
                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="upperNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin <br /> XBT -0.05%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Cardano <br /> ADA +5.42%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin Cash <br /> BCH +5.75%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">EOS Token <br /> EOS +5.26%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Etherum <br /> ETH +6.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Litecoin <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Tron <br /> TRX +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Ripple <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <hr />

                            {/* lower nav */}

                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="LowerNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>

                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                March 27(100x)1699.5<i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                June 26(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-question"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                    </ul>
                                </div>
                            </nav>





                        </div>



                        <div className="row">
                            {/* table */}
                            <div className="col-md-4 " id="table_" >
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                    <table class="table table-responsive small">
                                        <span>
                                            Orderbooks XBT USD
                                    </span>
                                        <thead>
                                            <tr>
                                                <th>Total </th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Price</th>
                                                <th>Size</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>





                                        </tbody>

                                    </table>
                                </div>

                            </div>



                            <div className="col-md-4" id="garph1_">
                                <MyChart />
                            </div>

                            <div className="col-md-4 small" id="graph2_">
                                <LineChart />
                            </div>

                        </div>
                    </div>



                    {/* footer */}
                    <div className="row small" id="bg-bitmax">
                        <br />
                        <div className="col-md-3 offset-1 " id="istportion_">

                            <div className="col-md-12">
                                <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                            </div>
                            <div className="col-md-12">
                                <p>
                                    BitMEX is a P2P crypto-products trading platform.
                                    BitMEX and the mobile apps issued under BMEX are wholly owned and operated by HDR
                                    Global Trading Limited, a Republic of Seychelles incorporated entity or its relevant authorised affiliates.
                                </p>
                            </div>
                            <div className="col-md-12">
                                <button type="button" class="btn btn-link">Cryptocurrency charts by TradingView.</button>
                            </div>
                        </div>

                        <div className="col-md-2" id="2ndportion_">
                            <div className="col-md-12">
                                <strong><p>About</p></strong>
                            </div>

                            <p>About the Team</p>
                            <p>Affliated Program</p>
                            <p>Carrier With Bitmex</p>
                            <p>Privacy Notice</p>
                            <p>Security</p>
                            <p>Terms of Services</p>

                        </div>
                        <div className="col-md-2" id="3rdportion_">
                            <div className="col-md-12">
                                <strong><p>Data</p></strong>
                            </div>

                            <p>Fees</p>


                            <p>Bitcoins/USD</p>


                            <p>Ethereum / USD</p>
                        </div>
                        <div className="col-md-2" id="4thportion_">
                            <div className="col-md-12">
                                <strong><p>Reference</p></strong>
                            </div>
                            <p>API</p>
                            <p>FQA</p>
                            <p>Features Quide</p>
                            <p>Knowledge</p>
                            <p>Trading on bitmex</p>
                        </div>
                        <div className="col-md-2" id="5thportion_">
                            <div className="col-md-12">
                                <strong><p>Contact us</p></strong>
                            </div>
                            <p>Contact</p>
                            <p>PGB Communication</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default BitMax

import React, { Component } from 'react'
import './App.css';
import MyChart from './graphs/mychart'
import { LineChart } from './graphs/linechart';
export class BitMax extends Component {
    render() {

        return (
            <div className="Container ">

                <div className="row">
                    {/* header */}
                    <header className="col-lg-12 form-inline text_header  header_ " id="bg-bitmax">
                        {/* imgae */}
                        <div className=" col-lg-3  col-sm-12"  >
                            <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                        </div>
                        {/* imgae end */}



                        {/* menu */}

                        <div className="col-lg-4 col-sm-12" >
                            <nav class=" navbar navbar-expand-lg " id="bg-bitmax" >
                                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon forecolor">Menu</span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Trade<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item active">
                                            <a class="nav-link" href="#"> Account<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contract</a>
                                        </li>


                                        <li class="nav-item">
                                            <a class="nav-link" href="#">References</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">API</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* menue ended */}

                        {/* header links */}

                        <div className="col-lg-5 col-sm-12 form-inline" >
                            <div className="col-lg-3 col-sm-3 col-xs-3 small border-left border-right " id="bg-bitmax">
                                <div className="col"><a>Total:0.0000XBT</a></div>
                                <div className="col"><a>Total:0.0000XBT</a></div>
                            </div >
                            <div className="col-lg-1 col-sm-1  col-xs-1" >
                                <i class=" dropdown-toggle-icon fa fa-fw fa-bullhorn"></i>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-left border-right">
                                <img src="./assets/img/usflag.png" class="flag-icon" />
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-right">
                                <a href="/app/support/contact" class="fa fa-question-circle _2HHdzcBx hidden-xs"></a>
                            </div>
                            <div class="col-md-3 col-sm-3  col-xs-3 btn-group"  >
                                <button id="dropdown-Email" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Example@bitmex.com
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button class="dropdown-item" type="button">  Example@bitmex.com</button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com </button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com  </button>
                                </div>
                            </div>
                        </div>
                        {/* header links ended */}
                    </header>
                    {/* header ended */}



                    {/* sidebar */}



                    <div className="col-lg-3 text_ col-md-12 col-xs-12" id="sidebar_">


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




                    </div>

                    {/* sidebar ended */}

                    <div className="col-lg-9 " id="mainbodycontent_">
                        <div className="row ">
                            {/* uppernav */}
                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="upperNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin <br /> XBT -0.05%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Cardano <br /> ADA +5.42%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin Cash <br /> BCH +5.75%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">EOS Token <br /> EOS +5.26%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Etherum <br /> ETH +6.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Litecoin <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Tron <br /> TRX +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Ripple <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <hr />

                            {/* lower nav */}

                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="LowerNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>

                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                March 27(100x)1699.5<i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                June 26(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-question"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                    </ul>
                                </div>
                            </nav>





                        </div>



                        <div className="row">
                            {/* table */}
                            <div className="col-md-4 " id="table_" >
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                    <table class="table table-responsive small">
                                        <span>
                                            Orderbooks XBT USD
                                    </span>
                                        <thead>
                                            <tr>
                                                <th>Total </th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Price</th>
                                                <th>Size</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>





                                        </tbody>

                                    </table>
                                </div>

                            </div>



                            <div className="col-md-4" id="garph1_">
                                <MyChart />
                            </div>

                            <div className="col-md-4 small" id="graph2_">
                                <LineChart />
                            </div>

                        </div>
                    </div>



                    {/* footer */}
                    <div className="row small" id="bg-bitmax">
                        <br />
                        <div className="col-md-3 offset-1 " id="istportion_">

                            <div className="col-md-12">
                                <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                            </div>
                            <div className="col-md-12">
                                <p>
                                    BitMEX is a P2P crypto-products trading platform.
                                    BitMEX and the mobile apps issued under BMEX are wholly owned and operated by HDR
                                    Global Trading Limited, a Republic of Seychelles incorporated entity or its relevant authorised affiliates.
                                </p>
                            </div>
                            <div className="col-md-12">
                                <button type="button" class="btn btn-link">Cryptocurrency charts by TradingView.</button>
                            </div>
                        </div>

                        <div className="col-md-2" id="2ndportion_">
                            <div className="col-md-12">
                                <strong><p>About</p></strong>
                            </div>

                            <p>About the Team</p>
                            <p>Affliated Program</p>
                            <p>Carrier With Bitmex</p>
                            <p>Privacy Notice</p>
                            <p>Security</p>
                            <p>Terms of Services</p>

                        </div>
                        <div className="col-md-2" id="3rdportion_">
                            <div className="col-md-12">
                                <strong><p>Data</p></strong>
                            </div>

                            <p>Fees</p>


                            <p>Bitcoins/USD</p>


                            <p>Ethereum / USD</p>
                        </div>
                        <div className="col-md-2" id="4thportion_">
                            <div className="col-md-12">
                                <strong><p>Reference</p></strong>
                            </div>
                            <p>API</p>
                            <p>FQA</p>
                            <p>Features Quide</p>
                            <p>Knowledge</p>
                            <p>Trading on bitmex</p>
                        </div>
                        <div className="col-md-2" id="5thportion_">
                            <div className="col-md-12">
                                <strong><p>Contact us</p></strong>
                            </div>
                            <p>Contact</p>
                            <p>PGB Communication</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default BitMax

import React, { Component } from 'react'
import './App.css'
import MyChart from './graphs/mychart'
import { LineChart } from './graphs/linechart'
export class BitMax extends Component {
    render() {

        return (
            <div className="Container ">

                <div className="row">
                    {/* header */}
                    <header className="col-lg-12 form-inline text_header  header_ " id="bg-bitmax">
                        {/* imgae */}
                        <div className=" col-lg-3  col-sm-12"  >
                            <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                        </div>
                        {/* imgae end */}



                        {/* menu */}

                        <div className="col-lg-4 col-sm-12" >
                            <nav class=" navbar navbar-expand-lg " id="bg-bitmax" >
                                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon forecolor">Menu</span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Trade<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item active">
                                            <a class="nav-link" href="#"> Account<span class="sr-only">(current)</span></a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contract</a>
                                        </li>


                                        <li class="nav-item">
                                            <a class="nav-link" href="#">References</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#">API</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* menue ended */}

                        {/* header links */}

                        <div className="col-lg-5 col-sm-12 form-inline" >
                            <div className="col-lg-3 col-sm-3 col-xs-3 small border-left border-right " id="bg-bitmax">
                                <div className="col"><a>Total:0.0000XBT</a></div>
                                <div className="col"><a>Total:0.0000XBT</a></div>
                            </div >
                            <div className="col-lg-1 col-sm-1  col-xs-1" >
                                <i class=" dropdown-toggle-icon fa fa-fw fa-bullhorn"></i>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-left border-right">
                                <img src="./assets/img/usflag.png" class="flag-icon" />
                            </div>
                            <div className="col-lg-1 col-sm-1 col-xs-1 border-right">
                                <a href="/app/support/contact" class="fa fa-question-circle _2HHdzcBx hidden-xs"></a>
                            </div>
                            <div class="col-md-3 col-sm-3  col-xs-3 btn-group"  >
                                <button id="dropdown-Email" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Example@bitmex.com
                                </button>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <button class="dropdown-item" type="button">  Example@bitmex.com</button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com </button>
                                    <button class="dropdown-item" type="button">  Example@bitmex.com  </button>
                                </div>
                            </div>
                        </div>
                        {/* header links ended */}
                    </header>
                    {/* header ended */}



                    {/* sidebar */}



                    <div className="col-lg-3 text_ col-md-12 col-xs-12" id="sidebar_">


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




                    </div>

                    {/* sidebar ended */}

                    <div className="col-lg-9 " id="mainbodycontent_">
                        <div className="row ">
                            {/* uppernav */}
                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="upperNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin <br /> XBT -0.05%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Cardano <br /> ADA +5.42%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Bitcoin Cash <br /> BCH +5.75%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">EOS Token <br /> EOS +5.26%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Etherum <br /> ETH +6.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Litecoin <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Tron <br /> TRX +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">Ripple <br /> LTC +2.60%
                                            <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <hr />

                            {/* lower nav */}

                            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="LowerNav_">
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>

                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                March 27(100x)1699.5<i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                June 26(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-arrow-up"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>
                                        <li class="nav-item ">
                                            <strong><a class="nav-link" href="#!">
                                                <i class=" dropdown-toggle-icon fa fa-dot-circle-0"></i>
                                                Perpetual(100x)9699.5 <i class=" dropdown-toggle-icon fa fa-question"></i>
                                                <span class="sr-only">(current)</span></a></strong>
                                        </li>


                                    </ul>
                                </div>
                            </nav>





                        </div>



                        <div className="row">
                            {/* table */}
                            <div className="col-md-4 " id="table_" >
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                    <table class="table table-responsive small">
                                        <span>
                                            Orderbooks XBT USD
                                    </span>
                                        <thead>
                                            <tr>
                                                <th>Total </th>
                                                <th>Size</th>
                                                <th>Price</th>
                                                <th>Price</th>
                                                <th>Size</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>
                                            <tr>
                                                <td>20.0024</td>
                                                <td>29.223</td>
                                                <td>19.203</td>
                                                <td>49.223</td>
                                                <td>99.223</td>
                                                <td>09.223</td>
                                            </tr>





                                        </tbody>

                                    </table>
                                </div>

                            </div>



                            <div className="col-md-4" id="garph1_">
                                <MyChart />
                            </div>

                            <div className="col-md-4 small" id="graph2_">
                                <LineChart />
                            </div>

                        </div>
                    </div>



                    {/* footer */}
                    <div className="row small" id="bg-bitmax">
                        <br />
                        <div className="col-md-3 offset-1 " id="istportion_">

                            <div className="col-md-12">
                                <img id="logo" src="https://static.bitmex.com/assets/img/bitmex-logo-v2-alt-white.png" />
                            </div>
                            <div className="col-md-12">
                                <p>
                                    BitMEX is a P2P crypto-products trading platform.
                                    BitMEX and the mobile apps issued under BMEX are wholly owned and operated by HDR
                                    Global Trading Limited, a Republic of Seychelles incorporated entity or its relevant authorised affiliates.
                                </p>
                            </div>
                            <div className="col-md-12">
                                <button type="button" class="btn btn-link">Cryptocurrency charts by TradingView.</button>
                            </div>
                        </div>

                        <div className="col-md-2" id="2ndportion_">
                            <div className="col-md-12">
                                <strong><p>About</p></strong>
                            </div>

                            <p>About the Team</p>
                            <p>Affliated Program</p>
                            <p>Carrier With Bitmex</p>
                            <p>Privacy Notice</p>
                            <p>Security</p>
                            <p>Terms of Services</p>

                        </div>
                        <div className="col-md-2" id="3rdportion_">
                            <div className="col-md-12">
                                <strong><p>Data</p></strong>
                            </div>

                            <p>Fees</p>


                            <p>Bitcoins/USD</p>


                            <p>Ethereum / USD</p>
                        </div>
                        <div className="col-md-2" id="4thportion_">
                            <div className="col-md-12">
                                <strong><p>Reference</p></strong>
                            </div>
                            <p>API</p>
                            <p>FQA</p>
                            <p>Features Quide</p>
                            <p>Knowledge</p>
                            <p>Trading on bitmex</p>
                        </div>
                        <div className="col-md-2" id="5thportion_">
                            <div className="col-md-12">
                                <strong><p>Contact us</p></strong>
                            </div>
                            <p>Contact</p>
                            <p>PGB Communication</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default BitMax

