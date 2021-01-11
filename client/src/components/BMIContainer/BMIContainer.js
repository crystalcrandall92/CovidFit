import React from "react";
import {Helmet} from "react-helmet";
import 'react-widgets/dist/css/react-widgets.css';

 
class BMIContainer extends React.Component {


  render () {
    return (
        <div className="BMIContainer">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <script type="text/javascript" async id="bmr-calculator" data-type="verywell-tool" data-vertical="verywellfit" src="https://www.verywellfit.com/static/4.190.0/components/tools/calculators/iframe-embed/embed.min.js?id=bmr-calculator"></script>
            </Helmet>
        </div>
    );
  }
};

export default BMIContainer;