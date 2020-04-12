import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import { Icon } from '@ant-design/compatible'

import Courses from "./Courses";
import Home from "./Home";
import Projects from "./Projects";
import Section from "./Section";
import Analytics, { logResource } from "../Analytics";

/***import profile from "../assets/profile.png";
import "../css/App.css";***/

const ButtonGroup = Button.Group;

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
       {this.renderProfileImage()}
          {this.renderNavigation()}
          {this.renderRoutes()}
        </div>
      </Router>
    );
  }

  renderProfileImage() {
    return (
      <div className="profile">
        <div className="profile-name">Mustafa Yasin</div>
      </div>
    )
  }

  renderNavigation() {

    const links = (
      <Menu>
        <Menu.Item>
          <a onClick={() => logResource("resume")} href="/resume"><Icon type="file-text" /> Resume</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("github")} href="https://github.com/MustafaYasin"><Icon type="github" /> GitHub</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("linkedin")} href="https://www.linkedin.com/in/mustafayasin/"><Icon type="linkedin" /> LinkedIn</a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => logResource("Twitter")} href="https://twitter.com/darre1l"><Icon type="facebook" /> Twitter</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="navigation">
        <ButtonGroup>
          <Button><Link to="/">Home</Link></Button>
          <Button><Link to="/projects">Projects</Link></Button>
          <Button><Link to="/courses">Courses</Link></Button>
          <Dropdown overlay={links}>
            <Button>Links<Icon type="down" /></Button>
          </Dropdown>
        </ButtonGroup>
      </div>
    );
  }

  renderRoutes() {
    return (
      <div className="body">
        <Route path="/" component={Analytics} />
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/section" component={Section} />
      </div>
    );
  }

}
