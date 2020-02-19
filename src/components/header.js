import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (

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

        )
    }
}

export default Header
