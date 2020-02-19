import React, { Component } from 'react'
import './App.css';

import { Header } from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';
import Footer from './components/footer';
export class BitMax extends Component {
    render() {

        return (
            <div className="Container ">
                <div className="row">
                    <Header />
                    <div className="col-lg-3 text_ col-md-12 col-xs-12" id="sidebar_">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9 " id="mainbodycontent_">
                        <MainContent />

                    </div>
                    <Footer />

                </div>
            </div>
        )
    }
}

export default BitMax




































