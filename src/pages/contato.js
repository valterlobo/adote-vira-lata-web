import React from 'react';


// service icons 
import icon1 from '../img/services/instaicon.png';
import mail from '../img/services/mail.png';
import seo from '../img/services/seo.png';
import content from '../img/services/content.png';
import share from '../img/services/share.png';
import web from '../img/services/web.png';


const Contato = () => {

    const serviceIcons = [
        {
            "id": "1",
            "title": "Instagram",
            "image": icon1,
            "description": "@adoteauau"
        },
        {
            "id": "2",
            "title": "Email",
            "image": mail,
            "description": "faleconosco@adoteauau.com.br"
        },
        {
            "id": "3",
            "title": "Endereço",
            "image": seo,
            "description": "Clube dos Au Au  Grupo de proteção aos animais de rua."
        },
        {
            "id": "4",
            "title": "Youtube",
            "image": content,
            "description": "@CanalAdoteAuAu."
        },
    ]

    return(
        <>
        <div className="services section-title mt-5">
            <div className="container text-white">
                <div className="row align-items-center">
                    <div className="col-md-7 mx-auto">
                        <div className="services-title mb-5 mt-5">
                            <h1 className="title-font title-font-size">
                                Contatos
                            </h1>
                            <p className="title-text mt-4 mb-4 title-font-2">
                                Vamos conversar ? 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {
                        serviceIcons.map(service => (
                            <div className="col-12 col-lg-6" key={service.id}>
                                <div className="service-boxes">
                                    <div className="service-icon">
                                    <img className="service-icon-img mb-3" src={service.image} alt="instagram"/>
                                    </div>
                                    <div className="service-info-title">
                                        <h3 className="service-name title-font-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="service-info">
                                        <p className="service-description text-left title-font-2 mt-3">
                                        {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </>
    );
}

export default Contato;