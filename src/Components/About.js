import React, { Component } from "react";
import Fade from "react-reveal";
import Flip from "react-reveal/Flip";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="columns align-center">
            {/* <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              />
            </div> */}
            <div className="row ">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="">
                  <h2>Contact Details</h2>
                  <p className="address">
                    {/* <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span> */}
                    <br />
                    <span><a href="tel:08144196054"><i className="fa fa-phone fontawesome"></i>{phone}</a></span>
                    <br />
                    <span><a href="mailto:classicdev@gmail.com"><i className="fa fa-envelope fontawesome "></i>{email}</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
