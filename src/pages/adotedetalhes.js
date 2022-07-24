import React from 'react';
import { useSelector } from 'react-redux'
import LetsWork from '../components/LetsWorkTogether';
import { useParams } from 'react-router-dom';
import CaoDetalheComponente from  '../components/CaoDetalheComponente';

const AdoteDetalhe = ({ match }) => {
    
    let param = useParams();
    const cao = useSelector(state =>
        state.caozinhos.find(w => w.id == param.id )
      )
    
      if (!cao) {
        return (
          <section>
            <h2>caozinho not found!</h2>
          </section>
        )
      }

    return(
        <>  
            <CaoDetalheComponente item={cao}/>           
        </>
    );
}

/*const mapStateToProps = (state, { match }) => {
    
    console.log(match);
    //const { id } = useParams();
    // display the work detail who match with clicked image by checking id
    const item = state.works.find(item => item.id === +props.match.params.id);

    return { item }
}
export default connect(mapStateToProps, null) (PortfolioDetail);
*/


export default AdoteDetalhe;