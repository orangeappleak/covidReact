import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CovidInfo from './CovidInfo.js';
import CovidContinents from './covid_continents.js';
import VirusInfo from './corona_info.js';
import Footer from './footer.js'


ReactDOM.render(
  [<CovidInfo />,<VirusInfo />,<CovidContinents />,<Footer />],
  document.getElementById('root')
)
