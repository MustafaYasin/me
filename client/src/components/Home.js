import React from "react";
import "../css/App.css";

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        {this.renderHello()}
        {this.renderContact()}
      </div>
    );
  }

  renderHello() {

    const lmu = "https://www.en.uni-muenchen.de/index.html";
    const uts = "https://www.uts.edu.au/";
    const kamijo = "http://kmj.iis.u-tokyo.ac.jp/e_index.html";
    const pku = "http://english.pku.edu.cn/";
    const siemens = "https://new.siemens.com/de/de.html";
    const bcg = "https://www.bcg.com/de-de/";
    const adobe = "https://www.adobe.com/de/";
    const eth = "https://ai.ethz.ch/";
    

    return (
      <div>
        <h1>Hello!</h1>
        <p>
          I'm Mustafa, a graduate computer science student at <a href={lmu}>University of Munich</a>.
          After graduating with a degree in Mechatronics in 2018, I spent a year abroad at <a href={uts}>The University of Technology Sydney</a> and <a href={pku}>Peking University</a>.
        </p>

        <p>
          Previously, I worked as a research intern for <a href={kamijo}>The University of Tokyo (Kamijo Lab)</a>,
          an undergraduate research assistant for <a href={pku}>Peking University (POSS Lab)</a>,
          a software engineering intern/working student for <a href={siemens}>Siemens</a>, and as a working student for <a href={bcg}>Boston Consulting Group</a>. Currently, I'm employed as a working student at <a href={adobe}>Adobe</a> doing my master's thesis at <a href={eth}>ETH Zurich AI Center</a>.
          I'm interested in computer vision, algorithms, and education.
        </p>  
        
        <p>
        In my free time, I travel and do different types of sport. After high school, I took a year off and traveled around Europe, where I learned a lot and was able to broaden my horizons. 
        During this year, I worked as a waiter and a sneaker seller.
        </p>
        
      </div>
    );
  }

  renderContact() {
    return (
      <div>
        <h2>Contact Me</h2>
        <ul>
          <li>
            You can reach me at <a href="mailto:hello@mustafayasin.com">hello@mustafayasin.com</a>.
          </li>
        </ul>
      </div>
    );
  }

}
