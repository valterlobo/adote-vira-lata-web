import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';



const Body = () => {

    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">     
                                
                                Ótima oportunidade para voce conhecer ao vivo nossos cãezinhos.
                                    <br/>
                                   
                                </h2>
                                <p className="mt-4 mb-4 title-font-2">
                                O Clube do Au Au , em parceria com pet shops, 
                                supermercados, shopping centers, 
                                dentre outros locais da capital paulista e cidades da
                                 grande São Paulo, 
                                realiza periodicamente eventos de adoção. 
                                    <br/>
                             
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
           

    
        </>
    );
}

export default Body;