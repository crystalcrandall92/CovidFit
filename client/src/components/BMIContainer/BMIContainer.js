import React from "react";
import {Helmet} from "react-helmet";
import 'react-widgets/dist/css/react-widgets.css';

 
class BMIContainer extends React.Component {


  render () {
    return (
        <div className="BMIContainer">
            <Helmet>
            <div class="omni-calculator" data-calculator="health/rmr" data-width="300" data-config='{"height":{"unitDefault":"ftinch"},"weight":{"unitDefault":"lb"}}' data-currency="USD" data-show-row-controls="false" data-version="3" data-t="1610331576680">
  <div class="omni-calculator-header">RMR Calculator - Resting Metabolic Rate</div>
  <div class="omni-calculator-footer">
    <a href="https://www.omnicalculator.com/health/rmr" target="_blank" rel="noopener noreferrer"><img alt="Omni" class="omni-calculator-logo" src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg" /></a>
  </div>
</div>
<script async src="https://cdn.omnicalculator.com/sdk.js"></script>
                </Helmet>
        </div>
    );
  }
};

export default BMIContainer;