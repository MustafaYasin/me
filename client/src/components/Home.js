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
    const cds = "https://www.lmu-klinikum.de/radiologie/forschung/clinical-data-science/0e8a3ac188dad3f9";
    

    return (
      <div>
        <h1>Hello!</h1>
        <p>
         Hi, I'm Mustafa, a computer science graduate from the <a href={lmu}>University of Munich</a>. 
         My academic journey began with a degree in Mechatronics in 2018 and broadened with experiences at <a href={uts}>The University of Technology Sydney</a> and <a href={pku}>Peking University</a>.
        </p>

        <p>
          I've navigated a diverse professional landscape, including roles as a research intern at <a href={kamijo}>The University of Tokyo (Kamijo Lab)</a>, 
          an undergraduate research assistant at <a href={pku}>Peking University (POSS Lab)</a>, and a software engineering intern at <a href={siemens}>Siemens</a>. 
          As a working student at the <a href={bcg}>Boston Consulting Group</a>, I've also immersed myself in data.
        </p>
        
        <p>
          After a fulfilling tenure as a software engineer at <a href={adobe}>Adobe</a> and successfully defending my master's thesis at the <a href={eth}>ETH Zurich AI Center</a>, I'm now exploring the intricacies of deep learning and algorithms as a Computer Vision Research Assistant at the <a href={cds}>LMU Hospital (Clincal Data Science Group)</a>.
        </p>  
        
        <p>
          In addition to my passion for technology, I'm intrigued by the potential of entrepreneurship. I love contemplating innovative ideas and their transformative impact on society.
        </p>
        <p>
          Beyond the professional sphere, I enjoy traveling and partaking in various sports. A gap year after high school led me across Europe, opening my horizons and offering unique roles such as a waiter and a sneaker seller.
        </p>
        <p>
          Known for my positive outlook and approachable demeanor, I'm always ready for a lively exchange of ideas. So, whether it's discussing deep learning, brainstorming entrepreneurial ventures, or just swapping life experiences, feel free to reach out. I'm here to connect!
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
