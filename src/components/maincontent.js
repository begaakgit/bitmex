import React, { Component } from 'react'
import MyChart from '../graphs/mychart'
import { LineChart } from '../graphs/linechart';
 class MainContent extends Component {
    render() {
        return (
          <span>
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
          </span>
        )
    }
}

export default MainContent
