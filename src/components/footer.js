import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

            <div className="row small" id="bg-bitmax">
                        <br />
                        <div className="col-md-3 col-10 offset-1 " id="istportion_">

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

                        <div className="col-md-2 col-6" id="_2ndportion_">
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
                        <div className="col-md-2 col-6" id="_3rdportion_">
                            <div className="col-md-12">
                                <strong><p>Data</p></strong>
                            </div>

                            <p>Fees</p>


                            <p>Bitcoins/USD</p>


                            <p>Ethereum / USD</p>
                        </div>
                        <div className="col-md-2 col-6" id="_4thportion_">
                            <div className="col-md-12">
                                <strong><p>Reference</p></strong>
                            </div>
                            <p>API</p>
                            <p>FQA</p>
                            <p>Features Quide</p>
                            <p>Knowledge</p>
                            <p>Trading on bitmex</p>
                        </div>
                        <div className="col-md-2 col-6" id="_5thportion_">
                            <div className="col-md-12">
                                <strong><p>Contact us</p></strong>
                            </div>
                            <p>Contact</p>
                            <p>PGB Communication</p>
                        </div>


                    </div>
           
        )
    }
}

export default Footer
