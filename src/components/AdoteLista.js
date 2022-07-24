import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageContentHover from 'react-image-hover';

class AdoteLista extends Component {

    render() {
        return(
            <>  
                <section className="portfolio">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="portfolio-title text-white mb-5 mt-4">
                                    <h1 className="title-font">
                                        Adote a alegria.
                                    </h1>
                                    <p className="mt-4 mb-4 title-font-2">
                                    Encontre seu amigo.
                                    </p>
                                </div>
                            </div>
                            {this.props.items.map(image => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6" key={image.id} >
                                    <div className="portfolio-thumb">
                                        <Link to={`/adote/${image.id}`}>  
                                            <ImageContentHover
                                                className="center-block"
                                                image = {image.src}
                                                content={{
                                                    title: [image.nome ],
                                                    body: "Idade: " +  image.idade + "\n Porte:" + image.porte 
                                                    
                                                }} 
                                                effect="fadeIn"
                                            />
                                        </Link>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.caozinhos
    }
}


export default connect(mapStateToProps) (AdoteLista);