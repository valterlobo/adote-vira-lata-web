import React from 'react';
import { useSelector } from 'react-redux'
import DetailComponent from '../components/PortfolioDetailComponent';
import LetsWork from '../components/LetsWorkTogether';
import { useParams } from 'react-router-dom';
import { works } from '../data/works';

const PortfolioDetail = ({ match }) => {

    let param = useParams();
    console.log( param.id );

    const work = useSelector(state =>
        state.works.find(w => w.id == param.id )
      )
    
      if (!work) {
        return (
          <section>
            <h2>work not found!</h2>
          </section>
        )
      }

    return(
        <>  
            <DetailComponent item={work}/>
            <LetsWork/>
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


export default PortfolioDetail;