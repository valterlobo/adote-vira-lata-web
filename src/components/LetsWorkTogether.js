import React from 'react';
import { Link } from 'react-router-dom';

const LetsWorkTogether = () => {
    return( 
        <section className="lead">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="lead-title text-white mb-5 mt-4">
                            <h1 className="title-font">
                              Adote a alegria 
                            </h1>
                            <p className="mt-4 mb-4 title-font-2">
                            Encontre o seu amigo
                            </p>
                            <Link to="/adote">
                                <button className="btn text-white">
                                    Adote 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LetsWorkTogether