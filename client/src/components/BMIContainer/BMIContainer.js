import React from "react";
import 'react-widgets/dist/css/react-widgets.css';

function BMIContainer() {

    return (
        <div className="content">
            <script type="text/javascript" async id="bmr-calculator" data-type="verywell-tool" data-vertical="verywellfit" src="https://www.verywellfit.com/static/4.190.0/components/tools/calculators/iframe-embed/embed.min.js?id=bmr-calculator"></script>
        </div>
    )
}


export default BMIContainer;