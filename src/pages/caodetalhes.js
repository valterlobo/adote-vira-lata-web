import React from 'react';
import { useSelector } from 'react-redux'
import DetailComponent from '../components/PortfolioDetailComponent';
import LetsWork from '../components/LetsWorkTogether';
import { useParams } from 'react-router-dom';

const CaoDetalhe = ({ match }) => {

    let param = useParams();
    console.log( param.id );

    const cao = useSelector(state =>
        state.caozinhos.find(w => w.id == param.id )
      )
    
      if (!cao) {
        return (
          <section>
            <h2>work not found!</h2>
          </section>
        )
      }

    return(
        <>  
            <DetailComponent item={cao}/>
            <LetsWork/>
        </>
    );
}


export default CaoDetalhe;