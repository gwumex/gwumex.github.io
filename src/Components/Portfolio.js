import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      let projectUrl = projects.url;

      return (
        <div key={id++} className="columns portfolio-item item1">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}><a href={projectUrl}>{projects.title}</a></div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="400px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1><strong>Check Out My Works</strong></h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halve s-bgrid-thirds gridSmall cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
