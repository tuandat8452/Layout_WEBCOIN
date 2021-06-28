import React, { Component } from "react";
import logo from "../../../Asset/Image/logo_zurich.png";
import banner from "../../../Asset/Image/banner_team_page.jpg";
import { Link } from "react-router-dom";
class HeaderTeam extends Component {
  render() {
    return (
      <div className="f-header">
        <div className="f-header_bar">
          <div className="container">
            <div className="row">
              <div className="col-xs-7 col-sm-3 col-md-3 col-lg-3 f-logo clearfix">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <Link to="/">
                    <img src={logo} alt />
                  </Link>
                </div>
              </div>
              <div className="f-menu_toggle">
                {" "}
                <i id="f-menu_toggle" className="fa fa-bars" />
              </div>
              <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 f-nav_sec">
                {/* Add Class f-nav_v2 FOR Version 2 */}
                <div className="f-nav">
                  <nav>
                    <ul>
                      <li className="f-has_child">
                        {" "}
                        <Link to="/">Home</Link>
                      </li>
                      <li className>
                        {" "}
                        <Link to="about">About</Link>
                      </li>
                      <li className="f-has_child">
                        {" "}
                        <Link to="/service">Service</Link>
                        <ul>
                          <li>
                            <Link to="service_detail">Service single</Link>
                          </li>
                        </ul>
                      </li>
                      <li className>
                        {" "}
                        <Link to="/ico">ICO</Link>
                      </li>
                      <li className="f-has_child f-active">
                        {" "}
                        <Link href="#">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                          <li>
                            <Link to="partner">Our Partners</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="f-has_child">
                        {" "}
                        <Link to="/blog">Blog</Link>
                        <ul>
                          <li>
                            <Link to="/blog">Blog Grid Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/side_blog">Blog List Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/blog_full">Blog Fullwidth</Link>
                          </li>
                          <li>
                            <Link to="blog_detail">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className>
                        {" "}
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li className="quote_btn">
                        {" "}
                        <a href="#">GET A Quote?</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="f-banner_title">
          <img
            src={banner}
            className="img-responsive"
            alt
          />
          <div className="f-inner_title container">
            <div className="row">
              <ul className="f-breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <span>Pages</span>
                </li>
              </ul>
              <h1>Our team</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTeam;
