import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

//

//withRouter:
//https://reactrouter.com/docs/en/v6/getting-started/faq#what-happened-to-withrouter-i-need-it

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
//

// It will scroll the window up on every navigation

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.router.location.pathname !== prevProps.router.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
