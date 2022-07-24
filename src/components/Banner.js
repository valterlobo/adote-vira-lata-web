import React from 'react';
import Logo from '../img/cao-banner.png';
import '../App.scss';
import { Link } from 'react-router-dom';

function Banner () {
    
    return (
      <div className="banner">
          <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="banner-text text-left mt-4">
                        <h1 className="title-font">
                              Adote a Alegria
                            <span className="text-customer"> Encontre o seu amigo</span> 
                        </h1>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-12">
                        <div className="mb-5 mt-4">
                        <Link to="/adote">
                                <button className="btn text-white">
                                    Encontre
                                </button>
                        </Link>                     

                        </div>
                    </div>
                </div>
                
                </div>
                <div className="banner-image-mobile">
                    <div className="col-xl-7 col-lg-6 d-lg-block">
                        <div className="banner-area">
                            <img className="banner-image" src={Logo} alt="images"/>
                        </div>
                    </div>
                </div>
                <div className="banner-image-desktop col-xl-7 col-lg-6 d-lg-block">
                    <div className="banner-area">
                        <img className="banner-image" src={Logo} alt="images"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;